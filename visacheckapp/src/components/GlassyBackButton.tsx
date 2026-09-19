"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useAndroidBridge } from "@/hooks/useAndroidBridge";

export default function GlassyBackButton() {
  const pathname = usePathname();
  const router = useRouter();
  const { isDark } = useTheme();
  const { hapticFeedback } = useAndroidBridge();

  // Hide on homepage
  if (!pathname || pathname === "/" || pathname === "") {
    return null;
  }

  const handleBack = () => {
    hapticFeedback();
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/countries");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.7, x: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed right-2.5 top-1/2 -translate-y-1/2 z-[999] flex flex-col items-center gap-1 select-none pointer-events-auto"
    >
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.88 }}
        onClick={handleBack}
        aria-label="Back"
        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative group"
        style={{
          background: isDark
            ? "rgba(15, 23, 42, 0.78)"
            : "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(20px) saturate(200%)",
          WebkitBackdropFilter: "blur(20px) saturate(200%)",
          border: isDark
            ? "2px solid rgba(56, 189, 248, 0.50)"
            : "2px solid rgba(14, 165, 233, 0.60)",
          boxShadow: isDark
            ? "0 12px 36px rgba(0, 0, 0, 0.75), inset 0 1px 2px rgba(255, 255, 255, 0.25), 0 0 22px rgba(56, 189, 248, 0.35)"
            : "0 12px 30px rgba(14, 165, 233, 0.30), inset 0 1px 2px rgba(255, 255, 255, 1), 0 0 18px rgba(14, 165, 233, 0.25)",
        }}
      >
        {/* Ambient subtle glow */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 70%)",
          }}
        />

        <ArrowLeft
          className="w-5 h-5 transition-colors duration-200"
          style={{
            color: isDark ? "#38bdf8" : "#0284c7",
            strokeWidth: 2.6,
          }}
        />
      </motion.button>

      {/* Tiny glassy label */}
      <span
        className="text-[9px] font-black tracking-wider uppercase px-1.5 py-0.5 rounded-full"
        style={{
          background: isDark ? "rgba(15, 23, 42, 0.6)" : "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(8px)",
          color: isDark ? "rgba(148, 163, 184, 0.9)" : "rgba(71, 85, 105, 0.9)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        Back
      </span>
    </motion.div>
  );
}
