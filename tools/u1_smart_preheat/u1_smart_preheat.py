#!/usr/bin/env python3
"""
u1_smart_preheat.py - Snapmaker U1 Smart Preheat Optimizer
Native OrcaSlicer 2.5+ Post-Processing & Interactive Optimizer

Features:
- Extracts actual loaded filament color and material type directly from OrcaSlicer G-code.
- Minimalist, high-end dark UI with vector toolhead graphics tinted with the loaded filament color.
- 3 clean modes per toolhead:
    1. Auto (20s) - dynamic lookahead preheating (heats 20s before pickup, cools in dock).
    2. Hold 190°C - keeps steady standby in dock (fastest pickup, ideal for standard PLA/PETG).
    3. Off (Stock) - default cool down behavior (recommended for PVA/BVOH, TPU, budget filaments).
- Human-engineered UX: Flat segmented pill buttons (no ugly circles), crystal clear labels.
"""

import sys
import os
import re
import json
import math
import tkinter as tk
from tkinter import ttk, messagebox

# Default Configuration
DEFAULT_PREHEAT_SECONDS = 20
DEFAULT_STANDBY_TEMP = 190
CONFIG_FILE = os.path.join(os.path.expanduser("~"), ".u1_smart_preheat_config.json")

# Premium High-End Dark Palette
BG_COLOR = "#141416"            # Deep sleek charcoal
CARD_BG = "#1c1c20"             # Card slate
CARD_BORDER = "#2c2c34"         # Subtle divider
BTN_INACTIVE_BG = "#24242a"     # Unselected toggle
BTN_INACTIVE_FG = "#9e9ea8"     # Muted option text
ACCENT_COLOR = "#00bfa5"        # OrcaSlicer Teal
ACCENT_HOVER = "#00897b"
ACCENT_SELECTED = "#00897b"
TEXT_MAIN = "#f4f4f6"
TEXT_MUTED = "#8e8e98"
DISABLED_COLOR = "#44444c"
NOZZLE_BRASS = "#d4af37"

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
        0: {"used": False, "swaps": 0, "target_temp": 215, "color": "#00bfa5", "type": "PLA", "name": "Toolhead 1"},
        1: {"used": False, "swaps": 0, "target_temp": 215, "color": "#00bfa5", "type": "PLA", "name": "Toolhead 2"},
        2: {"used": False, "swaps": 0, "target_temp": 215, "color": "#00bfa5", "type": "PLA", "name": "Toolhead 3"},
        3: {"used": False, "swaps": 0, "target_temp": 215, "color": "#00bfa5", "type": "PLA", "name": "Toolhead 4"}
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
        # Calculate move durations
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

        # Target print temperatures
        tm_m109 = re.search(r'M109\s+S(\d+)\s+T(\d+)', line)
        if tm_m109:
            temp = int(tm_m109.group(1))
            t_num = int(tm_m109.group(2))
            if t_num in tools_stats:
                tools_stats[t_num]["target_temp"] = temp

        # Detect tool changes
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

        self.root.title("Snapmaker U1 Smart Preheat Optimizer")
        self.root.configure(bg=BG_COLOR)
        self.root.resizable(False, False)

        main_frame = tk.Frame(self.root, bg=BG_COLOR, padx=22, pady=18)
        main_frame.pack(fill="both", expand=True)

        # Header Bar
        header = tk.Frame(main_frame, bg=BG_COLOR)
        header.pack(fill="x", pady=(0, 6))

        title_lbl = tk.Label(header, text="⚡ U1 Smart Preheat Optimizer", font=("Segoe UI", 13, "bold"), fg=TEXT_MAIN, bg=BG_COLOR)
        title_lbl.pack(side="left")

        btn_box = tk.Frame(header, bg=BG_COLOR)
        btn_box.pack(side="right")

        settings_btn = tk.Button(btn_box, text="⚙️ Settings", font=("Segoe UI", 9), bg=CARD_BG, fg=TEXT_MAIN,
                                 activebackground=CARD_BORDER, activeforeground="#ffffff", bd=0, padx=10, pady=3,
                                 cursor="hand2", command=self.show_settings_modal)
        settings_btn.pack(side="left", padx=(0, 6))

        info_btn = tk.Button(btn_box, text="ℹ️ How it works", font=("Segoe UI", 9), bg=CARD_BG, fg=ACCENT_COLOR,
                             activebackground=ACCENT_HOVER, activeforeground="#ffffff", bd=0, padx=10, pady=3,
                             cursor="hand2", command=self.show_explanation_modal)
        info_btn.pack(side="left")

        # Subtitle
        used_count = sum(1 for t in self.data["tools_stats"].values() if t["used"])
        swaps = self.data["total_swaps"]
        sub_text = f"{used_count} active toolheads detected  ·  {swaps} tool swaps total"
        sub_lbl = tk.Label(main_frame, text=sub_text, font=("Segoe UI", 9), fg=TEXT_MUTED, bg=BG_COLOR)
        sub_lbl.pack(anchor="w", pady=(0, 16))

        # Cards Container (Toolheads 1 to 4)
        cards_frame = tk.Frame(main_frame, bg=BG_COLOR)
        cards_frame.pack(fill="x", pady=(0, 16))

        for t_idx in range(4):
            self.create_toolhead_card(cards_frame, t_idx)

        # Time Savings Banner
        self.savings_lbl = tk.Label(main_frame, text="⚡ Estimated Time Saved: ~0 Minutes (Stock Quality Preserved)",
                                    font=("Segoe UI", 10, "bold"), fg=ACCENT_COLOR, bg=BG_COLOR)
        self.savings_lbl.pack(fill="x", pady=(2, 16))

        # Action Buttons
        btn_frame = tk.Frame(main_frame, bg=BG_COLOR)
        btn_frame.pack(fill="x")

        skip_btn = tk.Button(btn_frame, text="Skip (Keep Stock Settings)", font=("Segoe UI", 9), bg=CARD_BG, fg=TEXT_MUTED,
                             activebackground="#33333a", activeforeground=TEXT_MAIN, bd=0, padx=16, pady=8,
                             cursor="hand2", command=self.on_skip)
        skip_btn.pack(side="left")

        apply_btn = tk.Button(btn_frame, text="✅ Optimize & Proceed", font=("Segoe UI", 10, "bold"), bg=ACCENT_COLOR, fg="#000000",
                              activebackground=ACCENT_HOVER, activeforeground="#ffffff", bd=0, padx=22, pady=8,
                              cursor="hand2", command=self.on_submit)
        apply_btn.pack(side="right")

        self.update_savings()

        # First-run modal
        if not self.cfg.get("first_run_done", False):
            self.root.after(150, self.show_explanation_modal)

    def draw_toolhead_icon(self, canvas, tool_num, is_used, filament_color):
        """Draw a sleek vector toolhead showing the actual loaded filament color."""
        canvas.delete("all")
        body_color = "#2a2a30" if is_used else "#1e1e22"
        border_color = "#3d3d46" if is_used else DISABLED_COLOR
        nozzle_color = NOZZLE_BRASS if is_used else DISABLED_COLOR
        stripe_color = filament_color if is_used else DISABLED_COLOR

        # Filament Strand entering extruder top
        if is_used:
            canvas.create_line(34, 0, 34, 10, fill=filament_color, width=3)

        # Extruder Body
        canvas.create_rectangle(14, 10, 54, 48, fill=body_color, outline=border_color, width=1.5)
        # Cooling Fins
        canvas.create_line(18, 18, 50, 18, fill="#36363e", width=1)
        canvas.create_line(18, 24, 50, 24, fill="#36363e", width=1)

        # Filament Color Identification Stripe on Toolhead Front
        canvas.create_rectangle(15, 29, 53, 35, fill=stripe_color, outline="")

        # Heatblock
        canvas.create_rectangle(20, 48, 48, 56, fill="#383842", outline=border_color, width=1)
        # Brass Nozzle Tip
        canvas.create_polygon(26, 56, 42, 56, 36, 66, 32, 66, fill=nozzle_color, outline="")

        # Toolhead Number
        canvas.create_text(34, 41, text=str(tool_num), fill="#ffffff" if is_used else DISABLED_COLOR, font=("Segoe UI", 10, "bold"))

    def create_toolhead_card(self, parent, t_idx):
        stats = self.data["tools_stats"][t_idx]
        is_used = stats["used"]
        tool_display_num = t_idx + 1
        fil_color = stats.get("color", "#00bfa5")
        fil_type = stats.get("type", "PLA")

        card = tk.Frame(parent, bg=CARD_BG, highlightbackground=CARD_BORDER, highlightthickness=1, padx=10, pady=12)
        card.pack(side="left", padx=4, fill="both", expand=True)

        # Header Title
        title_color = TEXT_MAIN if is_used else DISABLED_COLOR
        t_title = tk.Label(card, text=f"Toolhead {tool_display_num}", font=("Segoe UI", 10, "bold"), fg=title_color, bg=CARD_BG)
        t_title.pack(anchor="center", pady=(0, 4))

        # Vector Toolhead Graphic with actual filament color
        cv = tk.Canvas(card, width=68, height=70, bg=CARD_BG, highlightthickness=0)
        cv.pack(anchor="center", pady=(0, 4))
        self.draw_toolhead_icon(cv, tool_display_num, is_used, fil_color)

        if not is_used:
            msg = tk.Label(card, text="Unused\nin this print", font=("Segoe UI", 8), fg=DISABLED_COLOR, bg=CARD_BG, justify="center")
            msg.pack(pady=20)
            self.selected_modes[t_idx] = "off"
            return

        # Filament Material & Color Swatch Pill
        fil_frame = tk.Frame(card, bg="#141416", padx=6, pady=2, highlightbackground="#2c2c34", highlightthickness=1)
        fil_frame.pack(anchor="center", pady=(0, 6))

        # Color dot swatch
        dot_cv = tk.Canvas(fil_frame, width=10, height=10, bg="#141416", highlightthickness=0)
        dot_cv.pack(side="left", padx=(0, 4))
        dot_cv.create_oval(1, 1, 9, 9, fill=fil_color, outline="#ffffff" if fil_color.lower() in ("#000000", "#000000ff") else "")

        mat_lbl = tk.Label(fil_frame, text=f"{fil_type} · {stats['swaps']} swaps", font=("Segoe UI", 8), fg=TEXT_MAIN, bg="#141416")
        mat_lbl.pack(side="left")

        # Material Safety Check: Lockout for heat-sensitive / flexible filaments
        unsafe_materials = ("PVA", "BVOH", "TPU", "TPE", "HIPS", "SUPPORT")
        is_unsafe = any(bad in fil_type.upper() for bad in unsafe_materials)

        if is_unsafe:
            lock_frame = tk.Frame(card, bg="#201818", highlightbackground="#552222", highlightthickness=1, padx=6, pady=8)
            lock_frame.pack(fill="x", pady=(4, 0))

            tk.Label(lock_frame, text=f"🔒 Locked to Stock", font=("Segoe UI", 8, "bold"), fg="#ff6b6b", bg="#201818").pack(anchor="center")
            tk.Label(lock_frame, text=f"{fil_type} is sensitive to\nrepeated idle heating.", font=("Segoe UI", 7), fg="#c09090", bg="#201818", justify="center").pack(anchor="center", pady=(2, 0))
            self.selected_modes[t_idx] = "off"
            return

        # 3 Clean Segmented Options: Auto, Hold, Off
        self.selected_modes[t_idx] = "auto"
        self.mode_buttons[t_idx] = {}

        seg_frame = tk.Frame(card, bg=CARD_BG)
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
        for val, btn in self.mode_buttons[t_idx].items():
            if val == current:
                btn.config(bg=ACCENT_COLOR, fg="#000000", font=("Segoe UI", 8, "bold"))
            else:
                btn.config(bg=BTN_INACTIVE_BG, fg=BTN_INACTIVE_FG, font=("Segoe UI", 8))

    def update_savings(self):
        """Calculate exact minutes saved."""
        active_fast_swaps = 0
        for t_idx, mode in self.selected_modes.items():
            if mode in ("auto", "hold"):
                active_fast_swaps += self.data["tools_stats"][t_idx]["swaps"]

        # 7.5 seconds average saved per tool change
        saved_seconds = active_fast_swaps * 7.5
        mins = int(round(saved_seconds / 60.0))
        self.savings_lbl.config(text=f"⚡ Estimated Time Saved: ~{mins} Minutes (Stock Quality Preserved)")

    def show_settings_modal(self):
        """Settings modal to adjust standby temperature and lookahead lead time."""
        modal = tk.Toplevel(self.root)
        modal.title("Settings")
        modal.configure(bg=BG_COLOR)
        modal.resizable(False, False)
        modal.grab_set()

        f = tk.Frame(modal, bg=BG_COLOR, padx=22, pady=18)
        f.pack(fill="both", expand=True)

        tk.Label(f, text="⚙️ Optimizer Settings", font=("Segoe UI", 12, "bold"), fg=ACCENT_COLOR, bg=BG_COLOR).pack(anchor="w", pady=(0, 12))

        # Standby Temp Field
        st_frame = tk.Frame(f, bg=BG_COLOR)
        st_frame.pack(fill="x", pady=(0, 10))
        tk.Label(st_frame, text="Hold Standby Temperature (°C):", font=("Segoe UI", 9, "bold"), fg=TEXT_MAIN, bg=BG_COLOR).pack(anchor="w")
        
        info_temp = (
            "• 175 °C: Ultra-safe non-melting threshold for PLA (zero risk of oozing in dock).\n"
            "• 190 °C: Fast pickup (heats to 215 °C in ~1.2s on U1 ceramic nozzles).\n"
            "• Factory Stock: Drops idle nozzles all the way down to 70 °C."
        )
        tk.Label(st_frame, text=info_temp, font=("Segoe UI", 8), fg=TEXT_MUTED, bg=BG_COLOR, justify="left").pack(anchor="w", pady=(2, 6))

        curr_temp = self.cfg.get("standby_temp", DEFAULT_STANDBY_TEMP)
        temp_var = tk.StringVar(value=str(curr_temp))
        temp_ent = tk.Entry(st_frame, textvariable=temp_var, font=("Segoe UI", 9), width=8, bg=CARD_BG, fg=TEXT_MAIN, bd=1, relief="solid")
        temp_ent.pack(anchor="w")

        # Lookahead seconds field
        la_frame = tk.Frame(f, bg=BG_COLOR)
        la_frame.pack(fill="x", pady=(0, 14))
        tk.Label(la_frame, text="Lookahead Lead Time (seconds):", font=("Segoe UI", 9, "bold"), fg=TEXT_MAIN, bg=BG_COLOR).pack(anchor="w")
        tk.Label(la_frame, text="How many seconds prior to tool swap M104 heating begins (default: 20s).", font=("Segoe UI", 8), fg=TEXT_MUTED, bg=BG_COLOR).pack(anchor="w", pady=(2, 6))

        curr_lead = self.cfg.get("preheat_seconds", DEFAULT_PREHEAT_SECONDS)
        lead_var = tk.StringVar(value=str(curr_lead))
        lead_ent = tk.Entry(la_frame, textvariable=lead_var, font=("Segoe UI", 9), width=8, bg=CARD_BG, fg=TEXT_MAIN, bd=1, relief="solid")
        lead_ent.pack(anchor="w")

        # Buttons
        btn_box = tk.Frame(f, bg=BG_COLOR)
        btn_box.pack(fill="x", pady=(8, 0))

        cancel_btn = tk.Button(btn_box, text="Cancel", font=("Segoe UI", 9), bg=CARD_BG, fg=TEXT_MUTED,
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

            # Update button labels across cards live
            for t_idx, btns in self.mode_buttons.items():
                if "hold" in btns:
                    btns["hold"].config(text=f"🔥 Hold {t_val}°C")
                if "auto" in btns:
                    btns["auto"].config(text=f"⚡ Auto ({l_val}s)")

            modal.destroy()

        save_btn = tk.Button(btn_box, text="Save & Apply", font=("Segoe UI", 9, "bold"), bg=ACCENT_COLOR, fg="#000000",
                             activebackground=ACCENT_HOVER, activeforeground="#ffffff", bd=0, padx=16, pady=5,
                             cursor="hand2", command=save_settings)
        save_btn.pack(side="right")

    def show_explanation_modal(self):
        """Clean information modal with liability disclaimer."""
        modal = tk.Toplevel(self.root)
        modal.title("How Smart Preheat Works")
        modal.configure(bg=BG_COLOR)
        modal.resizable(False, False)
        modal.grab_set()

        f = tk.Frame(modal, bg=BG_COLOR, padx=22, pady=18)
        f.pack(fill="both", expand=True)

        tk.Label(f, text="⚡ Intelligent Toolhead Preheating", font=("Segoe UI", 12, "bold"), fg=ACCENT_COLOR, bg=BG_COLOR).pack(anchor="w", pady=(0, 10))

        explanation = (
            "Why is the stock profile slow?\n"
            "By default, idle Snapmaker U1 toolheads cool down toward ~65 °C. "
            "During multi-color tool changes, the printer pauses for roughly 8–12 seconds at the dock to reheat to target temperature. "
            "Across hundreds of tool swaps, this idle time accumulates quickly.\n\n"
            "The 3 Modes Explained:\n"
            "1. ⚡ Auto (20s): Injects heating approximately 20 seconds before pickup. The nozzle reaches extrusion temperature right as it undocks, leaving it cool in between. (Best all-rounder).\n"
            "2. 🔥 Hold 190°C: Holds active nozzles constantly at 190 °C in dock. From 190 °C to 215 °C takes only ~1.5s on the U1 ceramic heater. (Ideal for fast rotating standard PLA prints).\n"
            "3. ❄️ Off (Stock): Default factory cooldown behavior.\n\n"
            "Recommended Materials & When to Keep 'Off':\n"
            "• Best for: Standard quality PLA, PLA+, and PETG in active rotation.\n"
            "• Caution / Keep Off: Water-soluble supports (PVA/BVOH) degrade rapidly under heat; ultra-low-temp or budget PLA with high plasticizer content may soften prematurely; flexible filaments (TPU) should remain at stock temperatures.\n"
            "• If in doubt: Leave that specific toolhead set to 'Off (Stock)'.\n\n"
            "Notice & Disclaimer:\n"
            "This software is an independent open-source tool and is not affiliated with Snapmaker or OrcaSlicer. "
            "Provided 'as is' without warranties of any kind. 3D printing results depend heavily on material properties, "
            "ambient conditions, and printer state. The author assumes no liability for print defects, nozzle clogging, "
            "or hardware wear."
        )
        msg_lbl = tk.Label(f, text=explanation, font=("Segoe UI", 9), fg=TEXT_MAIN, bg=BG_COLOR, justify="left", wraplength=480)
        msg_lbl.pack(pady=(0, 16))

        dont_show_var = tk.BooleanVar(value=self.cfg.get("first_run_done", False))
        chk = tk.Checkbutton(f, text="Do not show this explanation again", variable=dont_show_var,
                             font=("Segoe UI", 8), fg=TEXT_MUTED, bg=BG_COLOR, selectcolor="#1c1c1f",
                             activebackground=BG_COLOR, activeforeground=TEXT_MAIN)
        chk.pack(anchor="w", pady=(0, 14))

        def close_modal():
            self.cfg["first_run_done"] = dont_show_var.get()
            save_user_config(self.cfg)
            modal.destroy()

        btn = tk.Button(f, text="Got it", font=("Segoe UI", 9, "bold"), bg=ACCENT_COLOR, fg="#000000",
                        activebackground=ACCENT_HOVER, activeforeground="#ffffff", bd=0, padx=18, pady=6,
                        cursor="hand2", command=close_modal)
        btn.pack(side="right")

    def on_submit(self):
        plan = dict(self.selected_modes)
        self.root.destroy()
        self.on_apply(plan)

    def on_skip(self):
        self.root.destroy()
        self.on_apply(None)


def inject_smart_preheat_gcode(file_path, parsed_data, plan, preheat_time=20, standby_temp=190):
    """
    Rewrite G-code based on per-toolhead selection:
    - 'auto': Injects dynamic 20-second lookahead preheating (M104 S[temp] T[tool]).
    - 'hold': Modifies dock cooldown M104 to keep nozzle at 190 °C standby.
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

        # 2. Hold 190°C Standby Injection
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
