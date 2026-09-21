"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronDown, ChevronUp, ShieldCheck, ArrowRight, Clock, DollarSign, CheckCircle2, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { COUNTRIES, type VisaType, type Country } from "@/data/countries";
import GoldenGlassTitle from "@/components/GoldenGlassTitle";
import { playSweetTune } from "@/lib/sound";

/* ─── 20 Countries Guide Metadata (Style A Holographic Squircle) ─ */
interface GuideCountryItem {
  id: string;
  flag: string;
  namebn: string;
  nameEn: string;
  color: string;
  iata: string;
  badgeBn: string;
  badgeEn: string;
  landmark: (stroke: string, fill: string) => React.ReactNode;
}

const GUIDE_COUNTRIES: GuideCountryItem[] = [
  // 1. Saudi Arabia (Kaaba + Kingdom Centre)
  {
    id: "saudi-arabia",
    flag: "🇸🇦",
    namebn: "সৌদি আরব",
    nameEn: "Saudi Arabia",
    color: "#10b981",
    iata: "KSA",
    badgeBn: "জনপ্রিয়",
    badgeEn: "Popular",
    landmark: (s, f) => (
      <g>
        <rect x="14" y="58" width="28" height="34" rx="2" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="14" y1="66" x2="42" y2="66" stroke="#f59e0b" strokeWidth="1.3" strokeDasharray="2 1" />
        <path d="M 62 92 L 68 34 Q 76 29 84 34 L 90 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <path d="M 71 40 Q 76 60 81 40" stroke={s} strokeWidth="1.1" fill="none" />
      </g>
    ),
  },
  // 2. Malaysia (Petronas Twin Towers)
  {
    id: "malaysia",
    flag: "🇲🇾",
    namebn: "মালয়েশিয়া",
    nameEn: "Malaysia",
    color: "#06b6d4",
    iata: "MYS",
    badgeBn: "ই-ভিসা",
    badgeEn: "e-Visa",
    landmark: (s, f) => (
      <g>
        <path d="M 28 92 L 30 38 L 33 22 L 35 38 L 37 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="33" y1="22" x2="33" y2="12" stroke={s} strokeWidth="1" />
        <path d="M 63 92 L 65 38 L 68 22 L 70 38 L 72 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="68" y1="22" x2="68" y2="12" stroke={s} strokeWidth="1" />
        <line x1="36" y1="52" x2="64" y2="52" stroke={s} strokeWidth="1.4" />
      </g>
    ),
  },
  // 3. UAE (Burj Khalifa + Burj Al Arab)
  {
    id: "uae",
    flag: "🇦🇪",
    namebn: "ইউএই (UAE)",
    nameEn: "UAE / Dubai",
    color: "#00732F",
    iata: "UAE",
    badgeBn: "দ্রুততম",
    badgeEn: "Fastest",
    landmark: (s, f) => (
      <g>
        <path d="M 38 92 L 44 48 L 47 28 L 50 10 L 53 28 L 56 48 L 62 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="50" y1="10" x2="50" y2="3" stroke={s} strokeWidth="1.1" />
        <path d="M 72 92 Q 88 64 74 38 L 72 92 Z" stroke={s} strokeWidth="1.1" fill={f} />
      </g>
    ),
  },
  // 4. Qatar (Aspire Tower)
  {
    id: "qatar",
    flag: "🇶🇦",
    namebn: "কাতার",
    nameEn: "Qatar",
    color: "#8D1B3D",
    iata: "QAT",
    badgeBn: "হাই ডিমান্ড",
    badgeEn: "High Demand",
    landmark: (s, f) => (
      <g>
        <path d="M 34 92 Q 48 54 44 26 L 46 16 L 54 16 L 56 26 Q 52 54 66 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <ellipse cx="50" cy="16" rx="4" ry="2" stroke={s} strokeWidth="1" fill={f} />
        <circle cx="50" cy="11" r="2" stroke="#f59e0b" strokeWidth="1" fill="none" />
      </g>
    ),
  },
  // 5. Kuwait (Kuwait Towers)
  {
    id: "kuwait",
    flag: "🇰🇼",
    namebn: "কুয়েত",
    nameEn: "Kuwait",
    color: "#007A3D",
    iata: "KWT",
    badgeBn: "কাজের ভিসা",
    badgeEn: "Work Visa",
    landmark: (s, f) => (
      <g>
        <path d="M 32 92 L 36 30 L 38 12 L 40 30 L 44 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <circle cx="38" cy="52" r="7" stroke={s} strokeWidth="1.1" fill={f} />
        <circle cx="38" cy="30" r="4.5" stroke={s} strokeWidth="1" fill={f} />
        <line x1="38" y1="12" x2="38" y2="4" stroke={s} strokeWidth="1" />
        <path d="M 64 92 L 67 44 L 70 92 Z" stroke={s} strokeWidth="1" fill={f} />
        <circle cx="67" cy="56" r="4.5" stroke={s} strokeWidth="1" fill={f} />
      </g>
    ),
  },
  // 6. Oman (Sultan Qaboos Mosque)
  {
    id: "oman",
    flag: "🇴🇲",
    namebn: "ওমান",
    nameEn: "Oman",
    color: "#DB161B",
    iata: "OMN",
    badgeBn: "সহজ চেক",
    badgeEn: "Easy Check",
    landmark: (s, f) => (
      <g>
        <line x1="18" y1="92" x2="18" y2="40" stroke={s} strokeWidth="1" />
        <ellipse cx="18" cy="39" rx="2" ry="1.2" stroke={s} strokeWidth="0.9" fill={f} />
        <path d="M 34 92 L 34 68 Q 50 42 66 68 L 66 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <path d="M 44 92 L 44 75 Q 50 68 56 75 L 56 92 Z" stroke={s} strokeWidth="1" fill="none" />
        <line x1="82" y1="92" x2="82" y2="40" stroke={s} strokeWidth="1" />
        <ellipse cx="82" cy="39" rx="2" ry="1.2" stroke={s} strokeWidth="0.9" fill={f} />
      </g>
    ),
  },
  // 7. India (Taj Mahal)
  {
    id: "india",
    flag: "🇮🇳",
    namebn: "ভারত",
    nameEn: "India",
    color: "#FF9933",
    iata: "IND",
    badgeBn: "মেডিকেল/ভ্রমণ",
    badgeEn: "Medical/Tour",
    landmark: (s, f) => (
      <g>
        <line x1="16" y1="92" x2="16" y2="46" stroke={s} strokeWidth="1" />
        <path d="M 32 92 L 32 68 Q 32 46 50 40 Q 68 46 68 68 L 68 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="50" y1="40" x2="50" y2="33" stroke={s} strokeWidth="1" />
        <path d="M 43 92 L 43 72 Q 50 65 57 72 L 57 92 Z" stroke={s} strokeWidth="1" fill="none" />
        <line x1="84" y1="92" x2="84" y2="46" stroke={s} strokeWidth="1" />
      </g>
    ),
  },
  // 8. Singapore (Marina Bay Sands)
  {
    id: "singapore",
    flag: "🇸🇬",
    namebn: "সিঙ্গাপুর",
    nameEn: "Singapore",
    color: "#EF3340",
    iata: "SGP",
    badgeBn: "ভ্রমণ/বিজনেস",
    badgeEn: "Tour/Biz",
    landmark: (s, f) => (
      <g>
        <path d="M 22 92 L 24 44 L 32 44 L 34 92 Z" stroke={s} strokeWidth="1" fill={f} />
        <path d="M 44 92 L 46 44 L 54 44 L 56 92 Z" stroke={s} strokeWidth="1" fill={f} />
        <path d="M 66 92 L 68 44 L 76 44 L 78 92 Z" stroke={s} strokeWidth="1" fill={f} />
        <path d="M 14 44 Q 50 36 88 44 L 84 49 Q 50 43 18 49 Z" stroke={s} strokeWidth="1.2" fill={f} />
      </g>
    ),
  },
  // 9. Thailand (Wat Arun)
  {
    id: "thailand",
    flag: "🇹🇭",
    namebn: "থাইল্যান্ড",
    nameEn: "Thailand",
    color: "#A51931",
    iata: "THA",
    badgeBn: "মেডিকেল ট্যুর",
    badgeEn: "Medical Tour",
    landmark: (s, f) => (
      <g>
        <path d="M 38 92 L 44 58 L 47 38 L 50 16 L 53 38 L 56 58 L 62 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="50" y1="16" x2="50" y2="8" stroke={s} strokeWidth="1" />
        <line x1="41" y1="72" x2="59" y2="72" stroke={s} strokeWidth="1" />
        <line x1="44" y1="52" x2="56" y2="52" stroke={s} strokeWidth="1" />
      </g>
    ),
  },
  // 10. UK (Big Ben)
  {
    id: "uk",
    flag: "🇬🇧",
    namebn: "যুক্তরাজ্য (UK)",
    nameEn: "United Kingdom",
    color: "#012169",
    iata: "GBR",
    badgeBn: "স্টুডেন্ট/ওয়ার্ক",
    badgeEn: "Student/Work",
    landmark: (s, f) => (
      <g>
        <rect x="36" y="44" width="28" height="48" stroke={s} strokeWidth="1.2" fill={f} />
        <path d="M 34 44 L 50 14 L 66 44 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="50" y1="14" x2="50" y2="6" stroke={s} strokeWidth="1" />
        <circle cx="50" cy="56" r="6.5" stroke={s} strokeWidth="1" fill="none" />
      </g>
    ),
  },
  // 11. USA (Statue of Liberty)
  {
    id: "usa",
    flag: "🇺🇸",
    namebn: "যুক্তরাষ্ট্র (USA)",
    nameEn: "United States",
    color: "#3C3B6E",
    iata: "USA",
    badgeBn: "গ্রিন কার্ড/ভিজিট",
    badgeEn: "GreenCard/Visit",
    landmark: (s, f) => (
      <g>
        <path d="M 40 92 L 43 50 L 57 50 L 60 92 Z" stroke={s} strokeWidth="1.1" fill={f} />
        <circle cx="50" cy="42" r="6" stroke={s} strokeWidth="1.1" fill={f} />
        <line x1="57" y1="46" x2="68" y2="24" stroke={s} strokeWidth="1.4" />
        <circle cx="69" cy="22" r="2.5" stroke="#f59e0b" strokeWidth="1" fill="#f59e0b" />
      </g>
    ),
  },
  // 12. Bahrain (Bahrain WTC)
  {
    id: "bahrain",
    flag: "🇧🇭",
    namebn: "বাহরাইন",
    nameEn: "Bahrain",
    color: "#CE1126",
    iata: "BHR",
    badgeBn: "কাজের পারমিট",
    badgeEn: "Work Permit",
    landmark: (s, f) => (
      <g>
        <path d="M 28 92 Q 40 50 42 22 L 46 22 L 46 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <path d="M 72 92 Q 60 50 58 22 L 54 22 L 54 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="46" y1="42" x2="54" y2="42" stroke={s} strokeWidth="1.2" />
        <line x1="46" y1="62" x2="54" y2="62" stroke={s} strokeWidth="1.2" />
      </g>
    ),
  },
  // 13. Jordan (Petra Treasury)
  {
    id: "jordan",
    flag: "🇯🇴",
    namebn: "জর্ডান",
    nameEn: "Jordan",
    color: "#007A3D",
    iata: "JOR",
    badgeBn: "গার্মেন্টস/কাজের",
    badgeEn: "Garments/Work",
    landmark: (s, f) => (
      <g>
        <rect x="24" y="38" width="52" height="54" stroke={s} strokeWidth="1.2" fill={f} />
        <path d="M 22 38 L 50 18 L 78 38 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="34" y1="38" x2="34" y2="92" stroke={s} strokeWidth="1" />
        <line x1="44" y1="38" x2="44" y2="92" stroke={s} strokeWidth="1" />
        <line x1="56" y1="38" x2="56" y2="92" stroke={s} strokeWidth="1" />
        <line x1="66" y1="38" x2="66" y2="92" stroke={s} strokeWidth="1" />
        <rect x="44" y="68" width="12" height="24" rx="2" stroke={s} strokeWidth="1" fill="none" />
      </g>
    ),
  },
  // 14. Australia (Sydney Opera House)
  {
    id: "australia",
    flag: "🇦🇺",
    namebn: "অস্ট্রেলিয়া",
    nameEn: "Australia",
    color: "#00008B",
    iata: "AUS",
    badgeBn: "স্টুডেন্ট/পিআর",
    badgeEn: "Student/PR",
    landmark: (s, f) => (
      <g>
        <path d="M 18 92 Q 32 58 46 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <path d="M 34 92 Q 54 44 72 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <path d="M 58 92 Q 74 54 88 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
      </g>
    ),
  },
  // 15. Canada (CN Tower)
  {
    id: "canada",
    flag: "🇨🇦",
    namebn: "কানাডা",
    nameEn: "Canada",
    color: "#FF0000",
    iata: "CAN",
    badgeBn: "এক্সপ্রেস এন্ট্রি",
    badgeEn: "Express Entry",
    landmark: (s, f) => (
      <g>
        <line x1="48" y1="92" x2="48" y2="12" stroke={s} strokeWidth="1.3" />
        <line x1="52" y1="92" x2="52" y2="12" stroke={s} strokeWidth="1.3" />
        <ellipse cx="50" cy="38" rx="10" ry="4" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="50" y1="12" x2="50" y2="4" stroke={s} strokeWidth="1" />
      </g>
    ),
  },
  // 16. Italy (Colosseum)
  {
    id: "italy",
    flag: "🇮🇹",
    namebn: "ইতালি",
    nameEn: "Italy",
    color: "#009246",
    iata: "ITA",
    badgeBn: "স্পন্সর ভিসা",
    badgeEn: "Sponsor Visa",
    landmark: (s, f) => (
      <g>
        <rect x="20" y="52" width="60" height="40" rx="3" stroke={s} strokeWidth="1.2" fill={f} />
        <path d="M 26 92 L 26 76 Q 32 70 38 76 L 38 92 Z" stroke={s} strokeWidth="1" fill="none" />
        <path d="M 44 92 L 44 76 Q 50 70 56 76 L 56 92 Z" stroke={s} strokeWidth="1" fill="none" />
        <path d="M 62 92 L 62 76 Q 68 70 74 76 L 74 92 Z" stroke={s} strokeWidth="1" fill="none" />
      </g>
    ),
  },
  // 17. Germany (Brandenburg Gate)
  {
    id: "germany",
    flag: "🇩🇪",
    namebn: "জার্মানি",
    nameEn: "Germany",
    color: "#DD0000",
    iata: "DEU",
    badgeBn: "অপরচুনিটি কার্ড",
    badgeEn: "Chancenkarte",
    landmark: (s, f) => (
      <g>
        <rect x="22" y="44" width="56" height="12" rx="1" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="28" y1="56" x2="28" y2="92" stroke={s} strokeWidth="1.2" />
        <line x1="38" y1="56" x2="38" y2="92" stroke={s} strokeWidth="1.2" />
        <line x1="50" y1="56" x2="50" y2="92" stroke={s} strokeWidth="1.2" />
        <line x1="62" y1="56" x2="62" y2="92" stroke={s} strokeWidth="1.2" />
        <line x1="72" y1="56" x2="72" y2="92" stroke={s} strokeWidth="1.2" />
        <circle cx="50" cy="38" r="4.5" stroke="#f59e0b" strokeWidth="1" fill="none" />
      </g>
    ),
  },
  // 18. Japan (Mount Fuji + Torii)
  {
    id: "japan",
    flag: "🇯🇵",
    namebn: "জাপান",
    nameEn: "Japan",
    color: "#BC002D",
    iata: "JPN",
    badgeBn: "এসএসডব্লিউ/ভ্রমণ",
    badgeEn: "SSW/Travel",
    landmark: (s, f) => (
      <g>
        <path d="M 18 92 L 40 44 Q 50 42 60 44 L 82 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="34" y1="64" x2="66" y2="64" stroke={s} strokeWidth="1.3" />
        <line x1="30" y1="58" x2="70" y2="58" stroke={s} strokeWidth="1.4" />
        <line x1="38" y1="58" x2="38" y2="92" stroke={s} strokeWidth="1.2" />
        <line x1="62" y1="58" x2="62" y2="92" stroke={s} strokeWidth="1.2" />
      </g>
    ),
  },
  // 19. South Korea (N Seoul Tower)
  {
    id: "south-korea",
    flag: "🇰🇷",
    namebn: "দক্ষিণ কোরিয়া",
    nameEn: "South Korea",
    color: "#003478",
    iata: "KOR",
    badgeBn: "ই-৯/স্টুডেন্ট",
    badgeEn: "E-9/Student",
    landmark: (s, f) => (
      <g>
        <path d="M 44 92 L 48 42 L 52 42 L 56 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <rect x="42" y="32" width="16" height="10" rx="2" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="50" y1="32" x2="50" y2="10" stroke={s} strokeWidth="1.2" />
      </g>
    ),
  },
  // 20. Turkey (Hagia Sophia)
  {
    id: "turkey",
    flag: "🇹🇷",
    namebn: "তুরস্ক",
    nameEn: "Turkey",
    color: "#E30A17",
    iata: "TUR",
    badgeBn: "ই-ভিসা/ভ্রমণ",
    badgeEn: "e-Visa/Tour",
    landmark: (s, f) => (
      <g>
        <path d="M 28 92 L 28 66 Q 50 42 72 66 L 72 92 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <line x1="16" y1="92" x2="16" y2="38" stroke={s} strokeWidth="1" />
        <line x1="84" y1="92" x2="84" y2="38" stroke={s} strokeWidth="1" />
      </g>
    ),
  },
];

const INITIAL_VISIBLE_COUNT = 6; // 2 rows of 3 cards

/* ─── Main Component ────────────────────────────────────────── */
export function CountryGuideCardsGrid() {
  const { isDark } = useTheme();
  const { t, lang } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<GuideCountryItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const visibleList = isExpanded
    ? GUIDE_COUNTRIES
    : GUIDE_COUNTRIES.slice(0, INITIAL_VISIBLE_COUNT);

  const hiddenCount = GUIDE_COUNTRIES.length - INITIAL_VISIBLE_COUNT;

  // Selected Country data from COUNTRIES registry (including all visa types)
  const fullCountryData = selectedCountry
    ? COUNTRIES.find((c) => c.id === selectedCountry.id) || null
    : null;

  return (
    <section className="px-3 mb-4 mt-2">
      {/* ══ SECTION TITLE 2 — "বিভিন্ন দেশের ভিসা পাওয়ার নিয়ম ও গাইড" (Golden Glassy Button) ══ */}
      <GoldenGlassTitle
        title={
          lang === "bn"
            ? "বিভিন্ন দেশের ভিসা পাওয়ার নিয়ম ও গাইড"
            : "Visa Rules & Country Guidelines"
        }
      />

      {/* ══ 3-COLUMN CARDS GRID (1 Row = 3 Cards) ══ */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {visibleList.map((country) => {
          const matchedCountry = COUNTRIES.find((c) => c.id === country.id);
          const visaCount = matchedCountry?.visaTypes?.length || 4;

          return (
            <motion.button
              type="button"
              key={country.id}
              whileTap={{ scale: 0.94 }}
              onClick={() => {
                playSweetTune();
                setSelectedCountry(country);
              }}
              className="group relative rounded-2xl flex flex-col items-center justify-between p-2.5 cursor-pointer overflow-hidden transition-all duration-200 outline-none select-none text-center"
              style={{
                minHeight: "132px",
                background: isDark
                  ? "linear-gradient(160deg, rgba(58, 74, 142, 0.38) 0%, rgba(27, 35, 64, 0.60) 100%)"
                  : "linear-gradient(160deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 255, 0.90) 100%)",
                border: isDark
                  ? "1px solid rgba(217, 177, 92, 0.30)"
                  : "1px solid rgba(217, 177, 92, 0.40)",
                borderRadius: "16px",
                boxShadow: isDark
                  ? "0 10px 20px rgba(0, 0, 0, 0.35)"
                  : "0 4px 14px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Flag with 2px gold gradient ring badge (rounded-squircle) */}
              <div
                className="w-12 h-12 p-[2px] rounded-[14px] flex items-center justify-center relative shadow-sm shrink-0 mt-0.5"
                style={{
                  background: "linear-gradient(135deg, #D9B15C 0%, #F3D89B 100%)",
                }}
              >
                <div
                  className="w-full h-full rounded-[12px] flex items-center justify-center overflow-hidden"
                  style={{
                    background: isDark ? "#0d1326" : "#f8fafc",
                  }}
                >
                  <span className="text-[26px] leading-none block select-none">
                    {country.flag}
                  </span>
                </div>
              </div>

              {/* Country Names */}
              <div className="w-full mt-1.5 flex flex-col items-center text-center">
                <span
                  className="font-bold text-[12px] leading-tight truncate max-w-full px-0.5"
                  style={{
                    fontFamily: "'Hind Siliguri', sans-serif",
                    color: isDark ? "#F5F6FA" : "#1e293b",
                  }}
                >
                  {lang === "bn" ? country.namebn : country.nameEn}
                </span>
                <span
                  className="text-[9px] leading-none mt-0.5 truncate max-w-full font-medium"
                  style={{ color: isDark ? "#8A8FA3" : "#64748b" }}
                >
                  {country.nameEn}
                </span>
              </div>

              {/* Gold Divider Accent */}
              <div
                className="w-[88%] my-1.5"
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(217,177,92,0) 0%, #D9B15C 15%, #F8E3AE 50%, #D9B15C 85%, rgba(217,177,92,0) 100%)",
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.35), 0 1.5px 2px rgba(0,0,0,0.45)",
                }}
              />

              {/* Visa-Count Badge (Pill) */}
              <div
                className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[9.5px] font-bold"
                style={{
                  background: "rgba(217, 177, 92, 0.15)",
                  border: "1px solid rgba(217, 177, 92, 0.40)",
                  color: "#D9B15C",
                  fontFamily: "'Hind Siliguri', sans-serif",
                }}
              >
                <span>
                  {lang === "bn" ? `${visaCount}টি ভিসা` : `${visaCount} Visas`}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>


      {/* ══ PART C — Circular Expand Button #2 (Centered below Guide Grid) ══ */}
      {GUIDE_COUNTRIES.length > INITIAL_VISIBLE_COUNT && (
        <div className="flex justify-center mt-3 mb-1">
          <motion.button
            type="button"
            aria-label="আরও দেশ দেখুন"
            onClick={() => {
              playSweetTune();
              setIsExpanded(!isExpanded);
            }}
            whileTap={{ scale: 0.9 }}
            className="w-[42px] h-[42px] rounded-full flex items-center justify-center cursor-pointer select-none"
            style={{
              background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
              border: "2px solid rgba(255, 255, 255, 0.25)",
              boxShadow:
                "0 8px 20px rgba(217, 177, 92, 0.5), 0 2px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <ChevronDown className="w-5 h-5 text-[#1B2340]" strokeWidth={2.5} />
            </motion.div>
          </motion.button>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ══ INTERACTIVE BOTTOM SHEET / PREVIEW DRAWER (Selected) ══ */}
      {/* ══════════════════════════════════════════════════════════ */}
      {mounted && selectedCountry && fullCountryData && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[99999] flex flex-col justify-end">
          {/* Backdrop */}
          <div
            onClick={() => {
              playSweetTune();
              setSelectedCountry(null);
            }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            style={{
              animation: "fadeIn 0.22s ease-out forwards",
            }}
          />

          {/* Drawer Sheet */}
          <div
            className="relative z-10 w-full rounded-t-[32px] shadow-2xl overflow-hidden"
            style={{
              height: "78%",
              maxHeight: "none",
              display: "flex",
              flexDirection: "column",
              animation: "drawerSlideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              background: isDark
                ? "linear-gradient(180deg, #0c182c 0%, #030814 100%)"
                : "linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)",
              borderTop: `2.5px solid ${selectedCountry.color}`,
              boxShadow: `0 -14px 45px rgba(0,0,0,0.88), 0 0 28px ${selectedCountry.color}45`,
              paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)",
            }}
          >
              {/* Top Drag Indicator Notch */}
              <div className="w-12 h-1.5 rounded-full bg-slate-400/40 mx-auto my-2.5 shrink-0" />

              {/* Drawer Header */}
              <div
                className="px-4 pb-3 border-b flex items-center justify-between"
                style={{
                  borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center gap-3">
                  {/* Flag in Mini Holographic Squircle */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center p-[2px] shadow-md"
                    style={{
                      background: `conic-gradient(from 0deg, ${selectedCountry.color}, #38bdf8, #818cf8, ${selectedCountry.color})`,
                    }}
                  >
                    <div
                      className="w-full h-full rounded-[14px] flex items-center justify-center"
                      style={{
                        background: isDark ? "#0d1829" : "#ffffff",
                      }}
                    >
                      <span className="text-2xl select-none">{selectedCountry.flag}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3
                        className="font-black text-base leading-tight"
                        style={{
                          fontFamily: "'Hind Siliguri', sans-serif",
                          color: isDark ? "#ffffff" : "#0f172a",
                        }}
                      >
                        {lang === "bn" ? selectedCountry.namebn : selectedCountry.nameEn}
                      </h3>
                      <div
                        className="px-2 py-0.5 rounded-full text-[9px] font-extrabold flex items-center gap-1"
                        style={{
                          background: "rgba(16, 185, 129, 0.15)",
                          color: "#10b981",
                          border: "1px solid rgba(16, 185, 129, 0.3)",
                        }}
                      >
                        <ShieldCheck className="w-2.5 h-2.5" />
                        <span>অফিসিয়াল</span>
                      </div>
                    </div>
                    <p
                      className="text-[11px] leading-none mt-0.5"
                      style={{ color: isDark ? "#94a3b8" : "#64748b" }}
                    >
                      {selectedCountry.nameEn} · {fullCountryData.visaTypes.length}টি ভিসা ক্যাটাগরি রয়েছে
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCountry(null)}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all active:scale-90"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                    color: isDark ? "#94a3b8" : "#64748b",
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Telemetry Chips Bar */}
              <div
                className="px-4 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none text-[10.5px] border-b"
                style={{
                  borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                  background: isDark ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.02)",
                }}
              >
                <div
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg shrink-0"
                  style={{
                    background: isDark ? "rgba(14,165,233,0.12)" : "rgba(14,165,233,0.08)",
                    color: isDark ? "#38bdf8" : "#0284c7",
                  }}
                >
                  <Clock className="w-3 h-3" />
                  <span>গড় সময়: {fullCountryData.processingTime}</span>
                </div>

                <div
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg shrink-0"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    color: "#10b981",
                  }}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  <span>সফলতার হার: {fullCountryData.successRate}%</span>
                </div>
              </div>

              {/* Helper Sub-headline */}
              <div className="px-4 pt-3 pb-1">
                <p
                  className="text-[11.5px] font-bold"
                  style={{
                    fontFamily: "'Hind Siliguri', sans-serif",
                    color: isDark ? "#cbd5e1" : "#475569",
                  }}
                >
                  {lang === "bn"
                    ? "যে ভিসা ক্যাটাগরির নিয়ম দেখতে চান, সেটিতে ক্লিক করুন:"
                    : "Select a visa category to see rules, documents & check status:"}
                </p>
              </div>

              {/* Scrollable Visa Types List */}
              <div
                className="px-4 py-2 space-y-2.5"
                style={{
                  flex: "1 1 0%",
                  minHeight: "260px",
                  overflowY: "auto",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {fullCountryData.visaTypes.map((visa: VisaType) => (
                  <div
                    key={visa.id}
                    className="rounded-2xl p-3.5 transition-all duration-200"
                    style={{
                      background: isDark
                        ? "linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(2, 6, 23, 0.85) 100%)"
                        : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                      border: isDark
                        ? `1.5px solid ${visa.color || selectedCountry.color}35`
                        : `1.5px solid ${visa.color || selectedCountry.color}30`,
                      boxShadow: isDark
                        ? "0 4px 16px rgba(0,0,0,0.3)"
                        : "0 2px 10px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Visa Card Header */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                          style={{
                            background: `${visa.color || selectedCountry.color}20`,
                            border: `1px solid ${visa.color || selectedCountry.color}40`,
                          }}
                        >
                          {visa.icon}
                        </div>
                        <div>
                          <h4
                            className="font-bold text-[13.5px] leading-tight"
                            style={{
                              fontFamily: "'Hind Siliguri', sans-serif",
                              color: isDark ? "#ffffff" : "#0f172a",
                            }}
                          >
                            {lang === "bn" ? visa.namebn : visa.name}
                          </h4>
                          <p
                            className="text-[10px] leading-tight mt-0.5"
                            style={{ color: isDark ? "#94a3b8" : "#64748b" }}
                          >
                            {visa.name}
                          </p>
                        </div>
                      </div>

                      {/* Difficulty Badge */}
                      <span
                        className="text-[9.5px] font-extrabold px-2 py-0.5 rounded-full shrink-0"
                        style={{
                          background:
                            visa.difficulty === "easy"
                              ? "rgba(16,185,129,0.15)"
                              : visa.difficulty === "medium"
                              ? "rgba(245,158,11,0.15)"
                              : "rgba(239,68,68,0.15)",
                          color:
                            visa.difficulty === "easy"
                              ? "#10b981"
                              : visa.difficulty === "medium"
                              ? "#f59e0b"
                              : "#ef4444",
                        }}
                      >
                        {visa.difficulty === "easy" ? "সহজ" : visa.difficulty === "medium" ? "মাঝারি" : "কঠিন"}
                      </span>
                    </div>

                    {/* Fees & Time badges row */}
                    <div className="flex flex-wrap items-center gap-2 mb-2 text-[10.5px]">
                      <div
                        className="flex items-center gap-1 px-2.5 py-0.5 rounded-md font-bold"
                        style={{
                          background: "rgba(16,185,129,0.12)",
                          color: "#10b981",
                        }}
                      >
                        <DollarSign className="w-3 h-3" />
                        <span>ফি: {visa.feebn || visa.fee}</span>
                      </div>

                      <div
                        className="flex items-center gap-1 px-2.5 py-0.5 rounded-md font-medium"
                        style={{
                          background: isDark ? "rgba(14,165,233,0.12)" : "rgba(14,165,233,0.08)",
                          color: isDark ? "#38bdf8" : "#0284c7",
                        }}
                      >
                        <Clock className="w-3 h-3" />
                        <span>সময়: {visa.processingTime}</span>
                      </div>
                    </div>

                    {/* Requirements mini tags */}
                    {visa.requirementsbn && visa.requirementsbn.length > 0 && (
                      <div className="mb-3">
                        <p
                          className="text-[9.5px] font-semibold mb-1"
                          style={{ color: isDark ? "#64748b" : "#94a3b8" }}
                        >
                          প্রয়োজনীয় কাগজপত্র:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {visa.requirementsbn.slice(0, 3).map((req, i) => (
                            <span
                              key={i}
                              className="text-[9.5px] px-2 py-0.5 rounded-md leading-tight"
                              style={{
                                background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                                color: isDark ? "#cbd5e1" : "#475569",
                              }}
                            >
                              ✓ {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Direct Navigation Button: Visa Guide & Rules */}
                    <Link
                      href={`/countries/${selectedCountry.id}/${visa.id}`}
                      onClick={() => {
                        playSweetTune();
                        setSelectedCountry(null);
                      }}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-[11.5px] text-white transition-all active:scale-95 shadow-md"
                      style={{
                        background: "linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)",
                        boxShadow: "0 4px 14px rgba(2, 132, 199, 0.35)",
                        fontFamily: "'Hind Siliguri', sans-serif",
                        textAlign: "center",
                        lineHeight: "1.35",
                      }}
                    >
                      <span>
                        {lang === "bn"
                          ? `${visa.namebn || visa.name} পাওয়ার গাইড ও নিয়মাবলী`
                          : `${visa.name} – Guide & Rules`}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Drawer Footer: Link to Country Hub */}
              <div
                className="px-4 pt-3 border-t flex justify-center"
                style={{
                  borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                }}
              >
                <Link
                  href={`/countries/${selectedCountry.id}`}
                  onClick={() => {
                    playSweetTune();
                    setSelectedCountry(null);
                  }}
                  className="w-full text-center py-2 px-3 rounded-xl text-xs font-semibold transition-all active:scale-95"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                    color: isDark ? "#94a3b8" : "#64748b",
                    fontFamily: "'Hind Siliguri', sans-serif",
                  }}
                >
                  {lang === "bn"
                    ? `এই দেশের সকল তথ্য ও ওভারভিউ হাব দেখুন ➔`
                    : `View full country guide & hub ➔`}
                </Link>
              </div>
            </div>
          </div>,
          document.body
      )}
    </section>
  );
}
