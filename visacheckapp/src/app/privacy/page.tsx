"use client";

import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Shield, Lock, Eye, Trash2, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  const { isDark } = useTheme();
  const { lang } = useLanguage();

  const isBn = lang === "bn";

  const cardStyle: React.CSSProperties = {
    background: isDark
      ? "linear-gradient(145deg,rgba(14,165,233,0.06) 0%,rgba(99,102,241,0.04) 100%)"
      : "rgba(255,255,255,0.95)",
    border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(14,165,233,0.12)",
    borderRadius: "20px",
    boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(14,165,233,0.06)",
  };

  const sections = [
    {
      icon: <Eye className="w-5 h-5" />,
      color: "#0ea5e9",
      titleBn: "আমরা কী তথ্য সংগ্রহ করি?",
      titleEn: "What data do we collect?",
      contentBn: "আমরা কোনো ব্যক্তিগত তথ্য সংগ্রহ করি না। অ্যাপটি সম্পূর্ণ অফলাইনে কাজ করে এবং আপনার কোনো ভিসা নম্বর বা পাসপোর্ট তথ্য আমাদের সার্ভারে পাঠানো হয় না।",
      contentEn: "We do not collect any personal information. The app works completely offline and your visa numbers or passport information are never sent to our servers.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      color: "#6366f1",
      titleBn: "আপনার তথ্য কীভাবে সুরক্ষিত?",
      titleEn: "How is your data protected?",
      contentBn: "আপনার পছন্দের দেশের তালিকা (Favorites) শুধুমাত্র আপনার ডিভাইসে সংরক্ষিত থাকে। এটি কখনো বাইরে পাঠানো হয় না। আপনার ডিভাইস থেকে অ্যাপটি মুছে দিলে সব তথ্য মুছে যাবে।",
      contentEn: "Your favorite countries list is stored only on your device and never transmitted externally. Uninstalling the app removes all stored data.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      color: "#10b981",
      titleBn: "তৃতীয় পক্ষের সাথে তথ্য ভাগাভাগি",
      titleEn: "Data sharing with third parties",
      contentBn: "আমরা কোনো তৃতীয় পক্ষের সাথে আপনার তথ্য ভাগ করি না। অ্যাপটিতে কোনো বিজ্ঞাপন নেই এবং কোনো ট্র্যাকিং নেই।",
      contentEn: "We do not share any information with third parties. The app contains no advertisements and no tracking.",
    },
    {
      icon: <Trash2 className="w-5 h-5" />,
      color: "#f59e0b",
      titleBn: "তথ্য মুছে ফেলার অধিকার",
      titleEn: "Right to delete data",
      contentBn: "যেহেতু আমরা কোনো তথ্য সংগ্রহ করি না, তাই মুছে ফেলার কিছু নেই। আপনার ডিভাইসে সংরক্ষিত Favorites মুছতে অ্যাপটি Uninstall করুন।",
      contentEn: "Since we collect no data, there is nothing to delete. To remove locally saved favorites, uninstall the app.",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      color: "#ec4899",
      titleBn: "যোগাযোগ করুন",
      titleEn: "Contact us",
      contentBn: "কোনো প্রশ্ন থাকলে আমাদের ইমেইল করুন:",
      contentEn: "If you have any questions, email us at:",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-page)",
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 64px)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 80px)",
      }}
    >
      <div className="px-3 sm:px-4 pb-6">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-4 text-sm font-semibold"
          style={{ color: isDark ? "#38bdf8" : "#0284c7", fontFamily: "'Hind Siliguri', sans-serif" }}
        >
          <ArrowLeft className="w-4 h-4" />
          {isBn ? "ফিরে যান" : "Go Back"}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl p-5 mb-4 text-center"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(99,102,241,0.1) 100%)"
              : "linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(99,102,241,0.06) 100%)",
            border: isDark ? "1px solid rgba(14,165,233,0.2)" : "1px solid rgba(14,165,233,0.2)",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center"
            style={{ background: "rgba(14,165,233,0.15)", border: "1px solid rgba(14,165,233,0.3)" }}
          >
            <Shield className="w-7 h-7" style={{ color: "#0ea5e9" }} />
          </div>
          <h1
            className="font-extrabold text-xl mb-1"
            style={{ fontFamily: "'Hind Siliguri', sans-serif", color: isDark ? "#bae6fd" : "#0369a1" }}
          >
            {isBn ? "গোপনীয়তা নীতিমালা" : "Privacy Policy"}
          </h1>
          <p className="text-xs" style={{ color: isDark ? "#64748b" : "#94a3b8" }}>
            {isBn ? "সর্বশেষ আপডেট: সেপ্টেম্বর ২০২৬" : "Last updated: September 2026"}
          </p>
        </motion.div>

        {/* Sections */}
        <div className="flex flex-col gap-3">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              style={cardStyle}
              className="p-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: s.color + "20", color: s.color }}
                >
                  {s.icon}
                </div>
                <h2
                  className="font-bold text-[14px]"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif", color: isDark ? "#e2e8f0" : "#0f172a" }}
                >
                  {isBn ? s.titleBn : s.titleEn}
                </h2>
              </div>
              <p
                className="text-[13px] leading-relaxed pl-12"
                style={{ color: isDark ? "#94a3b8" : "#475569", fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {isBn ? s.contentBn : s.contentEn}
                {i === sections.length - 1 && (
                  <a
                    href="mailto:support@visacheckapp.net"
                    className="block mt-1 font-bold"
                    style={{ color: s.color }}
                  >
                    support@visacheckapp.net
                  </a>
                )}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-center text-[11px] mt-5 mb-2"
          style={{ color: isDark ? "#334155" : "#cbd5e1", fontFamily: "'Hind Siliguri', sans-serif" }}
        >
          {isBn
            ? "ভিসা চেক করার অ্যাপ | বাংলাদেশি পাসপোর্টধারীদের জন্য"
            : "VisaCheck App | For Bangladeshi Passport Holders"}
        </p>
      </div>
    </div>
  );
}
