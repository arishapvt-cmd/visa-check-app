"use client";

import { motion, AnimatePresence } from "framer-motion";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import {
  Shield, Clock, TrendingUp, ChevronRight,
  X, Globe, Lock, Info, ExternalLink, BookOpen,
} from "lucide-react";
import Link from "next/link";
import { COUNTRIES, type VisaType } from "@/data/countries";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { useAndroidBridge } from "@/hooks/useAndroidBridge";

/* ─── Clean Fee Badge Formatter ──────────────────────────── */
function formatFeeBadge(feeStr: string): string {
  if (!feeStr) return "N/A";
  if (feeStr.includes("বিনামূল্যে") || feeStr.toLowerCase().includes("free")) return "বিনামূল্যে";
  if (feeStr.includes("নিয়োগকর্তা") || feeStr.toLowerCase().includes("employer")) return "নিয়োগকর্তা";
  
  // Extract Bengali ranges like ৫-৮ লক্ষ টাকা or ১০,০০০-২০,০০০ টাকা or ৯,০০০ টাকা
  const matchRangeBn = feeStr.match(/[০-৯,-]+(\s*(লক্ষ|হাজার))?(\s*টাকা)?/);
  if (matchRangeBn && matchRangeBn[0].trim().length > 1) return matchRangeBn[0].trim();

  // Extract numeric amounts
  const numMatch = feeStr.match(/([০-৯,]+(\s*টাকা)?|[0-9,]+|\$[0-9]+|USD\s*[0-9]+|MYR\s*[0-9]+)/);
  if (numMatch) return numMatch[0];
  return feeStr.length > 12 ? feeStr.slice(0, 11) + "…" : feeStr;
}

/* ─── Difficulty badges ──────────────────────────────────── */
const DIFF = {
  easy:   { bn: "সহজ",   en: "Easy",   color: "#10b981", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.25)" },
  medium: { bn: "মাঝারি", en: "Medium", color: "#f59e0b", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.25)" },
  hard:   { bn: "কঠিন",  en: "Hard",   color: "#ef4444", bg: "rgba(239,68,68,0.12)",  border: "rgba(239,68,68,0.25)"  },
};

/* ─── In-App Visa Check Overlay (iframe) ────────────────── */
function VisaCheckOverlay({
  visa,
  countryName,
  onClose,
}: {
  visa: VisaType;
  countryName: string;
  onClose: () => void;
}) {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const { openGovPortal } = useAndroidBridge();

  const openInBrowser = () => {
    const seoTitle = visa.guideTitleBn || `${countryName} ${visa.namebn} চেক করার নিয়ম ২০২৬`;
    const seoSubtitle = visa.guideSubtitleBn || "পাসপোর্ট ও আবেদন নম্বর দিয়ে লাইভ ভেরিফিকেশনের সহজ পদ্ধতি";
    openGovPortal(visa.checkUrl, visa.namebn, countryName, seoTitle, seoSubtitle);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col"
      style={{ background: isDark ? "#020817" : "#f8fafc" }}
    >
      {/* ─ Header bar ─ */}
      <div
        className="flex items-center gap-3 px-3 shrink-0"
        style={{
          paddingTop: "calc(env(safe-area-inset-top,0px) + 8px)",
          paddingBottom: "10px",
          background: isDark
            ? "linear-gradient(135deg,#020c1f 0%,#04142e 100%)"
            : "rgba(255,255,255,0.97)",
          borderBottom: isDark
            ? "1px solid rgba(14,165,233,0.15)"
            : "1px solid rgba(14,165,233,0.2)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all active:scale-90"
          style={{
            background: isDark ? "rgba(239,68,68,0.12)" : "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.25)",
          }}
        >
          <X className="w-4 h-4 text-red-400" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="text-xl leading-none">{visa.icon}</span>
          <div className="min-w-0">
            <p
              className="font-bold text-sm leading-tight truncate"
              style={{ color: isDark ? "#fff" : "#0f172a", fontFamily: "'Hind Siliguri',sans-serif" }}
            >
              {t(visa.namebn, visa.name)}
            </p>
            <p className="text-[10px] truncate" style={{ color: isDark ? "#64748b" : "#94a3b8" }}>
              {countryName} · {t("সরকারি পোর্টাল", "Official Portal")}
            </p>
          </div>
        </div>

        {/* Live badge */}
        <div
          className="shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-bold"
          style={{
            background: "rgba(16,185,129,0.12)",
            border: "1px solid rgba(16,185,129,0.25)",
            color: "#10b981",
          }}
        >
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          LIVE
        </div>

        {/* Open in external browser button */}
        <button
          onClick={openInBrowser}
          className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all active:scale-90"
          style={{
            background: isDark ? "rgba(14,165,233,0.15)" : "rgba(14,165,233,0.1)",
            border: "1px solid rgba(14,165,233,0.3)",
          }}
          title={t("ব্রাউজারে খুলুন", "Open in Browser")}
        >
          <ExternalLink className="w-4 h-4 text-sky-400" />
        </button>
      </div>

      {/* ─ Trust strip ─ */}
      <div
        className="flex items-center gap-4 px-4 py-2 text-[10px] font-medium shrink-0"
        style={{
          background: isDark ? "rgba(14,165,233,0.06)" : "rgba(14,165,233,0.04)",
          borderBottom: isDark
            ? "1px solid rgba(14,165,233,0.1)"
            : "1px solid rgba(14,165,233,0.12)",
        }}
      >
        <span className="flex items-center gap-1" style={{ color: "#0ea5e9" }}>
          <Shield className="w-3 h-3" />
          {t("সরকারি সূত্র", "Official Source")}
        </span>
        <span className="flex items-center gap-1" style={{ color: "#10b981" }}>
          <Lock className="w-3 h-3" />
          {t("নিরাপদ", "Secure")}
        </span>
        <span className="flex items-center gap-1 ml-auto" style={{ color: isDark ? "#475569" : "#94a3b8" }}>
          <Globe className="w-3 h-3" />
          {visa.checkUrl.replace("https://", "").split("/")[0]}
        </span>
      </div>

      {/* ─ Iframe ─ */}
      <iframe
        src={visa.checkUrl}
        className="flex-1 w-full border-0"
        title={`${visa.name} Status Check`}
        allow="forms"
        sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation"
      />

      {/* ─ Fallback footer bar ─ */}
      <div
        className="px-4 py-2.5 flex items-center justify-between shrink-0"
        style={{
          background: isDark ? "#020c1f" : "#f1f5f9",
          borderTop: isDark ? "1px solid rgba(14,165,233,0.15)" : "1px solid rgba(14,165,233,0.2)",
          paddingBottom: "calc(env(safe-area-inset-bottom,0px) + 8px)",
        }}
      >
        <span className="text-[11px]" style={{ color: isDark ? "#94a3b8" : "#64748b" }}>
          {t("পোর্টাল দেখতে সমস্যা হলে ব্রাউজারে খুলুন", "If portal doesn't load, open in browser")}
        </span>
        <button
          onClick={openInBrowser}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white transition-all active:scale-95 shadow-md"
          style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)" }}
        >
          <ExternalLink className="w-3.5 h-3.5" />
          {t("ব্রাউজারে খুলুন", "Open in Browser")}
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Visa Type Card ─────────────────────────────────────── */
function VisaCard({
  visa,
  countryId,
  countryName,
  countryFlag,
  index,
  onCheck,
}: {
  visa: VisaType;
  countryId: string;
  countryName: string;
  countryFlag: string;
  index: number;
  onCheck: (visa: VisaType) => void;
}) {
  const { isDark } = useTheme();
  const { t, lang } = useLanguage();
  const { openGovPortal, hapticFeedback } = useAndroidBridge();
  const isBn = lang === "bn";
  const diff = DIFF[visa.difficulty];

  const handleOpenPortal = () => {
    hapticFeedback();
    const visaTypeNameBn = visa.namebn.includes("ভিসা") ? `${visa.namebn} চেক` : `${visa.namebn} ভিসা চেক`;
    const visaTypeNameEn = visa.name.toLowerCase().includes("visa") ? `${visa.name} Check` : `${visa.name} Visa Check`;
    const visaPortalTitle = `${countryFlag} ${t(visaTypeNameBn, visaTypeNameEn)}`;
    const seoTitle = visa.guideTitleBn || `${countryName} ${visaTypeNameBn} করার সঠিক নিয়ম ও পোর্টাল গাইড ২০২৬`;
    const seoSubtitle = visa.guideSubtitleBn || "পাসপোর্ট ও আবেদন নম্বর দিয়ে সরাসরি লাইভ ভেরিফিকেশনের পূর্ণাঙ্গ গাইড";
    
    let savedPassport = "";
    let savedAppNo = "";
    if (typeof window !== "undefined") {
      savedPassport = localStorage.getItem("last_passport_no") || "";
      savedAppNo = localStorage.getItem("last_app_no") || "";
    }

    openGovPortal(
      visa.checkUrl,
      visaPortalTitle,
      countryName,
      seoTitle,
      seoSubtitle,
      savedPassport,
      savedAppNo
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4, type: "spring", stiffness: 120 }}
      className="relative overflow-hidden flex flex-col"
      style={{
        borderRadius: "24px",
        background: isDark
          ? `linear-gradient(160deg, ${visa.color}16 0%, rgba(2,8,23,0.98) 60%)`
          : `linear-gradient(160deg, ${visa.color}10 0%, #ffffff 70%)`,
        border: `2px solid ${visa.color}66`,
        boxShadow: isDark
          ? `0 0 0 1px ${visa.color}20, 0 10px 36px rgba(0,0,0,0.65), 0 2px 12px ${visa.color}30`
          : `0 0 0 1px ${visa.color}25, 0 10px 30px rgba(0,0,0,0.12), 0 2px 10px ${visa.color}20`,
      }}
    >
      {/* Top glow accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3.5px]"
        style={{
          background: `linear-gradient(90deg, ${visa.color}FF 0%, ${visa.color}66 60%, transparent 100%)`,
        }}
      />

      {/* Card body */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Top row: Focused Annotation Badge + Larger Prominent Title + Description */}
        <div className="flex flex-col items-center text-center mb-3">
          {/* Focused Annotation Tag */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold mb-2 shadow-sm"
            style={{
              background: diff.bg,
              border: `1.5px solid ${diff.border}`,
              color: diff.color,
            }}
          >
            <span>{diff.bn === "সহজ" ? "🟢" : diff.bn === "মাঝারি" ? "🟡" : "🔴"}</span>
            <span>{t(diff.bn, diff.en)}</span>
            <span className="opacity-40">·</span>
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              {t("১০০% সরকারি ডেটাবেস", "100% Official Database")}
            </span>
          </div>

          {/* Large Focused Title with explicit Visa Type and Check */}
          <h3
            className="font-black leading-tight text-[19px] sm:text-[21px] tracking-tight mb-1"
            style={{
              color: isDark ? "#ffffff" : "#0f172a",
              fontFamily: "'Hind Siliguri',sans-serif",
              textShadow: isDark ? `0 2px 14px ${visa.color}50` : "none",
            }}
          >
            {t(
              visa.namebn.includes("ভিসা") ? `${visa.namebn} চেক` : `${visa.namebn} ভিসা চেক`,
              visa.name.toLowerCase().includes("visa") ? `${visa.name} Check` : `${visa.name} Visa Check`
            )}
          </h3>

          <p
            className="text-[12px] leading-snug line-clamp-1 max-w-sm"
            style={{ color: isDark ? "#94a3b8" : "#64748b" }}
          >
            {t(visa.descriptionbn, visa.description)}
          </p>
        </div>

        {/* ── Auto-Responsive Middle Section: Visa Type Icon + Mini Cards ── */}
        <div
          className="p-3 rounded-2xl mb-3 flex flex-col items-center justify-center transition-all"
          style={{
            background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
            border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.06)",
          }}
        >
          {/* Prominent Centered Visa Type Icon Badge */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-2.5 transition-transform active:scale-95"
            style={{
              background: isDark ? `${visa.color}25` : `${visa.color}18`,
              border: `2px solid ${visa.color}77`,
              boxShadow: `0 6px 20px ${visa.color}35`,
            }}
          >
            {visa.icon}
          </div>

          {/* 3 Auto-Responsive Mini Cards */}
          <div className="w-full grid grid-cols-3 gap-2">
            {/* Time — sky blue */}
            <div
              className="rounded-xl p-2.5 text-center flex flex-col items-center justify-center transition-all"
              style={{
                background: isDark ? "rgba(14,165,233,0.16)" : "rgba(14,165,233,0.10)",
                border: "1.5px solid rgba(14,165,233,0.40)",
              }}
            >
              <Clock className="w-3.5 h-3.5 text-sky-400 mb-1 shrink-0" />
              <div
                className="text-[11px] font-black leading-tight"
                style={{ color: isDark ? "#7dd3fc" : "#0369a1" }}
              >
                {visa.processingTime.split(" ").slice(0, 2).join(" ")}
              </div>
              <div className="text-[9px] font-medium mt-0.5" style={{ color: isDark ? "#94a3b8" : "#64748b" }}>
                {t("সময়", "Time")}
              </div>
            </div>

            {/* Fee — vibrant amber */}
            <div
              className="rounded-xl p-2.5 text-center flex flex-col items-center justify-center transition-all"
              style={{
                background: isDark ? "rgba(245,158,11,0.16)" : "rgba(245,158,11,0.10)",
                border: "1.5px solid rgba(245,158,11,0.40)",
              }}
            >
              <span className="text-xs mb-1">💰</span>
              <div
                className="text-[11px] font-black leading-tight"
                style={{ color: isDark ? "#fde68a" : "#92400e" }}
              >
                {formatFeeBadge(t(visa.feebn, visa.fee))}
              </div>
              <div className="text-[9px] font-medium mt-0.5" style={{ color: isDark ? "#94a3b8" : "#64748b" }}>
                {t("ফি", "Fee")}
              </div>
            </div>

            {/* Success Rate — emerald green */}
            <div
              className="rounded-xl p-2.5 text-center flex flex-col items-center justify-center transition-all"
              style={{
                background: isDark ? "rgba(16,185,129,0.16)" : "rgba(16,185,129,0.10)",
                border: "1.5px solid rgba(16,185,129,0.40)",
              }}
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400 mb-1 shrink-0" />
              <div
                className="text-[11px] font-black"
                style={{ color: isDark ? "#6ee7b7" : "#065f46" }}
              >
                {visa.successRate}%
              </div>
              <div className="text-[9px] font-medium mt-0.5" style={{ color: isDark ? "#94a3b8" : "#64748b" }}>
                {t("সফলতা", "Success")}
              </div>
            </div>
          </div>
        </div>

        {/* Requirements chips */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3">
          {(isBn && visa.requirementsbn ? visa.requirementsbn : visa.requirements).slice(0, 2).map((req, i) => (
            <span
              key={i}
              className="text-[9.5px] px-2 py-0.5 rounded-full font-medium leading-tight flex items-center gap-1"
              style={{
                background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                border: isDark ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(0,0,0,0.08)",
                color: isDark ? "#94a3b8" : "#64748b",
              }}
            >
              ✓ {req.length > 15 ? req.slice(0, 14) + "…" : req}
            </span>
          ))}
          {visa.requirements.length > 2 && (
            <span className="text-[9.5px] font-bold" style={{ color: visa.color }}>
              +{visa.requirements.length - 2} {t("আরও", "more")}
            </span>
          )}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: isDark ? `${visa.color}25` : `${visa.color}18`, margin: "0 14px" }} />

      {/* ─ CTA Button Area (Blue Arrow from user screenshot) ─ */}
      <div className="p-3.5">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleOpenPortal}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-white shadow-lg transition-all active:scale-95"
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)", // High-converting amber-orange gradient
            boxShadow: "0 6px 22px rgba(245,158,11,0.38), 0 2px 6px rgba(0,0,0,0.2)",
            fontFamily: "'Hind Siliguri',sans-serif",
            fontSize: "14px",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <Shield className="w-4 h-4 text-white shrink-0" />
          <span className="truncate">
            {t(
              visa.namebn.includes("ভিসা") ? `${visa.namebn} চেক করুন (অফিসিয়াল পোর্টাল)` : `${visa.namebn} ভিসা চেক করুন (অফিসিয়াল পোর্টাল)`,
              visa.name.toLowerCase().includes("visa") ? `Check ${visa.name} (Official Portal)` : `Check ${visa.name} Visa (Official Portal)`
            )}
          </span>
          <ChevronRight className="w-4 h-4 text-white/90 shrink-0" />
        </motion.button>

        {/* Secondary helper links below the button */}
        <div className="mt-2.5 flex items-center justify-between px-1 text-[10.5px]">
          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <Lock className="w-3 h-3 text-emerald-400" />
            {t("১০০% সরকারি লাইভ পোর্টাল", "100% Real Govt Portal")}
          </span>
          <Link
            href={`/countries/${countryId}/${visa.id}`}
            className="font-bold flex items-center gap-1 transition-all hover:underline"
            style={{ color: isDark ? "#38bdf8" : "#0284c7" }}
          >
            <span>{t("কাগজপত্র ও গাইড", "Docs & Guide")}</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Country Hero ───────────────────────────────────────── */
function CountryHero({ country }: { country: NonNullable<ReturnType<typeof COUNTRIES.find>> }) {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const diff = DIFF[country!.difficulty];

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl mb-4 px-4 py-5"
      style={{
        background: isDark
          ? "linear-gradient(135deg,rgba(14,165,233,0.10) 0%,rgba(99,102,241,0.10) 100%)"
          : "linear-gradient(135deg,rgba(14,165,233,0.08) 0%,rgba(99,102,241,0.08) 100%)",
        border: isDark
          ? "1px solid rgba(14,165,233,0.2)"
          : "1px solid rgba(14,165,233,0.2)",
        boxShadow: isDark
          ? "0 8px 32px rgba(0,0,0,0.4)"
          : "0 8px 32px rgba(14,165,233,0.1)",
      }}
    >
      {/* Glow blobs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl"
        style={{ background: "rgba(14,165,233,0.1)" }} />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-3xl"
        style={{ background: "rgba(99,102,241,0.1)" }} />

      <div className="relative z-10 flex items-center gap-4">
        {/* Flag */}
        <div className="text-5xl leading-none drop-shadow-lg">{country!.flag}</div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h1
            className="font-extrabold text-xl leading-tight"
            style={{
              fontFamily: "'Hind Siliguri',sans-serif",
              background: isDark
                ? "linear-gradient(135deg,#fff 0%,#7dd3fc 100%)"
                : "linear-gradient(135deg,#0f172a 0%,#0369a1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t(country!.namebn, country!.name)}
          </h1>
          <p className="text-xs mt-0.5 line-clamp-2"
            style={{ color: isDark ? "#64748b" : "#94a3b8" }}>
            {t(country!.descriptionbn, country!.description)}
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="relative z-10 mt-4 grid grid-cols-4 gap-2">
        {[
          { icon: "📋", valBn: `${country!.visaTypes.length}টি`, valEn: `${country!.visaTypes.length}`, labelBn: "ভিসার ধরন", labelEn: "Visa Types", color: "#0ea5e9" },
          { icon: "⏱", valBn: country!.processingTime, valEn: country!.processingTime, labelBn: "প্রক্রিয়া", labelEn: "Process", color: "#f59e0b" },
          { icon: "✅", valBn: `${country!.successRate}%`, valEn: `${country!.successRate}%`, labelBn: "সফলতা", labelEn: "Success", color: "#10b981" },
          { icon: "", valBn: t(diff.bn, diff.en), valEn: t(diff.bn, diff.en), labelBn: "কঠিনতা", labelEn: "Difficulty", color: diff.color },
        ].map((s, i) => (
          <div
            key={i}
            className="rounded-xl p-2 text-center"
            style={{
              background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
              border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.07)",
            }}
          >
            <div className="text-base leading-none mb-0.5">{s.icon}</div>
            <div className="text-[10px] font-bold" style={{ color: s.color }}>
              {t(s.valBn, s.valEn)}
            </div>
            <div className="text-[9px]" style={{ color: isDark ? "#475569" : "#9ca3af" }}>
              {t(s.labelBn, s.labelEn)}
            </div>
          </div>
        ))}
      </div>

      {/* Official portal notice */}
      <div
        className="relative z-10 mt-3 flex items-center gap-2 px-3 py-2 rounded-xl"
        style={{
          background: isDark ? "rgba(16,185,129,0.06)" : "rgba(16,185,129,0.06)",
          border: isDark ? "1px solid rgba(16,185,129,0.15)" : "1px solid rgba(16,185,129,0.2)",
        }}
      >
        <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <p className="text-[10px]" style={{ color: isDark ? "#64748b" : "#94a3b8" }}>
          {t("সকল তথ্য সরাসরি", "All data sourced from")} <span style={{ color: "#10b981" }}>{country!.officialPortal.replace("https://", "").split("/")[0]}</span> {t("থেকে", "")}
        </p>
      </div>
    </motion.div>
  );
}


/* ─── Main Page ──────────────────────────────────────────── */
export default function CountryPageClient({
  params,
}: {
  params: Promise<{ countryId: string }>;
}) {
  const { countryId } = use(params);
  const country = COUNTRIES.find((c) => c.id === countryId);
  if (!country) notFound();

  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [overlayVisa, setOverlayVisa] = useState<VisaType | null>(null);
  const [showGuideCard, setShowGuideCard] = useState(true);

  return (
    <div
      className="min-h-screen transition-colors duration-350"
      style={{
        backgroundColor: "var(--bg-page)",
        paddingTop: "calc(env(safe-area-inset-top,0px) + 64px)",
        paddingBottom: "calc(env(safe-area-inset-bottom,0px) + 80px)",
      }}
    >
      <div className="px-3 sm:px-4 pb-6">
        {/* Country hero */}
        <CountryHero country={country} />

        {/* Section title */}
        {/* ── Section Title: centred smart pill button ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
          className="flex flex-col items-center mb-4"
        >
          <div
            className="relative inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl shadow-lg"
            style={{
              background: isDark
                ? "linear-gradient(135deg,rgba(239,68,68,0.18) 0%,rgba(220,38,38,0.10) 100%)"
                : "linear-gradient(135deg,rgba(239,68,68,0.12) 0%,rgba(220,38,38,0.06) 100%)",
              border: isDark
                ? "2px solid rgba(239,68,68,0.50)"
                : "2px solid rgba(239,68,68,0.40)",
              boxShadow: isDark
                ? "0 0 24px rgba(239,68,68,0.20), 0 4px 16px rgba(0,0,0,0.4)"
                : "0 0 16px rgba(239,68,68,0.15), 0 4px 16px rgba(0,0,0,0.07)",
            }}
          >
            {/* Animated left dot */}
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
            <h2
              className="text-[15px] font-extrabold tracking-tight"
              style={{
                fontFamily: "'Hind Siliguri',sans-serif",
                color: isDark ? "#fca5a5" : "#dc2626",
                whiteSpace: "nowrap",
              }}
            >
              {t(`${country.namebn}-এর ভিসার ধরন`, `${country.name} Visa Types`)}
            </h2>
            <span
              className="shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(239,68,68,0.20)",
                border: "1px solid rgba(239,68,68,0.40)",
                color: isDark ? "#fca5a5" : "#dc2626",
              }}
            >
              {country.visaTypes.length}{t("টি", "")}
            </span>
          </div>
          <p
            className="mt-1.5 text-[11px] font-medium"
            style={{ color: isDark ? "#475569" : "#94a3b8" }}
          >
            {t("সরকারি তথ্য থেকে সংগৃহীত", "Official government data")}
          </p>
        </motion.div>

        {/* Visa cards grid — single col on mobile, 2-col on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {country.visaTypes.map((visa, i) => (
            <VisaCard
              key={visa.id}
              visa={visa}
              countryId={countryId}
              countryName={t(country.namebn, country.name)}
              countryFlag={country.flag}
              index={i}
              onCheck={setOverlayVisa}
            />
          ))}
        </div>

        {/* Info tip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 flex items-start gap-2.5 px-4 py-3 rounded-2xl"
          style={{
            background: isDark ? "rgba(14,165,233,0.06)" : "rgba(14,165,233,0.05)",
            border: isDark ? "1px solid rgba(14,165,233,0.12)" : "1px solid rgba(14,165,233,0.15)",
          }}
        >
          <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed" style={{ color: isDark ? "#64748b" : "#94a3b8" }}>
            {t(
              "সকল ভিসার তথ্য সরাসরি সরকারি উৎস থেকে সংগৃহীত। ভিসা স্ট্যাটাস চেক করতে আপনার আবেদন নম্বর এবং পাসপোর্ট নম্বর প্রস্তুত রাখুন।",
              "All visa information is sourced directly from official government portals. Keep your application number and passport number ready to check visa status."
            )}
          </p>
        </motion.div>

        {/* ── Official Guide & Checking Rules Card (Annotated Red Box in Image 1) ── */}
        <AnimatePresence>
          {showGuideCard ? (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="mt-4 relative overflow-hidden rounded-2xl p-3.5 flex items-center justify-between gap-3 shadow-xl"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(15,39,86,0.95) 0%, rgba(8,19,43,0.98) 100%)"
                  : "linear-gradient(135deg, rgba(238,246,255,0.98) 0%, rgba(224,242,254,0.95) 100%)",
                border: isDark
                  ? "1.5px solid rgba(56,189,248,0.5)"
                  : "1.5px solid rgba(14,165,233,0.45)",
                boxShadow: isDark
                  ? "0 8px 32px rgba(0,0,0,0.5), 0 0 16px rgba(56,189,248,0.2)"
                  : "0 8px 24px rgba(14,165,233,0.18), 0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {/* Left icon badge */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                style={{
                  background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <BookOpen className="w-5 h-5 text-white" />
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[10px] font-bold text-sky-400 dark:text-sky-300">
                    🔍 {t("অফিসিয়াল গাইড ও চেকিং নিয়ম", "Official Guide & Checking Rules")}
                  </span>
                </div>
                <h4
                  className="font-bold text-[12.5px] leading-tight truncate"
                  style={{
                    color: isDark ? "#ffffff" : "#0f172a",
                    fontFamily: "'Hind Siliguri', sans-serif",
                  }}
                >
                  {t(
                    `${country.namebn} ${country.flag} ভিসা চেক করার সঠিক নিয়ম ও পোর্টাল গাইড ২০২৬`,
                    `${country.name} Visa Check Official Guide 2026`
                  )}
                </h4>
                <p
                  className="text-[10.5px] leading-tight truncate mt-0.5"
                  style={{ color: isDark ? "#93c5fd" : "#0284c7" }}
                >
                  {t(
                    "পাসপোর্ট ও আবেদন নম্বর দিয়ে সরাসরি লাইভ ভেরিফিকেশনের পূর্ণাঙ্গ নির্দেশিকা",
                    "Complete live verification instructions using passport & application number"
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col items-center gap-1 shrink-0">
                <button
                  onClick={() => setShowGuideCard(false)}
                  className="text-slate-400 hover:text-slate-200 text-xs px-1"
                  aria-label="Dismiss"
                >
                  ✕
                </button>
                <Link
                  href="/guide"
                  className="px-2.5 py-1 rounded-lg text-[10.5px] font-bold text-white shadow-md active:scale-95 transition-transform"
                  style={{ background: "#2563eb" }}
                >
                  {t("পড়ুন ›", "Read ›")}
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 flex justify-end"
            >
              <button
                onClick={() => setShowGuideCard(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-sky-400 border border-sky-500/30 bg-sky-500/10 shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t("📘 গাইড দেখুন", "📘 View Guide")}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── In-app iframe overlay ─── */}
      <AnimatePresence>
        {overlayVisa && (
          <VisaCheckOverlay
            visa={overlayVisa}
            countryName={t(country.namebn, country.name)}
            onClose={() => setOverlayVisa(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
