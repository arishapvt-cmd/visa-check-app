"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

/* ─── Web Audio API Sweet Chime Tone ────────────────────────── */
function playSweetTune() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    // Harmonious crystal dual chime: A5 (880Hz) smoothly transitioning to E6 (1318.5Hz)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1318.5, now + 0.07);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.22);
  } catch {
    // AudioContext autoplay restriction safeguard
  }
}

/* ─── 20 Country Banners Data (100% Mockup Aligned) ─────────── */
interface BannerItem {
  id: string;
  flag: string;
  namebn: string;
  nameEn: string;
  title1Bn: string;
  title2Bn: string;
  title1En: string;
  title2En: string;
  subBn: string;
  subEn: string;
  badgeBn: string;
  badgeEn: string;
  color: string;
  bgDark: string;
  telemetry: string;
  landmark: (stroke: string, fill: string) => React.ReactNode;
}

const BANNER_COUNTRIES: BannerItem[] = [
  // 1. Saudi Arabia (Emerald Glow Theme)
  {
    id: "saudi-arabia",
    flag: "🇸🇦",
    namebn: "সৌদি আরব",
    nameEn: "Saudi Arabia",
    title1Bn: "সৌদি আরব ভিসা",
    title2Bn: "ভ্যালিডিটি চেক",
    title1En: "Saudi Arabia Visa",
    title2En: "Validity & Iqama Check",
    subBn: "আপনার ভিসা স্থিতি অবিলম্বে পরীক্ষা করুন",
    subEn: "Verify visa & residency status instantly",
    badgeBn: "লাইভ স্ট্যাটাস",
    badgeEn: "Live Status",
    color: "#10b981",
    bgDark: "linear-gradient(145deg, #032417 0%, #01140c 100%)",
    telemetry: "RUH [24°42'N 46°40'E] · KSA-MOFA",
    landmark: (s, f) => (
      <g>
        {/* Kaaba Silhouette with Golden Kiswa band */}
        <rect x="18" y="22" width="30" height="36" rx="2.5" stroke={s} strokeWidth="1.4" fill={f} />
        <line x1="18" y1="30" x2="48" y2="30" stroke="#f59e0b" strokeWidth="1.6" strokeDasharray="3 1.5" />
        <rect x="34" y="34" width="8" height="18" rx="1" stroke={s} strokeWidth="1" fill="none" />
        {/* Kingdom Centre & Minaret */}
        <path d="M 68 58 L 74 6 Q 81 2 88 6 L 94 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <path d="M 77 10 Q 81 30 85 10" stroke={s} strokeWidth="1.2" fill="none" />
        <line x1="10" y1="58" x2="10" y2="14" stroke={s} strokeWidth="1.2" />
        <ellipse cx="10" cy="13" rx="2.5" ry="1.2" stroke={s} strokeWidth="1" fill={f} />
      </g>
    ),
  },
  // 2. Malaysia (Cyan/Teal Electric Glow Theme)
  {
    id: "malaysia",
    flag: "🇲🇾",
    namebn: "মালয়েশিয়া",
    nameEn: "Malaysia",
    title1Bn: "মালয়েশিয়া ভিসা",
    title2Bn: "স্ট্যাটাস চেক",
    title1En: "Malaysia Visa",
    title2En: "Status Check",
    subBn: "সহজ ধাপে স্ট্যাটাস যাচাই করুন",
    subEn: "Fast & verified status check",
    badgeBn: "সক্রিয় স্ট্যাটাস",
    badgeEn: "Active Status",
    color: "#06b6d4",
    bgDark: "linear-gradient(145deg, #022430 0%, #011219 100%)",
    telemetry: "KUL [03°08'N 101°41'E] · MY-IMM",
    landmark: (s, f) => (
      <g>
        {/* Petronas Tower 1 */}
        <path d="M 30 58 L 33 20 L 38 6 L 41 20 L 44 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <line x1="37" y1="6" x2="37" y2="1" stroke={s} strokeWidth="1.4" />
        {/* Skybridge */}
        <rect x="44" y="28" width="18" height="4" stroke={s} strokeWidth="1.2" fill={f} />
        {/* Petronas Tower 2 */}
        <path d="M 62 58 L 65 20 L 70 6 L 73 20 L 76 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <line x1="69" y1="6" x2="69" y2="1" stroke={s} strokeWidth="1.4" />
      </g>
    ),
  },
  // 3. UAE (Gold Glow Theme)
  {
    id: "uae",
    flag: "🇦🇪",
    namebn: "সংযুক্ত আরব আমিরাত",
    nameEn: "UAE (Dubai)",
    title1Bn: "সংযুক্ত আরব আমিরাত",
    title2Bn: "ভিসা চেক",
    title1En: "United Arab Emirates",
    title2En: "Visa Status Check",
    subBn: "আপনার ভিসার বর্তমান স্থিতি দেখুন",
    subEn: "Track residency & entry permit status",
    badgeBn: "আপডেট স্ট্যাটাস",
    badgeEn: "Updated Status",
    color: "#eab308",
    bgDark: "linear-gradient(145deg, #2b2002 0%, #161001 100%)",
    telemetry: "DXB [25°15'N 55°18'E] · GDRFA-UAE",
    landmark: (s, f) => (
      <g>
        {/* Burj Al Arab */}
        <path d="M 22 58 L 22 18 Q 48 34 40 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        {/* Burj Khalifa Spire */}
        <path
          d="M 66 58 L 67 42 L 70 42 L 71 28 L 73 28 L 74 16 L 75 4 L 76 16 L 77 28 L 79 28 L 80 42 L 83 42 L 84 58 Z"
          stroke={s}
          strokeWidth="1.4"
          fill={f}
        />
        <line x1="75" y1="4" x2="75" y2="0" stroke={s} strokeWidth="1.4" />
      </g>
    ),
  },
  // 4. Qatar (Crimson/Ruby Theme)
  {
    id: "qatar",
    flag: "🇶🇦",
    namebn: "কাতার",
    nameEn: "Qatar",
    title1Bn: "কাতার ভিসা সার্ভিস",
    title2Bn: "স্ট্যাটাস চেক",
    title1En: "Qatar Visa Service",
    title2En: "Status Tracking",
    subBn: "পাসপোর্ট নম্বর দিয়ে তাত্ক্ষণিক যাচাই",
    subEn: "Instant check with passport number",
    badgeBn: "অফিসিয়াল পোর্টাল",
    badgeEn: "Official Portal",
    color: "#f43f5e",
    bgDark: "linear-gradient(145deg, #2b0612 0%, #160209 100%)",
    telemetry: "DOH [25°16'N 51°36'E] · QA-MOI",
    landmark: (s, f) => (
      <g>
        <path d="M 26 58 L 26 34 L 38 20 L 50 34 L 50 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <path d="M 70 58 Q 66 18 76 8 Q 86 18 82 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
      </g>
    ),
  },
  // 5. Kuwait (Emerald Teal Theme)
  {
    id: "kuwait",
    flag: "🇰🇼",
    namebn: "কুয়েত",
    nameEn: "Kuwait",
    title1Bn: "কুয়েত ভিসা আবেদন",
    title2Bn: "অনলাইন চেক",
    title1En: "Kuwait Visa Application",
    title2En: "Online Verification",
    subBn: "MOI অফিসিয়াল পোর্টালে সরাসরি যাচাই",
    subEn: "Direct official MOI portal verification",
    badgeBn: "লাইভ স্ট্যাটাস",
    badgeEn: "Live Status",
    color: "#14b8a6",
    bgDark: "linear-gradient(145deg, #022923 0%, #011411 100%)",
    telemetry: "KWI [29°13'N 47°58'E] · KW-MOI",
    landmark: (s, f) => (
      <g>
        <path d="M 44 58 L 48 8 L 50 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <circle cx="49" cy="24" r="6" stroke={s} strokeWidth="1.2" fill={f} />
        <circle cx="49" cy="38" r="4" stroke={s} strokeWidth="1" fill={f} />
        <path d="M 68 58 L 70 20 L 72 58 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <circle cx="71" cy="32" r="3.5" stroke={s} strokeWidth="1" fill={f} />
      </g>
    ),
  },
  // 6. Oman (Flame Red Theme)
  {
    id: "oman",
    flag: "🇴🇲",
    namebn: "ওমান",
    nameEn: "Oman",
    title1Bn: "ওমান রয়্যাল পুলিশ",
    title2Bn: "ই-ভিসা চেক",
    title1En: "Royal Oman Police",
    title2En: "eVisa Status Check",
    subBn: "ভিসা আবেদন ও অনুমোদনের স্থিতি",
    subEn: "Track approval & application status",
    badgeBn: "সক্রিয় পোর্টাল",
    badgeEn: "Active Portal",
    color: "#ef4444",
    bgDark: "linear-gradient(145deg, #2b0707 0%, #170202 100%)",
    telemetry: "MCT [23°35'N 58°17'E] · OM-ROP",
    landmark: (s, f) => (
      <g>
        <path d="M 28 58 L 28 32 L 33 32 Q 44 16 55 32 L 60 32 L 60 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <path d="M 44 16 L 44 6" stroke={s} strokeWidth="1.4" />
        <line x1="82" y1="58" x2="82" y2="12" stroke={s} strokeWidth="1.4" />
        <ellipse cx="82" cy="11" rx="2.5" ry="1.2" stroke={s} strokeWidth="1.2" fill={f} />
      </g>
    ),
  },
  // 7. India (Saffron Orange Theme)
  {
    id: "india",
    flag: "🇮🇳",
    namebn: "ভারত",
    nameEn: "India",
    title1Bn: "ভারত ভিসা ও আবেদন",
    title2Bn: "স্ট্যাটাস চেক",
    title1En: "India Visa & Application",
    title2En: "Status Tracking",
    subBn: "পাসপোর্ট ও আবেদন নম্বর দিয়ে চেক",
    subEn: "Check with passport & application ID",
    badgeBn: "লাইভ ট্র্যাকিং",
    badgeEn: "Live Tracking",
    color: "#f97316",
    bgDark: "linear-gradient(145deg, #2d1302 0%, #170a01 100%)",
    telemetry: "DEL [28°36'N 77°12'E] · IND-VSA",
    landmark: (s, f) => (
      <g>
        <line x1="18" y1="58" x2="18" y2="14" stroke={s} strokeWidth="1.4" />
        <ellipse cx="18" cy="13" rx="2.5" ry="1.2" stroke={s} strokeWidth="1.2" fill={f} />
        <path
          d="M 38 58 L 38 34 L 43 34 Q 43 18 56 12 Q 56 6 56.5 3 Q 57 6 57 12 Q 70 18 70 34 L 75 34 L 75 58 Z"
          stroke={s}
          strokeWidth="1.4"
          fill={f}
        />
        <line x1="94" y1="58" x2="94" y2="14" stroke={s} strokeWidth="1.4" />
        <ellipse cx="94" cy="13" rx="2.5" ry="1.2" stroke={s} strokeWidth="1.2" fill={f} />
      </g>
    ),
  },
  // 8. Singapore (Magenta Neon Theme)
  {
    id: "singapore",
    flag: "🇸🇬",
    namebn: "সিঙ্গাপুর",
    nameEn: "Singapore",
    title1Bn: "সিঙ্গাপুর আইসিএ",
    title2Bn: "ই-ভিসা চেক",
    title1En: "Singapore ICA",
    title2En: "eVisa Status Check",
    subBn: "ICA অফিসিয়াল ডেটাবেসে ভেরিফাই",
    subEn: "Verify in official ICA database",
    badgeBn: "ইনস্ট্যান্ট চেক",
    badgeEn: "Instant Check",
    color: "#ec4899",
    bgDark: "linear-gradient(145deg, #2e061c 0%, #17020d 100%)",
    telemetry: "SIN [01°21'N 103°59'E] · SG-ICA",
    landmark: (s, f) => (
      <g>
        <path d="M 28 58 L 30 24 L 36 24 L 38 58 Z" stroke={s} strokeWidth="1.3" fill={f} />
        <path d="M 46 58 L 47 24 L 53 24 L 54 58 Z" stroke={s} strokeWidth="1.3" fill={f} />
        <path d="M 62 58 L 63 24 L 69 24 L 71 58 Z" stroke={s} strokeWidth="1.3" fill={f} />
        <path d="M 22 24 Q 50 14 80 22 L 78 26 Q 50 18 24 28 Z" stroke={s} strokeWidth="1.3" fill={f} />
      </g>
    ),
  },
  // 9. Thailand (Violet Amethyst Theme)
  {
    id: "thailand",
    flag: "🇹🇭",
    namebn: "থাইল্যান্ড",
    nameEn: "Thailand",
    title1Bn: "থাইল্যান্ড ই-ভিসা",
    title2Bn: "স্ট্যাটাস চেক",
    title1En: "Thailand eVisa",
    title2En: "Status Tracking",
    subBn: "অনলাইন সরকারি ভিসা ট্র্যাকিং পোর্টাল",
    subEn: "Official government tracking portal",
    badgeBn: "লাইভ স্ট্যাটাস",
    badgeEn: "Live Status",
    color: "#a855f7",
    bgDark: "linear-gradient(145deg, #1e0430 0%, #0f0119 100%)",
    telemetry: "BKK [13°41'N 100°45'E] · TH-IMM",
    landmark: (s, f) => (
      <g>
        <path d="M 44 58 L 50 16 L 55 2 L 60 16 L 66 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <line x1="55" y1="2" x2="55" y2="0" stroke={s} strokeWidth="1.4" />
        <path d="M 32 58 L 37 36 L 42 58 Z" stroke={s} strokeWidth="1.2" fill={f} />
        <path d="M 68 58 L 73 36 L 78 58 Z" stroke={s} strokeWidth="1.2" fill={f} />
      </g>
    ),
  },
  // 10. UK (Royal Blue Theme)
  {
    id: "uk",
    flag: "🇬🇧",
    namebn: "UK (যুক্তরাজ্য)",
    nameEn: "UK",
    title1Bn: "যুক্তরাজ্য (UK) ভিসা",
    title2Bn: "অ্যাপ্লিকেশন চেক",
    title1En: "United Kingdom Visa",
    title2En: "Application Check",
    subBn: "UKVI পোর্টাল গাইড ও লাইভ স্ট্যাটাস",
    subEn: "UKVI portal guide & status tracking",
    badgeBn: "অফিসিয়াল পোর্টাল",
    badgeEn: "Official Portal",
    color: "#3b82f6",
    bgDark: "linear-gradient(145deg, #041930 0%, #010d19 100%)",
    telemetry: "LHR [51°28'N 00°27'W] · UK-VI",
    landmark: (s, f) => (
      <g>
        <rect x="52" y="16" width="16" height="42" stroke={s} strokeWidth="1.4" fill={f} />
        <path d="M 50 16 L 60 2 L 70 16 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <circle cx="60" cy="24" r="3.5" stroke={s} strokeWidth="1.2" fill="none" />
      </g>
    ),
  },
  // 11. USA (Indigo Electric Theme)
  {
    id: "usa",
    flag: "🇺🇸",
    namebn: "USA (আমেরিকা)",
    nameEn: "USA",
    title1Bn: "আমেরিকা (USA) ভিসা",
    title2Bn: "DS-160 চেক",
    title1En: "United States Visa",
    title2En: "DS-160 Status Check",
    subBn: "CEAC পোর্টাল থেকে সরাসরি ট্র্যাকিং",
    subEn: "CEAC official portal direct tracking",
    badgeBn: "সক্রিয় পোর্টাল",
    badgeEn: "Active Portal",
    color: "#6366f1",
    bgDark: "linear-gradient(145deg, #101130 0%, #07081a 100%)",
    telemetry: "JFK [40°38'N 73°46'W] · US-CEAC",
    landmark: (s, f) => (
      <g>
        <path d="M 38 58 L 40 30 L 43 20 L 45 30 L 47 58 Z" stroke={s} strokeWidth="1.3" fill={f} />
        <line x1="45" y1="20" x2="52" y2="10" stroke={s} strokeWidth="1.4" />
        <circle cx="53" cy="9" r="2" stroke="#f59e0b" strokeWidth="1.2" fill="#f59e0b" />
        <rect x="68" y="20" width="16" height="38" stroke={s} strokeWidth="1.4" fill={f} />
        <line x1="76" y1="20" x2="76" y2="4" stroke={s} strokeWidth="1.4" />
      </g>
    ),
  },
  // 12. Bahrain (Rose Crimson Theme)
  {
    id: "bahrain",
    flag: "🇧🇭",
    namebn: "বাহরাইন",
    nameEn: "Bahrain",
    title1Bn: "বাহরাইন ই-ভিসা",
    title2Bn: "ও সিআরপি চেক",
    title1En: "Bahrain eVisa",
    title2En: "CRP Status Check",
    subBn: "অনলাইন ভিসা ও রেসিডেন্স ভ্যালিডিটি",
    subEn: "Online visa & residency verification",
    badgeBn: "লাইভ পোর্টাল",
    badgeEn: "Live Portal",
    color: "#f43f5e",
    bgDark: "linear-gradient(145deg, #2b0612 0%, #160209 100%)",
    telemetry: "BAH [26°16'N 50°38'E] · BH-NPRA",
    landmark: (s, f) => (
      <g>
        <path d="M 34 58 L 45 8 L 52 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <path d="M 62 58 L 69 8 L 80 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <line x1="48" y1="22" x2="65" y2="22" stroke={s} strokeWidth="1.2" />
        <line x1="50" y1="34" x2="63" y2="34" stroke={s} strokeWidth="1.2" />
      </g>
    ),
  },
  // 13. Jordan (Jade Emerald Theme)
  {
    id: "jordan",
    flag: "🇯🇴",
    namebn: "জর্ডান",
    nameEn: "Jordan",
    title1Bn: "জর্ডান ভিসা সার্ভিস",
    title2Bn: "অনলাইন চেক",
    title1En: "Jordan Visa Service",
    title2En: "Online Status Check",
    subBn: "MOI ই-সার্ভিসে ভিসা স্ট্যাটাস যাচাই",
    subEn: "Verify visa in MOI e-services",
    badgeBn: "লাইভ স্ট্যাটাস",
    badgeEn: "Live Status",
    color: "#10b981",
    bgDark: "linear-gradient(145deg, #032417 0%, #01140c 100%)",
    telemetry: "AMM [31°57'N 35°56'E] · JO-MOI",
    landmark: (s, f) => (
      <g>
        <rect x="36" y="20" width="46" height="38" stroke={s} strokeWidth="1.4" fill={f} />
        <path d="M 34 20 L 59 6 L 84 20 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <path d="M 52 58 L 52 36 Q 59 28 66 36 L 66 58 Z" stroke={s} strokeWidth="1.2" fill="none" />
      </g>
    ),
  },
  // 14. Australia (Ocean Sky Theme)
  {
    id: "australia",
    flag: "🇦🇺",
    namebn: "অস্ট্রেলিয়া",
    nameEn: "Australia",
    title1Bn: "অস্ট্রেলিয়া ভেভো",
    title2Bn: "ভিসা অনুমোদন চেক",
    title1En: "Australia VEVO",
    title2En: "Visa Status Check",
    subBn: "ভিসা বৈধতা ও কাজের অনুমোদন ট্র্যাকিং",
    subEn: "Visa validity & work rights tracking",
    badgeBn: "অফিসিয়াল VEVO",
    badgeEn: "Official VEVO",
    color: "#0284c7",
    bgDark: "linear-gradient(145deg, #022030 0%, #011018 100%)",
    telemetry: "SYD [33°56'S 151°10'E] · AU-VEVO",
    landmark: (s, f) => (
      <g>
        <path d="M 30 58 Q 38 22 54 36 Q 54 58 54 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <path d="M 50 58 Q 58 16 74 32 Q 74 58 74 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <path d="M 70 58 Q 78 24 90 38 Q 90 58 90 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
      </g>
    ),
  },
  // 15. Canada (Maple Red Theme)
  {
    id: "canada",
    flag: "🇨🇦",
    namebn: "কানাডা",
    nameEn: "Canada",
    title1Bn: "কানাডা আইআরসিসি",
    title2Bn: "ভিসা ট্র্যাকার",
    title1En: "Canada IRCC",
    title2En: "Visa Status Tracker",
    subBn: "IRCC অনলাইন ভেরিফিকেশন পোর্টাল",
    subEn: "IRCC online portal verification",
    badgeBn: "লাইভ ট্র্যাকিং",
    badgeEn: "Live Tracking",
    color: "#ef4444",
    bgDark: "linear-gradient(145deg, #2b0707 0%, #170202 100%)",
    telemetry: "YYZ [43°40'N 79°37'W] · CA-IRCC",
    landmark: (s, f) => (
      <g>
        <line x1="58" y1="58" x2="58" y2="2" stroke={s} strokeWidth="1.6" />
        <ellipse cx="58" cy="20" rx="7" ry="3" stroke={s} strokeWidth="1.3" fill={f} />
        <path d="M 52 58 L 56 24 L 60 24 L 64 58 Z" stroke={s} strokeWidth="1.2" fill={f} />
      </g>
    ),
  },
  // 16. Italy (Roma Emerald Theme)
  {
    id: "italy",
    flag: "🇮🇹",
    namebn: "ইতালি",
    nameEn: "Italy",
    title1Bn: "ইতালি নুল্লা ওস্তা",
    title2Bn: "ভিসা স্ট্যাটাস চেক",
    title1En: "Italy Nulla Osta",
    title2En: "Visa Status Check",
    subBn: "ইমিগ্রেশন পোর্টাল থেকে সরাসরি যাচাই",
    subEn: "Direct official immigration tracking",
    badgeBn: "সক্রিয় পোর্টাল",
    badgeEn: "Active Portal",
    color: "#10b981",
    bgDark: "linear-gradient(145deg, #032417 0%, #01140c 100%)",
    telemetry: "FCO [41°48'N 12°14'E] · IT-VIST",
    landmark: (s, f) => (
      <g>
        <ellipse cx="60" cy="38" rx="30" ry="16" stroke={s} strokeWidth="1.4" fill={f} />
        <line x1="36" y1="38" x2="36" y2="58" stroke={s} strokeWidth="1.4" />
        <line x1="48" y1="44" x2="48" y2="58" stroke={s} strokeWidth="1.4" />
        <line x1="60" y1="46" x2="60" y2="58" stroke={s} strokeWidth="1.4" />
        <line x1="72" y1="44" x2="72" y2="58" stroke={s} strokeWidth="1.4" />
        <line x1="84" y1="38" x2="84" y2="58" stroke={s} strokeWidth="1.4" />
      </g>
    ),
  },
  // 17. Germany (Amber Gold Theme)
  {
    id: "germany",
    flag: "🇩🇪",
    namebn: "জার্মানি",
    nameEn: "Germany",
    title1Bn: "জার্মানি শেনজেন",
    title2Bn: "ও ন্যাশনাল ভিসা চেক",
    title1En: "Germany Schengen",
    title2En: "National Visa Check",
    subBn: "কনস্যুলার সার্ভিস লাইভ ট্র্যাকিং",
    subEn: "Consular services live tracking",
    badgeBn: "লাইভ স্ট্যাটাস",
    badgeEn: "Live Status",
    color: "#f59e0b",
    bgDark: "linear-gradient(145deg, #2b1a02 0%, #150d01 100%)",
    telemetry: "FRA [50°02'N 08°34'E] · DE-VISA",
    landmark: (s, f) => (
      <g>
        <rect x="28" y="20" width="64" height="6" stroke={s} strokeWidth="1.4" fill={f} />
        <line x1="36" y1="26" x2="36" y2="58" stroke={s} strokeWidth="1.4" />
        <line x1="48" y1="26" x2="48" y2="58" stroke={s} strokeWidth="1.4" />
        <line x1="60" y1="26" x2="60" y2="58" stroke={s} strokeWidth="1.4" />
        <line x1="72" y1="26" x2="72" y2="58" stroke={s} strokeWidth="1.4" />
        <line x1="84" y1="26" x2="84" y2="58" stroke={s} strokeWidth="1.4" />
      </g>
    ),
  },
  // 18. Japan (Crimson Cherry Theme)
  {
    id: "japan",
    flag: "🇯🇵",
    namebn: "জাপান",
    nameEn: "Japan",
    title1Bn: "জাপান ই-ভিসা",
    title2Bn: "রেজাল্ট চেক",
    title1En: "Japan eVisa",
    title2En: "Result & Status Check",
    subBn: "MOFA অনলাইন ভিসা যাচাই পোর্টাল",
    subEn: "MOFA online verification portal",
    badgeBn: "অফিসিয়াল MOFA",
    badgeEn: "Official MOFA",
    color: "#f43f5e",
    bgDark: "linear-gradient(145deg, #2b0612 0%, #160209 100%)",
    telemetry: "HND [35°33'N 139°46'E] · JP-MOFA",
    landmark: (s, f) => (
      <g>
        <path d="M 28 58 Q 60 16 92 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <circle cx="60" cy="16" r="6" stroke="#ef4444" strokeWidth="1.2" fill="#ef4444" opacity="0.8" />
      </g>
    ),
  },
  // 19. South Korea (Sapphire Blue Theme)
  {
    id: "south-korea",
    flag: "🇰🇷",
    namebn: "দক্ষিণ কোরিয়া",
    nameEn: "South Korea",
    title1Bn: "দক্ষিণ কোরিয়া ভিসা",
    title2Bn: "K-ETA চেক",
    title1En: "South Korea Visa",
    title2En: "K-ETA Status Check",
    subBn: "হাই-কোরিয়া পোর্টাল স্ট্যাটাস ট্র্যাকিং",
    subEn: "Hi-Korea portal status tracking",
    badgeBn: "লাইভ স্ট্যাটাস",
    badgeEn: "Live Status",
    color: "#3b82f6",
    bgDark: "linear-gradient(145deg, #041930 0%, #010d19 100%)",
    telemetry: "ICN [37°27'N 126°26'E] · KR-HIKOREA",
    landmark: (s, f) => (
      <g>
        <line x1="60" y1="58" x2="60" y2="8" stroke={s} strokeWidth="1.6" />
        <rect x="54" y="22" width="12" height="8" rx="1.5" stroke={s} strokeWidth="1.3" fill={f} />
        <line x1="60" y1="8" x2="60" y2="2" stroke={s} strokeWidth="1.4" />
      </g>
    ),
  },
  // 20. Turkey (Sultan Crimson Theme)
  {
    id: "turkey",
    flag: "🇹🇷",
    namebn: "তুরস্ক",
    nameEn: "Turkey",
    title1Bn: "তুরস্ক ই-ভিসা",
    title2Bn: "ও ইকামেত চেক",
    title1En: "Turkey eVisa",
    title2En: "e-Ikamet Check",
    subBn: "Göç İdaresi ট্র্যাকিং পোর্টালে যাচাই",
    subEn: "Göç İdaresi official tracking portal",
    badgeBn: "অফিসিয়াল পোর্টাল",
    badgeEn: "Official Portal",
    color: "#ef4444",
    bgDark: "linear-gradient(145deg, #2b0707 0%, #170202 100%)",
    telemetry: "IST [41°15'N 28°44'E] · TR-EVISA",
    landmark: (s, f) => (
      <g>
        <path d="M 32 58 L 32 32 Q 60 14 88 32 L 88 58 Z" stroke={s} strokeWidth="1.4" fill={f} />
        <line x1="22" y1="58" x2="22" y2="12" stroke={s} strokeWidth="1.4" />
        <line x1="98" y1="58" x2="98" y2="12" stroke={s} strokeWidth="1.4" />
        <circle cx="60" cy="24" r="3.5" stroke="#f59e0b" strokeWidth="1.2" fill="none" />
      </g>
    ),
  },
];

/* ─── Main Component (100% Mockup Aligned + Ambient Canvas Fast Animated) ─── */
export function CountryBannerSlider() {
  const [index, setIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1); // 1 = Left to Right; -1 = Right to Left
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const { isDark } = useTheme();
  const { lang, t } = useLanguage();

  // 5-second interval alternating between Left=>Right and Right=>Left
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSlideDirection((prevDir) => (prevDir === 1 ? -1 : 1));
      setIndex((prevIndex) => (prevIndex + 1) % BANNER_COUNTRIES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Touch Swipe Handlers for mobile phones
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    setIsPaused(false);
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped Left -> Move forward
        setSlideDirection(1);
        setIndex((prev) => (prev + 1) % BANNER_COUNTRIES.length);
      } else {
        // Swiped Right -> Move backward
        setSlideDirection(-1);
        setIndex((prev) => (prev - 1 + BANNER_COUNTRIES.length) % BANNER_COUNTRIES.length);
      }
    }
  };

  const currentBanner = BANNER_COUNTRIES[index];

  // Button click handler with crystal chime tune
  const handleButtonClick = useCallback(() => {
    playSweetTune();
  }, []);

  return (
    <div style={{ paddingLeft: "12px", paddingRight: "12px", marginBottom: "12px" }}>
      {/* ─── Embedded Fast GPU-Accelerated Pure CSS Keyframes (ambient-canvas-background-architect) ─── */}
      <style>{`
        @keyframes ambientFastFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -160px; }
        }
        @keyframes ambientFastFlowRev {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 160px; }
        }
        @keyframes ambientRadarFast {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ambientBeaconPulse {
          0% { r: 3.5px; opacity: 1; stroke-width: 1.5px; }
          50% { opacity: 0.85; }
          100% { r: 18px; opacity: 0; stroke-width: 0.4px; }
        }
        @keyframes ambientTwinkle1 {
          0% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
          100% { opacity: 0.25; transform: scale(0.85); }
        }
        @keyframes ambientTwinkle2 {
          0% { opacity: 0.85; transform: scale(1.2); }
          50% { opacity: 0.15; transform: scale(0.7); }
          100% { opacity: 0.9; transform: scale(1.15); }
        }
        @keyframes ambientOrbFast {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(22px, -16px, 0) scale(1.15); }
          100% { transform: translate3d(-18px, 14px, 0) scale(0.92); }
        }
        @keyframes ambientLandmarkBreath {
          0% { filter: drop-shadow(0 0 3px rgba(255,255,255,0.25)); opacity: 0.6; }
          50% { filter: drop-shadow(0 0 10px currentColor); opacity: 0.88; }
          100% { filter: drop-shadow(0 0 3px rgba(255,255,255,0.25)); opacity: 0.6; }
        }
        .ambient-fast-dash {
          stroke-dasharray: 8 14;
          animation: ambientFastFlow 2.2s linear infinite;
        }
        .ambient-fast-dash-rev {
          stroke-dasharray: 6 12;
          animation: ambientFastFlowRev 2.8s linear infinite;
        }
        .ambient-radar-fast {
          animation: ambientRadarFast 3.2s linear infinite;
        }
        .ambient-beacon-pulse {
          animation: ambientBeaconPulse 1.4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .ambient-sparkle-1 {
          animation: ambientTwinkle1 1.2s ease-in-out infinite;
        }
        .ambient-sparkle-2 {
          animation: ambientTwinkle2 1.4s ease-in-out infinite;
        }
        .ambient-sparkle-3 {
          animation: ambientTwinkle1 1.8s ease-in-out infinite;
        }
        .ambient-landmark-glow {
          animation: ambientLandmarkBreath 2.8s ease-in-out infinite;
        }
        .banner-title-nowrap {
          white-space: nowrap !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
        }
      `}</style>

      {/* ─── Banner Card ─── */}
      <div
        style={{
          width: "100%",
          borderRadius: "16px",
          position: "relative",
          userSelect: "none",
          overflow: "hidden",
          transition: "all 0.3s",
          height: "154px",
          minHeight: "154px",
          maxHeight: "154px",
          background: isDark
            ? currentBanner.bgDark
            : "linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)",
          border: isDark
            ? `1.5px solid ${currentBanner.color}85`
            : `1.5px solid ${currentBanner.color}60`,
          boxShadow: isDark
            ? `0 0 24px ${currentBanner.color}45, inset 0 0 16px ${currentBanner.color}15, 0 8px 26px rgba(0,0,0,0.7)`
            : `0 0 18px ${currentBanner.color}25, 0 4px 16px rgba(14,165,233,0.12), inset 0 1px 0 #ffffff`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={slideDirection}>
          <motion.div
            key={currentBanner.id}
            custom={slideDirection}
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? "100%" : "-100%",
                opacity: 0,
              }),
              center: {
                x: 0,
                opacity: 1,
              },
              exit: (direction: number) => ({
                x: direction > 0 ? "-100%" : "100%",
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", ease: "easeInOut", duration: 0.44 },
              opacity: { duration: 0.32 },
            }}
            style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "14px",
                paddingRight: "14px",
                paddingTop: "8px",
                paddingBottom: "8px",
                textAlign: "center",
              }}
          >
            {/* ══ Background Luminous Canvas: 80% Width + Fast Ambient Animated Elements ══ */}
            <div
              style={{
                position: "absolute",
                top: 0, right: 0, bottom: 0, left: 0,
                pointerEvents: "none",
                overflow: "hidden",
                zIndex: 0,
              }}
              aria-hidden="true"
            >
              {/* Layer 1: Ambient Fast Floating Glow Aura Orbs */}
              <div
                style={{
                  position: "absolute",
                  right: "-40px",
                  top: "-48px",
                  width: "240px",
                  height: "240px",
                  borderRadius: "50%",
                  pointerEvents: "none",
                  background: `radial-gradient(circle, ${currentBanner.color}45 0%, ${currentBanner.color}10 50%, transparent 70%)`,
                  filter: "blur(32px)",
                  animation: "ambientOrbFast 4.5s ease-in-out infinite alternate",
                  willChange: "transform",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "24px",
                  bottom: "-40px",
                  width: "176px",
                  height: "176px",
                  borderRadius: "50%",
                  pointerEvents: "none",
                  background: `radial-gradient(circle, ${currentBanner.color}25 0%, transparent 65%)`,
                  filter: "blur(26px)",
                  animation: "ambientOrbFast 5.5s ease-in-out infinite alternate-reverse",
                  willChange: "transform",
                }}
              />

              {/* Layer 2-7: Master Ambient SVG Canvas spanning 85% of Card Width */}
              <svg
                viewBox="0 0 400 150"
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  height: "100%",
                  width: "85%",
                  pointerEvents: "none",
                }}
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Layer 2: Texture Grid Pattern */}
                  <pattern
                    id={`grid-${currentBanner.id}`}
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="0.8"
                      fill={currentBanner.color}
                      opacity={isDark ? "0.18" : "0.08"}
                    />
                  </pattern>

                  {/* Flow Trajectory Gradients */}
                  <linearGradient id={`flowGrad-${currentBanner.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={currentBanner.color} stopOpacity="0" />
                    <stop offset="50%" stopColor={currentBanner.color} stopOpacity="0.9" />
                    <stop offset="100%" stopColor={currentBanner.color} stopOpacity="0.15" />
                  </linearGradient>

                  {/* Radar Gradient */}
                  <linearGradient id={`radarGrad-${currentBanner.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={currentBanner.color} stopOpacity="0.35" />
                    <stop offset="100%" stopColor={currentBanner.color} stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Layer 2: Dot Matrix Grid across 85% of Card */}
                <rect width="100%" height="100%" fill={`url(#grid-${currentBanner.id})`} />

                {/* Layer 3: Technical Telemetry & Coordinate HUD Stamps */}
                <text
                  x="390"
                  y="16"
                  textAnchor="end"
                  fill={currentBanner.color}
                  opacity={isDark ? 0.55 : 0.35}
                  style={{
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                    fontSize: "7.5px",
                    letterSpacing: "0.08em",
                    fontWeight: 700,
                  }}
                >
                  {currentBanner.telemetry}
                </text>

                {/* Layer 4: Dynamic Fast Flow Trajectory Curves */}
                <path
                  d="M 10 135 C 100 45, 230 145, 390 55"
                  stroke={currentBanner.color}
                  strokeWidth="1.2"
                  fill="none"
                  opacity={isDark ? 0.2 : 0.12}
                />
                <path
                  d="M 10 135 C 100 45, 230 145, 390 55"
                  stroke={`url(#flowGrad-${currentBanner.id})`}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  className="ambient-fast-dash"
                />
                <path
                  d="M 35 145 C 135 90, 260 155, 395 85"
                  stroke={currentBanner.color}
                  strokeWidth="1.4"
                  fill="none"
                  strokeLinecap="round"
                  opacity={isDark ? 0.45 : 0.25}
                  className="ambient-fast-dash-rev"
                />

                {/* Layer 5: Rotating 360° Radar Sweep Scanner (Fast Animation) */}
                <g transform="translate(330, 75)" className="opacity-60">
                  <circle r="34" stroke={currentBanner.color} strokeWidth="0.8" strokeDasharray="3 3" fill="none" opacity="0.3" />
                  <circle r="18" stroke={currentBanner.color} strokeWidth="0.6" fill="none" opacity="0.2" />
                  <line x1="-34" y1="0" x2="34" y2="0" stroke={currentBanner.color} strokeWidth="0.6" opacity="0.2" />
                  <line x1="0" y1="-34" x2="0" y2="34" stroke={currentBanner.color} strokeWidth="0.6" opacity="0.2" />
                  <g className="ambient-radar-fast" style={{ transformOrigin: "0px 0px" }}>
                    <path d="M 0 0 L 34 0 A 34 34 0 0 0 24 -24 Z" fill={`url(#radarGrad-${currentBanner.id})`} />
                    <line x1="0" y1="0" x2="34" y2="0" stroke={currentBanner.color} strokeWidth="1.4" opacity="0.85" />
                  </g>
                </g>

                {/* Layer 6: Kinetic Waypoint Beacon (Rapid Pulsing Ring) */}
                <circle cx="230" cy="115" r="3.5" fill={currentBanner.color} opacity="0.95" />
                <circle
                  cx="230"
                  cy="115"
                  r="3.5"
                  stroke={currentBanner.color}
                  strokeWidth="1.4"
                  fill="none"
                  className="ambient-beacon-pulse"
                />

                {/* Layer 7: Atmospheric Dust Micro-Sparkles (Fast Twinkling) */}
                <circle cx="50" cy="50" r="1.4" fill={currentBanner.color} className="ambient-sparkle-1" />
                <circle cx="140" cy="120" r="1.1" fill={currentBanner.color} className="ambient-sparkle-2" />
                <circle cx="270" cy="35" r="1.5" fill={currentBanner.color} className="ambient-sparkle-3" />
                <circle cx="365" cy="125" r="1.2" fill={currentBanner.color} className="ambient-sparkle-1" />

                {/* Layer 8: Luminous Landmark Silhouette (Spanning right-to-center across 60%-70% of canvas) */}
                <g
                  transform="translate(190, 20) scale(1.9)"
                  className="ambient-landmark-glow"
                  opacity={isDark ? "0.62" : "0.38"}
                >
                  {currentBanner.landmark(
                    currentBanner.color,
                    `${currentBanner.color}22`
                  )}
                </g>
              </svg>

              {/* Soft Central Contrast Shield */}
              <div
                style={{
                  position: "absolute",
                  top: 0, right: 0, bottom: 0, left: 0,
                  pointerEvents: "none",
                  background: isDark
                    ? "radial-gradient(ellipse at 44% 50%, rgba(3,10,18,0.76) 0%, rgba(3,10,18,0.45) 58%, transparent 88%)"
                    : "radial-gradient(ellipse at 44% 50%, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.42) 58%, transparent 88%)",
                }}
              />
            </div>

            {/* ══ 1. TOP: Centered Glowing Pill Badge ══ */}
            <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "2px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "2px 12px",
                  borderRadius: "999px",
                  boxShadow: `0 0 12px ${currentBanner.color}40`,
                  background: isDark ? `${currentBanner.color}25` : `${currentBanner.color}15`,
                  border: isDark ? `1px solid ${currentBanner.color}80` : `1px solid ${currentBanner.color}50`,
                }}
              >
                {/* Glowing Dot */}
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: currentBanner.color,
                    boxShadow: `0 0 8px ${currentBanner.color}`,
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Hind Siliguri', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: isDark ? "#ffffff" : "#0f172a",
                  }}
                >
                  {lang === "bn" ? currentBanner.badgeBn : currentBanner.badgeEn}
                </span>
              </div>
            </div>

            {/* ══ 2. MIDDLE: White Glassy 3D Premium Transparent Button wrapping Title + Subtitle ══ */}
            <div
              style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                flex: 1,
                padding: "2px 6px",
              }}
            >
              <Link
                href={`/countries/${currentBanner.id}`}
                onClick={handleButtonClick}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  maxWidth: "340px",
                  gap: "2px",
                  padding: "5px 14px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  background: isDark
                    ? "linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.12) 100%)"
                    : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.72) 100%)",
                  backdropFilter: "blur(16px) saturate(180%)",
                  WebkitBackdropFilter: "blur(16px) saturate(180%)",
                  border: isDark
                    ? "1.5px solid rgba(255, 255, 255, 0.35)"
                    : "1.5px solid rgba(255, 255, 255, 0.95)",
                  borderTop: isDark
                    ? "1.5px solid rgba(255, 255, 255, 0.55)"
                    : "1.5px solid rgba(255, 255, 255, 1.0)",
                  boxShadow: isDark
                    ? `0 6px 20px rgba(0,0,0,0.55), inset 0 1.5px 2px rgba(255,255,255,0.40), inset 0 -1.5px 2px rgba(0,0,0,0.40), 0 0 16px ${currentBanner.color}45`
                    : "0 6px 18px rgba(0,0,0,0.08), inset 0 1.5px 2px rgba(255,255,255,1), inset 0 -1px 1px rgba(0,0,0,0.05)",
                  transform: "perspective(400px) translateZ(0px)",
                  WebkitTapHighlightColor: "transparent",
                  cursor: "pointer",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* 3D gloss shine top strip */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "5%",
                    right: "5%",
                    height: "44%",
                    borderRadius: "0 0 50% 50%",
                    background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.0) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Title: 1 single line */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Hind Siliguri', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(12.5px, 3.7vw, 15px)",
                      lineHeight: "1.25",
                      letterSpacing: "-0.01em",
                      color: isDark ? "#ffffff" : "#0f172a",
                      textShadow: isDark
                        ? `0 0 14px ${currentBanner.color}90, 0 1px 3px rgba(0,0,0,0.9)`
                        : "0 1px 2px rgba(0,0,0,0.1)",
                      whiteSpace: "nowrap",
                      margin: 0,
                      padding: 0,
                      textAlign: "center",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {lang === "bn"
                      ? `${currentBanner.title1Bn} ${currentBanner.title2Bn}`
                      : `${currentBanner.title1En} ${currentBanner.title2En}`}
                  </h3>
                </div>

                {/* Subtitle: 1 single line */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Hind Siliguri', sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(9px, 2.5vw, 10.5px)",
                      lineHeight: "1.2",
                      color: isDark ? "rgba(255, 255, 255, 0.88)" : "#475569",
                      textShadow: isDark ? "0 1px 3px rgba(0,0,0,0.8)" : "none",
                      whiteSpace: "nowrap",
                      margin: 0,
                      padding: 0,
                      textAlign: "center",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {lang === "bn" ? currentBanner.subBn : currentBanner.subEn}
                  </p>
                </div>
              </Link>
            </div>

            {/* ══ 3. BOTTOM: Dual Glowing Neon Pill Buttons — 100% inline styles ══ */}
            <div
              style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
                paddingBottom: "2px",
              }}
            >
              {/* Button 1: ভিসা চেক */}
              <Link
                href={`/countries/${currentBanner.id}`}
                onClick={handleButtonClick}
                style={{
                  flex: 1,
                  maxWidth: "142px",
                  padding: "6px 10px",
                  borderRadius: "12px",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "11px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  background: isDark
                    ? `linear-gradient(135deg, ${currentBanner.color}35 0%, rgba(0,0,0,0.65) 100%)`
                    : `linear-gradient(135deg, ${currentBanner.color}20 0%, #ffffff 100%)`,
                  color: isDark ? "#ffffff" : "#0f172a",
                  border: `1.5px solid ${currentBanner.color}95`,
                  boxShadow: `0 0 14px ${currentBanner.color}50, inset 0 0 8px ${currentBanner.color}25`,
                  fontFamily: "'Hind Siliguri', sans-serif",
                }}
              >
                {t("ভিসা চেক", "Visa Check")}
              </Link>

              {/* Button 2: ভিসা চেক করার নিয়ম */}
              <Link
                href={`/countries/${currentBanner.id}`}
                onClick={handleButtonClick}
                style={{
                  flex: 1,
                  maxWidth: "142px",
                  padding: "6px 10px",
                  borderRadius: "12px",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "11px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  background: isDark
                    ? "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(0,0,0,0.5) 100%)"
                    : "rgba(255,255,255,0.95)",
                  color: isDark ? "rgba(255,255,255,0.95)" : "#1e293b",
                  border: isDark
                    ? `1.5px solid ${currentBanner.color}80`
                    : `1.5px solid ${currentBanner.color}60`,
                  boxShadow: isDark
                    ? `0 0 12px ${currentBanner.color}35, inset 0 0 6px rgba(255,255,255,0.08)`
                    : "0 2px 6px rgba(0,0,0,0.05)",
                  fontFamily: "'Hind Siliguri', sans-serif",
                }}
              >
                {t("ভিসা চেক করার নিয়ম", "Check Method")}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ══ Micro 3-Dot Pagination ══ */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "6px", pointerEvents: "none" }}>
        <span
          style={{
            display: "inline-block",
            width: "6px", height: "6px",
            borderRadius: "50%",
            transition: "all 0.3s",
            backgroundColor: index % 3 === 0 ? currentBanner.color : (isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"),
            boxShadow: index % 3 === 0 ? `0 0 6px ${currentBanner.color}` : "none",
          }}
        />
        <span
          style={{
            display: "inline-block",
            width: "6px", height: "6px",
            borderRadius: "50%",
            transition: "all 0.3s",
            backgroundColor: index % 3 === 1 ? currentBanner.color : (isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"),
            boxShadow: index % 3 === 1 ? `0 0 6px ${currentBanner.color}` : "none",
          }}
        />
        <span
          style={{
            display: "inline-block",
            width: "6px", height: "6px",
            borderRadius: "50%",
            transition: "all 0.3s",
            backgroundColor: index % 3 === 2 ? currentBanner.color : (isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"),
            boxShadow: index % 3 === 2 ? `0 0 6px ${currentBanner.color}` : "none",
          }}
        />
      </div>
    </div>
  );
}

export default CountryBannerSlider;
