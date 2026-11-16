#!/usr/bin/env python3
"""
generate_and_sync_profiles.py - Canonical Profile Generator & Multi-Target Synchronizer for Snapmaker U1.

Orchestrates and deploys:
1. The 9 canonical Process Profiles (5x 0.4 mm, 4x 0.6 mm) with verified infill strategies,
   kinematic clamping (<= 500 mm/s), correct wall sequences and valid OrcaSlicer enums.
2. The full suite of 79 Filament Profiles with Prusament ASA bed temp limits (<= 100°C),
   Bambu PLA-CF inheritance fix, and CF nozzle compatibility hardening.
3. Machine Profile validation and default references.
4. Tri-Target Deployment:
   - Release: snapmaker-u1-homeassistant/orcaslicer
   - Codex/Internal: 3d-printing/orcaslicer
   - Active: %APPDATA%/OrcaSlicer/user/default
5. Automated post-generation semantic validation.
"""

import copy
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

# Paths
REPO_PUBLIC = Path(__file__).resolve().parent.parent
REPO_3D = Path(r"C:\Users\torst\Documents\Codex\Git\3d-printing")
APPDATA_USER = Path(os.environ.get("APPDATA", "")) / "OrcaSlicer" / "user" / "default"

PUBLIC_PROC = REPO_PUBLIC / "orcaslicer" / "process"
PUBLIC_FIL  = REPO_PUBLIC / "orcaslicer" / "filament"
PUBLIC_MACH = REPO_PUBLIC / "orcaslicer" / "machine"

GIT_3D_PROC = REPO_3D / "orcaslicer" / "process"
GIT_3D_FIL  = REPO_3D / "orcaslicer" / "filament"
GIT_3D_MACH = REPO_3D / "orcaslicer" / "machine"

APP_PROC = APPDATA_USER / "process"
APP_FIL  = APPDATA_USER / "filament"
APP_MACH = APPDATA_USER / "machine"

for d in [PUBLIC_PROC, PUBLIC_FIL, PUBLIC_MACH, GIT_3D_PROC, GIT_3D_FIL, GIT_3D_MACH, APP_PROC, APP_FIL, APP_MACH]:
    d.mkdir(parents=True, exist_ok=True)

# -------------------------------------------------------------
# 1. Base Machine & Kinematic Constants for Snapmaker U1 CoreXY
# -------------------------------------------------------------
base_04 = {
    "from": "User",
    "inherits": "0.20 Standard @Snapmaker U1 (0.4 nozzle)",
    "compatible_printers": [
        "Snapmaker U1 (0.4 nozzle)",
        "Snapmaker U1 (0.4 nozzle) - Edelstahl LAN"
    ],
    "version": "2.5.0.0",
    "initial_layer_print_height": "0.20",
    "wall_generator": "arachne",
    "wall_sequence": "inner wall/outer wall",
    "reduce_infill_retraction": "1",
    "dont_slow_down_outer_wall": "1",
    "reduce_crossing_wall": "1",
    "outer_wall_line_width": "0.42",
    "inner_wall_line_width": "0.45",
    "top_surface_line_width": "0.40",
    "sparse_infill_line_width": "0.45",
    "outer_wall_acceleration": "4500",
    "inner_wall_acceleration": "7500",
    "top_surface_acceleration": ["3500"] * 8,
    "travel_acceleration": ["15000"] * 8,
    "initial_layer_acceleration": ["1200"] * 8,
    "initial_layer_travel_acceleration": ["10000"] * 8,
    "default_acceleration": "10000",
    "travel_speed": ["500"] * 8,
    "elefant_foot_compensation": "0.12",
    "wipe_before_external_loop": "1",
    "brim_type": "no_brim",
    "enable_support": "0",
    "support_type": "tree(auto)",
    "support_style": "tree_slim",
    "support_threshold_angle": "25",
    "prime_volume": "40",
    "wipe_tower_max_purge_speed": "90",
    "wipe_tower_wall_type": "rib",
    "prime_tower_width": "30",
    "prime_tower_brim_width": "8",
    "plugins": ["set_and_send;;U1 print setup"],
    "slicing_pipeline_plugin": ["U1 print setup"]
}

base_06 = copy.deepcopy(base_04)
base_06.update({
    "inherits": "0.20 Standard @Snapmaker U1 (0.6 nozzle)",
    "compatible_printers": [
        "Snapmaker U1 (0.6 nozzle)",
        "Snapmaker U1 (0.6 nozzle) - Edelstahl LAN"
    ],
    "min_bead_width": "75%",
    "min_feature_size": "20%",
    "wall_transition_filter_deviation": "15%",
    "outer_wall_line_width": "0.60",
    "inner_wall_line_width": "0.62",
    "top_surface_line_width": "0.56",
    "sparse_infill_line_width": "0.64",
    "internal_solid_infill_line_width": "0.62",
    "initial_layer_print_height": "0.25",
    "initial_layer_line_width": "0.62",
    "initial_layer_speed": "50",
    "initial_layer_infill_speed": "115",
    "initial_layer_acceleration": "1500",
    "gap_infill_speed": "250",
    "bridge_speed": "50",
    "internal_bridge_speed": "140",
    "overhang_2_4_speed": "50",
    "overhang_3_4_speed": "30",
    "prime_volume": "50",
    "prime_tower_width": "32"
})

# -------------------------------------------------------------
# 2. Canonical Process Profiles (9 Presets)
# -------------------------------------------------------------
# 1. Balanced 0.4
p_bal_04 = copy.deepcopy(base_04)
p_bal_04.update({
    "name": "U1 Balanced (0.4) - Standard, Allround",
    "print_settings_id": "U1 Balanced (0.4) - Standard, Allround",
    "description": "Torstens Alltags-Standard: Perfekte Balance aus High-Speed CoreXY und makelloser Oberflaeche.\n• 0.20 mm Layer, 3 Waende, 15% Crosshatch Infill.\n• 200 mm/s Aussenwand, 300 mm/s Innenwand, 350 mm/s Infill, 120 mm/s Deckschicht.",
    "layer_height": "0.20",
    "wall_loops": "3",
    "wall_sequence": "inner-outer-inner wall",
    "reduce_infill_retraction": "1",
    "sparse_infill_pattern": "crosshatch",
    "sparse_infill_density": "15%",
    "top_shell_layers": "5",
    "bottom_shell_layers": "4",
    "detect_narrow_internal_solid_infill": "1",
    "ensure_vertical_shell_thickness": "ensure_moderate",
    "outer_wall_speed": ["200", "500", "200", "500", "200", "500", "200", "500"],
    "inner_wall_speed": ["300", "500", "300", "500", "300", "500", "300", "500"],
    "sparse_infill_speed": ["350", "500", "350", "500", "350", "500", "350", "500"],
    "internal_solid_infill_speed": ["280", "500", "280", "500", "280", "500", "280", "500"],
    "top_surface_speed": "120"
})

# 2. Fast 0.4
p_fast_04 = copy.deepcopy(base_04)
p_fast_04.update({
    "name": "U1 Fast (0.4) - Boxen, Organizer",
    "print_settings_id": "U1 Fast (0.4) - Boxen, Organizer",
    "description": "Maximaler Durchsatz fuer Behaelter, Schalen, Gridfinity und Organizer.\n• 0.24 mm Layer, 2 Waende, 10% Adaptive Cubic Infill.\n• 220 mm/s Aussenwand, 380 mm/s Innenwand, 400 mm/s Infill.\n• Adaptive Cubic bietet 3D-Formstabilitaet bei minimaler Druckzeit.",
    "layer_height": "0.24",
    "wall_loops": "2",
    "wall_sequence": "inner wall/outer wall",
    "reduce_infill_retraction": "1",
    "sparse_infill_pattern": "adaptivecubic",
    "sparse_infill_density": "10%",
    "top_shell_layers": "4",
    "bottom_shell_layers": "3",
    "detect_narrow_internal_solid_infill": "1",
    "ensure_vertical_shell_thickness": "ensure_moderate",
    "outer_wall_speed": ["220", "500", "220", "500", "220", "500", "220", "500"],
    "inner_wall_speed": ["380", "500", "380", "500", "380", "500", "380", "500"],
    "sparse_infill_speed": ["400", "500", "400", "500", "400", "500", "400", "500"],
    "internal_solid_infill_speed": ["320", "500", "320", "500", "320", "500", "320", "500"],
    "top_surface_speed": "140"
})

# 3. Functional 0.4
p_func_04 = copy.deepcopy(base_04)
p_func_04.update({
    "name": "U1 Functional (0.4) - Halterungen, Mechanik",
    "print_settings_id": "U1 Functional (0.4) - Halterungen, Mechanik",
    "description": "Massive Belastbarkeit fuer Werkstatt-Halterungen, Adapter und mechanische Teile.\n• 0.20 mm Layer, 4 Waende (1.7 mm Massivhuelle!), 20% Gyroid Infill.\n• Isotrope 3D-Festigkeit, kein Duesenschrammen, Anti-Oozing Retract im Infill aktiv.",
    "layer_height": "0.20",
    "wall_loops": "4",
    "wall_sequence": "inner-outer-inner wall",
    "reduce_infill_retraction": "0",  # Anti-Oozing/Anti-Scraping for heavy infill
    "sparse_infill_pattern": "gyroid",
    "sparse_infill_density": "20%",
    "top_shell_layers": "6",
    "bottom_shell_layers": "5",
    "detect_narrow_internal_solid_infill": "0",
    "ensure_vertical_shell_thickness": "ensure_moderate",
    "outer_wall_speed": ["180", "500", "180", "500", "180", "500", "180", "500"],
    "inner_wall_speed": ["250", "500", "250", "500", "250", "500", "250", "500"],
    "sparse_infill_speed": ["300", "500", "300", "500", "300", "500", "300", "500"],
    "internal_solid_infill_speed": ["240", "500", "240", "500", "240", "500", "240", "500"],
    "top_surface_speed": "110"
})

# 4. QR-Code 0.4
p_qr_04 = copy.deepcopy(base_04)
p_qr_04.update({
    "name": "U1 QR-Code & Schild (0.4) - Scharf, Kontrast",
    "print_settings_id": "U1 QR-Code & Schild (0.4) - Scharf, Kontrast",
    "description": "Spezialprofil fuer 2-Farben-Schilder, QR-Codes und kontrastreiche Beschriftungen.\n• 0.20 mm Layer, 2 Waende, 'Nur eine Wand auf Deckflaechen'.\n• 10% Rectilinear Infill fuer schnellen planen Untergrund ohne Vibrationen.\n• ensure_vertical_shell_thickness auf 'none' korrigiert.",
    "layer_height": "0.20",
    "wall_loops": "2",
    "wall_sequence": "outer wall/inner wall",
    "only_one_wall_top": "1",
    "reduce_infill_retraction": "1",
    "sparse_infill_pattern": "rectilinear",
    "sparse_infill_density": "10%",
    "top_shell_layers": "4",
    "bottom_shell_layers": "3",
    "detect_narrow_internal_solid_infill": "0",
    "ensure_vertical_shell_thickness": "none",
    "outer_wall_speed": ["200", "500", "200", "500", "200", "500", "200", "500"],
    "inner_wall_speed": ["320", "500", "320", "500", "320", "500", "320", "500"],
    "sparse_infill_speed": ["350", "500", "350", "500", "350", "500", "350", "500"],
    "internal_solid_infill_speed": ["280", "500", "280", "500", "280", "500", "280", "500"],
    "top_surface_speed": "120",
    "prime_volume": "30",
    "prime_tower_width": "20",
    "prime_tower_brim_width": "5",
    "wipe_tower_wall_type": "rib"
})

# 5. Draft 0.4
p_draft_04 = copy.deepcopy(base_04)
p_draft_04.update({
    "name": "U1 Draft (0.4) - Passform, Prototyp",
    "print_settings_id": "U1 Draft (0.4) - Passform, Prototyp",
    "description": "Schnelle Masskontrolle und Toleranztests.\n• 0.24 mm Layer, 2 Waende, 15% Lightning Infill (Baumstruktur stuetzt nur Decken, Kern bleibt hohl).\n• 4 Top Shells gegen Pillowing, maximale Zeitersparnis.",
    "layer_height": "0.24",
    "wall_loops": "2",
    "wall_sequence": "inner wall/outer wall",
    "reduce_infill_retraction": "1",
    "sparse_infill_pattern": "lightning",
    "sparse_infill_density": "15%",
    "top_shell_layers": "4",
    "bottom_shell_layers": "3",
    "detect_narrow_internal_solid_infill": "1",
    "ensure_vertical_shell_thickness": "ensure_moderate",
    "outer_wall_speed": ["240", "500", "240", "500", "240", "500", "240", "500"],
    "inner_wall_speed": ["420", "500", "420", "500", "420", "500", "420", "500"],
    "sparse_infill_speed": ["450", "500", "450", "500", "450", "500", "450", "500"],
    "internal_solid_infill_speed": ["350", "500", "350", "500", "350", "500", "350", "500"],
    "top_surface_speed": "150"
})

# 6. Balanced 0.6
p_bal_06 = copy.deepcopy(base_06)
p_bal_06.update({
    "name": "U1 Balanced (0.6) - Allround, Gehause",
    "print_settings_id": "U1 Balanced (0.6) - Allround, Gehause",
    "description": "Der taegliche Allrounder mit 0.6 mm Nozzle: 35-45% schneller bei gleicher Festigkeit wie 0.4 (3-Wall).\n• 0.30 mm Layer, 2 dicke Waende (1.22 mm), 3 Top / 3 Bottom Shells.\n• Arachne + 15% Crosshatch Infill.",
    "layer_height": "0.30",
    "wall_loops": "2",
    "wall_sequence": "inner wall/outer wall",
    "reduce_infill_retraction": "1",
    "outer_wall_line_width": "0.60",
    "inner_wall_line_width": "0.62",
    "top_shell_layers": "3",
    "bottom_shell_layers": "3",
    "top_shell_thickness": "0.90",
    "sparse_infill_pattern": "crosshatch",
    "sparse_infill_density": "15%",
    "detect_narrow_internal_solid_infill": "0",
    "ensure_vertical_shell_thickness": "ensure_moderate",
    "outer_wall_speed": ["200", "500", "200", "500", "200", "500", "200", "500"],
    "inner_wall_speed": ["320", "500", "320", "500", "320", "500", "320", "500"],
    "sparse_infill_speed": ["360", "500", "360", "500", "360", "500", "360", "500"],
    "internal_solid_infill_speed": ["300", "500", "300", "500", "300", "500", "300", "500"],
    "top_surface_speed": "140",
    "default_acceleration": "10000",
    "outer_wall_acceleration": "5000"
})

# 7. Fast 0.6
p_fast_06 = copy.deepcopy(base_06)
p_fast_06.update({
    "name": "U1 Fast (0.6) - Grosse Schalen, Kisten",
    "print_settings_id": "U1 Fast (0.6) - Grosse Schalen, Kisten",
    "description": "Echte 0.6 mm Durchsatz-Power fuer grosse Werkstattkisten, Organizer und Schalen.\n• 0.34 mm Layer, 2 Waende (1.18 mm), 3 Top / 3 Bottom Shells.\n• 10% Adaptive Cubic Infill fuer Formstabilitaet bei geringstem Materialeinsatz.",
    "layer_height": "0.34",
    "wall_loops": "2",
    "wall_sequence": "inner wall/outer wall",
    "outer_wall_line_width": "0.58",
    "inner_wall_line_width": "0.60",
    "top_shell_layers": "3",
    "bottom_shell_layers": "3",  # Fixed: 3 instead of 2
    "top_shell_thickness": "0.95",
    "only_one_wall_top": "1",
    "reduce_infill_retraction": "1",
    "sparse_infill_pattern": "adaptivecubic",
    "sparse_infill_density": "10%",
    "ensure_vertical_shell_thickness": "ensure_moderate",  # Fixed: ensure_moderate instead of none
    "detect_narrow_internal_solid_infill": "0",
    "initial_layer_infill_speed": "120",
    "internal_bridge_speed": "150",
    "outer_wall_speed": ["220", "500", "220", "500", "220", "500", "220", "500"],
    "inner_wall_speed": ["360", "500", "360", "500", "360", "500", "360", "500"],
    "sparse_infill_speed": ["400", "500", "400", "500", "400", "500", "400", "500"],
    "internal_solid_infill_speed": ["320", "500", "320", "500", "320", "500", "320", "500"],
    "top_surface_speed": "150",
    "default_acceleration": "12000",
    "outer_wall_acceleration": "5500"
})

# 8. Functional 0.6
p_func_06 = copy.deepcopy(base_06)
p_func_06.update({
    "name": "U1 Functional (0.6) - Stabile Werkstattteile",
    "print_settings_id": "U1 Functional (0.6) - Stabile Werkstattteile",
    "description": "Industrielle Stabilitaet fuer Schwerlasthalter und Maschinenadapter.\n• 0.28 mm Layer, 3 dicke Waende (1.90 mm Massivwand!), 4 Top / 3 Bottom Shells.\n• 18% Gyroid Infill fuer multidirektionale Festigkeit und Schwingungsdaempfung.",
    "layer_height": "0.28",
    "wall_loops": "3",
    "wall_sequence": "inner-outer-inner wall",
    "reduce_infill_retraction": "0",  # Anti-Oozing/Anti-Scraping for heavy infill
    "top_shell_layers": "4",
    "bottom_shell_layers": "3",
    "top_shell_thickness": "1.05",
    "outer_wall_line_width": "0.62",
    "inner_wall_line_width": "0.64",
    "sparse_infill_line_width": "0.65",
    "internal_solid_infill_line_width": "0.64",
    "sparse_infill_pattern": "gyroid",
    "sparse_infill_density": "18%",
    "ensure_vertical_shell_thickness": "ensure_moderate",
    "detect_narrow_internal_solid_infill": "0",
    "outer_wall_speed": ["180", "450", "180", "450", "180", "450", "180", "450"],
    "inner_wall_speed": ["280", "500", "280", "500", "280", "500", "280", "500"],
    "sparse_infill_speed": ["320", "500", "320", "500", "320", "500", "320", "500"],
    "internal_solid_infill_speed": ["280", "500", "280", "500", "280", "500", "280", "500"],
    "top_surface_speed": "130",
    "default_acceleration": "10000",
    "outer_wall_acceleration": "5000"
})

# 9. Draft 0.6
p_draft_06 = copy.deepcopy(base_06)
p_draft_06.update({
    "name": "U1 Draft (0.6) - Grosse Prototypen",
    "print_settings_id": "U1 Draft (0.6) - Grosse Prototypen",
    "description": "Druckt riesige Volumenbauteile und Passform-Prototypen in Rekordzeit.\n• 0.36 mm Layer, 2 Waende (1.18 mm), 3 Top / 2 Bottom Shells, 15% Lightning Infill.",
    "layer_height": "0.36",
    "wall_loops": "2",
    "wall_sequence": "inner wall/outer wall",
    "outer_wall_line_width": "0.58",
    "inner_wall_line_width": "0.60",
    "top_shell_layers": "3",
    "bottom_shell_layers": "2",
    "top_shell_thickness": "0.95",
    "only_one_wall_top": "1",
    "reduce_infill_retraction": "1",
    "sparse_infill_pattern": "lightning",
    "sparse_infill_density": "15%",
    "ensure_vertical_shell_thickness": "none",
    "detect_narrow_internal_solid_infill": "0",
    "initial_layer_speed": "55",
    "initial_layer_infill_speed": "120",
    "internal_bridge_speed": "160",
    "outer_wall_speed": ["230", "500", "230", "500", "230", "500", "230", "500"],
    "inner_wall_speed": ["380", "500", "380", "500", "380", "500", "380", "500"],
    "sparse_infill_speed": ["420", "500", "420", "500", "420", "500", "420", "500"],
    "internal_solid_infill_speed": ["340", "500", "340", "500", "340", "500", "340", "500"],
    "top_surface_speed": "150",
    "default_acceleration": "12000",
    "outer_wall_acceleration": "6000"
})

all_processes = [
    p_bal_04, p_fast_04, p_func_04, p_qr_04, p_draft_04,
    p_bal_06, p_fast_06, p_func_06, p_draft_06
]


def deploy_processes():
    print("=== Deploying Process Profiles (9 Presets) ===")
    for p in all_processes:
        fname = f"{p['name']}.json"
        content = json.dumps(p, indent=4, ensure_ascii=False)
        for target_dir in [PUBLIC_PROC, GIT_3D_PROC, APP_PROC]:
            fpath = target_dir / fname
            with open(fpath, "w", encoding="utf-8") as out:
                out.write(content)
        print(f"  + Deployed: {fname} (Pattern: {p['sparse_infill_pattern']}, Speed clamped to <= 500)")


def deploy_filaments():
    print("\n=== Processing & Synchronizing Filament Profiles ===")
    # Source is PUBLIC_FIL as the canonical catalog (79 tracked files)
    # We do NOT touch or stage Torsten's uncommitted Carbon-Platte files!
    tracked_filaments = [f for f in sorted(PUBLIC_FIL.glob("*.json")) if "Carbon-Platte" not in f.name]
    print(f"  Found {len(tracked_filaments)} tracked filament profiles.")

    for fpath in tracked_filaments:
        with open(fpath, "r", encoding="utf-8") as jf:
            data = json.load(jf)

        fname = fpath.name
        changed = False

        # 1. Prusament ASA bed temp fix (<= 100°C)
        if "Prusament ASA" in fname:
            for k in ["hot_plate_temp", "textured_plate_temp", "hot_plate_temp_initial_layer", "textured_plate_temp_initial_layer"]:
                if k in data and isinstance(data[k], list):
                    data[k] = ["100"] * len(data[k])
                    changed = True

        # 2. Bambu Lab PLA-CF inheritance fix
        if fname == "Bambu Lab PLA-CF.json":
            if data.get("inherits") != "Snapmaker PLA-CF @U1 0.4 nozzle":
                data["inherits"] = "Snapmaker PLA-CF @U1 0.4 nozzle"
                changed = True
        elif fname == "Bambu Lab PLA-CF (0.6 Nozzle).json":
            if data.get("inherits") != "Snapmaker PLA-CF @U1 0.6 nozzle":
                data["inherits"] = "Snapmaker PLA-CF @U1 0.6 nozzle"
                changed = True

        # 3. CF safety: remove stainless steel nozzle from compatible_printers for abrasive filaments
        is_cf = ("-CF" in fname) or ("Carbon Fiber" in fname)
        if is_cf and "compatible_printers" in data:
            orig_len = len(data["compatible_printers"])
            data["compatible_printers"] = [cp for cp in data["compatible_printers"] if "Edelstahl" not in cp]
            if len(data["compatible_printers"]) != orig_len:
                changed = True

        content = json.dumps(data, indent=4, ensure_ascii=False)

        # Deploy to all 3 targets
        for target_dir in [PUBLIC_FIL, GIT_3D_FIL, APP_FIL]:
            out_file = target_dir / fname
            with open(out_file, "w", encoding="utf-8") as out:
                out.write(content)

    print(f"  + Synchronized {len(tracked_filaments)} filaments to Public Git, 3d-printing Git, and AppData.")


def deploy_machines():
    print("\n=== Synchronizing Machine Profiles ===")
    tracked_machines = [f for f in sorted(PUBLIC_MACH.glob("*.json")) if "Carbon-Platte" not in f.name]
    for mpath in tracked_machines:
        with open(mpath, "r", encoding="utf-8") as jf:
            data = json.load(jf)
        fname = mpath.name

        for target_dir in [PUBLIC_MACH, GIT_3D_MACH, APP_MACH]:
            target_data = dict(data)
            # Public repo must be sanitized for GitHub; local active slicer and internal backup need real LAN IP
            if target_dir == PUBLIC_MACH:
                target_data["print_host"] = "http://192.168.x.x:7125"
            else:
                target_data["print_host"] = "192.168.178.182"

            out_file = target_dir / fname
            with open(out_file, "w", encoding="utf-8") as out:
                json.dump(target_data, out, indent=4, ensure_ascii=False)
                out.write("\n")
        print(f"  + Synced Machine Profile: {fname}")


def run_validator():
    print("\n=== Running Semantic Validation (Gate A) ===")
    validator_script = REPO_PUBLIC / "tools" / "verify_orcaslicer_profiles.py"
    res_pub = subprocess.run([sys.executable, str(validator_script), "--repo-dir", str(REPO_PUBLIC)], capture_output=True, text=True)
    print(res_pub.stdout)
    if res_pub.returncode != 0:
        print("[ERROR] Public repository failed semantic validation!")
        return False

    res_3d = subprocess.run([sys.executable, str(validator_script), "--repo-dir", str(REPO_3D)], capture_output=True, text=True)
    print(res_3d.stdout)
    if res_3d.returncode != 0:
        print("[ERROR] 3d-printing repository failed semantic validation!")
        return False

    return True


if __name__ == "__main__":
    deploy_processes()
    deploy_filaments()
    deploy_machines()
    if run_validator():
        print("\n[SUCCESS] Deterministic deployment and validation completed across all three targets.")
    else:
        print("\n[FAIL] Validation issues detected.")
        sys.exit(1)
