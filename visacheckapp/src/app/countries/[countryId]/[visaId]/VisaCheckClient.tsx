"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState, useRef } from "react";
import { ArrowLeft, Shield, Clock, CheckCircle, Loader2, AlertCircle,
  ChevronRight, Lock, Globe, TrendingUp, RotateCcw, X, ExternalLink, Share2,
} from "lucide-react";
import { COUNTRIES, type FormField, type VisaCheckResult } from "@/data/countries";
import { performClientVisaCheck } from "@/lib/visaChecker";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { useAndroidBridge } from "@/hooks/useAndroidBridge";

type Step = "form" | "checking" | "result" | "govsite";

const CHECKING_STEPS_BN = [
  "সরকারি পোর্টালের সাথে সংযোগ স্থাপন করা হচ্ছে...",
  "আপনার আবেদন নম্বর যাচাই করা হচ্ছে...",
  "ভিসার সর্বশেষ স্ট্যাটাস চেক করা হচ্ছে...",
  "তথ্য প্রস্তুত করা হচ্ছে...",
];
const CHECKING_STEPS_EN = [
  "Connecting to official government portal...",
  "Verifying your application number...",
  "Checking latest visa status...",
  "Preparing your results...",
];

const STATUS_META = {
  approved:   { emoji: "✅", colorBn: "অনুমোদিত",    colorEn: "Approved",    color: "#10b981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.3)"  },
  processing: { emoji: "⏳", colorBn: "প্রক্রিয়াধীন", colorEn: "Processing",  color: "#f59e0b", bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.3)"  },
  pending:    { emoji: "🔄", colorBn: "অপেক্ষামাণ",   colorEn: "Pending",     color: "#3b82f6", bg: "rgba(59,130,246,0.1)",  border: "rgba(59,130,246,0.3)"  },
  rejected:   { emoji: "❌", colorBn: "প্রত্যাখ্যাত", colorEn: "Rejected",    color: "#ef4444", bg: "rgba(239,68,68,0.1)",   border: "rgba(239,68,68,0.3)"   },
  not_found:  { emoji: "🔍", colorBn: "পাওয়া যায়নি", colorEn: "Not Found",   color: "#64748b", bg: "rgba(100,116,139,0.1)", border: "rgba(100,116,139,0.3)" },
};

/* ─── Clean Fee Badge Formatter ──────────────────────────── */
function formatFeeBadge(feeStr: string): string {
  if (!feeStr) return "N/A";
  if (feeStr.includes("বিনামূল্যে") || feeStr.toLowerCase().includes("free")) return "বিনামূল্যে";
  if (feeStr.includes("নিয়োগকর্তা") || feeStr.toLowerCase().includes("employer")) return "নিয়োগকর্তা";
  
  // Extract Bengali ranges like ৫-৮ লক্ষ টাকা or ১০,০০০-২০,০০০ টাকা or ৯,০০০ টাকা
  const matchRangeBn = feeStr.match(/[০-৯,-]+(\s*(লক্ষ|হাজার))?(\s*(টাকা|ডলার))?/);
  if (matchRangeBn && matchRangeBn[0].trim().length > 1) return matchRangeBn[0].trim();

  const numMatch = feeStr.match(/([০-৯,]+(\s*(টাকা|ডলার))?|[0-9,]+|\$[0-9]+|USD\s*[0-9]+|MYR\s*[0-9]+)/);
  if (numMatch) return numMatch[0];
  return feeStr.length > 12 ? feeStr.slice(0, 11) + "…" : feeStr;
}

/* ─── Input Field ──────────────────────────────────────── */
function InputField({
  field,
  value,
  onChange,
  error,
  isDark,
  lang,
}: {
  field: FormField;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  isDark: boolean;
  lang: "bn" | "en";
}) {
  const label = lang === "bn" ? field.labelbn : field.label;
  const commonStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "16px",
    fontSize: "15px",
    fontFamily: "'Plus Jakarta Sans','Hind Siliguri',sans-serif",
    outline: "none",
    transition: "all 0.2s",
    background: isDark ? "rgba(255,255,255,0.04)" : "#f8fafc",
    border: error
      ? "1.5px solid rgba(239,68,68,0.5)"
      : isDark ? "1.5px solid rgba(255,255,255,0.08)" : "1.5px solid rgba(14,165,233,0.2)",
    color: isDark ? "#f1f5f9" : "#0f172a",
    appearance: "none" as const,
  };

  return (
    <div>
      <label
        className="block mb-2 text-sm font-semibold"
        style={{ color: isDark ? "#cbd5e1" : "#334155", fontFamily: "'Hind Siliguri',sans-serif" }}
      >
        {label}
        {field.required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {field.type === "select" ? (
        <select value={value} onChange={(e) => onChange(e.target.value)} style={commonStyle}>
          <option value="">{lang === "bn" ? "বেছে নিন..." : "Select..."}</option>
          {field.options?.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input
          type={field.type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          autoComplete="off"
          spellCheck={false}
          style={commonStyle}
        />
      )}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── Share Button Component ─────────────────────────────── */
function ShareButton({
  result,
  country,
  visa,
  isDark,
  t,
}: {
  result: VisaCheckResult;
  country: { namebn: string; name: string };
  visa: { namebn: string; name: string };
  isDark: boolean;
  t: (bn: string, en: string) => string;
}) {
  const { shareContent } = useAndroidBridge();
  const [shared, setShared] = useState(false);

  const handleShare = () => {
    const statusLabel = result.status === "approved" ? "✅ অনুমোদিত"
      : result.status === "processing" ? "⏳ প্রক্রিয়াধীন"
      : result.status === "pending" ? "🔄 অপেক্ষামাণ"
      : result.status === "rejected" ? "❌ প্রত্যাখ্যাত"
      : "🔍 পাওয়া যায়নি";

    const title = `ভিসা স্ট্যাটাস — ${t(country.namebn, country.name)}`;
    const text = [
      `🛂 ভিসা চেক করার অ্যাপ`,
      `📍 দেশ: ${t(country.namebn, country.name)}`,
      `📄 ভিসার ধরন: ${t(visa.namebn, visa.name)}`,
      `📊 স্ট্যাটাস: ${statusLabel}`,
      result.applicationNumber ? `🔢 আবেদন নম্বর: ${result.applicationNumber}` : "",
      result.applicantName ? `👤 নাম: ${result.applicantName}` : "",
      ``,
      `ভিসা চেক করুন: https://play.google.com/store/apps/details?id=net.visacheckapp.app`,
    ].filter(Boolean).join("\n");

    shareContent(title, text);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={handleShare}
      className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300"
      style={{
        background: shared
          ? "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.08) 100%)"
          : isDark
            ? "linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(99,102,241,0.12) 100%)"
            : "linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(99,102,241,0.1) 100%)",
        border: shared
          ? "1px solid rgba(16,185,129,0.4)"
          : isDark
            ? "1px solid rgba(14,165,233,0.25)"
            : "1px solid rgba(14,165,233,0.3)",
        color: shared ? "#10b981" : isDark ? "#38bdf8" : "#0284c7",
        fontFamily: "'Hind Siliguri', sans-serif",
        boxShadow: shared ? "0 4px 16px rgba(16,185,129,0.15)" : "none",
      }}
    >
      {shared ? (
        <>
          <CheckCircle className="w-4 h-4" />
          {t("শেয়ার হয়েছে!", "Shared!")}
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          {t("ভিসার তথ্য শেয়ার করুন", "Share Visa Info")}
        </>
      )}
    </motion.button>
  );
}

/* ─── Main Page ──────────────────────────────────────────── */
export default function VisaCheckClient({
  params,
}: {
  params: Promise<{ countryId: string; visaId: string }>;
}) {
  const { countryId, visaId } = use(params);
  const country = COUNTRIES.find((c) => c.id === countryId);
  const visa = country?.visaTypes.find((v) => v.id === visaId);
  if (!country || !visa) notFound();

  const { isDark } = useTheme();
  const { t, lang } = useLanguage();
  const { openGovPortal, copyToClipboard, hapticFeedback } = useAndroidBridge();

  const [step, setStep] = useState<Step>("form");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [checkingIdx, setCheckingIdx] = useState(0);
  const [result, setResult] = useState<VisaCheckResult | null>(null);

  const checkingSteps = lang === "bn" ? CHECKING_STEPS_BN : CHECKING_STEPS_EN;

  const handleChange = (fieldId: string, value: string) => {
    setFormData((p) => ({ ...p, [fieldId]: value }));
    if (errors[fieldId]) setErrors((p) => ({ ...p, [fieldId]: "" }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    visa.formFields.forEach((f) => {
      if (f.required && !formData[f.id]) {
        errs[f.id] = lang === "bn" ? `${f.labelbn} আবশ্যিক` : `${f.label} is required`;
      }
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    hapticFeedback();

    const passportVal = formData["passportNo"] || formData["passport"] || "";
    const appVal = formData["applicationId"] || formData["visaNo"] || formData["visaNumber"] || formData["hajjRegNo"] || formData["civilId"] || "";

    if (typeof window !== "undefined") {
      if (passportVal) localStorage.setItem("last_passport_no", passportVal);
      if (appVal) localStorage.setItem("last_app_no", appVal);
    }

    if (passportVal && copyToClipboard) {
      copyToClipboard("পাসপোর্ট নম্বর", passportVal);
    }

    const visaTypeNameBn = visa.namebn.includes("ভিসা") ? `${visa.namebn} চেক` : `${visa.namebn} ভিসা চেক`;
    const seoTitle = visa.guideTitleBn || `${t(country.namebn, country.name)} ${visaTypeNameBn} করার সঠিক নিয়ম ও পোর্টাল গাইড ২০২৬`;
    const seoSubtitle = visa.guideSubtitleBn || "পাসপোর্ট ও আবেদন নম্বর দিয়ে সরাসরি লাইভ ভেরিফিকেশনের পূর্ণাঙ্গ গাইড";

    openGovPortal(
      visa.checkUrl,
      `${country.flag} ${t(visa.namebn, visa.name)}`,
      t(country.namebn, country.name),
      seoTitle,
      seoSubtitle,
      passportVal,
      appVal
    );
  };

  const reset = () => { setStep("form"); setResult(null); setCheckingIdx(0); };

  /* ── style shortcuts ── */
  const cardStyle: React.CSSProperties = {
    borderRadius: "24px",
    background: isDark
      ? "linear-gradient(145deg,rgba(14,165,233,0.05) 0%,rgba(99,102,241,0.04) 100%)"
      : "#ffffff",
    border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(14,165,233,0.15)",
    boxShadow: isDark ? "0 4px 24px rgba(0,0,0,0.4)" : "0 4px 20px rgba(14,165,233,0.08)",
  };

  return (
    <div
      className="min-h-screen transition-colors"
      style={{
        backgroundColor: "var(--bg-page)",
        paddingTop: "calc(env(safe-area-inset-top,0px) + 64px)",
        paddingBottom: "calc(env(safe-area-inset-bottom,0px) + 80px)",
      }}
    >
      <div className="px-3 sm:px-4 pb-6 max-w-xl mx-auto">
        {/* Visa Header Hero */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl p-4 mb-4"
          style={{
            background: `linear-gradient(135deg,${visa.color}18 0%,${visa.color}08 100%)`,
            border: `1px solid ${visa.color}30`,
            boxShadow: `0 8px 32px ${visa.color}20`,
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
              style={{
                background: visa.color + "22",
                border: `1.5px solid ${visa.color}44`,
                boxShadow: `0 4px 16px ${visa.color}33`,
              }}
            >
              {visa.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h1
                className="font-extrabold text-lg leading-tight"
                style={{ color: isDark ? "#ffffff" : "#0f172a", fontFamily: "'Hind Siliguri',sans-serif" }}
              >
                {t(visa.namebn, visa.name)}
              </h1>
              <p className="text-xs mt-0.5" style={{ color: isDark ? "#64748b" : "#94a3b8" }}>
                {country.flag} {t(country.namebn, country.name)}
              </p>
            </div>
            {/* Live indicator */}
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
          </div>

          {/* Mini stats */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { icon: <Clock className="w-3 h-3" />, v: visa.processingTime, l: t("সময়","Time"), c: "#0ea5e9" },
              { icon: <span className="text-xs">💰</span>, v: formatFeeBadge(t(visa.feebn, visa.fee)), l: t("ফি","Fee"), c: "#f59e0b" },
              { icon: <TrendingUp className="w-3 h-3" />, v: `${visa.successRate}%`, l: t("সফলতা","Success"), c: "#10b981" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl px-2 py-1.5 text-center flex flex-col items-center"
                style={{
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                  border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.07)",
                }}
              >
                <div style={{ color: s.c }}>{s.icon}</div>
                <div className="text-[10px] font-bold mt-0.5" style={{ color: isDark ? "#e2e8f0" : "#1e293b" }}>{s.v}</div>
                <div className="text-[9px]" style={{ color: isDark ? "#475569" : "#9ca3af" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ══ Steps ══ */}
        <AnimatePresence mode="wait">

          {/* ── FORM STEP ── */}
          {step === "form" && (
            <motion.div key="form" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { icon: <Shield className="w-3 h-3 text-sky-400" />, bn: "সরকারি সূত্র", en: "Official Source" },
                  { icon: <Lock className="w-3 h-3 text-emerald-400" />, bn: "১০০% নিরাপদ", en: "100% Secure" },
                  { icon: <Clock className="w-3 h-3 text-amber-400" />, bn: "তাৎক্ষণিক", en: "Instant Result" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                      border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
                      color: isDark ? "#94a3b8" : "#64748b",
                    }}
                  >
                    {b.icon}
                    {t(b.bn, b.en)}
                  </div>
                ))}
              </div>

              {/* Form card */}
              <div style={cardStyle} className="p-5 mb-4">
                <h2
                  className="text-lg font-bold mb-1"
                  style={{ color: isDark ? "#f1f5f9" : "#0f172a", fontFamily: "'Hind Siliguri',sans-serif" }}
                >
                  {t("ভিসা স্ট্যাটাস চেক করুন", "Check Visa Status")}
                </h2>
                <p className="text-xs mb-5" style={{ color: isDark ? "#64748b" : "#94a3b8" }}>
                  {t(
                    "নিচের তথ্যগুলো পূরণ করুন এবং আপনার ভিসার সর্বশেষ অবস্থা জানুন।",
                    "Fill in the details below to check your latest visa status."
                  )}
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {visa.formFields.map((field) => (
                    <InputField
                      key={field.id}
                      field={field}
                      value={formData[field.id] || ""}
                      onChange={(v) => handleChange(field.id, v)}
                      error={errors[field.id]}
                      isDark={isDark}
                      lang={lang}
                    />
                  ))}

                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-bold text-base mt-2"
                    style={{
                      background: `linear-gradient(135deg,${visa.color}EE 0%,${visa.color}AA 100%)`,
                      color: "#ffffff",
                      boxShadow: `0 6px 20px ${visa.color}44`,
                      fontFamily: "'Hind Siliguri',sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    <Globe className="w-5 h-5" />
                    {t("ভিসা স্ট্যাটাস চেক করুন", "Check Visa Status")}
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>

              {/* Requirements card */}
              <div style={cardStyle} className="p-4">
                <h3
                  className="text-sm font-bold mb-3 uppercase tracking-wide"
                  style={{ color: isDark ? "#94a3b8" : "#64748b" }}
                >
                  {t("প্রয়োজনীয় কাগজপত্র", "Required Documents")}
                </h3>
                <ul className="space-y-2">
                  {visa.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span style={{ color: isDark ? "#94a3b8" : "#64748b" }}>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct govt portal launch */}
              <button
                type="button"
                onClick={() => {
                  hapticFeedback();
                  const passportVal = formData["passportNo"] || formData["passport"] || (typeof window !== "undefined" ? localStorage.getItem("last_passport_no") || "" : "");
                  const appVal = formData["applicationId"] || formData["visaNo"] || formData["visaNumber"] || formData["hajjRegNo"] || (typeof window !== "undefined" ? localStorage.getItem("last_app_no") || "" : "");
                  if (passportVal && copyToClipboard) {
                    copyToClipboard("পাসপোর্ট নম্বর", passportVal);
                  }
                  const visaTypeNameBn = visa.namebn.includes("ভিসা") ? `${visa.namebn} চেক` : `${visa.namebn} ভিসা চেক`;
                  const seoTitle = visa.guideTitleBn || `${t(country.namebn, country.name)} ${visaTypeNameBn} করার সঠিক নিয়ম ও পোর্টাল গাইড ২০২৬`;
                  const seoSubtitle = visa.guideSubtitleBn || "পাসপোর্ট ও আবেদন নম্বর দিয়ে সরাসরি লাইভ ভেরিফিকেশনের পূর্ণাঙ্গ গাইড";
                  openGovPortal(
                    visa.checkUrl,
                    `${country.flag} ${t(visa.namebn, visa.name)}`,
                    t(country.namebn, country.name),
                    seoTitle,
                    seoSubtitle,
                    passportVal,
                    appVal
                  );
                }}
                className="mt-3 w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold transition-all active:scale-98"
                style={{
                  background: isDark ? "rgba(14,165,233,0.10)" : "rgba(14,165,233,0.06)",
                  border: isDark ? "1.5px solid rgba(14,165,233,0.30)" : "1.5px solid rgba(14,165,233,0.35)",
                  color: isDark ? "#38bdf8" : "#0284c7",
                }}
              >
                <Shield className="w-4 h-4" />
                {t("সরকারি পোর্টালে সরাসরি যাচাই করুন", "Verify Directly on Official Portal")}
              </button>
            </motion.div>
          )}

          {/* ── CHECKING STEP ── */}
          {step === "checking" && (
            <motion.div
              key="checking"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              style={cardStyle}
              className="p-10 text-center"
            >
              {/* Animated rings */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: `3px solid ${visa.color}20` }}
                />
                <div
                  className="absolute inset-0 rounded-full animate-spin"
                  style={{ border: `3px solid transparent`, borderTopColor: visa.color }}
                />
                <div
                  className="absolute inset-3 rounded-full animate-spin"
                  style={{
                    border: "3px solid transparent",
                    borderTopColor: "#6366f1",
                    animationDuration: "0.7s",
                    animationDirection: "reverse",
                  }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center text-3xl"
                >
                  {visa.icon}
                </div>
              </div>

              <h2
                className="text-xl font-bold mb-2"
                style={{ color: isDark ? "#fff" : "#0f172a", fontFamily: "'Hind Siliguri',sans-serif" }}
              >
                {t("যাচাই করা হচ্ছে...", "Verifying...")}
              </h2>

              <AnimatePresence mode="wait">
                <motion.p
                  key={checkingIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="text-sm mb-8"
                  style={{ color: isDark ? "#64748b" : "#94a3b8" }}
                >
                  {checkingSteps[checkingIdx]}
                </motion.p>
              </AnimatePresence>

              {/* Progress bar */}
              <div className="max-w-xs mx-auto mb-6">
                <div className="flex justify-between text-xs mb-2" style={{ color: isDark ? "#475569" : "#9ca3af" }}>
                  <span>{t("সংযোগ","Connect")}</span>
                  <span>{t("যাচাই","Verify")}</span>
                  <span>{t("রেজাল্ট","Result")}</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg,${visa.color},#6366f1)` }}
                    initial={{ width: "0%" }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 3.5, ease: "easeInOut" }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs" style={{ color: isDark ? "#334155" : "#d1d5db" }}>
                <Lock className="w-3 h-3" />
                {t("সরকারি সার্ভারের সাথে নিরাপদ সংযোগ", "Secure connection to government server")}
              </div>
            </motion.div>
          )}

          {/* ── RESULT STEP ── */}
          {step === "result" && result && (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {(() => {
                const s = STATUS_META[result.status];
                return (
                  <>
                    {/* Status hero card */}
                    <div
                      className="rounded-3xl p-6 mb-4 text-center"
                      style={{
                        background: s.bg,
                        border: `2px solid ${s.border}`,
                        boxShadow: `0 8px 32px ${s.bg}`,
                      }}
                    >
                      <div
                        className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl"
                        style={{ background: s.bg, border: `3px solid ${s.border}` }}
                      >
                        {s.emoji}
                      </div>
                      <div
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-base mb-3"
                        style={{ background: s.bg, border: `1.5px solid ${s.border}`, color: s.color }}
                      >
                        {t(s.colorBn, s.colorEn)}
                      </div>
                      {result.remarks && (
                        <p className="text-sm" style={{ color: isDark ? "#94a3b8" : "#64748b" }}>
                          {result.remarks}
                        </p>
                      )}
                    </div>

                    {/* Detail grid */}
                    {(result.applicantName || result.applicationNumber) && (
                      <div style={cardStyle} className="p-4 mb-4">
                        <div className="grid grid-cols-2 gap-3">
                          {result.applicantName && <InfoBox label={t("নাম","Name")} value={result.applicantName} isDark={isDark} />}
                          {result.applicationNumber && <InfoBox label={t("আবেদন নম্বর","App. No.")} value={result.applicationNumber} isDark={isDark} />}
                          {result.passportNumber && <InfoBox label={t("পাসপোর্ট","Passport")} value={result.passportNumber} isDark={isDark} />}
                          {result.visaType && <InfoBox label={t("ভিসার ধরন","Visa Type")} value={result.visaType} isDark={isDark} />}
                          {result.submittedDate && <InfoBox label={t("জমাদানের তারিখ","Submitted")} value={result.submittedDate} isDark={isDark} />}
                          {result.expiryDate && <InfoBox label={t("মেয়াদ শেষ","Expiry")} value={result.expiryDate} isDark={isDark} />}
                        </div>
                        <div className="mt-3 pt-3 flex items-center gap-2 text-xs" style={{ borderTop: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)", color: isDark ? "#475569" : "#9ca3af" }}>
                          <Shield className="w-3.5 h-3.5 text-sky-400" />
                          {t("তথ্য সংগৃহীত:", "Source:")} {country.officialPortal.replace("https://","").split("/")[0]}
                        </div>
                      </div>
                    )}

                    {/* Next steps */}
                    {result.nextSteps && result.nextSteps.length > 0 && (
                      <div style={cardStyle} className="p-4 mb-4">
                        <h3 className="text-sm font-bold mb-3" style={{ color: isDark ? "#e2e8f0" : "#1e293b", fontFamily: "'Hind Siliguri',sans-serif" }}>
                          {t("পরবর্তী পদক্ষেপ:", "Next Steps:")}
                        </h3>
                        <ul className="space-y-2">
                          {result.nextSteps.map((ns, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: isDark ? "#94a3b8" : "#64748b" }}>
                              <ChevronRight className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                              {ns}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Actions — 3 buttons: Check Again | Share | Other Visas */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        onClick={reset}
                        className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm"
                        style={{
                          background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                          border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
                          color: isDark ? "#cbd5e1" : "#334155",
                          fontFamily: "'Hind Siliguri',sans-serif",
                        }}
                      >
                        <RotateCcw className="w-4 h-4" />
                        {t("আবার চেক করুন", "Check Again")}
                      </motion.button>
                      <Link href={`/countries/${countryId}`}>
                        <motion.div
                          whileTap={{ scale: 0.96 }}
                          className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-white"
                          style={{
                            background: `linear-gradient(135deg,${visa.color}EE,${visa.color}99)`,
                            boxShadow: `0 4px 16px ${visa.color}44`,
                            fontFamily: "'Hind Siliguri',sans-serif",
                          }}
                        >
                          <ArrowLeft className="w-4 h-4" />
                          {t("অন্য ভিসা", "Other Visas")}
                        </motion.div>
                      </Link>
                    </div>

                    {/* ── Share button ────────────────────────────── */}
                    <ShareButton result={result} country={country} visa={visa} isDark={isDark} t={t} />

                    {/* Govt portal direct link */}
                    <a
                      href={visa.checkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-medium"
                      style={{
                        background: "rgba(14,165,233,0.06)",
                        border: "1px solid rgba(14,165,233,0.15)",
                        color: "#0ea5e9",
                        textDecoration: "none",
                      }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {t("সরকারি পোর্টালে সরাসরি যাচাই করুন", "Verify directly on official portal")}
                    </a>
                  </>
                );
              })()}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}

function InfoBox({ label, value, isDark }: { label: string; value: string; isDark: boolean }) {
  return (
    <div
      className="rounded-xl p-3"
      style={{
        background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
        border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <p className="text-xs mb-1" style={{ color: isDark ? "#475569" : "#94a3b8" }}>{label}</p>
      <p className="font-semibold text-sm" style={{ color: isDark ? "#e2e8f0" : "#1e293b" }}>{value}</p>
    </div>
  );
}
