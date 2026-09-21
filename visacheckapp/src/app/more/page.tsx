"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { useAndroidBridge } from "@/hooks/useAndroidBridge";
import {
  Shield,
  Star,
  Info,
  Share2,
  Heart,
  ChevronRight,
  Smartphone,
  Mail,
  Calculator,
  ArrowRightLeft,
  QrCode,
  CheckSquare,
  FolderLock,
  Building2,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { playSweetTune } from "@/lib/sound";
import FinalFooter from "@/components/FinalFooter";

// Modals
import OverstayCalculatorModal from "@/components/tools/OverstayCalculatorModal";
import CurrencyConverterModal from "@/components/tools/CurrencyConverterModal";
import PreDepartureChecklistModal from "@/components/tools/PreDepartureChecklistModal";
import VisaQRScannerModal from "@/components/tools/VisaQRScannerModal";
import VisaVaultModal from "@/components/tools/VisaVaultModal";
import GovtServicesModal from "@/components/tools/GovtServicesModal";
import EmbassyDirectoryModal from "@/components/tools/EmbassyDirectoryModal";
import { ToolCardAmbientBg } from "@/components/tools/ToolCardAmbientBg";

export default function MorePage() {
  const { isDark } = useTheme();
  const { lang } = useLanguage();
  const { shareContent, isAndroid } = useAndroidBridge();
  const isBn = lang === "bn";

  // Tool Modals State
  const [activeModal, setActiveModal] = useState<
    "calculator" | "currency" | "checklist" | "scanner" | "vault" | "govt" | "embassy" | null
  >(null);

  const handleShareApp = () => {
    playSweetTune();
    shareContent(
      isBn ? "ভিসা চেক করার অ্যাপ" : "VisaCheck App",
      isBn
        ? "বাংলাদেশি পাসপোর্টধারীদের জন্য বিশ্বের ২০টি দেশের ভিসা স্ট্যাটাস চেক ও ট্রাভেল টুলস!\n\nডাউনলোড করুন: https://play.google.com/store/apps/details?id=net.visacheckapp.app"
        : "Check visa status and travel tools for Bangladeshi passport holders!\n\nDownload: https://play.google.com/store/apps/details?id=net.visacheckapp.app"
    );
  };

  const openToolModal = (
    modal: "calculator" | "currency" | "checklist" | "scanner" | "vault" | "govt" | "embassy"
  ) => {
    playSweetTune();
    setActiveModal(modal);
  };

  return (
    <div
      className="min-h-[100dvh] selection:bg-[#D9B15C]/30 relative overflow-x-hidden transition-colors duration-300"
      style={{
        backgroundColor: isDark ? "#0B0D1C" : "var(--bg-page, #F8FAFC)",
        color: isDark ? "#F1F5F9" : "#1E293B",
        fontFamily: "'Plus Jakarta Sans', 'Hind Siliguri', sans-serif",
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 52px)",
        paddingBottom: "calc(84px + env(safe-area-inset-bottom, 16px))",
      }}
    >
      {/* Ambient background glow effects */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[360px] pointer-events-none z-0"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at 50% 0%, rgba(58, 74, 142, 0.35) 0%, rgba(217, 177, 92, 0.08) 50%, transparent 80%)"
            : "radial-gradient(ellipse at 50% 0%, rgba(217, 177, 92, 0.20) 0%, rgba(58, 74, 142, 0.08) 50%, transparent 80%)",
        }}
      />

      <div className="w-full max-w-xl mx-auto px-3.5 pt-1 pb-2 relative z-10 flex flex-col gap-4 sm:gap-5">
        {/* ─── App Header Card ─── */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between py-2.5 px-3 rounded-2xl"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(58, 74, 142, 0.25) 0%, rgba(18, 24, 46, 0.70) 100%)"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(241, 245, 249, 0.90) 100%)",
            border: isDark
              ? "1px solid rgba(217, 177, 92, 0.30)"
              : "1px solid rgba(217, 177, 92, 0.40)",
            boxShadow: isDark
              ? "0 4px 16px rgba(0, 0, 0, 0.35)"
              : "0 4px 16px rgba(217, 177, 92, 0.10)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="w-10 h-10 rounded-xl p-[1.5px] flex items-center justify-center shadow-md shrink-0"
              style={{
                background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
              }}
            >
              <div className="w-full h-full rounded-[11px] bg-[#0d1326] flex items-center justify-center text-[#D9B15C]">
                <Smartphone className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h1
                className="font-extrabold text-sm sm:text-base leading-tight"
                style={{
                  fontFamily: "'Hind Siliguri', sans-serif",
                  color: isDark ? "#F1EAD9" : "#1E293B",
                }}
              >
                {isBn ? "ভিসা চেক করার অ্যাপ" : "VisaCheck App"}
              </h1>
              <p
                className="text-[10.5px] sm:text-[11px] mt-0.5"
                style={{ color: isDark ? "#A0AEC0" : "#64748B" }}
              >
                {isBn ? "সংস্করণ ৭.০.০" : "Version 7.0.0"}
                {isAndroid && " (Android) · অফিসিয়াল"}
              </p>
            </div>
          </div>

          <Link
            href="/"
            onClick={playSweetTune}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold active:scale-95 transition-all"
            style={{
              fontFamily: "'Hind Siliguri', sans-serif",
              background: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(217, 177, 92, 0.15)",
              color: isDark ? "#F3D89B" : "#B45309",
              border: isDark ? "1px solid rgba(255, 255, 255, 0.10)" : "1px solid rgba(217, 177, 92, 0.35)",
            }}
          >
            <Heart className="w-3.5 h-3.5 text-[#ef4444] fill-[#ef4444]" />
            <span>পছন্দের দেশ</span>
          </Link>
        </motion.div>

        {/* ─── SECTION 1: ⚡ দ্রুত ভিসা ও ট্রাভেল টুলস (4 Interactive Cards in 2x2 Grid) ─── */}
        <div>
          <div className="flex items-center justify-between px-1 mb-1.5">
            <span
              className="text-xs font-bold flex items-center gap-1.5"
              style={{
                fontFamily: "'Hind Siliguri', sans-serif",
                color: isDark ? "#E2E8F0" : "#1E293B",
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D9B15C]" />
              <span>ইন্টারেক্টিভ ভিসা ও ট্রাভেল টুলস:</span>
            </span>
            <span
              className="text-[10.5px]"
              style={{ color: isDark ? "#A0AEC0" : "#64748B" }}
            >
              ৪টি স্মার্ট টুল
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {/* Tool 1: Overstay Calculator */}
            <motion.div
              whileTap={{ scale: 0.96 }}
              onClick={() => openToolModal("calculator")}
              className="relative overflow-hidden rounded-2xl cursor-pointer select-none transition-all duration-200 flex flex-col items-center justify-center p-2 sm:p-2.5"
              style={{
                background: isDark
                  ? "linear-gradient(150deg, rgba(239, 68, 68, 0.12) 0%, rgba(18, 24, 46, 0.90) 60%, rgba(11, 13, 28, 0.95) 100%)"
                  : "linear-gradient(150deg, rgba(239, 68, 68, 0.08) 0%, rgba(241, 245, 249, 0.95) 100%)",
                border: "1px solid rgba(239, 68, 68, 0.35)",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.08)",
                minHeight: "135px",
              }}
            >
              <ToolCardAmbientBg toolType="calculator" isDark={isDark} />

              <div className="relative z-10 w-full flex flex-col items-center justify-center text-center my-auto">
                <div
                  className="w-full max-w-[96%] mx-auto py-2 px-1.5 rounded-xl sm:rounded-2xl relative overflow-hidden flex flex-col items-center justify-center text-center transition-transform"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(243, 216, 155, 0.20) 0%, rgba(18, 24, 46, 0.88) 50%, rgba(197, 158, 65, 0.18) 100%)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1.5px solid rgba(217, 177, 92, 0.55)",
                    boxShadow:
                      "0 4px 16px rgba(0, 0, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.35), 0 0 12px rgba(217, 177, 92, 0.20)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[45%] pointer-events-none rounded-t-xl"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    }}
                  />

                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl p-[1px] flex items-center justify-center mb-1 shrink-0 shadow-md relative z-10"
                    style={{
                      background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
                      boxShadow: "0 0 10px rgba(217, 177, 92, 0.35)",
                    }}
                  >
                    <div className="w-full h-full rounded-[10px] bg-[#1a1424] flex items-center justify-center text-[#f87171]">
                      <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <h3
                    className="font-bold text-[12.5px] sm:text-[13.5px] text-[#FFF6DE] text-center leading-snug tracking-wide relative z-10"
                    style={{
                      fontFamily: "'Hind Siliguri', sans-serif",
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.9), 0 0 10px rgba(217, 177, 92, 0.4)",
                    }}
                  >
                    জরিমানা হিসাব
                  </h3>

                  <p
                    className="text-[9.5px] sm:text-[10px] text-[#E8D9B5] mt-0.5 text-center leading-tight line-clamp-2 px-1 relative z-10 font-medium"
                    style={{
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    ভিসা মেয়াদ ও ওভারস্টে ফাইন ক্যালকুলেটর
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tool 2: Currency Converter */}
            <motion.div
              whileTap={{ scale: 0.96 }}
              onClick={() => openToolModal("currency")}
              className="relative overflow-hidden rounded-2xl cursor-pointer select-none transition-all duration-200 flex flex-col items-center justify-center p-2 sm:p-2.5"
              style={{
                background: isDark
                  ? "linear-gradient(150deg, rgba(16, 185, 129, 0.12) 0%, rgba(18, 24, 46, 0.90) 60%, rgba(11, 13, 28, 0.95) 100%)"
                  : "linear-gradient(150deg, rgba(16, 185, 129, 0.08) 0%, rgba(241, 245, 249, 0.95) 100%)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.08)",
                minHeight: "135px",
              }}
            >
              <ToolCardAmbientBg toolType="currency" isDark={isDark} />

              <div className="relative z-10 w-full flex flex-col items-center justify-center text-center my-auto">
                <div
                  className="w-full max-w-[96%] mx-auto py-2 px-1.5 rounded-xl sm:rounded-2xl relative overflow-hidden flex flex-col items-center justify-center text-center transition-transform"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(243, 216, 155, 0.20) 0%, rgba(18, 24, 46, 0.88) 50%, rgba(197, 158, 65, 0.18) 100%)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1.5px solid rgba(217, 177, 92, 0.55)",
                    boxShadow:
                      "0 4px 16px rgba(0, 0, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.35), 0 0 12px rgba(217, 177, 92, 0.20)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[45%] pointer-events-none rounded-t-xl"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    }}
                  />

                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl p-[1px] flex items-center justify-center mb-1 shrink-0 shadow-md relative z-10"
                    style={{
                      background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
                      boxShadow: "0 0 10px rgba(217, 177, 92, 0.35)",
                    }}
                  >
                    <div className="w-full h-full rounded-[10px] bg-[#0c1a1f] flex items-center justify-center text-[#34d399]">
                      <ArrowRightLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <h3
                    className="font-bold text-[12.5px] sm:text-[13.5px] text-[#FFF6DE] text-center leading-snug tracking-wide relative z-10"
                    style={{
                      fontFamily: "'Hind Siliguri', sans-serif",
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.9), 0 0 10px rgba(217, 177, 92, 0.4)",
                    }}
                  >
                    মুদ্রা কনভার্টার
                  </h3>

                  <p
                    className="text-[9.5px] sm:text-[10px] text-[#E8D9B5] mt-0.5 text-center leading-tight line-clamp-2 px-1 relative z-10 font-medium"
                    style={{
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    রিয়াল, দিরহাম ও দিনার থেকে টাকার রেট
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tool 3: QR Code Scanner */}
            <motion.div
              whileTap={{ scale: 0.96 }}
              onClick={() => openToolModal("scanner")}
              className="relative overflow-hidden rounded-2xl cursor-pointer select-none transition-all duration-200 flex flex-col items-center justify-center p-2 sm:p-2.5"
              style={{
                background: isDark
                  ? "linear-gradient(150deg, rgba(56, 189, 248, 0.12) 0%, rgba(18, 24, 46, 0.90) 60%, rgba(11, 13, 28, 0.95) 100%)"
                  : "linear-gradient(150deg, rgba(56, 189, 248, 0.08) 0%, rgba(241, 245, 249, 0.95) 100%)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.08)",
                minHeight: "135px",
              }}
            >
              <ToolCardAmbientBg toolType="scanner" isDark={isDark} />

              <div className="relative z-10 w-full flex flex-col items-center justify-center text-center my-auto">
                <div
                  className="w-full max-w-[96%] mx-auto py-2 px-1.5 rounded-xl sm:rounded-2xl relative overflow-hidden flex flex-col items-center justify-center text-center transition-transform"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(243, 216, 155, 0.20) 0%, rgba(18, 24, 46, 0.88) 50%, rgba(197, 158, 65, 0.18) 100%)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1.5px solid rgba(217, 177, 92, 0.55)",
                    boxShadow:
                      "0 4px 16px rgba(0, 0, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.35), 0 0 12px rgba(217, 177, 92, 0.20)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[45%] pointer-events-none rounded-t-xl"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    }}
                  />

                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl p-[1px] flex items-center justify-center mb-1 shrink-0 shadow-md relative z-10"
                    style={{
                      background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
                      boxShadow: "0 0 10px rgba(217, 177, 92, 0.35)",
                    }}
                  >
                    <div className="w-full h-full rounded-[10px] bg-[#0a1829] flex items-center justify-center text-[#38bdf8]">
                      <QrCode className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <h3
                    className="font-bold text-[12.5px] sm:text-[13.5px] text-[#FFF6DE] text-center leading-snug tracking-wide relative z-10"
                    style={{
                      fontFamily: "'Hind Siliguri', sans-serif",
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.9), 0 0 10px rgba(217, 177, 92, 0.4)",
                    }}
                  >
                    ভিসা কিউআর স্ক্যান
                  </h3>

                  <p
                    className="text-[9.5px] sm:text-[10px] text-[#E8D9B5] mt-0.5 text-center leading-tight line-clamp-2 px-1 relative z-10 font-medium"
                    style={{
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    ই-ভিসা ও পাসপোর্টের বারকোড রিডার
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tool 4: Pre-Departure Checklist */}
            <motion.div
              whileTap={{ scale: 0.96 }}
              onClick={() => openToolModal("checklist")}
              className="relative overflow-hidden rounded-2xl cursor-pointer select-none transition-all duration-200 flex flex-col items-center justify-center p-2 sm:p-2.5"
              style={{
                background: isDark
                  ? "linear-gradient(150deg, rgba(217, 177, 92, 0.14) 0%, rgba(18, 24, 46, 0.90) 60%, rgba(11, 13, 28, 0.95) 100%)"
                  : "linear-gradient(150deg, rgba(217, 177, 92, 0.08) 0%, rgba(241, 245, 249, 0.95) 100%)",
                border: "1px solid rgba(217, 177, 92, 0.40)",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.08)",
                minHeight: "135px",
              }}
            >
              <ToolCardAmbientBg toolType="checklist" isDark={isDark} />

              <div className="relative z-10 w-full flex flex-col items-center justify-center text-center my-auto">
                <div
                  className="w-full max-w-[96%] mx-auto py-2 px-1.5 rounded-xl sm:rounded-2xl relative overflow-hidden flex flex-col items-center justify-center text-center transition-transform"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(243, 216, 155, 0.20) 0%, rgba(18, 24, 46, 0.88) 50%, rgba(197, 158, 65, 0.18) 100%)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1.5px solid rgba(217, 177, 92, 0.55)",
                    boxShadow:
                      "0 4px 16px rgba(0, 0, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.35), 0 0 12px rgba(217, 177, 92, 0.20)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[45%] pointer-events-none rounded-t-xl"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    }}
                  />

                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl p-[1px] flex items-center justify-center mb-1 shrink-0 shadow-md relative z-10"
                    style={{
                      background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
                      boxShadow: "0 0 10px rgba(217, 177, 92, 0.35)",
                    }}
                  >
                    <div className="w-full h-full rounded-[10px] bg-[#1a1710] flex items-center justify-center text-[#F3D89B]">
                      <CheckSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <h3
                    className="font-bold text-[12.5px] sm:text-[13.5px] text-[#FFF6DE] text-center leading-snug tracking-wide relative z-10"
                    style={{
                      fontFamily: "'Hind Siliguri', sans-serif",
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.9), 0 0 10px rgba(217, 177, 92, 0.4)",
                    }}
                  >
                    ভ্রমণ চেকলিস্ট
                  </h3>

                  <p
                    className="text-[9.5px] sm:text-[10px] text-[#E8D9B5] mt-0.5 text-center leading-tight line-clamp-2 px-1 relative z-10 font-medium"
                    style={{
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    ইমিগ্রেশন অফলোড এড়াতে ডিজিটাল প্রস্তুতি
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ─── SECTION 2: 📂 আমার ভিসা ও পাসপোর্ট ভল্ট (Offline Vault Banner) ─── */}
        <div>
          <motion.div
            whileTap={{ scale: 0.98 }}
            onClick={() => openToolModal("vault")}
            className="py-3.5 px-4 rounded-2xl cursor-pointer select-none transition-all duration-200 flex items-center justify-between"
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(168, 85, 247, 0.18) 0%, rgba(18, 24, 46, 0.85) 100%)"
                : "linear-gradient(135deg, rgba(243, 232, 255, 0.90) 0%, rgba(255, 255, 255, 0.98) 100%)",
              border: isDark ? "1px solid rgba(168, 85, 247, 0.45)" : "1px solid rgba(168, 85, 247, 0.35)",
              boxShadow: isDark ? "0 4px 20px rgba(0, 0, 0, 0.40)" : "0 4px 16px rgba(168, 85, 247, 0.10)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-2xl p-[1.5px] flex items-center justify-center shrink-0 shadow-md"
                style={{ background: "linear-gradient(135deg, #c084fc 0%, #a855f7 100%)" }}
              >
                <div className="w-full h-full rounded-[14px] bg-[#191029] flex items-center justify-center text-[#c084fc]">
                  <FolderLock className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3
                    className="font-extrabold text-sm sm:text-[15px] leading-tight"
                    style={{
                      fontFamily: "'Hind Siliguri', sans-serif",
                      color: isDark ? "#FFFFFF" : "#1E293B",
                    }}
                  >
                    আমার ভিসা ও পাসপোর্ট ভল্ট
                  </h3>
                  <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-[#a855f7]/20 text-[#c084fc] border border-[#a855f7]/40">
                    অফলাইন
                  </span>
                </div>
                <p
                  className="text-[11px] sm:text-[11.5px] mt-1"
                  style={{ color: isDark ? "#CBD5E1" : "#64748B" }}
                >
                  পাসপোর্ট ও ভিসার তথ্য সংরক্ষণ ও মেয়াদ অ্যালার্ট ট্র্যাকার
                </p>
              </div>
            </div>

            <ChevronRight
              className="w-5 h-5 shrink-0"
              style={{ color: isDark ? "#A0AEC0" : "#94A3B8" }}
            />
          </motion.div>
        </div>

        {/* ─── SECTION 3: 🏛️ সরকারি ক্লিয়ারেন্স ও প্রবাসী সেবা ─── */}
        <div>
          <p
            className="text-xs sm:text-[12.5px] font-bold mb-2.5 px-1 flex items-center gap-2"
            style={{
              fontFamily: "'Hind Siliguri', sans-serif",
              color: isDark ? "#E2E8F0" : "#1E293B",
            }}
          >
            <Building2 className="w-4 h-4 text-[#D9B15C]" />
            <span>সরকারি ক্লিয়ারেন্স ও প্রবাসী সেবা:</span>
          </p>

          <div
            className={`rounded-2xl overflow-hidden divide-y ${
              isDark ? "divide-white/5" : "divide-slate-200/60"
            }`}
            style={{
              background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.88)",
              border: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(217, 177, 92, 0.25)",
              boxShadow: isDark ? "0 4px 16px rgba(0, 0, 0, 0.25)" : "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* Govt Services Modal Trigger */}
            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={() => openToolModal("govt")}
              className={`py-3.5 px-4 flex items-center justify-between cursor-pointer select-none transition-colors ${
                isDark ? "hover:bg-white/5" : "hover:bg-slate-100/70"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#38bdf8]/15 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span
                    className="font-bold text-[13px] sm:text-sm block leading-tight"
                    style={{
                      fontFamily: "'Hind Siliguri', sans-serif",
                      color: isDark ? "#FFFFFF" : "#1E293B",
                    }}
                  >
                    BMET, গামকা ও সরকারি ক্লিয়ারেন্স হাব
                  </span>
                  <span
                    className="text-[11px] block mt-1"
                    style={{ color: isDark ? "#A0AEC0" : "#64748B" }}
                  >
                    স্মার্ট কার্ড, Wafid মেডিকেল ও পুলিশ ক্লিয়ারেন্স
                  </span>
                </div>
              </div>
              <ChevronRight
                className="w-4.5 h-4.5 shrink-0"
                style={{ color: isDark ? "#A0AEC0" : "#94A3B8" }}
              />
            </motion.div>

            {/* Embassy Directory Modal Trigger */}
            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={() => openToolModal("embassy")}
              className={`py-3.5 px-4 flex items-center justify-between cursor-pointer select-none transition-colors ${
                isDark ? "hover:bg-white/5" : "hover:bg-slate-100/70"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#ef4444]/15 text-[#ef4444] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span
                    className="font-bold text-[13px] sm:text-sm block leading-tight"
                    style={{
                      fontFamily: "'Hind Siliguri', sans-serif",
                      color: isDark ? "#FFFFFF" : "#1E293B",
                    }}
                  >
                    জরুরি হেল্পলাইন ও দূতাবাস ডিরেক্টরি
                  </span>
                  <span
                    className="text-[11px] block mt-1"
                    style={{ color: isDark ? "#A0AEC0" : "#64748B" }}
                  >
                    প্রবাসী কল্যাণ (১৬১৩৫) ও বিদেশে বাংলাদেশ এম্বাসি হটলাইন
                  </span>
                </div>
              </div>
              <ChevronRight
                className="w-4.5 h-4.5 shrink-0"
                style={{ color: isDark ? "#A0AEC0" : "#94A3B8" }}
              />
            </motion.div>
          </div>
        </div>

        {/* ─── SECTION 4: ⚙️ অ্যাপ সহায়তা ও সেটিংস ─── */}
        <div>
          <p
            className="text-xs sm:text-[12.5px] font-bold mb-2.5 px-1"
            style={{
              fontFamily: "'Hind Siliguri', sans-serif",
              color: isDark ? "#E2E8F0" : "#1E293B",
            }}
          >
            অ্যাপ সহায়তা ও সেটিংস:
          </p>

          <div
            className={`rounded-2xl overflow-hidden divide-y ${
              isDark ? "divide-white/5" : "divide-slate-200/60"
            }`}
            style={{
              background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.88)",
              border: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(217, 177, 92, 0.25)",
              boxShadow: isDark ? "0 4px 16px rgba(0, 0, 0, 0.25)" : "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* Privacy Policy */}
            <Link
              href="/privacy"
              onClick={playSweetTune}
              className={`py-3.5 px-4 flex items-center justify-between transition-colors ${
                isDark ? "hover:bg-white/5" : "hover:bg-slate-100/70"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8.5 h-8.5 rounded-xl bg-[#0ea5e9]/15 text-[#0ea5e9] flex items-center justify-center shrink-0">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <span
                  className="font-bold text-[13px] sm:text-sm"
                  style={{
                    fontFamily: "'Hind Siliguri', sans-serif",
                    color: isDark ? "#FFFFFF" : "#1E293B",
                  }}
                >
                  গোপনীয়তা নীতিমালা
                </span>
              </div>
              <ChevronRight
                className="w-4.5 h-4.5 shrink-0"
                style={{ color: isDark ? "#A0AEC0" : "#94A3B8" }}
              />
            </Link>

            {/* About Us */}
            <a
              href="https://visacheckapp.net/about-us"
              target="_blank"
              rel="noreferrer"
              onClick={playSweetTune}
              className={`py-3.5 px-4 flex items-center justify-between transition-colors ${
                isDark ? "hover:bg-white/5" : "hover:bg-slate-100/70"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8.5 h-8.5 rounded-xl bg-[#6366f1]/15 text-[#6366f1] flex items-center justify-center shrink-0">
                  <Info className="w-4.5 h-4.5" />
                </div>
                <span
                  className="font-bold text-[13px] sm:text-sm"
                  style={{
                    fontFamily: "'Hind Siliguri', sans-serif",
                    color: isDark ? "#FFFFFF" : "#1E293B",
                  }}
                >
                  আমাদের সম্পর্কে
                </span>
              </div>
              <ChevronRight
                className="w-4.5 h-4.5 shrink-0"
                style={{ color: isDark ? "#A0AEC0" : "#94A3B8" }}
              />
            </a>

            {/* Share with Friends */}
            <div
              onClick={handleShareApp}
              className={`py-3.5 px-4 flex items-center justify-between cursor-pointer transition-colors ${
                isDark ? "hover:bg-white/5" : "hover:bg-slate-100/70"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8.5 h-8.5 rounded-xl bg-[#10b981]/15 text-[#10b981] flex items-center justify-center shrink-0">
                  <Share2 className="w-4.5 h-4.5" />
                </div>
                <span
                  className="font-bold text-[13px] sm:text-sm"
                  style={{
                    fontFamily: "'Hind Siliguri', sans-serif",
                    color: isDark ? "#FFFFFF" : "#1E293B",
                  }}
                >
                  বন্ধুদের সাথে শেয়ার করুন
                </span>
              </div>
              <ChevronRight
                className="w-4.5 h-4.5 shrink-0"
                style={{ color: isDark ? "#A0AEC0" : "#94A3B8" }}
              />
            </div>

            {/* Rate on Play Store */}
            <a
              href="https://play.google.com/store/apps/details?id=net.visacheckapp.app"
              target="_blank"
              rel="noreferrer"
              onClick={playSweetTune}
              className={`py-3.5 px-4 flex items-center justify-between transition-colors ${
                isDark ? "hover:bg-white/5" : "hover:bg-slate-100/70"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8.5 h-8.5 rounded-xl bg-[#f59e0b]/15 text-[#f59e0b] flex items-center justify-center shrink-0">
                  <Star className="w-4.5 h-4.5" />
                </div>
                <span
                  className="font-bold text-[13px] sm:text-sm"
                  style={{
                    fontFamily: "'Hind Siliguri', sans-serif",
                    color: isDark ? "#FFFFFF" : "#1E293B",
                  }}
                >
                  Play Store-এ রেটিং দিন
                </span>
              </div>
              <ChevronRight
                className="w-4.5 h-4.5 shrink-0"
                style={{ color: isDark ? "#A0AEC0" : "#94A3B8" }}
              />
            </a>

            {/* Support Email */}
            <a
              href="mailto:support@visacheckapp.net"
              onClick={playSweetTune}
              className={`py-3.5 px-4 flex items-center justify-between transition-colors ${
                isDark ? "hover:bg-white/5" : "hover:bg-slate-100/70"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8.5 h-8.5 rounded-xl bg-[#ec4899]/15 text-[#ec4899] flex items-center justify-center shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span
                    className="font-bold text-[13px] sm:text-sm block leading-tight"
                    style={{
                      fontFamily: "'Hind Siliguri', sans-serif",
                      color: isDark ? "#FFFFFF" : "#1E293B",
                    }}
                  >
                    সাপোর্ট ইমেইল
                  </span>
                  <span
                    className="text-[11px] block mt-0.5"
                    style={{ color: isDark ? "#A0AEC0" : "#64748B" }}
                  >
                    support@visacheckapp.net
                  </span>
                </div>
              </div>
              <ChevronRight
                className="w-4.5 h-4.5 shrink-0"
                style={{ color: isDark ? "#A0AEC0" : "#94A3B8" }}
              />
            </a>
          </div>
        </div>

        {/* ─── Copyright Trustbar (Scroll-End Finish Line) ─── */}
        <div className="w-full pt-3 pb-3 flex justify-center">
          <FinalFooter className="w-full" />
        </div>
      </div>

      {/* ─── Modals Render ─── */}
      <OverstayCalculatorModal
        isOpen={activeModal === "calculator"}
        onClose={() => setActiveModal(null)}
      />

      <CurrencyConverterModal
        isOpen={activeModal === "currency"}
        onClose={() => setActiveModal(null)}
      />

      <PreDepartureChecklistModal
        isOpen={activeModal === "checklist"}
        onClose={() => setActiveModal(null)}
      />

      <VisaQRScannerModal
        isOpen={activeModal === "scanner"}
        onClose={() => setActiveModal(null)}
      />

      <VisaVaultModal
        isOpen={activeModal === "vault"}
        onClose={() => setActiveModal(null)}
      />

      <GovtServicesModal
        isOpen={activeModal === "govt"}
        onClose={() => setActiveModal(null)}
      />

      <EmbassyDirectoryModal
        isOpen={activeModal === "embassy"}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
