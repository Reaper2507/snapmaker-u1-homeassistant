#!/usr/bin/env python3
"""
u1_smart_preheat.py - Snapmaker U1 Smart Preheat Optimizer
Native OrcaSlicer 2.5+ Post-Processing & Interactive Optimizer

Modes:
- Automated: 20s dynamic look-ahead preheat injection (heats just in time, no oozing in dock).
- Static Standby: Constant 190 °C holding temperature in dock (covers 90% of prints, 247printing style).
- Cold: Standard OrcaSlicer cooldown (recommended for tools with massive layer pauses >30 layers).
"""

import sys
import os
import re
import json
import math
import tkinter as tk
from tkinter import ttk, messagebox

# Default Configuration
DEFAULT_PREHEAT_SECONDS = 20    # 20s dynamic lookahead
DEFAULT_STANDBY_TEMP = 190       # 190°C static standby
CONFIG_FILE = os.path.join(os.path.expanduser("~"), ".u1_smart_preheat_config.json")

# Theme Palette (OrcaSlicer Dark Mode)
BG_COLOR = "#232326"
CARD_BG = "#2e2e33"
CARD_BORDER = "#404048"
ACCENT_COLOR = "#00bfa5"        # Orca Teal
ACCENT_HOVER = "#00897b"
WARN_COLOR = "#ff9800"          # Warning Orange
TEXT_MAIN = "#f0f0f2"
TEXT_MUTED = "#9e9ea6"
BORDER_RADIUS = 6

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
        "default_mode": "automated",
        "preheat_seconds": DEFAULT_PREHEAT_SECONDS,
        "default_standby": DEFAULT_STANDBY_TEMP
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
    - Tool changes (T0-T3)
    - Layer timeline (Z height and layer markers)
    - Estimated time per line for lookahead
    """
    tools_stats = {
        0: {"used": False, "swaps": 0, "layers": set(), "target_temp": 215, "max_gap_layers": 0},
        1: {"used": False, "swaps": 0, "layers": set(), "target_temp": 215, "max_gap_layers": 0},
        2: {"used": False, "swaps": 0, "layers": set(), "target_temp": 215, "max_gap_layers": 0},
        3: {"used": False, "swaps": 0, "layers": set(), "target_temp": 215, "max_gap_layers": 0}
    }

    toolchange_events = []
    line_durations = []
    current_tool = None
    current_layer = 0
    total_swaps = 0

    lx, ly, le, current_f = 0.0, 0.0, 0.0, 1200.0

    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            lines = f.readlines()
    except Exception as e:
        return None, f"Datei konnte nicht gelesen werden: {e}"

    for idx, line in enumerate(lines):
        # Track layer changes
        if line.startswith(";AFTER_LAYER_CHANGE") or line.startswith(";LAYER_CHANGE"):
            current_layer += 1
        elif line.startswith(";LAYER:"):
            m = re.search(r";LAYER:(\d+)", line)
            if m: current_layer = int(m.group(1))

        # Estimate time for moves
        dt = 0.0
        if line.startswith("G1") or line.startswith("G0"):
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

        # Track target temperatures
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
            tools_stats[new_tool]["layers"].add(current_layer)
            if current_tool != new_tool:
                total_swaps += 1
                tools_stats[new_tool]["swaps"] += 1
                toolchange_events.append({
                    "line_idx": idx,
                    "tool": new_tool,
                    "layer": current_layer,
                    "target_temp": tools_stats[new_tool]["target_temp"]
                })
                current_tool = new_tool

    # Analyze layer gaps per tool
    for t_num, stats in tools_stats.items():
        if stats["used"] and stats["layers"]:
            sorted_layers = sorted(list(stats["layers"]))
            gaps = [sorted_layers[i] - sorted_layers[i-1] for i in range(1, len(sorted_layers))]
            stats["max_gap_layers"] = max(gaps) if gaps else 0
            stats["first_layer"] = sorted_layers[0]
            stats["last_layer"] = sorted_layers[-1]

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
        self.temp_entries = {}

        self.root.title("Snapmaker U1 Smart Preheat Optimizer")
        self.root.configure(bg=BG_COLOR)
        self.root.resizable(False, False)

        # Main container
        main_frame = tk.Frame(self.root, bg=BG_COLOR, padx=20, pady=15)
        main_frame.pack(fill="both", expand=True)

        # Header
        header_frame = tk.Frame(main_frame, bg=BG_COLOR)
        header_frame.pack(fill="x", pady=(0, 10))

        title_lbl = tk.Label(header_frame, text="⚡ U1 Smart Preheat Optimizer", font=("Segoe UI", 14, "bold"), fg=TEXT_MAIN, bg=BG_COLOR)
        title_lbl.pack(side="left")

        info_btn = tk.Button(header_frame, text="ℹ️ Wie funktioniert das?", font=("Segoe UI", 9), bg=CARD_BG, fg=ACCENT_COLOR,
                             activebackground=ACCENT_HOVER, activeforeground=TEXT_MAIN, bd=0, padx=8, pady=3, cursor="hand2", command=self.show_explanation_modal)
        info_btn.pack(side="right")

        # Summary Subtitle
        used_count = sum(1 for t in self.data["tools_stats"].values() if t["used"])
        swaps = self.data["total_swaps"]
        sub_text = f"Erkannt: {used_count} aktive Werkzeuge · {swaps} Werkzeugwechsel gesamt"
        sub_lbl = tk.Label(main_frame, text=sub_text, font=("Segoe UI", 10), fg=TEXT_MUTED, bg=BG_COLOR)
        sub_lbl.pack(anchor="w", pady=(0, 10))

        # Global Quick Preset Bar
        preset_frame = tk.Frame(main_frame, bg=CARD_BG, highlightbackground=CARD_BORDER, highlightthickness=1, padx=10, pady=8)
        preset_frame.pack(fill="x", pady=(0, 15))

        tk.Label(preset_frame, text="Globales Preset:", font=("Segoe UI", 9, "bold"), fg=TEXT_MAIN, bg=CARD_BG).pack(side="left", padx=(0, 10))

        btn_all_auto = tk.Button(preset_frame, text="⚡ Alle Automatisch (20s)", font=("Segoe UI", 8, "bold"), bg="#1c1c1f", fg=ACCENT_COLOR,
                                 activebackground=ACCENT_COLOR, activeforeground="#000000", bd=1, relief="solid", padx=8, pady=2, cursor="hand2",
                                 command=lambda: self.apply_global_preset("automated"))
        btn_all_auto.pack(side="left", padx=4)

        btn_all_static = tk.Button(preset_frame, text="🔥 Alle Dauer-Standby (190°C)", font=("Segoe UI", 8), bg="#1c1c1f", fg=TEXT_MAIN,
                                   activebackground=ACCENT_COLOR, activeforeground="#000000", bd=1, relief="solid", padx=8, pady=2, cursor="hand2",
                                   command=lambda: self.apply_global_preset("static"))
        btn_all_static.pack(side="left", padx=4)

        btn_all_cold = tk.Button(preset_frame, text="❄️ Alle Kalt lassen", font=("Segoe UI", 8), bg="#1c1c1f", fg=TEXT_MUTED,
                                 activebackground="#3e3e44", activeforeground=TEXT_MAIN, bd=1, relief="solid", padx=8, pady=2, cursor="hand2",
                                 command=lambda: self.apply_global_preset("cold"))
        btn_all_cold.pack(side="left", padx=4)

        # Cards Frame (4 Toolheads)
        cards_frame = tk.Frame(main_frame, bg=BG_COLOR)
        cards_frame.pack(fill="x", pady=(0, 15))

        for t_idx in range(4):
            self.create_tool_card(cards_frame, t_idx)

        # Savings Banner
        self.savings_lbl = tk.Label(main_frame, text="⚡ Berechnete Ersparnis: ~0 Minuten", font=("Segoe UI", 11, "bold"), fg=ACCENT_COLOR, bg=BG_COLOR)
        self.savings_lbl.pack(fill="x", pady=(5, 15))

        # Action Buttons
        btn_frame = tk.Frame(main_frame, bg=BG_COLOR)
        btn_frame.pack(fill="x")

        skip_btn = tk.Button(btn_frame, text="Überspringen (Standard belassen)", font=("Segoe UI", 10), bg=CARD_BG, fg=TEXT_MUTED,
                             activebackground="#3e3e44", activeforeground=TEXT_MAIN, bd=0, padx=15, pady=8, cursor="hand2", command=self.on_skip)
        skip_btn.pack(side="left")

        apply_btn = tk.Button(btn_frame, text="✅ Optimieren & Weiter", font=("Segoe UI", 10, "bold"), bg=ACCENT_COLOR, fg="#000000",
                              activebackground=ACCENT_HOVER, activeforeground="#ffffff", bd=0, padx=20, pady=8, cursor="hand2", command=self.on_submit)
        apply_btn.pack(side="right")

        self.update_savings()

        # Check first-run modal
        if not self.cfg.get("first_run_done", False):
            self.root.after(200, self.show_explanation_modal)

    def apply_global_preset(self, target_mode):
        """Quickly switch all active tools to the chosen preset."""
        for t_idx, var in self.selected_modes.items():
            if self.data["tools_stats"][t_idx]["used"]:
                # If tool has huge layer gap (>30) and user clicks static, we still respect user or recommend auto
                var.set(target_mode)
        self.update_savings()

    def create_tool_card(self, parent, t_idx):
        stats = self.data["tools_stats"][t_idx]
        used = stats["used"]

        card = tk.Frame(parent, bg=CARD_BG, highlightbackground=CARD_BORDER, highlightthickness=1, padx=10, pady=10)
        card.pack(side="left", padx=5, fill="both", expand=True)

        # Header Badge
        header = tk.Frame(card, bg=CARD_BG)
        header.pack(fill="x", pady=(0, 5))

        t_title = tk.Label(header, text=f"Toolhead T{t_idx}", font=("Segoe UI", 10, "bold"), fg=TEXT_MAIN, bg=CARD_BG)
        t_title.pack(side="left")

        if not used:
            status_badge = tk.Label(header, text="INAKTIV", font=("Segoe UI", 7, "bold"), fg="#707078", bg="#1f1f22", padx=4, pady=1)
            status_badge.pack(side="right")
            card_msg = tk.Label(card, text="Im aktuellen Druck\nnicht verwendet.", font=("Segoe UI", 8), fg="#707078", bg=CARD_BG, justify="center")
            card_msg.pack(pady=28)
            self.selected_modes[t_idx] = tk.StringVar(value="off")
            return

        # Status badge for active tool
        gap = stats.get("max_gap_layers", 0)
        if gap > 30:
            status_badge = tk.Label(header, text=f"⚠️ PAUSE ({gap}L)", font=("Segoe UI", 7, "bold"), fg="#000000", bg=WARN_COLOR, padx=4, pady=1)
            default_mode = "automated"  # automated is much safer than static when idle for 30+ layers!
        else:
            status_badge = tk.Label(header, text="🔥 DAUERHAFT", font=("Segoe UI", 7, "bold"), fg="#ffffff", bg=ACCENT_COLOR, padx=4, pady=1)
            default_mode = "automated"
        status_badge.pack(side="right")

        # Stats info
        swaps = stats["swaps"]
        first_l = stats.get("first_layer", 0)
        last_l = stats.get("last_layer", 0)
        info_str = f"• {swaps} Wechsel\n• Layer {first_l} bis {last_l}"
        if gap > 1:
            info_str += f"\n• Max. Pause: {gap} Schichten"
        info_lbl = tk.Label(card, text=info_str, font=("Segoe UI", 8), fg=TEXT_MUTED, bg=CARD_BG, justify="left")
        info_lbl.pack(anchor="w", pady=(2, 6))

        # Mode Selection Radio Buttons
        mode_var = tk.StringVar(value=default_mode)
        self.selected_modes[t_idx] = mode_var

        r_auto = tk.Radiobutton(card, text="⚡ Auto (20s Vorlauf)", variable=mode_var, value="automated",
                                font=("Segoe UI", 8, "bold"), fg=ACCENT_COLOR, bg=CARD_BG, selectcolor="#1c1c1f", activebackground=CARD_BG,
                                activeforeground=ACCENT_COLOR, command=self.update_savings)
        r_auto.pack(anchor="w")

        r_static = tk.Radiobutton(card, text="🔥 Dauer-Standby", variable=mode_var, value="static",
                                  font=("Segoe UI", 8), fg=TEXT_MAIN, bg=CARD_BG, selectcolor="#1c1c1f", activebackground=CARD_BG,
                                  activeforeground=TEXT_MAIN, command=self.update_savings)
        r_static.pack(anchor="w")

        r_cold = tk.Radiobutton(card, text="❄️ Kalt lassen", variable=mode_var, value="cold",
                                font=("Segoe UI", 8), fg=TEXT_MUTED, bg=CARD_BG, selectcolor="#1c1c1f", activebackground=CARD_BG,
                                activeforeground=TEXT_MAIN, command=self.update_savings)
        r_cold.pack(anchor="w")

        # Custom Standby Temp Field
        temp_frame = tk.Frame(card, bg=CARD_BG)
        temp_frame.pack(fill="x", pady=(6, 0))
        tk.Label(temp_frame, text="Standby:", font=("Segoe UI", 8), fg=TEXT_MUTED, bg=CARD_BG).pack(side="left")
        
        temp_ent = tk.Entry(temp_frame, font=("Segoe UI", 8), width=5, bg="#1c1c1f", fg=TEXT_MAIN, bd=1, relief="solid")
        temp_ent.insert(0, str(self.cfg.get("default_standby", DEFAULT_STANDBY_TEMP)))
        temp_ent.pack(side="left", padx=4)
        tk.Label(temp_frame, text="°C", font=("Segoe UI", 8), fg=TEXT_MUTED, bg=CARD_BG).pack(side="left")
        self.temp_entries[t_idx] = temp_ent

    def update_savings(self):
        """Calculate minutes saved based on chosen preheated tools."""
        total_fast_swaps = 0
        for t_idx, mode_var in self.selected_modes.items():
            mode = mode_var.get()
            if mode in ("automated", "static"):
                total_fast_swaps += self.data["tools_stats"][t_idx]["swaps"]

        # Average saving per swap when preheated: ~7.5 seconds
        saved_seconds = total_fast_swaps * 7.5
        mins = int(round(saved_seconds / 60.0))
        self.savings_lbl.config(text=f"⚡ Berechnete Ersparnis: ca. {mins} Minuten Wartezeit gespart!")

    def show_explanation_modal(self):
        """First run / info modal explaining PLA plasticizers, temperature and oozing."""
        modal = tk.Toplevel(self.root)
        modal.title("Wie funktioniert Smart Preheat?")
        modal.configure(bg=BG_COLOR)
        modal.resizable(False, False)
        modal.grab_set()

        f = tk.Frame(modal, bg=BG_COLOR, padx=20, pady=15)
        f.pack(fill="both", expand=True)

        tk.Label(f, text="ℹ️ Intelligente Aufheiz-Optimierung", font=("Segoe UI", 12, "bold"), fg=ACCENT_COLOR, bg=BG_COLOR).pack(anchor="w", pady=(0, 8))

        explanation = (
            "Warum stehen die Köpfe ab Werk auf eiskalt (-150 °C)?\n"
            "Snapmaker schaltet inaktive Toolheads ab Werk komplett aus, um Support-Tickets bei billigstem "
            "Filament oder wasserlöslichem PVA zu verhindern. Bei jedem Werkzeugwechsel muss der Kopf von "
            "65 °C mühsam wieder auf 215 °C hochheizen (kostet ~10 Sekunden Wartezeit am Dock).\n\n"
            "Zwei Optimierungs-Modi zur Auswahl:\n\n"
            "1. ⚡ Automatisch (20s Vorlauf):\n"
            "Das Tool analysiert die Druckpfade und schaltet die Heizung genau ~20 Sekunden vor dem nächsten "
            "Werkzeugwechsel ein. Erreicht der Toolhead die Parkposition, hat er exakt Drucktemperatur. Dazwischen "
            "bleibt er kühl. Absolut kein Oozing/Drip-Risiko im Dock!\n\n"
            "2. 🔥 Dauer-Standby (190 °C Halten):\n"
            "Der Toolhead bleibt während des gesamten Drucks konstant auf 190 °C Standby. Beim Wechsel müssen "
            "nur 25 °C nachgeheizt werden (~1.5s). Perfekt für 90% aller Drucke mit gutem Qualitäts-PLA.\n\n"
            "⚠️ Große Schichtpausen:\n"
            "Druckt ein Toolhead z. B. nur auf Schicht 2 und Schicht 280, warnt dich das Tool automatisch! "
            "Hier empfiehlt sich 'Auto' oder 'Kalt', damit kein Filament stundenlang unnötig geheizt wird."
        )
        msg_lbl = tk.Label(f, text=explanation, font=("Segoe UI", 9), fg=TEXT_MAIN, bg=BG_COLOR, justify="left", wraplength=520)
        msg_lbl.pack(pady=(0, 15))

        dont_show_var = tk.BooleanVar(value=self.cfg.get("first_run_done", False))
        chk = tk.Checkbutton(f, text="Diese Erklärung nicht mehr automatisch anzeigen", variable=dont_show_var,
                             font=("Segoe UI", 8), fg=TEXT_MUTED, bg=BG_COLOR, selectcolor="#1c1c1f", activebackground=BG_COLOR, activeforeground=TEXT_MAIN)
        chk.pack(anchor="w", pady=(0, 10))

        def close_modal():
            self.cfg["first_run_done"] = dont_show_var.get()
            save_user_config(self.cfg)
            modal.destroy()

        btn = tk.Button(f, text="Verstanden", font=("Segoe UI", 9, "bold"), bg=ACCENT_COLOR, fg="#000000",
                        activebackground=ACCENT_HOVER, activeforeground="#ffffff", bd=0, padx=15, pady=5, cursor="hand2", command=close_modal)
        btn.pack(side="right")

    def on_submit(self):
        plan = {}
        for t_idx in range(4):
            mode = self.selected_modes[t_idx].get()
            t_str = self.temp_entries.get(t_idx, None)
            try:
                temp_val = int(t_str.get()) if t_str else DEFAULT_STANDBY_TEMP
            except ValueError:
                temp_val = DEFAULT_STANDBY_TEMP
            plan[t_idx] = {"mode": mode, "temp": temp_val}
        self.root.destroy()
        self.on_apply(plan)

    def on_skip(self):
        self.root.destroy()
        self.on_apply(None)


def inject_smart_preheat_gcode(file_path, parsed_data, plan, preheat_time=20):
    """
    Rewrite G-code with intelligent preheat commands and standby temperatures:
    - Automated mode: 20-second dynamic look-ahead preheat injection (M104 S{target_temp} T{tool}).
    - Static mode: Overrides dock cooldown M104 to keep standby temp at e.g. 190 °C.
    - Cold mode: Leaves default OrcaSlicer behavior.
    """
    lines = parsed_data["lines"]
    line_durations = parsed_data["line_durations"]
    toolchange_events = parsed_data["toolchange_events"]

    new_lines = []
    tc_ptr = 0

    for i, line in enumerate(lines):
        # 1. Automated Lookahead Preheat Injection
        if tc_ptr < len(toolchange_events) and i == toolchange_events[tc_ptr]["line_idx"]:
            tc = toolchange_events[tc_ptr]
            target_tool = tc["tool"]
            tool_plan = plan.get(target_tool, {})
            mode = tool_plan.get("mode", "cold")
            
            if mode == "automated":
                target_temp = tc["target_temp"]
                preheat_cmd = f"M104 S{target_temp} T{target_tool} ; [SmartPreheat: {preheat_time}s dynamic lookahead]\n"

                # Look back in time to inject preheat command ~20 seconds prior
                accum_time = 0.0
                insert_idx = len(new_lines)
                for k in range(len(new_lines) - 1, -1, -1):
                    accum_time += line_durations[k] if k < len(line_durations) else 0.0
                    insert_idx = k
                    if accum_time >= preheat_time:
                        break
                new_lines.insert(insert_idx, preheat_cmd)
            tc_ptr += 1

        # 2. Modify Standby Temp Commands (Static Standby Mode)
        m_cool = re.search(r'M104\s+S(\d+)\s+T([0-3])', line)
        if m_cool:
            cool_temp = int(m_cool.group(1))
            cool_tool = int(m_cool.group(2))
            tool_plan = plan.get(cool_tool, {})
            mode = tool_plan.get("mode", "cold")

            if mode == "static" and cool_temp < 160:
                desired_standby = tool_plan.get("temp", DEFAULT_STANDBY_TEMP)
                line = f"M104 S{desired_standby} T{cool_tool} ; [SmartPreheat: static standby maintained at {desired_standby}°C]\n"

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
        inject_smart_preheat_gcode(file_path, parsed_data, applied_plan[0], cfg.get("preheat_seconds", DEFAULT_PREHEAT_SECONDS))


if __name__ == "__main__":
    if len(sys.argv) > 1:
        run_optimizer(sys.argv[1])
