"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { playSweetTune } from "@/lib/sound";

interface ToolModalFooterProps {
  onClose: () => void;
  closeBtnText?: string;
  btnGradient?: string;
  btnTextColor?: string;
}

export default function ToolModalFooter({
  onClose,
  closeBtnText = "সম্পন্ন করুন",
  btnGradient = "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
  btnTextColor = "#1B2340",
}: ToolModalFooterProps) {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSweetTune();
    if (typeof window !== "undefined") {
      window.open("https://visacheckapp.net", "_blank");
    }
  };

  return (
    <footer
      className="sticky bottom-0 z-30 w-full px-3 pt-2.5 bg-[#090D1A]/95 backdrop-blur-xl border-t border-white/10 shrink-0 flex flex-col items-center gap-2 select-none"
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 10px)",
      }}
    >
      {/* Primary Action Button */}
      <button
        type="button"
        onClick={() => {
          playSweetTune();
          onClose();
        }}
        className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2 select-none"
        style={{
          background: btnGradient,
          color: btnTextColor,
          fontFamily: "'Hind Siliguri', sans-serif",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
        }}
      >
        <span>{closeBtnText}</span>
      </button>

      {/* Copyright Trust Bar (Official Sticky Finish Line) */}
      <div
        className="w-full max-w-xl flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full select-none"
        style={{
          background: "linear-gradient(135deg, rgba(27, 35, 64, 0.95) 0%, rgba(11, 13, 28, 0.98) 100%)",
          border: "1px solid rgba(217, 177, 92, 0.45)",
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
        }}
      >
        <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#D9B15C]" strokeWidth={2.2} />
        <p
          className="text-[10.5px] sm:text-[11px] font-medium tracking-tight text-center leading-tight truncate text-[#D8E0F0]"
          style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
        >
          <span>© ২০২৬ Probashi App </span>
          <button
            type="button"
            onClick={handleLinkClick}
            className="cursor-pointer font-semibold underline underline-offset-2 transition-colors hover:brightness-125 text-[#D9B15C]"
          >
            (visacheckapp.net)
          </button>
          <span> — সর্বস্বত্ব সংরক্ষিত।</span>
        </p>
      </div>
    </footer>
  );
}
