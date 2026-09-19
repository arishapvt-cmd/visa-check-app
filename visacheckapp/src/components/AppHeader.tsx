"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bell, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import LottiePlayer from "./LottiePlayer";
import logoAnimation from "../../public/logo/visa-check-logo-animation.json";

/* ─── Dark / Light Toggle ───────────────────────────────────── */
function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center rounded-full transition-all duration-300 active:scale-90"
      style={{
        width: "52px",
        height: "28px",
        background: isDark
          ? "linear-gradient(135deg, #1e3a5f 0%, #0f2340 100%)"
          : "linear-gradient(135deg, #fde68a 0%, #fbbf24 100%)",
        border: isDark
          ? "1px solid rgba(14,165,233,0.35)"
          : "1px solid rgba(251,191,36,0.5)",
        boxShadow: isDark
          ? "0 2px 12px rgba(14,165,233,0.2)"
          : "0 2px 12px rgba(251,191,36,0.3)",
        padding: "3px",
      }}
    >
      <span className="absolute left-1.5" style={{ opacity: isDark ? 0.9 : 0.3 }}>
        <Moon className="w-3.5 h-3.5 text-sky-300" />
      </span>
      <span className="absolute right-1.5" style={{ opacity: isDark ? 0.3 : 0.9 }}>
        <Sun className="w-3.5 h-3.5 text-amber-600" />
      </span>
      <motion.div
        animate={{ x: isDark ? 0 : 24 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative z-10 rounded-full flex items-center justify-center"
        style={{
          width: "22px",
          height: "22px",
          background: isDark
            ? "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)"
            : "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
          boxShadow: isDark
            ? "0 2px 8px rgba(14,165,233,0.5)"
            : "0 2px 8px rgba(251,191,36,0.6)",
        }}
      >
        {isDark
          ? <Moon className="w-3 h-3 text-white" />
          : <Sun className="w-3 h-3 text-white" />
        }
      </motion.div>
    </button>
  );
}

/* ─── BN / EN Language Toggle ──────────────────────────────── */
function LangToggle() {
  const { lang, toggleLang } = useLanguage();
  const { isDark } = useTheme();
  const isBn = lang === "bn";

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="relative flex items-center rounded-full transition-all duration-300 active:scale-90"
      style={{
        width: "56px",
        height: "28px",
        background: isDark
          ? "rgba(255,255,255,0.06)"
          : "rgba(0,0,0,0.06)",
        border: isDark
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(0,0,0,0.10)",
        padding: "3px",
        overflow: "hidden",
      }}
    >
      {/* Sliding highlight pill */}
      <motion.div
        animate={{ x: isBn ? 0 : 26 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute rounded-full"
        style={{
          left: "3px",
          width: "24px",
          height: "22px",
          background: "linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)",
          boxShadow: "0 2px 8px rgba(16,185,129,0.45)",
        }}
      />
      {/* BN label */}
      <span
        className="relative z-10 flex-1 text-center font-bold"
        style={{
          fontSize: "9px",
          letterSpacing: "0.02em",
          color: isBn ? "#ffffff" : (isDark ? "#6b7280" : "#9ca3af"),
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: "color 0.2s",
        }}
      >
        BN
      </span>
      {/* EN label */}
      <span
        className="relative z-10 flex-1 text-center font-bold"
        style={{
          fontSize: "9px",
          letterSpacing: "0.02em",
          color: !isBn ? "#ffffff" : (isDark ? "#6b7280" : "#9ca3af"),
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: "color 0.2s",
        }}
      >
        EN
      </span>
    </button>
  );
}

export default function AppHeader() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div
        style={{
          background: isDark
            ? "linear-gradient(135deg, #020c1f 0%, #04142e 50%, #020817 100%)"
            : "rgba(255, 255, 255, 0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: isDark
            ? "1px solid rgba(14,165,233,0.12)"
            : "1px solid rgba(14,165,233,0.15)",
          boxShadow: isDark
            ? "0 4px 24px rgba(0,0,0,0.5)"
            : "0 4px 24px rgba(0,0,0,0.08)",
          transition: "background 0.35s ease",
        }}
      >
        {/* ── Main header row ── */}
        <div className="flex items-center justify-between px-3 h-14">

          {/* Left: Animated Logo + Brand name */}
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <div
              className="shrink-0 overflow-hidden rounded-xl"
              style={{ width: "44px", height: "44px" }}
            >
              <LottiePlayer
                animationData={logoAnimation}
                width={44}
                height={44}
                loop
                autoplay
              />
            </div>
            <div className="flex flex-col leading-none min-w-0">
              <span
                className="font-extrabold tracking-tight truncate"
                style={{
                  fontFamily: "'Hind Siliguri', 'Plus Jakarta Sans', sans-serif",
                  fontSize: "16px",
                  color: isDark ? "#7dd3fc" : "#0369a1",
                }}
              >
                {t("ভিসা চেক করার অ্যাপ", "Visa Checking App")}
              </span>
              <span
                style={{
                  fontSize: "9px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: isDark ? "rgba(148,163,184,0.7)" : "rgba(100,116,139,0.7)",
                  letterSpacing: "0.03em",
                  marginTop: "1px",
                }}
              >
                {t("বাংলাদেশি পাসপোর্টধারীদের জন্য", "For Bangladeshi passport holders")}
              </span>
            </div>
          </Link>

          {/* Right: Lang toggle + Theme toggle + Bell */}
          <div className="flex items-center gap-2">
            <LangToggle />
            <ThemeToggle />
            <button
              className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <Bell
                className="w-[18px] h-[18px]"
                style={{ color: isDark ? "#94a3b8" : "#64748b" }}
              />
              <span
                className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                style={{
                  background: "#0ea5e9",
                  border: `2px solid ${isDark ? "#020817" : "#ffffff"}`,
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
