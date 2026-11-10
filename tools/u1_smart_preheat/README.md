# Snapmaker U1 Smart Preheat Optimizer

An intelligent, lightweight post-processing optimizer for **OrcaSlicer 2.5+** and the **Snapmaker U1** (4-toolhead CoreXY).

---

## The Problem
By default, idle Snapmaker U1 toolheads cool down toward ~65 °C (`standby_temperature_delta = -150`). On every multi-color tool change, the printer pauses for roughly 8–12 seconds at the dock waiting for the nozzle to reheat to 215 °C. 

Across a typical multi-color print with 500 swaps, that adds **over an hour** of unproductive idle waiting.

---

## How Smart Preheat Solves It
1. **Dynamic ~20s Lead Time:** Parses G-code motion paths and injects `M104 S[temp] T[x]` approximately 20 seconds before the tool change occurs.
2. **Reduced Dwell Time:** Unlike older scripts using 40-second lookahead, 20 seconds is matched to the U1's high-speed 360° ring ceramic heater, minimizing hot nozzle idle dwell in the dock.
3. **Preserved Geometry:** Leaves all slicing parameters, path geometry, speeds, and extrusion volumes completely intact.
4. **Zero Interruption on Single-Color:** Exits silently within 10 milliseconds whenever 1 or fewer tool swaps are detected.

---

## Recommended Materials & When to Keep 'Off'

- **Recommended:** Standard quality PLA, PLA+, and PETG in active multi-color rotation.
- **Set to 'Off (Stock)' for:**
  - **Water-soluble support materials (PVA / BVOH):** These materials degrade and crystallize quickly when subjected to repeated heating in the dock.
  - **Budget / low-temperature PLA:** Filaments with heavy plasticizers or unusually low glass transition temperatures ($T_g$) can soften prematurely inside the heatbreak.
  - **Flexible filaments (TPU):** Tend to buckle or swell if preheated while stationary.
- **Rule of thumb:** If you are unsure about a specific specialty filament, simply leave that individual toolhead toggled to **Off (Stock)**.

---

## OrcaSlicer Setup (1 Minute)

1. Open **OrcaSlicer**.
2. Navigate to **Print Settings (Process)** -> **Output options** -> **Post-processing scripts**.
3. Add the following line:
   ```text
   python "C:\Users\torst\Antigravity\Workspace\Snapmaker_U1\tools\u1_smart_preheat\u1_smart_preheat.py";
   ```
   *(Ensure the trailing semicolon is included).*
4. Save your preset.

When slicing a multi-color model, the clean optimizer window will appear. Click **✅ Optimize & Proceed** to apply the lookahead and send the job to your printer.

---

## Disclaimer
*This software is an independent open-source community tool and is not affiliated with Snapmaker or OrcaSlicer. Provided 'as is' without warranties of any kind. 3D printing results depend heavily on material properties, ambient temperature, and printer condition. The author assumes no liability for print defects, nozzle clogging, or hardware wear.*
