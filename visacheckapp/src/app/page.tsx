"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { ChevronDown, ChevronUp, Heart, Search } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { useAndroidBridge } from "@/hooks/useAndroidBridge";
import { MiniCardAmbientBg } from "@/components/MiniCardAmbientBg";
import { CountryBannerSlider } from "@/components/CountryBannerSlider";
import { CountryGuideCardsGrid } from "@/components/CountryGuideCardsGrid";
import GoldenGlassTitle from "@/components/GoldenGlassTitle";
import InfoResourceCards from "@/components/InfoResourceCards";
import FinalFooter from "@/components/FinalFooter";
import { playSweetTune } from "@/lib/sound";

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

/* ─── Country Card (with Flag Ring Badge & Navy+Gold Glass) ─── */
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
  return (
    <motion.div
      whileTap={{ scale: 0.92 }}
      className="relative"
    >
      <Link
        href={`/countries/${country.id}`}
        onClick={() => playSweetTune()}
        className="w-full rounded-[16px] flex flex-col items-center justify-center p-2 sm:p-2.5 transition-all duration-200 group relative overflow-hidden"
        style={{
          background: isDark
            ? "linear-gradient(160deg, rgba(58, 74, 142, 0.38) 0%, rgba(27, 35, 64, 0.60) 100%)"
            : "linear-gradient(160deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 255, 0.90) 100%)",
          border: isDark
            ? "1px solid rgba(217, 177, 92, 0.30)"
            : "1px solid rgba(217, 177, 92, 0.35)",
          borderRadius: "16px",
          boxShadow: isDark
            ? "0 10px 20px rgba(0, 0, 0, 0.35)"
            : "0 4px 12px rgba(0, 0, 0, 0.08)",
          minHeight: "96px",
        }}
      >
        {/* Flag Icon with 2px circular gold gradient ring */}
        <div
          className="w-12 h-12 rounded-full p-[2px] flex items-center justify-center relative shadow-sm shrink-0"
          style={{
            background: "linear-gradient(135deg, #D9B15C 0%, #F3D89B 100%)",
          }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
            style={{
              background: isDark ? "#0d1326" : "#f8fafc",
            }}
          >
            <span className="text-[26px] leading-none block select-none">
              {country.flag}
            </span>
          </div>
        </div>

        {/* Country Name */}
        <span
          className="text-[11px] sm:text-[12px] font-semibold text-center leading-tight truncate max-w-full px-0.5 mt-1.5"
          style={{
            fontFamily: "'Hind Siliguri', sans-serif",
            color: isDark ? "#F1EAD9" : "#1e293b",
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
  const [searchQuery, setSearchQuery] = useState("");
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

  const filteredCountries = searchQuery.trim()
    ? ALL_COUNTRIES.filter(
        (c) =>
          c.namebn.includes(searchQuery.trim()) ||
          c.nameEn.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
          c.id.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    : ALL_COUNTRIES;

  const visibleCountries = expanded
    ? filteredCountries
    : filteredCountries.slice(0, VISIBLE_DEFAULT);

  return (
    <div
      className="min-h-screen transition-colors duration-350"
      style={{
        background: isDark
          ? "radial-gradient(120% 60% at 50% 0%, #171B34 0%, #0B0D1C 55%)"
          : "var(--bg-page)",
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 58px)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 8px)",
      }}
    >

      {/* ══ SECTION 1 — Country Search Bar ("দেশ খুঁজুন...") ══ */}
      <div className="px-3 mt-1.5 mb-3">
        <div
          className="flex items-center gap-2.5 px-3.5 py-2.5 transition-all duration-200"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(217, 177, 92, 0.22)",
            borderRadius: "14px",
          }}
        >
          <Search
            className="w-4 h-4 shrink-0"
            style={{ color: "#8A8FA3" }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === "bn" ? "দেশ খুঁজুন..." : "Search country..."}
            className="w-full bg-transparent outline-none text-[13px] font-medium placeholder:text-[#8A8FA3]"
            style={{
              color: "#F5F6FA",
              fontFamily: "'Hind Siliguri', sans-serif",
            }}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-[#8A8FA3] text-xs font-bold px-1"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ══ Favorites (shown when at least 1 saved) ══ */}
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

      {/* ══ SECTION TITLE 1 — "জনপ্রিয় দেশ" (Golden Glassy Button) ══ */}
      <GoldenGlassTitle title={lang === "bn" ? "জনপ্রিয় দেশ" : "Popular Countries"} />

      {/* ══ SECTION 2 — Top Quick-Access Flag Grid (4 Columns) ══ */}
      <div className="px-3">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
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
      </div>

      {/* ══ PART C — Circular Expand Button #1 (Floating on Seam) ══ */}
      {filteredCountries.length > VISIBLE_DEFAULT && (
        <div className="relative z-20 flex justify-center -mb-5 mt-2">
          <motion.button
            type="button"
            aria-label="আরও দেশ দেখুন"
            onClick={() => {
              playSweetTune();
              setExpanded(!expanded);
            }}
            whileTap={{ scale: 0.9 }}
            className="w-[42px] h-[42px] rounded-full flex items-center justify-center cursor-pointer select-none"
            style={{
              background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
              border: "2px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 8px 20px rgba(217, 177, 92, 0.5), 0 2px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <ChevronDown className="w-5 h-5 text-[#1B2340]" strokeWidth={2.5} />
            </motion.div>
          </motion.button>
        </div>
      )}

      {/* ══ SECTION 3.5 — 20 Country Compact Banner Slider (Exact 110px) ══ */}
      <CountryBannerSlider />

      {/* ══ SECTION 3.8 — 20 Country Mini Cards Grid (Style A Holographic Squircle & Bottom Sheet Drawer) ══ */}
      <CountryGuideCardsGrid />

      {/* ══ 4 Compact Logo-Themed Resource Cards (Replacing Old Summary) ══ */}
      <InfoResourceCards lang={lang} />

      {/* ══ FINAL FOOTER — Slim Trust Bar Card (No More Scrolling Below) ══ */}
      <FinalFooter lang={lang} />
    </div>
  );
}
