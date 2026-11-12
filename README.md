# Snapmaker U1 Dashboard for Home Assistant

A community dashboard by [Reaper2507](https://github.com/Reaper2507) for the Snapmaker U1.

[![Support on Ko-fi](https://img.shields.io/badge/Ko--fi-Support-F16061?style=flat-square&logo=ko-fi&logoColor=white)](https://ko-fi.com/Reaper2507)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

## Built on Ironoxx’s Snapmaker U1 Card

[Ironoxx’s Snapmaker U1 Card](https://github.com/Ironoxx/ha-snapmaker-u1-card) provides the Home Assistant integration and the original printer card, including the layer view and object exclusion. The frontend bundled here is adapted from [Ironoxx’s v2.0.0 release](https://github.com/Ironoxx/ha-snapmaker-u1-card/tree/v2.0.0) and retains the [original copyright notice and MIT license](https://github.com/Ironoxx/ha-snapmaker-u1-card/blob/v2.0.0/LICENSE).

### What I added

- **Live printer rendering.** I created the Studio rendering and mapped all four spool and toolhead positions. The rendered filament changes color to match the loaded spool at T0–T3, using data from Ironoxx’s integration. Studio and Cutaway also show live XYZ positions, nozzle and bed temperatures, and which toolhead is mounted.
- **Controls from the printer graphic.** I made the graphic open the dashboard’s **Controls** and **Filament & heat** panels, so the controls are within reach from the printer view.
- **Lovelace dashboard YAML & post-print cooling.** I wrote the YAML for the Full, Minimal and Maintenance & Diagnostics views. I organized the maintenance view around the G-code console, service intervals, temperature history, bed mesh and system status, and included a compact **Cooling after printing** control directly under **Part cooling fan** (default: **On · 5 min · 70 %** on the side `cavity_fan`) to cool the print bed for easier part removal.

[Dashboard views](#dashboard-views) · [Features](#features) · [Install the dashboard](#installation) · [Feedback & Ko-fi](#feedback-and-support)

## Dashboard views

[Full dashboard](#full-dashboard) · [Minimal](#minimal) · [Maintenance & diagnostics](#maintenance--diagnostics)

### Full dashboard

The upper section shows the Studio printer graphic, live camera and print progress, with speed, flow and filament controls below.

![Full dashboard with live toolhead telemetry, camera, print progress and controls](screenshots/dashboard-full-printing.png)

Further down, the same view shows the print files, history, timelapses and the current layer. Ironoxx’s [object exclusion in the layer view](https://github.com/Ironoxx/ha-snapmaker-u1-card/blob/3a76d19e3a7ac33bf9e5f730ebdaf2558d186e44/CHANGELOG.md#L682) lets you skip an individual object while the rest of the print continues.

![Lower section of the full dashboard with print files, history tabs and the current layer](screenshots/dashboard-full-files.png)

### Minimal

A compact view of the printer, camera, job progress and estimated finish time, with recent files and the current layer below.

![Minimal dashboard during a print, with camera, ETA, recent files and layer preview](screenshots/dashboard-minimal-printing.png)

### Maintenance & diagnostics

Maintenance intervals, temperature history, an 11 × 11 bed mesh, the G-code console and system diagnostics in one view.

![Maintenance dashboard with service intervals, temperatures, bed mesh and system diagnostics](screenshots/dashboard-maintenance-printing.png)

[More screenshots, including Cutaway and mobile](https://reaper2507.github.io/snapmaker-u1-homeassistant/homeassistant.html#showcase)

## Features

What this dashboard and package add on top of Ironoxx’s integration:

- **Interactive Studio & Cutaway printer graphics.** Live filament colors at all four spool positions (T0–T3), mounted toolhead indicator, live XYZ coordinates, and current/target nozzle and bed temperatures. Tap the printer illustration to jump straight into **Controls** or **Filament & heat**.
- **Complete print controls & presets.** Adjust **Print speed** (`85 / 100 / 115 %` presets + slider), **Flow rate** (`95 / 100 / 105 %` presets + slider), **Part cooling fan** (`0–100 %`), and **Print actions** (Pause, Resume, Cancel, and **Emergency stop**).
- **Automatic 5-minute post-print cooling (`Cool After Printing`).** A compact toggle and expandable **duration (`1–15 min`, default `5 min`)** & **speed (`40–100 %`, default `70 %`)** sliders directly below **Part cooling fan** run the side auxiliary fan (`cavity_fan`) after print completion to cool the bed and chamber for easier part removal — automatically stopping on timer expiry, `<= 36.5 °C` bed temp, toggle off, or a new print.
- **Moonraker-guarded motion & toolhead controls.** With the [control package](homeassistant/packages/u1_control_package.yaml), home all axes, move to bed/head presets, fine-jog X/Y (`0.1 / 1 / 10 mm`), pick/park individual toolheads (`T0–T3`), and load or unload filament with live Moonraker idle/safety checks.
- **Camera, jobs, history & layer view.** Live camera with chamber light toggle, tabbed **Queue / Files / History / Stats / Timelapse** browser, and layer preview with object exclusion.
- **Three purpose-built views.** **Dashboard** (full control), **Minimal** (compact job, camera, ETA & layer view for phones/tablets), and **Maintenance & Diagnostics** (G-code console, service intervals, 1-hour nozzle/bed temperature chart, 11 × 11 bed mesh, and system status).

### Tap the printer to open its controls

Select the printer illustration in **Tools & material** to open the control panel. **Controls** shows print speed, flow and job actions. **Filament & heat** shows the four toolheads, their loaded materials and their temperature targets. These screenshots were taken during a print, when movement, tool changes and heater controls are locked.

![Printer controls opened from the Studio illustration, showing print speed, flow, pause and cancel](screenshots/printer-controls-popup.png)

![Filament and heat tab showing all four toolheads, their filament colors and current and target temperatures](screenshots/printer-controls-filament-heat.png)

**Alternative Cutaway view**

![Cutaway printer graphic showing the four filament colors, mounted tool and live XYZ positions](screenshots/tools-material-cutaway-printing.png)

## Installation

**1. Install Ironoxx’s integration.** Open the integration in HACS and restart Home Assistant after installation.

[![Open Ironoxx’s integration in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Ironoxx&repository=ha-snapmaker-u1-card&category=integration)

**2. Connect your Snapmaker U1.** Add the integration and enter the printer’s address.

[![Add the Snapmaker U1 Card integration to Home Assistant](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=snapmaker_u1_card)

**3. Install this dashboard.** Follow the [short installation page](https://reaper2507.github.io/snapmaker-u1-homeassistant/install.html) for the required Lovelace cards, assets and YAML import. The [repository guide](homeassistant/README.md) covers updates and troubleshooting.

## Optional extras

- **Hardware mods.** [Auxiliary Fan Deflector](hardware/aux-fan-deflector/README.md) prevents left-bed warping by redirecting the chamber airflow upward (`U1-Fan_Deflector-Smooth.stl`).
- **OrcaSlicer profiles.** [Install the U1 presets](orcaslicer/README.md#install-the-presets) for **0.4 mm** & **0.6 mm** nozzles (Balanced, Fast, Functional, Draft, plus **QR-Code & Sign**). [Browse material presets](orcaslicer/README.md#filament-presets) including SUNLU PLA+ 2.0, Bambu Lab PLA/PETG, ELEGOO PLA/PETG-CF, JAYO PETG, eSUN PETG Matte, GEEETECH PLA/TPU 95A.
- **Set & Send.** Thanks to LayerLab for bringing the U1’s pre-print setup to OrcaSlicer. Their add-on lets you match filaments to toolheads and choose U1 print options before sending a job. [LayerLab download and guide](https://layerlab.store/pages/set-and-send) · [Quick setup](orcaslicer/README.md#set--send-by-layerlab)
- **Home Assistant control package & automations.** The [control package](homeassistant/packages/u1_control_package.yaml) includes Moonraker direct toolhead/filament controls and the **Cool after printing** helpers + automation (5 min at 70 % on the side `cavity_fan`, or add standalone via [cool_after_printing.yaml](homeassistant/automations/README.md#optional-post-print-bed-cooldown-fan-cavity_fan)), alongside a [microwave-style print completion ding and brief chamber-light pulse](homeassistant/automations/README.md).
- [Filament handling and troubleshooting](GUIDE.md).

## Feedback and support

Tried the dashboard? [Share feedback](https://github.com/Reaper2507/snapmaker-u1-homeassistant/issues/new?title=Dashboard%20feedback%3A%20) about what worked, where setup was unclear or what you would like to see. For bugs, include the Home Assistant and integration versions, printer firmware and a redacted screenshot if it helps. See [contribution guidelines](CONTRIBUTING.md).

To support the dashboard and documentation by **Reaper2507**:

<a href="https://ko-fi.com/Reaper2507"><img src="docs/assets/githubbutton_sm.svg" width="223" alt="Support Reaper2507 on Ko-fi"></a>

## Credits and license

1. [Ironoxx](https://github.com/Ironoxx/ha-snapmaker-u1-card) supplies the integration and original card. The adapted frontend retains the [original MIT license and copyright notice](https://github.com/Ironoxx/ha-snapmaker-u1-card/blob/v2.0.0/LICENSE).
2. [Donkie / Spoolman](https://github.com/Donkie/Spoolman) provides optional spool inventory through the integration. [Sponsor Spoolman](https://github.com/sponsors/Donkie).
3. [LayerLab](https://layerlab.store/pages/set-and-send) develops and distributes Set & Send separately.
4. [Thomas Lovén](https://github.com/thomasloven) provides card-mod and slider-entity-row. The [installation guide](homeassistant/README.md) links the other required cards.
5. [SoftFever and the OrcaSlicer team](https://github.com/OrcaSlicer/OrcaSlicer) maintain the slicer used by the optional presets.

Support **Ironoxx’s original integration**:

<a href="https://ko-fi.com/ironoxx"><img src="docs/assets/githubbutton_sm.svg" width="168" alt="Support Ironoxx on Ko-fi"></a>

See [full credits](https://reaper2507.github.io/snapmaker-u1-homeassistant/credits.html) and the [MIT license](LICENSE). Third-party projects retain their own licenses.
