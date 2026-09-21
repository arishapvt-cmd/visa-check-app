"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useAndroidBridge } from "@/hooks/useAndroidBridge";
import { useState, useEffect } from "react";

export default function GlassyBackButton() {
  const pathname = usePathname();
  const router = useRouter();
  const { isDark } = useTheme();
  const { hapticFeedback } = useAndroidBridge();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const isRoot = !pathname || pathname === "/" || pathname === "" || pathname === "/index.html";
    // Homepage-এ কখনোই back button দেখাবে না, বাকি সব পেজে দেখাবে
    if (isRoot) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }
  }, [pathname]);

  const handleBack = () => {
    hapticFeedback();
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <AnimatePresence>
      {canGoBack && (
        <motion.div
          key="back-btn"
          initial={{ opacity: 0, scale: 0.6, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.6, x: 30 }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          style={{
            position: "fixed",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            userSelect: "none",
            pointerEvents: "auto",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            onClick={handleBack}
            aria-label="Back"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "none",
              outline: "none",
              position: "relative",
              overflow: "hidden",
              background: isDark
                ? "rgba(15, 23, 42, 0.82)"
                : "rgba(255, 255, 255, 0.90)",
              boxShadow: isDark
                ? "0 0 0 2px rgba(56,189,248,0.55), 0 12px 36px rgba(0,0,0,0.75), inset 0 1px 2px rgba(255,255,255,0.20), 0 0 22px rgba(56,189,248,0.30)"
                : "0 0 0 2px rgba(14,165,233,0.65), 0 12px 30px rgba(14,165,233,0.28), inset 0 1px 2px rgba(255,255,255,1), 0 0 18px rgba(14,165,233,0.20)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: isDark
                  ? "radial-gradient(circle at 35% 35%, rgba(56,189,248,0.18) 0%, transparent 65%)"
                  : "radial-gradient(circle at 35% 35%, rgba(14,165,233,0.22) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />
            <ArrowLeft
              style={{
                width: "20px",
                height: "20px",
                color: isDark ? "#38bdf8" : "#0284c7",
                strokeWidth: 2.8,
                position: "relative",
                zIndex: 1,
              }}
            />
          </motion.button>

          <span
            style={{
              fontSize: "9px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "2px 6px",
              borderRadius: "999px",
              background: isDark
                ? "rgba(15, 23, 42, 0.65)"
                : "rgba(255, 255, 255, 0.75)",
              color: isDark
                ? "rgba(148, 163, 184, 0.9)"
                : "rgba(71, 85, 105, 0.9)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            ফিরুন
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
