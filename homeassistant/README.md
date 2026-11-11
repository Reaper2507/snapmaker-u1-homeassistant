# Install the Snapmaker U1 dashboard

The dashboard is a Lovelace configuration for your own Home Assistant. It uses data and services from [Ironoxx's Snapmaker U1 Card integration](https://github.com/Ironoxx/ha-snapmaker-u1-card). It is separate from the card installed by that integration.

## 1. Set up the integration

- Use a supported Home Assistant version and a Snapmaker U1 reachable from HA on your network. The upstream integration documents HA 2025.3+; this showcase has no verified minimum across all of its cards.
- If needed, follow the [official HACS setup](https://hacs.xyz/docs/use/download/download/) for your HA installation type.
- [Open the Snapmaker U1 Card integration in HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=Ironoxx&repository=ha-snapmaker-u1-card&category=integration). Install it as an **Integration**, restart HA, then add **Snapmaker U1 Card** under **Settings → Devices & services → Add integration** and enter the printer's address. Run the integration's self test before importing this dashboard.

## 2. Install the required frontend cards

- [button-card](https://github.com/custom-cards/button-card)
- [card-mod](https://github.com/thomasloven/lovelace-card-mod)
- [slider-entity-row](https://github.com/thomasloven/lovelace-slider-entity-row)
- [vertical-stack-in-card](https://github.com/ofekashery/vertical-stack-in-card)
- [apexcharts-card](https://github.com/RomRider/apexcharts-card)
- [config-template-card](https://github.com/iantrich/config-template-card)

Install through HACS and verify their Lovelace resources. Spoolman is optional and can be configured in the upstream integration.

## 3. Copy the assets and import into a new dashboard

1. Copy **all three files** from [www/](www/) to **/config/www/media/snapmaker-u1/showcase/**. If you just created the initial **www** directory, restart HA before using **/local/**.
2. Under **Settings → Dashboards → Resources** (three-dot menu, advanced mode if hidden), add **/local/media/snapmaker-u1/showcase/u1-fusion-showcase.u1.js** as a **JavaScript module**. The **/config/www/** directory is served as **/local/**. Open the resource URL on your HA instance to verify the file is served.
3. Create a separate dashboard. Open its **Raw configuration editor** and paste [u1_dashboard_complete.yaml](u1_dashboard_complete.yaml), or add the three [views](views/) individually. Do not replace an existing dashboard unless you intend to.
4. Compare the entity IDs in the YAML with the ones in your integration. The example uses German **snapmaker_u1_card** IDs. HA language, a custom name or additional printers can produce different IDs. Map them before using the dashboard controls. Start by checking camera, progress, temperatures and status while idle.
5. If a custom element is missing, verify the associated card resource, then hard-refresh. If the Studio image fails, check the **media/snapmaker-u1/showcase/** path. On updates, back up your dashboard and reapply your local mappings after reviewing the diff.

## Optional controls and notifications

- [Moonraker package](packages/u1_control_package.yaml) for direct controls. Enable [Home Assistant packages](https://www.home-assistant.io/docs/configuration/packages/) if needed, substitute **YOUR_PRINTER_IP**, map entities and validate the HA configuration before restarting. Keep the printer API on your LAN. Test movement only with the machine clear and idle. Software state checks cannot replace the printer's safety procedures.
- [Fanfare and light automation](automations/README.md) with Alexa Media Player. The core dashboard does not need Alexa.
- [Cool after printing automation](automations/README.md#optional-post-print-bed-cooldown-fan-cavity_fan) (`cool_after_printing.yaml` + 4 UI helpers) to run the side `cavity_fan` after completion for easier bed release.
