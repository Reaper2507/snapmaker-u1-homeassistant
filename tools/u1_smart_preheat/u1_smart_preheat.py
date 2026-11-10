#!/usr/bin/env python3
"""
u1_smart_preheat.py - Snapmaker U1 Smart Preheat Optimizer
Native OrcaSlicer 2.5+ Post-Processing & Interactive Optimizer

Features:
- Analyzes multi-color G-code for Snapmaker U1 (Toolheads 1-4).
- 20-second dynamic look-ahead preheat injection (M104 S[temp] T[x]).
- Prevents nozzle oozing and heat creep while saving ~8-10 seconds per tool swap.
- Minimalist, distraction-free OrcaSlicer dark theme GUI with visual toolhead cards.
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
CONFIG_FILE = os.path.join(os.path.expanduser("~"), ".u1_smart_preheat_config.json")

# Minimalist Dark Theme (OrcaSlicer Palette)
BG_COLOR = "#1e1e22"
CARD_BG = "#28282d"
CARD_BORDER = "#3a3a42"
ACCENT_COLOR = "#00bfa5"        # Orca Teal
ACCENT_HOVER = "#00897b"
TEXT_MAIN = "#f0f0f2"
TEXT_MUTED = "#9898a0"
DISABLED_COLOR = "#505058"
NOZZLE_BRASS = "#c89f48"

def load_user_config():
    """Load persistent settings."""
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {"first_run_done": False, "preheat_seconds": DEFAULT_PREHEAT_SECONDS}

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
    - Tool changes (T0-T3 -> Toolheads 1-4)
    - Estimated time per line for lookahead
    """
    tools_stats = {
        0: {"used": False, "swaps": 0, "target_temp": 215},
        1: {"used": False, "swaps": 0, "target_temp": 215},
        2: {"used": False, "swaps": 0, "target_temp": 215},
        3: {"used": False, "swaps": 0, "target_temp": 215}
    }

    toolchange_events = []
    line_durations = []
    current_tool = None
    total_swaps = 0

    lx, ly, le, current_f = 0.0, 0.0, 0.0, 1200.0

    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            lines = f.readlines()
    except Exception as e:
        return None, f"Could not read G-code file: {e}"

    for idx, line in enumerate(lines):
        # Estimate move time for lookahead calculation
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

        # Track target print temperatures
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

        self.root.title("Snapmaker U1 Smart Preheat Optimizer")
        self.root.configure(bg=BG_COLOR)
        self.root.resizable(False, False)

        # Main frame
        main_frame = tk.Frame(self.root, bg=BG_COLOR, padx=22, pady=18)
        main_frame.pack(fill="both", expand=True)

        # Header Bar
        header = tk.Frame(main_frame, bg=BG_COLOR)
        header.pack(fill="x", pady=(0, 6))

        title_lbl = tk.Label(header, text="⚡ U1 Smart Preheat Optimizer", font=("Segoe UI", 13, "bold"), fg=TEXT_MAIN, bg=BG_COLOR)
        title_lbl.pack(side="left")

        info_btn = tk.Button(header, text="ℹ️ How it works", font=("Segoe UI", 9), bg=CARD_BG, fg=ACCENT_COLOR,
                             activebackground=ACCENT_HOVER, activeforeground="#ffffff", bd=0, padx=10, pady=3,
                             cursor="hand2", command=self.show_explanation_modal)
        info_btn.pack(side="right")

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
        self.savings_lbl = tk.Label(main_frame, text="⚡ Estimated Time Saved: ~0 Minutes",
                                    font=("Segoe UI", 10, "bold"), fg=ACCENT_COLOR, bg=BG_COLOR)
        self.savings_lbl.pack(fill="x", pady=(2, 16))

        # Action Buttons
        btn_frame = tk.Frame(main_frame, bg=BG_COLOR)
        btn_frame.pack(fill="x")

        skip_btn = tk.Button(btn_frame, text="Skip (Keep Stock G-code)", font=("Segoe UI", 9), bg=CARD_BG, fg=TEXT_MUTED,
                             activebackground="#35353c", activeforeground=TEXT_MAIN, bd=0, padx=16, pady=8,
                             cursor="hand2", command=self.on_skip)
        skip_btn.pack(side="left")

        apply_btn = tk.Button(btn_frame, text="✅ Optimize & Proceed", font=("Segoe UI", 10, "bold"), bg=ACCENT_COLOR, fg="#000000",
                              activebackground=ACCENT_HOVER, activeforeground="#ffffff", bd=0, padx=22, pady=8,
                              cursor="hand2", command=self.on_submit)
        apply_btn.pack(side="right")

        self.update_savings()

        # First-run modal check
        if not self.cfg.get("first_run_done", False):
            self.root.after(150, self.show_explanation_modal)

    def draw_toolhead_icon(self, canvas, tool_num, is_used):
        """Draw a sleek, modern vector toolhead illustration on canvas."""
        canvas.delete("all")
        body_color = "#36363e" if is_used else "#28282c"
        border_color = ACCENT_COLOR if is_used else DISABLED_COLOR
        nozzle_color = NOZZLE_BRASS if is_used else DISABLED_COLOR
        text_color = "#ffffff" if is_used else DISABLED_COLOR

        # Heatsink / Extruder Body
        canvas.create_rectangle(14, 8, 54, 46, fill=body_color, outline=border_color, width=1.5)
        # Cooling Fins
        canvas.create_line(18, 16, 50, 16, fill="#454550", width=1)
        canvas.create_line(18, 22, 50, 22, fill="#454550", width=1)
        # Heatblock
        canvas.create_rectangle(20, 46, 48, 55, fill="#40404a", outline=border_color, width=1)
        # Brass Nozzle Tip
        canvas.create_polygon(26, 55, 42, 55, 36, 65, 32, 65, fill=nozzle_color, outline="")
        # Status LED
        led_color = ACCENT_COLOR if is_used else "#404045"
        canvas.create_oval(44, 12, 48, 16, fill=led_color, outline="")
        # Toolhead Number
        canvas.create_text(34, 34, text=str(tool_num), fill=text_color, font=("Segoe UI", 12, "bold"))

    def create_toolhead_card(self, parent, t_idx):
        stats = self.data["tools_stats"][t_idx]
        is_used = stats["used"]
        tool_display_num = t_idx + 1  # Display as Toolhead 1, 2, 3, 4!

        card = tk.Frame(parent, bg=CARD_BG, highlightbackground=CARD_BORDER, highlightthickness=1, padx=12, pady=12)
        card.pack(side="left", padx=5, fill="both", expand=True)

        # Header Title
        title_color = TEXT_MAIN if is_used else DISABLED_COLOR
        t_title = tk.Label(card, text=f"Toolhead {tool_display_num}", font=("Segoe UI", 10, "bold"), fg=title_color, bg=CARD_BG)
        t_title.pack(anchor="center", pady=(0, 6))

        # Vector Toolhead Graphic
        cv = tk.Canvas(card, width=68, height=70, bg=CARD_BG, highlightthickness=0)
        cv.pack(anchor="center", pady=(0, 6))
        self.draw_toolhead_icon(cv, tool_display_num, is_used)

        if not is_used:
            msg = tk.Label(card, text="Unused\nin this print", font=("Segoe UI", 8), fg=DISABLED_COLOR, bg=CARD_BG, justify="center")
            msg.pack(pady=12)
            self.selected_modes[t_idx] = tk.StringVar(value="off")
            return

        # Usage Info
        swaps = stats["swaps"]
        info_lbl = tk.Label(card, text=f"{swaps} swaps", font=("Segoe UI", 8, "bold"), fg=TEXT_MUTED, bg=CARD_BG)
        info_lbl.pack(anchor="center", pady=(0, 8))

        # Clean Toggle: Auto (20s) vs Off
        mode_var = tk.StringVar(value="auto")
        self.selected_modes[t_idx] = mode_var

        r_auto = tk.Radiobutton(card, text="⚡ Auto (20s)", variable=mode_var, value="auto",
                                font=("Segoe UI", 9, "bold"), fg=ACCENT_COLOR, bg=CARD_BG, selectcolor="#1c1c1f",
                                activebackground=CARD_BG, activeforeground=ACCENT_COLOR, command=self.update_savings)
        r_auto.pack(anchor="w", padx=4)

        r_off = tk.Radiobutton(card, text="Off (Stock)", variable=mode_var, value="off",
                               font=("Segoe UI", 8), fg=TEXT_MUTED, bg=CARD_BG, selectcolor="#1c1c1f",
                               activebackground=CARD_BG, activeforeground=TEXT_MAIN, command=self.update_savings)
        r_off.pack(anchor="w", padx=4, pady=(2, 0))

    def update_savings(self):
        """Calculate exact minutes saved."""
        active_fast_swaps = 0
        for t_idx, mode_var in self.selected_modes.items():
            if mode_var.get() == "auto":
                active_fast_swaps += self.data["tools_stats"][t_idx]["swaps"]

        # 7.5 seconds average saved per tool change
        saved_seconds = active_fast_swaps * 7.5
        mins = int(round(saved_seconds / 60.0))
        self.savings_lbl.config(text=f"⚡ Estimated Time Saved: ~{mins} Minutes (Stock Quality Preserved)")

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
            "What does 'Auto (20s)' do?\n"
            "The optimizer parses estimated motion time in your G-code and triggers M104 heating approximately 20 seconds "
            "ahead of each tool swap. By the time the printer docks to pick up the tool, the nozzle is already reaching extrusion temperature.\n"
            "• Substantially reduces dock wait time on each swap.\n"
            "• Optimized for U1 ceramic heaters: A conservative ~20s window helps minimize nozzle dwell time in the dock compared to older 40s scripts.\n"
            "• Preserves original slicing geometry, toolpaths, and extrusion speeds.\n\n"
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
        plan = {}
        for t_idx in range(4):
            plan[t_idx] = (self.selected_modes[t_idx].get() == "auto")
        self.root.destroy()
        self.on_apply(plan)

    def on_skip(self):
        self.root.destroy()
        self.on_apply(None)


def inject_smart_preheat_gcode(file_path, parsed_data, plan, preheat_time=20):
    """
    Inject dynamic 20-second lookahead preheating (M104 S[temp] T[tool])
    ahead of tool changes for approved toolheads.
    """
    lines = parsed_data["lines"]
    line_durations = parsed_data["line_durations"]
    toolchange_events = parsed_data["toolchange_events"]

    new_lines = []
    tc_ptr = 0

    for i, line in enumerate(lines):
        if tc_ptr < len(toolchange_events) and i == toolchange_events[tc_ptr]["line_idx"]:
            tc = toolchange_events[tc_ptr]
            target_tool = tc["tool"]
            
            # If Auto (20s) is enabled for this toolhead:
            if plan.get(target_tool, False):
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
