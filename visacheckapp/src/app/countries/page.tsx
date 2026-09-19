"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, X, ChevronRight, BookOpen, Globe } from "lucide-react";
import { COUNTRIES } from "@/data/countries";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { useAndroidBridge } from "@/hooks/useAndroidBridge";
import { CountryAmbientBackground } from "@/components/CountryAmbientBackground";

const REGIONS = [
  { bn: "সব দেশ",         en: "All Countries",   key: "all" },
  { bn: "দক্ষিণ এশিয়া",     en: "South Asia",      key: "South Asia" },
  { bn: "মধ্যপ্রাচ্য",        en: "Middle East",     key: "Middle East" },
  { bn: "দক্ষিণ-পূর্ব এশিয়া", en: "Southeast Asia",  key: "Southeast Asia" },
  { bn: "উত্তর আমেরিকা",    en: "North America",   key: "North America" },
  { bn: "ইউরোপ",           en: "Europe",          key: "Europe" },
  { bn: "পূর্ব এশিয়া",       en: "East Asia",       key: "East Asia" },
];

const DIFFICULTY_MAP = {
  easy:   { bn: "সহজ",   en: "Easy",   color: "#10b981", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.3)" },
  medium: { bn: "মাঝারি", en: "Medium", color: "#f59e0b", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)" },
  hard:   { bn: "কঠিন",  en: "Hard",   color: "#ef4444", bg: "rgba(239,68,68,0.12)",  border: "rgba(239,68,68,0.3)"  },
};

export default function CountriesPage() {
  const [search, setSearch] = useState("");
  const [activeRegion, setActiveRegion] = useState("all");
  const { isDark } = useTheme();
  const { t, lang } = useLanguage();
  const { hapticFeedback } = useAndroidBridge();

  const isBn = lang === "bn";

  const filteredCountries = useMemo(() => {
    const q = search.trim().toLowerCase();
    return COUNTRIES.filter((c) => {
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.namebn.includes(q) ||
        c.region.toLowerCase().includes(q) ||
        c.visaTypes.some(
          (v) => v.name.toLowerCase().includes(q) || v.namebn.includes(q)
        );

      const matchesRegion =
        activeRegion === "all" ||
        c.region === activeRegion ||
        c.region.includes(activeRegion);

      return matchesSearch && matchesRegion;
    });
  }, [search, activeRegion]);

  return (
    <div
      className="min-h-screen transition-colors duration-350"
      style={{
        backgroundColor: "var(--bg-page)",
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 58px)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 84px)",
      }}
    >
      <div className="max-w-5xl mx-auto px-3 sm:px-4 pb-6">
        {/* ══ SECTION 1 — Single-Line Glassy Title Button (Flush below header) ══ */}
        <div className="flex justify-center mb-3 mt-1.5">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl max-w-full"
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(14,165,233,0.20) 0%, rgba(99,102,241,0.15) 100%)"
                : "linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(99,102,241,0.08) 100%)",
              border: isDark
                ? "1.5px solid rgba(14,165,233,0.38)"
                : "1.5px solid rgba(14,165,233,0.32)",
              backdropFilter: "blur(16px) saturate(180%)",
              WebkitBackdropFilter: "blur(16px) saturate(180%)",
              boxShadow: isDark
                ? "0 4px 20px rgba(14,165,233,0.20), inset 0 1px 0 rgba(255,255,255,0.12)"
                : "0 4px 16px rgba(14,165,233,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            <span
              className="font-bold text-[13.5px] sm:text-[15px] tracking-tight truncate"
              style={{
                fontFamily: "'Hind Siliguri', sans-serif",
                color: isDark ? "#7dd3fc" : "#0369a1",
              }}
            >
              {t(
                "বিশ্বের ২০টি দেশের ভিসা পোর্টাল ও গাইড ২০২৬",
                "All 20 Country Visa Portals & Guides 2026"
              )}
            </span>
            <span className="text-base sm:text-lg leading-none shrink-0">🌍</span>
          </motion.div>
        </div>

        {/* ══ SECTION 2 — Search Input ══ */}
        <div className="relative mb-3">
          <div
            className="flex items-center rounded-2xl px-3.5 py-2.5 transition-all duration-200"
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(11,22,40,0.95) 0%, rgba(6,15,30,0.95) 100%)"
                : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              border: isDark
                ? "1px solid rgba(14,165,233,0.25)"
                : "1px solid rgba(14,165,233,0.22)",
              boxShadow: isDark
                ? "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
                : "0 4px 16px rgba(14,165,233,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <Search
              className="w-4 h-4 mr-2.5 shrink-0"
              style={{ color: isDark ? "#38bdf8" : "#0284c7" }}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t(
                "দেশ বা ভিসার নাম দিয়ে খুঁজুন...",
                "Search by country or visa type..."
              )}
              className="w-full bg-transparent outline-none text-sm font-medium placeholder:text-slate-400"
              style={{
                color: isDark ? "#f1f5f9" : "#0f172a",
                fontFamily: "'Hind Siliguri', sans-serif",
              }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 ml-2"
                style={{
                  background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
                }}
              >
                <X className="w-3 h-3 text-slate-400" />
              </button>
            )}
          </div>
        </div>

        {/* ══ SECTION 3 — Region Filter Chips (Horizontal scrollable) ══ */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-4 -mx-1 px-1">
          {REGIONS.map((region) => {
            const active = activeRegion === region.key;
            return (
              <button
                key={region.key}
                onClick={() => {
                  hapticFeedback();
                  setActiveRegion(region.key);
                }}
                className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 active:scale-95 flex items-center gap-1.5"
                style={{
                  background: active
                    ? "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)"
                    : isDark
                    ? "rgba(15,23,42,0.65)"
                    : "rgba(255,255,255,0.85)",
                  color: active ? "#ffffff" : isDark ? "#94a3b8" : "#475569",
                  border: active
                    ? "1px solid rgba(255,255,255,0.3)"
                    : isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(14,165,233,0.15)",
                  boxShadow: active
                    ? "0 4px 14px rgba(14,165,233,0.35)"
                    : "none",
                  fontFamily: "'Hind Siliguri', sans-serif",
                }}
              >
                {region.key === "all" && <Globe className="w-3 h-3" />}
                <span>{t(region.bn, region.en)}</span>
              </button>
            );
          })}
        </div>

        {/* ══ SECTION 4 — Middle-Basis Redesigned Country Cards ══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredCountries.map((country, index) => {
            const diff = DIFFICULTY_MAP[country.difficulty] || DIFFICULTY_MAP.medium;
            const countryColor = country.visaTypes[0]?.color || "#0ea5e9";

            return (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="relative overflow-hidden rounded-3xl flex flex-col items-center text-center p-4 transition-all duration-200"
                style={{
                  background: isDark
                    ? "linear-gradient(145deg, #0b1628 0%, #060f1e 100%)"
                    : "#ffffff",
                  border: isDark
                    ? "1.5px solid rgba(14,165,233,0.18)"
                    : "1.5px solid rgba(14,165,233,0.16)",
                  boxShadow: isDark
                    ? "0 8px 30px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)"
                    : "0 6px 24px rgba(14,165,233,0.08), inset 0 1px 0 rgba(255,255,255,0.85)",
                }}
              >
                {/* ══ AMBIENT CANVAS BACKGROUND ARCHITECT SYSTEM: Country Landmark Ambient Backdrop ══ */}
                <CountryAmbientBackground
                  countryId={country.id}
                  color={countryColor}
                  isDark={isDark}
                />

                {/* Top Country Color Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 z-20"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${countryColor} 50%, transparent 100%)`,
                  }}
                />

                <div className="relative z-10 w-full flex flex-col items-center text-center">
                  {/* 1. Middle Basis: Badges row */}
                  <div className="flex items-center justify-center gap-1.5 flex-wrap mb-1 mt-0.5">
                  {/* Difficulty Badge */}
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold"
                    style={{
                      background: diff.bg,
                      color: diff.color,
                      border: `1px solid ${diff.border}`,
                      fontFamily: "'Hind Siliguri', sans-serif",
                    }}
                  >
                    {t(diff.bn, diff.en)}
                  </span>

                  {/* Popular Badge */}
                  {country.popular && (
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold text-amber-400"
                      style={{
                        background: "rgba(251,191,36,0.12)",
                        border: "1px solid rgba(251,191,36,0.25)",
                        fontFamily: "'Hind Siliguri', sans-serif",
                      }}
                    >
                      ⭐ {t("জনপ্রিয়", "Popular")}
                    </span>
                  )}

                  {/* Trending Badge */}
                  {country.trending && (
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold text-sky-400"
                      style={{
                        background: "rgba(14,165,233,0.12)",
                        border: "1px solid rgba(14,165,233,0.25)",
                        fontFamily: "'Hind Siliguri', sans-serif",
                      }}
                    >
                      🔥 {t("ট্রেন্ডিং", "Trending")}
                    </span>
                  )}
                </div>

                {/* 2. Middle Basis: Large Flag */}
                <div className="text-5xl my-1.5 select-none drop-shadow-md transform transition-transform duration-200 hover:scale-110">
                  {country.flag}
                </div>

                {/* 3. Middle Basis: Country Name */}
                <h2
                  className="font-extrabold text-xl tracking-tight leading-snug"
                  style={{
                    fontFamily: "'Hind Siliguri', sans-serif",
                    color: isDark ? "#f8fafc" : "#0f172a",
                  }}
                >
                  {t(country.namebn, country.name)}
                </h2>
                <p
                  className="text-[11px] font-bold tracking-wider uppercase"
                  style={{
                    color: isDark ? "rgba(148,163,184,0.7)" : "rgba(100,116,139,0.8)",
                  }}
                >
                  {country.name} • {country.region}
                </p>

                {/* 4. Middle Basis: Short Description */}
                <p
                  className="text-[12px] leading-relaxed line-clamp-2 mt-1.5 px-2"
                  style={{ color: isDark ? "#94a3b8" : "#64748b" }}
                >
                  {t(country.descriptionbn, country.description)}
                </p>

                {/* 5. Middle Basis: 3-Column Stats Matrix */}
                <div className="grid grid-cols-3 gap-1.5 w-full my-3 px-1">
                  {/* Stat 1: Visa Types */}
                  <div
                    className="flex flex-col items-center justify-center p-2 rounded-xl"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(14,165,233,0.05)",
                      border: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(14,165,233,0.12)",
                    }}
                  >
                    <span className="text-[12px] font-extrabold text-sky-400">
                      {country.visaTypes.length}টি
                    </span>
                    <span className="text-[9.5px] font-semibold text-slate-400 mt-0.5">
                      {t("ভিসার ধরন", "Visa Types")}
                    </span>
                  </div>

                  {/* Stat 2: Processing Time */}
                  <div
                    className="flex flex-col items-center justify-center p-2 rounded-xl"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(245,158,11,0.05)",
                      border: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(245,158,11,0.12)",
                    }}
                  >
                    <span className="text-[12px] font-extrabold text-amber-400 truncate max-w-full">
                      {country.processingTime}
                    </span>
                    <span className="text-[9.5px] font-semibold text-slate-400 mt-0.5">
                      {t("প্রক্রিয়া", "Process")}
                    </span>
                  </div>

                  {/* Stat 3: Success Rate */}
                  <div
                    className="flex flex-col items-center justify-center p-2 rounded-xl"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(16,185,129,0.05)",
                      border: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(16,185,129,0.12)",
                    }}
                  >
                    <span className="text-[12px] font-extrabold text-emerald-400">
                      {country.successRate}%
                    </span>
                    <span className="text-[9.5px] font-semibold text-slate-400 mt-0.5">
                      {t("সফলতা", "Success")}
                    </span>
                  </div>
                </div>

                {/* 6. Middle Basis: Primary Action Button (View Visas) */}
                <Link
                  href={`/countries/${country.id}`}
                  onClick={() => hapticFeedback()}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm text-white transition-all duration-200 active:scale-98 shadow-md"
                  style={{
                    background: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
                    boxShadow: "0 4px 16px rgba(14,165,233,0.3)",
                    fontFamily: "'Hind Siliguri', sans-serif",
                  }}
                >
                  <span>
                    {t(
                      `${country.namebn} ভিসা পোর্টাল দেখুন`,
                      `View ${country.name} Visa Portals`
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                {/* 7. Dedicated Mini Guide Button (Linking to Article / Guide 2026) */}
                <Link
                  href={`/countries/${country.id}#guide`}
                  onClick={() => hapticFeedback()}
                  className="w-full mt-2 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all duration-200 active:scale-95"
                  style={{
                    background: isDark ? "rgba(14,165,233,0.10)" : "rgba(14,165,233,0.07)",
                    border: isDark
                      ? "1px solid rgba(14,165,233,0.25)"
                      : "1px solid rgba(14,165,233,0.22)",
                    color: isDark ? "#7dd3fc" : "#0369a1",
                    fontFamily: "'Hind Siliguri', sans-serif",
                  }}
                >
                  <BookOpen className="w-3.5 h-3.5 shrink-0 text-sky-400" />
                  <span className="truncate">
                    {t(
                      `${country.namebn} ভিসা চেক করার নিয়ম ও গাইড ২০২৬`,
                      `${country.name} Visa Check Rules & Guide 2026`
                    )}
                  </span>
                  <ChevronRight className="w-3 h-3 shrink-0 text-sky-400 opacity-70" />
                </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ══ Empty State ══ */}
        {filteredCountries.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center py-16 px-4">
            <div className="text-5xl mb-3">🔍</div>
            <h3
              className="text-lg font-bold"
              style={{ color: isDark ? "#f1f5f9" : "#0f172a" }}
            >
              {t("কোনো দেশ বা ভিসা পাওয়া যায়নি", "No countries or visas found")}
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">
              {t(
                "অনুগ্রহ করে অন্য কোনো দেশের নাম বা বানান দিয়ে পুনরায় চেষ্টা করুন।",
                "Please try searching with a different spelling or keyword."
              )}
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveRegion("all");
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-sky-400 border border-sky-500/30 active:scale-95"
            >
              {t("সব ফিল্টার ক্লিয়ার করুন", "Clear all filters")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
