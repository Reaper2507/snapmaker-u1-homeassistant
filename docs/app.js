const i18n = {
  "en": {
    "nav-home": "Overview",
    "nav-ha": "Dashboard",
    "nav-orcaslicer": "OrcaSlicer",
    "nav-credits": "Credits",
    "header-coffee": "Buy me a coffee",
    "hero-badge": "Home Assistant · Snapmaker U1",
    "hero-title-hub": "Snapmaker U1 Dashboard",
    "hero-lead-hub": "A complete Home Assistant hub for the 4-toolhead Snapmaker U1: live Studio &amp; Cutaway printer graphics, tap-to-control popups, three Lovelace views, post-print bed cooling, hardware airflow mod, and tuned OrcaSlicer 2.5 presets.",
    "ha-banner-badge": "Lovelace dashboard for Snapmaker U1",
    "ha-banner-title": "Snapmaker U1 Dashboard",
    "ha-banner-lead": "The dashboard brings together the live printer card, filament management, print controls, job and camera views, and maintenance. It builds on <a href=\"https://github.com/Ironoxx/ha-snapmaker-u1-card\">Ironoxx’s Snapmaker U1 integration</a>.",
    "slicer-banner-badge": "OrcaSlicer 2.5 Suite",
    "slicer-banner-title": "OrcaSlicer Profiles &amp; Filament Presets",
    "slicer-banner-lead": "Tested, curated presets for the Snapmaker U1 in OrcaSlicer 2.5: 9 process profiles for 0.4 &amp; 0.6 mm nozzles, 17 verified filament presets across 9 materials, and stainless LAN machine profiles.",
    "jump-slicer-install": "📦 Quick Install",
    "jump-set-and-send": "🧩 Set &amp; Send + LAN",
    "jump-profiles": "🎛️ 9 Process Profiles",
    "jump-filaments": "🧵 17 Filament Presets",
    "credits-banner-badge": "Credits",
    "credits-banner-title": "Credits and dependencies",
    "credits-banner-lead": "Thanks to the projects and maintainers whose work this dashboard and its extras build on.",
    "gallery-title": "Dashboard Gallery & Screenshots",
    "gallery-subtitle": "Screenshots of the dashboard in Home Assistant. Open an image to see it at its original size.",
    "tab-desktop": "Studio dashboard",
    "tab-photos": "Printer images",
    "tab-cutaway": "Cutaway and axes",
    "tab-maintenance": "Maintenance &amp; diagnostics",
    "tab-minimal": "Minimal",
    "tab-mobile": "Phone view",
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
    "feat-temps-desc": "See the current and target temperatures for all four nozzles and the bed. Open Filament &amp; heat to adjust supported targets for the selected tool.",
    "feat-docking-title": "Toolhead Mounting & Docking Feedback",
    "feat-docking-desc": "Shows the reported toolhead positions. Missing telemetry is shown as unknown.",
    "feat-spools-title": "Loaded filament colors at T0–T3",
    "feat-spools-desc": "The live graphic shows each reported spool color at its actual T0–T3 position. Manage filament assignments and switch between loaded tools when the printer state allows it. Spoolman inventory is optional.",
    "feat-tap-title": "Tap the printer to open controls",
    "feat-tap-desc": "The printer graphic opens the controls. Use Filament &amp; heat to select a tool, preheat and start loading or unloading when supported. Fit a new spool and feed it to the inlet at the printer.",
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
    "slicer-title": "9 Tuned Process Profiles (0.4 &amp; 0.6 mm)",
    "slicer-subtitle": "Decoupled universal print goals with integrated OrcaSlicer hover tooltips, VFA-bypass speeds, and stable prime towers.",
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
    "extras-title": "Automations, Slicer Profiles &amp; Hardware Mod",
    "extra-orca": "OrcaSlicer profiles",
    "extra-layer": "LayerLab Set &amp; Send",
    "extra-tone": "Print completion chime and light",
    "extra-cooling": "Cool after printing (bed cooldown fan)",
    "support-note": "Report a bug, share feedback or buy a coffee if the project helped you.",
    "feedback": "Report an issue",
    "nav-install": "Install",
    "dash-cta": "Screenshots &amp; Views",
    "install-cta": "Install dashboard",
    "three-views": "Three dashboard views",
    "main-credit": "Community hub by <a href=\"https://github.com/Reaper2507\" target=\"_blank\" rel=\"noopener noreferrer\">Reaper2507</a>, built on <a href=\"https://github.com/Ironoxx/ha-snapmaker-u1-card\" target=\"_blank\" rel=\"noopener noreferrer\">Ironoxx’s Snapmaker U1 integration</a>.",
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
    "cooling-summary": "Included: cool after printing (bed cooldown fan)",
    "cooling-note": "Small cooling function included below Part cooling fan and in u1_control_package.yaml: runs the side auxiliary fan (cavity_fan) after print completion with configurable time (min) and speed (%) for easier bed removal (default: 5 min at 70 %). Stops automatically at ≤ 36 °C, on timeout, or when switched off. Disable for ABS or large flat PETG.",
    "cooling-setup": "Setup and helper entities",
    "cooling-file": "Open YAML",
    "cooling-show": "Show YAML",
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
    "all-filaments": "17 Verified Filament Presets (0.4 &amp; 0.6 mm)",
    "filament-note": "Tuned for the Snapmaker U1’s hotend and motion system. Always verify temperatures and nozzle hardware requirements (for PETG-CF use hardened/stainless hotends).",
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
    "coffee-maintainer": "Support Reaper2507 on Ko-fi",
    "thomas-card": "card-mod on GitHub →",
    "gallery-dash-detail": "More of the dashboard: tools, files and layer view",
    "gallery-minimal-note": "Minimal view during a print, with ETA, remaining time and layer progress.",
    "gallery-phone-note": "On a phone, the printer, job status, camera and controls are stacked vertically.",
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
    "card-mode-hint": "In Home Assistant, open the gear on the card. Choose Studio or Cutaway under Image. With Live spool colors on, the graphic reflects the loaded filament colors reported for each slot.",
    "home-feature-filament-title": "Live Studio &amp; Cutaway rendering",
    "home-feature-filament-desc": "T0–T3 spool colors update live alongside mounted toolhead, XYZ axes, and nozzle/bed temperatures.",
    "home-feature-heat-title": "Tap printer for Controls &amp; Heat",
    "home-feature-heat-desc": "Open Print speed, Flow, Cooling after printing, and per-head Filament &amp; heat sliders straight from the graphic.",
    "home-feature-printing-title": "Cool after printing &amp; automations",
    "home-feature-printing-desc": "Side cavity_fan cooldown (5 min · 70 %, auto-off ≤ 36 °C), completion chime, and chamber light pulse.",
    "home-feature-maintenance-title": "OrcaSlicer 2.5 suite &amp; Hardware mod",
    "home-feature-maintenance-desc": "9 tuned 0.4/0.6 mm process profiles, 17 material presets, LAN machine profiles, and Aux Fan Deflector STL.",
    "home-view-dashboard": "Full View",
    "home-view-dashboard-desc": "Printer controls, filament management, camera, files and layer view.",
    "home-view-minimal": "Minimal View",
    "home-view-minimal-desc": "Compact status view with live camera, ETA, recent files and current layer.",
    "home-view-maintenance": "Maintenance &amp; Diagnostics",
    "home-view-maintenance-desc": "Service checklist, temperature history, bed mesh and self-test.",
    "ha-maintenance-cta": "Maintenance",
    "split-badge": "Transparent credits",
    "split-title": "Upstream foundation · Curated hub by Reaper2507",
    "split-intro": "Transparent credit matters: Ironoxx built the underlying integration and core card features. Reaper2507 curates, tests, and combines genuinely useful daily-driver tools into one clean setup — no gimmicks, no bloat.",
    "split-iron-title": "Built on Ironoxx’s Snapmaker U1 Card",
    "split-iron-1": "<strong>Home Assistant integration &amp; entities:</strong> Moonraker/Klipper telemetry, firmware status, self-test, maintenance counters, and spool data (incl. optional Spoolman link).",
    "split-iron-2": "<strong>Original printer card &amp; core controls:</strong> Baseline toolhead card adapted from <code>v2.0.0</code> with the upstream MIT copyright notice preserved.",
    "split-iron-3": "<strong>Live Layer View &amp; Object Exclusion:</strong> Real-time layer preview and the ability to skip individual failed objects while printing continues.",
    "split-reaper-title": "Curated, tested &amp; assembled by Reaper2507",
    "split-reaper-badge": "Community Hub",
    "split-reaper-1": "<strong>Structured Studio &amp; Cutaway layout:</strong> Clean visual presentation with T0–T3 spool colors, live XYZ &amp; temperatures, and direct access to Controls &amp; Filament &amp; Heat.",
    "split-reaper-2": "<strong>Three practical Lovelace views + control package:</strong> Organized Full, Minimal, and Maintenance &amp; Diagnostics layouts ready to drop in, paired with <code>u1_control_package.yaml</code>.",
    "split-reaper-3": "<strong>Useful post-print automation:</strong> Compact <code>Cool after printing</code> row (<code>cavity_fan</code>, 5 min · 70 %, auto-off ≤ 36 °C) for effortless PEI part removal, plus optional completion cues.",
    "split-reaper-4": "<strong>Curated OrcaSlicer presets &amp; tested hardware fix:</strong> 9 process profiles, 17 material baselines across 9 filaments, LAN configs, and the archived MakerWorld #3107806 Aux Fan Deflector.",
    "showcase-title": "Inside the Dashboard",
    "showcase-intro": "Click any screenshot to inspect it full-size, or test the interactive Studio / Cutaway switcher on the <a href=\"homeassistant.html#telemetry\">Dashboard page</a>.",
    "sc-full-title": "Full Dashboard · Studio, Camera, Speed &amp; 4 Toolheads",
    "sc-full-desc": "Upper control deck with live T0–T3 spool colors, camera stream with light toggle, ETA/progress, and per-head filament controls.",
    "sc-heat-title": "Tap the Printer → Controls &amp; Filament &amp; Heat",
    "sc-heat-desc": "Tapping the U1 graphic opens Controls (speed, flow, pause) and Filament &amp; Heat for all four toolheads.",
    "sc-cutaway-title": "Alternative Cutaway View · Live XYZ &amp; Dock State",
    "sc-cutaway-desc": "Switch between Studio and technical Cutaway in one toggle — showing live X/Y/Z coordinates and docked/mounted heads.",
    "sc-files-title": "Files, History &amp; Layer View (Ironoxx Object Exclusion)",
    "sc-files-desc": "Queue prints directly, browse timelapses, and skip individual objects in Ironoxx’s live layer view mid-print.",
    "sc-maint-title": "Maintenance &amp; Diagnostics · 11×11 Bed Mesh &amp; Console",
    "sc-maint-desc": "Dedicated diagnostics view uniting Klipper G-code console, temperature curves, bed mesh, MCU load, and service intervals.",
    "extras-badge": "Included in the package",
    "extras-intro": "Beyond the dashboard itself, this repository ships ready-to-use automations, a complete OrcaSlicer preset suite, and a tested chamber airflow upgrade.",
    "ex-cool-title": "Cool after printing (cavity_fan)",
    "ex-cool-desc": "Compact toggle &amp; slider panel right below Part cooling fan: cools the PEI bed after completion (default 5 min at 70 %) and stops automatically at ≤ 36 °C or next print. Included in <code>u1_control_package.yaml</code> or standalone.",
    "ex-cool-link": "Open YAML &amp; settings →",
    "ex-proc-title": "9 OrcaSlicer Process Profiles (0.4 &amp; 0.6 mm)",
    "ex-proc-desc": "Standardized profiles for every job: Balanced (0.20 / 0.28 mm, VFA-free 200 mm/s), Fast for organizers, Functional for brackets, Draft for rapid fit checks, plus QR-Code &amp; Schild (0.4 mm).",
    "ex-proc-link": "Browse all 9 process profiles →",
    "ex-fil-title": "17 Verified Filament Presets &amp; LAN Machines",
    "ex-fil-desc": "Tuned flow, pressure advance, and volumetric limits for 9 materials (SUNLU PLA+ 2.0, Bambu PLA/PETG, ELEGOO PLA Matte &amp; PETG-CF, eSUN PETG Matte, GEEETECH PLA/TPU 95A, JAYO HS PETG) for 0.4 &amp; 0.6 mm nozzles + LAN printer profiles.",
    "ex-fil-link": "Download filament presets →",
    "ex-mod-title": "Hardware Mod: Auxiliary Fan Deflector (MakerWorld #3107806)",
    "ex-mod-desc": "Archived MakerWorld #3107806 model (<code>U1-Fan_Deflector-Smooth.stl</code>): clips onto the side AUX fan and redirects airflow upward — stopping left-bed PLA/PETG warping so 30 % AUX stays usable.",
    "ex-mod-link": "View STL &amp; print guide →",
    "ex-bell-title": "Optional: Print Completion Cue",
    "ex-bell-desc": "Practical notification via <code>fertigdruck_fanfare.yaml</code>: brief 1.2 s chamber-light signal on completion plus optional Alexa chime when you are in another room.",
    "ex-bell-link": "Show automation YAML →",
    "ex-guide-title": "Quick &amp; AI Install",
    "ex-guide-desc": "Step-by-step HACS setup for all 6 frontend cards, raw YAML import, plus a 1-click installation prompt for Home Assistant AI setups.",
    "ex-guide-link": "Go to Install →",
    "machine-title": "Machine Presets (LAN Mode) &amp; Set &amp; Send",
    "proc-bal-04": "Daily driver: 3 walls (inner-outer-inner), 15 % Adaptive Cubic, 200 mm/s outer wall bypasses CoreXY VFA resonance.",
    "proc-fast-04": "High throughput for bins, trays &amp; Gridfinity: 2 walls, 10 % Adaptive Cubic, 220/380/400 mm/s (~20–25 % faster).",
    "proc-func-04": "Structural strength for brackets &amp; mounts: 4 walls (1.70 mm shell), 20 % Adaptive Cubic, moderate vertical shell thickness.",
    "proc-draft-04": "Express prototyping for fitment &amp; bolt-hole checks: 2 walls, 8 % Adaptive Cubic, 240/420/450 mm/s.",
    "proc-qr-04": "Crisp multi-color signage &amp; scannable QR codes: sharp surface contrast, Arachne precision, clean color transitions.",
    "proc-bal-06": "0.6 mm standard for enclosures &amp; housings: 3 walls (1.9 mm shell), 15 % Adaptive Cubic, 170/260/300 mm/s.",
    "proc-fast-06": "Massive volume throughput for crates, bins &amp; tool trays: 2 walls (1.25 mm shell), 10 % infill, 180/280/320 mm/s.",
    "proc-func-06": "Heavy-duty jigs &amp; adapters: 4 walls (2.50 mm solid shell), 20 % Adaptive Cubic, 150/220/260 mm/s.",
    "proc-draft-06": "Rapid large-volume mockups: 2 walls, 8 % Adaptive Cubic, 200/320/350 mm/s."
  },
  "de": {
    "nav-home": "Übersicht",
    "nav-ha": "Dashboard",
    "nav-orcaslicer": "OrcaSlicer",
    "nav-credits": "Danksagung",
    "header-coffee": "Kaffee spendieren",
    "hero-badge": "Home Assistant · Snapmaker U1",
    "hero-title-hub": "Snapmaker U1 Dashboard",
    "hero-lead-hub": "Der komplette Home-Assistant-Hub für den 4-Kopf-Snapmaker U1: Live-Studio- &amp; Cutaway-Grafiken, Steuerung per Klick auf den Drucker, drei Lovelace-Ansichten, Nachkühl-Steuerung, Hardware-Luftumlenkung und getunte OrcaSlicer-2.5-Profile.",
    "ha-banner-badge": "Lovelace-Dashboard für den Snapmaker U1",
    "ha-banner-title": "Snapmaker U1 Dashboard",
    "ha-banner-lead": "Das Dashboard vereint die Live-Druckerkarte, Filamentverwaltung, Drucksteuerung, Druckauftrag, Kamera und Wartung. Es baut auf <a href=\"https://github.com/Ironoxx/ha-snapmaker-u1-card\">Ironoxx’ Snapmaker-U1-Integration</a> auf.",
    "slicer-banner-badge": "OrcaSlicer 2.5 Suite",
    "slicer-banner-title": "OrcaSlicer Profile &amp; Filament-Presets",
    "slicer-banner-lead": "Praxiserprobte Presets für den Snapmaker U1 in OrcaSlicer 2.5: 9 Prozessprofile für 0,4- &amp; 0,6-mm-Düsen, 17 verifizierte Filament-Presets aus 9 Materialien sowie LAN-Maschinenprofile.",
    "jump-slicer-install": "📦 Schnell-Installation",
    "jump-set-and-send": "🧩 Set &amp; Send + LAN",
    "jump-profiles": "🎛️ 9 Prozessprofile",
    "jump-filaments": "🧵 17 Filament-Presets",
    "credits-banner-badge": "Danksagung",
    "credits-banner-title": "Danksagung und Abhängigkeiten",
    "credits-banner-lead": "Danke an die Projekte und Maintainer, deren Arbeit dieses Dashboard und seine Extras nutzen.",
    "gallery-title": "Dashboard Galerie & Screenshots",
    "gallery-subtitle": "Screenshots des Dashboards in Home Assistant. Öffne ein Bild, um es in Originalgröße zu sehen.",
    "tab-desktop": "Studio-Dashboard",
    "tab-photos": "Druckerbilder",
    "tab-cutaway": "Cutaway und Achsen",
    "tab-maintenance": "Wartung &amp; Diagnose",
    "tab-minimal": "Minimal",
    "tab-mobile": "Handy-Ansicht",
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
    "feat-temps-desc": "Sieh Ist- und Solltemperaturen für alle vier Düsen und das Heizbett. Unter „Filament &amp; heat“ kannst du unterstützte Sollwerte für den ausgewählten Kopf einstellen.",
    "feat-docking-title": "Toolhead-Status & Docking-Rückmeldung",
    "feat-docking-desc": "Zeigt die gemeldeten Positionen der Werkzeugköpfe. Fehlen die Daten, bleibt der Status unbekannt.",
    "feat-spools-title": "Geladene Filamentfarben an T0–T3",
    "feat-spools-desc": "Die Live-Grafik zeigt jede gemeldete Spulenfarbe an ihrer tatsächlichen Position T0–T3. Verwalte Filamentzuordnungen und wechsle je nach Druckerstatus zwischen bereits bestückten Werkzeugen. Der Spoolman-Bestand ist optional.",
    "feat-tap-title": "Drucker antippen, Steuerung öffnen",
    "feat-tap-desc": "Das Druckerbild öffnet die Steuerung. Unter „Filament &amp; heat“ wählst du einen Kopf, heizt vor und startest je nach Druckerstatus das Laden oder Entladen. Eine neue Spule setzt du am Drucker ein und führst das Filament zum Einlass.",
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
    "slicer-title": "9 abgestimmte Prozessprofile (0,4 &amp; 0,6 mm)",
    "slicer-subtitle": "Klar getrennte Druckziele mit integrierten OrcaSlicer-Tooltips, VFA-freiem Außenwandtempo und standfesten Prime-Towern.",
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
    "extras-title": "Automationen, Slicer-Profile &amp; Hardware-Mod",
    "extra-orca": "OrcaSlicer-Profile",
    "extra-layer": "LayerLab Set &amp; Send",
    "extra-tone": "Druckende-Ton und Lichtimpuls",
    "extra-cooling": "Nachkühlen nach Druckende (Bettlüfter)",
    "support-note": "Melde einen Fehler, teile Feedback oder spendiere einen Kaffee, wenn dir das Projekt geholfen hat.",
    "feedback": "Problem melden",
    "nav-install": "Installation",
    "dash-cta": "Screenshots &amp; Ansichten",
    "install-cta": "Dashboard installieren",
    "three-views": "Drei Dashboard-Ansichten",
    "main-credit": "Community-Hub von <a href=\"https://github.com/Reaper2507\" target=\"_blank\" rel=\"noopener noreferrer\">Reaper2507</a> auf Basis von <a href=\"https://github.com/Ironoxx/ha-snapmaker-u1-card\" target=\"_blank\" rel=\"noopener noreferrer\">Ironoxx’ Snapmaker-U1-Integration</a>.",
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
    "cooling-summary": "Enthalten: Nachkühlen nach Druckende (Bettlüfter)",
    "cooling-note": "Kleine Nachkühl-Funktion direkt unter Part cooling fan und im u1_control_package.yaml: lässt nach Druckende den seitlichen Zusatzlüfter (cavity_fan) mit einstellbarer Laufzeit (min) und Drehzahl (%) laufen (Standard: 5 min bei 70 %) für leichteres Ablösen von der PEI-Platte. Stoppt automatisch bei ≤ 36 °C, nach Ablauf oder beim Ausschalten. Bei ABS oder großflächigem PETG deaktivieren.",
    "cooling-setup": "Einrichtung und Helfer-Entitäten",
    "cooling-file": "YAML öffnen",
    "cooling-show": "YAML anzeigen",
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
    "all-filaments": "17 verifizierte Filament-Presets (0,4 &amp; 0,6 mm)",
    "filament-note": "Abgestimmt auf Hotend und Kinematik des Snapmaker U1. Prüfe Temperaturen und Düsen-Vorgaben (für PETG-CF gehärtete/Edelstahl-Düse verwenden).",
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
    "coffee-maintainer": "Reaper2507 auf Ko-fi unterstützen",
    "thomas-card": "card-mod auf GitHub →",
    "gallery-dash-detail": "Mehr vom Dashboard: Werkzeuge, Dateien und Schichtansicht",
    "gallery-minimal-note": "Minimalansicht während eines Drucks mit Endzeit, Restzeit und Schichtfortschritt.",
    "gallery-phone-note": "Auf dem Handy stehen Drucker, Auftragsstatus, Kamera und Steuerung untereinander.",
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
    "card-mode-hint": "Öffne in Home Assistant das Zahnrad der Karte. Unter „Image“ kannst du Studio oder Cutaway wählen. Mit „Live spool colors“ zeigt die Grafik die gemeldeten Filamentfarben der geladenen Spulen je Slot.",
    "home-feature-filament-title": "Live-Studio &amp; Cutaway-Rendering",
    "home-feature-filament-desc": "Geladene Farben an T0–T3 werden live zusammen mit dem montierten Kopf, XYZ-Achsen und Temperaturen angezeigt.",
    "home-feature-heat-title": "Drucker antippen → Steuerung &amp; Hitze",
    "home-feature-heat-desc": "Öffnet Tempo, Flow, Nachkühl-Schalter sowie Filament-&amp;-Heat-Regler je Werkzeugkopf direkt aus der Grafik.",
    "home-feature-printing-title": "Nachkühlen &amp; Druckende-Automationen",
    "home-feature-printing-desc": "Nachkühlen über cavity_fan (5 min · 70 %, Auto-Stopp ≤ 36 °C), Bauraumlicht-Impuls &amp; optionaler Alexa-Gong.",
    "home-feature-maintenance-title": "OrcaSlicer-2.5-Suite &amp; Hardware-Mod",
    "home-feature-maintenance-desc": "9 Prozessprofile (0,4 &amp; 0,6 mm), 17 Material-Presets, LAN-Maschinenprofile und Aux Fan Deflector STL.",
    "home-view-dashboard": "Vollansicht",
    "home-view-dashboard-desc": "Drucksteuerung, Filamentverwaltung, Kamera, Dateien und Schichtansicht.",
    "home-view-minimal": "Minimal-Ansicht",
    "home-view-minimal-desc": "Kompakte Statusansicht mit Live-Kamera, Restzeit, letzten Dateien und aktueller Schicht.",
    "home-view-maintenance": "Wartung &amp; Diagnose",
    "home-view-maintenance-desc": "Wartungscheckliste, Temperaturverlauf, Bett-Mesh und Selbsttest.",
    "ha-maintenance-cta": "Wartung",
    "split-badge": "Klare Aufteilung",
    "split-title": "Basis von Ironoxx · Kuratiertes Paket von Reaper2507",
    "split-intro": "Klare Kante bei den Credits: Die Integration und Kernfunktionen stammen von Ironoxx. Reaper2507 sammelt, prüft, stimmt ab und bündelt gezielt praxistaugliche Werkzeuge für den Alltag — ohne Spielereien und ohne Ballast.",
    "split-iron-title": "Basis: Ironoxx’ Snapmaker U1 Card",
    "split-iron-1": "<strong>Home-Assistant-Integration &amp; Entitäten:</strong> Moonraker-/Klipper-Telemetrie, Firmware-Status, Selbsttest, Wartungszähler und Spulendaten (inkl. optionalem Spoolman-Link).",
    "split-iron-2": "<strong>Original-Druckerkarte &amp; Kernfunktionen:</strong> Aus <code>v2.0.0</code> adaptierte Basis-Karte unter Beibehaltung des originalen MIT-Copyright-Hinweises.",
    "split-iron-3": "<strong>Live-Schichtansicht &amp; Object Exclusion:</strong> Schicht-Vorschau in Echtzeit und Ausblenden einzelner Objekte während der Druck weiterläuft.",
    "split-reaper-title": "Gesammelt, getestet &amp; zusammengestellt von Reaper2507",
    "split-reaper-badge": "Community Hub",
    "split-reaper-1": "<strong>Klare Studio- &amp; Cutaway-Darstellung:</strong> Übersichtliche Live-Ansicht mit T0–T3 Spulenfarben, XYZ-Positionen, Temperaturen und direktem Zugriff auf Controls &amp; Filament &amp; Heat.",
    "split-reaper-2": "<strong>Drei praxistaugliche Lovelace-Ansichten + Steuerpaket:</strong> Fertig strukturierte Full-, Minimal- und Maintenance-&amp;-Diagnostics-Layouts plus <code>u1_control_package.yaml</code>.",
    "split-reaper-3": "<strong>Nützliche Nachlauf-Automationen:</strong> Kompakte <code>Cool after printing</code>-Zeile (<code>cavity_fan</code>, 5 min · 70 %, Auto-Aus ≤ 36 °C) zum leichteren Lösen von der PEI-Platte, plus optionale Fertigmeldung.",
    "split-reaper-4": "<strong>Kuratierte OrcaSlicer-Profile &amp; erprobter Hardware-Fix:</strong> 9 Prozessprofile, 17 Material-Presets aus 9 Filamenten, LAN-Konfigs sowie der archivierte MakerWorld-#3107806-Lüfterdeflektor.",
    "showcase-title": "Einblick ins Dashboard",
    "showcase-intro": "Klicke auf einen Screenshot für die Großansicht oder probiere den Studio-/Cutaway-Wechsler direkt auf der <a href=\"homeassistant.html#telemetry\">Dashboard-Seite</a> aus.",
    "sc-full-title": "Vollansicht · Studio, Kamera, Tempo &amp; alle 4 Köpfe",
    "sc-full-desc": "Oberes Bediendeck mit Live-T0–T3-Spulenfarben, Kamerabild inkl. Licht-Schalter, Restzeit/Fortschritt und direkter Steuerung je Druckkopf.",
    "sc-heat-title": "Drucker antippen → Controls &amp; Filament &amp; Heat",
    "sc-heat-desc": "Ein Tipp auf das U1-Bild öffnet sofort Controls (Tempo, Flow, Pause) sowie Filament &amp; Heat für alle vier Werkzeugköpfe.",
    "sc-cutaway-title": "Alternative Cutaway-Ansicht · Live-XYZ &amp; Dock-Status",
    "sc-cutaway-desc": "Per Schalter zwischen Studio und technischer Cutaway-Ansicht wechseln — inklusive Live-X/Y/Z-Position und montiertem Kopf.",
    "sc-files-title": "Dateien, Verlauf &amp; Layer View (Ironoxx Object Exclusion)",
    "sc-files-desc": "Druckjobs direkt in die Warteschlange einreihen, Timelapses ansehen und über Ironoxx’ Schichtansicht einzelne Teile ausschließen.",
    "sc-maint-title": "Wartung &amp; Diagnose · 11×11 Bett-Mesh &amp; Konsole",
    "sc-maint-desc": "Eigene Diagnoseansicht mit Klipper-G-Code-Konsole, Temperaturkurven, 11×11-Bett-Mesh, MCU-Last und Serviceintervallen.",
    "extras-badge": "Alles im Paket enthalten",
    "extras-intro": "Neben dem Dashboard selbst liefert das Repository sofort nutzbare Automationen, eine komplette OrcaSlicer-Profil-Suite und eine erprobte Luftstrom-Mod.",
    "ex-cool-title": "Nachkühlen nach Druckende (cavity_fan)",
    "ex-cool-desc": "Kompakter Schalter &amp; Regler direkt unter Part cooling fan: kühlt die PEI-Platte nach Druckende (Standard: 5 min bei 70 %) und stoppt automatisch bei ≤ 36 °C oder neuem Druck. Im <code>u1_control_package.yaml</code> oder einzeln enthalten.",
    "ex-cool-link": "YAML &amp; Einstellungen ansehen →",
    "ex-proc-title": "9 OrcaSlicer Prozessprofile (0,4 &amp; 0,6 mm)",
    "ex-proc-desc": "Standardisierte Profile für jeden Zweck: Balanced (0,20 / 0,28 mm, VFA-freie 200 mm/s), Fast für Boxen/Organizer, Functional für Mechanik, Draft für schnelle Passform-Checks sowie QR-Code &amp; Schild (0,4 mm).",
    "ex-proc-link": "Alle 9 Prozessprofile ansehen →",
    "ex-fil-title": "17 verifizierte Filament-Presets &amp; LAN-Profile",
    "ex-fil-desc": "Abgestimmter Flow, Pressure Advance &amp; max. Volumenstrom für 9 Materialien (SUNLU PLA+ 2.0, Bambu PLA/PETG, ELEGOO PLA Matte &amp; PETG-CF, eSUN PETG Matte, GEEETECH PLA/TPU 95A, JAYO HS PETG) in 0,4 &amp; 0,6 mm.",
    "ex-fil-link": "Filament-Presets laden →",
    "ex-mod-title": "Hardware-Mod: Auxiliary Fan Deflector (MakerWorld #3107806)",
    "ex-mod-desc": "Archiviertes MakerWorld-Modell #3107806 (<code>U1-Fan_Deflector-Smooth.stl</code>): lenkt den Seitenlüfter sanft nach oben um und verhindert Left-Bed-Warping bei 30 % AUX.",
    "ex-mod-link": "STL &amp; Druckanleitung öffnen →",
    "ex-bell-title": "Optional: Druckende-Hinweis",
    "ex-bell-desc": "Praktische Fertigmeldung über <code>fertigdruck_fanfare.yaml</code>: kurzer 1,2-s-Lichtimpuls am Bauraum plus optionaler Alexa-Gong, wenn man nicht am Drucker steht.",
    "ex-bell-link": "Automations-YAML anzeigen →",
    "ex-guide-title": "Schnell- &amp; KI-Installation",
    "ex-guide-desc": "Schritt-für-Schritt-Einrichtung aller 6 HACS-Frontend-Karten, YAML-Import sowie 1-Klick-Installationsprompt für Home-Assistant-KI.",
    "ex-guide-link": "Zur Installation →",
    "machine-title": "Maschinenprofile (LAN-Modus) &amp; Set &amp; Send",
    "proc-bal-04": "Alltags-Referenz: 3 Wände (innen-außen-innen), 15 % Adaptive Cubic, 200 mm/s Außenwand umgeht CoreXY-VFA-Resonanz.",
    "proc-fast-04": "Hoher Durchsatz für Boxen, Schalen &amp; Gridfinity: 2 Wände, 10 % Adaptive Cubic, 220/380/400 mm/s (~20–25 % schneller).",
    "proc-func-04": "Maximale Festigkeit für Halter &amp; Mechanik: 4 Wände (1,70 mm), 20 % Adaptive Cubic, verstärkte Schrägen.",
    "proc-draft-04": "Express-Prototyping für Passform &amp; Bohrungen: 2 Wände, 8 % Adaptive Cubic, 240/420/450 mm/s.",
    "proc-qr-04": "Gestochen scharfe Schilder &amp; scanbare QR-Codes: hoher Kontrast, Arachne-Präzision, saubere Farbwechsel.",
    "proc-bal-06": "0,6-mm-Standard für Gehäuse &amp; Abdeckungen: 3 Wände (1,9 mm), 15 % Adaptive Cubic, 170/260/300 mm/s.",
    "proc-fast-06": "Maximaler Volumendurchsatz für große Kisten &amp; Trays: 2 Wände (1,25 mm), 10 % Infill, 180/280/320 mm/s.",
    "proc-func-06": "Robuste Werkstatt-Lehren &amp; Adapter: 4 Wände (2,50 mm massiv), 20 % Adaptive Cubic, 150/220/260 mm/s.",
    "proc-draft-06": "Schnelle Großvolumen-Prototypen: 2 Wände, 8 % Adaptive Cubic, 200/320/350 mm/s."
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

  const lightboxDialog = document.getElementById("image-lightbox-dialog");
  const lightboxImg = document.getElementById("image-lightbox-img");
  const lightboxTitle = document.getElementById("image-lightbox-title");
  document.querySelectorAll("[data-lightbox-src]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!lightboxDialog || !lightboxImg || typeof lightboxDialog.showModal !== "function") return;
      const src = btn.getAttribute("data-lightbox-src");
      const cardHeading = btn.closest(".showcase-card")?.querySelector("h3")?.textContent;
      const title = cardHeading || btn.getAttribute("data-lightbox-title") || "Screenshot";
      const thumbImg = btn.querySelector("img");
      lightboxImg.src = src;
      lightboxImg.alt = thumbImg ? thumbImg.alt : title;
      if (lightboxTitle) lightboxTitle.textContent = title;
      lightboxDialog.showModal();
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

  const requestedView = new URLSearchParams(location.search).get("view");
  const requestedTab = Array.from(tabBtns).find(button => button.getAttribute("data-tab") === "tab-" + requestedView);
  requestedTab?.click();

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

  // Copy YAML Code Buttons
  [
    ['btn-copy-yaml', 'fanfare-yaml-code'],
    ['btn-copy-cooling-yaml', 'cooling-yaml-code']
  ].forEach(([btnId, codeId]) => {
    const btn = document.getElementById(btnId);
    const code = document.getElementById(codeId);
    if (btn && code) {
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(code.textContent).then(() => {
          const originalText = btn.innerHTML;
          btn.textContent = currentLang === 'de' ? 'YAML kopiert' : 'YAML copied';
          btn.style.background = '#238636';
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy YAML: ', err);
        });
      });
    }
  });

});
