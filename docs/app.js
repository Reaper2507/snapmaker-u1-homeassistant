const i18n = {
  en: {
    "nav-telemetry": "Tools & Material",
    "nav-automations": "Automations",
    "btn-cut-full": "🖥️ Full Cutaway Dashboard",
    "btn-cut-closeup": "🔍 Tools & Material Close-Up",
    "cap-cutaway": "Authentic Cutaway View: Technical wireframe showing live XYZ axis positions, mounted toolhead (T3), and filament spools.",
    "cap-cutaway-closeup": "Tools & Material Close-Up: Live hotend nozzle temperatures, bed temperature, mounted state, and spool feed status.",
    "telemetry-badge": "⚡ Live Telemetry & Direct Controls",
    "telemetry-title": "Tools & Material: What the Hero Card Can Do",
    "telemetry-subtitle": "Much more than a static graphic: Full real-time telemetry and interactive direct controls for all 4 toolheads, axes, and heated bed.",
    "btn-mode-cutaway": "📐 Wireframe Cutaway",
    "btn-mode-studio": "🌟 Studio Glanz",
    "cap-telemetry-cutaway": "Cutaway mode: Wireframe schematic with live XYZ axes coordinates, nozzle & bed temperatures, and active toolhead detection.",
    "cap-telemetry-studio": "Studio mode: Photorealistic 3D render with glowing hotend temperature overlays, spool rings, and active mounting.",
    "feat-axes-title": "Real-Time 3D Axes Tracking (X, Y, Z)",
    "feat-axes-desc": "Live coordinates for print bed and carriage (e.g. X 227.6, Y 300.5, Z 9.9). See at a millimeter glance where head and bed currently reside.",
    "feat-temps-title": "Live Temperatures on Nozzles & Bed",
    "feat-temps-desc": "Target and current temperatures overlaid right on the 4 toolheads (T0–T3) and heated bed (e.g. T3 46° / 0° Selected, Bed 25° / 0°).",
    "feat-docking-title": "Toolhead Mounting & Docking Feedback",
    "feat-docking-desc": "Instant visual confirmation: Know immediately if a head is actively mounted on the carriage (T3 - Mounted) or safely docked in the parking rail.",
    "feat-spools-title": "Dynamic Spool Colors & Filament Tracking",
    "feat-spools-desc": "The 4 side spool rings dynamically illuminate in the exact loaded filament color (e.g. Bambu PLA White, SUNLU Black, eSUN Apricot).",
    "feat-tap-title": "Interactive Tap-to-Control Direct Shortcut",
    "feat-tap-desc": "Tap or click anywhere on the 3D printer graphic: Instantly opens the interactive quick-control popup for manual jogging (bed/head), preheating, and filament loading!",
    "auto-title": "Print Done Fanfare & Light Notification",
    "auto-subtitle": "Never miss a finished print: Alexa microwave 'Bing' chime at 99.9% and 2x chamber light flash on completion.",
    "fanfare-h3": "How This Automation Works",
    "fanfare-step1": "As print progress hits 99.9%, Alexa chimes the gentle microwave chime (bell_02). You know before cool-down starts.",
    "fanfare-step2": "The automation waits until the printer status officially transitions from printing to complete.",
    "fanfare-step3": "The chamber light pulses 2x briefly (On → 400ms → Off → 400ms → On) — an unmistakable visual signal in the room!",
    "prereq-title": "📋 Prerequisites",
    "prereq-amp": "Installed via HACS and connected to your Amazon account (for media_content_id: bell_02).",
    "prereq-generic": "Completely de-personalized: No hardcoded IPs or names. Just configure your Alexa Echo player entity name.",
    "btn-copy-code": "Copy YAML",
    "btn-download-yaml": "Download fertigdruck_fanfare.yaml",
    "cap-photo-closeup": "Realistic Close-up: Detailed front perspective showing the Snapmaker U1 logo and toolhead carriage.",
    "cap-photo-studio": "Studio-Glanz: High-end rendering of the Snapmaker U1 with 4 toolheads and ambient lighting.",
    "btn-photo-closeup": "🔍 Realistischer Close-Up mit Logo",
    "btn-photo-studio": "🌟 Studio Glanz (Default)",
    "maintenance-hint": "Live Bed Leveling mesh heatmap, temperature curves, and Klipper terminal.",
    "browser-hint": "💡 Scroll with your mouse wheel or use the buttons above to view lower sections (Bed controls, toolhead docks, and emergency stop).",
    "btn-auto-tour": "Auto-Tour",
    "btn-scroll-top": "Top",
    "btn-scroll-down": "Scroll down",
    "tab-maintenance": "Maintenance & Bed Mesh",
    "tab-photos": "Studio & Close-up Photos",
    "header-coffee-short": "Coffee",
    "header-coffee-full": "Buy Me a Coffee via PayPal",
    "faq4-a": "<strong>Cancel Print:</strong> Standard graceful stop. Finishes current move, raises Z-axis, safely docks active toolhead, and turns off heaters.<br><strong>Emergency Stop:</strong> Immediate power cut to all motors and heaters. Use only in case of physical collision or risk of damage. Requires Klipper firmware restart afterward.",
    "faq4-q": "When should I use 'Cancel Print' vs. Emergency Stop?",
    "faq3-a": "<strong>Never!</strong> Solidified plastic inside the cold nozzle will tear or damage the feeder mechanism if pulled with force. Always allow the nozzle to reach at least 200°C (PLA) or 240°C (PETG) before retracting.",
    "faq3-q": "Can I pull filament out when the nozzle is cold?",
    "faq2-a": "No, and that is intentional by design! The extruder motor only pulls the hot tip back out of the melt zone to prevent thick bulbs from jamming the PTFE tube. The long distance through the tube back to the spool is reeled up smoothly by hand to prevent messy tangles.",
    "faq2-q": "Does the motor automatically spit out the filament during unload?",
    "faq1-a": "The filament has been inserted into the Bowden feed inlet and the inlet sensor confirmed its presence, but it has not been advanced through the long tube to the nozzle yet. Simply tap <strong>Load</strong> to let the motor feed it to the hotend.",
    "faq1-q": "What does 'At feeder only' mean in the dashboard?",
    "load-tip-text": "Never insert bent or flattened filament tips. A sharp 45° cut ensures the filament slides effortlessly through the toolchanger dock inlet.",
    "load-tip-title": "💡 Pro Tip for smooth feeding",
    "load-trigger-step": "Click <strong>Load</strong> in Dashboard or Touchscreen. The printer preheats, motor feeds through the tube, and purges a test bead.",
    "lbl-load": "3. Trigger Load:",
    "load-insert-step": "Push filament into the feed tube until the inlet sensor trips (Dashboard shows: <em>At feeder only</em>).",
    "lbl-insert": "2. Insert:",
    "load-cut-step": "Snip filament cleanly at a 45° angle. Hang spool on the spindle.",
    "lbl-prep": "1. Cut 45°:",
    "load-punchline": "In a nutshell: 45° cut → Push to feeder → Press Load",
    "load-title": "Loading Filament",
    "unload-tip-text": "Light tactile resistance is completely normal as the filament passes the feeder gears. Pull smoothly! To remove the spool: hold the holder arm at the chassis and pull the spool straight outward.",
    "unload-tip-title": "💡 Why does it have slight resistance?",
    "unload-screen-step": "Select <strong>Filament → Unload</strong> → pick toolhead. Wait for nozzle temperature prompt, then gently pull.",
    "lbl-on-screen": "Touchscreen:",
    "unload-dash-step": "Click toolhead (T0–T3) → select <strong>Unload</strong>. Hotend heats up, motor unlocks, reel filament by hand.",
    "lbl-with-dash": "With Dashboard:",
    "unload-punchline": "In a nutshell: Auto-heat → Hand-reel spool",
    "unload-title": "Unloading Filament",
    "guide-subtitle": "Essential cheat sheets for loading, unloading, and daily handling",
    "guide-title": "Operator Guide & FAQ",
    "nav-guide": "Guide & FAQ",
    "nav-dashboard": "Dashboard",
    "nav-orcaslicer": "OrcaSlicer",
    "nav-install": "Installation",
    "nav-credits": "Credits",
    "hero-badge": "⚡ Open Source Community Hub",
    "hero-title": "Snapmaker U1<br><span class=\"gradient-text\">Home Assistant & OrcaSlicer</span>",
    "hero-lead": "The ultimate toolkit for your Snapmaker U1 4-toolhead 3D printer. Complete interactive Lovelace dashboard with real-time toolhead tracking, camera, Klipper controls, and precision-tuned OrcaSlicer profiles.",
    "btn-get-started": "Quick Start Guide",
    "btn-coffee": "Buy Me a Coffee",
    "feat-1-title": "Interactive Toolchanger View",
    "feat-1-desc": "Visualizes all 4 toolheads, live positions (T0–T3), spool colors, bed temperature, and mounted carriage state at a glance.",
    "feat-2-title": "Direct Local Moonraker",
    "feat-2-desc": "100% local, no cloud lock-in. Safety interlocks prevent accidental movements while actively printing.",
    "feat-3-title": "Optimized OrcaSlicer Profiles",
    "feat-3-desc": "Tuned for 0.4 mm and 0.6 mm nozzles. Scarf joint seams, gyroid infill, slim prime tower, and 12,000 mm/s² travel acceleration.",
    "feat-4-title": "19 Verified Filament Presets",
    "feat-4-desc": "Pre-configured material settings for Bambu PLA/PETG, SUNLU PLA+ 2.0, eSUN PETG Matte, ELEGOO, and GEEETECH TPU.",
    "gallery-title": "Interactive Showcase",
    "gallery-subtitle": "Modern 3-view architecture designed for desktop and mobile",
    "tab-desktop": "Desktop Showcase",
    "tab-mobile": "Mobile View (390px)",
    "tab-cutaway": "Cutaway & Axes",
    "tab-filament": "Spool & Filament State",
    "cap-desktop": "Full 3-column desktop view: Hero telemetry, live camera, job metrics, print speed controls, flow rate, and toolhead status.",
    "cap-mobile": "Compact mobile-optimized layout. Touch-friendly controls, quick actions, and full status indicators.",
    "cap-cutaway": "Cutaway graphic with live axes overlay (X, Y, Z), bed origin, and active toolhead parking status.",
    "cap-filament": "Dynamic spool color reflection matching loaded spools, with dual source detection (Firmware vs Slicer job).",
    "slicer-title": "Tuned OrcaSlicer Profiles",
    "slicer-subtitle": "Ready-to-use JSON presets for OrcaSlicer (v2.5.0 RC and newer)",
    "th-profile": "Profile Name",
    "th-nozzle": "Nozzle",
    "th-layer": "Layer Height",
    "th-features": "Key Highlights",
    "th-action": "Download",
    "p1-desc": "Daily driver. 3 walls, gyroid infill, type-2 prime tower (12–15 mm³), conditional scarf seam, 12,000 mm/s² travel.",
    "p2-desc": "Fast functional tests. 2 walls, 10% support cubic infill (-50% material), direct travel paths.",
    "p3-desc": "High strength & speed. Arachne wall generator, 1.2 mm ceiling, 20 mm³ tower volume.",
    "p4-desc": "Quality preset for 0.6 mm nozzles. Clean overhangs and smooth contours.",
    "p5-desc": "Maximum volumetric throughput for oversized prototypes in record time.",
    "slicer-tip-title": "💡 Installation in OrcaSlicer",
    "slicer-tip-text": "Copy the files from /orcaslicer/ into your local OrcaSlicer user directory:",
    "install-title": "Installation Guide",
    "install-subtitle": "Follow these 3 simple steps to get your dashboard and profiles running.",
    "step1-title": "Prerequisites & Custom Cards",
    "step1-desc": "Ensure HACS is installed. Install these required Lovelace cards from HACS:",
    "step2-title": "Copy Showcase Assets",
    "step2-desc": "Download and place the following files in your Home Assistant /config/www/snapmaker-u1/showcase/ directory:",
    "step2-sub": "Then register the resource in Home Assistant under Settings → Dashboards → Resources as JavaScript Module with URL: /local/snapmaker-u1/showcase/u1-fusion-showcase.u1.js.",
    "step3-title": "Import Dashboard YAML",
    "step3-desc": "Create a new Lovelace dashboard (or edit an existing one), open the Raw Configuration Editor, and paste the configuration from homeassistant/u1_dashboard_complete.yaml.",
    "details-yaml": "Click here to view / copy quick import instructions",
    "details-yaml-p": "You can also import views individually: views/snapmaker-u1.yaml, views/u1-minimal.yaml, and views/u1-maintenance.yaml.",
    "btn-view-raw": "View Raw Dashboard YAML",
    "coffee-title": "Support This Project",
    "coffee-lead": "This community hub is 100% free and open-source. If the dashboard or OrcaSlicer profiles save you time, filament, or failed prints, you are warmly invited to buy me a coffee!",
    "coffee-btn": "Buy Me a Coffee via PayPal",
    "coffee-note": "If you share or feature this project, keeping the coffee link is appreciated, but completely optional!",
    "credits-title": "Credits & Acknowledgements",
    "credits-subtitle": "Built upon great work from the Home Assistant and 3D printing community",
    "credit-ironoxx": "Original integration basis, toolheads layout, and camera streaming elements (MIT License).",
    "credit-cards": "Gratitude to RomRider (button-card), thomasloven (card-mod, slider-entity-row), kalkih (mini-graph-card), and ofekashern.",
    "credit-orca": "For open-source slicing excellence and native toolchanger firmware support."
  },
  de: {
    "nav-telemetry": "Tools & Material",
    "nav-automations": "Automatisierung",
    "btn-cut-full": "🖥️ Dashboard Gesamtansicht (Cutaway)",
    "btn-cut-closeup": "🔍 Tools & Material Detailansicht",
    "cap-cutaway": "Authentische Cutaway-Ansicht: Wireframe-Drucker mit Live-Achsenkoordinaten (X, Y, Z), Kopf-Status (T3 Mounted) und Spulenfarben.",
    "cap-cutaway-closeup": "Tools & Material Detailansicht: Live-Nozzletemperaturen aller Köpfe, Betttemperatur, Kopf-Status und Spulenzufuhr.",
    "telemetry-badge": "⚡ Live-Telemetrie & Direktsteuerung",
    "telemetry-title": "Tools & Material: Was die Hero-Card alles kann",
    "telemetry-subtitle": "Mehr als nur ein hübsches Bild: Vollwertige Echtzeit-Überwachung und Direktsteuerung aller 4 Toolheads, Achsen und Heizbett.",
    "btn-mode-cutaway": "📐 Wireframe Cutaway",
    "btn-mode-studio": "🌟 Studio Glanz",
    "cap-telemetry-cutaway": "Cutaway-Modus: Technische Wireframe-Darstellung mit Live-Achsenüberlagerung (X/Y/Z) und direkt ablesbaren Nozzle-Temperaturen.",
    "cap-telemetry-studio": "Studio-Modus: Fotorealistisches 3D-Rendering mit leuchtenden Temperatur-Overlays, Spulenringen und Kopf-Montagestatus.",
    "feat-axes-title": "Echtzeit-Achsenüberwachung (X, Y, Z)",
    "feat-axes-desc": "Live-Koordinaten für Bett und Druckkopf (z. B. X 227.6, Y 300.5, Z 9.9). Du siehst auf den Millimeter genau, wo sich Werkzeug und Bauplatte aktuell befinden.",
    "feat-temps-title": "Live-Temperaturen direkt an Nozzle & Bett",
    "feat-temps-desc": "Sowohl Ist- als auch Solltemperatur werden für alle 4 Köpfe (T0–T3) und das Heizbett direkt am Objekt eingeblendet (z. B. T3 46° / 0° (Selected), Bed 25° / 0°).",
    "feat-docking-title": "Toolhead-Status & Docking-Rückmeldung",
    "feat-docking-desc": "Kein Rätselraten mehr: Das Dashboard zeigt live an, welcher Kopf auf dem Schlitten montiert ist (T3 - Mounted) und welche Köpfe sicher in den Halterungen geparkt sind (Docked).",
    "feat-spools-title": "Dynamische Spulenfarben",
    "feat-spools-desc": "Die 4 Spulenhalter (T0–T3) rings um das Gehäuse leuchten in der exakten Farbe des geladenen Filaments und zeigen Materialtyp sowie verbleibende Restmenge an.",
    "feat-tap-title": "Interaktive Touch- & Klick-Direktsteuerung",
    "feat-tap-desc": "Tippe oder klicke einfach direkt auf die 3D-Druckergrafik: Sofort öffnet sich das interaktive Schnellmenü für Achsen-Jogging (Bett rauf/runter, Kopf zentrieren), Vorheizen und Filamentwechsel!",
    "auto-title": "Fertigdruck-Fanfare & Licht-Benachrichtigung",
    "auto-subtitle": "Verpasse keinen fertigen Druck mehr: Alexa Mikrowellen-'Bing' ab 99,9% und 2x kurzes Lichtflackern bei Druckende.",
    "fanfare-h3": "Wie die Automatisierung funktioniert",
    "fanfare-step1": "Sobald der Druckfortschritt 99,9 % erreicht, spielt Alexa sofort den kurzen, dezenten Mikrowellenton (bell_02). Du weißt Bescheid, bevor der Drucker überhaupt abkühlt.",
    "fanfare-step2": "Die Automatisierung wartet, bis der Druckstatus von printing offiziell auf complete wechselt.",
    "fanfare-step3": "Das Gehäuselicht pulsiert 2x kurz (An → 400ms → Aus → 400ms → An). Ein unübersehbares optisches Signal im Raum!",
    "prereq-title": "📋 Voraussetzungen (Prerequisites)",
    "prereq-amp": "Über HACS installiert und mit deinem Amazon-Konto verbunden (für media_content_id: bell_02).",
    "prereq-generic": "Vollständig endpersonalisiert: Keine privaten IP-Adressen oder Namen hartcodiert. Trage einfach den Namen deines Echo-Geräts ein.",
    "btn-copy-code": "YAML kopieren",
    "btn-download-yaml": "Download fertigdruck_fanfare.yaml",
    "nav-dashboard": "Dashboard",
    "nav-orcaslicer": "OrcaSlicer",
    "nav-install": "Installation",
    "nav-credits": "Credits",
    "hero-badge": "⚡ Open-Source Community Hub",
    "hero-title": "Snapmaker U1<br><span class=\"gradient-text\">Home Assistant & OrcaSlicer</span>",
    "hero-lead": "Das Komplettpaket für deinen Snapmaker U1 4-Kopf-Toolchanger. Interaktives Lovelace-Dashboard mit Live-Werkzeugtelemetrie, Kamera, Klipper-Steuerung und maßgeschneiderten OrcaSlicer-Profilen.",
    "btn-get-started": "Schnellstart-Anleitung",
    "btn-coffee": "Kaffee spendieren",
    "feat-1-title": "Interaktive Toolchanger-Ansicht",
    "feat-1-desc": "Zeigt alle 4 Druckköpfe (T0–T3), Ist-Positionen, Spulenfarben, Betttemperatur und Schlittenstatus auf einen Blick.",
    "feat-2-title": "Direkte lokale Moonraker-Anbindung",
    "feat-2-desc": "100 % lokal ohne Cloud-Zwang. Intelligente Schutzverriegelung verhindert Fehlbedienung während des Druckens.",
    "feat-3-title": "Optimierte OrcaSlicer-Profile",
    "feat-3-desc": "Getunt für 0,4 mm und 0,6 mm Düsen. Scarf-Joint-Naht, Gyroid-Infill, schlanker Prime Tower und 12.000 mm/s² Leerfahrt-Beschleunigung.",
    "feat-4-title": "19 getestete Filament-Presets",
    "feat-4-desc": "Vorkonfigurierte Profile für Bambu PLA/PETG, SUNLU PLA+ 2.0, eSUN PETG Matte, ELEGOO und GEEETECH TPU.",
    "gallery-title": "Interaktive Galerie",
    "gallery-subtitle": "Moderne 3-Ansichten-Architektur für Desktop und Smartphone",
    "tab-desktop": "Desktop-Ansicht",
    "tab-mobile": "Mobile Ansicht (390px)",
    "tab-cutaway": "Schnittzeichnung & Achsen",
    "tab-filament": "Spulen- & Filamentstatus",
    "cap-desktop": "Vollständige 3-Spalten-Desktop-Ansicht: Hero-Telemetrie, Live-Kamera, Druckfortschritt, Tempo-/Flussregler und Kopfstatus.",
    "cap-mobile": "Kompakte mobile Ansicht fürs Smartphone. Touchfreundliche Bedienung, schnelle Not-Halt- und Statusanzeige.",
    "cap-cutaway": "Schnittzeichnung mit Live-Achsenoverlay (X, Y, Z), Nullpunkt vorn links und Parkstatus der Köpfe.",
    "cap-filament": "Dynamische Spulenfarben passend zum real geladenen Material mit automatischer Erkennung (Firmware vs. Slicer-Job).",
    "slicer-title": "Tuning-Profile für OrcaSlicer",
    "slicer-subtitle": "Einsatzbereite JSON-Presets für OrcaSlicer (ab Version 2.5.0 RC)",
    "th-profile": "Profilname",
    "th-nozzle": "Düse",
    "th-layer": "Schichthöhe",
    "th-features": "Besonderheiten",
    "th-action": "Download",
    "p1-desc": "Alltags-Referenz. 3 Wände, Gyroid-Infill, Type-2 Prime Tower (12–15 mm³), Conditional Scarf Joint, 12.000 mm/s² Travel.",
    "p2-desc": "Schnelle Funktionstests. 2 Wände, 10 % Support Cubic Infill (50 % Materialersparnis), kürzeste Fahrwege.",
    "p3-desc": "Maximaler Durchsatz für 0,6 mm Düsen. Arachne Wall Generator, 1,2 mm Volldecke, 20 mm³ Turmvolumen.",
    "p4-desc": "Qualitäts-Profil für 0,6 mm Düsen. Feine Rundungen und steilere Überhänge.",
    "p5-desc": "Turbo-Prototypenprofil für maximale Materialförderung in Rekordzeit.",
    "slicer-tip-title": "💡 Installation in OrcaSlicer",
    "slicer-tip-text": "Kopiere die Dateien aus /orcaslicer/ in dein lokales OrcaSlicer-Benutzerverzeichnis:",
    "install-title": "Installationsanleitung",
    "install-subtitle": "In 3 einfachen Schritten ist dein System startklar.",
    "step1-title": "Voraussetzungen & HACS-Karten",
    "step1-desc": "Stelle sicher, dass HACS aktiv ist. Installiere diese Lovelace-Karten aus HACS:",
    "step2-title": "Showcase-Dateien ablegen",
    "step2-desc": "Lade diese Dateien herunter und lege sie in /config/www/snapmaker-u1/showcase/ in Home Assistant ab:",
    "step2-sub": "Registriere die Ressource in Home Assistant unter Einstellungen → Dashboards → Ressourcen als JavaScript-Modul: /local/snapmaker-u1/showcase/u1-fusion-showcase.u1.js.",
    "step3-title": "Dashboard-YAML importieren",
    "step3-desc": "Erstelle ein neues Lovelace-Dashboard (oder bearbeite ein bestehendes), öffne den Raw-Konfigurations-Editor und füge homeassistant/u1_dashboard_complete.yaml ein.",
    "details-yaml": "Hier klicken für Details & Teil-Importe",
    "details-yaml-p": "Du kannst auch einzelne Views importieren: views/snapmaker-u1.yaml, views/u1-minimal.yaml und views/u1-maintenance.yaml.",
    "btn-view-raw": "Vollständige Dashboard-YAML ansehen",
    "coffee-title": "Projekt unterstützen",
    "coffee-lead": "Dieser Community Hub ist 100 % kostenlos und frei verfügbar. Wenn dir das Dashboard oder die OrcaSlicer-Profile Zeit, Nerven oder Filament sparen, lade mich gern auf einen freiwilligen Kaffee ein!",
    "coffee-btn": "Kaffee via PayPal spendieren",
    "coffee-note": "Wenn du dieses Projekt teilst oder weiterempfiehlst, freue ich mich, wenn du den Kaffeelink beibehältst – komplett freiwillig!",
    "credits-title": "Credits & Danksagung",
    "credits-subtitle": "Aufbauend auf großartiger Vorarbeit der Home-Assistant- und 3D-Druck-Community",
    "credit-ironoxx": "Ursprüngliche Integrationsbasis, Toolhead-Layout und Kamera-Streaming (MIT-Lizenz).",
    "credit-cards": "Dank an RomRider (button-card), thomasloven (card-mod, slider-entity-row), kalkih (mini-graph-card) und ofekashern.",
    "credit-orca": "Für hervorragendes Open-Source-Slicing und native Klipper-Toolchanger-Unterstützung."
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'en' ? '🇩🇪 DE' : '🇬🇧 EN';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Lang toggle
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'de' : 'en');
    });
  }

  // Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Interactive Browser Scroll Controls
  const viewport = document.getElementById('desktop-viewport');
  const btnScrollDown = document.getElementById('btn-scroll-down');
  const btnScrollTop = document.getElementById('btn-scroll-top');
  const btnAutoTour = document.getElementById('btn-auto-tour');

  if (btnScrollDown && viewport) {
    btnScrollDown.addEventListener('click', () => {
      viewport.scrollBy({ top: 450, behavior: 'smooth' });
    });
  }

  if (btnScrollTop && viewport) {
    btnScrollTop.addEventListener('click', () => {
      viewport.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (btnAutoTour && viewport) {
    let isTouring = false;
    btnAutoTour.addEventListener('click', () => {
      if (isTouring) return;
      isTouring = true;
      btnAutoTour.style.opacity = '0.6';
      viewport.scrollTo({ top: viewport.scrollHeight, behavior: 'smooth' });
      setTimeout(() => {
        viewport.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          isTouring = false;
          btnAutoTour.style.opacity = '1';
        }, 1200);
      }, 2000);
    });
  }

  // Interactive Photo Switcher (Studio vs Close-Up)
  const photoBtns = document.querySelectorAll('.photo-toggle-btn');
  const photoImg = document.getElementById('photo-display-img');
  const photoCaption = document.getElementById('photo-display-caption');

  const photoData = {
    studio: {
      src: 'assets/studio.png',
      captionKey: 'cap-photo-studio'
    },
    closeup: {
      src: 'assets/close-up.jpg',
      captionKey: 'cap-photo-closeup'
    }
  };

  photoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      photoBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const photoKey = btn.getAttribute('data-photo');
      if (photoData[photoKey] && photoImg) {
        photoImg.src = photoData[photoKey].src;
        if (photoCaption) {
          const capKey = photoData[photoKey].captionKey;
          photoCaption.setAttribute('data-i18n', capKey);
          photoCaption.innerHTML = i18n[currentLang][capKey] || '';
        }
      }
    });
  });

  // Cutaway View Toggle (Dashboard vs Close-Up)
  const cutawayBtns = document.querySelectorAll('.cutaway-toggle-btn');
  const cutawayImg = document.getElementById('cutaway-display-img');
  const cutawayCap = document.getElementById('cutaway-display-caption');

  const cutawayData = {
    full: {
      src: 'assets/dashboard-cutaway.jpg',
      capKey: 'cap-cutaway'
    },
    closeup: {
      src: 'assets/tools-material-cutaway.jpg',
      capKey: 'cap-cutaway-closeup'
    }
  };

  cutawayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cutawayBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.getAttribute('data-cutview');
      if (cutawayData[view] && cutawayImg) {
        cutawayImg.src = cutawayData[view].src;
        if (cutawayCap) {
          const capKey = cutawayData[view].capKey;
          cutawayCap.setAttribute('data-i18n', capKey);
          cutawayCap.innerHTML = i18n[currentLang][capKey] || '';
        }
      }
    });
  });

  // Tools & Material Preview Switcher (Cutaway vs Studio)
  const telemBtns = document.querySelectorAll('.preview-btn');
  const telemImg = document.getElementById('telemetry-preview-img');
  const telemCap = document.getElementById('telemetry-preview-caption');

  const telemData = {
    cutaway: {
      src: 'assets/tools-material-cutaway.jpg',
      capKey: 'cap-telemetry-cutaway'
    },
    studio: {
      src: 'assets/tools-material-studio.jpg',
      capKey: 'cap-telemetry-studio'
    }
  };

  telemBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      telemBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-mode');
      if (telemData[mode] && telemImg) {
        telemImg.src = telemData[mode].src;
        if (telemCap) {
          const capKey = telemData[mode].capKey;
          telemCap.setAttribute('data-i18n', capKey);
          telemCap.innerHTML = i18n[currentLang][capKey] || '';
        }
      }
    });
  });

  // Copy YAML Code Button
  const btnCopyYaml = document.getElementById('btn-copy-yaml');
  const yamlCodeEl = document.getElementById('fanfare-yaml-code');

  if (btnCopyYaml && yamlCodeEl) {
    btnCopyYaml.addEventListener('click', () => {
      navigator.clipboard.writeText(yamlCodeEl.innerText).then(() => {
        const originalText = btnCopyYaml.innerHTML;
        btnCopyYaml.innerHTML = '✅ Copied!';
        btnCopyYaml.style.background = '#238636';
        setTimeout(() => {
          btnCopyYaml.innerHTML = originalText;
          btnCopyYaml.style.background = '';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy YAML: ', err);
      });
    });
  }

});
