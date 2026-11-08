const i18n = {
  en: {
    "nav-home": "Overview",
    "nav-ha": "Home Assistant",
    "nav-orcaslicer": "OrcaSlicer",
    "nav-guide": "Guide & FAQ",
    "nav-credits": "Credits",
    "hero-badge": "⚡ Open Source Community Hub",
    "hero-title-hub": "Snapmaker U1<br><span class=\"gradient-text\">Community Toolkit</span>",
    "hero-lead-hub": "The modular toolkit for your Snapmaker U1 4-toolhead printer. Choose your area: Complete Home Assistant dashboard, tuned OrcaSlicer profiles, or the quick operator guide.",
    "btn-hub-ha": "🏠 Home Assistant Dashboard",
    "btn-hub-slicer": "🔪 OrcaSlicer Profiles",
    "btn-hub-guide": "🧵 Guide & FAQ",
    "hub-modules-title": "Modular Toolkits",
    "hub-modules-subtitle": "Cleanly separated without clutter: Jump directly to what you need right now.",
    "mod-ha-title": "Home Assistant Dashboard",
    "mod-ha-desc": "Full Lovelace integration: Live tracking of all 4 toolheads (T0–T3), XYZ coordinates, Studio & Cutaway graphics, camera, Klipper control, and Alexa microwave fanfare.",
    "btn-open-ha": "View Dashboard & Installation →",
    "mod-orca-title": "OrcaSlicer Profiles & Presets",
    "mod-orca-desc": "5 tuned process profiles for 0.4 and 0.6 mm nozzles with Scarf Joint Seams, slim prime tower (12–15 mm³), 19 verified filament presets, and the Set & Send pre-print plugin.",
    "btn-open-orca": "Download Profiles & Presets →",
    "mod-guide-title": "Operator Guide & FAQ",
    "mod-guide-desc": "Filament swapping in two words: Loading and unloading via dashboard or touchscreen, mechanical resistance explained, and troubleshooting.",
    "btn-open-guide": "Open Operator Guide & FAQ →",
    "ha-banner-badge": "🏠 100% Local Telemetry & Control",
    "ha-banner-title": "Home Assistant Dashboard & Control",
    "ha-banner-lead": "Interactive Lovelace dashboard crafted specifically for the Snapmaker U1 toolchanger. Live scaled XYZ axes tracking, Studio & Wireframe cutaway views, and smart alerts.",
    "slicer-banner-badge": "🔪 Tuned for U1 Toolchanger",
    "slicer-banner-title": "OrcaSlicer Profiles & Filament Presets",
    "slicer-banner-lead": "Precision profiles for OrcaSlicer v2.5.0 RC+: Seamless scarf seams, minimal prime tower waste (12–15 mm³), and 12,000 mm/s² travel speed.",
    "slicer-install-title": "OrcaSlicer Setup (In 2 Steps)",
    "slicer-install-subtitle": "Standalone and simple: Copy files directly into your local OrcaSlicer user folder. No Home Assistant required!",
    "guide-banner-badge": "🧵 Quick Guide & Problem Solver",
    "guide-banner-title": "Snapmaker U1 Operator Guide & FAQ",
    "guide-banner-lead": "Filament swapping explained in two words: Fast instructions for dashboard and printer touchscreen, resistance explained, and essential FAQs.",
    "jump-slicer-install": "📦 Quick Install",
    "jump-set-and-send": "🧩 Set & Send Plugin",
    "jump-profiles": "⚡ 5 Process Profiles (0.4 & 0.6 mm)",
    "jump-filaments": "🧵 19 Filament Presets",
    "plugin-badge": "🧩 Must-Have Plugin for Vanilla OrcaSlicer",
    "plugin-title": "\"Set & Send\" Plugin (by LayerLab)",
    "plugin-subtitle": "Unlocks the native pre-print popup dialog, filament-to-toolhead mapping, 11×11 whole-bed mesh, and top-cover purifier fan controls directly inside vanilla OrcaSlicer.",
    "plugin-img-caption": "The Set & Send dialog before sending a print: Assign toolheads, trigger 11×11 mesh, adjust top-cover exhaust, and verify print settings.",
    "plugin-why-title": "🎯 Why This Plugin Is an Absolute Game-Changer",
    "plugin-why-desc": "In the proprietary Snapmaker Orca fork, this popup dialog is hardcoded into the app. For anyone running official, up-to-date <strong>vanilla OrcaSlicer (v2.5.0 RC+)</strong>, the toolhead mapping and custom leveling prompts were completely missing. LayerLab's lightweight Python plugin bridges this gap seamlessly!",
    "feat-mapping-title": "Toolhead-to-Filament Mapping:",
    "feat-mapping-desc": "Visually reassign sliced filaments to physical toolheads (e.g. Filament 3 → Toolhead 3) with live color and material cross-checks.",
    "feat-mesh-title": "Whole-Bed Mesh (11×11):",
    "feat-mesh-desc": "Probes the entire build surface in an ultra-dense 11×11 grid before critical prints — delivering millimeter-perfect first layers.",
    "feat-cover-title": "Top Cover Purifier Modes:",
    "feat-cover-desc": "Intelligently controls the active carbon exhaust fan (Auto, Strong cooling, Weak cooling, Keep warm, Off) based on filament glass transition temperatures.",
    "feat-safety-title": "Chamber & Draft Thermal Protection:",
    "feat-safety-desc": "Automatically switches off part cooling fans during probing to prevent bed thermal drift and injects chamber temperature wait delays (WAIT_CHAMBER_TEMP TIMEOUT=180).",
    "plugin-install-title": "📦 Quick Plugin Setup:",
    "plugin-install-hint": "Copy the single Python script into your local OrcaSlicer plugins folder and ensure plugins are enabled in OrcaSlicer settings.",
    "btn-layerlab-guide": "Official LayerLab Guide →",
    "btn-layerlab-tip": "LayerLab Tip Jar & Store",
    "credit-layerlab": "Creator of the essential 'Set & Send' pre-print dialog, 11×11 whole-bed mesh, and top-cover purifier fan add-on for the Snapmaker U1 in OrcaSlicer.",
    "ai-step-title": "AI Agent & MCP 1-Click Prompt (Antigravity · Codex · Claude · Cursor)",
    "ai-step-desc": "Running an AI coding assistant connected to your Home Assistant MCP server? Copy & paste this prompt to have your agent perform the entire installation automatically:",
    "btn-copy-ai-prompt": "Copy Prompt for AI Agent",
    "credits-banner-badge": "🏆 Community Hall of Fame",
    "credits-banner-title": "Standing on the Shoulders of Giants",
    "credits-banner-lead": "This project exists solely because of the generous contributions, open-source code, and tireless innovation of the 3D printing and Home Assistant communities. Give credit where credit is due — explore their repositories and consider supporting them!",
    "gallery-title": "Interactive Showcase",
    "gallery-subtitle": "Explore the complete dashboard, alternative photos, and diagnostics with live scrolling.",
    "tab-desktop": "Full Dashboard (Scrollable)",
    "tab-photos": "Studio & Close-up Photos",
    "tab-cutaway": "Cutaway & Axes",
    "tab-maintenance": "Maintenance & Bed Mesh",
    "tab-mobile": "Mobile View (Scrollable)",
    "nav-telemetry": "Tools & Material",
    "nav-automations": "Automations",
    "btn-cut-full": "🖥️ Full Cutaway Dashboard",
    "btn-cut-closeup": "🔍 Tools & Material Close-Up",
    "cap-cutaway": "Authentic Cutaway View: Technical wireframe showing live scaled XYZ axis positions, mounted toolhead (T3), and filament spools.",
    "cap-cutaway-closeup": "Tools & Material Close-Up: Live hotend nozzle temperatures, bed temperature, mounted state, and spool feed status.",
    "telemetry-badge": "⚡ Live Telemetry & Direct Controls",
    "telemetry-title": "Tools & Material: What the Hero Card Can Do",
    "telemetry-subtitle": "Full feature parity in both modes: Studio Mode and Wireframe Cutaway Mode both support live scaled XYZ axes, live temperatures, adaptive spool colors, click-to-control, and filament loading/unloading.",
    "btn-mode-cutaway": "📐 Wireframe Cutaway",
    "btn-mode-studio": "🌟 Studio Glanz",
    "cap-telemetry-cutaway": "Cutaway mode: Wireframe schematic with live scaled XYZ axes coordinates, nozzle & bed temperatures, and active toolhead detection.",
    "cap-telemetry-studio": "Studio mode: Photorealistic 3D render with glowing hotend temperature overlays, spool rings, and active mounting.",
    "feat-axes-title": "Real-Time 3D Axes Tracking (X, Y, Z)",
    "feat-axes-desc": "Live scaled coordinates for print bed and carriage (e.g. X 227.6, Y 300.5, Z 9.9). See at a millimeter glance where head and bed currently reside.",
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
    "header-coffee-short": "Coffee",
    "header-coffee-full": "Buy Me a Coffee (Ko-fi)",
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
    "unload-dash-step": "Click <strong>Unload</strong> on the respective toolhead. Wait for temperature ramp-up, then gently pull filament from the tube.",
    "lbl-in-dash": "Dashboard:",
    "unload-punchline": "In a nutshell: Tap Unload → Wait for preheat → Pull with gentle continuous tug",
    "unload-title": "Unloading Filament",
    "slicer-title": "Tuned Process Profiles (0.4 & 0.6 mm)",
    "slicer-subtitle": "Calibrated for dimensional accuracy, seamless toolchanges, and rapid travel speeds.",
    "th-profile": "Profile Name",
    "th-nozzle": "Nozzle",
    "th-layer": "Layer Height",
    "th-features": "Key Features & Highlights",
    "th-action": "Download",
    "p1-desc": "Daily reference. 3 walls, gyroid infill, slim prime tower (12–15 mm³), conditional scarf seam, 12,000 mm/s² travel.",
    "p2-desc": "Fast functional prototypes. 2 walls, 10% support cubic infill (50% material savings), shortest travel moves.",
    "p3-desc": "High strength & throughput for 0.6 mm nozzles. Arachne wall generator, 1.2 mm solid ceiling, 20 mm³ tower volume.",
    "p4-desc": "Quality profile for 0.6 mm nozzles. Clean overhangs and smooth contours.",
    "p5-desc": "Turbo prototype profile for maximum volumetric flow in record time.",
    "filaments-title": "19 Verified Filament Presets",
    "filaments-subtitle": "Precise flow ratios, temperatures, and build plate adhesion for leading brands.",
    "install-badge": "🚀 Fast & Reliable Setup",
    "step0-title": "Prerequisite: Install HACS (Community Store)",
    "step0-pill": "For Beginners Only",
    "step0-desc": "HACS is the package manager for Home Assistant, enabling one-click installs for custom cards and integrations. If you don't have HACS installed yet:",
    "step0-summary": "📖 HACS Quick Guide in 4 Steps (Click to expand)",
    "step0-s1-title": "Open Terminal & SSH:",
    "step0-s1-desc": "Open the Terminal add-on in Home Assistant or connect via SSH to your host.",
    "step0-s2-title": "Run the Download Script:",
    "step0-s2-desc": "Execute the official HACS installer command:",
    "step0-s3-title": "Restart Home Assistant:",
    "step0-s3-desc": "Navigate to Settings → System → Restart.",
    "step0-s4-title": "Add the HACS Integration:",
    "step0-s4-desc": "Go to Settings → Devices & Services → Add Integration, search for HACS, and complete the one-time GitHub device activation code.",
    "btn-hacs-doc": "Official HACS Documentation (hacs.xyz) →",
    "step1-cards-summary": "🎨 How to Install Frontend Cards in HACS (Click to expand)",
    "step1-cards-guide": "In the Home Assistant sidebar, click HACS → Frontend, search for the following 7 community cards, and click Download for each:",
    "step1-cards-hint": "💡 Pro Tip: When Home Assistant asks 'Reload browser to load new resource?', click Reload.",
    "step2-reg-summary": "🔍 Where and how is the resource registered? (Step-by-step guide)",
    "step2-path-title": "💡 Essential Home Assistant Path Knowledge:",
    "step2-path-desc": "The physical folder /config/www/ on disk is served by Home Assistant's internal web server as /local/ in the browser. Therefore, /config/www/snapmaker-u1/showcase/u1-fusion-showcase.u1.js is loaded in the dashboard as /local/snapmaker-u1/showcase/u1-fusion-showcase.u1.js!",
    "step2-steps-title": "Step-by-step in the Home Assistant Settings menu:",
    "step2-s1": "In Home Assistant, click Settings in the bottom left.",
    "step2-s2": "Select Dashboards.",
    "step2-s3": "Click the three dots ⋮ in the top right and select Resources.",
    "step2-s4": "Click the blue + Add Resource button at the bottom right.",
    "step2-s5": "Enter the following exact values:",
    "step2-s6": "Click Create. Done!",
    "btn-ha-res-doc": "Official Home Assistant Documentation on Resources →",
    "install-title": "Home Assistant Setup Guide",
    "install-subtitle": "Launch in your Home Assistant instance with official 1-click badges.",
    "step1-title": "Snapmaker U1 Integration & Cards via HACS",
    "step1-desc": "Use this direct 1-click badge to open the repository in your local HACS:",
    "step2-title": "Showcase Assets & Lovelace Resource",
    "step2-desc": "Place the files from homeassistant/www/ into your Home Assistant /config/www/snapmaker-u1/showcase/ folder:",
    "step2-sub": "Click the button above and register the resource URL: /local/snapmaker-u1/showcase/u1-fusion-showcase.u1.js (JavaScript Module).",
    "step3-title": "Import Dashboard YAML",
    "step3-desc": "Open Dashboards in Home Assistant, create a new dashboard and paste the configuration template:",
    "details-yaml": "Click here for Dashboard YAML download & options",
    "details-yaml-p": "You can import the entire complete dashboard or load modular views from the views/ folder:",
    "btn-view-raw": "View Complete Dashboard YAML",
    "coffee-title": "Support This Project",
    "coffee-lead": "This community toolkit is 100% free and open-source. If the dashboard or OrcaSlicer profiles save you time, filament, or failed prints, you are warmly invited to buy Torsten a coffee on Ko-fi!",
    "coffee-btn": "Buy Me a Coffee on Ko-fi",
    "coffee-note": "Via Ko-fi, your email and personal details remain completely private and confidential. Contributions are 100% voluntary!",
    "credits-title": "Credits & Acknowledgements",
    "credits-subtitle": "Built upon outstanding work from the Home Assistant and 3D printing community",
    "credit-ironoxx": "Original integration foundation, toolhead layout, and camera streaming (MIT License).",
    "credit-spoolman": "Open-source filament and spool inventory management for Klipper and Home Assistant.",
    "credit-cards": "Special thanks to RomRider (button-card), thomasloven (card-mod, slider-entity-row), kalkih (mini-graph-card), and ofekashern.",
    "credit-orca": "For open-source slicing excellence and native toolchanger support."
  },
  de: {
    "nav-home": "Übersicht",
    "nav-ha": "Home Assistant",
    "nav-orcaslicer": "OrcaSlicer",
    "nav-guide": "Guide & FAQ",
    "nav-credits": "Credits",
    "hero-badge": "⚡ Open Source Community Hub",
    "hero-title-hub": "Snapmaker U1<br><span class=\"gradient-text\">Community Toolkit</span>",
    "hero-lead-hub": "Das modulare Toolkit für deinen Snapmaker U1 4-Kopf-Toolchanger. Wähle den passenden Bereich: Vollwertiges Home Assistant Dashboard, präzise getunte OrcaSlicer-Profile oder die kompakte Filament-Bedienhilfe.",
    "btn-hub-ha": "🏠 Home Assistant Dashboard",
    "btn-hub-slicer": "🔪 OrcaSlicer Profile",
    "btn-hub-guide": "🧵 Guide & FAQ",
    "hub-modules-title": "Modulare Themenwelten",
    "hub-modules-subtitle": "Klar getrennt, ohne Überfrachtung: Direkt zum Thema, das du gerade brauchst.",
    "mod-ha-title": "Home Assistant Dashboard",
    "mod-ha-desc": "Vollwertige Lovelace-Integration: Live-Überwachung aller 4 Köpfe (T0–T3), XYZ-Koordinaten, Studio- & Wireframe-Cutaway, Kamera, Klipper-Steuerung und Alexa Fertigdruck-Fanfare.",
    "btn-open-ha": "Dashboard ansehen & installieren →",
    "mod-orca-title": "OrcaSlicer Profile & Presets",
    "mod-orca-desc": "5 getunte Prozessprofile für 0.4 und 0.6 mm Düsen mit Scarf Joint Seams, schlankem Prime-Tower (12–15 mm³), 19 verifizierten Filament-Presets und dem Set & Send Vor-Druck-Plugin.",
    "btn-open-orca": "Profile & Presets herunterladen →",
    "mod-guide-title": "Operator Guide & FAQ",
    "mod-guide-desc": "Filamentwechsel in zwei Worten: Laden und Entladen über Dashboard oder Touchscreen, mechanischer Widerstand erklärt und Fehlerbehebung.",
    "btn-open-guide": "Operator Guide & FAQ öffnen →",
    "ha-banner-badge": "🏠 100% Lokale Telemetrie & Steuerung",
    "ha-banner-title": "Home Assistant Dashboard & Steuerung",
    "ha-banner-lead": "Interaktives Lovelace-Dashboard speziell für den Snapmaker U1 4-Kopf-Toolchanger. Live-Achsenüberwachung (X/Y/Z), umschaltbare Studio- und Cutaway-Optik, Klipper-Steuerung und smarte Benachrichtigungen.",
    "slicer-banner-badge": "🔪 Kalibriert für U1 4-Toolchanger",
    "slicer-banner-title": "OrcaSlicer Profile & Filament-Presets",
    "slicer-banner-lead": "Auf den U1 Toolchanger abgestimmte Druck- und Filamentprofile für OrcaSlicer (ab v2.5.0 RC). Nahtlose Scarf Joint Seams, minimaler Turmabfall (12–15 mm³) und 12.000 mm/s² Travel-Speed.",
    "slicer-install-title": "OrcaSlicer Installation (In 2 Schritten)",
    "slicer-install-subtitle": "Eigenständig und einfach: Kopiere die Dateien direkt in deinen lokalen OrcaSlicer-Benutzerordner. Kein Home Assistant erforderlich!",
    "guide-banner-badge": "🧵 Schnellanleitung & Problemlöser",
    "guide-banner-title": "Snapmaker U1 Operator Guide & FAQ",
    "guide-banner-lead": "Filamentwechsel in zwei Worten: Schnelle Handgriffe für Dashboard und Drucker-Touchscreen, mechanischer Widerstand erklärt und die wichtigsten FAQs.",
    "jump-slicer-install": "📦 Schnell-Installation",
    "jump-set-and-send": "🧩 Set & Send Plugin",
    "jump-profiles": "⚡ 5 Prozessprofile (0.4 & 0.6 mm)",
    "jump-filaments": "🧵 19 Filament-Presets",
    "plugin-badge": "🧩 Must-Have Plugin für Vanilla OrcaSlicer",
    "plugin-title": "\"Set & Send\" Plugin (von LayerLab)",
    "plugin-subtitle": "Schaltet den nativen Pre-Print Dialog, Spulen-Toolhead-Zuweisung, 11×11 Vollbett-Nivellierung und Bauraum-Abluftsteuerung direkt in OrcaSlicer frei.",
    "plugin-img-caption": "Der Set & Send Dialog vor dem Druckstart: Toolheads zuweisen, 11×11 Mesh aktivieren, Bauraumlüfter steuern und Druckoptionen prüfen.",
    "plugin-why-title": "🎯 Warum dieses Plugin ein Game-Changer ist",
    "plugin-why-desc": "Im offiziellen Snapmaker-Orca-Fork ist dieser Dialog fest verdrahtet. Wer aber das offizielle, stets aktuelle <strong>Vanilla OrcaSlicer (ab v2.5.0 RC)</strong> nutzt, vermisste bisher die Werkzeugkopf-Zuweisung und das gezielte Anstoßen der Kalibrierungen. Das geniale Python-Plugin von <strong>LayerLab</strong> schließt diese Lücke perfekt!",
    "feat-mapping-title": "Toolhead-to-Filament Mapping:",
    "feat-mapping-desc": "Weise geslicte Filamente visuell den geladenen Köpfen zu (z. B. Filament 3 → Toolhead 3) inklusive Farb- und Materialabgleich.",
    "feat-mesh-title": "Whole-bed mesh (11×11):",
    "feat-mesh-desc": "Tastet vor anspruchsvollen Drucken das komplette Bett in einem hochauflösenden 11×11 Raster ab – für maximale Haftung auf der gesamten Fläche.",
    "feat-cover-title": "Top Cover Purifier Steuerung:",
    "feat-cover-desc": "Regelt den oberen Aktivkohlefilter (Auto, Starke Kühlung, Schwache Kühlung, Warmhalten, Aus) passend zur Glastemperatur des Materials.",
    "feat-safety-title": "Lüfter- & Bauraum-Schutz:",
    "feat-safety-desc": "Schaltet den Bauteillüfter während Homing/Probing automatisch ab, um Bett-Temperaturdrifts zu verhindern, und fügt Bauraum-Wartezeiten ein.",
    "plugin-install-title": "📦 Schnelle Plugin-Installation:",
    "plugin-install-hint": "Lege die Datei set_and_send.py in deinem lokalen OrcaSlicer-Plugin-Ordner ab und aktiviere Plugins in OrcaSlicer.",
    "btn-layerlab-guide": "Offizielle LayerLab Anleitung →",
    "btn-layerlab-tip": "LayerLab Tip Jar & Store",
    "credit-layerlab": "Entwickler des unverzichtbaren 'Set & Send' Pre-Print Popups, 11×11 Vollbett-Nivellierung und Bauraum-Filtersteuerung für den U1 in OrcaSlicer.",
    "ai-step-title": "KI-Installation via Antigravity, Codex oder MCP",
    "ai-step-desc": "Nutzt du einen KI-Agenten (Google Antigravity, OpenAI Codex, Claude Code, Cursor) mit angebundenem Home Assistant MCP Server? Kopiere einfach diesen Prompt, um die gesamte Installation vollautomatisch ausführen zu lassen:",
    "btn-copy-ai-prompt": "Prompt für KI kopieren",
    "credits-banner-badge": "🏆 Community Hall of Fame",
    "credits-banner-title": "Auf den Schultern von Riesen",
    "credits-banner-lead": "Dieses Projekt existiert nur durch die großartige Vorarbeit, Open-Source-Code und unermüdliche Innovation der 3D-Druck- und Home-Assistant-Community. Credits, wo Credits hingehören — schau dir ihre Repositories an und unterstütze sie!",
    "gallery-title": "Interaktiver Showcase",
    "gallery-subtitle": "Erkunde das komplette Dashboard, alternative Fotos und Diagnosen mit flüssigem Scrollen.",
    "tab-desktop": "Full Dashboard (Scrollable)",
    "tab-photos": "Studio & Close-up Photos",
    "tab-cutaway": "Cutaway & Axes",
    "tab-maintenance": "Maintenance & Bed Mesh",
    "tab-mobile": "Mobile View (Scrollable)",
    "nav-telemetry": "Tools & Material",
    "nav-automations": "Automatisierung",
    "btn-cut-full": "🖥️ Dashboard Gesamtansicht (Cutaway)",
    "btn-cut-closeup": "🔍 Tools & Material Detailansicht",
    "cap-cutaway": "Authentische Cutaway-Ansicht: Wireframe-Drucker mit live skalierten XYZ-Achsenkoordinaten, montiertem Werkzeugkopf (T3) und Spulenfarben.",
    "cap-cutaway-closeup": "Tools & Material Detailansicht: Live-Nozzletemperaturen aller Köpfe, Heizbett-Temperatur, Montage-Status und Förderstatus.",
    "telemetry-badge": "⚡ Live-Telemetrie & Direktsteuerung",
    "telemetry-title": "Tools & Material: Was die Hero-Card alles kann",
    "telemetry-subtitle": "Volle Feature-Parität in beiden Modi: Sowohl im Studiomodus als auch im Wireframemodus siehst du live skalierte XYZ-Achsen, Hitze, adaptive Spulenfarben, Klick-Direktsteuerung und Spulen-Laden/Entladen.",
    "btn-mode-cutaway": "📐 Wireframe Cutaway",
    "btn-mode-studio": "🌟 Studio Glanz",
    "cap-telemetry-cutaway": "Wireframe-Modus: Technische Schnittzeichnung mit live skalierten XYZ-Achsenkoordinaten, Nozzle- & Betttemperaturen und aktiver Kopferkennung.",
    "cap-telemetry-studio": "Studio-Modus: Fotorealistisches 3D-Rendering mit leuchtenden Temperatur-Overlays, Spulenringen und Kopf-Docking.",
    "feat-axes-title": "Echtzeit-Achsenüberwachung (X, Y, Z)",
    "feat-axes-desc": "Live-Koordinaten für Bett und Druckkopf (z. B. X 227.6, Y 300.5, Z 9.9). Du siehst auf den Millimeter genau, wo sich Werkzeug und Bauplatte aktuell befinden.",
    "feat-temps-title": "Live-Temperaturen direkt an Nozzle & Bett",
    "feat-temps-desc": "Sowohl Ist- als auch Solltemperatur werden für alle 4 Köpfe (T0–T3) und das Heizbett direkt am Objekt eingeblendet (z. B. T3 46° / 0° Selected, Bed 25° / 0°).",
    "feat-docking-title": "Toolhead-Status & Docking-Rückmeldung",
    "feat-docking-desc": "Kein Rätselraten mehr: Das Dashboard zeigt live an, welcher Kopf auf dem Schlitten montiert ist (T3 - Mounted) und welche Köpfe sicher in den Halterungen geparkt sind (Docked).",
    "feat-spools-title": "Dynamische Spulenfarben",
    "feat-spools-desc": "Die 4 Spulenhalter (T0–T3) rings um das Gehäuse leuchten in der exakten Farbe des geladenen Filaments und zeigen Materialtyp sowie verbleibende Restmenge an.",
    "feat-tap-title": "Interaktive Touch- & Klick-Direktsteuerung",
    "feat-tap-desc": "Tippe oder klicke einfach direkt auf die 3D-Druckergrafik: Sofort öffnet sich das interaktive Schnellmenü für Achsen-Jogging (Bett rauf/runter, Kopf zentrieren), Vorheizen und Filamentwechsel!",
    "auto-title": "Fertigdruck-Fanfare & Licht-Benachrichtigung",
    "auto-subtitle": "Druck nie mehr vergessen: Alexa Mikrowellen-'Bing' bei 99,9 % und 2× Bauraumlicht-Blinken bei Druckende.",
    "fanfare-h3": "Funktionsweise der Automatisierung",
    "fanfare-step1": "Erreicht der Druck 99,9 %, spielt Alexa einen dezenten Mikrowellen-Ton (bell_02) ab. Du bist vorbereitet, bevor das Abkühlen beginnt.",
    "fanfare-step2": "Die Automatisierung wartet, bis der Druckstatus offiziell von printing auf complete wechselt.",
    "fanfare-step3": "Das Bauraumlicht blinkt 2× kurz (An → 400ms → Aus → 400ms → An) – ein unübersehbares visuelles Signal im Raum!",
    "prereq-title": "📋 Voraussetzungen",
    "prereq-amp": "Über HACS installiert und mit deinem Amazon-Konto verbunden (für media_content_id: bell_02).",
    "prereq-generic": "Vollständig de-personalisiert: Keine fest hinterlegten IPs oder Namen. Nur deinen eigenen Alexa Echo Entity-Namen einsetzen.",
    "btn-copy-code": "Code kopieren",
    "btn-download-yaml": "fertigdruck_fanfare.yaml herunterladen",
    "cap-photo-closeup": "Realistischer Close-Up: Detaillierte Frontperspektive mit gut sichtbarem Snapmaker U1 Logo und Werkzeugschlitten.",
    "cap-photo-studio": "Studio-Glanz: Elegantes Rendering des Snapmaker U1 mit 4 Toolheads, LED-Beleuchtung und dezentem Kicker.",
    "btn-photo-closeup": "🔍 Realistischer Close-Up mit Logo",
    "btn-photo-studio": "🌟 Studio Glanz (Default)",
    "maintenance-hint": "Live-Bettnivellierung (Heatmap), Temperaturkurven und Klipper-Terminal.",
    "browser-hint": "💡 Scrolle mit dem Mausrad oder nutze die Buttons oben, um tiefere Bereiche anzusehen (Bettsteuerung, Köpfe-Docks und Notaus).",
    "btn-auto-tour": "Auto-Tour",
    "btn-scroll-top": "Nach oben",
    "btn-scroll-down": "Runterscrollen",
    "header-coffee-short": "Kaffee",
    "header-coffee-full": "Kaffee spendieren (Ko-fi)",
    "faq4-a": "<strong>Druck abbrechen:</strong> Normaler, kontrollierter Stopp. Der Drucker beendet die aktuelle Bewegung, hebt Z an, parkt den aktiven Kopf sicher und schaltet die Heizungen ab.<br><strong>Not-Aus (M112):</strong> Sofortige Stromunterbrechung für Motoren und Heizungen. Nur bei Kollision oder Blockade nutzen. Erfordert danach Klipper-Neustart.",
    "faq4-q": "Wann sollte ich 'Druck abbrechen' vs. Not-Aus nutzen?",
    "faq3-a": "<strong>Niemals!</strong> Erstarrter Kunststoff in der kalten Nozzle reißt oder beschädigt das Feeder-Getriebe. Heize die Düse immer auf mindestens 200 °C (PLA) bzw. 240 °C (PETG) auf, bevor du Filament zurückziehst.",
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
    "lbl-in-dash": "Dashboard:",
    "unload-punchline": "In zwei Worten: Entladen drücken → Aufheizen abwarten → Mit leichtem Zug herausziehen",
    "unload-title": "Filament entladen",
    "slicer-title": "Getunte Prozessprofile (0.4 mm & 0.6 mm)",
    "slicer-subtitle": "Präzise getestet für Maßhaltigkeit, minimale Rüstzeiten und sauberen Werkzeugwechsel.",
    "th-profile": "Profilname",
    "th-nozzle": "Düse",
    "th-layer": "Schichthöhe",
    "th-features": "Besonderheiten & Highlights",
    "th-action": "Download",
    "p1-desc": "Alltags-Referenz. 3 Wände, Gyroid-Infill, Type-2 Prime Tower (12–15 mm³), bedingte Scarf-Naht, 12.000 mm/s² Travel.",
    "p2-desc": "Schnelle Funktionstests. 2 Wände, 10 % Support Cubic Infill (50 % Materialersparnis), kürzeste Fahrwege.",
    "p3-desc": "Maximaler Durchsatz für 0,6 mm Düsen. Arachne Wall Generator, 1,2 mm Volldecke, 20 mm³ Turmvolumen.",
    "p4-desc": "Qualitäts-Profil für 0,6 mm Düsen. Feine Rundungen und steilere Überhänge.",
    "p5-desc": "Turbo-Prototypenprofil für maximale Materialförderung in Rekordzeit.",
    "filaments-title": "19 Verifizierte Filament-Presets",
    "filaments-subtitle": "Exakte Flow-Raten, Drucktemperaturen und Druckbetthaftung für gängige Marken.",
    "install-badge": "🚀 Schnell & Sicher Einrichten",
    "step0-title": "Voraussetzung: HACS (Community Store) einrichten",
    "step0-pill": "Nur für Einsteiger",
    "step0-desc": "HACS ist der Community Store für Home Assistant, mit dem Erweiterungen und Karten mit einem Klick installiert werden. Falls du HACS noch nicht nutzt:",
    "step0-summary": "📖 HACS Schnell-Anleitung in 4 Schritten (Hier aufklappen)",
    "step0-s1-title": "Terminal & SSH öffnen:",
    "step0-s1-desc": "Öffne das Terminal-Add-on in Home Assistant oder verbinde dich per SSH mit deinem Host.",
    "step0-s2-title": "Installations-Skript ausführen:",
    "step0-s2-desc": "Führe den offiziellen Download-Befehl aus:",
    "step0-s3-title": "Home Assistant neu starten:",
    "step0-s3-desc": "Gehe auf Einstellungen → System → Neu starten.",
    "step0-s4-title": "HACS Integration hinzufügen:",
    "step0-s4-desc": "Gehe auf Einstellungen → Geräte & Dienste → Integration hinzufügen, suche nach HACS und folge der einmaligen GitHub-Aktivierung per 8-stelligem Gerätecode.",
    "btn-hacs-doc": "Offizielle HACS Dokumentation (hacs.xyz) →",
    "step1-cards-summary": "🎨 Anleitung: Frontend-Karten in HACS installieren (Hier aufklappen)",
    "step1-cards-guide": "Klicke in der Home Assistant Seitenleiste auf HACS → Frontend, suche nach den folgenden 7 Community-Karten und klicke jeweils auf Herunterladen:",
    "step1-cards-hint": "💡 Tipp: Wenn Home Assistant nach dem Download fragt „Ressource neu laden?“, klicke einfach auf Neu laden.",
    "step2-reg-summary": "🔍 Wo und wie wird die Ressource registriert? (Detaillierte Schritt-für-Schritt-Anleitung)",
    "step2-path-title": "💡 Wichtiges Home Assistant Pfad-Wissen:",
    "step2-path-desc": "Der lokale Ordner /config/www/ auf deiner Festplatte wird vom integrierten Webserver von Home Assistant intern als /local/ im Browser ausgeliefert. Die Datei /config/www/snapmaker-u1/showcase/u1-fusion-showcase.u1.js wird im Dashboard daher als /local/snapmaker-u1/showcase/u1-fusion-showcase.u1.js aufgerufen!",
    "step2-steps-title": "Schritt-für-Schritt im Home Assistant Menü registrieren:",
    "step2-s1": "Klicke in Home Assistant links unten auf Einstellungen (Settings).",
    "step2-s2": "Wähle Dashboards.",
    "step2-s3": "Klicke oben rechts auf das Drei-Punkte-Menü ⋮ und wähle Ressourcen (Resources).",
    "step2-s4": "Klicke unten rechts auf den blauen Button + Ressource hinzufügen (Add Resource).",
    "step2-s5": "Trage folgende Werte exakt ein:",
    "step2-s6": "Klicke auf Erstellen (Create). Fertig!",
    "btn-ha-res-doc": "Offizielle Home Assistant Dokumentation zu Ressourcen →",
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
    "coffee-lead": "Dieser Community Hub ist 100 % kostenlos und frei verfügbar. Wenn dir das Dashboard oder die OrcaSlicer-Profile Zeit, Nerven oder Filament sparen, lade mich gern auf einen freiwilligen Kaffee auf Ko-fi ein!",
    "coffee-btn": "Kaffee via Ko-fi spendieren",
    "coffee-note": "Über Ko-fi bleibt deine und meine E-Mail-Adresse vollständig geschützt und anonym. Spenden sind vollkommen freiwillig!",
    "credits-title": "Credits & Danksagung",
    "credits-subtitle": "Aufbauend auf großartiger Vorarbeit der Home-Assistant- und 3D-Druck-Community",
    "credit-ironoxx": "Ursprüngliche Integrationsbasis, Toolhead-Layout und Kamera-Streaming (MIT-Lizenz).",
    "credit-spoolman": "Open-Source Filament- und Spulen-Inventarverwaltung für Klipper und Home Assistant.",
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

  const langText = document.getElementById('current-lang-text');
  if (langText) {
    langText.textContent = lang === 'en' ? 'DE' : 'EN';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize in English by default
  setLanguage('en');

  // Lang toggle button
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'de' : 'en');
    });
  }

  // AI Prompt Copy Button
  const btnCopyAi = document.getElementById('btn-copy-ai-prompt');
  const aiPromptText = document.getElementById('ai-install-prompt-text');
  if (btnCopyAi && aiPromptText) {
    btnCopyAi.addEventListener('click', () => {
      navigator.clipboard.writeText(aiPromptText.innerText).then(() => {
        const originalText = btnCopyAi.innerHTML;
        btnCopyAi.innerHTML = '✅ Prompt Copied to Clipboard!';
        btnCopyAi.style.background = '#238636';
        setTimeout(() => {
          btnCopyAi.innerHTML = originalText;
          btnCopyAi.style.background = '';
        }, 2500);
      }).catch(err => {
        console.error('Failed to copy AI prompt: ', err);
      });
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
        }, 800);
      }, 1800);
    });
  }

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
