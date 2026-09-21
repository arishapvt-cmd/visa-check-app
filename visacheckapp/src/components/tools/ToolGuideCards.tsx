"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, AlertCircle, Lightbulb, ChevronRight, X, Sparkles, CheckCircle2, Maximize2, ShieldAlert } from "lucide-react";
import { playSweetTune } from "@/lib/sound";

export interface ToolGuideItem {
  id: string;
  type: "what" | "why" | "how";
  badge: "কী?" | "কেন?" | "কীভাবে?";
  title: string;
  shortDesc: string;
  fullParagraph: string;
  keyPoints?: string[];
}

interface ToolGuideCardsProps {
  sectionTitle?: string;
  subtitle?: string;
  theme?: "gold" | "emerald" | "sky" | "amber";
  items: ToolGuideItem[];
  className?: string;
}

export default function ToolGuideCards({
  sectionTitle = "বিশেষ নির্দেশিকা ও তথ্য (কী? কেন? কীভাবে?)",
  subtitle = "প্রবাসীদের প্রয়োজনীয় নিয়মাবলী ও সঠিক সিদ্ধান্ত নিতে বিস্তারিত জানুন",
  theme = "gold",
  items,
  className = "",
}: ToolGuideCardsProps) {
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState<ToolGuideItem | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getThemeColors = () => {
    switch (theme) {
      case "emerald":
        return {
          badgeBorder: "#10b981",
          badgeBg: "rgba(16, 185, 129, 0.15)",
          badgeText: "#34d399",
          cardBorder: "rgba(16, 185, 129, 0.35)",
          glow: "rgba(16, 185, 129, 0.3)",
          btnGrad: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
          btnTextColor: "#0c1a1f",
        };
      case "sky":
        return {
          badgeBorder: "#38bdf8",
          badgeBg: "rgba(56, 189, 248, 0.15)",
          badgeText: "#7dd3fc",
          cardBorder: "rgba(56, 189, 248, 0.35)",
          glow: "rgba(56, 189, 248, 0.3)",
          btnGrad: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
          btnTextColor: "#ffffff",
        };
      case "amber":
        return {
          badgeBorder: "#f59e0b",
          badgeBg: "rgba(245, 158, 11, 0.15)",
          badgeText: "#fbbf24",
          cardBorder: "rgba(245, 158, 11, 0.35)",
          glow: "rgba(245, 158, 11, 0.3)",
          btnGrad: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
          btnTextColor: "#1e1b18",
        };
      case "gold":
      default:
        return {
          badgeBorder: "#d9b15c",
          badgeBg: "rgba(217, 177, 92, 0.15)",
          badgeText: "#f3d89b",
          cardBorder: "rgba(217, 177, 92, 0.35)",
          glow: "rgba(217, 177, 92, 0.3)",
          btnGrad: "linear-gradient(135deg, #f3d89b 0%, #d9b15c 100%)",
          btnTextColor: "#1b2340",
        };
    }
  };

  const themeColors = getThemeColors();

  const getItemBadgeStyle = (type: ToolGuideItem["type"]) => {
    switch (type) {
      case "what":
        return {
          bg: "rgba(56, 189, 248, 0.18)",
          border: "#38bdf8",
          text: "#7dd3fc",
          icon: <HelpCircle className="w-3.5 h-3.5 text-[#38bdf8]" />,
        };
      case "why":
        return {
          bg: "rgba(245, 158, 11, 0.18)",
          border: "#f59e0b",
          text: "#fbbf24",
          icon: <AlertCircle className="w-3.5 h-3.5 text-[#f59e0b]" />,
        };
      case "how":
      default:
        return {
          bg: "rgba(16, 185, 129, 0.18)",
          border: "#10b981",
          text: "#34d399",
          icon: <Lightbulb className="w-3.5 h-3.5 text-[#10b981]" />,
        };
    }
  };

  return (
    <div
      className={`rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border flex flex-col justify-between transition-all select-none ${className}`}
      style={{
        background: "linear-gradient(145deg, rgba(20, 29, 54, 0.90) 0%, rgba(10, 16, 32, 0.96) 100%)",
        borderColor: themeColors.cardBorder,
        boxShadow: "0 10px 32px rgba(0, 0, 0, 0.50), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(16px)",
      }}
    >
      {/* ─── Main Card 2 Header ─── */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 shrink-0" style={{ color: themeColors.badgeText }} />
            <h4
              className="text-xs sm:text-sm font-bold text-[#F1EAD9] tracking-wide"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              {sectionTitle}
            </h4>
          </div>
          {subtitle && (
            <p className="text-[10.5px] sm:text-[11px] text-[#A0AEC0] leading-tight">
              {subtitle}
            </p>
          )}
        </div>

        <span
          className="text-[10px] font-bold px-2.5 py-1 rounded-full border shrink-0 flex items-center gap-1 cursor-pointer active:scale-95 transition-transform"
          style={{
            color: themeColors.badgeText,
            backgroundColor: themeColors.badgeBg,
            borderColor: themeColors.badgeBorder,
          }}
        >
          <span>টাচ করে জুম</span>
          <Maximize2 className="w-3 h-3" />
        </span>
      </div>

      {/* ─── Vertically Distributed 3 Cards Container (Fills Height, Eliminates Empty Void) ─── */}
      <div className="flex-1 flex flex-col justify-between gap-2.5 my-2.5">
        {items.map((item) => {
          const badgeStyle = getItemBadgeStyle(item.type);
          return (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => {
                playSweetTune();
                setActiveItem(item);
              }}
              className="relative p-3 sm:p-3.5 rounded-xl sm:rounded-2xl transition-all duration-200 cursor-pointer select-none group border text-left flex flex-col justify-between flex-1 active:scale-[0.99]"
              style={{
                background: "linear-gradient(180deg, rgba(27, 36, 68, 0.70) 0%, rgba(16, 22, 46, 0.85) 100%)",
                borderColor: "rgba(255, 255, 255, 0.09)",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.35)",
              }}
            >
              <div>
                {/* Top Row: Badge + Zoom Icon */}
                <div className="flex items-center justify-between mb-1.5">
                  <div
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10.5px] sm:text-[11px] font-bold border"
                    style={{
                      backgroundColor: badgeStyle.bg,
                      borderColor: badgeStyle.border,
                      color: badgeStyle.text,
                      fontFamily: "'Hind Siliguri', sans-serif",
                    }}
                  >
                    {badgeStyle.icon}
                    <span>{item.badge} পর্ব</span>
                  </div>

                  <div
                    className="flex items-center gap-1 text-[10px] font-bold group-hover:underline"
                    style={{ color: themeColors.badgeText }}
                  >
                    <span>সম্পূর্ণ পড়ুন</span>
                    <Maximize2 className="w-3 h-3 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Title */}
                <h5
                  className="text-[12.5px] sm:text-[13.5px] font-bold text-[#F1EAD9] leading-snug mb-1 group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  {item.title}
                </h5>

                {/* Short Description (2 Lines) */}
                <p className="text-[11px] text-[#A0AEC0] line-clamp-2 leading-relaxed">
                  {item.shortDesc}
                </p>
              </div>

              {/* Tap to expand footer bar */}
              <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[10px] text-[#8C98A4]">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: badgeStyle.border }} />
                  বিস্তারিত ৮–১০ লাইনের তথ্য ও সরকারি সমাধান
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-[#A0AEC0] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Bottom Mini Trust Badge inside Card 2 ─── */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-center gap-1.5 text-[10px] text-[#A0AEC0] shrink-0">
        <ShieldAlert className="w-3 h-3 text-[#D9B15C]" />
        <span>যেকোনো কার্ডে স্পর্শ করে পূর্ণাঙ্গ আইনি ও সরকারি গাইডলাইন দেখে নিন</span>
      </div>

      {/* ─── Zoom In-Viewport Modal (Portal directly to document.body) ─── */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {activeItem && (
            <div className="fixed inset-0 z-[100002] flex items-center justify-center p-4">
              {/* Zoom Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  playSweetTune();
                  setActiveItem(null);
                }}
                className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              />

              {/* Zoom Card Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative z-10 w-full max-w-lg rounded-3xl p-5 text-slate-100 flex flex-col shadow-2xl border"
                style={{
                  minHeight: "460px",
                  maxHeight: "84vh",
                  background: "linear-gradient(180deg, #131A33 0%, #0A0E1D 100%)",
                  borderColor: themeColors.badgeBorder,
                  borderWidth: "1.5px",
                  boxShadow: `0 0 35px ${themeColors.glow}, 0 20px 50px rgba(0, 0, 0, 0.95)`,
                }}
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10 shrink-0">
                  <div className="space-y-1.5">
                    <div
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border"
                      style={{
                        backgroundColor: getItemBadgeStyle(activeItem.type).bg,
                        borderColor: getItemBadgeStyle(activeItem.type).border,
                        color: getItemBadgeStyle(activeItem.type).text,
                        fontFamily: "'Hind Siliguri', sans-serif",
                      }}
                    >
                      {getItemBadgeStyle(activeItem.type).icon}
                      <span>{activeItem.badge} পর্ব</span>
                    </div>
                    <h3
                      className="text-base sm:text-lg font-bold text-[#F1EAD9] leading-snug"
                      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                    >
                      {activeItem.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      playSweetTune();
                      setActiveItem(null);
                    }}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white shrink-0 active:scale-95 transition-transform"
                    title="বন্ধ করুন"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Body - Scrollable Reader */}
                <div
                  className="my-3.5 space-y-3.5 pr-1 scrollbar-none"
                  style={{
                    flex: "1 1 auto",
                    minHeight: "280px",
                    overflowY: "auto",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {/* Full Informative Paragraph (8-10 lines) */}
                  <div
                    className="rounded-2xl p-4 border"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <p
                      className="text-[13px] sm:text-[14px] text-[#E2E8F0] leading-[1.8] text-justify"
                      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                    >
                      {activeItem.fullParagraph}
                    </p>
                  </div>

                  {/* Key Bullet Points / Action Checklist */}
                  {activeItem.keyPoints && activeItem.keyPoints.length > 0 && (
                    <div
                      className="rounded-2xl p-3.5 border space-y-2"
                      style={{
                        background: "rgba(217, 177, 92, 0.05)",
                        borderColor: "rgba(217, 177, 92, 0.2)",
                      }}
                    >
                      <h6
                        className="text-xs font-bold text-[#F3D89B] flex items-center gap-1.5"
                        style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D9B15C]" />
                        <span>গুরুত্বপূর্ণ করণীয় ও সারসংক্ষেপ:</span>
                      </h6>
                      <ul className="space-y-1.5 text-[12px] text-[#CBD5E1]">
                        {activeItem.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#D9B15C] mt-0.5 font-bold">•</span>
                            <span className="leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="pt-2.5 border-t border-white/10 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      playSweetTune();
                      setActiveItem(null);
                    }}
                    className="w-full py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                    style={{
                      background: themeColors.btnGrad,
                      color: themeColors.btnTextColor,
                      fontFamily: "'Hind Siliguri', sans-serif",
                    }}
                  >
                    <span>বুঝেছি, বন্ধ করুন</span>
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
