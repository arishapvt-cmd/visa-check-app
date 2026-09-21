"use client";

import React from "react";

interface GoldenGlassTitleProps {
  title: string;
  className?: string;
}

export default function GoldenGlassTitle({ title, className = "" }: GoldenGlassTitleProps) {
  return (
    <div className={`flex items-center justify-center w-full my-3 px-2 ${className}`}>
      <div
        className="inline-flex items-center justify-center gap-2 px-5 py-1.5 sm:px-6 sm:py-2 rounded-full relative overflow-hidden select-none max-w-full shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, rgba(243, 216, 155, 0.22) 0%, rgba(217, 177, 92, 0.10) 50%, rgba(197, 158, 65, 0.26) 100%)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1.5px solid rgba(217, 177, 92, 0.55)",
          boxShadow:
            "0 6px 18px rgba(0, 0, 0, 0.35), inset 0 1px 1.5px rgba(255, 255, 255, 0.45), 0 0 16px rgba(217, 177, 92, 0.25)",
        }}
      >
        {/* Subtle 3D glossy top sheen reflection */}
        <div
          className="absolute top-0 left-0 right-0 h-[45%] pointer-events-none rounded-t-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.03) 100%)",
          }}
        />

        {/* Left Golden Accent */}
        <span
          className="text-[#D9B15C] text-[10px] sm:text-[11px] leading-none shrink-0"
          style={{ textShadow: "0 0 6px rgba(217, 177, 92, 0.6)" }}
        >
          ✦
        </span>

        {/* Title Text */}
        <h2
          className="font-bold text-[13.5px] sm:text-[15px] tracking-wide text-center leading-snug relative z-10"
          style={{
            fontFamily: "'Hind Siliguri', sans-serif",
            color: "#FFF6DE",
            textShadow:
              "0 1px 2px rgba(0, 0, 0, 0.85), 0 0 10px rgba(217, 177, 92, 0.35)",
          }}
        >
          {title}
        </h2>

        {/* Right Golden Accent */}
        <span
          className="text-[#D9B15C] text-[10px] sm:text-[11px] leading-none shrink-0"
          style={{ textShadow: "0 0 6px rgba(217, 177, 92, 0.6)" }}
        >
          ✦
        </span>
      </div>
    </div>
  );
}
