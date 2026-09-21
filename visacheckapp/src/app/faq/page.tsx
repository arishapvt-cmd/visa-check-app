"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Smartphone,
  FileText,
  Landmark,
  Building2,
  Compass,
  Globe,
  ShieldCheck,
  CreditCard,
  HeartPulse,
  MapPin,
  ChevronDown,
  Search,
  X,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  ChevronsUpDown,
  ArrowLeft,
  Share2,
} from "lucide-react";
import { FAQ_CATEGORIES, FAQ_DATA, FAQItem, FAQCategory } from "@/data/faqData";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { playSweetTune } from "@/lib/sound";
import FinalFooter from "@/components/FinalFooter";

// Icon mapping for category pills
const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Smartphone,
  FileText,
  Landmark,
  Building2,
  Compass,
  Globe,
  ShieldCheck,
  CreditCard,
  HeartPulse,
  MapPin,
};

export default function FAQPage() {
  const { isDark } = useTheme();
  const { lang } = useLanguage();

  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});
  const [visibleCount, setVisibleCount] = useState<number>(25);

  // Category map for quick lookup
  const categoryMap = useMemo(() => {
    const map: Record<string, string> = {};
    FAQ_CATEGORIES.forEach((c) => {
      map[c.id] = c.titleBn;
    });
    return map;
  }, []);

  // Filtered Questions based on category and search query
  const filteredQuestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return FAQ_DATA.filter((item) => {
      // Category match
      if (selectedCat !== "all" && item.category !== selectedCat) {
        return false;
      }
      // Search query match
      if (!q) return true;
      const matchBn = item.qBn.toLowerCase().includes(q);
      const matchEn = item.qEn.toLowerCase().includes(q);
      const matchAns = item.ansLines.some((l) => l.toLowerCase().includes(q));
      const matchPortal = item.portalName.toLowerCase().includes(q);
      const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
      return matchBn || matchEn || matchAns || matchPortal || matchTags;
    });
  }, [selectedCat, searchQuery]);

  // Sliced questions for snappy rendering
  const displayedQuestions = useMemo(() => {
    // If searching, show all matches immediately
    if (searchQuery.trim()) {
      return filteredQuestions;
    }
    // If a specific category is chosen, show all 20 of that category
    if (selectedCat !== "all") {
      return filteredQuestions;
    }
    // In "all" mode, paginate for 60fps performance
    return filteredQuestions.slice(0, visibleCount);
  }, [filteredQuestions, searchQuery, selectedCat, visibleCount]);

  // Toggle single accordion item
  const toggleItem = useCallback((id: number) => {
    playSweetTune();
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  // Category switch
  const handleCategorySelect = (catId: string) => {
    playSweetTune();
    setSelectedCat(catId);
    setVisibleCount(25);
  };

  // Toggle expand/collapse all
  const allExpanded = useMemo(() => {
    if (displayedQuestions.length === 0) return false;
    return displayedQuestions.every((q) => expandedIds[q.id]);
  }, [displayedQuestions, expandedIds]);

  const handleToggleExpandAll = () => {
    playSweetTune();
    if (allExpanded) {
      setExpandedIds({});
    } else {
      const nextState: Record<number, boolean> = {};
      displayedQuestions.forEach((q) => {
        nextState[q.id] = true;
      });
      setExpandedIds(nextState);
    }
  };

  // Load more items in 'all' view
  const handleLoadMore = () => {
    playSweetTune();
    setVisibleCount((prev) => Math.min(prev + 25, filteredQuestions.length));
  };

  // Active category object
  const currentCategory = useMemo(() => {
    return FAQ_CATEGORIES.find((c) => c.id === selectedCat) || FAQ_CATEGORIES[0];
  }, [selectedCat]);

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
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#D9B15C] hover:text-[#F3D89B] transition-colors py-1 px-2 rounded-lg bg-white/5 border border-white/5"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>হোম পেজে ফিরুন</span>
          </Link>
          <span
            className="text-[11px] font-semibold text-[#A0AEC0] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            সর্বমোট ২০০টি প্রশ্নোত্তর
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
              ভিসা সহায়িকা ও প্রশ্নোত্তর কেন্দ্র
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
            ভিসা সংক্রান্ত ২০০টি গুরুত্বপূর্ণ প্রশ্নোত্তর
          </h1>

          {/* Subtitle */}
          <p
            className="text-[12px] sm:text-[13px] text-[#A0AEC0] max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            ভিসা চেক অ্যাপ, পাসপোর্ট ভেরিফিকেশন, মধ্যপ্রাচ্য, ইউরোপ ও মালয়েশিয়ার জরুরি সরকারি সমাধান
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
                setVisibleCount(25);
              }}
              placeholder="প্রশ্ন, দেশ বা বিষয় খুঁজুন (যেমন: আকামা, মুকিম, ফি, দুবাই)..."
              className="w-full bg-transparent text-[13px] sm:text-[13.5px] text-[#F5F6FA] placeholder-[#718096] outline-none"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  playSweetTune();
                  setSearchQuery("");
                }}
                className="p-1 rounded-full text-[#A0AEC0] hover:text-white bg-white/10 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Search Result Count Tag */}
          {searchQuery.trim() && (
            <div className="flex items-center justify-between px-1 mt-1.5">
              <span
                className="text-[11px] text-[#D9B15C] font-semibold"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                খোঁজার ফলাফল: {filteredQuestions.length}টি প্রশ্ন পাওয়া গেছে
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-[10.5px] text-[#A0AEC0] underline hover:text-[#FFF6DE]"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                রিসেট করুন
              </button>
            </div>
          )}
        </div>

        {/* ─── Category Filter Pills Bar (Horizontal Scroll) ─── */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none select-none -mx-1 px-1">
            {FAQ_CATEGORIES.map((cat) => {
              const IconComp = CATEGORY_ICONS[cat.iconName] || Sparkles;
              const isActive = selectedCat === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategorySelect(cat.id)}
                  className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] sm:text-[12px] font-medium transition-all duration-200 cursor-pointer outline-none relative overflow-hidden"
                  style={{
                    fontFamily: "'Hind Siliguri', sans-serif",
                    background: isActive
                      ? "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)"
                      : "linear-gradient(160deg, rgba(58, 74, 142, 0.28) 0%, rgba(27, 35, 64, 0.60) 100%)",
                    color: isActive ? "#0B0D1C" : "#E2E8F0",
                    fontWeight: isActive ? 700 : 500,
                    border: isActive
                      ? "1px solid #FFE6A3"
                      : "1px solid rgba(217, 177, 92, 0.22)",
                    boxShadow: isActive
                      ? "0 4px 12px rgba(217, 177, 92, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4)"
                      : "0 2px 8px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <IconComp
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-[#0B0D1C]" : "text-[#D9B15C]"
                    }`}
                  />
                  <span>{cat.titleBn}</span>
                  <span
                    className={`text-[9.5px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-[#0B0D1C]/20 text-[#0B0D1C] font-extrabold"
                        : "bg-white/10 text-[#CBD5E1]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Control Bar: Active Category Title + Expand All Toggle ─── */}
        <div className="flex items-center justify-between px-1 mb-2.5">
          <div className="flex items-center gap-2">
            <span
              className="text-[13px] font-bold text-[#FFF6DE]"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              {currentCategory.titleBn}
            </span>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-bold"
              style={{
                background: "rgba(217, 177, 92, 0.20)",
                color: "#F3D89B",
                border: "1px solid rgba(217, 177, 92, 0.30)",
              }}
            >
              {filteredQuestions.length}টি প্রশ্ন
            </span>
          </div>

          {displayedQuestions.length > 0 && (
            <button
              type="button"
              onClick={handleToggleExpandAll}
              className="flex items-center gap-1 text-[11.5px] font-semibold text-[#D9B15C] hover:text-[#F3D89B] transition-colors cursor-pointer"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              <ChevronsUpDown className="w-3.5 h-3.5" />
              <span>{allExpanded ? "সব বন্ধ করুন" : "সবগুলো খুলুন"}</span>
            </button>
          )}
        </div>

        {/* ─── Empty State (No search results) ─── */}
        {displayedQuestions.length === 0 && (
          <div
            className="flex flex-col items-center justify-center p-8 rounded-2xl text-center my-6"
            style={{
              background:
                "linear-gradient(160deg, rgba(58, 74, 142, 0.25) 0%, rgba(27, 35, 64, 0.50) 100%)",
              border: "1px dashed rgba(217, 177, 92, 0.35)",
            }}
          >
            <HelpCircle className="w-10 h-10 text-[#D9B15C]/60 mb-2" />
            <h3
              className="text-[15px] font-bold text-[#FFF6DE] mb-1"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              কোনো প্রশ্ন পাওয়া যায়নি
            </h3>
            <p
              className="text-[12px] text-[#A0AEC0] mb-3 max-w-xs"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              আপনার অনুসন্ধান কি-ওয়ার্ড পরিবর্তন করে অথবা নিচের বোতাম চেপে পুনরায় চেষ্টা করুন।
            </p>
            <button
              type="button"
              onClick={() => {
                playSweetTune();
                setSearchQuery("");
                setSelectedCat("all");
              }}
              className="px-4 py-1.5 rounded-full text-[12px] font-bold text-[#0B0D1C] transition-transform active:scale-95 shadow-md"
              style={{
                background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
                fontFamily: "'Hind Siliguri', sans-serif",
              }}
            >
              সকল প্রশ্ন দেখুন (২০০)
            </button>
          </div>
        )}

        {/* ─── FAQ Accordion List ─── */}
        <div className="space-y-2.5">
          {displayedQuestions.map((item) => {
            const isExpanded = !!expandedIds[item.id];
            const catLabel = categoryMap[item.category] || item.category;

            return (
              <motion.div
                key={item.id}
                layout="position"
                className="rounded-[16px] transition-colors duration-200 overflow-hidden select-none"
                style={{
                  background: isExpanded
                    ? "linear-gradient(160deg, rgba(58, 74, 142, 0.45) 0%, rgba(27, 35, 64, 0.75) 100%)"
                    : "linear-gradient(160deg, rgba(58, 74, 142, 0.30) 0%, rgba(27, 35, 64, 0.55) 100%)",
                  border: isExpanded
                    ? "1.2px solid rgba(217, 177, 92, 0.60)"
                    : "1px solid rgba(217, 177, 92, 0.28)",
                  boxShadow: isExpanded
                    ? "0 8px 24px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 0 16px rgba(217, 177, 92, 0.15)"
                    : "0 4px 14px rgba(0, 0, 0, 0.30), inset 0 1px 1px rgba(255, 255, 255, 0.08)",
                }}
              >
                {/* ── Question Header (Always Visible & Clickable) ── */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleItem(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleItem(item.id);
                    }
                  }}
                  className="flex items-start justify-between gap-3 p-3.5 cursor-pointer outline-none relative"
                >
                  {/* Subtle glossy top highlight on each card */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[40%] pointer-events-none rounded-t-[16px]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.0) 100%)",
                    }}
                  />

                  {/* Left: ID badge + Question title */}
                  <div className="flex items-start gap-2.5 flex-1 min-w-0">
                    {/* Golden Question Badge */}
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm"
                      style={{
                        background: isExpanded
                          ? "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)"
                          : "rgba(217, 177, 92, 0.18)",
                        border: "1px solid rgba(217, 177, 92, 0.50)",
                        color: isExpanded ? "#0B0D1C" : "#F3D89B",
                        fontSize: "10.5px",
                        fontWeight: 800,
                      }}
                    >
                      {item.id}
                    </div>

                    {/* Question texts */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                        <span
                          className="text-[9.5px] px-1.5 py-0.2 rounded-full font-medium"
                          style={{
                            background: "rgba(217, 177, 92, 0.12)",
                            color: "#F3D89B",
                            border: "1px solid rgba(217, 177, 92, 0.25)",
                            fontFamily: "'Hind Siliguri', sans-serif",
                          }}
                        >
                          {catLabel}
                        </span>
                      </div>
                      <h2
                        className="text-[13.5px] sm:text-[14.5px] font-bold leading-snug tracking-tight text-[#FFF6DE]"
                        style={{
                          fontFamily: "'Hind Siliguri', sans-serif",
                          textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
                        }}
                      >
                        {item.qBn}
                      </h2>
                      <p className="text-[11px] text-[#8A8FA3] tracking-wide mt-0.5 truncate font-normal">
                        {item.qEn}
                      </p>
                    </div>
                  </div>

                  {/* Right: Rotating Gold Chevron Arrow */}
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(217, 177, 92, 0.20)",
                    }}
                  >
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-3.5 h-3.5 text-[#D9B15C]" />
                    </motion.div>
                  </div>
                </div>

                {/* ── Expandable Answer Body (Smooth Framer-Motion Slide) ── */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`content-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {/* Golden Divider */}
                      <div
                        className="h-[1px] mx-3.5"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(217, 177, 92, 0.35) 50%, transparent 100%)",
                        }}
                      />

                      <div className="p-3.5 pt-3">
                        {/* 5 Structured Answer Lines */}
                        <div className="space-y-2 mb-3">
                          {item.ansLines.map((line, lIdx) => (
                            <div key={lIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D9B15C] shrink-0 mt-1" />
                              <p
                                className="text-[12.5px] sm:text-[13px] leading-relaxed text-[#E2E8F0]"
                                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                              >
                                {line}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Official Verification Source Badge & Tags */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5">
                          {/* Official Portal Link */}
                          <a
                            href={item.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#F3D89B] bg-[rgba(217,177,92,0.12)] border border-[rgba(217,177,92,0.30)] hover:bg-[rgba(217,177,92,0.22)] transition-colors shadow-sm"
                            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                          >
                            <span>পোর্টাল: {item.portalName}</span>
                            <ExternalLink className="w-3 h-3 text-[#D9B15C]" />
                          </a>

                          {/* Tags */}
                          <div className="flex items-center gap-1 flex-wrap">
                            {item.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] text-[#8A8FA3] px-1.5 py-0.5 rounded bg-white/5"
                                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Load More Button (in 'All' category when not searching) ─── */}
        {selectedCat === "all" &&
          !searchQuery.trim() &&
          displayedQuestions.length < filteredQuestions.length && (
            <div className="flex justify-center mt-5 mb-2">
              <button
                type="button"
                onClick={handleLoadMore}
                className="flex items-center gap-2 px-5 py-2 rounded-full text-[12.5px] font-bold text-[#0B0D1C] cursor-pointer shadow-lg active:scale-95 transition-transform"
                style={{
                  background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
                  fontFamily: "'Hind Siliguri', sans-serif",
                  boxShadow: "0 6px 20px rgba(217, 177, 92, 0.35)",
                }}
              >
                <span>
                  আরও ২৫টি প্রশ্ন দেখুন (বাকি{" "}
                  {filteredQuestions.length - displayedQuestions.length}টি)
                </span>
                <ChevronDown className="w-4 h-4 text-[#0B0D1C]" />
              </button>
            </div>
          )}
      </main>

      {/* ─── Final Sticky Footer ─── */}
      <div className="w-full relative z-10">
        <FinalFooter lang={lang} />
      </div>
    </div>
  );
}
