# Snapmaker U1 Automatisierungen

## 🔔 Fertigdruck-Fanfare & Licht (Alexa + Chamber Light)

Diese optionale Automatisierung benachrichtigt dich zuverlässig, sobald ein Druckauftrag auf dem Snapmaker U1 fertiggestellt ist:
1. **Mikrowellen-"Bing"**: Spielt den Amazon Alexa System-Sound `bell_02` (kurzer, dezenter Mikrowellen-Chime) ab ca. 99,9 % Druckfortschritt ab.
2. **Licht-Flackern**: Sobald der Drucker offiziell `complete` meldet, pulsiert das Bauraumlicht 2x kurz (An → Aus → An), sodass man auch ohne Ton sofort sieht: *Das Teil ist fertig!*

---

### Voraussetzungen (Prerequisites)

1. **Home Assistant mit Snapmaker U1 Integration**:
   - `sensor.snapmaker_u1_card_fortschritt` (Druckfortschritt in Prozent 0–100 %)
   - `sensor.snapmaker_u1_card_druckstatus` (Status: `printing`, `paused`, `complete`, `idle`)
   - `light.snapmaker_u1_card_innenraumlicht` (Bauraumbeleuchtung des Druckers)
2. **Alexa Media Player (HACS)**:
   - Installiert via [HACS (Home Assistant Community Store)](https://github.com/alandtse/alexa_media_player).
   - Verbunden mit deinem Amazon-Konto.
   - Ein registriertes Echo-Gerät (z. B. `media_player.echo_dot_bureau`).

---

### Installation & Anpassung

1. Kopiere den Inhalt aus [`fertigdruck_fanfare.yaml`](fertigdruck_fanfare.yaml) in deine Home Assistant `automations.yaml` (oder erstelle eine neue Automatisierung über die HA-Oberfläche im YAML-Modus).
2. Ersetze die Platzhalter mit deinen tatsächlichen Entity-IDs:
   - `media_player.your_alexa_echo_device` ➔ Name deines Echo Lautsprechers
   - `light.snapmaker_u1_card_innenraumlicht` ➔ Entity-ID deines Bauraumlichts (falls abweichend)
   - `sensor.snapmaker_u1_card_druckstatus` & `sensor.snapmaker_u1_card_fortschritt` ➔ Entitäten deines U1
3. Klicke auf **Speichern** & **Automatisierungen neu laden**.
