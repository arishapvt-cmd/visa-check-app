"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Users, ShieldCheck, FileText, HelpCircle } from "lucide-react";
import { playSweetTune } from "@/lib/sound";

interface ResourceCardItem {
  id: string;
  titleBn: string;
  titleEn: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

const RESOURCE_ITEMS: ResourceCardItem[] = [
  {
    id: "about",
    titleBn: "আমাদের সম্পর্কে",
    titleEn: "About Us",
    url: "https://visacheckapp.net/about-us",
    icon: Users,
  },
  {
    id: "privacy",
    titleBn: "প্রাইভেসি পলিসি",
    titleEn: "Privacy Policy",
    url: "https://visacheckapp.net/privacy-policy",
    icon: ShieldCheck,
  },
  {
    id: "disclaimer",
    titleBn: "ডিসক্লেইমার",
    titleEn: "Disclaimer",
    url: "https://visacheckapp.net/disclaimer",
    icon: FileText,
  },
  {
    id: "faq",
    titleBn: "জিজ্ঞাসা",
    titleEn: "FAQ",
    url: "/faq",
    icon: HelpCircle,
  },
];

interface InfoResourceCardsProps {
  lang?: "bn" | "en";
}

export default function InfoResourceCards({ lang = "bn" }: InfoResourceCardsProps) {
  const router = useRouter();

  const handleCardClick = (item: ResourceCardItem) => {
    playSweetTune();
    if (item.id === "faq" || item.url.startsWith("/")) {
      router.push(item.url);
      return;
    }
    try {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } catch {
      window.location.href = item.url;
    }
  };

  return (
    <div className="px-3 mt-2 mb-6">
      {/* 4 Compact "Ceeptaa" Cards in 1 Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
        {RESOURCE_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              whileTap={{ scale: 0.94 }}
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCardClick(item);
                }
              }}
              className="group relative flex flex-col items-center justify-between p-2 rounded-[14px] cursor-pointer select-none text-center overflow-hidden transition-all duration-200 outline-none"
              style={{
                background:
                  "linear-gradient(160deg, rgba(58, 74, 142, 0.40) 0%, rgba(27, 35, 64, 0.65) 100%)",
                border: "1px solid rgba(217, 177, 92, 0.35)",
                borderRadius: "14px",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
                minHeight: "82px",
              }}
            >
              {/* Glossy top highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-[38%] pointer-events-none rounded-t-[14px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.0) 100%)",
                }}
              />

              {/* Icon with 2px circular gold gradient ring matching app logo */}
              <div
                className="w-9 h-9 rounded-full p-[1.5px] flex items-center justify-center relative shadow-sm shrink-0"
                style={{
                  background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
                }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                  style={{
                    background: "#0d1326",
                  }}
                >
                  <Icon className="w-4 h-4 text-[#F3D89B]" />
                </div>
              </div>

              {/* Title label in Hind Siliguri */}
              <span
                className="text-[10px] sm:text-[11px] font-bold text-center leading-[1.2] mt-1.5 line-clamp-2 px-0.5"
                style={{
                  fontFamily: "'Hind Siliguri', sans-serif",
                  color: "#F1EAD9",
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
                }}
              >
                {lang === "bn" ? item.titleBn : item.titleEn}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
