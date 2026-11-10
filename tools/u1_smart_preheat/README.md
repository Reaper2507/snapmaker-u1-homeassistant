# Snapmaker U1 Smart Preheat Optimizer

Ein intelligenter, nativer Post-Processing-Optimizer für **OrcaSlicer 2.5+** und den **Snapmaker U1** (4-Kopf CoreXY Toolchanger).

---

## Warum dieses Tool?

Ab Werk kühlt OrcaSlicer inaktive Toolheads auf dem Snapmaker U1 auf unter 65 °C ab (`standby_temperature_delta = -150`). Dadurch muss jeder Kopf bei jedem Werkzeugwechsel erst wieder mühsam hochheizen, was ca. **8 bis 12 Sekunden Stillstand pro Wechsel** verursacht. Bei einem 4-Farben-Modell mit 500 Wechseln gehen so **über 60 Minuten** reine Wartezeit verloren!

Dieses Tool analysiert den geslicten G-Code und bietet zwei praxiserprobte Lösungen:

1. **⚡ Voll-Automatisch (20s Dynamischer Lookahead):**
   - Das Tool berechnet anhand der G-Code-Fahrzeiten exakt, wann der nächste Wechsel stattfindet.
   - Genau **20 Sekunden vor dem Wechsel** wird die Düse per `M104` angewiesen auf Zieltemperatur zu heizen.
   - Wenn der Werkzeugkopf angefahren wird, hat er exakt Betriebstemperatur: **Null Wartezeit, aber auch kein Oozing/Drip im Dock**, weil die Düse dazwischen kühl bleibt!
2. **🔥 Statischer Dauer-Standby (190 °C Halten):**
   - Hält inaktive Köpfe im Dock konstant auf 190 °C (bekannt aus dem 247printing YouTube-Video).
   - Von 190 °C auf 215 °C braucht der U1-Keramikheizer nur ca. **1,5 Sekunden**.
   - Ideal für 90% aller Drucke mit sauberem Marken-PLA (z. B. SUNLU PLA+ 2.0, Bambu Lab Basic).
3. **⚠️ Intelligente Schichtpausen-Erkennung:**
   - Druckt ein Kopf nur ganz unten (Layer 2) und ganz oben (Layer 280), warnt das Tool mit einem gelben Badge `⚠️ PAUSE (278L)`.
   - In solchen Fällen empfiehlt das Tool automatisch den `Auto`-Modus oder `Kalt lassen`, damit der Kopf nicht 5 Stunden lang unnötig auf 190 °C vor sich hin kocht.

---

## Benutzeroberfläche (OrcaSlicer Dark Theme)

- **4 Toolhead-Karten (T0 – T3):** Zeigt sofort an, welche Köpfe aktiv sind, wie viele Wechsel anfallen und wie groß die maximale Schichtpause ist.
- **Globales Schnellwahl-Preset:**
  - `[⚡ Alle Automatisch (20s)]`
  - `[🔥 Alle Dauer-Standby (190°C)]`
  - `[❄️ Alle Kalt lassen]`
- **Ersparnis-Rechner:** Berechnet vor dem Druck die exakt eingesparten Druckminuten.
- **First-Run Modal:** Erklärt beim ersten Start die thermischen Hintergründe (PLA-Weichmacher, Heat-Creep, 190 °C vs. 20s). Kann mit einer Checkbox dauerhaft stummgeschaltet werden.
- **Zero-Noise bei Single-Color:** Druckst du einfarbig (<= 1 Wechsel), beendet sich das Skript lautlos in 10 Millisekunden ohne GUI-Popup.

---

## Einrichtung in OrcaSlicer

1. Öffne OrcaSlicer.
2. Gehe auf **Druckeinstellungen (Process)** -> **Ausgabeoptionen (Output options)**.
3. Trage unter **Nachbearbeitungsskripte (Post-processing scripts)** Folgendes ein:
   ```text
   python "C:\Users\torst\Antigravity\Workspace\Snapmaker_U1\tools\u1_smart_preheat\u1_smart_preheat.py";
   ```
   *(Semikolon am Ende nicht vergessen!)*
4. Klicke auf **Speichern**.

Sobald du auf **Slicen** klickst, öffnet sich bei Mehrfarbdrucken das Optimierungsfenster. Nach Klick auf **✅ Optimieren & Weiter** wird der G-Code in Sekundenbruchteilen optimiert und direkt an den Drucker übergeben.
