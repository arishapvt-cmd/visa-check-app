"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { playSweetTune } from "@/lib/sound";

interface FinalFooterProps {
  lang?: "bn" | "en";
  className?: string;
}

export default function FinalFooter({ lang = "bn", className = "" }: FinalFooterProps) {
  const { isDark } = useTheme();

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSweetTune();
    if (typeof window !== "undefined") {
      window.open("https://visacheckapp.net", "_blank");
    }
  };

  return (
    <footer className={`w-full px-2 pt-0 pb-1 flex justify-center ${className}`}>
      <div
        className="w-full max-w-xl flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full select-none transition-all duration-300"
        style={{
          background: isDark
            ? "linear-gradient(135deg, rgba(27, 35, 64, 0.92) 0%, rgba(11, 13, 28, 0.96) 100%)"
            : "linear-gradient(135deg, rgba(243, 216, 155, 0.40) 0%, rgba(255, 255, 255, 0.98) 100%)",
          border: isDark
            ? "1px solid rgba(217, 177, 92, 0.45)"
            : "1px solid rgba(217, 177, 92, 0.55)",
          boxShadow: isDark
            ? "0 4px 18px rgba(0, 0, 0, 0.50), inset 0 1px 0 rgba(255, 255, 255, 0.12)"
            : "0 4px 18px rgba(217, 177, 92, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.90)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {/* Trust Shield Icon */}
        <ShieldCheck
          className="w-3.5 h-3.5 shrink-0"
          style={{ color: "#D9B15C" }}
          strokeWidth={2.2}
        />

        {/* Text Line from User Specification */}
        <p
          className="text-[10.5px] sm:text-[11.5px] font-medium tracking-tight text-center leading-tight truncate"
          style={{
            fontFamily: "'Hind Siliguri', sans-serif",
            color: isDark ? "#D8E0F0" : "#2D3748",
          }}
        >
          <span>© {lang === "bn" ? "২০২৬" : "2026"} Probashi App </span>
          <button
            type="button"
            onClick={handleLinkClick}
            className="cursor-pointer font-semibold underline underline-offset-2 transition-colors hover:brightness-125"
            style={{ color: "#D9B15C" }}
          >
            (visacheckapp.net)
          </button>
          <span> — {lang === "bn" ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved."}</span>
        </p>
      </div>
    </footer>
  );
}
