# Home Assistant · Snapmaker U1 Dashboard & Telemetry

Production-ready, interactive Home Assistant dashboard tailored specifically for the **Snapmaker U1 4-Toolhead 3D Printer**.

---

## 📸 Overview & Features

### 🌟 Tools & Material: The Interactive Hero Card
The core of the dashboard is the interactive **Tools & Material** card. Both **Studio Mode** and **Wireframe Cutaway Mode** provide 100% identical live capabilities:
- **📐 Live Scaled 3D Axes ($X, Y, Z$):** Real-time spatial tracking of carriage and bed position (e.g. `X 227.6`, `Y 300.5`, `Z 9.9`), dynamically scaled in 3D space.
- **🌡️ Live Heat Overlays:** Instant nozzle temperatures for all 4 heads (T0–T3) and the heated bed overlaid directly on the 3D model (target & actual temps).
- **🎨 Dynamic Filament Spool Colors:** The 4 spool rings (T0–T3) around the chassis adapt in real time to the loaded filament colors and material types.
- **👆 Tap-to-Control (Full Printer Control):** Clicking or tapping directly on the 3D printer graphic immediately launches full controls: axis jogging (raise/lower bed, center head, home axes), preheating, and emergency stop.
- **🧵 Filament Load & Unload:** Fast trigger for toolhead heating and manual hand-reeling or motorized feeding.
- **🔄 Dual Visual Modes:** Seamlessly switch between photorealistic **Studio Render** and technical **Wireframe Cutaway** view.

### 🛡️ Safety & Controls
- **Safety Interlocks:** Motion controls and manual toolhead docking are locked while actively printing to prevent collisions.
- **Emergency Stop:** Prominent emergency stop button with confirmation safeguards.
- **Three Views Included:**
  1. `Dashboard` (`snapmaker-u1`): Full daily operator view with camera, telemetry, job cards, flow/speed sliders, and toolhead controls.
  2. `Minimal` (`u1-minimal`): Lightweight status card with camera and layer view.
  3. `Maintenance & Diagnostics` (`u1-maintenance`): Bed leveling mesh, temperature graphs, G-code console, and hardware health.

---

## 🔔 Automations: Fertigdruck-Fanfare & Licht

Included in [`automations/fertigdruck_fanfare.yaml`](automations/fertigdruck_fanfare.yaml):
- **Alexa Microwave Chime (`bell_02`):** Starts early when print progress reaches **99.9%**, so you are alerted right before cooldown begins.
- **Chamber Light Flash:** As soon as print status switches from `printing` to `complete`, the internal chamber light flashes twice (On → 400ms → Off → 400ms → On) as an unmistakable visual cue.
- **Prerequisites:**
  - [Alexa Media Player](https://github.com/alandtse/alexa_media_player) installed via HACS.
  - Snapmaker U1 entities: `sensor.snapmaker_u1_card_fortschritt`, `sensor.snapmaker_u1_card_druckstatus`, and `light.snapmaker_u1_card_innenraumlicht`.
  - Echo player entity (e.g. `media_player.your_alexa_echo_device`).

---

## 🛠️ Prerequisites & Cards

Install the following frontend cards via **HACS (Home Assistant Community Store)**:
1. `button-card`
2. `card-mod`
3. `slider-entity-row`
4. `vertical-stack-in-card`
5. `mini-graph-card`
6. `tabbed-card`
7. `fold-entity-row`

---

## 📦 Directory Structure

```text
homeassistant/
├── automations/
│   ├── fertigdruck_fanfare.yaml   # Alexa microwave chime & light flash
│   └── README.md                  # Automation setup guide
├── packages/
│   └── u1_control_package.yaml    # Moonraker REST commands & template switches
├── views/
│   ├── snapmaker-u1.yaml          # View 1: Complete operator dashboard
│   ├── u1-minimal.yaml            # View 2: Minimalist status view
│   └── u1-maintenance.yaml        # View 3: Bed mesh & diagnostics
├── www/
│   ├── close-up.png               # Close-up printer graphic
│   ├── studio.png                 # Photorealistic Studio render
│   └── u1-fusion-showcase.u1.js   # Interactive JS card
├── u1_dashboard_complete.yaml     # Monolithic complete dashboard YAML
└── u1_dashboard_complete.json     # Lovelace JSON representation
```

---

## 🚀 Quick Setup

1. Copy files from `homeassistant/www/` to your Home Assistant `/config/www/snapmaker-u1/showcase/` folder.
2. Register the Lovelace resource:
   - **URL:** `/local/snapmaker-u1/showcase/u1-fusion-showcase.u1.js`
   - **Resource Type:** JavaScript Module
3. Import the dashboard via **Raw Configuration Editor** in Home Assistant using `u1_dashboard_complete.yaml` (or add views individually from `views/`).
4. (Optional) Import [`automations/fertigdruck_fanfare.yaml`](automations/fertigdruck_fanfare.yaml) for Alexa finish chime and light notification.
