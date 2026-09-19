"use client";

import React, { memo } from "react";

interface Props {
  countryId: string;
  color?: string;
  isDark?: boolean;
}

interface MicroLandmarkConfig {
  iata: string;
  renderLandmark: (stroke: string, fill: string) => React.ReactNode;
}

const MICRO_LANDMARKS: Record<string, MicroLandmarkConfig> = {
  // 1. India — Taj Mahal Dome & Minarets
  india: {
    iata: "DEL",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Left Minaret */}
        <line x1="16" y1="92" x2="16" y2="48" stroke={stroke} strokeWidth="1" />
        <ellipse cx="16" cy="47" rx="2" ry="1" stroke={stroke} strokeWidth="0.8" fill={fill} />
        {/* Main Dome */}
        <path
          d="M 32 92 L 32 68 L 36 68 Q 36 48 50 42 Q 50 36 50.5 32 Q 51 36 51 42 Q 65 48 65 68 L 69 68 L 69 92 Z"
          stroke={stroke}
          strokeWidth="1.2"
          fill={fill}
        />
        {/* Central Iwan Arch */}
        <path d="M 44 92 L 44 72 Q 50.5 64 57 72 L 57 92 Z" stroke={stroke} strokeWidth="0.9" fill="none" />
        {/* Right Minaret */}
        <line x1="84" y1="92" x2="84" y2="48" stroke={stroke} strokeWidth="1" />
        <ellipse cx="84" cy="47" rx="2" ry="1" stroke={stroke} strokeWidth="0.8" fill={fill} />
      </g>
    ),
  },

  // 2. Saudi Arabia — Kaaba + Kingdom Centre
  "saudi-arabia": {
    iata: "RUH",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Kaaba (Left) */}
        <rect x="14" y="58" width="30" height="34" rx="1.5" stroke={stroke} strokeWidth="1.2" fill={fill} />
        <line x1="14" y1="65" x2="44" y2="65" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="2 1" />
        {/* Kingdom Centre Tower (Right) */}
        <path d="M 64 92 L 69 36 Q 77 31 85 36 L 90 92 Z" stroke={stroke} strokeWidth="1.2" fill={fill} />
        <path d="M 72 41 Q 77 62 82 41" stroke={stroke} strokeWidth="1.2" fill="none" />
      </g>
    ),
  },

  // 3. UAE (Dubai) — Burj Khalifa + Burj Al Arab
  uae: {
    iata: "DXB",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Burj Al Arab Sail (Left) */}
        <path d="M 16 92 L 16 48 Q 44 65 38 92 Z" stroke={stroke} strokeWidth="1.2" fill={fill} />
        {/* Burj Khalifa Spire (Right) */}
        <path
          d="M 66 92 L 67 74 L 70 74 L 71 56 L 74 56 L 75 38 L 76.5 20 L 78 38 L 79 56 L 82 56 L 83 74 L 86 74 L 87 92 Z"
          stroke={stroke}
          strokeWidth="1.2"
          fill={fill}
        />
        <line x1="76.5" y1="20" x2="76.5" y2="8" stroke={stroke} strokeWidth="1.2" />
      </g>
    ),
  },

  // 4. Malaysia — Petronas Twin Towers
  malaysia: {
    iata: "KUL",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Tower 1 */}
        <path d="M 28 92 L 30 52 L 35 34 L 37 52 L 39 92 Z" stroke={stroke} strokeWidth="1.1" fill={fill} />
        <line x1="33.5" y1="34" x2="33.5" y2="20" stroke={stroke} strokeWidth="1.2" />
        {/* Skybridge */}
        <rect x="38" y="58" width="18" height="4" stroke={stroke} strokeWidth="0.8" fill={fill} />
        {/* Tower 2 */}
        <path d="M 55 92 L 57 52 L 62 34 L 64 52 L 66 92 Z" stroke={stroke} strokeWidth="1.1" fill={fill} />
        <line x1="60.5" y1="34" x2="60.5" y2="20" stroke={stroke} strokeWidth="1.2" />
      </g>
    ),
  },

  // 5. Singapore — Marina Bay Sands
  singapore: {
    iata: "SIN",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* 3 Towers */}
        <path d="M 24 92 L 27 50 L 33 50 L 35 92 Z" stroke={stroke} strokeWidth="1" fill={fill} />
        <path d="M 43 92 L 44 50 L 51 50 L 52 92 Z" stroke={stroke} strokeWidth="1" fill={fill} />
        <path d="M 60 92 L 61 50 L 67 50 L 70 92 Z" stroke={stroke} strokeWidth="1" fill={fill} />
        {/* SkyPark Ship Deck */}
        <path d="M 18 50 Q 48 44 78 47 Q 48 53 18 50 Z" stroke={stroke} strokeWidth="1.3" fill={fill} />
        {/* Supertree */}
        <path d="M 86 92 Q 87 72 84 62 Q 88 72 89 92" stroke={stroke} strokeWidth="1" fill="none" />
        <ellipse cx="86" cy="62" rx="6" ry="3" stroke={stroke} strokeWidth="0.9" fill="none" />
      </g>
    ),
  },

  // 6. Thailand — Wat Arun Pagoda Prang
  thailand: {
    iata: "BKK",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Thai Temple Roof (Left) */}
        <path d="M 14 92 L 14 74 L 32 58 L 50 74 L 50 92" stroke={stroke} strokeWidth="1" fill="none" />
        <path d="M 10 74 Q 32 54 54 74" stroke={stroke} strokeWidth="1.2" fill="none" />
        {/* Central Pagoda Prang (Right) */}
        <path
          d="M 64 92 L 66 72 L 69 52 L 73 30 L 77 52 L 80 72 L 82 92 Z"
          stroke={stroke}
          strokeWidth="1.2"
          fill={fill}
        />
        <line x1="73" y1="30" x2="73" y2="16" stroke={stroke} strokeWidth="1.2" />
      </g>
    ),
  },

  // 7. UK — Big Ben
  uk: {
    iata: "LHR",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Elizabeth Tower */}
        <path d="M 38 92 L 38 48 L 44 26 L 47 16 L 50 26 L 56 48 L 56 92 Z" stroke={stroke} strokeWidth="1.2" fill={fill} />
        {/* Clock Face */}
        <circle cx="47" cy="55" r="4.5" stroke={stroke} strokeWidth="1" fill="none" />
        {/* Tower Bridge Arch Hint (Right) */}
        <path d="M 68 92 Q 80 72 92 92" stroke={stroke} strokeWidth="1" strokeDasharray="2 2" fill="none" />
      </g>
    ),
  },

  // 8. USA — Statue of Liberty + Empire State
  usa: {
    iata: "JFK",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Statue of Liberty Silhouette (Left) */}
        <rect x="20" y="74" width="16" height="18" stroke={stroke} strokeWidth="0.9" fill="none" />
        <path d="M 24 74 L 27 46 L 31 46 L 33 74 Z" stroke={stroke} strokeWidth="1" fill={fill} />
        <line x1="31" y1="48" x2="38" y2="34" stroke={stroke} strokeWidth="1.2" />
        <circle cx="38.5" cy="33" r="1.5" stroke="#f59e0b" strokeWidth="1" fill="#f59e0b" />
        {/* Empire State Spire (Right) */}
        <path d="M 65 92 L 67 66 L 71 44 L 73 24 L 75 44 L 79 66 L 81 92 Z" stroke={stroke} strokeWidth="1.2" fill={fill} />
        <line x1="73" y1="24" x2="73" y2="12" stroke={stroke} strokeWidth="1.3" />
      </g>
    ),
  },

  // 9. Canada — CN Tower + Maple Leaf
  canada: {
    iata: "YYZ",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* CN Tower */}
        <path d="M 34 92 L 39 46 L 40 18 L 41 46 L 46 92 Z" stroke={stroke} strokeWidth="1.2" fill={fill} />
        <ellipse cx="40" cy="48" rx="8" ry="3.5" stroke={stroke} strokeWidth="1.1" fill={fill} />
        <line x1="40" y1="18" x2="40" y2="8" stroke={stroke} strokeWidth="1.3" />
        {/* Maple Leaf (Right) */}
        <path
          d="M 74 88 L 74 78 Q 66 76 62 70 L 68 68 L 60 58 L 68 58 L 64 50 L 72 54 L 74 44 L 76 54 L 84 50 L 80 58 L 88 58 L 80 68 L 86 70 Q 82 76 74 78 Z"
          stroke="#ef4444"
          strokeWidth="1.1"
          fill="rgba(239,68,68,0.18)"
        />
      </g>
    ),
  },

  // 10. Australia — Sydney Opera House
  australia: {
    iata: "SYD",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Harbour Bridge (Background) */}
        <path d="M 44 92 Q 70 54 94 92" stroke={stroke} strokeWidth="1.2" fill="none" />
        {/* Opera House Shells */}
        <path d="M 12 92 Q 22 62 36 92" stroke={stroke} strokeWidth="1.2" fill={fill} />
        <path d="M 28 92 Q 42 54 56 92" stroke={stroke} strokeWidth="1.3" fill={fill} />
        <path d="M 48 92 Q 60 66 72 92" stroke={stroke} strokeWidth="1.1" fill={fill} />
      </g>
    ),
  },

  // 11. Qatar — Museum of Islamic Art + Doha Tower
  qatar: {
    iata: "DOH",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Geometric Blocks */}
        <rect x="18" y="72" width="30" height="20" stroke={stroke} strokeWidth="1" fill={fill} />
        <rect x="24" y="60" width="18" height="12" stroke={stroke} strokeWidth="1" fill={fill} />
        <polygon points="28,60 33,52 38,60" stroke={stroke} strokeWidth="1" fill="none" />
        {/* Doha Tower Cylinder */}
        <path d="M 68 92 L 68 44 Q 76 34 84 44 L 84 92 Z" stroke={stroke} strokeWidth="1.2" fill={fill} />
      </g>
    ),
  },

  // 12. Kuwait — Kuwait Towers
  kuwait: {
    iata: "KWI",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Main Tower with 2 Spheres */}
        <path d="M 36 92 L 40 24 L 42 24 L 46 92" stroke={stroke} strokeWidth="1.2" fill={fill} />
        <circle cx="41" cy="58" r="9" stroke={stroke} strokeWidth="1.2" fill={fill} />
        <circle cx="41" cy="38" r="4.5" stroke={stroke} strokeWidth="1" fill={fill} />
        {/* Secondary Tower */}
        <path d="M 64 92 L 67 40 L 71 92" stroke={stroke} strokeWidth="1.1" fill={fill} />
        <circle cx="67.5" cy="62" r="6.5" stroke={stroke} strokeWidth="1.1" fill={fill} />
      </g>
    ),
  },

  // 13. Oman — Grand Mosque
  oman: {
    iata: "MCT",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Fort Battlement */}
        <rect x="16" y="68" width="18" height="24" stroke={stroke} strokeWidth="1" fill="none" />
        <line x1="16" y1="65" x2="34" y2="65" stroke={stroke} strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Mosque Dome */}
        <path d="M 40 92 L 40 76 Q 40 52 54 44 Q 68 52 68 76 L 68 92 Z" stroke={stroke} strokeWidth="1.2" fill={fill} />
        {/* Minaret */}
        <path d="M 78 92 L 80 40 L 82 34 L 84 40 L 86 92" stroke={stroke} strokeWidth="1.1" fill={fill} />
        <line x1="82" y1="34" x2="82" y2="24" stroke={stroke} strokeWidth="1.2" />
      </g>
    ),
  },

  // 14. Bahrain — World Trade Center
  bahrain: {
    iata: "BAH",
    renderLandmark: (stroke, fill) => (
      <g>
        <path d="M 28 92 L 31 66 Q 44 38 48 22 L 48 92 Z" stroke={stroke} strokeWidth="1.2" fill={fill} />
        <path d="M 72 92 L 69 66 Q 56 38 52 22 L 52 92 Z" stroke={stroke} strokeWidth="1.2" fill={fill} />
        {/* Wind Turbines */}
        <line x1="48" y1="44" x2="52" y2="44" stroke={stroke} strokeWidth="1.5" />
        <line x1="48" y1="60" x2="52" y2="60" stroke={stroke} strokeWidth="1.5" />
        <line x1="48" y1="76" x2="52" y2="76" stroke={stroke} strokeWidth="1.5" />
      </g>
    ),
  },

  // 15. Jordan — Petra Al-Khazneh
  jordan: {
    iata: "AMM",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Petra Treasury Facade */}
        <rect x="24" y="60" width="52" height="32" stroke={stroke} strokeWidth="1" fill={fill} />
        {/* Columns */}
        <line x1="30" y1="60" x2="30" y2="92" stroke={stroke} strokeWidth="1.2" />
        <line x1="40" y1="60" x2="40" y2="92" stroke={stroke} strokeWidth="1.2" />
        <line x1="60" y1="60" x2="60" y2="92" stroke={stroke} strokeWidth="1.2" />
        <line x1="70" y1="60" x2="70" y2="92" stroke={stroke} strokeWidth="1.2" />
        {/* Upper Pediment & Urn */}
        <polygon points="24,60 50,44 76,60" stroke={stroke} strokeWidth="1.2" fill="none" />
        <circle cx="50" cy="40" r="3" stroke={stroke} strokeWidth="1" fill={fill} />
      </g>
    ),
  },

  // 16. Italy — Colosseum + Pisa
  italy: {
    iata: "FCO",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Colosseum (Left) */}
        <path d="M 14 92 L 14 62 Q 44 54 68 62 L 68 92 Z" stroke={stroke} strokeWidth="1.2" fill={fill} />
        <path d="M 22 72 Q 26 66 30 72 M 38 72 Q 42 66 46 72 M 54 72 Q 58 66 62 72" stroke={stroke} strokeWidth="1" fill="none" />
        {/* Leaning Tower of Pisa (Right) */}
        <g transform="rotate(7 82 92)">
          <rect x="76" y="46" width="12" height="46" stroke={stroke} strokeWidth="1.2" fill={fill} />
          <line x1="76" y1="56" x2="88" y2="56" stroke={stroke} strokeWidth="0.8" />
          <line x1="76" y1="66" x2="88" y2="66" stroke={stroke} strokeWidth="0.8" />
          <line x1="76" y1="76" x2="88" y2="76" stroke={stroke} strokeWidth="0.8" />
        </g>
      </g>
    ),
  },

  // 17. Germany — Brandenburg Gate
  germany: {
    iata: "FRA",
    renderLandmark: (stroke, fill) => (
      <g>
        <line x1="22" y1="92" x2="22" y2="66" stroke={stroke} strokeWidth="1.2" />
        <line x1="32" y1="92" x2="32" y2="66" stroke={stroke} strokeWidth="1.2" />
        <line x1="42" y1="92" x2="42" y2="66" stroke={stroke} strokeWidth="1.2" />
        <line x1="52" y1="92" x2="52" y2="66" stroke={stroke} strokeWidth="1.2" />
        <line x1="62" y1="92" x2="62" y2="66" stroke={stroke} strokeWidth="1.2" />
        <line x1="72" y1="92" x2="72" y2="66" stroke={stroke} strokeWidth="1.2" />
        {/* Pediment */}
        <rect x="18" y="60" width="58" height="6" stroke={stroke} strokeWidth="1.2" fill={fill} />
        {/* Berlin TV Tower (Right) */}
        <path d="M 85 92 L 88 30 L 91 92" stroke={stroke} strokeWidth="1" fill={fill} />
        <circle cx="88" cy="48" r="6" stroke={stroke} strokeWidth="1.1" fill={fill} />
      </g>
    ),
  },

  // 18. Japan — Mount Fuji + Torii Gate
  japan: {
    iata: "HND",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Mount Fuji */}
        <path d="M 12 92 Q 44 48 50 36 L 60 36 Q 66 48 98 92 Z" stroke={stroke} strokeWidth="1.2" fill={fill} />
        <path d="M 46 44 Q 55 48 64 44" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="2 1" fill="none" opacity="0.6" />
        {/* Torii Gate (Right) */}
        <line x1="72" y1="92" x2="73" y2="62" stroke="#ef4444" strokeWidth="1.6" />
        <line x1="88" y1="92" x2="87" y2="62" stroke="#ef4444" strokeWidth="1.6" />
        <path d="M 68 60 Q 80 56 92 60" stroke="#ef4444" strokeWidth="2.2" fill="none" />
      </g>
    ),
  },

  // 19. South Korea — N Seoul Tower + Palace
  "south-korea": {
    iata: "ICN",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* N Seoul Tower */}
        <path d="M 28 92 L 31 34 L 33 22 L 35 34 L 38 92" stroke={stroke} strokeWidth="1.1" fill={fill} />
        <ellipse cx="33" cy="40" rx="6" ry="2.5" stroke={stroke} strokeWidth="1" fill={fill} />
        {/* Palace Curved Eaves (Right) */}
        <rect x="52" y="74" width="34" height="18" stroke={stroke} strokeWidth="1" fill={fill} />
        <path d="M 46 74 Q 69 64 92 74" stroke={stroke} strokeWidth="1.8" fill="none" />
      </g>
    ),
  },

  // 20. Turkey — Hagia Sophia
  turkey: {
    iata: "IST",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Dome */}
        <path d="M 32 92 L 32 72 Q 32 50 50 44 Q 68 50 68 72 L 68 92 Z" stroke={stroke} strokeWidth="1.2" fill={fill} />
        {/* Minarets */}
        <line x1="24" y1="92" x2="24" y2="40" stroke={stroke} strokeWidth="1" />
        <line x1="76" y1="92" x2="76" y2="40" stroke={stroke} strokeWidth="1" />
      </g>
    ),
  },

  // 21. Maldives — Overwater Villa + Palm
  maldives: {
    iata: "MLE",
    renderLandmark: (stroke, fill) => (
      <g>
        {/* Ocean Wave */}
        <line x1="10" y1="84" x2="90" y2="84" stroke={stroke} strokeWidth="0.8" strokeDasharray="3 2" />
        {/* Overwater Villa */}
        <line x1="28" y1="74" x2="28" y2="88" stroke={stroke} strokeWidth="1.2" />
        <line x1="48" y1="74" x2="48" y2="88" stroke={stroke} strokeWidth="1.2" />
        <rect x="26" y="62" width="24" height="14" stroke={stroke} strokeWidth="1" fill={fill} />
        <polygon points="22,62 38,48 54,62" stroke={stroke} strokeWidth="1.2" fill={fill} />
        {/* Palm Tree */}
        <path d="M 76 92 Q 74 70 68 56" stroke={stroke} strokeWidth="1.6" fill="none" />
        <path d="M 68 56 Q 56 50 52 56 M 68 56 Q 72 44 78 48 M 68 56 Q 80 58 84 64" stroke="#10b981" strokeWidth="1.1" fill="none" />
      </g>
    ),
  },
};

export const MiniCardAmbientBg = memo(function MiniCardAmbientBg({
  countryId,
  color = "#0ea5e9",
  isDark = true,
}: Props) {
  const config = MICRO_LANDMARKS[countryId] || MICRO_LANDMARKS.india;

  const strokeColor = color;
  const strokeOpacity = isDark ? 0.32 : 0.22;
  const fillColor = isDark ? `${color}18` : `${color}0D`;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl select-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {/* ══ LAYER 1: Ambient Breathing Aura ══ */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${color}2A 0%, transparent 72%)`,
          animation: "ambientBreathe 4s ease-in-out infinite alternate",
          willChange: "transform, opacity",
        }}
      />

      {/* ══ LAYERS 2-7: Master Micro Inline SVG ══ */}
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Layer 2: Micro Dot Matrix */}
          <pattern
            id={`microGrid-${countryId}`}
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="6"
              cy="6"
              r="0.6"
              fill={color}
              opacity={isDark ? "0.14" : "0.08"}
            />
          </pattern>
        </defs>

        {/* ── LAYER 2: Texture Grid ── */}
        <rect width="100%" height="100%" fill={`url(#microGrid-${countryId})`} />

        {/* ── LAYER 3: IATA Stamp in Bottom-Left ── */}
        <text
          x="7"
          y="93"
          fill={color}
          opacity={isDark ? 0.42 : 0.3}
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            fontSize: "7.5px",
            letterSpacing: "0.08em",
            fontWeight: 800,
          }}
        >
          {config.iata}
        </text>

        {/* ── LAYER 4: Orbital Flight Trajectory Arc ── */}
        <path
          d="M 8 78 Q 45 22 92 45"
          stroke={color}
          strokeWidth="0.8"
          strokeDasharray="3 3"
          fill="none"
          opacity={isDark ? 0.25 : 0.16}
        />

        {/* ── LAYER 5: Micro Landmark Watermark ── */}
        <g opacity={strokeOpacity}>
          {config.renderLandmark(strokeColor, fillColor)}
        </g>

        {/* ── LAYER 6: Waypoint Beacon ── */}
        <circle cx="92" cy="45" r="1.5" fill={color} opacity={isDark ? 0.6 : 0.4} />
      </svg>
    </div>
  );
});
