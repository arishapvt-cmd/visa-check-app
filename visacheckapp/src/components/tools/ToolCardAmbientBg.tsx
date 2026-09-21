"use client";

import React, { memo } from "react";

export type ToolCardType = "calculator" | "currency" | "scanner" | "checklist";

interface ToolCardAmbientBgProps {
  toolType: ToolCardType;
  isDark?: boolean;
}

export const ToolCardAmbientBg = memo(function ToolCardAmbientBg({
  toolType,
  isDark = true,
}: ToolCardAmbientBgProps) {
  return (
    <div
      className="ambient-canvas-wrapper absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none rounded-2xl"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {/* ── TOOL 1: OVERSTAY FINE CALCULATOR (Crimson / Amber Warning Theme) ── */}
      {toolType === "calculator" && (
        <>
          {/* Layer 1: Ambient Glow Orbs */}
          <div
            className="ambient-orb absolute -top-8 -left-8 w-28 h-28 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(239, 68, 68, 0.30) 0%, transparent 70%)",
              filter: "blur(24px)",
              willChange: "transform",
              animation: "ambientOrbFloat 14s ease-in-out infinite alternate",
            }}
          />
          <div
            className="ambient-orb absolute -bottom-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, transparent 70%)",
              filter: "blur(22px)",
              willChange: "transform",
              animation: "ambientOrbFloat 16s ease-in-out infinite alternate-reverse",
            }}
          />

          {/* Layer 2-7: Master Inline SVG Canvas */}
          <svg
            className="w-full h-full absolute inset-0"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Layer 2 Pattern: Fine Alert Coordinate Matrix */}
              <pattern id="calcGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="0.7" fill="#ef4444" opacity="0.14" />
                <path d="M 7 8 L 9 8 M 8 7 L 8 9" stroke="#f59e0b" strokeWidth="0.4" opacity="0.10" />
              </pattern>

              {/* Layer 4 Gradient: Warning Dash Flow */}
              <linearGradient id="calcFlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#f87171" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
              </linearGradient>

              {/* Radar Sweep Gradient */}
              <linearGradient id="radarSweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Layer 2: Texture Grid */}
            <rect width="100%" height="100%" fill="url(#calcGrid)" />

            {/* Layer 3: Telemetry HUD Data */}
            <g
              fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
              fontSize="6"
              fontWeight="700"
              opacity="0.42"
            >
              <text x="8" y="13" fill="#ef4444">FINE: 50 AED/D</text>
              <text x="192" y="13" textAnchor="end" fill="#f59e0b">OUTPASS: 300</text>
              <text x="8" y="113" fill="#f87171">DAYS: OVERSTAY</text>
              <text x="192" y="113" textAnchor="end" fill="#ef4444">CALC: ACTIVE</text>
            </g>

            {/* Layer 4: Dynamic Trajectory Warning Flow */}
            <path
              d="M 10 95 C 60 40, 130 90, 190 35"
              stroke="#ef4444"
              strokeWidth="0.8"
              opacity="0.15"
              fill="none"
            />
            <path
              d="M 10 95 C 60 40, 130 90, 190 35"
              stroke="url(#calcFlowGrad)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              className="ambient-flow-dash"
              fill="none"
            />

            {/* Layer 5: Domain Anchor Module (Warning Radar Sweep) */}
            <g transform="translate(162, 38)" opacity="0.32">
              <circle r="22" stroke="#ef4444" strokeWidth="0.7" fill="none" strokeDasharray="3 3" />
              <circle r="12" stroke="#f59e0b" strokeWidth="0.6" fill="none" />
              <line x1="-22" y1="0" x2="22" y2="0" stroke="#ef4444" strokeWidth="0.5" />
              <line x1="0" y1="-22" x2="0" y2="22" stroke="#ef4444" strokeWidth="0.5" />
              <path
                d="M 0 0 L 20 -8 A 22 22 0 0 0 15 -16 Z"
                fill="url(#radarSweepGrad)"
                style={{ transformOrigin: "0px 0px", animation: "radarSweep 7s linear infinite" }}
              />
            </g>

            {/* Layer 6: Kinetic Cruising Entity (Alert Beacon Pulse) */}
            <circle cx="120" cy="72" r="2" fill="#ef4444" opacity="0.8" />
            <circle
              cx="120"
              cy="72"
              r="6"
              stroke="#ef4444"
              strokeWidth="0.8"
              fill="none"
              style={{ animation: "beaconPulse 2.4s ease-out infinite" }}
            />

            {/* Layer 7: Atmospheric Dust & Micro-Sparkles */}
            <circle cx="32" cy="42" r="0.8" fill="#f59e0b" opacity="0.45" />
            <circle cx="82" cy="22" r="0.7" fill="#ef4444" opacity="0.35" />
            <circle cx="145" cy="98" r="0.9" fill="#fca5a5" opacity="0.4" />
          </svg>
        </>
      )}

      {/* ── TOOL 2: CURRENCY CONVERTER (Emerald / Gold Wealth & Remittance Theme) ── */}
      {toolType === "currency" && (
        <>
          {/* Layer 1: Ambient Glow Orbs */}
          <div
            className="ambient-orb absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.32) 0%, transparent 70%)",
              filter: "blur(24px)",
              willChange: "transform",
              animation: "ambientOrbFloat 13s ease-in-out infinite alternate",
            }}
          />
          <div
            className="ambient-orb absolute -bottom-8 -left-8 w-28 h-28 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(217, 177, 92, 0.24) 0%, transparent 70%)",
              filter: "blur(22px)",
              willChange: "transform",
              animation: "ambientOrbFloat 15s ease-in-out infinite alternate-reverse",
            }}
          />

          {/* Layer 2-7: Master Inline SVG Canvas */}
          <svg
            className="w-full h-full absolute inset-0"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Layer 2 Pattern: Financial Dot Grid */}
              <pattern id="currGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="0.7" fill="#10b981" opacity="0.14" />
              </pattern>

              {/* Layer 4 Gradient: Remittance Dash Flow */}
              <linearGradient id="currFlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#34d399" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#D9B15C" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Layer 2: Texture Grid */}
            <rect width="100%" height="100%" fill="url(#currGrid)" />

            {/* Layer 3: Telemetry HUD Data */}
            <g
              fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
              fontSize="6"
              fontWeight="700"
              opacity="0.42"
            >
              <text x="8" y="13" fill="#10b981">FX: SAR/BDT 32.55</text>
              <text x="192" y="13" textAnchor="end" fill="#D9B15C">BONUS: 2.5%</text>
              <text x="8" y="113" fill="#34d399">AED: 33.10</text>
              <text x="192" y="113" textAnchor="end" fill="#10b981">KWD: 405.20</text>
            </g>

            {/* Layer 4: Dynamic Trajectory Financial Flow Curve */}
            <path
              d="M 8 98 C 50 102, 90 58, 140 68 S 192 24, 192 24"
              stroke="#10b981"
              strokeWidth="0.8"
              opacity="0.15"
              fill="none"
            />
            <path
              d="M 8 98 C 50 102, 90 58, 140 68 S 192 24, 192 24"
              stroke="url(#currFlowGrad)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              className="ambient-flow-dash"
              fill="none"
            />

            {/* Layer 5: Domain Anchor Module (Currency Node Matrix) */}
            <g opacity="0.35">
              <line x1="140" y1="38" x2="170" y2="24" stroke="#10b981" strokeWidth="0.7" />
              <line x1="170" y1="24" x2="162" y2="52" stroke="#D9B15C" strokeWidth="0.7" />
              {/* Dollar Node */}
              <circle cx="140" cy="38" r="5" stroke="#10b981" fill="#062e20" strokeWidth="0.7" />
              <text x="140" y="40" textAnchor="middle" fill="#34d399" fontSize="4.5" fontWeight="bold">$</text>
              {/* Riyal Node */}
              <circle cx="170" cy="24" r="6" stroke="#D9B15C" fill="#241e0a" strokeWidth="0.7" />
              <text x="170" y="26" textAnchor="middle" fill="#F3D89B" fontSize="4.5" fontWeight="bold">﷼</text>
              {/* Taka Node */}
              <circle cx="162" cy="52" r="5.5" stroke="#10b981" fill="#062e20" strokeWidth="0.7" />
              <text x="162" y="54" textAnchor="middle" fill="#34d399" fontSize="4.5" fontWeight="bold">৳</text>
            </g>

            {/* Layer 6: Kinetic Cruising Entity (Remittance Pulse Beacon) */}
            <circle cx="95" cy="62" r="2" fill="#D9B15C" opacity="0.8" />
            <circle
              cx="95"
              cy="62"
              r="6"
              stroke="#10b981"
              strokeWidth="0.8"
              fill="none"
              style={{ animation: "beaconPulse 2.8s ease-out infinite" }}
            />

            {/* Layer 7: Atmospheric Dust & Micro-Sparkles */}
            <circle cx="38" cy="28" r="0.8" fill="#34d399" opacity="0.4" />
            <circle cx="118" cy="18" r="0.7" fill="#D9B15C" opacity="0.4" />
            <circle cx="72" cy="94" r="0.9" fill="#6ee7b7" opacity="0.35" />
          </svg>
        </>
      )}

      {/* ── TOOL 3: VISA QR SCANNER (Sky Cyan / Laser Tech Theme) ── */}
      {toolType === "scanner" && (
        <>
          {/* Layer 1: Ambient Glow Orbs */}
          <div
            className="ambient-orb absolute top-2 -left-8 w-28 h-28 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(56, 189, 248, 0.32) 0%, transparent 70%)",
              filter: "blur(24px)",
              willChange: "transform",
              animation: "ambientOrbFloat 14s ease-in-out infinite alternate",
            }}
          />
          <div
            className="ambient-orb absolute -bottom-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)",
              filter: "blur(22px)",
              willChange: "transform",
              animation: "ambientOrbFloat 16s ease-in-out infinite alternate-reverse",
            }}
          />

          {/* Layer 2-7: Master Inline SVG Canvas */}
          <svg
            className="w-full h-full absolute inset-0"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Layer 2 Pattern: 2D Digital QR Grid */}
              <pattern id="scanGrid" width="14" height="14" patternUnits="userSpaceOnUse">
                <rect x="5" y="5" width="2.5" height="2.5" fill="#38bdf8" opacity="0.12" rx="0.5" />
              </pattern>

              {/* Layer 4 Gradient: Data Bus Line */}
              <linearGradient id="scanFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#818cf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
              </linearGradient>

              {/* Laser Beam Gradient */}
              <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="75%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Layer 2: Texture Grid */}
            <rect width="100%" height="100%" fill="url(#scanGrid)" />

            {/* Layer 3: Telemetry HUD Data */}
            <g
              fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
              fontSize="6"
              fontWeight="700"
              opacity="0.42"
            >
              <text x="8" y="13" fill="#38bdf8">QR: 2D MATRIX</text>
              <text x="192" y="13" textAnchor="end" fill="#818cf8">TLS: VERIFIED</text>
              <text x="8" y="113" fill="#67e8f9">DECODE: RAW</text>
              <text x="192" y="113" textAnchor="end" fill="#38bdf8">SCAN: ACTIVE</text>
            </g>

            {/* Layer 4: Data Bus Scanning Stroke */}
            <line
              x1="8"
              y1="22"
              x2="192"
              y2="22"
              stroke="url(#scanFlowGrad)"
              strokeWidth="1"
              strokeDasharray="6 6"
              className="ambient-flow-dash"
            />

            {/* Layer 5: Domain Anchor Module (Targeting Reticle Corner Brackets) */}
            <g opacity="0.36" stroke="#38bdf8" strokeWidth="1" fill="none">
              {/* Top-Left Bracket */}
              <path d="M 18 36 L 18 24 L 30 24" />
              {/* Top-Right Bracket */}
              <path d="M 182 36 L 182 24 L 170 24" />
              {/* Bottom-Left Bracket */}
              <path d="M 18 84 L 18 96 L 30 96" />
              {/* Bottom-Right Bracket */}
              <path d="M 182 84 L 182 96 L 170 96" />

              {/* Central Aim Reticle Crosshairs */}
              <line x1="94" y1="60" x2="106" y2="60" stroke="#38bdf8" strokeWidth="0.6" opacity="0.5" />
              <line x1="100" y1="54" x2="100" y2="66" stroke="#38bdf8" strokeWidth="0.6" opacity="0.5" />
            </g>

            {/* Layer 6: Kinetic Cruising Entity (Animated Horizontal Laser Beam) */}
            <g style={{ animation: "qrLaserScan 3.2s ease-in-out infinite alternate" }}>
              <line x1="22" y1="32" x2="178" y2="32" stroke="url(#laserBeamGrad)" strokeWidth="1.6" />
              <circle cx="100" cy="32" r="1.5" fill="#ffffff" />
            </g>

            {/* Layer 7: Atmospheric Dust & Micro-Sparkles */}
            <circle cx="48" cy="46" r="0.8" fill="#38bdf8" opacity="0.4" />
            <circle cx="152" cy="68" r="0.7" fill="#818cf8" opacity="0.35" />
            <circle cx="108" cy="98" r="0.9" fill="#67e8f9" opacity="0.4" />
          </svg>
        </>
      )}

      {/* ── TOOL 4: TRAVEL CHECKLIST (Aviation Gold / Sky Journey Theme) ── */}
      {toolType === "checklist" && (
        <>
          {/* Layer 1: Ambient Glow Orbs */}
          <div
            className="ambient-orb absolute -top-8 -left-8 w-28 h-28 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(217, 177, 92, 0.32) 0%, transparent 70%)",
              filter: "blur(24px)",
              willChange: "transform",
              animation: "ambientOrbFloat 15s ease-in-out infinite alternate",
            }}
          />
          <div
            className="ambient-orb absolute -bottom-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.24) 0%, transparent 70%)",
              filter: "blur(22px)",
              willChange: "transform",
              animation: "ambientOrbFloat 17s ease-in-out infinite alternate-reverse",
            }}
          />

          {/* Layer 2-7: Master Inline SVG Canvas */}
          <svg
            className="w-full h-full absolute inset-0"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Layer 2 Pattern: Aviation Coordinate Grid */}
              <pattern id="travelGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="0.6" fill="#D9B15C" opacity="0.15" />
                <path d="M 7.5 8 L 8.5 8 M 8 7.5 L 8 8.5" stroke="#38bdf8" strokeWidth="0.4" opacity="0.12" />
              </pattern>

              {/* Layer 4 Gradient: Flight Departure Dash Flow */}
              <linearGradient id="travelFlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D9B15C" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#F3D89B" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Layer 2: Texture Grid */}
            <rect width="100%" height="100%" fill="url(#travelGrid)" />

            {/* Layer 3: Telemetry HUD Data */}
            <g
              fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
              fontSize="6"
              fontWeight="700"
              opacity="0.42"
            >
              <text x="8" y="13" fill="#D9B15C">BMET: SMART CARD</text>
              <text x="192" y="13" textAnchor="end" fill="#38bdf8">OFFLOAD: SAFE</text>
              <text x="8" y="113" fill="#F3D89B">DAC → DXB</text>
              <text x="192" y="113" textAnchor="end" fill="#D9B15C">16/16 READY</text>
            </g>

            {/* Layer 4: Dynamic Trajectory Flight Arc Flow */}
            <path
              d="M 12 102 Q 85 20 188 40"
              stroke="#D9B15C"
              strokeWidth="0.8"
              opacity="0.16"
              fill="none"
            />
            <path
              d="M 12 102 Q 85 20 188 40"
              stroke="url(#travelFlowGrad)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              className="ambient-flow-dash"
              fill="none"
            />

            {/* Layer 5: Domain Anchor Module (Aviation Waypoint Radar & Vector) */}
            <g transform="translate(162, 36)" opacity="0.34">
              <circle r="18" stroke="#38bdf8" strokeWidth="0.7" fill="none" strokeDasharray="2 3" />
              <circle r="9" stroke="#D9B15C" strokeWidth="0.6" fill="none" />
              {/* Flight Vector Arrow */}
              <path d="M -3 3 L 6 -5 L 3 5 Z" fill="#F3D89B" />
            </g>

            {/* Layer 6: Kinetic Cruising Entity (Aviation Waypoint Pulse Beacon) */}
            <circle cx="85" cy="42" r="2" fill="#F3D89B" opacity="0.85" />
            <circle
              cx="85"
              cy="42"
              r="6"
              stroke="#38bdf8"
              strokeWidth="0.8"
              fill="none"
              style={{ animation: "beaconPulse 2.6s ease-out infinite" }}
            />

            {/* Layer 7: Atmospheric Dust & Micro-Sparkles */}
            <circle cx="34" cy="34" r="0.8" fill="#F3D89B" opacity="0.45" />
            <circle cx="122" cy="82" r="0.7" fill="#38bdf8" opacity="0.4" />
            <circle cx="168" cy="94" r="0.9" fill="#D9B15C" opacity="0.35" />
          </svg>
        </>
      )}
    </div>
  );
});
