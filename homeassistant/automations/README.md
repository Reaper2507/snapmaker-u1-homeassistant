# Optional print completion chime and chamber light

Use [fertigdruck_fanfare.yaml](fertigdruck_fanfare.yaml) if you want a short Echo chime and a chamber light cue. The dashboard works independently.

- **Light:** On the last valid layer, it briefly flips the chamber light on if it was off, or off if it was on. It waits up to four seconds for feedback, holds the pulse for 1.2 seconds, then restores the previous state. If the final-layer event is missed, **printing → complete** is the fallback. If the printer finishes during the final-layer pulse with native light shutoff enabled, the light stays off.
- **Chime:** Alexa Media Player attempts to play the microwave-style **bell_02** ding when progress crosses approximately 99.9% while printing, with confirmed completion as a fallback. Early timing depends on printer telemetry and the selected Echo's ability to play the sound. Cancellation is not treated as completion.

## Install

1. Install [Alexa Media Player](https://github.com/alandtse/alexa_media_player), sign in to Amazon and verify the Echo can play **bell_02**.
2. In Home Assistant, create an automation and open **Edit in YAML**. Paste the file as a single automation mapping.
3. Replace **media_player.your_alexa_echo_device**. Match the other IDs to your installation: **sensor.snapmaker_u1_card_schicht** (numeric current layer with **total_layers**), **sensor.snapmaker_u1_card_fortschritt**, **sensor.snapmaker_u1_card_druckstatus**, **binary_sensor.snapmaker_u1_card_live_verbindung**, **light.snapmaker_u1_card_innenraumlicht**, and **switch.snapmaker_u1_card_licht_aus_nach_dem_druck** for native shutoff. Check the layer attribute in **Developer Tools → States** while a print runs.
4. Save and observe a small print. Review the automation trace if the cue is missing or late. The chime is an Amazon-dependent option.

---

# Optional post-print bed cooldown fan (`cavity_fan`)

Use [cool_after_printing.yaml](cool_after_printing.yaml) if you want the Snapmaker U1's side auxiliary fan (`cavity_fan`) to cool the print bed after a print completes for easier part removal on the PEI sheet. It matches the compact **Cooling after printing** row directly below **Part cooling fan** in the dashboard.

> **Package note:** These 4 helpers and `automation.snapmaker_u1_cool_after_printing` (defaulting to **On · 5 min · 70 %**) are already included in [u1_control_package.yaml](../packages/u1_control_package.yaml). Only create them manually below if you do not load that package.

- **How it works:** When status transitions **printing → complete** and bed temperature is above 38 °C, HA sends `SET_FAN_SPEED FAN=cavity_fan SPEED=<pct/100>`. It stops automatically when the timer expires, bed temperature reaches ≤ 36 °C, the toggle is turned off, or a new print starts.
- **Material tip:** Works best for **PLA** (recommended sweet spot: **70 %** for **5 min**). Turn the toggle off for **ABS/ASA** or large flat **PETG** parts to avoid uneven cooling warp.

## Required helpers (create under Settings → Devices & services → Helpers)

| Entity ID | Type | Settings |
| :--- | :--- | :--- |
| `input_boolean.snapmaker_u1_cool_after_printing` | Toggle | Enable/disable post-print cooldown |
| `input_boolean.snapmaker_u1_cool_after_printing_panel` | Toggle | Shows/hides the slider settings panel below the row |
| `input_number.snapmaker_u1_cool_after_printing_minutes` | Number (Slider) | Min `1`, Max `15`, Step `1`, Unit `min` (default `5`) |
| `input_number.snapmaker_u1_cool_after_printing_speed` | Number (Slider) | Min `40`, Max `100`, Step `5`, Unit `%` (default `70`) |

Then create an automation using **Edit in YAML**, paste [cool_after_printing.yaml](cool_after_printing.yaml), and make sure your integration's `snapmaker_u1_card.send_gcode` action is available.
