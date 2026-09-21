"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Smartphone,
  Compass,
  Globe,
  ShieldCheck,
  Building2,
  AlertTriangle,
  Search,
  X,
  ExternalLink,
  ArrowLeft,
  BookOpen,
  Clock,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Tag,
  Share2,
} from "lucide-react";
import { GUIDE_SILOS, GUIDE_ARTICLES, GuideArticle, GuideSilo } from "@/data/guideData";
import { COUNTRIES } from "@/data/countries";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { playSweetTune } from "@/lib/sound";
import FinalFooter from "@/components/FinalFooter";

// Icon mapping for Silos
const SILO_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Smartphone,
  Compass,
  Globe,
  ShieldCheck,
  Building2,
  AlertTriangle,
};

export default function GuideHubPage() {
  const { isDark } = useTheme();
  const { lang } = useLanguage();

  const [selectedSilo, setSelectedSilo] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Filtered Articles based on Silo and Search Query
  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return GUIDE_ARTICLES.filter((article) => {
      // Silo Filter
      if (selectedSilo !== "all" && article.siloId !== selectedSilo) {
        return false;
      }
      // Search Query Filter
      if (!q) return true;
      const matchBn = article.titleBn.toLowerCase().includes(q);
      const matchEn = article.titleEn.toLowerCase().includes(q);
      const matchSyn = article.synopsisBn.toLowerCase().includes(q);
      const matchPrimary = article.primaryKeyword.toLowerCase().includes(q);
      const matchSec = article.secondaryKeywords.some((k) => k.toLowerCase().includes(q));
      return matchBn || matchEn || matchSyn || matchPrimary || matchSec;
    });
  }, [selectedSilo, searchQuery]);

  // Paginated articles for 60fps performance
  const displayedArticles = useMemo(() => {
    if (searchQuery.trim() || selectedSilo !== "all") {
      return filteredArticles;
    }
    return filteredArticles.slice(0, visibleCount);
  }, [filteredArticles, searchQuery, selectedSilo, visibleCount]);

  const handleSiloSelect = (siloId: string) => {
    playSweetTune();
    setSelectedSilo(siloId);
    setVisibleCount(12);
  };

  const handleArticleWebClick = (url: string) => {
    playSweetTune();
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleShareArticle = async (article: GuideArticle) => {
    playSweetTune();
    const shareText = `${article.titleBn}\nবিস্তারিত দেখুন: ${article.webUrl}`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: article.titleBn,
          text: shareText,
          url: article.webUrl,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`${article.titleBn} - ${article.webUrl}`);
      setCopiedId(article.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Top 8 Popular Countries for Shortcut Ribbon
  const POPULAR_COUNTRIES = useMemo(() => {
    const popularIds = ["saudi-arabia", "malaysia", "uae", "qatar", "kuwait", "oman", "italy", "singapore"];
    return COUNTRIES.filter((c) => popularIds.includes(c.id));
  }, []);

  return (
    <div
      className="min-h-screen text-slate-100 flex flex-col justify-between selection:bg-[#D9B15C]/30 relative overflow-x-hidden"
      style={{
        backgroundColor: "#0B0D1C",
        fontFamily: "'Plus Jakarta Sans', 'Hind Siliguri', sans-serif",
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 64px)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 80px)",
      }}
    >
      {/* Ambient background glow effects */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[420px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(58, 74, 142, 0.40) 0%, rgba(217, 177, 92, 0.08) 50%, transparent 80%)",
        }}
      />

      {/* Main Content Area */}
      <main className="w-full max-w-xl mx-auto px-3.5 pt-2 pb-6 relative z-10">
        {/* ─── Top Breadcrumb Navigation ─── */}
        <div className="flex items-center justify-between mb-3 px-1">
          <Link
            href="/"
            onClick={playSweetTune}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#D9B15C] hover:text-[#F3D89B] transition-colors py-1 px-2.5 rounded-lg bg-white/5 border border-white/5 active:scale-95"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>হোম পেজে ফিরুন</span>
          </Link>
          <span
            className="text-[11px] font-semibold text-[#A0AEC0] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            সর্বমোট ৩৮টি গাইড ও টিউটোরিয়াল
          </span>
        </div>

        {/* ─── Hero Header & Glassy 3D Badge ─── */}
        <div className="flex flex-col items-center text-center mt-1 mb-4">
          {/* 3D Glassy Pill Badge */}
          <div
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full relative overflow-hidden select-none shadow-md mb-2.5"
            style={{
              background:
                "linear-gradient(135deg, rgba(243, 216, 155, 0.22) 0%, rgba(217, 177, 92, 0.10) 50%, rgba(197, 158, 65, 0.25) 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1.2px solid rgba(217, 177, 92, 0.50)",
              boxShadow:
                "0 4px 14px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 0 14px rgba(217, 177, 92, 0.20)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F3D89B]" />
            <span
              className="text-[12px] sm:text-[13px] font-bold text-[#FFF6DE] tracking-wide"
              style={{
                fontFamily: "'Hind Siliguri', sans-serif",
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
              }}
            >
              ভিসা গাইড ও তথ্য হাব
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-[20px] sm:text-[23px] font-extrabold text-center leading-snug tracking-tight mb-1"
            style={{
              fontFamily: "'Hind Siliguri', sans-serif",
              background: "linear-gradient(135deg, #FFFFFF 20%, #F3D89B 70%, #D9B15C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            বিভিন্ন দেশের ভিসা পাওয়ার নিয়ম ও গাইড
          </h1>

          {/* Subtitle */}
          <p
            className="text-[12px] sm:text-[13px] text-[#A0AEC0] max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            পাসপোর্ট চেক, সৌদি মুকিম, মালয়েশিয়া কলিং, দুবাই ICP ও ইউরোপ ভিসা প্রসেসিংয়ের সরকারি নির্দেশিকা
          </p>
        </div>

        {/* ─── Search Bar ─── */}
        <div className="relative mb-3.5">
          <div
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[16px] transition-all duration-200"
            style={{
              background:
                "linear-gradient(160deg, rgba(58, 74, 142, 0.30) 0%, rgba(27, 35, 64, 0.70) 100%)",
              border: "1.2px solid rgba(217, 177, 92, 0.35)",
              boxShadow: "0 4px 18px rgba(0, 0, 0, 0.40), inset 0 1px 1px rgba(255, 255, 255, 0.10)",
            }}
          >
            <Search className="w-4 h-4 text-[#D9B15C] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
              }}
              placeholder="আর্টিকেল বা বিষয় খুঁজুন (যেমন: সৌদি, মালয়েশিয়া, আকামা, ম্যানপাওয়ার)..."
              className="w-full bg-transparent text-[13px] sm:text-[13.5px] text-[#F5F6FA] placeholder-[#718096] outline-none"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#A0AEC0] hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* ─── Quick Country Jump Ribbon ─── */}
        <div className="mb-4">
          <div className="flex items-center justify-between px-1 mb-2">
            <span
              className="text-[11px] font-bold text-[#E2E8F0] flex items-center gap-1.5"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              <Globe className="w-3.5 h-3.5 text-[#D9B15C]" />
              <span>জনপ্রিয় দেশগুলোর দ্রুত গাইড:</span>
            </span>
            <Link
              href="/countries"
              onClick={playSweetTune}
              className="text-[10.5px] text-[#D9B15C] hover:underline font-semibold"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              সব দেশ ➔
            </Link>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {POPULAR_COUNTRIES.map((c) => (
              <Link
                key={c.id}
                href={`/countries/${c.id}`}
                onClick={playSweetTune}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 transition-all duration-200 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(58, 74, 142, 0.25) 0%, rgba(27, 35, 64, 0.60) 100%)",
                  border: "1px solid rgba(217, 177, 92, 0.30)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
                }}
              >
                <span className="text-sm select-none">{c.flag}</span>
                <span
                  className="text-[11px] font-semibold text-[#F1EAD9]"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  {lang === "bn" ? c.namebn : c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ─── Silo Categories Tabs ─── */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
            {GUIDE_SILOS.map((silo) => {
              const Icon = SILO_ICONS[silo.iconName] || BookOpen;
              const isSelected = selectedSilo === silo.id;

              return (
                <motion.button
                  key={silo.id}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => handleSiloSelect(silo.id)}
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl shrink-0 transition-all duration-200 outline-none select-none text-left"
                  style={{
                    background: isSelected
                      ? "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)"
                      : "rgba(255, 255, 255, 0.05)",
                    border: isSelected
                      ? "1px solid rgba(255, 255, 255, 0.40)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isSelected
                      ? "0 4px 14px rgba(217, 177, 92, 0.45)"
                      : "none",
                  }}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isSelected ? "text-[#1B2340]" : "text-[#A0AEC0]"
                    }`}
                  />
                  <span
                    className={`text-[11.5px] font-bold ${
                      isSelected ? "text-[#1B2340]" : "text-[#E2E8F0]"
                    }`}
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  >
                    {silo.nameBn}
                  </span>
                  <span
                    className={`text-[9.5px] font-bold px-1.5 py-0.2 rounded-full ml-0.5 ${
                      isSelected
                        ? "bg-[#1B2340]/20 text-[#1B2340]"
                        : "bg-white/10 text-[#A0AEC0]"
                    }`}
                  >
                    {silo.articleCount}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ─── Result Counter & Filter Summary ─── */}
        <div className="flex items-center justify-between px-1 mb-3">
          <div className="flex items-center gap-2">
            <span
              className="text-[12px] font-bold text-[#E2E8F0]"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              {filteredArticles.length}টি গাইড পাওয়া গেছে
            </span>
            {searchQuery && (
              <span
                className="text-[10.5px] text-[#A0AEC0] italic"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                (ফলাফল: &quot;{searchQuery}&quot;)
              </span>
            )}
          </div>
        </div>

        {/* ─── 38 Articles Cards Grid ─── */}
        <div className="space-y-3">
          <AnimatePresence>
            {displayedArticles.length > 0 ? (
              displayedArticles.map((article, idx) => {
                return (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.22, delay: idx * 0.02 }}
                    className="group relative rounded-2xl p-3.5 overflow-hidden transition-all duration-200"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(58, 74, 142, 0.25) 0%, rgba(18, 24, 46, 0.75) 100%)",
                      border: "1px solid rgba(217, 177, 92, 0.30)",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.35)",
                    }}
                  >
                    {/* Top Row: Badge, Flag, Read Time & Share */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        {/* Circular Emoji Flag in Gold Ring */}
                        <div
                          className="w-7 h-7 rounded-full p-[1px] flex items-center justify-center shrink-0 shadow-sm"
                          style={{
                            background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
                          }}
                        >
                          <div className="w-full h-full rounded-full bg-[#0d1326] flex items-center justify-center text-sm">
                            {article.flag}
                          </div>
                        </div>

                        {/* Category/Status Badge */}
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                          style={{
                            background: "rgba(217, 177, 92, 0.15)",
                            color: "#F3D89B",
                            border: "1px solid rgba(217, 177, 92, 0.35)",
                            fontFamily: "'Hind Siliguri', sans-serif",
                          }}
                        >
                          {article.badgeBn}
                        </span>

                        {/* Article Number */}
                        <span className="text-[10px] text-[#A0AEC0] font-mono font-semibold">
                          #{article.id}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Read Time */}
                        <div className="flex items-center gap-1 text-[10px] text-[#A0AEC0]">
                          <Clock className="w-3 h-3 text-[#D9B15C]" />
                          <span style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                            {article.readTime}
                          </span>
                        </div>

                        {/* Share Button */}
                        <button
                          type="button"
                          onClick={() => handleShareArticle(article)}
                          aria-label="শেয়ার করুন"
                          className="w-6 h-6 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-[#A0AEC0] hover:text-[#D9B15C] transition-colors"
                        >
                          <Share2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Copied alert toast */}
                    {copiedId === article.id && (
                      <div className="text-[10.5px] text-[#10b981] font-semibold mb-1">
                        ✓ লিংক ক্লিপবোর্ডে কপি করা হয়েছে!
                      </div>
                    )}

                    {/* Bangla Title */}
                    <h2
                      className="font-bold text-[14px] sm:text-[15px] leading-snug mb-1 text-[#F8FAFC]"
                      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                    >
                      {article.titleBn}
                    </h2>

                    {/* English Subtitle */}
                    <p className="text-[11px] text-[#94A3B8] font-medium leading-tight mb-2">
                      {article.titleEn}
                    </p>

                    {/* Synopsis */}
                    <p
                      className="text-[11.5px] sm:text-[12px] text-[#CBD5E1] leading-relaxed mb-3"
                      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                    >
                      {article.synopsisBn}
                    </p>

                    {/* Secondary Keywords Chips */}
                    <div className="flex flex-wrap items-center gap-1 mb-3.5">
                      <Tag className="w-3 h-3 text-[#D9B15C] shrink-0 mr-0.5" />
                      {article.secondaryKeywords.slice(0, 3).map((kw, i) => (
                        <span
                          key={i}
                          className="text-[9.5px] px-2 py-0.5 rounded-md leading-tight"
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            color: "#A0AEC0",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                          }}
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    {/* Dual Action Buttons Row */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                      {/* Button 1: In-App Feature/Guide */}
                      <Link
                        href={article.inAppRoute}
                        onClick={playSweetTune}
                        className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl font-bold text-[11.5px] text-white transition-all active:scale-95 shadow-md text-center"
                        style={{
                          background: "linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)",
                          boxShadow: "0 3px 12px rgba(2, 132, 199, 0.35)",
                          fontFamily: "'Hind Siliguri', sans-serif",
                        }}
                      >
                        <BookOpen className="w-3.5 h-3.5 shrink-0" />
                        <span>অ্যাপে গাইড দেখুন</span>
                      </Link>

                      {/* Button 2: Web Article on visacheckapp.net */}
                      <button
                        type="button"
                        onClick={() => handleArticleWebClick(article.webUrl)}
                        className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl font-bold text-[11.5px] transition-all active:scale-95 text-center"
                        style={{
                          background: "rgba(217, 177, 92, 0.15)",
                          border: "1px solid rgba(217, 177, 92, 0.40)",
                          color: "#F3D89B",
                          fontFamily: "'Hind Siliguri', sans-serif",
                        }}
                      >
                        <span>ওয়েব আর্টিকেল</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </button>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-12 px-4 rounded-2xl bg-white/5 border border-white/5">
                <Search className="w-8 h-8 text-[#A0AEC0] mx-auto mb-2 opacity-50" />
                <h3
                  className="font-bold text-[15px] text-white mb-1"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  কোনো গাইড বা তথ্য পাওয়া যায়নি
                </h3>
                <p
                  className="text-xs text-[#A0AEC0]"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  অনুগ্রহ করে অন্য কোনো শব্দ বা দেশ দিয়ে চেষ্টা করুন
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSilo("all");
                  }}
                  className="mt-3 px-4 py-1.5 rounded-xl text-xs font-bold bg-[#D9B15C] text-[#1B2340]"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  সকল গাইড দেখুন
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* ─── Load More Button (in 'all' view without search) ─── */}
        {!searchQuery && selectedSilo === "all" && visibleCount < filteredArticles.length && (
          <div className="flex justify-center mt-5 mb-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                playSweetTune();
                setVisibleCount((prev) => Math.min(prev + 12, filteredArticles.length));
              }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[12.5px] text-[#1B2340] shadow-lg select-none"
              style={{
                background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
                border: "1.5px solid rgba(255, 255, 255, 0.35)",
                boxShadow: "0 6px 20px rgba(217, 177, 92, 0.45)",
                fontFamily: "'Hind Siliguri', sans-serif",
              }}
            >
              <span>আরো ১২টি গাইড দেখুন ({filteredArticles.length - visibleCount}টি বাকি)</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        )}

        {/* ─── Fast Link to FAQ Center ─── */}
        <div
          className="mt-6 p-4 rounded-2xl flex items-center justify-between gap-3"
          style={{
            background:
              "linear-gradient(135deg, rgba(217, 177, 92, 0.15) 0%, rgba(58, 74, 142, 0.30) 100%)",
            border: "1px solid rgba(217, 177, 92, 0.35)",
          }}
        >
          <div>
            <h4
              className="font-bold text-[13.5px] text-[#F3D89B] leading-tight"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              নির্দিষ্ট কোনো প্রশ্নের উত্তর খুঁজছেন?
            </h4>
            <p
              className="text-[11px] text-[#CBD5E1] mt-0.5"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              আমাদের ভিসা প্রশ্নোত্তরে রয়েছে ২০০টি বাছাইকৃত প্রশ্নোত্তর ও সমাধান।
            </p>
          </div>

          <Link
            href="/faq"
            onClick={playSweetTune}
            className="px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 text-[#1B2340] active:scale-95 shadow-md"
            style={{
              background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
              fontFamily: "'Hind Siliguri', sans-serif",
            }}
          >
            জিজ্ঞাসা দেখুন ➔
          </Link>
        </div>
      </main>

      {/* ─── Final Sticky Footer ─── */}
      <FinalFooter />
    </div>
  );
}
