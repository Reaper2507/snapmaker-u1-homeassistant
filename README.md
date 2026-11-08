# Snapmaker U1 Dashboard for Home Assistant

A community dashboard for the Snapmaker U1. See the four toolheads, camera, job status and temperatures in one place. Switch between Studio and Cutaway, or open the Minimal and Maintenance views.

[View screenshots and dashboard details](https://reaper2507.github.io/snapmaker-u1-homeassistant/homeassistant.html) · [Install the dashboard](homeassistant/README.md) · [Report an issue](../../issues)

![Snapmaker U1 dashboard with toolhead telemetry and camera](screenshots/dashboard-desktop.jpg)

## Installation

Start with the [Home Assistant installation guide](homeassistant/README.md). This dashboard uses the [Snapmaker U1 Card integration by Ironoxx](https://github.com/Ironoxx/ha-snapmaker-u1-card) and additional Lovelace cards. It runs on your own Home Assistant instance. The public gallery and simulation work without a connection to a printer.

## Optional extras

- [OrcaSlicer presets](orcaslicer/README.md) for 0.4 mm and 0.6 mm nozzles. Start from a profile and validate it for your material and hardware.
- [LayerLab Set & Send](https://layerlab.store/pages/set-and-send), a separate OrcaSlicer plugin with its own installation and support.
- [Print completion chime and chamber light](homeassistant/automations/README.md), an optional Home Assistant automation.
- [Filament handling and troubleshooting](GUIDE.md).

## Support and contributing

[Report a problem or share feedback](../../issues). Include your HA, integration or slicer version and redact private details. See [contribution guidelines](CONTRIBUTING.md).

If you want to support this project, [Ko-fi](https://ko-fi.com/Reaper2507) is optional.

## Credits and license

1. [Ironoxx](https://github.com/Ironoxx/ha-snapmaker-u1-card) supplies the integration and original card. The adapted frontend retains the upstream MIT notice. [Ironoxx on Ko-fi](https://ko-fi.com/ironoxx).
2. [Donkie / Spoolman](https://github.com/Donkie/Spoolman) provides optional spool inventory through the integration. [Sponsor Spoolman](https://github.com/sponsors/Donkie).
3. [LayerLab](https://layerlab.store/pages/set-and-send) develops and distributes Set & Send separately.
4. [Thomas Lovén](https://github.com/thomasloven) provides card-mod and slider-entity-row. The [installation guide](homeassistant/README.md) links the other required cards.
5. [SoftFever and the OrcaSlicer team](https://github.com/OrcaSlicer/OrcaSlicer) maintain the slicer used by the optional presets.

See [full credits](https://reaper2507.github.io/snapmaker-u1-homeassistant/credits.html) and the [MIT license](LICENSE). Third-party projects retain their own licenses.
