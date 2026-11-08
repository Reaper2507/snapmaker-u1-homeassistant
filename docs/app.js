const i18n = {
  "en": {
    "nav-home": "Overview",
    "nav-ha": "Dashboard",
    "nav-orcaslicer": "Extras",
    "nav-guide": "Guide",
    "nav-credits": "Credits",
    "hero-badge": "Home Assistant",
    "hero-title-hub": "Snapmaker U1 Dashboard",
    "hero-lead-hub": "Tap the printer graphic in Home Assistant to open its controls. The card shows the loaded filament colors at their T0–T3 positions, with camera, job status and temperatures alongside.",
    "ha-banner-badge": "Lovelace dashboard for Snapmaker U1",
    "ha-banner-title": "Snapmaker U1 Dashboard",
    "ha-banner-lead": "Monitor print jobs, check temperatures and open printer controls from Home Assistant. The dashboard uses Ironoxx’s Snapmaker U1 integration.",
    "slicer-banner-badge": "Optional downloads",
    "slicer-banner-title": "OrcaSlicer Profiles & Filament Presets",
    "slicer-banner-lead": "Community starting profiles for the Snapmaker U1 in OrcaSlicer 2.5. Choose the matching nozzle and verify the sliced preview before printing.",
    "guide-banner-badge": "🧵 Quick Guide & Problem Solver",
    "guide-banner-title": "Snapmaker U1 Operator Guide & FAQ",
    "guide-banner-lead": "Filament swapping explained in two words: Fast instructions for dashboard and printer touchscreen, resistance explained, and essential FAQs.",
    "jump-slicer-install": "📦 Quick Install",
    "jump-set-and-send": "🧩 Set & Send Plugin",
    "jump-profiles": "Process profiles",
    "jump-filaments": "🧵 19 Filament Presets",
    "credits-banner-badge": "Credits",
    "credits-banner-title": "Credits and dependencies",
    "credits-banner-lead": "Thanks to the projects and maintainers whose work this dashboard and its extras build on.",
    "gallery-title": "Dashboard Gallery & Screenshots",
    "gallery-subtitle": "Screenshots of the dashboard in Home Assistant. Open an image to see it at its original size.",
    "tab-desktop": "Studio dashboard",
    "tab-photos": "Printer images",
    "tab-cutaway": "Cutaway and axes",
    "tab-maintenance": "Maintenance",
    "tab-mobile": "Minimal",
    "btn-cut-full": "Dashboard",
    "btn-cut-closeup": "Tools and material",
    "cap-cutaway": "Authentic Cutaway View: Technical wireframe showing live scaled XYZ axis positions, mounted toolhead (T3), and filament spools.",
    "cap-cutaway-closeup": "Tools & Material Close-Up: Live hotend nozzle temperatures, bed temperature, mounted state, and spool feed status.",
    "telemetry-badge": "Dashboard highlight",
    "telemetry-title": "Tools &amp; Material",
    "telemetry-subtitle": "Tap the printer graphic to open the controls for the current print state. The card also shows live spool colors, temperatures and tool positions.",
    "btn-mode-cutaway": "Cutaway",
    "btn-mode-studio": "Studio",
    "cap-telemetry-cutaway": "Cutaway view of the same card with the four spool positions, axes and the mounted tool.",
    "cap-telemetry-studio": "Studio view with the loaded spool colors and live labels captured during a print.",
    "feat-axes-title": "Real-Time 3D Axes Tracking (X, Y, Z)",
    "feat-axes-desc": "Live scaled coordinates for print bed and carriage (e.g. X 227.6, Y 300.5, Z 9.9). See at a millimeter glance where head and bed currently reside.",
    "feat-temps-title": "Live Temperatures on Nozzles & Bed",
    "feat-temps-desc": "Target and current temperatures overlaid right on the 4 toolheads (T0–T3) and heated bed (e.g. T3 46° / 0° Selected, Bed 25° / 0°).",
    "feat-docking-title": "Toolhead Mounting & Docking Feedback",
    "feat-docking-desc": "Shows the reported toolhead positions. Missing telemetry is shown as unknown.",
    "feat-spools-title": "Loaded filament colors at T0–T3",
    "feat-spools-desc": "See which material is already loaded at each position and switch between loaded tools from Home Assistant when the printer allows it. T0 is top left, T1 bottom left, T2 top right and T3 bottom right.",
    "feat-tap-title": "Tap the printer to open controls",
    "feat-tap-desc": "Open print controls and the Filament &amp; heat tab directly from the card. Start heating, loading or unloading there when supported. Installing a new spool and feeding it to the inlet still happens at the printer.",
    "cap-photo-closeup": "Close-up illustration of the toolchanger.",
    "cap-photo-studio": "Studio illustration of the Snapmaker U1.",
    "btn-photo-closeup": "Close-up",
    "btn-photo-studio": "Studio",
    "faq4-a": "Use <strong>Cancel Print</strong> for a routine abort and check the resulting printer status. <strong>Emergency Stop</strong> sends a software shutdown command (Klipper M112). Follow the manufacturer’s instructions in a hazardous situation.",
    "faq4-q": "When should I use 'Cancel Print' vs. Emergency Stop?",
    "faq3-a": "Use the printer’s unload routine and wait until it reaches the configured temperature for the material. Avoid pulling against resistance.",
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
    "unload-dash-step": "Click <strong>Unload</strong> on the respective toolhead. Wait for temperature ramp-up, then gently pull filament from the tube.",
    "unload-punchline": "In a nutshell: Tap Unload → Wait for preheat → Pull with gentle continuous tug",
    "unload-title": "Unloading Filament",
    "slicer-title": "Tuned Process Profiles (0.4 & 0.6 mm)",
    "slicer-subtitle": "Validate each profile for your material and firmware.",
    "th-profile": "Profile Name",
    "th-nozzle": "Nozzle",
    "th-layer": "Layer Height",
    "th-features": "Key Features & Highlights",
    "th-action": "Download",
    "p-quick-solid-desc": "High-efficiency daily profile. 3 walls, 4 top layers, 12% Gyroid. Saves ~11.6% print time and 10g material compared to 0.20 mm.",
    "p1-desc": "Daily reference. 3 walls, gyroid infill, slim prime tower (12–15 mm³), conditional scarf seam, 12,000 mm/s² travel.",
    "p2-desc": "Prototype starting point with two walls and 10% Support Cubic infill.",
    "p3-desc": "High strength & throughput for 0.6 mm nozzles. Arachne wall generator, 1.2 mm solid ceiling, 20 mm³ tower volume.",
    "p4-desc": "Quality profile for 0.6 mm nozzles. Clean overhangs and smooth contours.",
    "p5-desc": "Turbo prototype profile for maximum volumetric flow in record time.",
    "support-title": "Feedback and support",
    "extras-title": "Optional extras",
    "extra-orca": "OrcaSlicer profiles",
    "extra-layer": "LayerLab Set &amp; Send",
    "extra-tone": "Print completion chime and light",
    "extra-guide": "Filament guide and FAQ",
    "support-note": "Report a bug, share feedback or buy a coffee if the project helped you.",
    "feedback": "Report an issue",
    "nav-install": "Install",
    "dash-cta": "See the full dashboard",
    "install-cta": "Installation",
    "three-views": "Three dashboard views",
    "views-lead": "Dashboard for print controls and loaded tools, Minimal for quick status, and Maintenance for diagnostics, self-test and service intervals.",
    "gallery-cta": "View screenshot gallery →",
    "main-credit": "Built on <a href=\"https://github.com/Ironoxx/ha-snapmaker-u1-card\">Ironoxx’s Snapmaker U1 integration</a>. See the <a href=\"credits.html\">credits</a>.",
    "quick-title": "Install the Snapmaker U1 dashboard",
    "quick-intro": "Start here if Home Assistant can reach your U1. Setup time depends on which dependencies you have installed.",
    "quick-1": "Install <a href=\"https://my.home-assistant.io/redirect/hacs_repository/?owner=Ironoxx&amp;repository=ha-snapmaker-u1-card&amp;category=integration\">Ironoxx’s integration in HACS</a>, restart HA and add Snapmaker U1 Card under Settings → Devices &amp; services.",
    "quick-2": "Install the six frontend dependencies in HACS: button-card, card-mod, slider-entity-row, vertical-stack-in-card, apexcharts-card, config-template-card.",
    "quick-3": "Copy the three files below to <code>/config/www/media/snapmaker-u1/showcase/</code>. Under Settings → Dashboards → Resources, register <code>/local/media/snapmaker-u1/showcase/u1-fusion-showcase.u1.js</code> as a JavaScript module.",
    "quick-4": "Paste the <a href=\"https://raw.githubusercontent.com/Reaper2507/snapmaker-u1-homeassistant/main/homeassistant/u1_dashboard_complete.yaml\">dashboard YAML</a> into the Raw configuration editor of a new dashboard. Map the sample entity IDs before using the controls.",
    "quick-repo": "Troubleshooting and updates",
    "ha-install-cta": "Install dashboard",
    "ha-gallery-cta": "Screenshots",
    "ha-tools-cta": "Tools &amp; Material",
    "sim-disclosure": "The controls image is a screenshot. The selectors below change sample values only.",
    "fanfare-summary": "Optional: print completion chime and light",
    "fanfare-note": "The chamber light reverses state for 1.2 seconds on entry into the last valid layer. Confirmed completion is the fallback. The Alexa bell_02 chime attempts to play near 99.9% or at completion, depending on telemetry.",
    "fanfare-setup": "Setup and entity mapping",
    "fanfare-file": "Open YAML",
    "fanfare-show": "Show YAML",
    "btn-copy-yaml": "Copy YAML",
    "preset-install": "Install presets",
    "preset-setup": "Use OrcaSlicer 2.5 with the matching Snapmaker U1 nozzle preset. Close OrcaSlicer and back up your user presets before copying files. Restart and slice a small test model before sending it to the printer.",
    "preset-doc": "Installation paths and troubleshooting",
    "preset-zip": "Download repository ZIP",
    "set-send-title": "Optional: Set &amp; Send by LayerLab",
    "set-send-desc": "A separately distributed pre-print dialog for toolhead assignment and compatible printer options. Check plugin and firmware requirements with the author.",
    "set-send-source": "LayerLab documentation and download →",
    "filament-1-0": "White",
    "filament-2-0": "Jade white",
    "filament-2-1": "Black",
    "filament-3-0": "Dark grey",
    "filament-3-1": "Black",
    "filament-4-0": "Beige",
    "filament-5-0": "Apricot",
    "filament-5-1": "Concrete grey",
    "filament-5-2": "Blue Brick",
    "filament-5-3": "Dark grey",
    "filament-6-0": "Grey",
    "filament-7-0": "Transparent silver",
    "filament-8-0": "Black",
    "filament-9-0": "Bone white",
    "filament-9-1": "Little Blue",
    "filament-9-2": "Olive green",
    "filament-9-3": "Black",
    "filament-9-4": "Sunny Orange",
    "filament-9-5": "White",
    "all-filaments": "19 filament starting presets",
    "filament-note": "Validate temperatures and flow for your spool. For PETG-CF, follow the filament maker’s hardened-nozzle requirements.",
    "guide-faq": "Frequently asked questions",
    "guide-motion": "Why are motion controls disabled during a print?",
    "guide-motion-a": "The dashboard gates manual motion by the reported printer state. Use the normal printer controls to stop a job before attempting manual movement.",
    "credit-detail-0": "Provides the original Snapmaker U1 integration and frontend card. The adapted card retains the upstream MIT notice.",
    "credit-detail-1": "Spoolman provides optional filament inventory through the upstream integration.",
    "credit-detail-2": "Develops and distributes the optional Set &amp; Send plugin separately.",
    "credit-detail-3": "Provides card-mod and slider-entity-row, both used by the dashboard.",
    "credit-detail-4": "Maintains the slicer used by the optional presets.",
    "credit-detail-5": "Maintains button-card and apexcharts-card, both used by the dashboard.",
    "credit-detail-6": "Thanks to the projects behind the printer firmware and control API.",
    "credit-deps": "See the <a href=\"https://github.com/Reaper2507/snapmaker-u1-homeassistant/blob/main/homeassistant/README.md\">complete dashboard dependencies</a> and <a href=\"https://github.com/Reaper2507/snapmaker-u1-homeassistant/blob/main/LICENSE\">MIT license</a>. External projects have their own licenses.",
    "lbl-with-dash": "With the dashboard",
    "gallery-badge": "Screenshots",
    "cap-mobile": "Dashboard on a narrow phone screen.",
    "page-index": "Snapmaker U1 Dashboard for Home Assistant",
    "page-homeassistant": "Dashboard and installation · Snapmaker U1",
    "page-install": "Install the Snapmaker U1 dashboard",
    "page-orcaslicer": "Optional OrcaSlicer presets · Snapmaker U1",
    "page-guide": "Filament guide and FAQ · Snapmaker U1",
    "page-credits": "Credits and dependencies · Snapmaker U1",
    "sim-docked": "Docked",
    "sim-mounted": "Mounted",
    "sim-head": "Toolhead",
    "sim-nozzle": "Nozzle",
    "sim-bed": "Bed",
    "credit-primary": "Core integration",
    "credit-plugin": "Optional slicer plugin",
    "skip-main": "Skip to content",
    "hacs-note": "If HACS is new to you, follow the <a href=\"https://hacs.xyz/docs/use/download/download/\">official setup for your installation type</a>.",
    "sim-privacy": "This preview changes sample values in the page only.",
    "profile-names": "Settings and baseline profiles",
    "role-ironoxx": "Creator of ha-snapmaker-u1-card",
    "role-donkie": "Maintainer of Spoolman",
    "role-layerlab": "Developer of Set &amp; Send",
    "role-thomas": "Home Assistant frontend cards",
    "role-orca": "OrcaSlicer maintainers",
    "role-rom": "Home Assistant frontend cards",
    "role-firmware": "Firmware and hardware",
    "link-repo": "GitHub repository →",
    "link-ironoxx": "☕ Support Ironoxx on Ko-fi",
    "link-donkie": "❤️ Sponsor Donkie on GitHub",
    "link-layer": "LayerLab project →",
    "link-profile": "GitHub profile →",
    "link-orca": "Sponsor SoftFever on GitHub",
    "link-button": "button-card on GitHub →",
    "caption-desktop-label": "Desktop dashboard",
    "caption-size": "Desktop screenshot",
    "caption-desktop": "Dashboard with four toolheads, camera, temperatures and job controls.",
    "caption-maint-label": "Maintenance and diagnostics",
    "caption-maint-mesh": "Bed mesh and Klipper console",
    "caption-maint": "Track service intervals, run the integration’s self-test and inspect the bed mesh, temperature history and firmware status from Home Assistant.",
    "vendor-unknown": "High Speed Matte PETG (vendor unspecified)",
    "p7-desc": "Compact multicolor profile.",
    "coffee-ironoxx": "Coffee for Ironoxx",
    "coffee-maintainer": "Coffee for Reaper2507",
    "thomas-card": "card-mod on GitHub →",
    "gallery-dash-detail": "More of the dashboard: tools, files and layer view",
    "gallery-maint-detail": "See the maintenance and diagnostics details",
    "gallery-minimal-note": "Minimal view during a print, with ETA, remaining time and layer progress.",
    "gallery-phone-detail": "See the phone layout",
    "ha-install-heading": "Install the dashboard",
    "ha-install-short": "The installation page lists the required HACS cards and the exact files to download.",
    "manual-install": "Installation steps",
    "ai-install-link": "Install with an AI assistant",
    "ai-install-heading": "Install with an AI assistant",
    "ai-install-body": "Copy the prompt into an assistant with Home Assistant admin and file access. It installs the dashboard and checks what is running.",
    "ai-install-copy": "Copy installation prompt",
    "ai-install-show": "Show installation prompt",
    "ai-copy-success": "Prompt copied.",
    "ai-copy-error": "Open the prompt below and copy it manually.",
    "controls-preview-title": "Printer controls",
    "controls-preview-open": "Tap the printer to see its controls",
    "controls-preview-close": "Close",
    "controls-preview-caption": "Screenshot from Home Assistant. The controls in this preview are illustrative.",
    "card-mode-hint": "In Home Assistant, open the gear on the card. Choose Studio or Cutaway under Image. With Live spool colors on, the graphic reflects the loaded filament colors reported for each slot."
  },
  "de": {
    "nav-home": "Übersicht",
    "nav-ha": "Dashboard",
    "nav-orcaslicer": "Extras",
    "nav-guide": "Bedienhilfe",
    "nav-credits": "Danksagung",
    "hero-badge": "Home Assistant",
    "hero-title-hub": "Snapmaker U1 Dashboard",
    "hero-lead-hub": "Tippe in Home Assistant auf das Druckerbild, um die Steuerung zu öffnen. Die Karte zeigt die Farben der geladenen Filamente an ihren Positionen T0–T3. Kamera, Druckstatus und Temperaturen stehen daneben.",
    "ha-banner-badge": "Lovelace-Dashboard für den Snapmaker U1",
    "ha-banner-title": "Snapmaker U1 Dashboard",
    "ha-banner-lead": "Druckaufträge überwachen, Temperaturen prüfen und Druckersteuerung in Home Assistant öffnen. Das Dashboard verwendet Ironoxx’ Snapmaker-U1-Integration.",
    "slicer-banner-badge": "Optionale Downloads",
    "slicer-banner-title": "OrcaSlicer Profile & Filament-Presets",
    "slicer-banner-lead": "Community-Ausgangsprofile für den Snapmaker U1 in OrcaSlicer 2.5. Wähle die passende Düse und prüfe die Slicing-Vorschau vor dem Druck.",
    "guide-banner-badge": "🧵 Schnellanleitung & Problemlöser",
    "guide-banner-title": "Snapmaker U1 Operator Guide & FAQ",
    "guide-banner-lead": "Filamentwechsel in zwei Worten: Schnelle Handgriffe für Dashboard und Drucker-Touchscreen, mechanischer Widerstand erklärt und die wichtigsten FAQs.",
    "jump-slicer-install": "📦 Schnell-Installation",
    "jump-set-and-send": "🧩 Set & Send Plugin",
    "jump-profiles": "Prozessprofile",
    "jump-filaments": "🧵 19 Filament-Presets",
    "credits-banner-badge": "Danksagung",
    "credits-banner-title": "Danksagung und Abhängigkeiten",
    "credits-banner-lead": "Danke an die Projekte und Maintainer, deren Arbeit dieses Dashboard und seine Extras nutzen.",
    "gallery-title": "Dashboard Galerie & Screenshots",
    "gallery-subtitle": "Screenshots des Dashboards in Home Assistant. Öffne ein Bild, um es in Originalgröße zu sehen.",
    "tab-desktop": "Studio-Dashboard",
    "tab-photos": "Druckerbilder",
    "tab-cutaway": "Cutaway und Achsen",
    "tab-maintenance": "Wartung",
    "tab-mobile": "Minimal",
    "btn-cut-full": "Dashboard",
    "btn-cut-closeup": "Werkzeuge und Material",
    "cap-cutaway": "Authentische Cutaway-Ansicht: Wireframe-Drucker mit live skalierten XYZ-Achsenkoordinaten, montiertem Werkzeugkopf (T3) und Spulenfarben.",
    "cap-cutaway-closeup": "Tools & Material Detailansicht: Live-Nozzletemperaturen aller Köpfe, Heizbett-Temperatur, Montage-Status und Förderstatus.",
    "telemetry-badge": "Kernfunktion des Dashboards",
    "telemetry-title": "Werkzeuge und Material",
    "telemetry-subtitle": "Tippe auf das Druckerbild, um die zum Druckstatus passende Steuerung zu öffnen. Die Karte zeigt außerdem live die Spulenfarben, Temperaturen und Werkzeugpositionen.",
    "btn-mode-cutaway": "Cutaway",
    "btn-mode-studio": "Studio",
    "cap-telemetry-cutaway": "Cutaway-Ansicht derselben Karte mit vier Spulenpositionen, Achsen und montiertem Werkzeug.",
    "cap-telemetry-studio": "Studio-Ansicht mit den geladenen Spulenfarben und den Live-Anzeigen während eines Drucks.",
    "feat-axes-title": "Echtzeit-Achsenüberwachung (X, Y, Z)",
    "feat-axes-desc": "Live-Koordinaten für Bett und Druckkopf (z. B. X 227.6, Y 300.5, Z 9.9). Du siehst auf den Millimeter genau, wo sich Werkzeug und Bauplatte aktuell befinden.",
    "feat-temps-title": "Live-Temperaturen direkt an Nozzle & Bett",
    "feat-temps-desc": "Sowohl Ist- als auch Solltemperatur werden für alle 4 Köpfe (T0–T3) und das Heizbett direkt am Objekt eingeblendet (z. B. T3 46° / 0° Selected, Bed 25° / 0°).",
    "feat-docking-title": "Toolhead-Status & Docking-Rückmeldung",
    "feat-docking-desc": "Zeigt die gemeldeten Positionen der Werkzeugköpfe. Fehlen die Daten, bleibt der Status unbekannt.",
    "feat-spools-title": "Geladene Filamentfarben an T0–T3",
    "feat-spools-desc": "Sieh auf einen Blick, welches Material an welcher Position geladen ist. Wenn der Druckerstatus es zulässt, kannst du in Home Assistant zwischen den bereits bestückten Werkzeugen wechseln. T0 liegt links oben, T1 links unten, T2 rechts oben und T3 rechts unten.",
    "feat-tap-title": "Drucker antippen, Steuerung öffnen",
    "feat-tap-desc": "Öffne die Druckersteuerung und „Filament &amp; heat“ direkt über die Karte. Dort kannst du je nach Druckerstatus heizen und Laden oder Entladen starten. Eine neue Spule setzt du am Drucker ein und führst das Filament bis zum Einlass.",
    "cap-photo-closeup": "Nahaufnahme des Werkzeugwechslers.",
    "cap-photo-studio": "Studio-Illustration des Snapmaker U1.",
    "btn-photo-closeup": "Nahaufnahme",
    "btn-photo-studio": "Studio",
    "faq4-a": "Nutze <strong>Druck abbrechen</strong> für einen regulären Abbruch und prüfe den Druckerstatus. <strong>Notstopp</strong> sendet einen Software-Stopp (Klipper M112). Befolge bei Gefahr die Anweisungen des Herstellers.",
    "faq4-q": "Wann sollte ich 'Druck abbrechen' vs. Not-Aus nutzen?",
    "faq3-a": "Starte die Entladeroutine am Drucker und warte auf die für das Material eingestellte Temperatur. Ziehe bei Widerstand nicht mit Gewalt.",
    "faq3-q": "Kann ich Filament herausziehen, wenn die Nozzle kalt ist?",
    "faq2-a": "Nein, und das ist volle Absicht! Der Motor zieht das Filament nur aus der Schmelzzone zurück, damit sich kein dicker Knubbel bildet. Den langen Schlauchweg zur Spule kurbelst du mit der Hand sanft auf, um Verknotungen zu vermeiden.",
    "faq2-q": "Spuckt der Motor das Filament beim Entladen komplett aus?",
    "faq1-a": "Das Filament wurde in den Schlaucheinlass gesteckt und der Sensor meldet Anwesenheit, aber es wurde noch nicht durch den PTFE-Schlauch zur Düse gefördert. Tippe einfach auf <strong>Laden</strong>, damit der Motor loslegt.",
    "faq1-q": "Was bedeutet 'At feeder only' im Dashboard?",
    "load-tip-text": "Niemals geknickte oder platte Filament-Enden einführen. Ein sauberer 45°-Schnitt verhindert, dass die Spitze an den Dock-Kanten aneckt.",
    "load-tip-title": "💡 Profi-Tipp für leichtes Einfädeln",
    "load-trigger-step": "Klicke im Dashboard oder auf dem Touchscreen auf <strong>Laden</strong>. Der Drucker heizt auf, zieht das Material ein und spült eine Testwurst.",
    "lbl-load": "3. Laden starten:",
    "load-insert-step": "Schiebe das Filament in den Zuführschlauch, bis der Einlass-Sensor auslöst (Dashboard zeigt: <em>At feeder only</em>).",
    "lbl-insert": "2. Einführen:",
    "load-cut-step": "Schneide das Filamentende sauber im 45°-Winkel ab. Hänge die Spule auf den Spulenhalter.",
    "lbl-prep": "1. 45° Anschneiden:",
    "load-punchline": "In zwei Worten: 45° anschneiden → In den Schlauch schieben → Laden drücken",
    "load-title": "Filament laden",
    "unload-tip-text": "Ein leichter Widerstand beim Ziehen ist völlig normal (Getriebe-Zähne im Feeder). Gleichmäßig ziehen! Spule abnehmen: Haltearm am Gehäuse festhalten und Spule gerade nach vorne abziehen.",
    "unload-tip-title": "💡 Warum geht das Entladen etwas schwer?",
    "unload-screen-step": "Wähle <strong>Filament → Entladen</strong> → Werkzeugkopf auswählen. Warte auf die Temperatur-Meldung, dann sanft ziehen.",
    "lbl-on-screen": "Touchscreen:",
    "unload-dash-step": "Klicke beim entsprechenden Werkzeugkopf auf <strong>Entladen</strong>. Warte kurz auf das Aufheizen, dann das Filament am Schlauch sanft zurückziehen.",
    "unload-punchline": "In zwei Worten: Entladen drücken → Aufheizen abwarten → Mit leichtem Zug herausziehen",
    "unload-title": "Filament entladen",
    "slicer-title": "Getunte Prozessprofile (0.4 mm & 0.6 mm)",
    "slicer-subtitle": "Prüfe jedes Profil für dein Material und deine Firmware.",
    "th-profile": "Profilname",
    "th-nozzle": "Düse",
    "th-layer": "Schichthöhe",
    "th-features": "Besonderheiten & Highlights",
    "th-action": "Download",
    "p-quick-solid-desc": "High-efficiency daily profile. 3 walls, 4 top layers, 12% Gyroid. Saves ~11.6% print time and 10g material compared to 0.20 mm.",
    "p1-desc": "Alltags-Referenz. 3 Wände, Gyroid-Infill, Type-2 Prime Tower (12–15 mm³), bedingte Scarf-Naht, 12.000 mm/s² Travel.",
    "p2-desc": "Ausgangsprofil für Prototypen mit zwei Wänden und 10 % Support Cubic Infill.",
    "p3-desc": "Maximaler Durchsatz für 0,6 mm Düsen. Arachne Wall Generator, 1,2 mm Volldecke, 20 mm³ Turmvolumen.",
    "p4-desc": "Qualitäts-Profil für 0,6 mm Düsen. Feine Rundungen und steilere Überhänge.",
    "p5-desc": "Turbo-Prototypenprofil für maximale Materialförderung in Rekordzeit.",
    "support-title": "Feedback und Unterstützung",
    "extras-title": "Optionale Extras",
    "extra-orca": "OrcaSlicer-Profile",
    "extra-layer": "LayerLab Set &amp; Send",
    "extra-tone": "Druckende-Ton und Lichtimpuls",
    "extra-guide": "Filament-Bedienhilfe und FAQ",
    "support-note": "Melde einen Fehler, teile Feedback oder spendiere einen Kaffee, wenn dir das Projekt geholfen hat.",
    "feedback": "Problem melden",
    "nav-install": "Installation",
    "dash-cta": "Gesamtes Dashboard ansehen",
    "install-cta": "Installation",
    "three-views": "Drei Dashboard-Ansichten",
    "views-lead": "Dashboard für Drucksteuerung und geladene Werkzeuge, Minimal für den schnellen Status und Wartung für Diagnose, Selbsttest und Serviceintervalle.",
    "gallery-cta": "Zur Screenshot-Galerie →",
    "main-credit": "Baut auf <a href=\"https://github.com/Ironoxx/ha-snapmaker-u1-card\">Ironoxx’ Snapmaker-U1-Integration</a> auf. Zu den <a href=\"credits.html\">Credits</a>.",
    "quick-title": "Snapmaker-U1-Dashboard installieren",
    "quick-intro": "Starte hier, wenn Home Assistant deinen U1 im Netzwerk erreicht. Die Einrichtungszeit hängt von den bereits installierten Abhängigkeiten ab.",
    "quick-1": "Installiere <a href=\"https://my.home-assistant.io/redirect/hacs_repository/?owner=Ironoxx&amp;repository=ha-snapmaker-u1-card&amp;category=integration\">Ironoxx’ Integration in HACS</a>, starte HA neu und füge Snapmaker U1 Card unter Einstellungen → Geräte &amp; Dienste hinzu.",
    "quick-2": "Installiere die sechs Frontend-Abhängigkeiten in HACS: button-card, card-mod, slider-entity-row, vertical-stack-in-card, apexcharts-card, config-template-card.",
    "quick-3": "Kopiere die drei Dateien unten nach <code>/config/www/media/snapmaker-u1/showcase/</code>. Registriere <code>/local/media/snapmaker-u1/showcase/u1-fusion-showcase.u1.js</code> unter Einstellungen → Dashboards → Ressourcen als JavaScript-Modul.",
    "quick-4": "Füge die <a href=\"https://raw.githubusercontent.com/Reaper2507/snapmaker-u1-homeassistant/main/homeassistant/u1_dashboard_complete.yaml\">Dashboard-YAML</a> im Raw-Konfigurationseditor eines neuen Dashboards ein. Passe die Beispiel-Entitäten vor der Nutzung der Steuerung an.",
    "quick-repo": "Fehlerhilfe und Updates",
    "ha-install-cta": "Dashboard installieren",
    "ha-gallery-cta": "Screenshots",
    "ha-tools-cta": "Werkzeuge &amp; Material",
    "sim-disclosure": "Die Steuerung wird als Screenshot gezeigt. Die Auswahl darunter ändert nur Beispieldaten.",
    "fanfare-summary": "Optional: Druckende-Ton und Lichtimpuls",
    "fanfare-note": "Das Bauraumlicht wechselt beim Eintritt in die letzte gültige Schicht für 1,2 Sekunden in den Gegenstatus. Bestätigtes Druckende dient als Rückfall. Der Alexa-Ton bell_02 wird je nach Telemetrie bei etwa 99,9 % oder bei Druckende versucht.",
    "fanfare-setup": "Einrichtung und Entitäten",
    "fanfare-file": "YAML öffnen",
    "fanfare-show": "YAML anzeigen",
    "btn-copy-yaml": "YAML kopieren",
    "preset-install": "Profile installieren",
    "preset-setup": "Nutze OrcaSlicer 2.5 mit dem passenden Snapmaker-U1-Düsenprofil. Beende OrcaSlicer und sichere deine Benutzerprofile vor dem Kopieren. Starte neu und slice ein kleines Testmodell, bevor du es an den Drucker sendest.",
    "preset-doc": "Installationspfade und Fehlerhilfe",
    "preset-zip": "Repository-ZIP laden",
    "set-send-title": "Optional: Set &amp; Send von LayerLab",
    "set-send-desc": "Ein separat angebotenes Vor-Druck-Menü für Werkzeugkopfzuordnung und kompatible Druckeroptionen. Prüfe Plugin- und Firmware-Voraussetzungen beim Anbieter.",
    "set-send-source": "LayerLab-Anleitung und Download →",
    "filament-1-0": "Weiß",
    "filament-2-0": "Jade-Weiß",
    "filament-2-1": "Schwarz",
    "filament-3-0": "Dunkelgrau",
    "filament-3-1": "Schwarz",
    "filament-4-0": "Beige",
    "filament-5-0": "Apricot",
    "filament-5-1": "Betongrau",
    "filament-5-2": "Blue Brick",
    "filament-5-3": "Dunkelgrau",
    "filament-6-0": "Grau",
    "filament-7-0": "Transparent-Silber",
    "filament-8-0": "Schwarz",
    "filament-9-0": "Knochenweiss",
    "filament-9-1": "Little Blue",
    "filament-9-2": "Olivgrün",
    "filament-9-3": "Schwarz",
    "filament-9-4": "Sunny Orange",
    "filament-9-5": "Weiß",
    "all-filaments": "19 Filament-Ausgangsprofile",
    "filament-note": "Prüfe Temperatur und Durchfluss für deine Spule. Beachte bei PETG-CF die Vorgaben des Filamentherstellers zur gehärteten Düse.",
    "guide-faq": "Häufige Fragen",
    "guide-motion": "Warum sind die Bewegungsachsen während eines Drucks gesperrt?",
    "guide-motion-a": "Das Dashboard sperrt manuelle Bewegungen anhand des gemeldeten Druckerstatus. Beende den Druck über die reguläre Bedienung, bevor du Achsen manuell bewegst.",
    "credit-detail-0": "Stellt die ursprüngliche Snapmaker-U1-Integration und Frontend-Karte bereit. Die angepasste Karte enthält weiterhin den MIT-Lizenzhinweis.",
    "credit-detail-1": "Spoolman ermöglicht optional die Filament-Inventarverwaltung über die Integration.",
    "credit-detail-2": "Entwickelt und vertreibt das optionale Plugin Set &amp; Send separat.",
    "credit-detail-3": "Stellt card-mod und slider-entity-row bereit. Das Dashboard nutzt beide.",
    "credit-detail-4": "Pflegt den Slicer für die optionalen Profile.",
    "credit-detail-5": "Pflegt button-card und apexcharts-card. Das Dashboard nutzt beide.",
    "credit-detail-6": "Danke an die Projekte hinter der Drucker-Firmware und der Steuerungs-API.",
    "credit-deps": "Siehe <a href=\"https://github.com/Reaper2507/snapmaker-u1-homeassistant/blob/main/homeassistant/README.md\">vollständige Dashboard-Abhängigkeiten</a> und <a href=\"https://github.com/Reaper2507/snapmaker-u1-homeassistant/blob/main/LICENSE\">MIT-Lizenz</a>. Externe Projekte haben eigene Lizenzen.",
    "lbl-with-dash": "Mit Dashboard",
    "gallery-badge": "Screenshots",
    "cap-mobile": "Dashboard auf einem schmalen Smartphone-Display.",
    "page-index": "Snapmaker-U1-Dashboard für Home Assistant",
    "page-homeassistant": "Dashboard und Installation · Snapmaker U1",
    "page-install": "Snapmaker-U1-Dashboard installieren",
    "page-orcaslicer": "Optionale OrcaSlicer-Profile · Snapmaker U1",
    "page-guide": "Filament-Bedienhilfe und FAQ · Snapmaker U1",
    "page-credits": "Danksagung und Abhängigkeiten · Snapmaker U1",
    "sim-docked": "Geparkt",
    "sim-mounted": "Montiert",
    "sim-head": "Werkzeugkopf",
    "sim-nozzle": "Düse",
    "sim-bed": "Bett",
    "credit-primary": "Zentrale Integration",
    "credit-plugin": "Optionales Slicer-Plugin",
    "skip-main": "Zum Inhalt",
    "hacs-note": "Wenn du HACS noch nicht nutzt, folge der <a href=\"https://hacs.xyz/docs/use/download/download/\">offiziellen Anleitung für deine Installationsart</a>.",
    "sim-privacy": "Die Vorschau ändert ausschließlich Beispieldaten auf dieser Seite.",
    "profile-names": "Einstellungen und Ausgangsprofile",
    "role-ironoxx": "Entwickler von ha-snapmaker-u1-card",
    "role-donkie": "Maintainer von Spoolman",
    "role-layerlab": "Entwickler von Set &amp; Send",
    "role-thomas": "Frontend-Karten für Home Assistant",
    "role-orca": "OrcaSlicer-Maintainer",
    "role-rom": "Frontend-Karten für Home Assistant",
    "role-firmware": "Firmware und Hardware",
    "link-repo": "GitHub-Repository →",
    "link-ironoxx": "☕ Ironoxx auf Ko-fi unterstützen",
    "link-donkie": "❤️ Donkie auf GitHub unterstützen",
    "link-layer": "Zum Projekt bei LayerLab →",
    "link-profile": "GitHub-Profil →",
    "link-orca": "SoftFever auf GitHub unterstützen",
    "link-button": "button-card auf GitHub →",
    "caption-desktop-label": "Desktop-Dashboard",
    "caption-size": "Desktop-Screenshot",
    "caption-desktop": "Dashboard mit vier Werkzeugköpfen, Kamera, Temperaturen und Drucksteuerung.",
    "caption-maint-label": "Wartung und Diagnose",
    "caption-maint-mesh": "Bett-Mesh und Klipper-Konsole",
    "caption-maint": "Verfolge Wartungsintervalle, starte den Selbsttest der Integration und prüfe Bett-Mesh, Temperaturverlauf und Firmware-Status in Home Assistant.",
    "vendor-unknown": "High Speed Matt PETG (Hersteller offen)",
    "p7-desc": "Kompaktes Mehrfarbprofil.",
    "coffee-ironoxx": "Kaffee für Ironoxx",
    "coffee-maintainer": "Kaffee für Reaper2507",
    "thomas-card": "card-mod auf GitHub →",
    "gallery-dash-detail": "Mehr vom Dashboard: Werkzeuge, Dateien und Schichtansicht",
    "gallery-maint-detail": "Wartung und Diagnose im Detail ansehen",
    "gallery-minimal-note": "Minimalansicht während eines Drucks mit Endzeit, Restzeit und Schichtfortschritt.",
    "gallery-phone-detail": "Handy-Ansicht ansehen",
    "ha-install-heading": "Dashboard installieren",
    "ha-install-short": "Auf der Installationsseite stehen die erforderlichen HACS-Karten und die konkreten Download-Dateien.",
    "manual-install": "Installationsschritte",
    "ai-install-link": "Mit KI installieren",
    "ai-install-heading": "Mit KI installieren",
    "ai-install-body": "Kopiere den Prompt in einen Assistenten mit Home-Assistant-Admin- und Dateizugriff. Er installiert das Dashboard und prüft den laufenden Stand.",
    "ai-install-copy": "Installationsprompt kopieren",
    "ai-install-show": "Installationsprompt anzeigen",
    "ai-copy-success": "Prompt kopiert.",
    "ai-copy-error": "Klappe den Prompt unten auf und kopiere ihn manuell.",
    "controls-preview-title": "Druckersteuerung",
    "controls-preview-open": "Drucker antippen und Steuerung ansehen",
    "controls-preview-close": "Schließen",
    "controls-preview-caption": "Screenshot aus Home Assistant. Die Bedienelemente in dieser Vorschau dienen zur Ansicht.",
    "card-mode-hint": "Öffne in Home Assistant das Zahnrad der Karte. Unter „Image“ kannst du Studio oder Cutaway wählen. Mit „Live spool colors“ zeigt die Grafik die gemeldeten Filamentfarben der geladenen Spulen je Slot."
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  try { localStorage.setItem('u1-hub-language', lang); } catch { /* Storage may be disabled. */ }
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  const langText = document.getElementById('current-lang-text');
  if (langText) {
    langText.textContent = lang === 'en' ? 'DE' : 'EN';
    document.getElementById('lang-toggle').setAttribute('aria-label', lang === 'en' ? 'Auf Deutsch wechseln' : 'Switch to English');
  }
}

function selectPreviewButton(buttons, selected) {
  buttons.forEach(button => {
    const active = button === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let language = 'en';
  try {
    if (localStorage.getItem('u1-hub-language') === 'de') language = 'de';
  } catch { /* Storage may be disabled. */ }
  setLanguage(language);

  // Lang toggle button
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'de' : 'en');
      document.querySelector('.sim-chip.active')?.click();
    });
  }

  const btnCopyAi = document.getElementById("btn-copy-ai-prompt");
  const aiPromptText = document.getElementById("ai-install-prompt-text");
  const aiCopyStatus = document.getElementById("ai-copy-status");
  if (btnCopyAi && aiPromptText && aiCopyStatus) {
    btnCopyAi.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(aiPromptText.textContent);
        aiCopyStatus.textContent = i18n[currentLang]["ai-copy-success"];
      } catch {
        aiCopyStatus.textContent = i18n[currentLang]["ai-copy-error"];
      }
    });
  }

  const controlsPreview = document.getElementById("controls-preview-dialog");
  document.querySelectorAll(".controls-preview-trigger").forEach(trigger => {
    trigger.addEventListener("click", event => {
      if (typeof controlsPreview?.showModal !== "function") return;
      event.preventDefault();
      controlsPreview.showModal();
    });
  });

  // Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectPreviewButton(tabBtns, btn);
      tabContents.forEach(c => c.classList.remove('active'));
      const targetId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Photo Showcase Toggle (Studio vs Close-Up)
  const photoBtns = document.querySelectorAll('.photo-toggle-btn');
  const photoImg = document.getElementById('photo-display-img');
  const photoCaption = document.getElementById('photo-display-caption');

  const photoData = {
    studio: {
      src: 'assets/studio.png',
      captionKey: 'cap-photo-studio'
    },
    closeup: {
      src: 'assets/close-up.png',
      captionKey: 'cap-photo-closeup'
    }
  };

  photoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectPreviewButton(photoBtns, btn);
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
      src: 'assets/cutaway-card.png',
      capKey: 'cap-cutaway-closeup'
    }
  };

  cutawayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectPreviewButton(cutawayBtns, btn);
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
      src: 'assets/cutaway-card.png',
      capKey: 'cap-telemetry-cutaway'
    },
    studio: {
      src: 'assets/studio-card.png',
      capKey: 'cap-telemetry-studio'
    }
  };

  
  // Interactive Toolhead Simulation Chips (Pure Client-Side, No HA Backend Needed)
  const simChips = document.querySelectorAll('.sim-chip');
  const simActiveTool = document.getElementById('sim-active-tool');
  const simMaterial = document.getElementById('sim-material');
  const simCoords = document.getElementById('sim-coords');

  const toolData = {
    '0': { mat: 'SUNLU PLA+ 2.0 Black · Nozzle 205°C · Bed 60°C', coords: 'X 12.0 · Y 24.5 · Z 0.2' },
    '1': { mat: 'Bambu PLA Basic White · Nozzle 220°C · Bed 60°C', coords: 'X 64.2 · Y 112.0 · Z 18.4' },
    '2': { mat: 'eSUN PETG Fire Red · Nozzle 240°C · Bed 75°C', coords: 'X 152.0 · Y 185.3 · Z 42.0' },
    '3': { mat: 'eSUN PETG Matte Grey · Nozzle 210°C · Bed 70°C', coords: 'X 227.6 · Y 300.5 · Z 9.9' }
  };

  simChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const labels = i18n[currentLang];
      const toolId = chip.getAttribute('data-tool');
      simChips.forEach(c => {
        const id = c.getAttribute('data-tool');
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
        c.innerHTML = `<strong>T${id}</strong> · ${labels["sim-docked"]} (${23 + parseInt(id)}°C)`;
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');
      chip.innerHTML = `<strong>T${toolId}</strong> · ${labels["sim-mounted"]} (${toolId === '0' ? '205' : toolId === '1' ? '220' : toolId === '2' ? '240' : '210'}°C)`;

      if (toolData[toolId] && simActiveTool && simMaterial && simCoords) {
        simActiveTool.textContent = labels["sim-head"] + " " + toolId + " (" + labels["sim-mounted"] + ")";
        simMaterial.textContent = toolData[toolId].mat.replace("Nozzle", labels["sim-nozzle"]).replace("Bed", labels["sim-bed"]);
        simCoords.textContent = toolData[toolId].coords;
      }
    });
  });

  document.querySelector('.sim-chip.active')?.click();

  telemBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectPreviewButton(telemBtns, btn);
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
      navigator.clipboard.writeText(yamlCodeEl.textContent).then(() => {
        const originalText = btnCopyYaml.innerHTML;
        btnCopyYaml.textContent = currentLang === 'de' ? 'YAML kopiert' : 'YAML copied';
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
