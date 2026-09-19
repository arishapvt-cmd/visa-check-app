"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { ChevronDown, ChevronUp, Heart } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { useAndroidBridge } from "@/hooks/useAndroidBridge";
import { MiniCardAmbientBg } from "@/components/MiniCardAmbientBg";

/* ─── 20 Countries ─────────────────────────────────────────── */
const ALL_COUNTRIES = [
  { id: "india",        flag: "🇮🇳", namebn: "ভারত",        nameEn: "India",        color: "#FF9933" },
  { id: "saudi-arabia", flag: "🇸🇦", namebn: "সৌদি আরব",   nameEn: "Saudi Arabia", color: "#006C35" },
  { id: "uae",          flag: "🇦🇪", namebn: "UAE",          nameEn: "UAE",           color: "#00732F" },
  { id: "malaysia",     flag: "🇲🇾", namebn: "মালয়েশিয়া", nameEn: "Malaysia",      color: "#CC0001" },
  { id: "singapore",    flag: "🇸🇬", namebn: "সিঙ্গাপুর",  nameEn: "Singapore",     color: "#EF3340" },
  { id: "thailand",     flag: "🇹🇭", namebn: "থাইল্যান্ড", nameEn: "Thailand",      color: "#A51931" },
  { id: "uk",           flag: "🇬🇧", namebn: "UK",           nameEn: "UK",            color: "#012169" },
  { id: "usa",          flag: "🇺🇸", namebn: "USA",          nameEn: "USA",           color: "#3C3B6E" },
  { id: "qatar",        flag: "🇶🇦", namebn: "কাতার",       nameEn: "Qatar",         color: "#8D1B3D" },
  { id: "kuwait",       flag: "🇰🇼", namebn: "কুয়েত",      nameEn: "Kuwait",        color: "#007A3D" },
  { id: "oman",         flag: "🇴🇲", namebn: "ওমান",        nameEn: "Oman",          color: "#DB161B" },
  { id: "bahrain",      flag: "🇧🇭", namebn: "বাহরাইন",    nameEn: "Bahrain",       color: "#CE1126" },
  { id: "jordan",       flag: "🇯🇴", namebn: "জর্ডান",     nameEn: "Jordan",        color: "#007A3D" },
  { id: "australia",    flag: "🇦🇺", namebn: "অস্ট্রেলিয়া",nameEn: "Australia",   color: "#00008B" },
  { id: "canada",       flag: "🇨🇦", namebn: "কানাডা",     nameEn: "Canada",        color: "#FF0000" },
  { id: "italy",        flag: "🇮🇹", namebn: "ইতালি",      nameEn: "Italy",         color: "#009246" },
  { id: "germany",      flag: "🇩🇪", namebn: "জার্মানি",   nameEn: "Germany",       color: "#DD0000" },
  { id: "japan",        flag: "🇯🇵", namebn: "জাপান",      nameEn: "Japan",         color: "#BC002D" },
  { id: "south-korea",  flag: "🇰🇷", namebn: "দক্ষিণ কোরিয়া",nameEn: "S. Korea", color: "#003478" },
  { id: "turkey",       flag: "🇹🇷", namebn: "তুরস্ক",     nameEn: "Turkey",        color: "#E30A17" },
];

const VISIBLE_DEFAULT = 8;

/* ─── Country Card (with Favorite button) ──────────────────── */
function CountryCard({
  country,
  index,
  isDark,
  lang,
  isFav,
  onToggleFav,
}: {
  country: (typeof ALL_COUNTRIES)[0];
  index: number;
  isDark: boolean;
  lang: "bn" | "en";
  isFav: boolean;
  onToggleFav: (id: string) => void;
}) {
  // Staggered wind fluttering delay so neighboring flags don't wave synchronously
  const waveDelay = `${(index % 4) * 0.45}s`;
  const sheenDelay = `${(index % 4) * 0.45 + 0.3}s`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="relative"
    >
      <Link
        href={`/countries/${country.id}`}
        className="flex flex-col items-center gap-1.5 group"
      >
        {/* Icon Card with Frosted Glass & Ambient Canvas */}
        <div
          className="w-full aspect-square rounded-2xl flex flex-col items-center justify-center relative overflow-hidden transition-all duration-200 group-active:scale-92 group-active:brightness-110"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(15, 23, 42, 0.78) 0%, rgba(10, 15, 29, 0.9) 100%)"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(240, 248, 255, 0.85) 100%)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: isDark
              ? `1px solid ${country.color}33`
              : `1px solid rgba(255, 255, 255, 0.95)`,
            boxShadow: isDark
              ? `0 4px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.16), 0 0 14px ${country.color}18`
              : `0 4px 16px rgba(14, 165, 233, 0.1), 0 1px 3px rgba(0, 0, 0, 0.04), inset 0 1px 0 #ffffff`,
          }}
        >
          {/* 7-Layer Ambient Micro-Canvas Background (Vector Silhouettes + IATA telemetry + Dot Matrix) */}
          <MiniCardAmbientBg countryId={country.id} color={country.color} isDark={isDark} />

          {/* 3D Waving Flag in Wind with Sunlight Sheen */}
          <div
            className="relative z-10 flex items-center justify-center select-none"
            style={{
              animation: `flagWindWave 3.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite`,
              animationDelay: waveDelay,
              transformOrigin: "left center",
              willChange: "transform, filter",
            }}
          >
            {/* Flag Emoji */}
            <span className="text-4xl leading-none block select-none">
              {country.flag}
            </span>

            {/* Sunlight Sheen Overlay fluttering over flag cloth */}
            <div
              className="absolute inset-0 pointer-events-none rounded-sm overflow-hidden"
              style={{
                background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.7) 50%, transparent 80%)",
                animation: `flagSunSheen 3.4s ease-in-out infinite`,
                animationDelay: sheenDelay,
                mixBlendMode: isDark ? "overlay" : "screen",
              }}
            />
          </div>

          {/* ❤️ Favorite badge — top-right corner */}
          <button
            className="absolute top-1.5 right-1.5 z-20 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90"
            style={{
              background: isFav
                ? "rgba(239,68,68,0.9)"
                : isDark ? "rgba(15,23,42,0.75)" : "rgba(255,255,255,0.85)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              border: isFav
                ? "1px solid rgba(239,68,68,0.5)"
                : `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"}`,
              boxShadow: isFav ? "0 2px 6px rgba(239,68,68,0.4)" : "none",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleFav(country.id);
            }}
            aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className="w-3 h-3"
              style={{
                color: isFav ? "#fff" : isDark ? "#475569" : "#94a3b8",
                fill: isFav ? "#fff" : "none",
              }}
            />
          </button>
        </div>

        {/* Country Name */}
        <span
          className="text-[11px] font-bold text-center transition-colors leading-tight px-0.5 group-active:text-sky-400"
          style={{
            fontFamily: "'Hind Siliguri', sans-serif",
            color: isDark ? "#cbd5e1" : "#334155",
          }}
        >
          {lang === "bn" ? country.namebn : country.nameEn}
        </span>
      </Link>
    </motion.div>
  );
}

/* ─── Favorites Section ─────────────────────────────────────── */
function FavoritesSection({
  favorites,
  isDark,
  lang,
  onToggleFav,
}: {
  favorites: string[];
  isDark: boolean;
  lang: "bn" | "en";
  onToggleFav: (id: string) => void;
}) {
  const favCountries = favorites
    .map((id) => ALL_COUNTRIES.find((c) => c.id === id))
    .filter(Boolean) as (typeof ALL_COUNTRIES)[0][];

  if (favCountries.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="px-3 mb-3"
    >
      <div
        className="rounded-2xl p-3"
        style={{
          background: isDark
            ? "linear-gradient(135deg, rgba(239,68,68,0.07) 0%, rgba(239,68,68,0.04) 100%)"
            : "linear-gradient(135deg, rgba(239,68,68,0.06) 0%, rgba(255,255,255,0.9) 100%)",
          border: isDark
            ? "1px solid rgba(239,68,68,0.2)"
            : "1px solid rgba(239,68,68,0.2)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-4 h-4" style={{ color: "#ef4444", fill: "#ef4444" }} />
          <span
            className="font-bold text-[13px]"
            style={{
              fontFamily: "'Hind Siliguri', sans-serif",
              color: isDark ? "#fca5a5" : "#dc2626",
            }}
          >
            {lang === "bn" ? "আমার পছন্দের দেশ" : "My Favorites"}
          </span>
        </div>

        {/* Country chips */}
        <div className="flex flex-wrap gap-2">
          {favCountries.map((c) => (
            <Link
              key={c.id}
              href={`/countries/${c.id}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all active:scale-95"
              style={{
                background: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.9)",
                border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <span className="text-xl leading-none">{c.flag}</span>
              <span
                className="text-[12px] font-semibold"
                style={{
                  fontFamily: "'Hind Siliguri', sans-serif",
                  color: isDark ? "#e2e8f0" : "#1e293b",
                }}
              >
                {lang === "bn" ? c.namebn : c.nameEn}
              </span>
              {/* Remove button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggleFav(c.id);
                }}
                className="ml-1 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: "rgba(239,68,68,0.15)" }}
              >
                <span style={{ color: "#ef4444", fontSize: "10px", fontWeight: 700 }}>✕</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────── */
export default function HomePage() {
  const [expanded, setExpanded] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const { isDark } = useTheme();
  const { t, lang } = useLanguage();
  const bridge = useAndroidBridge();

  // Load favorites on mount
  useEffect(() => {
    setFavorites(bridge.getFavorites());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFavorite = useCallback((countryId: string) => {
    const isFav = favorites.includes(countryId);
    if (isFav) {
      bridge.removeFavorite(countryId);
      setFavorites((prev) => prev.filter((id) => id !== countryId));
    } else {
      bridge.saveFavorite(countryId);
      setFavorites((prev) => [...prev, countryId]);
    }
  }, [favorites, bridge]);

  const visibleCountries = expanded
    ? ALL_COUNTRIES
    : ALL_COUNTRIES.slice(0, VISIBLE_DEFAULT);

  const hiddenCount = ALL_COUNTRIES.length - VISIBLE_DEFAULT;

  return (
    <div
      className="min-h-screen transition-colors duration-350"
      style={{
        backgroundColor: "var(--bg-page)",
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 58px)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 80px)",
      }}
    >

      {/* ══ SECTION 1 — Glassy Title Button (Flush below header) ══ */}
      <div className="flex justify-center px-3 mb-2.5 mt-1.5">
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
            className="font-bold text-[14px] sm:text-[15px] tracking-tight truncate"
            style={{
              fontFamily: "'Hind Siliguri', sans-serif",
              color: isDark ? "#7dd3fc" : "#0369a1",
            }}
          >
            {t("আপনার পছন্দের দেশ নির্বাচন করুন", "Choose your preferred country")}
          </span>
          <span className="text-base sm:text-lg leading-none shrink-0">👇</span>
        </motion.div>
      </div>

      {/* ══ SECTION 2 — Favorites (shown when at least 1 saved) ══ */}
      <AnimatePresence>
        {favorites.length > 0 && (
          <FavoritesSection
            key="favs"
            favorites={favorites}
            isDark={isDark}
            lang={lang}
            onToggleFav={toggleFavorite}
          />
        )}
      </AnimatePresence>

      {/* ══ SECTION 3 — Country Grid ══════════════════════════════ */}
      <div className="px-3 mb-3">
        <div
          className="rounded-2xl p-3.5"
          style={{
            background: isDark
              ? "linear-gradient(145deg, #0b1628 0%, #060f1e 100%)"
              : "#ffffff",
            border: isDark
              ? "1px solid rgba(255,255,255,0.07)"
              : "1px solid rgba(14,165,233,0.12)",
            boxShadow: isDark
              ? "0 8px 32px rgba(0,0,0,0.4)"
              : "0 4px 20px rgba(14,165,233,0.08)",
          }}
        >
          <div className="grid grid-cols-4 gap-3">
            {visibleCountries.map((country, i) => (
              <CountryCard
                key={country.id}
                country={country}
                index={i}
                isDark={isDark}
                lang={lang}
                isFav={favorites.includes(country.id)}
                onToggleFav={toggleFavorite}
              />
            ))}
          </div>

          {/* Expand / Collapse */}
          <AnimatePresence>
            {!expanded && (
              <motion.button
                key="show-more"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpanded(true)}
                className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95"
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(99,102,241,0.12) 100%)"
                    : "linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(99,102,241,0.08) 100%)",
                  border: isDark
                    ? "1px solid rgba(14,165,233,0.25)"
                    : "1px solid rgba(14,165,233,0.3)",
                  color: isDark ? "#38bdf8" : "#0284c7",
                  fontFamily: "'Hind Siliguri', sans-serif",
                }}
              >
                <span>{t(`আরও দেখুন (${hiddenCount}টি দেশ)`, `Show More (${hiddenCount} Countries)`)}</span>
                <ChevronDown className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {expanded && (
              <motion.button
                key="show-less"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpanded(false)}
                className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95"
                style={{
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                  border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
                  color: isDark ? "#94a3b8" : "#64748b",
                  fontFamily: "'Hind Siliguri', sans-serif",
                }}
              >
                <span>{t("কম দেখুন", "Show Less")}</span>
                <ChevronUp className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ══ SECTION 4 — Stats & How it works ═════════════════════ */}
      <div className="px-3 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.45 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: isDark
              ? "linear-gradient(135deg,rgba(14,165,233,0.07) 0%,rgba(99,102,241,0.07) 100%)"
              : "linear-gradient(135deg,rgba(14,165,233,0.05) 0%,rgba(99,102,241,0.05) 100%)",
            border: isDark
              ? "1px solid rgba(14,165,233,0.15)"
              : "1px solid rgba(14,165,233,0.18)",
          }}
        >
          <div className="px-4 pt-4 pb-2">
            <h3
              className="font-extrabold text-[13px]"
              style={{
                fontFamily: "'Hind Siliguri', sans-serif",
                color: isDark ? "#e2e8f0" : "#0f172a",
              }}
            >
              {t("সারাংশ", "Quick Overview")}
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-2 px-3 pb-3">
            {[
              { value: "২০", label: t("দেশ", "Countries"), icon: "🌍", color: "#0ea5e9" },
              { value: "৯০+", label: t("ভিসা ধরন", "Visa Types"), icon: "📋", color: "#8b5cf6" },
              { value: "100%", label: t("সরকারি তথ্য", "Official Data"), icon: "✅", color: "#10b981" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 py-3 rounded-2xl"
                style={{
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.8)",
                  border: isDark ? `1px solid ${stat.color}20` : `1px solid ${stat.color}25`,
                }}
              >
                <span className="text-xl leading-none">{stat.icon}</span>
                <span
                  className="font-extrabold text-[15px]"
                  style={{ color: stat.color, fontFamily: "'Hind Siliguri', sans-serif" }}
                >{stat.value}</span>
                <span
                  className="text-[10px] font-medium text-center"
                  style={{ color: isDark ? "#64748b" : "#94a3b8", fontFamily: "'Hind Siliguri', sans-serif" }}
                >{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="px-3 pb-4 flex flex-col gap-2">
            {[
              { step: "01", text: t("দেশ বেছে নিন", "Choose a country"), color: "#0ea5e9" },
              { step: "02", text: t("ভিসা ধরন সিলেক্ট করুন", "Select visa type"), color: "#8b5cf6" },
              { step: "03", text: t("আবেদন নম্বর দিয়ে চেক করুন", "Enter details & check"), color: "#10b981" },
            ].map(({ step, text, color }) => (
              <div key={step} className="flex items-center gap-3">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-extrabold shrink-0"
                  style={{ background: color + "22", color, border: `1.5px solid ${color}55` }}
                >{step}</span>
                <span
                  className="text-[12px] font-semibold"
                  style={{ color: isDark ? "#cbd5e1" : "#334155", fontFamily: "'Hind Siliguri', sans-serif" }}
                >{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="h-4" />
    </div>
  );
}
