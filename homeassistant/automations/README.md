# Optional print completion chime and chamber light

Use [fertigdruck_fanfare.yaml](fertigdruck_fanfare.yaml) if you want a short Echo chime and a chamber light cue. The dashboard works independently.

- **Light:** On the last valid layer, it briefly flips the chamber light on if it was off, or off if it was on. It waits up to four seconds for feedback, holds the pulse for 1.2 seconds, then restores the previous state. If the final-layer event is missed, **printing → complete** is the fallback. If the printer finishes during the final-layer pulse with native light shutoff enabled, the light stays off.
- **Chime:** Alexa Media Player attempts to play the microwave-style **bell_02** ding when progress crosses approximately 99.9% while printing, with confirmed completion as a fallback. Early timing depends on printer telemetry and the selected Echo's ability to play the sound. Cancellation is not treated as completion.

## Install

1. Install [Alexa Media Player](https://github.com/alandtse/alexa_media_player), sign in to Amazon and verify the Echo can play **bell_02**.
2. In Home Assistant, create an automation and open **Edit in YAML**. Paste the file as a single automation mapping.
3. Replace **media_player.your_alexa_echo_device**. Match the other IDs to your installation: **sensor.snapmaker_u1_card_schicht** (numeric current layer with **total_layers**), **sensor.snapmaker_u1_card_fortschritt**, **sensor.snapmaker_u1_card_druckstatus**, **binary_sensor.snapmaker_u1_card_live_verbindung**, **light.snapmaker_u1_card_innenraumlicht**, and **switch.snapmaker_u1_card_licht_aus_nach_dem_druck** for native shutoff. Check the layer attribute in **Developer Tools → States** while a print runs.
4. Save and observe a small print. Review the automation trace if the cue is missing or late. The chime is an Amazon-dependent option.
