"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Building2, ExternalLink, ShieldCheck, FileCheck, Stethoscope, Award, Briefcase, Landmark } from "lucide-react";
import { playSweetTune } from "@/lib/sound";

interface GovtServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface GovtPortalItem {
  id: string;
  titleBn: string;
  deptBn: string;
  url: string;
  badgeBn: string;
  descBn: string;
  icon: React.ComponentType<{ className?: string }>;
}

const GOVT_PORTALS: GovtPortalItem[] = [
  {
    id: "bmet",
    titleBn: "BMET ম্যানপাওয়ার স্মার্ট কার্ড ও ক্লিয়ারেন্স",
    deptBn: "জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো",
    url: "http://www.bmet.gov.bd",
    badgeBn: "বাধ্যতামূলক",
    descBn: "বৈদেশিক কর্মসংস্থানের জন্য স্মার্ট কার্ড যাচাই, ডাটাবেজ রেজিস্ট্রেশন ও ইমিগ্রেশন ক্লিয়ারেন্স।",
    icon: ShieldCheck,
  },
  {
    id: "wafid",
    titleBn: "গামকা (Wafid) মেডিকেল রিপোর্ট ও স্লিপ",
    deptBn: "জিসিসি হেলথ কাউন্সিল (GAMCA)",
    url: "https://wafid.com",
    badgeBn: "মেডিকেল চেক",
    descBn: "সৌদি, কাতার, কুয়েত, ওমান, ইউএই ও বাহরাইনের মেডিকেল সেন্টার বুকিং ও ফিট সার্টিফিকেট ট্র্যাকিং।",
    icon: Stethoscope,
  },
  {
    id: "pcc",
    titleBn: "অনলাইন পুলিশ ক্লিয়ারেন্স সার্টিফিকেট (PCC)",
    deptBn: "বাংলাদেশ পুলিশ ও পররাষ্ট্র মন্ত্রণালয়",
    url: "https://pcc.police.gov.bd",
    badgeBn: "নিরাপত্তা ক্লিয়ারেন্স",
    descBn: "পাসপোর্ট ও চালান নম্বর দিয়ে ঘরে বসেই পুলিশ ক্লিয়ারেন্সের তদন্ত অগ্রগতি ও সার্টিফিকেট যাচাই।",
    icon: FileCheck,
  },
  {
    id: "boesl",
    titleBn: "বোয়েসেল (BOESL) সরকারি নিয়োগ ও নোটিশ",
    deptBn: "বাংলাদেশ ওভারসিজ এমপ্লয়মেন্ট সার্ভিসেস লিঃ",
    url: "http://www.boesl.gov.bd",
    badgeBn: "সরকারি নিয়োগ",
    descBn: "দক্ষিণ কোরিয়া ইপিএস (EPS), জর্ডান গার্মেন্টস, কুয়েত নার্সিং ও রোমানিয়া সরকারি নিয়োগ সার্কুলার।",
    icon: Briefcase,
  },
  {
    id: "baira",
    titleBn: "বায়রা (BAIRA) অনুমোদিত রিক্রুটিং এজেন্সি যাচাই",
    deptBn: "প্রবাসী কল্যাণ মন্ত্রণালয় ও বায়রা",
    url: "https://bairabd.org",
    badgeBn: "দালাল প্রতিরোধ",
    descBn: "আরএল (RL) লাইসেন্স নম্বর সার্চ করে বৈধ এজেন্সির তালিকা ও অফিসিয়াল তথ্য যাচাই করুন।",
    icon: Award,
  },
  {
    id: "pkb",
    titleBn: "প্রবাসী কল্যাণ ব্যাংক (PKB) লোন সেবা",
    deptBn: "প্রবাসী কল্যাণ ব্যাংক",
    url: "https://pkb.gov.bd",
    badgeBn: "আর্থিক সহায়তা",
    descBn: "বিদেশ যাওয়ার জন্য কম সুদে অভিবাসী ঋণ ও প্রবাস ফেরত কর্মীদের পুনর্বাসন লোন তথ্য।",
    icon: Landmark,
  },
];

export default function GovtServicesModal({ isOpen, onClose }: GovtServicesModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted || typeof document === "undefined") return null;

  const handlePortalClick = (url: string) => {
    playSweetTune();
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex flex-col justify-end">
      {/* Backdrop */}
      <div
        onClick={() => {
          playSweetTune();
          onClose();
        }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        style={{ animation: "fadeIn 0.22s ease-out forwards" }}
      />

      {/* Drawer Container */}
      <div
        className="relative z-10 w-full rounded-t-[32px] shadow-2xl overflow-hidden flex flex-col text-slate-100"
        style={{
          height: "84%",
          maxHeight: "none",
          animation: "drawerSlideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          background: "linear-gradient(180deg, #10162c 0%, #080c18 100%)",
          borderTop: "2.5px solid #D9B15C",
          boxShadow: "0 -14px 45px rgba(0, 0, 0, 0.9), 0 0 28px rgba(217, 177, 92, 0.25)",
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 20px)",
        }}
      >
        {/* Notch */}
        <div className="w-12 h-1.5 rounded-full bg-slate-400/40 mx-auto my-2.5 shrink-0" />

        {/* Header */}
        <div className="px-4 pb-3 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
              style={{
                background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
              }}
            >
              <Building2 className="w-5 h-5 text-[#1B2340]" />
            </div>
            <div>
              <h3
                className="font-bold text-base leading-tight text-[#F1EAD9]"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                সরকারি ক্লিয়ারেন্স ও প্রবাসী সেবা
              </h3>
              <p className="text-[11px] text-[#A0AEC0]">
                BMET, গামকা, পুলিশ ক্লিয়ারেন্স ও বোয়েসেল অফিসিয়াল পোর্টাল
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              playSweetTune();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#A0AEC0] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1 scrollbar-none">
          {GOVT_PORTALS.map((portal) => {
            const Icon = portal.icon;
            return (
              <div
                key={portal.id}
                onClick={() => handlePortalClick(portal.url)}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D9B15C]/40 transition-all cursor-pointer select-none space-y-2 active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(58, 74, 142, 0.20) 0%, rgba(18, 24, 46, 0.70) 100%)",
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-9 h-9 rounded-xl p-[1px] flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
                      }}
                    >
                      <div className="w-full h-full rounded-xl bg-[#0d1326] flex items-center justify-center text-[#F3D89B]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h4
                        className="font-bold text-xs sm:text-sm text-white leading-tight"
                        style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                      >
                        {portal.titleBn}
                      </h4>
                      <span className="text-[10.5px] text-[#A0AEC0]">{portal.deptBn}</span>
                    </div>
                  </div>

                  <span
                    className="text-[9.5px] font-bold px-2 py-0.5 rounded-full shrink-0"
                    style={{
                      background: "rgba(217, 177, 92, 0.15)",
                      color: "#F3D89B",
                      border: "1px solid rgba(217, 177, 92, 0.35)",
                    }}
                  >
                    {portal.badgeBn}
                  </span>
                </div>

                <p
                  className="text-[11px] text-[#CBD5E1] leading-relaxed"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  {portal.descBn}
                </p>

                <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px] text-[#D9B15C] font-semibold">
                  <span>অফিসিয়াল পোর্টালে যান</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-white/10 bg-[#090d1a] shrink-0">
          <button
            type="button"
            onClick={() => {
              playSweetTune();
              onClose();
            }}
            className="w-full py-2.5 rounded-xl text-xs font-bold text-[#1B2340] shadow-md active:scale-[0.98] transition-transform"
            style={{
              background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
              fontFamily: "'Hind Siliguri', sans-serif",
            }}
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
