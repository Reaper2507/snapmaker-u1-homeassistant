# Snapmaker U1 Auxiliary Fan Deflector (Hilfslüfter-Deflektor)

[![MakerWorld Model](https://img.shields.io/badge/MakerWorld-Model%203107806-blue?logo=bambulab)](https://makerworld.com/de/models/3107806-snapmaker-u1-auxiliary-fan-deflector#profileId-3511237)
[![Hardware Mod](https://img.shields.io/badge/Snapmaker%20U1-Chamber%20Mod-brightgreen.svg)]()
[![Material](https://img.shields.io/badge/Material-PETG%20%7C%20ABS-orange.svg)]()

Archivierte Version und Dokumentation des originalen MakerWorld-Modells für den Snapmaker U1 Zusatzlüfter-Abluftdeflektor.

- **Original-Quelle:** [MakerWorld Model #3107806 / Profile #3511237](https://makerworld.com/de/models/3107806-snapmaker-u1-auxiliary-fan-deflector#profileId-3511237)
- **Modell-Datei im Repository:** [`U1-Fan_Deflector-Smooth.stl`](./U1-Fan_Deflector-Smooth.stl)
- **SHA-256 Prüfsumme:** `534a989e4b3f4f1701b8a7f950da4a4ee443901f3ae5f6a7b359a573fc62274c`

---

## 1. Problemstellung: Warum der originale AUX-Fan Probleme macht

Der Snapmaker U1 besitzt an der linken Gehäusewand einen großen Zusatzlüfter (Auxiliary Fan / Kammerlüfter). Dieser bläst standardmäßig **horizontal auf Betthöhe** direkt über die linke Seite des Druckbetts:

1. **Ungleichmäßige Abkühlung (Thermal Shock):**
   - Teile auf der linken Bettseite kühlen drastisch schneller ab als auf der rechten Seite.
   - Die Druckbett-Temperatur bricht lokal an der linken Kante ein.
2. **Warping & Betthaftungsverlust:**
   - Insbesondere bei PLA und PETG führt der direkte Luftstrom zum gefürchteten "Left-Bed-Warping": Die Ecken heben sich von der PEI-Platte ab oder das Druckteil löst sich komplett.
3. **Konsequenz ohne Mod:**
   - Viele Nutzer schalten den AUX-Lüfter in den Slicer-Profilen komplett ab (`0%`), um Fehldrucke zu verhindern. Dadurch entfällt jedoch jegliche unterstützende Bauteilkühlung bei schnellen Schichten oder Überhängen.

---

## 2. Die Lösung: Der Deflektor-Aufsatz

Der Deflektor wird direkt auf das Auslassgitter des linken Lüfters aufgeklipst:
- **Sanfte Luftumlenkung nach oben:** Die geschwungenen Lamellen lenken den Luftstrom von der Druckplatte weg schräg nach oben in die Gehäusekuppel.
- **Zirkulation statt Anblasen:** Im Gehäuse entsteht eine schonende, gleichmäßige Konvektion/Luftumwälzung.
- **Aktivierbare Kühlung:** Mit montiertem Deflektor können Filament-Profile (wie PLA) sicher mit **30% AUX-Lüfterleistung** betrieben werden, ohne dass Druckteile am linken Bettrand warpen.

---

## 3. Modell-Varianten: Warum "Smooth"?

Im Modell-Paket existieren zwei Varianten:
- **`U1-Fan_Deflector-Aggressive.stl`:** Extrem steile Lamellen. Lenkt sehr stark nach oben, erzeugt aber mehr Rückstau und Verwirbelungen am Lüftergitter.
- **`U1-Fan_Deflector-Smooth.stl` (hier archiviert & empfohlen):** Strömungsgünstig geformte Krümmung. Führt den Luftstrom laminar und leise nach oben, ohne den Lüftermotor zu bremsen oder Pfeifgeräusche zu erzeugen.

---

## 4. Empfohlene Druckeinstellungen

Das Bauteil verbleibt dauerhaft in der beheizten Druckkammer und hält über Schnappnasen am Gitter. Es sollte daher stabil und hitzebeständig gedruckt werden:

| Parameter | Empfohlener Wert | Begründung |
| :--- | :--- | :--- |
| **Material** | **PETG** (Schwarz / Dunkelblau) oder **ABS/ASA** | Temperaturbeständigkeit im Bauraum (PLA kann bei Betttemperaturen von 60–80°C nachgeben). |
| **Profil** | `U1 Functional (0.4) - Halterungen, Mechanik` | Optimale Maßhaltigkeit und Festigkeit. |
| **Wandlinien (Walls)** | **6 Wände** | Macht die Halteclips elastisch-bruchfest und den Körper formstabil. |
| **Infill** | **35% Gyroid** (oder 100% massiv) | Verhindert Resonanzschwingungen im Luftstrom. |
| **Top / Bottom Shells** | 5 Top / 4 Bottom | Solide Deckschichten. |
| **Stützstrukturen (Support)** | **Nein** | Flach auf der Rückseite drucken, keine Stützen erforderlich. |
| **Druckzeit** | ca. 45–60 Minuten | Einmaliger Druck. |

---

## 5. Montage & Ausrichtung

1. **Menge:** Es wird genau **1 Stück** benötigt (für den linken Kammerlüfter).
2. **Orientierung beim Einclipsen:**
   - Die Lamellen / Zacken müssen so ausgerichtet sein, dass die Öffnungen **nach oben / schräg oben** leiten.
   - Der Deflektor wird von vorne/innen auf das Lüftergitter gedrückt, bis die seitlichen Rastnasen am Gehäusegitter sicher einschnappen.
   - Es wird kein Kleber und keine Schraube benötigt.

---

## 6. Integration in die OrcaSlicer-Profile

In den OrcaSlicer-Profilen dieses Repositories (`orcaslicer/filament/`):
- Sobald der Deflektor montiert ist, ist in den PLA-Presets der `additional_cooling_fan_speed` auf **30%** voreingestellt.
- Ohne Deflektor sollte der Wert bei empfindlichen flachen Teilen auf `0%` belassen werden.
