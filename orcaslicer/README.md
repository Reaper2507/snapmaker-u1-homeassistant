# OrcaSlicer Presets & Profiles · Snapmaker U1

Community starting presets for **[OrcaSlicer 2.5](https://github.com/OrcaSlicer/OrcaSlicer/releases/tag/v2.5.0)** for the **Snapmaker U1 4-Toolhead 3D Printer**.

---

## 📂 Profiles Included

### 1. Process Profiles (`process/`)

Also included: [0.24 U1 Quick & Solid (0.4 mm)](process/0.24%20U1%20Quick%20%26%20Solid%20(0.4%20Nozzle).json) and [0.20 U1 Mehrfarbe Kompakt](process/0.20%20U1%20Mehrfarbe%20Kompakt.json).

#### For 0.4 mm Nozzle
- **`0.20 Antigravity Optimized.json`** — The daily driver reference profile.
  - 3 wall loops, 4 top shell layers, gyroid infill (no infill show-through).
  - `inner-outer-inner` wall order for dimensional accuracy and flawless outer perimeters.
  - Slim Type-2 prime tower with 12–15 mm³ purge volume.
  - `Conditional Scarf Joint` Z-seam for smooth contours.
  - High speed travel: 12,000 mm/s² acceleration from layer 2 upwards.
- **`0.28 Antigravity Prototype (0.4 Nozzle).json`** — High-speed test profile.
  - 0.28 mm layer height, 2 walls, 10% `Support Cubic` infill.
  - Direct air travel (`reduce_crossing_wall = 0`) for quickest print completion.

#### For 0.6 mm Nozzle
- **`0.30 Antigravity Optimized (0.6 Nozzle).json`** — High-strength workhorse.
  - 0.30 mm layer height (sweetspot for 0.6 mm nozzle).
  - Arachne wall generator for dynamic line width, 1.2 mm solid top shell (4 layers), 20 mm³ tower volume.
- **`0.24 Antigravity Optimized (0.6 Nozzle).json`** — Quality alternative for 0.6 mm nozzles.
- **`0.40 Antigravity Prototype (0.6 Nozzle).json`** — Maximum volumetric speed prototype preset.

---

### 2. Machine Profiles (`machine/`)
- `Snapmaker U1 (0.4 nozzle) - Edelstahl LAN.json`: 4 stainless steel hotends, Moonraker LAN configuration.
- `Snapmaker U1 (0.6 nozzle) - Edelstahl LAN.json`: 4 stainless steel hotends (0.6 mm).

> **Note:** Open the machine JSON or edit the printer settings in OrcaSlicer to set your U1's LAN IP.

---

### 3. Filament Presets (`filament/`)
19 material starting presets:
- **Bambu Lab:** PLA Basic (Black, Jade-White), PETG Basic (White).
- **SUNLU:** PLA+ 2.0 (Black, White, Bone-White, Little Blue, Olive Green, Sunny Orange).
- **eSUN:** PETG Matte (Apricot, Concrete Grey, Blue Brick, Dark Grey).
- **ELEGOO:** PLA Matte (Beige), PETG-CF (Black, Dark Grey — requires hardened nozzle  per filament manufacturer guidance).
- **GEEETECH:** PLA Matte (Grey), TPU 95A (Transparent-Silver, 3.2 mm³/s volumetric speed).

---

## 📥 Installation

Copy the folders (`machine/`, `process/`, `filament/`) to your local OrcaSlicer user directory:

- **Windows:** `%APPDATA%\OrcaSlicer\user\default\`
- **macOS:** `~/Library/Application Support/OrcaSlicer/user/default/`
- **Linux:** `~/.config/OrcaSlicer/user/default/`

Close OrcaSlicer before copying, back up your user presets, and avoid overwriting files you customized. Select the matching Snapmaker U1 system printer and nozzle when you restart. If a preset is hidden, check its parent profile and compatible printer in the JSON. Slice a small model and inspect the preview before sending it to the printer. LAN sending requires your own printer address and compatible firmware; slicing works offline.

[All 19 filament JSON files](filament/) are included. Validate flow, temperature and hardware suitability for your spool. The hardened-nozzle requirement for abrasive PETG-CF still applies.
