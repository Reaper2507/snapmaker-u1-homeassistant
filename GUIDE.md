# 📖 Snapmaker U1 · Quick Operator Guide & FAQ

Kompakte Praxishilfe für den Alltag mit dem Snapmaker U1 4-Kopf-Toolchanger — mit und ohne Home Assistant Dashboard.

---

## 🧵 1. Filament Entladen (Unload)

> **In zwei Worten:** Aufheizen lassen → Gleichmäßig per Hand aufspulen.

### A. Mit Home Assistant Dashboard
1. Im U1-Dashboard auf den gewünschten Kopf (**T0–T3**) tippen und im Popup **„Unload“** wählen.
2. Das Hotend heizt automatisch auf Drucktemperatur.
3. Sobald der Extrudermotor die Schmelzzone kurz zurückgezogen hat: **Die Spule per Hand drehen, das Filament gleichmäßig aufwickeln und aus dem PTFE-Schlauch ziehen.**

### B. Ohne Dashboard (Direkt am Drucker-Touchscreen)
1. Am Touchscreen auf **Filament → Unload** tippen und den betroffenen Kopf (1–4) wählen.
2. Warten, bis das Display meldet, dass die Düse aufgeheizt ist und der Rückzug aktiv ist.
3. Filament mit leichtem gleichmäßigem Zug per Hand auf die Spule aufwickeln und abnehmen.

### 💡 Wichtig beim Entladen & Spule abziehen:
- **Leichter Widerstand:** Beim Herausziehen spürst du einen leichten, mechanischen Widerstand. Das ist völlig normal, da das Filament an den federgelagerten Feeder-Zahnrädern vorbeiläuft. Nicht ruckartig reißen!
- **Spule herunternehmen:** Den Spulenhalterarm mit einer Hand an der Rück-/Seitenwand leicht gegenhalten und die Spule mit der anderen Hand gerade nach vorne vom Rollenzylinder abziehen.
- **Tipp gegen Verheddern:** Das lose Filamentende sofort in einer der seitlichen Bohrungen am Spulenrand festklemmen, damit sich die Wicklung nicht lockert.

---

## 📥 2. Filament Laden (Load)

> **In zwei Worten:** 45° anschneiden → Bis zum Sensor einschieben → „Load“ drücken.

1. **Anschneiden:** Das Filamentende mit dem Seitenschneider sauber im **45°-Winkel** kappen (keine Biegungen oder abgeflachte Enden).
2. **Spule einhängen:** Rolle auf den Halter schieben, das Filament von Hand in den Einlass-Trichter / PTFE-Schlauch schieben, bis der interne Sensor greift.
   - *Im Home Assistant Dashboard erscheint jetzt die Statusanzeige:* **„At feeder only“** (Filament im Einzug erkannt, aber noch nicht im Werkzeugkopf).
3. **Laden starten:** 
   - **Dashboard:** Auf **„Load“** tippen.
   - **Display:** Auf **Filament → Load** tippen.
4. Das Hotend heizt automatisch auf, der Feeder transportiert das Material durch den Schlauch bis in die Düse und spült einen kurzen Teststreifen Altfarbe heraus.

---

## ❓ Häufige Fragen & FAQ

<details>
<summary><b>Was bedeutet die Meldung „At feeder only“ im Dashboard?</b></summary>

Das Filament steckt bereits im Schlauch und der Vorfeeder-Sensor meldet Bereitschaft, das Material ist aber noch nicht bis zum eigentlichen Druckkopf vorgefördert.  
**Lösung:** Einfach auf **„Load“** tippen — der Drucker heizt vor und fördert das Filament automatisch bis zur Düse.
</details>

<details>
<summary><b>Extrudiert der U1 das Filament beim Entladen komplett von allein heraus?</b></summary>

Nein, und das ist bauartbedingt so gewollt: Der Extrudermotor löst nur die heiße Spitze aus der Düse und zieht wenige Zentimeter zurück, damit sich kein dicker Pfropfen bildet. Den langen Weg durch den PTFE-Schlauch wickelst du per Hand direkt auf die Spule auf, um loses Filament-Chaos hinter dem Drucker zu vermeiden.
</details>

<details>
<summary><b>Kann ich Filament auch bei kalter Düse herausziehen?</b></summary>

**Niemals!** Bei kalter Düse sitzt das erkaltete Filament fest in der Düsenbohrung. Ein Ziehen mit Gewalt kann das PTFE-Inlet beschädigen oder das Hotend verstopfen. Immer zuerst aufschmelzen lassen (mind. 200 °C bei PLA, 240 °C bei PETG).
</details>

<details>
<summary><b>Wann nutze ich „Cancel Print“ und wann den Not-Halt?</b></summary>

- **Druck abbrechen (Cancel Print):** Normaler Stopp. Der Drucker beendet den G-Code, hebt die Z-Achse an, parkt das aktive Werkzeug sauber im Dock und kühlt kontrolliert ab.
- **Not-Halt (Emergency Stop):** Reiner Notfall-Schalter. Schaltet sofort Klipper, alle Schrittmotoren und Heizpatronen stromlos. Nur bei mechanischen Kollisionen oder drohender Beschädigung drücken! Danach ist ein Klipper-Firmware-Restart erforderlich.
</details>

<details>
<summary><b>Warum sind die Bewegungsachsen während des Druckens im Dashboard gesperrt?</b></summary>

Das Dashboard besitzt eine aktive Sicherheitsverriegelung (`Not available during printing`). Während eines Drucks dürfen keine manuellen Homing- oder Jog-Befehle an Klipper gesendet werden, da dies unweigerlich zu Schichtversatz oder Werkzeugkollisionen führen würde.
</details>

<details>
<summary><b>Was kann die „Tools & material“ Karte im Dashboard und wie funktioniert die Direktsteuerung?</b></summary>

Die Hero-Karte visualisiert den U1 vollständig in Echtzeit:
- **Live 3D-Achsen (X, Y, Z):** Zeigt auf den Millimeter genau, wo sich der Werkzeugschlitten und das Druckbett befinden (z. B. `X 227.6`, `Y 300.5`, `Z 9.9`).
- **Live-Temperaturen:** Direkte Überlagerung der Ist- und Solltemperatur auf den 4 Nozzles (T0–T3) und dem Druckbett.
- **Docking-Status:** Zeigt sofort, welcher Kopf montiert ist (`T3 - Mounted`) und welche geparkt im Dock stehen (`Docked`).
- **Dynamische Spulenfarben:** Ringe rings um das Gehäuse leuchten in der exakten Farbe des geladenen Filaments.
- **Direktsteuerung per Fingertipp:** Ein Klick oder Tap direkt auf die 3D-Druckergrafik öffnet sofort das Schnellmenü für Achsen-Jogging (Bett absenken/anheben, Kopf zentrieren), Vorheizen und Filamentwechsel.
</details>

<details>
<summary><b>Wie richte ich die Alexa-Mikrowellen-Benachrichtigung und das Lichtflackern bei Druckende ein?</b></summary>

Im Ordner [`homeassistant/automations/fertigdruck_fanfare.yaml`](homeassistant/automations/fertigdruck_fanfare.yaml) findest du die fertige YAML-Vorlage:
1. **Mikrowellen-Chime (`bell_02`):** Ertönt über dein Amazon Echo Gerät ab 99,9 % Fortschritt für eine punktgenaue Vorwarnung.
2. **Licht-Flackern:** Sobald der Druckstatus endgültig auf `complete` wechselt, pulsiert das Bauraumlicht 2x kurz (An → 400ms → Aus → 400ms → An).
3. **Voraussetzung:** [Alexa Media Player (HACS)](https://github.com/alandtse/alexa_media_player) und die U1-Sensoren in Home Assistant. In der YAML-Datei musst du lediglich den Namen deines Echo-Geräts anpassen.
</details>
