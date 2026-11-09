# OrcaSlicer presets for Snapmaker U1

These [OrcaSlicer 2.5](https://github.com/OrcaSlicer/OrcaSlicer/releases/tag/v2.5.0) presets cover print settings, matching filaments and optional LAN printer profiles. Use them as starting points for your U1.

---
## Process presets

All presets include integrated **in-slicer hover descriptions (tooltips)** in OrcaSlicer providing instant decision guidance, geometry recommendations, and overhang switching rules directly in the UI.

### 0.4 mm Nozzle Lineup (Standard)

| Preset | Layer | Walls / Infill | Speeds (Outer/Inner/Infill) | Best For |
| --- | --- | --- | --- | --- |
| [U1 Quality](process/U1%20Quality%20%280.4%20Nozzle%29.json) | 0.20 mm | 3 (`inner-outer-inner`) · 15% Gyroid | 210 / 210 / 270 mm/s | Display models, figurines, smooth cylinders (VFA suppression via symmetric 0.40 mm perimeters). |
| [U1 Functional](process/U1%20Functional%20%280.4%20Nozzle%29.json) | 0.24 mm | 3 (`inner-outer`) · 15% Adaptive Cubic | 200 / 260 / 270 mm/s | Structural brackets, adapters, tools, and mechanical assemblies. |
| [U1 Fast](process/U1%20Fast%20%280.4%20Nozzle%29.json) | 0.28 mm | 2 (`inner-outer`) · 12% Cubic | 200 / 300 / 270 mm/s | Everyday utility prints, bins, trays, Gridfinity, and household organizers. |
| [U1 Draft](process/U1%20Draft%20%280.4%20Nozzle%29.json) | 0.28 mm | 2 (`inner-outer`) · 8% Support Cubic | 220 / 300 / 300 mm/s | Rapid prototypes, dimensional checks, and quick fitment tests (`reduce_crossing_wall = 0`). |
| [U1 Extreme Draft](process/U1%20Extreme%20Draft%20%280.4%20Nozzle%29.json) | 0.28 mm | 2 (`inner-outer`) · 15% Lightning | 220 / 300 / 300 mm/s | Ultra-fast hollow form models, mockups, and cosmetic shells (minimal material use). |

### 0.6 mm Nozzle Lineup (High Volumetric Throughput)

| Preset | Layer | Walls / Infill | Speeds (Outer/Inner/Infill) | Best For |
| --- | --- | --- | --- | --- |
| [U1 Quality (0.6 Nozzle)](process/U1%20Quality%20%280.6%20Nozzle%29.json) | 0.24 mm | 3 (`inner-outer-inner`) · 15% Gyroid | 160 / 200 / 220 mm/s | Smooth cosmetic shells and enclosures with double the wall strength of 0.4 mm nozzles. |
| [U1 Functional (0.6 Nozzle)](process/U1%20Functional%20%280.6%20Nozzle%29.json) | 0.38 mm | 3 (`inner-outer`) · 15% Adaptive Cubic | 120 / 150 / 160 mm/s | **The Heavy-Duty Standard:** 0.38 mm layer sweetspot (63% ratio) with Arachne for high shear strength. |
| [U1 Fast (0.6 Nozzle)](process/U1%20Fast%20%280.6%20Nozzle%29.json) | 0.38 mm | 2 (`inner-outer`) · 12% Cubic | 120 / 150 / 160 mm/s | Large storage bins, crates, tubs, and organizers (pushes U1 25–30 mm³/s hotend flow). |
| [U1 Draft (0.6 Nozzle)](process/U1%20Draft%20%280.6%20Nozzle%29.json) | 0.42 mm | 2 (`inner-outer`) · 8% Support Cubic | 120 / 150 / 160 mm/s | High-speed large volume mockups and conceptual molds (`reduce_crossing_wall = 0`). |
| [U1 Extreme Draft (0.6 Nozzle)](process/U1%20Extreme%20Draft%20%280.6%20Nozzle%29.json) | 0.42 mm | 2 (`inner-outer`) · 15% Lightning | 120 / 150 / 160 mm/s | Rapid full-scale volumetric models and architectural mockups with minimum material. |

### Intelligent In-Slicer Decision Matrix (When to tweak)
- **Steep Overhangs (>45°):** In `Quality` profiles, switch wall sequence from `Inner/Outer/Inner` to `Inner/Outer` to ensure overhanging perimeters have supporting interior bead contact.
- **Tiny Features & Small Peaks:** Ensure minimum layer time cooling slowdown is permitted in filament cooling settings to prevent thermal plastic melting on rapid layers.
- **Heavy Mechanical Stress:** Add wall loops (4–5 walls) instead of excessively increasing infill density.
- **Flat Top Ceilings:** If using `Lightning` or `Support Cubic` and top surfaces show sagging, switch to `Cubic` or `Adaptive Cubic` for uniform ceiling scaffolding.

### Community-validated U1 Hardware Highlights
- **VFA Resonance Suppression:** CoreXY stepper motor resonance on the U1 is prominent between 120 and 170 mm/s. Running outer walls at **200–210 mm/s** with `dont_slow_down_outer_wall: 1` skips this ripple band.
- **Nozzle Dragging Prevention:** `reduce_infill_retraction = 0` is set to ensure the nozzle does not scrape or drag across printed infill patterns during high-speed travel moves.
- **Accurate Layer Counts:** `top_shell_thickness = 0` prevents the slicer from forcing unwanted extra top solid layers due to inherited millimeter thickness floors.
- **First Layer Reliability:** `initial_layer_print_height = 0.20 mm` (down from 0.25 mm) ensures reliable first-layer squish on smooth build plates (e.g., BIQU Glacier / Frostbite).
- **AUX Fan Warping Warning:** The U1 auxiliary fan blows unilaterally from the left side. For PLA and PETG, keep AUX fan speed at **0%** in filament presets to prevent bed warping on the left side.

Compare the time and material estimates in **Preview** after slicing your model. The result depends on the geometry, material, support and tool changes.

---
## Filament presets

[Download the 19 filament presets](filament/) for the 0.4 mm U1. Pick the preset for your actual spool and confirm its temperature and flow on a small print.

- **Bambu Lab:** PLA Basic (Black, Jade White), PETG Basic (White).
- **SUNLU:** PLA+ 2.0 (Black, White, Bone White, Little Blue, Olive Green, Sunny Orange).
- **eSUN:** PETG Matte (Apricot, Concrete Grey, Blue Brick, Dark Grey).
- **ELEGOO:** PLA Matte (Beige), PETG-CF (Black, Dark Grey). Use a suitable hardened nozzle for PETG-CF.
- **GEEETECH:** PLA Matte (Grey), TPU 95A (Transparent Silver).
- **Generic:** High Speed Matte PETG (Black), a starting point for an unidentified brand.

---
## Install the presets

1. In OrcaSlicer, enable the **Snapmaker U1** system printer for your nozzle size. Open **Help → Show Configuration Folder**, then close OrcaSlicer.
2. Back up your presets. [Download the repository ZIP](https://github.com/Reaper2507/snapmaker-u1-homeassistant/archive/refs/heads/main.zip) and extract it. Copy the JSON files from `orcaslicer/process/` and `orcaslicer/filament/` into the matching `process/` and `filament/` folders in your Orca user profile. The usual location is `user/default/` when signed out or the account folder under `user/` when using OrcaCloud. The optional stainless-steel LAN printer presets go into `machine/`. Preserve any presets you already customized.
3. Reopen OrcaSlicer and select the matching **Snapmaker U1** and nozzle in **Prepare**. Open the **Process** dropdown to find the entries under **User presets**, and use each toolhead’s **Filament** dropdown to assign its material. If a preset is missing, check its `inherits` and `compatible_printers` fields against the system printer and nozzle you enabled.

---
![OrcaSlicer Prepare screen showing the U1 filament selections and process user presets](../screenshots/orcaslicer-u1-user-presets.png)

See the [OrcaSlicer guide to user profile folders](https://github.com/OrcaSlicer/OrcaSlicer/wiki/user_profiles) for platform and account details.

## Set & Send by LayerLab

Thanks to LayerLab for bringing the U1’s print setup to OrcaSlicer. Set & Send adds a pre-print dialog for filament-to-toolhead mapping and supported U1 job options. [Get Set & Send and follow LayerLab’s installation guide](https://layerlab.store/pages/set-and-send).

1. Select the U1 in OrcaSlicer. Use the network icon next to the printer to enter your U1’s local address.
2. On a plugin-capable OrcaSlicer build, subscribe to Set & Send and activate it in **Plugins**. In each process preset you want to use, enable Advanced or Expert mode and add **U1 print setup — Set & Send** under **Others → Slicing Pipeline Plugin**, then save the preset. Check the printer address when Orca asks for network access.
3. Slice, choose **Print**, then **Upload & Print**. Review the mapping and options in the Set & Send dialog. For builds without plugin support, LayerLab’s guide covers the separate Python post-processing script. Use one setup method per process preset.
