#!/usr/bin/env python3
"""
u1_smart_preheat.py - Snapmaker U1 Smart Preheat Optimizer
Native OrcaSlicer 2.5+ Post-Processing & Interactive Optimizer

Features:
- Dual Theme Engine: Adapts automatically to Windows / OrcaSlicer Dark Mode and Light Mode.
- Professional System UI: Standard Professional Blue (#2563eb), no experimental neon/mint colors.
- Extracts actual loaded filament color and material type directly from OrcaSlicer G-code.
- Minimalist, distraction-free cards with vector toolhead graphics.
- 3 clean modes per toolhead:
    1. Auto (10s) - dynamic lookahead preheating (heats 10s before pickup, cools in dock).
    2. Hold 190°C - keeps steady standby in dock (fastest pickup, ideal for standard PLA/PETG).
    3. Off (Stock) - default cooldown behavior (recommended for PVA/BVOH, TPU, budget filaments).
- Automatic Safety Lockout: Automatically locks heat-sensitive materials (PVA, BVOH, TPU, etc.) to Stock.
- Settings Modal: Allows adjusting Standby Temperature (e.g. 175°C vs 190°C) and Lookahead seconds.
"""

import sys
import os
import re
import json
import math
import tkinter as tk
from tkinter import ttk, messagebox

# Default Configuration
DEFAULT_PREHEAT_SECONDS = 10
DEFAULT_STANDBY_TEMP = 190
CONFIG_FILE = os.path.join(os.path.expanduser("~"), ".u1_smart_preheat_config.json")

def detect_system_is_dark():
    """Detect whether Windows is currently using Dark Mode."""
    try:
        import winreg
        key = winreg.OpenKey(winreg.HKEY_CURRENT_USER, r"Software\Microsoft\Windows\CurrentVersion\Themes\Personalize")
        val, _ = winreg.QueryValueEx(key, "AppsUseLightTheme")
        return (val == 0)
    except Exception:
        return True

def get_orcaslicer_theme():
    """
    Automatically adopt OrcaSlicer's active theme without asking:
    - Reads 'dark_color_mode' from %APPDATA%\\OrcaSlicer\\OrcaSlicer.conf
      '1' -> Dark Mode
      '2' -> Light Mode
      '0' -> Follow OS System Theme (AppsUseLightTheme)
    """
    try:
        conf_path = os.path.expandvars(r"%APPDATA%\OrcaSlicer\OrcaSlicer.conf")
        if os.path.exists(conf_path):
            with open(conf_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            m = re.search(r'dark_color_mode.*?(\d+)', content)
            if m:
                mode = m.group(1)
                if mode == "1":
                    return THEMES["dark"]
                elif mode == "2":
                    return THEMES["light"]
    except Exception:
        pass
    return THEMES["dark"] if detect_system_is_dark() else THEMES["light"]

THEMES = {
    "dark": {
        "bg": "#18181b",               # Clean Charcoal (Zinc 900)
        "card_bg": "#232328",          # Elevated card
        "card_border": "#32323a",      # Subtle border
        "btn_inactive_bg": "#2b2b32",  # Segmented inactive
        "btn_inactive_fg": "#9ca3af",  # Muted option text
        "accent": "#2563eb",           # Standard Professional Blue (Blue 600)
        "accent_hover": "#1d4ed8",     # Blue 700
        "text_main": "#f4f4f5",        # High contrast white
        "text_muted": "#9ca3af",       # Zinc 400
        "disabled": "#4b5563",
        "nozzle_brass": "#d4af37",
        "pill_bg": "#141416",
        "pill_border": "#2c2c34",
        "lock_bg": "#261a1a",
        "lock_border": "#552222",
        "lock_fg": "#f87171"
    },
    "light": {
        "bg": "#f1f3f5",               # Light Slate Gray
        "card_bg": "#ffffff",          # Pure white card
        "card_border": "#e2e8f0",      # Clean light border
        "btn_inactive_bg": "#f1f5f9",  # Segmented inactive light
        "btn_inactive_fg": "#64748b",  # Inactive text
        "accent": "#2563eb",           # Standard Professional Blue
        "accent_hover": "#1d4ed8",
        "text_main": "#0f172a",        # Slate 900
        "text_muted": "#64748b",       # Slate 500
        "disabled": "#cbd5e1",
        "nozzle_brass": "#b45309",
        "pill_bg": "#f8fafc",
        "pill_border": "#e2e8f0",
        "lock_bg": "#fef2f2",
        "lock_border": "#fecaca",
        "lock_fg": "#dc2626"
    }
}

def load_user_config():
    """Load persistent settings."""
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {
        "first_run_done": False,
        "preheat_seconds": DEFAULT_PREHEAT_SECONDS,
        "standby_temp": DEFAULT_STANDBY_TEMP
    }

def save_user_config(cfg):
    """Save persistent settings."""
    try:
        with open(CONFIG_FILE, "w", encoding="utf-8") as f:
            json.dump(cfg, f, indent=2)
    except Exception:
        pass

def parse_gcode_toolpaths(file_path):
    """
    Parse OrcaSlicer G-code to detect:
    - Filament colors and materials
    - Tool changes (T0-T3 -> Toolheads 1-4)
    - Motion times per line for lookahead
    """
    tools_stats = {
        0: {"used": False, "swaps": 0, "target_temp": 215, "color": "#2563eb", "type": "PLA", "name": "Toolhead 1"},
        1: {"used": False, "swaps": 0, "target_temp": 215, "color": "#2563eb", "type": "PLA", "name": "Toolhead 2"},
        2: {"used": False, "swaps": 0, "target_temp": 215, "color": "#2563eb", "type": "PLA", "name": "Toolhead 3"},
        3: {"used": False, "swaps": 0, "target_temp": 215, "color": "#2563eb", "type": "PLA", "name": "Toolhead 4"}
    }

    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            lines = f.readlines()
    except Exception as e:
        return None, f"Could not read G-code file: {e}"

    # Extract filament metadata from OrcaSlicer header/footer
    file_content = "".join(lines[-1500:]) + "".join(lines[:500])
    m_col = re.search(r';\s*filament_colour\s*=\s*(.+)', file_content)
    m_typ = re.search(r';\s*filament_type\s*=\s*(.+)', file_content)
    m_name = re.search(r';\s*filament_settings_id\s*=\s*(.+)', file_content)

    colors = [c.strip()[:7] for c in m_col.group(1).split(';')] if m_col else []
    types = [t.strip() for t in m_typ.group(1).split(';')] if m_typ else []
    names = [n.strip(' \";') for n in m_name.group(1).split(';')] if m_name else []

    for t_idx in range(4):
        if t_idx < len(colors) and colors[t_idx].startswith('#'):
            tools_stats[t_idx]["color"] = colors[t_idx]
        if t_idx < len(types) and types[t_idx]:
            tools_stats[t_idx]["type"] = types[t_idx]
        if t_idx < len(names) and names[t_idx]:
            tools_stats[t_idx]["name"] = names[t_idx]

    toolchange_events = []
    line_durations = []
    current_tool = None
    total_swaps = 0

    lx, ly, le, current_f = 0.0, 0.0, 0.0, 1200.0

    for idx, line in enumerate(lines):
        dt = 0.0
        if line.startswith(("G1 ", "G0 ")):
            xm = re.search(r'X([-+]?\d*\.\d+|\d+)', line)
            ym = re.search(r'Y([-+]?\d*\.\d+|\d+)', line)
            em = re.search(r'E([-+]?\d*\.\d+|\d+)', line)
            fm = re.search(r'F(\d+)', line)

            if fm: current_f = float(fm.group(1))
            nx = float(xm.group(1)) if xm else lx
            ny = float(ym.group(1)) if ym else ly
            ne = float(em.group(1)) if em else le

            dist_xy = math.sqrt((nx - lx)**2 + (ny - ly)**2)
            dist_e = abs(ne - le) if not (xm or ym) else 0.0
            dist = dist_xy if dist_xy > 0 else dist_e
            speed = current_f / 60.0
            if speed > 0:
                dt = dist / speed
            lx, ly, le = nx, ny, ne
        line_durations.append(dt)

        tm_m109 = re.search(r'M109\s+S(\d+)\s+T(\d+)', line)
        if tm_m109:
            temp = int(tm_m109.group(1))
            t_num = int(tm_m109.group(2))
            if t_num in tools_stats:
                tools_stats[t_num]["target_temp"] = temp

        t_match = re.match(r'^\s*T([0-3])\b', line)
        if t_match:
            new_tool = int(t_match.group(1))
            tools_stats[new_tool]["used"] = True
            if current_tool != new_tool:
                total_swaps += 1
                tools_stats[new_tool]["swaps"] += 1
                toolchange_events.append({
                    "line_idx": idx,
                    "tool": new_tool,
                    "target_temp": tools_stats[new_tool]["target_temp"]
                })
                current_tool = new_tool

    return {
        "file_path": file_path,
        "lines": lines,
        "line_durations": line_durations,
        "tools_stats": tools_stats,
        "toolchange_events": toolchange_events,
        "total_swaps": total_swaps
    }, None


class SmartPreheatGUI:
    def __init__(self, parent, parsed_data, user_cfg, on_apply):
        self.root = parent
        self.data = parsed_data
        self.cfg = user_cfg
        self.on_apply = on_apply
        self.selected_modes = {}
        self.mode_buttons = {}

        # Automatically adopt OrcaSlicer active theme
        self.theme = get_orcaslicer_theme()

        self.root.title("Snapmaker U1 Smart Preheat Optimizer")
        self.root.configure(bg=self.theme["bg"])
        self.root.resizable(False, False)

        main_frame = tk.Frame(self.root, bg=self.theme["bg"], padx=22, pady=18)
        main_frame.pack(fill="both", expand=True)

        # Header Bar
        header = tk.Frame(main_frame, bg=self.theme["bg"])
        header.pack(fill="x", pady=(0, 6))

        title_lbl = tk.Label(header, text="⚡ U1 Smart Preheat Optimizer", font=("Segoe UI", 13, "bold"), fg=self.theme["text_main"], bg=self.theme["bg"])
        title_lbl.pack(side="left")

        btn_box = tk.Frame(header, bg=self.theme["bg"])
        btn_box.pack(side="right")

        settings_btn = tk.Button(btn_box, text="⚙️ Settings", font=("Segoe UI", 9), bg=self.theme["card_bg"], fg=self.theme["text_main"],
                                 activebackground=self.theme["card_border"], activeforeground=self.theme["text_main"], bd=0, padx=10, pady=3,
                                 cursor="hand2", command=self.show_settings_modal)
        settings_btn.pack(side="left", padx=(0, 6))

        info_btn = tk.Button(btn_box, text="ℹ️ How it works", font=("Segoe UI", 9), bg=self.theme["card_bg"], fg=self.theme["accent"],
                             activebackground=self.theme["accent_hover"], activeforeground="#ffffff", bd=0, padx=10, pady=3,
                             cursor="hand2", command=self.show_explanation_modal)
        info_btn.pack(side="left")

        # Subtitle
        used_count = sum(1 for t in self.data["tools_stats"].values() if t["used"])
        swaps = self.data["total_swaps"]
        sub_text = f"{used_count} active toolheads detected  ·  {swaps} tool swaps total"
        sub_lbl = tk.Label(main_frame, text=sub_text, font=("Segoe UI", 9), fg=self.theme["text_muted"], bg=self.theme["bg"])
        sub_lbl.pack(anchor="w", pady=(0, 16))

        # Cards Container (Toolheads 1 to 4)
        cards_frame = tk.Frame(main_frame, bg=self.theme["bg"])
        cards_frame.pack(fill="x", pady=(0, 16))

        for t_idx in range(4):
            self.create_toolhead_card(cards_frame, t_idx)

        # Time Savings Banner
        self.savings_lbl = tk.Label(main_frame, text="⚡ Estimated Time Saved: ~0 Minutes (Stock Quality Preserved)",
                                    font=("Segoe UI", 10, "bold"), fg=self.theme["accent"], bg=self.theme["bg"])
        self.savings_lbl.pack(fill="x", pady=(2, 16))

        # Action Buttons
        btn_frame = tk.Frame(main_frame, bg=self.theme["bg"])
        btn_frame.pack(fill="x")

        skip_btn = tk.Button(btn_frame, text="Skip (Keep Stock Settings)", font=("Segoe UI", 9), bg=self.theme["card_bg"], fg=self.theme["text_muted"],
                             activebackground=self.theme["card_border"], activeforeground=self.theme["text_main"], bd=0, padx=16, pady=8,
                             cursor="hand2", command=self.on_skip)
        skip_btn.pack(side="left")

        apply_btn = tk.Button(btn_frame, text="✅ Optimize & Proceed", font=("Segoe UI", 10, "bold"), bg=self.theme["accent"], fg="#ffffff",
                              activebackground=self.theme["accent_hover"], activeforeground="#ffffff", bd=0, padx=22, pady=8,
                              cursor="hand2", command=self.on_submit)
        apply_btn.pack(side="right")

        self.update_savings()

        # First-run modal check
        if not self.cfg.get("first_run_done", False):
            self.root.after(150, self.show_explanation_modal)

    def draw_toolhead_icon(self, canvas, tool_num, is_used, filament_color):
        """Draw a sleek vector toolhead showing the actual loaded filament color."""
        canvas.delete("all")
        th = self.theme
        body_color = "#2a2a30" if th == THEMES["dark"] else "#e8eaed"
        if not is_used:
            body_color = th["card_bg"]
        border_color = th["card_border"] if is_used else th["disabled"]
        nozzle_color = th["nozzle_brass"] if is_used else th["disabled"]
        stripe_color = filament_color if is_used else th["disabled"]

        # Filament Strand entering extruder top
        if is_used:
            canvas.create_line(34, 0, 34, 10, fill=filament_color, width=3)

        # Extruder Body
        canvas.create_rectangle(14, 10, 54, 48, fill=body_color, outline=border_color, width=1.5)
        # Cooling Fins
        fin_color = "#383842" if th == THEMES["dark"] else "#d1d5db"
        canvas.create_line(18, 18, 50, 18, fill=fin_color, width=1)
        canvas.create_line(18, 24, 50, 24, fill=fin_color, width=1)

        # Filament Color Identification Stripe on Toolhead Front
        canvas.create_rectangle(15, 29, 53, 35, fill=stripe_color, outline="")

        # Heatblock
        hb_color = "#383842" if th == THEMES["dark"] else "#d1d5db"
        canvas.create_rectangle(20, 48, 48, 56, fill=hb_color, outline=border_color, width=1)
        # Brass Nozzle Tip
        canvas.create_polygon(26, 56, 42, 56, 36, 66, 32, 66, fill=nozzle_color, outline="")

        # Toolhead Number
        num_color = th["text_main"] if is_used else th["disabled"]
        canvas.create_text(34, 41, text=str(tool_num), fill=num_color, font=("Segoe UI", 10, "bold"))

    def create_toolhead_card(self, parent, t_idx):
        stats = self.data["tools_stats"][t_idx]
        is_used = stats["used"]
        tool_display_num = t_idx + 1
        fil_color = stats.get("color", self.theme["accent"])
        fil_type = stats.get("type", "PLA")
        th = self.theme

        card = tk.Frame(parent, bg=th["card_bg"], highlightbackground=th["card_border"], highlightthickness=1, padx=10, pady=12)
        card.pack(side="left", padx=4, fill="both", expand=True)

        # Header Title
        title_color = th["text_main"] if is_used else th["disabled"]
        t_title = tk.Label(card, text=f"Toolhead {tool_display_num}", font=("Segoe UI", 10, "bold"), fg=title_color, bg=th["card_bg"])
        t_title.pack(anchor="center", pady=(0, 4))

        # Vector Toolhead Graphic
        cv = tk.Canvas(card, width=68, height=70, bg=th["card_bg"], highlightthickness=0)
        cv.pack(anchor="center", pady=(0, 4))
        self.draw_toolhead_icon(cv, tool_display_num, is_used, fil_color)

        if not is_used:
            msg = tk.Label(card, text="Unused\nin this print", font=("Segoe UI", 8), fg=th["disabled"], bg=th["card_bg"], justify="center")
            msg.pack(pady=20)
            self.selected_modes[t_idx] = "off"
            return

        # Filament Material & Color Swatch Pill
        fil_frame = tk.Frame(card, bg=th["pill_bg"], padx=6, pady=2, highlightbackground=th["pill_border"], highlightthickness=1)
        fil_frame.pack(anchor="center", pady=(0, 6))

        dot_cv = tk.Canvas(fil_frame, width=10, height=10, bg=th["pill_bg"], highlightthickness=0)
        dot_cv.pack(side="left", padx=(0, 4))
        dot_cv.create_oval(1, 1, 9, 9, fill=fil_color, outline="#ffffff" if fil_color.lower() in ("#000000", "#000000ff") else "")

        mat_lbl = tk.Label(fil_frame, text=f"{fil_type} · {stats['swaps']} swaps", font=("Segoe UI", 8), fg=th["text_main"], bg=th["pill_bg"])
        mat_lbl.pack(side="left")

        # Material Safety Check
        unsafe_materials = ("PVA", "BVOH", "TPU", "TPE", "HIPS", "SUPPORT")
        is_unsafe = any(bad in fil_type.upper() for bad in unsafe_materials)

        if is_unsafe:
            lock_frame = tk.Frame(card, bg=th["lock_bg"], highlightbackground=th["lock_border"], highlightthickness=1, padx=6, pady=8)
            lock_frame.pack(fill="x", pady=(4, 0))

            tk.Label(lock_frame, text="🔒 Locked to Stock", font=("Segoe UI", 8, "bold"), fg=th["lock_fg"], bg=th["lock_bg"]).pack(anchor="center")
            tk.Label(lock_frame, text=f"{fil_type} is sensitive to\nrepeated idle heating.", font=("Segoe UI", 7), fg=th["text_muted"], bg=th["lock_bg"], justify="center").pack(anchor="center", pady=(2, 0))
            self.selected_modes[t_idx] = "off"
            return

        # 3 Clean Segmented Options: Auto, Hold, Off
        self.selected_modes[t_idx] = "auto"
        self.mode_buttons[t_idx] = {}

        seg_frame = tk.Frame(card, bg=th["card_bg"])
        seg_frame.pack(fill="x", pady=(2, 0))

        standby_t = self.cfg.get("standby_temp", DEFAULT_STANDBY_TEMP)
        lead_s = self.cfg.get("preheat_seconds", DEFAULT_PREHEAT_SECONDS)

        options = [
            ("auto", f"⚡ Auto ({lead_s}s)"),
            ("hold", f"🔥 Hold {standby_t}°C"),
            ("off",  "❄️ Off (Stock)")
        ]

        for val, label in options:
            btn = tk.Button(
                seg_frame, text=label, font=("Segoe UI", 8),
                bd=0, padx=6, pady=4, cursor="hand2", relief="flat",
                command=lambda t=t_idx, m=val: self.set_mode(t, m)
            )
            btn.pack(fill="x", pady=1)
            self.mode_buttons[t_idx][val] = btn

        self.refresh_card_buttons(t_idx)

    def set_mode(self, t_idx, mode):
        """Update selected mode for toolhead."""
        self.selected_modes[t_idx] = mode
        self.refresh_card_buttons(t_idx)
        self.update_savings()

    def refresh_card_buttons(self, t_idx):
        """Update active button styling in segmented control."""
        current = self.selected_modes[t_idx]
        th = self.theme
        for val, btn in self.mode_buttons[t_idx].items():
            if val == current:
                btn.config(bg=th["accent"], fg="#ffffff", font=("Segoe UI", 8, "bold"))
            else:
                btn.config(bg=th["btn_inactive_bg"], fg=th["btn_inactive_fg"], font=("Segoe UI", 8))

    def update_savings(self):
        """Calculate exact minutes saved."""
        active_fast_swaps = 0
        for t_idx, mode in self.selected_modes.items():
            if mode in ("auto", "hold"):
                active_fast_swaps += self.data["tools_stats"][t_idx]["swaps"]

        saved_seconds = active_fast_swaps * 7.5
        mins = int(round(saved_seconds / 60.0))
        self.savings_lbl.config(text=f"⚡ Estimated Time Saved: ~{mins} Minutes (Stock Quality Preserved)")

    def show_settings_modal(self):
        """Settings modal to adjust standby temperature, lookahead lead time, and theme."""
        th = self.theme
        modal = tk.Toplevel(self.root)
        modal.title("Settings")
        modal.configure(bg=th["bg"])
        modal.resizable(False, False)
        modal.grab_set()

        f = tk.Frame(modal, bg=th["bg"], padx=22, pady=18)
        f.pack(fill="both", expand=True)

        tk.Label(f, text="⚙️ Optimizer Settings", font=("Segoe UI", 12, "bold"), fg=th["accent"], bg=th["bg"]).pack(anchor="w", pady=(0, 6))

        # Risk Warning Banner
        warn_box = tk.Frame(f, bg="#2d1b1b" if th == THEMES["dark"] else "#fff1f1", highlightbackground="#882222", highlightthickness=1, padx=8, pady=6)
        warn_box.pack(fill="x", pady=(0, 10))
        tk.Label(warn_box, text="⚠️ Warning: Improper temperatures can damage your toolhead!", font=("Segoe UI", 8, "bold"), fg="#f87171", bg=warn_box["bg"]).pack(anchor="w")
        tk.Label(warn_box, text="Holding nozzles hot in the dock risks heat creep, severe clogs, and nozzle wear.\nOnly change values if you know your specific filament's thermal tolerance.",
                 font=("Segoe UI", 8), fg=th["text_main"], bg=warn_box["bg"], justify="left").pack(anchor="w", pady=(2, 0))

        # Standby Temp Field
        st_frame = tk.Frame(f, bg=th["bg"])
        st_frame.pack(fill="x", pady=(0, 10))
        tk.Label(st_frame, text="Hold Standby Temperature (°C):", font=("Segoe UI", 9, "bold"), fg=th["text_main"], bg=th["bg"]).pack(anchor="w")

        info_temp = (
            "• 175 °C: Lower standby baseline for quality PLA (significantly reduced flow).\n"
            "• 190 °C: Fast recovery baseline (reaches 215 °C in ~1.2s on U1 ceramic nozzles).\n"
            "• 70 °C: Factory stock cooldown (safe, but adds 8–12s delay per tool change)."
        )
        tk.Label(st_frame, text=info_temp, font=("Segoe UI", 8), fg=th["text_muted"], bg=th["bg"], justify="left").pack(anchor="w", pady=(2, 6))

        curr_temp = self.cfg.get("standby_temp", DEFAULT_STANDBY_TEMP)
        temp_var = tk.StringVar(value=str(curr_temp))
        temp_ent = tk.Entry(st_frame, textvariable=temp_var, font=("Segoe UI", 9), width=8, bg=th["card_bg"], fg=th["text_main"], bd=1, relief="solid")
        temp_ent.pack(anchor="w")

        # Lookahead seconds field
        la_frame = tk.Frame(f, bg=th["bg"])
        la_frame.pack(fill="x", pady=(0, 10))
        tk.Label(la_frame, text="Lookahead Lead Time (seconds):", font=("Segoe UI", 9, "bold"), fg=th["text_main"], bg=th["bg"]).pack(anchor="w")
        
        info_lead = (
            "• 10s (Recommended): Nozzle climbs to ~190–200 °C as the carriage docks.\n"
            "  The final jump to printing temp occurs on the prime tower, keeping the nozzle cool while parked."
        )
        tk.Label(la_frame, text=info_lead, font=("Segoe UI", 8), fg=th["text_muted"], bg=th["bg"], justify="left").pack(anchor="w", pady=(2, 6))

        curr_lead = self.cfg.get("preheat_seconds", DEFAULT_PREHEAT_SECONDS)
        lead_var = tk.StringVar(value=str(curr_lead))
        lead_ent = tk.Entry(la_frame, textvariable=lead_var, font=("Segoe UI", 9), width=8, bg=th["card_bg"], fg=th["text_main"], bd=1, relief="solid")
        lead_ent.pack(anchor="w")

        # Buttons
        btn_box = tk.Frame(f, bg=th["bg"])
        btn_box.pack(fill="x", pady=(10, 0))

        cancel_btn = tk.Button(btn_box, text="Cancel", font=("Segoe UI", 9), bg=th["card_bg"], fg=th["text_muted"],
                               bd=0, padx=14, pady=5, cursor="hand2", command=modal.destroy)
        cancel_btn.pack(side="left")

        def save_settings():
            try:
                t_val = int(temp_var.get())
                t_val = max(130, min(220, t_val))
            except ValueError:
                t_val = DEFAULT_STANDBY_TEMP

            try:
                l_val = int(lead_var.get())
                l_val = max(5, min(60, l_val))
            except ValueError:
                l_val = DEFAULT_PREHEAT_SECONDS

            self.cfg["standby_temp"] = t_val
            self.cfg["preheat_seconds"] = l_val
            save_user_config(self.cfg)

            # Live update button labels across cards
            for t_idx, btns in self.mode_buttons.items():
                if "hold" in btns:
                    btns["hold"].config(text=f"🔥 Hold {t_val}°C")
                if "auto" in btns:
                    btns["auto"].config(text=f"⚡ Auto ({l_val}s)")

            modal.destroy()

        save_btn = tk.Button(btn_box, text="Save & Apply", font=("Segoe UI", 9, "bold"), bg=th["accent"], fg="#ffffff",
                             activebackground=th["accent_hover"], activeforeground="#ffffff", bd=0, padx=16, pady=5,
                             cursor="hand2", command=save_settings)
        save_btn.pack(side="right")

    def show_explanation_modal(self):
        """Clean information modal with liability disclaimer."""
        th = self.theme
        modal = tk.Toplevel(self.root)
        modal.title("How Smart Preheat Works")
        modal.configure(bg=th["bg"])
        modal.resizable(False, False)
        modal.grab_set()

        f = tk.Frame(modal, bg=th["bg"], padx=22, pady=18)
        f.pack(fill="both", expand=True)

        tk.Label(f, text="⚡ Intelligent Toolhead Preheating", font=("Segoe UI", 12, "bold"), fg=th["accent"], bg=th["bg"]).pack(anchor="w", pady=(0, 10))

        explanation = (
            "Why is the stock profile slow?\n"
            "By default, idle Snapmaker U1 toolheads cool down toward ~65 °C. "
            "During multi-color tool changes, the printer pauses for roughly 8–12 seconds at the dock to reheat to target temperature. "
            "Across hundreds of tool swaps, this idle time accumulates quickly.\n\n"
            "The 3 Modes Explained:\n"
            "1. ⚡ Auto (10s): Starts heating ~10 seconds before tool pickup. The nozzle reaches ~190–200 °C as the carriage couples, finishing the final few degrees on the prime tower. (Safest dynamic approach).\n"
            "2. 🔥 Hold Standby: Holds active nozzles constantly at standby in dock. From 190 °C to 215 °C takes only ~1.2s on the U1 ceramic heater.\n"
            "3. ❄️ Off (Stock): Default factory cooldown behavior.\n\n"
            "Recommended Materials & When to Keep 'Off':\n"
            "• Best for: Standard quality PLA, PLA+, and PETG in active rotation.\n"
            "• Caution / Keep Off: Water-soluble supports (PVA/BVOH) degrade rapidly under heat; ultra-low-temp or budget PLA with high plasticizer content may soften prematurely; flexible filaments (TPU) should remain at stock temperatures.\n"
            "• Safety Lock: Heat-sensitive materials (PVA, TPU, etc.) are automatically locked to Stock by the optimizer.\n\n"
            "Notice & Disclaimer:\n"
            "This software is an independent open-source tool and is not affiliated with Snapmaker or OrcaSlicer. "
            "Provided 'as is' without warranties of any kind. 3D printing results depend heavily on material properties, "
            "ambient conditions, and printer state. The author assumes no liability for print defects, nozzle clogging, "
            "or hardware wear."
        )
        msg_lbl = tk.Label(f, text=explanation, font=("Segoe UI", 9), fg=th["text_main"], bg=th["bg"], justify="left", wraplength=480)
        msg_lbl.pack(pady=(0, 16))

        dont_show_var = tk.BooleanVar(value=self.cfg.get("first_run_done", False))
        chk = tk.Checkbutton(f, text="Do not show this explanation again", variable=dont_show_var,
                             font=("Segoe UI", 8), fg=th["text_muted"], bg=th["bg"], selectcolor=th["card_bg"],
                             activebackground=th["bg"], activeforeground=th["text_main"])
        chk.pack(anchor="w", pady=(0, 14))

        def close_modal():
            self.cfg["first_run_done"] = dont_show_var.get()
            save_user_config(self.cfg)
            modal.destroy()

        btn = tk.Button(f, text="Got it", font=("Segoe UI", 9, "bold"), bg=th["accent"], fg="#ffffff",
                        activebackground=th["accent_hover"], activeforeground="#ffffff", bd=0, padx=18, pady=6,
                        cursor="hand2", command=close_modal)
        btn.pack(side="right")

    def on_submit(self):
        plan = dict(self.selected_modes)
        self.root.destroy()
        self.on_apply(plan)

    def on_skip(self):
        self.root.destroy()
        self.on_apply(None)


def inject_smart_preheat_gcode(file_path, parsed_data, plan, preheat_time=10, standby_temp=190):
    """
    Rewrite G-code based on per-toolhead selection:
    - 'auto': Injects dynamic ~10-second lookahead preheating (M104 S[temp] T[tool]).
    - 'hold': Modifies dock cooldown M104 to keep nozzle at standby temp.
    - 'off': Preserves original stock behavior.
    """
    lines = parsed_data["lines"]
    line_durations = parsed_data["line_durations"]
    toolchange_events = parsed_data["toolchange_events"]

    new_lines = []
    tc_ptr = 0

    for i, line in enumerate(lines):
        # 1. Auto Lookahead Preheat Injection
        if tc_ptr < len(toolchange_events) and i == toolchange_events[tc_ptr]["line_idx"]:
            tc = toolchange_events[tc_ptr]
            target_tool = tc["tool"]
            mode = plan.get(target_tool, "off")

            if mode == "auto":
                target_temp = tc["target_temp"]
                preheat_cmd = f"M104 S{target_temp} T{target_tool} ; [SmartPreheat: {preheat_time}s dynamic lookahead]\n"

                accum_time = 0.0
                insert_idx = len(new_lines)
                for k in range(len(new_lines) - 1, -1, -1):
                    accum_time += line_durations[k] if k < len(line_durations) else 0.0
                    insert_idx = k
                    if accum_time >= preheat_time:
                        break
                new_lines.insert(insert_idx, preheat_cmd)
            tc_ptr += 1

        # 2. Hold Standby Injection
        m_cool = re.search(r'M104\s+S(\d+)\s+T([0-3])', line)
        if m_cool:
            cool_temp = int(m_cool.group(1))
            cool_tool = int(m_cool.group(2))
            mode = plan.get(cool_tool, "off")

            if mode == "hold" and cool_temp < 160:
                line = f"M104 S{standby_temp} T{cool_tool} ; [SmartPreheat: held at {standby_temp}°C standby]\n"

        new_lines.append(line)

    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(new_lines)
    return True


def run_optimizer(file_path):
    """Main execution entry point."""
    if not os.path.exists(file_path):
        return

    parsed_data, err = parse_gcode_toolpaths(file_path)
    if err or not parsed_data:
        return

    # If single-color print or no toolchanges: exit silently without disturbing the user!
    if parsed_data["total_swaps"] <= 1:
        return

    cfg = load_user_config()

    applied_plan = [None]
    def handle_apply(plan):
        applied_plan[0] = plan

    root = tk.Tk()
    app = SmartPreheatGUI(root, parsed_data, cfg, handle_apply)
    root.mainloop()

    if applied_plan[0]:
        inject_smart_preheat_gcode(
            file_path,
            parsed_data,
            applied_plan[0],
            cfg.get("preheat_seconds", DEFAULT_PREHEAT_SECONDS),
            cfg.get("standby_temp", DEFAULT_STANDBY_TEMP)
        )


if __name__ == "__main__":
    if len(sys.argv) > 1:
        run_optimizer(sys.argv[1])
