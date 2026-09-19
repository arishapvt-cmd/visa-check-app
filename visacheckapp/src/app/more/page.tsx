"use client";

import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { useAndroidBridge } from "@/hooks/useAndroidBridge";
import {
  Shield, Star, Info, Share2, Heart, ChevronRight, Smartphone, Globe, Mail
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MorePage() {
  const { isDark } = useTheme();
  const { lang } = useLanguage();
  const { shareContent, isAndroid } = useAndroidBridge();
  const isBn = lang === "bn";

  const handleShareApp = () => {
    shareContent(
      isBn ? "ভিসা চেক করার অ্যাপ" : "VisaCheck App",
      isBn
        ? "বাংলাদেশি পাসপোর্টধারীদের জন্য বিশ্বের ২০টি দেশের ভিসা স্ট্যাটাস চেক করুন!\n\nডাউনলোড করুন: https://play.google.com/store/apps/details?id=net.visacheckapp.app"
        : "Check visa status for 20 countries for Bangladeshi passport holders!\n\nDownload: https://play.google.com/store/apps/details?id=net.visacheckapp.app"
    );
  };

  const cardStyle: React.CSSProperties = {
    background: isDark
      ? "linear-gradient(145deg,rgba(14,165,233,0.06) 0%,rgba(99,102,241,0.04) 100%)"
      : "rgba(255,255,255,0.95)",
    border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(14,165,233,0.12)",
    borderRadius: "20px",
    boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(14,165,233,0.06)",
  };

  type MenuItem = {
    icon: React.ReactNode;
    color: string;
    labelBn: string;
    labelEn: string;
    href?: string;
    external?: boolean;
    onClick?: () => void;
  };

  const menuGroups: { titleBn: string; titleEn: string; items: MenuItem[] }[] = [
    {
      titleBn: "অ্যাপ", titleEn: "App",
      items: [
        {
          icon: <Shield className="w-5 h-5" />,
          color: "#0ea5e9",
          labelBn: "গোপনীয়তা নীতিমালা",
          labelEn: "Privacy Policy",
          href: "/privacy",
        },
        {
          icon: <Info className="w-5 h-5" />,
          color: "#6366f1",
          labelBn: "অ্যাপের তথ্য",
          labelEn: "App Info",
          href: "/about",
        },
      ],
    },
    {
      titleBn: "শেয়ার করুন", titleEn: "Share",
      items: [
        {
          icon: <Share2 className="w-5 h-5" />,
          color: "#10b981",
          labelBn: "বন্ধুদের সাথে শেয়ার করুন",
          labelEn: "Share with friends",
          onClick: handleShareApp,
        },
        {
          icon: <Star className="w-5 h-5" />,
          color: "#f59e0b",
          labelBn: "Play Store-এ রেটিং দিন",
          labelEn: "Rate on Play Store",
          href: "https://play.google.com/store/apps/details?id=net.visacheckapp.app",
          external: true,
        },
      ],
    },
    {
      titleBn: "যোগাযোগ", titleEn: "Contact",
      items: [
        {
          icon: <Mail className="w-5 h-5" />,
          color: "#ec4899",
          labelBn: "সাপোর্ট: support@visacheckapp.net",
          labelEn: "Support: support@visacheckapp.net",
          href: "mailto:support@visacheckapp.net",
          external: true,
        },
        {
          icon: <Globe className="w-5 h-5" />,
          color: "#8b5cf6",
          labelBn: "ওয়েবসাইট",
          labelEn: "Website",
          href: "https://visacheckapp.net",
          external: true,
        },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-page)",
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 64px)",
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 80px)",
      }}
    >
      <div className="px-3 sm:px-4 pb-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-5"
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.2)" }}
          >
            <Smartphone className="w-6 h-6" style={{ color: "#0ea5e9" }} />
          </div>
          <div>
            <h1
              className="font-extrabold text-lg"
              style={{ fontFamily: "'Hind Siliguri', sans-serif", color: isDark ? "#e2e8f0" : "#0f172a" }}
            >
              {isBn ? "ভিসা চেক করার অ্যাপ" : "VisaCheck App"}
            </h1>
            <p className="text-xs" style={{ color: isDark ? "#475569" : "#94a3b8" }}>
              {isBn ? "সংস্করণ ১.০.০" : "Version 1.0.0"}
              {isAndroid && " (Android)"}
            </p>
          </div>
        </motion.div>

        {/* Favorites quick access */}
        <Link href="/" className="block mb-4">
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 p-3.5 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.04) 100%)",
              border: "1px solid rgba(239,68,68,0.2)",
            }}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(239,68,68,0.15)" }}>
              <Heart className="w-5 h-5" style={{ color: "#ef4444", fill: "#ef4444" }} />
            </div>
            <span
              className="font-bold text-sm"
              style={{ fontFamily: "'Hind Siliguri', sans-serif", color: isDark ? "#fca5a5" : "#dc2626" }}
            >
              {isBn ? "আমার পছন্দের দেশ দেখুন" : "View My Favorite Countries"}
            </span>
            <ChevronRight className="w-4 h-4 ml-auto" style={{ color: isDark ? "#64748b" : "#94a3b8" }} />
          </motion.div>
        </Link>

        {/* Menu groups */}
        {menuGroups.map((group, gi) => (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: gi * 0.1 }}
            className="mb-4"
          >
            <p
              className="text-[11px] font-bold uppercase tracking-wider mb-2 px-1"
              style={{ color: isDark ? "#475569" : "#94a3b8", fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              {isBn ? group.titleBn : group.titleEn}
            </p>
            <div style={cardStyle} className="overflow-hidden">
              {group.items.map((item, ii) => {
                const content = (
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 px-4 py-3.5"
                    style={{
                      borderBottom: ii < group.items.length - 1
                        ? isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)"
                        : "none",
                    }}
                    onClick={item.onClick}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: item.color + "18", color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="text-[13px] font-semibold flex-1"
                      style={{ fontFamily: "'Hind Siliguri', sans-serif", color: isDark ? "#cbd5e1" : "#1e293b" }}
                    >
                      {isBn ? item.labelBn : item.labelEn}
                    </span>
                    <ChevronRight className="w-4 h-4" style={{ color: isDark ? "#334155" : "#cbd5e1" }} />
                  </motion.div>
                );

                if (item.onClick) return <div key={ii}>{content}</div>;
                if (item.external) return <a key={ii} href={item.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>{content}</a>;
                return <Link key={ii} href={item.href!}>{content}</Link>;
              })}
            </div>
          </motion.div>
        ))}

        {/* App badge */}
        <div className="text-center mt-4 mb-2">
          <p className="text-[11px]" style={{ color: isDark ? "#1e293b" : "#e2e8f0", fontFamily: "'Hind Siliguri', sans-serif" }}>
            {isBn ? "বাংলাদেশি পাসপোর্টধারীদের জন্য তৈরি ❤️" : "Made for Bangladeshi Passport Holders ❤️"}
          </p>
        </div>
      </div>
    </div>
  );
}
