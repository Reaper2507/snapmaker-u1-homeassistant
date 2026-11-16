# Snapmaker U1 Abfalleimer & Automatischer Bettauslöser (Waste Bin & Automatic Bed Releaser)

[![MakerWorld Model](https://img.shields.io/badge/MakerWorld-3620006-blue?style=flat-square&logo=makerworld)](https://makerworld.com/de/models/3620006-snapmaker-u1-waste-bin-automatic-bed-releaser)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

Dieses 3D-Druck-Zubehörteil erfüllt eine doppelte Funktion an der Snapmaker U1:
1. **Purge- / Mülleimer:** Sammelt Spül- und Reinigungskot zuverlässig auf.
2. **Mechanischer Bettauslöser:** Dient als definierter Anschlag für die Federstahl-PEI-Druckplatte bei der Z-Abfahrt am Druckende, um fertige Bauteile vollautomatisch abzulösen.

👉 **Kostenloser Download des 3D-Druckmodells auf MakerWorld:**  
🔗 [**Snapmaker U1 Abfalleimer & Automatischer Bettauslöser auf MakerWorld**](https://makerworld.com/de/models/3620006-snapmaker-u1-waste-bin-automatic-bed-releaser)

---

## ⚠️ Wichtige Voraussetzung für die Software-Funktion

> [!IMPORTANT]
> Die Home-Assistant-Funktion **„Auto Remove with Basket“** (`input_boolean.snapmaker_u1_auto_remove_with_basket`) in der Automatisierung `Snapmaker U1 – Cool After Printing` darf **erst aktiviert werden, wenn dieses Bauteil physisch am Drucker installiert ist**.
>
> Ohne den installierten Abfalleimer fährt das Bett bei Z = 227 mm ins Leere, und die Federstahlplatte erfährt keine Durchbiegung.

---

## Funktionsweise & Kinematik

Die Automatisierung nutzt die thermische Kontraktion des Kunststoffs in Kombination mit einer gezielten elastischen Biegung der Federstahlplatte:

1. **Abkühlphase:**  
   Nach Druckende läuft der Bauraumlüfter (`cavity_fan` auf 70 %), bis das Druckbett unter **36,5 °C** abgekühlt ist. Dadurch schrumpft der Kunststoff und die chemische Haftung zur PEI-Oberfläche löst sich an.
2. **Definierte Berührungsebene:**  
   - Bei der Standard-Parkposition steht das Bett auf **Z = 200 mm**.
   - Bei **Z = 213 mm** berührt die Kante der Federstahlplatte die Nase des Abfalleimers (0 mm Durchbiegung).
3. **Der 3-fach Pop-Off-Puls (14 mm Biegung):**  
   - Das Bett fährt kontrolliert auf **Z = 227 mm** hinunter.
   - Die Kante der PEI-Platte wird um exakt **14 mm nach oben gebogen**.
   - *Gemessener Sicherheitswert:* Bis 15 mm hält der Magnetfuß die Platte sicher fest; erst ab 16 mm löst sich der Magnet. Mit 14 mm wird maximale Scherkraft erreicht, ohne den Magnetkontakt zu gefährden.
   - Der Ablauf verweilt 2,5 Sekunden im gebogenen Zustand, entlastet auf **Z = 210 mm** (flach auf dem Magneten) und wiederholt diesen Zyklus 3-mal.
4. **Ende:**  
   Das Bett kehrt auf **Z = 200 mm** zurück und die Schrittmotoren werden stromlos geschaltet (`M84`). Das gelöste Bauteil liegt frei auf der Platte.

---

## Software-Steuerung

- **Home Assistant Switch:** `input_boolean.snapmaker_u1_auto_remove_with_basket` (Standard: `on`)
- **Automatischer Z-Sicherheitscheck:** Falls ein Druckobjekt höher als 195 mm ist (`object_height > 195 mm` bzw. `toolhead_position_z > 205 mm`), wird die Biegung automatisch übersprungen, um Kollisionen am Boden der Z-Achse zu verhindern.
