# OrcaSlicer presets for Snapmaker U1

These [OrcaSlicer 2.5](https://github.com/OrcaSlicer/OrcaSlicer/releases/tag/v2.5.0) presets cover print settings, matching filaments and optional LAN printer profiles. Use them as starting points for your U1.

---
## Process presets

Alle Profile enthalten integrierte **Hover-Beschreibungen (Tooltips)** direkt in OrcaSlicer mit Empfehlungen für Geometrie, Wandstärken und Praxistipps für Überhänge.

### 0.4 mm Düse (Standard)

| Preset | Schichthöhe | Wände / Infill | Tempo (Außen/Innen/Infill) | Typischer Einsatz |
| --- | --- | --- | --- | --- |
| [U1 Quality](process/U1%20Quality%20%280.4%20Nozzle%29.json) | 0.20 mm | 3 (`inner-outer-inner`) · 15% Gyroid | 210 / 210 / 270 mm/s | Deko, Figuren, glatte Zylinder (VFA-Unterdrückung durch symmetrische 0.40 mm Wände). |
| [U1 Functional](process/U1%20Functional%20%280.4%20Nozzle%29.json) | 0.24 mm | 3 (`inner-outer`) · 15% Adaptive Cubic | 200 / 260 / 270 mm/s | Hochbelastete Halterungen, Adapter, Werkzeuge und Baugruppen. |
| [U1 Fast](process/U1%20Fast%20%280.4%20Nozzle%29.json) | 0.28 mm | 2 (`inner-outer`) · 12% Cubic | 200 / 300 / 270 mm/s | Alltags-Standard für Boxen, Schalen, Trays, Gridfinity und Haushaltshelfer. |
| [U1 Draft](process/U1%20Draft%20%280.4%20Nozzle%29.json) | 0.28 mm | 2 (`inner-outer`) · 8% Support Cubic | 220 / 300 / 300 mm/s | Schnelle Prototypen, Passform- und Maßprüfungen (`reduce_crossing_wall = 0`). |
| [0.20 U1 Mehrfarbe Kompakt](process/0.20%20U1%20Mehrfarbe%20Kompakt.json) | 0.20 mm | 3 Wände · 15% Gyroid | Snapmaker Standard | Mehrfarbdruck mit kompaktem Type-2-Turm & Rippen-Purge-Wand. |
| [0.20 Antigravity Optimized](process/0.20%20Antigravity%20Optimized.json) | 0.20 mm | 3 Wände · 15% Gyroid | Snapmaker Standard | Baseline-Referenzprofil zum Vergleich mit Werkseinstellungen. |

### 0.6 mm Düse (High Throughput)

| Preset | Schichthöhe | Wände / Infill | Tempo (Außen/Innen/Infill) | Typischer Einsatz |
| --- | --- | --- | --- | --- |
| [U1 Quality (0.6 Nozzle)](process/U1%20Quality%20%280.6%20Nozzle%29.json) | 0.24 mm | 3 (`inner-outer-inner`) · 15% Gyroid | 160 / 200 / 220 mm/s | Glatte Deko und Gehäuse bei doppelter Wandstärke gegenüber 0.4 mm. |
| [U1 Functional (0.6 Nozzle)](process/U1%20Functional%20%280.6%20Nozzle%29.json) | 0.30 mm | 3 (`inner-outer`) · 15% Adaptive Cubic | 140 / 180 / 200 mm/s | Extrem feste Werkstatthalterungen und mechanische Funktionsteile. |
| [U1 Fast (0.6 Nozzle)](process/U1%20Fast%20%280.6%20Nozzle%29.json) | 0.38 mm | 2 (`inner-outer`) · 12% Cubic | 120 / 150 / 160 mm/s | Große Wannen, Schalen, Kisten (nutzt 25–30 mm³/s Hotend-Volumenstrom voll aus!). |
| [U1 Draft (0.6 Nozzle)](process/U1%20Draft%20%280.6%20Nozzle%29.json) | 0.42 mm | 2 (`inner-outer`) · 8% Support Cubic | 120 / 150 / 160 mm/s | Maximaler Materialdurchsatz für riesige Volumenkörper und Formenbau. |

### Community-validated U1 Tuning Highlights
- **VFA Ripple Suppression:** CoreXY stepper resonance on the U1 occurs noticeably in the 120–170 mm/s range. Running outer walls at **200–210 mm/s** (`dont_slow_down_outer_wall: 1`) skips this resonance window, producing significantly smoother surface walls.
- **Nozzle Dragging Fix:** `reduce_infill_retraction = 0` is set to ensure the nozzle does not scrape or drag across printed infill patterns during high-speed travel moves.
- **True Layer Count:** `top_shell_thickness = 0` avoids unwanted extra top solid layers enforced by hardcoded minimum millimetre thicknesses.
- **First Layer Reliability:** `initial_layer_print_height = 0.20 mm` (down from 0.25 mm) ensures optimal first-layer squish on smooth build plates (e.g. BIQU Glacier/Frostbite).
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
