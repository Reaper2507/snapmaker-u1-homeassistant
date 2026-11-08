# Home Assistant · Snapmaker U1 Dashboard & Telemetry

Production-ready, interactive Home Assistant dashboard tailored specifically for the **Snapmaker U1 4-Toolhead 3D Printer**.

---

## 📸 Overview & Features

- **Multi-Toolhead Telemetry:** Visual indicators for all 4 toolheads (T0–T3), live coordinates (X 0–271, Y 0–335, Z -6–275 mm), docked/mounted status, and nozzle temperatures.
- **Dynamic Filament Spool Display:** Automatically reads live spool colors and filament types, distinguishing between firmware presets and active OrcaSlicer job parameters.
- **Safety Interlocks:** Motion controls and toolhead operations are locked while actively printing. Integrated emergency stop button with confirmation prompt.
- **Three Views Included:**
  1. `Dashboard` (`snapmaker-u1`): Full daily operator view with camera, telemetry, job cards, flow/speed sliders, and toolhead controls.
  2. `Minimal` (`u1-minimal`): Lightweight status card with camera and layer view.
  3. `Maintenance & Diagnostics` (`u1-maintenance`): Bed leveling mesh, temperature graphs, G-code console, and hardware health.

---

## 🛠️ Prerequisites

Install the following frontend cards via **HACS (Home Assistant Community Store)**:
- [`button-card`](https://github.com/custom-cards/button-card)
- [`card-mod`](https://github.com/thomasloven/lovelace-card-mod)
- [`slider-entity-row`](https://github.com/thomasloven/lovelace-slider-entity-row)
- [`vertical-stack-in-card`](https://github.com/ofekashern/vertical-stack-in-card)
- [`mini-graph-card`](https://github.com/kalkih/mini-graph-card)
- [`tabbed-card`](https://github.com/kinghat/tabbed-card)
- [`fold-entity-row`](https://github.com/thomasloven/lovelace-fold-entity-row)

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Copy Card Assets
Copy the contents of `homeassistant/www/` to your Home Assistant directory:
```
/config/www/snapmaker-u1/showcase/
  ├── u1-fusion-showcase.u1.js
  ├── studio.png
  └── close-up.png
```

Register the Lovelace resource in **Settings → Dashboards → Resources**:
- **URL:** `/local/snapmaker-u1/showcase/u1-fusion-showcase.u1.js`
- **Resource Type:** `JavaScript Module`

### Step 2: Add the Control Package
Copy `homeassistant/packages/u1_control_package.yaml` to `/config/packages/` (or merge into your configuration).  
Open the file and set your printer's IP address:
```yaml
url: http://YOUR_PRINTER_IP/printer/objects/query?...
```
Reload Home Assistant scripts and REST commands (**Developer Tools → YAML → Reload**).

### Step 3: Import Dashboard
- Create a new dashboard or add a view to an existing one.
- Open the 3-dots menu top right → **Raw configuration editor**.
- Paste the content of [`homeassistant/u1_dashboard_complete.yaml`](u1_dashboard_complete.yaml).
- Save and enjoy!

---

<details>
<summary><b>🔍 Entity Mapping & Customization (Click to expand)</b></summary>

The dashboard uses standard entities created by the Moonraker integration / `ha-snapmaker-u1-card`:
- `binary_sensor.snapmaker_u1_card_live_verbindung`
- `sensor.snapmaker_u1_card_druckstatus`
- `sensor.snapmaker_u1_card_druckerwerte`
- `sensor.snapmaker_u1_card_filamente`
- `sensor.snapmaker_u1_card_druckdateien`
- `camera.snapmaker_u1_card_kamera`
- `button.snapmaker_u1_card_not_halt`
- `number.snapmaker_u1_card_geschwindigkeit`
- `number.snapmaker_u1_card_flussrate`
- `number.snapmaker_u1_card_bauteillufter`

If your entity IDs have a custom prefix, search and replace `snapmaker_u1_card_` in `u1_dashboard_complete.yaml`.
</details>
