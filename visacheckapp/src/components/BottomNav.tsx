"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Globe, Search, BookOpen, MoreHorizontal } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

const NAV_ITEMS = [
  { id: "home",      href: "/",          icon: Home,           bn: "হোম",  en: "Home" },
  { id: "countries", href: "/countries", icon: Globe,          bn: "দেশ",  en: "Countries" },
  { id: "check",     href: "/countries", icon: Search,         bn: "চেক",  en: "Check", isCenter: true },
  { id: "guide",     href: "/guide",     icon: BookOpen,       bn: "গাইড", en: "Guide" },
  { id: "more",      href: "/more",      icon: MoreHorizontal, bn: "আরো",  en: "More" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Reset footer visibility on route change
  useEffect(() => {
    setIsVisible(true);
    lastScrollY.current = window.scrollY;
  }, [pathname]);

  // Track scroll direction: scroll down -> hide footer; scroll up -> reveal footer
  useEffect(() => {
    if (pathname?.startsWith("/more")) {
      setIsVisible(true);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Always show if near the top
          if (currentScrollY <= 20) {
            setIsVisible(true);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }

          const delta = currentScrollY - lastScrollY.current;

          // 6px threshold prevents jitter from accidental touches
          if (Math.abs(delta) > 6) {
            if (delta > 0) {
              // User scrolling down -> hide footer
              setIsVisible(false);
            } else {
              // User scrolling up -> show footer
              setIsVisible(true);
            }
            lastScrollY.current = currentScrollY;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string, id: string) => {
    if (id === "home") return pathname === "/";
    if (id === "countries" || id === "check") return pathname.startsWith("/countries");
    return pathname.startsWith(href);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out will-change-transform ${
          isVisible ? "translate-y-0" : "translate-y-[130%]"
        }`}
    >
      {/* Glow line on top */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(217,177,92,0.35)] to-transparent" />

        <div
          style={{
            background: isDark ? "#0B0D1C" : "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            paddingBottom: "env(safe-area-inset-bottom, 12px)",
            borderTop: isDark ? "1px solid rgba(217, 177, 92, 0.18)" : "1px solid rgba(217, 177, 92, 0.35)",
            boxShadow: isDark
              ? "0 -8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)"
              : "0 -8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
            transition: "background 0.35s ease, border-color 0.35s ease",
          }}
        >
          <div className="flex items-center justify-around px-2 pt-2 pb-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href, item.id);
              const label = t(item.bn, item.en);

              if (item.isCenter) {
                return (
                  <Link key={item.id} href={item.href} className="flex flex-col items-center -mt-7">
                    <motion.div whileTap={{ scale: 0.9 }} className="relative">
                      <div className="absolute inset-0 rounded-full bg-[rgba(217,177,92,0.35)] blur-md scale-110" />
                      <div
                        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                        style={{
                          background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
                          border: "2px solid rgba(255, 255, 255, 0.25)",
                          boxShadow: "0 8px 20px rgba(217, 177, 92, 0.5), 0 2px 6px rgba(0,0,0,0.3)",
                        }}
                      >
                        <Icon className="w-7 h-7 text-[#1B2340]" strokeWidth={2.5} />
                      </div>
                    </motion.div>
                    <span className="text-[10px] text-[#D9B15C] font-bold mt-1">{label}</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex flex-col items-center gap-1 min-w-[56px] py-1 relative"
                >
                  {active && (
                    <motion.div
                      layoutId="activeNavDot"
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D9B15C]"
                    />
                  )}
                  <motion.div
                    whileTap={{ scale: 0.85 }}
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                      active ? "bg-[rgba(217,177,92,0.15)] border border-[rgba(217,177,92,0.35)]" : "bg-transparent"
                    }`}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-200"
                      style={{
                        color: active ? "#D9B15C" : "#6B7290",
                      }}
                      strokeWidth={active ? 2.5 : 1.8}
                    />
                  </motion.div>
                  <span
                    className="text-[10px] font-semibold transition-colors duration-200"
                    style={{
                      color: active ? "#D9B15C" : "#6B7290",
                    }}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
  );
}
