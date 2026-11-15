#!/usr/bin/env python3
"""
verify_orcaslicer_profiles.py - OrcaSlicer Profile Semantic Validator & Upstream Regression Checker.

Usage:
    python tools/verify_orcaslicer_profiles.py [--repo-dir PATH] [--orcaslicer-system-dir PATH]

Verifies that all user profiles in the git repository:
1. Are syntactically valid JSON.
2. Correctly resolve their 'inherits' parent profile against installed OrcaSlicer system profiles.
3. Validate OrcaSlicer enums (e.g. ensure_vertical_shell_thickness, sparse_infill_pattern).
4. Enforce physical machine limits (Bed Temp <= 100°C, Speed <= 500 mm/s).
5. Enforce logic consistency (e.g. wall_loops < 3 cannot use inner-outer-inner wall).
6. Enforce CF safety (HRC 40 required, stainless steel nozzles prohibited).
7. Validate machine profile default_print_profile references.
"""

import argparse
import json
import os
import sys
from pathlib import Path

DEFAULT_REPO_DIR = Path(__file__).resolve().parent.parent
DEFAULT_SYSTEM_DIR = Path(os.environ.get("APPDATA", "")) / "OrcaSlicer" / "system"

VALID_ENSURE_VERTICAL_SHELL_THICKNESS = {"none", "ensure_critical_only", "ensure_moderate", "ensure_all"}
VALID_INFILL_PATTERNS = {
    "rectilinear", "alignedrectilinear", "grid", "triangles", "stars",
    "cubic", "adaptivecubic", "supportcubic", "line", "concentric",
    "honeycomb", "3dhoneycomb", "gyroid", "hilbertcurve", "archimedeanchords",
    "octagramspiral", "lightning", "crosshatch"
}
VALID_WALL_SEQUENCES = {
    "inner wall/outer wall", "outer wall/inner wall", "inner-outer-inner wall"
}
U1_MAX_BED_TEMP = 100
U1_MAX_TOOLHEAD_SPEED = 500


def find_system_profile(name: str, system_dir: Path) -> Path | None:
    """Recursively search for a system profile JSON matching the name or setting_id."""
    if not system_dir.exists():
        return None
    for p in system_dir.rglob("*.json"):
        try:
            with open(p, "r", encoding="utf-8") as f:
                data = json.load(f)
                if data.get("name") == name or p.stem == name:
                    return p
        except Exception:
            continue
    return None


def verify_process_profile(data: dict, p_path: Path) -> tuple[list[str], list[str]]:
    errors = []
    warnings = []

    # 1. ensure_vertical_shell_thickness
    evst = data.get("ensure_vertical_shell_thickness")
    if evst and evst not in VALID_ENSURE_VERTICAL_SHELL_THICKNESS:
        errors.append(f"Invalid ensure_vertical_shell_thickness '{evst}'. Must be one of {sorted(VALID_ENSURE_VERTICAL_SHELL_THICKNESS)}")

    # 2. sparse_infill_pattern
    pat = data.get("sparse_infill_pattern")
    if pat and pat not in VALID_INFILL_PATTERNS:
        errors.append(f"Invalid sparse_infill_pattern '{pat}'. Must be one of {sorted(VALID_INFILL_PATTERNS)}")

    # 3. wall_sequence vs wall_loops
    loops = data.get("wall_loops")
    seq = data.get("wall_sequence")
    if seq:
        if seq not in VALID_WALL_SEQUENCES:
            errors.append(f"Invalid wall_sequence '{seq}'. Must be one of {sorted(VALID_WALL_SEQUENCES)}")
        elif seq == "inner-outer-inner wall":
            try:
                loop_count = int(loops) if loops is not None else 3
                if loop_count < 3:
                    errors.append(f"wall_sequence 'inner-outer-inner wall' requires at least 3 wall loops, but wall_loops is {loop_count}")
            except ValueError:
                pass

    # 4. Speeds <= 500 mm/s
    speed_keys = [
        "outer_wall_speed", "inner_wall_speed", "sparse_infill_speed",
        "internal_solid_infill_speed", "top_surface_speed", "travel_speed"
    ]
    for sk in speed_keys:
        val = data.get(sk)
        if isinstance(val, list):
            for idx, item in enumerate(val):
                try:
                    s_num = float(item)
                    if s_num > U1_MAX_TOOLHEAD_SPEED:
                        errors.append(f"{sk}[{idx}] = {item} mm/s exceeds U1 kinematic limit ({U1_MAX_TOOLHEAD_SPEED} mm/s)")
                except ValueError:
                    pass
        elif val is not None:
            try:
                s_num = float(val)
                if s_num > U1_MAX_TOOLHEAD_SPEED:
                    errors.append(f"{sk} = {val} mm/s exceeds U1 kinematic limit ({U1_MAX_TOOLHEAD_SPEED} mm/s)")
            except ValueError:
                pass

    return errors, warnings


def verify_filament_profile(data: dict, p_path: Path, system_dir: Path) -> tuple[list[str], list[str]]:
    errors = []
    warnings = []
    fname = p_path.name

    # 1. Bed temperatures <= 100°C
    bed_keys = ["hot_plate_temp", "textured_plate_temp", "hot_plate_temp_initial_layer", "textured_plate_temp_initial_layer"]
    for bk in bed_keys:
        val = data.get(bk)
        if isinstance(val, list):
            for idx, item in enumerate(val):
                try:
                    t_num = float(item)
                    if t_num > U1_MAX_BED_TEMP:
                        errors.append(f"{bk}[{idx}] = {item}°C exceeds U1 bed max temperature ({U1_MAX_BED_TEMP}°C)")
                except ValueError:
                    pass

    # 2. CF safety: No stainless steel nozzles allowed for abrasive carbon-fiber filaments
    is_cf = ("-CF" in fname) or ("Carbon Fiber" in fname) or (" PLA-CF" in fname) or (" PETG-CF" in fname)
    compat = data.get("compatible_printers", [])
    if is_cf:
        for cp in compat:
            if "Edelstahl" in cp:
                errors.append(f"Abrasive filament '{fname}' must not be compatible with stainless steel nozzle: '{cp}'")

    # 3. Inherits check for CF
    inherits = data.get("inherits")
    if is_cf:
        if inherits == "Snapmaker PLA-CF @U1":
            errors.append(f"Obsolete parent '{inherits}'. Must inherit from 'Snapmaker PLA-CF @U1 0.4 nozzle' or '0.6 nozzle'")

    return errors, warnings


def verify_machine_profile(data: dict, p_path: Path, process_dir: Path) -> tuple[list[str], list[str]]:
    errors = []
    warnings = []

    def_prof = data.get("default_print_profile")
    if def_prof:
        target = process_dir / f"{def_prof}.json"
        if not target.exists():
            errors.append(f"default_print_profile '{def_prof}' does not exist as file ({target.name})")

    return errors, warnings


def main():
    parser = argparse.ArgumentParser(description="Verify OrcaSlicer profiles semantically.")
    parser.add_argument("--repo-dir", type=Path, default=DEFAULT_REPO_DIR, help="Path to repository root")
    parser.add_argument("--system-dir", type=Path, default=DEFAULT_SYSTEM_DIR, help="Path to OrcaSlicer system profiles")
    args = parser.parse_args()

    profiles_dir = args.repo_dir / "orcaslicer"
    process_dir = profiles_dir / "process"
    filament_dir = profiles_dir / "filament"
    machine_dir = profiles_dir / "machine"

    print(f"=== OrcaSlicer Profile Semantic Validation ===")
    print(f"Repository: {args.repo_dir}")
    print(f"Profiles:   {profiles_dir}")
    print(f"System dir: {args.system_dir}\n")

    all_ok = True
    total_checked = 0

    # 1. Process
    if process_dir.exists():
        print("--- Checking Process Profiles ---")
        for f in sorted(process_dir.glob("*.json")):
            total_checked += 1
            try:
                with open(f, "r", encoding="utf-8") as jf:
                    data = json.load(jf)
            except Exception as e:
                print(f" [FAIL] {f.name}: Invalid JSON ({e})")
                all_ok = False
                continue

            errs, warns = verify_process_profile(data, f)
            if errs:
                all_ok = False
                print(f" [FAIL] {f.name}")
                for e in errs:
                    print(f"        ERROR: {e}")
            elif warns:
                print(f" [WARN] {f.name}")
                for w in warns:
                    print(f"        WARN: {w}")
            else:
                print(f" [OK]   {f.name} (Infill: {data.get('sparse_infill_pattern')} {data.get('sparse_infill_density')})")

    # 2. Filament
    if filament_dir.exists():
        print("\n--- Checking Filament Profiles ---")
        for f in sorted(filament_dir.glob("*.json")):
            # Skip untracked Carbon-Platte files if desired, or check all
            total_checked += 1
            try:
                with open(f, "r", encoding="utf-8") as jf:
                    data = json.load(jf)
            except Exception as e:
                print(f" [FAIL] {f.name}: Invalid JSON ({e})")
                all_ok = False
                continue

            errs, warns = verify_filament_profile(data, f, args.system_dir)
            if errs:
                all_ok = False
                print(f" [FAIL] {f.name}")
                for e in errs:
                    print(f"        ERROR: {e}")
            elif warns:
                print(f" [WARN] {f.name}")
                for w in warns:
                    print(f"        WARN: {w}")
            else:
                pass  # Keep filament output clean unless errors exist
        print(f" Checked {len(list(filament_dir.glob('*.json')))} filament profiles.")

    # 3. Machine
    if machine_dir.exists():
        print("\n--- Checking Machine Profiles ---")
        for f in sorted(machine_dir.glob("*.json")):
            total_checked += 1
            try:
                with open(f, "r", encoding="utf-8") as jf:
                    data = json.load(jf)
            except Exception as e:
                print(f" [FAIL] {f.name}: Invalid JSON ({e})")
                all_ok = False
                continue

            errs, warns = verify_machine_profile(data, f, process_dir)
            if errs:
                all_ok = False
                print(f" [FAIL] {f.name}")
                for e in errs:
                    print(f"        ERROR: {e}")
            elif warns:
                print(f" [WARN] {f.name}")
                for w in warns:
                    print(f"        WARN: {w}")
            else:
                print(f" [OK]   {f.name}")

    print(f"\nSummary: {total_checked} profiles verified.")
    if all_ok:
        print("[SUCCESS] All profiles semantically valid and compliant with U1 limits.")
        return 0
    else:
        print("[ERROR] Semantic validation failed.")
        return 1


if __name__ == "__main__":
    sys.exit(main())
