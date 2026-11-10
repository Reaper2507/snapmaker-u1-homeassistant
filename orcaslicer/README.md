# OrcaSlicer presets for Snapmaker U1

These [OrcaSlicer 2.5](https://github.com/OrcaSlicer/OrcaSlicer/releases/tag/v2.5.0) presets cover print settings, matching filaments and optional LAN printer profiles. Use them as starting points for your U1.

---

## About these Profiles: Engineered, Benchmarked & Community-Validated

Rather than relying on theoretical table values or generic defaults, this profile suite was developed through a data-driven engineering and verification process:

- **Empirical & Synthetic Benchmarking:** Evaluated across hundreds of simulated slicing runs on real-world geometries—including large-volume organizers (continuous flow), functional load-bearing mounts, multi-color articulated models (toolchange stress tests), and precision tolerance clips.
- **Toolchanger Kinematics & Tower Optimization:** Deconstructed the mechanical and thermal toolchange cycles of the Snapmaker U1. We engineered a stable rib-structured prime tower (`wipe_tower_wall_type: rib`) with an 8 mm anti-topple brim and a conservative 40 mm³ prime volume, preventing tall towers from failing during high-speed bed accelerations while keeping articulated joints free of stringing.
- **CoreXY Community Best Practices:** Directly incorporates long-term community findings—such as bypassing stepper motor resonance bands by running outer walls at 180–220 mm/s to eliminate Vertical Fine Artifacts (VFA), tuning first-layer height (0.20 mm) for reliable adhesion on smooth and textured PEI plates, and maintaining `ensure_moderate` vertical shell thickness on sloped surfaces.
- **Clean Architecture:** Universal printing goals (*Balanced*, *Fast*, *Functional*, *MultiColor*, *Draft*) are strictly decoupled from material profiles (volumetric flow limits, temperatures, pressure advance), ensuring consistent, reliable results without preset bloat.

---

## Process presets

All presets include integrated **in-slicer hover descriptions (tooltips)** in OrcaSlicer providing instant decision guidance, geometry recommendations, and overhang switching rules directly in the UI.

### 0.4 mm Nozzle Lineup (Standard)

| Preset | Layer | Walls / Infill | Speeds (Outer/Inner/Infill) | Best For |
| --- | --- | --- | --- | --- |
| [U1 Balanced (0.4) - Standard, Allround](process/U1%20Balanced%20%280.4%29%20-%20Standard%2C%20Allround.json) | 0.20 mm | 3 (inner-outer-inner) · 15% Adaptive Cubic | 200 / 300 / 350 mm/s | **The Daily Driver:** Flawless satin outer walls (200 mm/s bypasses CoreXY 120–170 mm/s VFA resonance), high dimensional accuracy. |
| [U1 Fast (0.4) - Boxen, Organizer](process/U1%20Fast%20%280.4%29%20-%20Boxen%2C%20Organizer.json) | 0.24 mm | 2 · 10% Adaptive Cubic | 220 / 380 / 400 mm/s | **High Throughput:** Bins, trays, Gridfinity, organizers. Saves 20–25% print time with narrow solid infill optimization. |
| [U1 Functional (0.4) - Halterungen, Mechanik](process/U1%20Functional%20%280.4%29%20-%20Halterungen%2C%20Mechanik.json) | 0.20 mm | 4 (1.70 mm shell) · 20% Adaptive Cubic | 180 / 250 / 300 mm/s | **Structural Strength:** Brackets, mounts, tools. `ensure_vertical_shell_thickness: moderate` active for steep overhang load resistance. |
| [U1 MultiColor (0.4) - Flexi, Articulated](process/U1%20MultiColor%20%280.4%29%20-%20Flexi%2C%20Articulated.json) | 0.20 mm | 3 · 12% Adaptive Cubic | 190 / 280 / 320 mm/s | **Multi-Material & Articulated:** 40 mm³ prime volume, 30 mm rib-tower with 8 mm brim (anti-topple on 270+ layers), aligned seam & wipe-on-loops. |
| [U1 Draft (0.4) - Passform, Prototyp](process/U1%20Draft%20%280.4%29%20-%20Passform%2C%20Prototyp.json) | 0.24 mm | 2 · 8% Adaptive Cubic | 240 / 420 / 450 mm/s | **Express Prototyping:** Rapid fitment checks, bolt holes, thread checks. |

---

### 0.6 mm Nozzle Lineup (High Volumetric Throughput)

| Preset | Layer | Walls / Infill | Speeds (Outer/Inner/Infill) | Best For |
| --- | --- | --- | --- | --- |
| [U1 Balanced (0.6) - Allround, Gehause](process/U1%20Balanced%20%280.6%29%20-%20Allround%2C%20Gehause.json) | 0.28 mm | 3 (1.9 mm shell) · 15% Adaptive Cubic | 170 / 260 / 300 mm/s | **0.6mm Standard:** Large enclosures and mechanical housings with double wall strength. |
| [U1 Fast (0.6) - Grosse Schalen, Kisten](process/U1%20Fast%20%280.6%29%20-%20Grosse%20Schalen%2C%20Kisten.json) | 0.32 mm | 2 (1.25 mm shell) · 10% Adaptive Cubic | 180 / 280 / 320 mm/s | **Massive Volume:** Crates, deep storage bins, tool trays. Maximizes 0.6 mm melt zone throughput. |
| [U1 Functional (0.6) - Stabile Werkstattteile](process/U1%20Functional%20%280.6%29%20-%20Stabile%20Werkstattteile.json) | 0.24 mm | 4 (2.50 mm solid wall!) · 20% Adaptive Cubic | 150 / 220 / 260 mm/s | **Industrial Duty:** Heavy machine adapters, jigs, wall mounts. |
| [U1 Draft (0.6) - Grosse Prototypen](process/U1%20Draft%20%280.6%29%20-%20Grosse%20Prototypen.json) | 0.36 mm | 2 · 8% Adaptive Cubic | 200 / 320 / 350 mm/s | High-speed large volume mockups and conceptual models. |

---

## Filament presets

Tuned for the Phaetus high-flow hotend and high-speed motion system. All presets are compatible with both **0.4 mm** and **0.6 mm** nozzles; volumetric speed limits automatically scale toolhead speeds safely.

| Preset | Flow Ratio | Max Volumetric Speed (Std / HF) | Nozzle Temp | Recommended Beds | Notes |
| --- | --- | --- | --- | --- | --- |
| [SUNLU PLA+ 2.0](filament/SUNLU%20PLA%2B%202.0.json) | 0.97 | 22 / 38 mm³/s | 215 °C | Textured PEI (60 °C), CryoGrip (35 °C) | PA: 0.022. High-speed flow baseline. |
| [Bambu Lab PLA Basic](filament/Bambu%20Lab%20PLA%20Basic.json) | 0.98 | 22 / 35 mm³/s | 220 °C | Textured PEI (55 °C) | Standard PLA baseline. |
| [ELEGOO PLA Matte](filament/ELEGOO%20PLA%20Matte.json) | 0.96 | 18 / 30 mm³/s | 210 °C | Textured PEI (55 °C) | Low glare finish. |
| [GEEETECH PLA Matte](filament/GEEETECH%20PLA%20Matte.json) | 0.96 | 18 / 30 mm³/s | 210 °C | Textured PEI (55 °C) | Consistent matte perimeters. |
| [JAYO High Speed Matte PETG](filament/JAYO%20High%20Speed%20Matte%20PETG.json) | 0.94 | 16 / 28 mm³/s | 245 °C | Textured PEI (75 °C) | PA: 0.038. Fast cooling, low stringing. |
| [Bambu Lab PETG Basic](filament/Bambu%20Lab%20PETG%20Basic.json) | 0.95 | 16 / 26 mm³/s | 250 °C | Textured PEI (70 °C) | Reliable general-purpose PETG. |
| [eSUN PETG Matte](filament/eSUN%20PETG%20Matte.json) | 0.94 | 14 / 24 mm³/s | 240 °C | Textured PEI (75 °C) | Satin matte finish. |
| [ELEGOO PETG-CF](filament/ELEGOO%20PETG-CF.json) | 0.95 | 15 / 24 mm³/s | 250 °C | Textured PEI (75 °C) | PA: 0.032. **Requires Hardened Steel / Stainless Hotend!** |
| [GEEETECH TPU 95A](filament/GEEETECH%20TPU%2095A.json) | 1.00 | 3.5 / 5.0 mm³/s | 225 °C | Textured PEI (45 °C) | Max volumetric limit prevents toolhead jams. |

> **Note on Colors:** In OrcaSlicer, filament presets manage material physics (temperatures, flow, volumetric limits, cooling). Filament color is assigned dynamically per spool/toolhead in the **Prepare** tab or via Set & Send.

---

## Machine presets (LAN mode)

- [Snapmaker U1 (0.4 nozzle) - Edelstahl LAN](machine/Snapmaker%20U1%20%280.4%29%20-%20Edelstahl%20LAN.json)
- [Snapmaker U1 (0.6 nozzle) - Edelstahl LAN](machine/Snapmaker%20U1%20%280.6%29%20-%20Edelstahl%20LAN.json)

These presets configure direct LAN upload to the U1 and pre-set stainless-steel nozzle thermal offsets.

---

## Install the presets

You can install these presets either manually into your OrcaSlicer user directory (recommended) or via the slicer import dialog.

### Option 1: Copy to your OrcaSlicer User Directory (Recommended)

1. Close OrcaSlicer.
2. Copy the folders ([`process/`](process/), [`filament/`](filament/), [`machine/`](machine/)) directly into your OrcaSlicer configuration folder:
   - **Windows:** `%APPDATA%\OrcaSlicer\user\default\`  
     *(e.g., `C:\Users\<Username>\AppData\Roaming\OrcaSlicer\user\default\`)*
   - **macOS:** `~/Library/Application Support/OrcaSlicer/user/default/`
   - **Linux:** `~/.config/OrcaSlicer/user/default/`
3. Restart OrcaSlicer. The profiles will appear in the **Print**, **Filament**, and **Printer** dropdown lists.

### Option 2: Import via OrcaSlicer UI

1. Open OrcaSlicer.
2. In the top menu, navigate to **File** → **Import** → **Import Configs...** (or press `Ctrl + I`).
3. Select the desired `.json` preset files from the cloned repository.

---

## Support & Feedback

If these engineered U1 profiles saved you print time, nozzle swaps, and wasted filament:

[![Support on Ko-fi](https://img.shields.io/badge/Ko--fi-Buy%20me%20a%20coffee-F16061?style=flat-square&logo=ko-fi&logoColor=white)](https://ko-fi.com/Reaper2507)

Feedback, issues, or filament tuning suggestions are welcome via [GitHub Issues](https://github.com/Reaper2507/snapmaker-u1-homeassistant/issues).
