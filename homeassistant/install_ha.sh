#!/usr/bin/env bash
set -euo pipefail

# Snapmaker U1 Community Hub – Home Assistant Installer Helper
# Usage inside Home Assistant Terminal & SSH add-on:
#   curl -fsSL https://raw.githubusercontent.com/Reaper2507/snapmaker-u1-homeassistant/main/homeassistant/install_ha.sh | bash

REPO_RAW="https://raw.githubusercontent.com/Reaper2507/snapmaker-u1-homeassistant/main/homeassistant"
CONFIG_DIR="${CONFIG_DIR:-/config}"

echo "=== Snapmaker U1 Community Dashboard Installer ==="

if [ ! -f "$CONFIG_DIR/configuration.yaml" ]; then
  echo "ERROR: $CONFIG_DIR/configuration.yaml not found."
  echo "Run this inside your Home Assistant '/config' environment or pass CONFIG_DIR=/path/to/config."
  exit 1
fi

SHOWCASE_DIR="$CONFIG_DIR/www/media/snapmaker-u1/showcase"
EXTRA_DIR="$CONFIG_DIR/snapmaker-u1-hub"
PACKAGES_DIR="$CONFIG_DIR/packages"

mkdir -p "$SHOWCASE_DIR" "$EXTRA_DIR" "$PACKAGES_DIR"

echo "[1/4] Downloading frontend card & printer graphics -> $SHOWCASE_DIR"
curl -fsSL "$REPO_RAW/www/u1-fusion-showcase.u1.js" -o "$SHOWCASE_DIR/u1-fusion-showcase.u1.js"
curl -fsSL "$REPO_RAW/www/studio.png" -o "$SHOWCASE_DIR/studio.png"
curl -fsSL "$REPO_RAW/www/close-up.png" -o "$SHOWCASE_DIR/close-up.png"

echo "[2/4] Downloading Dashboard YAML & Automations -> $EXTRA_DIR"
curl -fsSL "$REPO_RAW/u1_dashboard_complete.yaml" -o "$EXTRA_DIR/u1_dashboard_complete.yaml"
curl -fsSL "$REPO_RAW/automations/cool_after_printing.yaml" -o "$EXTRA_DIR/cool_after_printing.yaml"
curl -fsSL "$REPO_RAW/automations/fertigdruck_fanfare.yaml" -o "$EXTRA_DIR/fertigdruck_fanfare.yaml"

echo "[3/4] Installing u1_control_package.yaml -> $PACKAGES_DIR"
if [ -f "$PACKAGES_DIR/u1_control_package.yaml" ]; then
  cp "$PACKAGES_DIR/u1_control_package.yaml" "$PACKAGES_DIR/u1_control_package.yaml.bak"
  echo "  Backed up existing u1_control_package.yaml to .bak"
fi
curl -fsSL "$REPO_RAW/packages/u1_control_package.yaml" -o "$PACKAGES_DIR/u1_control_package.yaml"

echo "[4/4] Checking HACS frontend prerequisites in $CONFIG_DIR/www/community ..."
COMMUNITY_DIR="$CONFIG_DIR/www/community"
MISSING=0
check_card() {
  local label="$1"
  shift
  for d in "$@"; do
    if [ -d "$COMMUNITY_DIR/$d" ]; then
      echo "  [OK] $label"
      return 0
    fi
  done
  echo "  [MISSING] $label (install via HACS 1-click button on install.html)"
  MISSING=$((MISSING + 1))
}

check_card "button-card" "button-card"
check_card "card-mod" "lovelace-card-mod" "card-mod"
check_card "slider-entity-row" "lovelace-slider-entity-row" "slider-entity-row"
check_card "vertical-stack-in-card" "vertical-stack-in-card"
check_card "apexcharts-card" "apexcharts-card"
check_card "config-template-card" "config-template-card"

echo ""
echo "=== Summary ==="
echo "- Showcase files copied to: $SHOWCASE_DIR"
echo "- Register JS module resource: /local/media/snapmaker-u1/showcase/u1-fusion-showcase.u1.js"
echo "- Dashboard YAML saved at:     $EXTRA_DIR/u1_dashboard_complete.yaml"
if ! grep -Eq 'packages:' "$CONFIG_DIR/configuration.yaml"; then
  echo "- Note: Add 'homeassistant: { packages: !include_dir_named packages }' to configuration.yaml to activate $PACKAGES_DIR/u1_control_package.yaml"
fi
echo "- Edit YOUR_PRINTER_IP in $PACKAGES_DIR/u1_control_package.yaml if using optional Moonraker shell_commands."
if [ "$MISSING" -gt 0 ]; then
  echo "- Missing HACS cards: $MISSING — open install.html and click the 1-click HACS buttons, then restart HA if needed."
else
  echo "- All 6 HACS frontend cards detected!"
fi
