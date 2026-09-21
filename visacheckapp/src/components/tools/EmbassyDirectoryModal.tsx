"use client";

import React, { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, PhoneCall, Search, MapPin, Mail, Clock, ShieldAlert } from "lucide-react";
import { playSweetTune } from "@/lib/sound";

interface EmbassyDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EmbassyContact {
  id: string;
  countryBn: string;
  cityBn: string;
  flag: string;
  missionNameBn: string;
  hotline: string;
  phoneDisplay: string;
  email: string;
  addressBn: string;
  hoursBn: string;
}

const EMBASSIES_DATA: EmbassyContact[] = [
  {
    id: "ksa_riyadh",
    countryBn: "সৌদি আরব",
    cityBn: "রিয়াদ (দূতাবাস)",
    flag: "🇸🇦",
    missionNameBn: "বাংলাদেশ দূতাবাস, রিয়াদ",
    hotline: "+966114195300",
    phoneDisplay: "+966 11 419 5300 / 8001000042",
    email: "mission.riyadh@mofa.gov.bd",
    addressBn: "ডিপ্লোম্যাটিক কোয়ার্টার, রিয়াদ, সৌদি আরব",
    hoursBn: "রবি - বৃহস্পতি: সকাল ৮:০০ - বিকাল ৪:০০",
  },
  {
    id: "ksa_jeddah",
    countryBn: "সৌদি আরব",
    cityBn: "জেদ্দা (কনস্যুলেট)",
    flag: "🇸🇦",
    missionNameBn: "বাংলাদেশ কনস্যুলেট জেনারেল, জেদ্দা",
    hotline: "+966126878465",
    phoneDisplay: "+966 12 687 8465 / +966 530 689 947",
    email: "mission.jeddah@mofa.gov.bd",
    addressBn: "আল-নুজহা ডিস্ট্রিক্ট, জেদ্দা",
    hoursBn: "রবি - বৃহস্পতি: সকাল ৮:০০ - বিকাল ৪:০০",
  },
  {
    id: "uae_dubai",
    countryBn: "সংযুক্ত আরব আমিরাত",
    cityBn: "দুবাই (কনস্যুলেট)",
    flag: "🇦🇪",
    missionNameBn: "বাংলাদেশ কনস্যুলেট জেনারেল, দুবাই",
    hotline: "+97142388199",
    phoneDisplay: "+971 4 238 8199 / +971 56 688 8292",
    email: "cg.dubai@mofa.gov.bd",
    addressBn: "আল ওহেইদা, দেইরা, দুবাই",
    hoursBn: "সোম - শুক্র: সকাল ৭:৩০ - দুপুর ২:৩০",
  },
  {
    id: "uae_abudhabi",
    countryBn: "সংযুক্ত আরব আমিরাত",
    cityBn: "আবুধাবি (দূতাবাস)",
    flag: "🇦🇪",
    missionNameBn: "বাংলাদেশ দূতাবাস, আবুধাবি",
    hotline: "+97124465100",
    phoneDisplay: "+971 2 446 5100",
    email: "mission.abudhabi@mofa.gov.bd",
    addressBn: "সেক্টর ডব্লিউ ১৪-০২, আল মারুর, আবুধাবি",
    hoursBn: "সোম - শুক্র: সকাল ৮:০০ - দুপুর ৩:০০",
  },
  {
    id: "mys_kl",
    countryBn: "মালয়েশিয়া",
    cityBn: "কুয়ালালামপুর",
    flag: "🇲🇾",
    missionNameBn: "বাংলাদেশ হাইকমিশন, কুয়ালালামপুর",
    hotline: "+60321817740",
    phoneDisplay: "+60 3 2181 7740 / +60 18 222 4908",
    email: "mission.kualalumpur@mofa.gov.bd",
    addressBn: "জালান অ্যাম্পাং হিলির, কুয়ালালামপুর",
    hoursBn: "সোম - শুক্র: সকাল ৯:০০ - বিকাল ৫:০০",
  },
  {
    id: "qat_doha",
    countryBn: "কাতার",
    cityBn: "দোহা",
    flag: "🇶🇦",
    missionNameBn: "বাংলাদেশ দূতাবাস, দোহা",
    hotline: "+97444671988",
    phoneDisplay: "+974 4467 1988 / +974 3366 2000",
    email: "mission.doha@mofa.gov.bd",
    addressBn: "বিল্ডিং নং ১৫, স্ট্রিট নং ৮২০, জোন ৬৬, দোহা",
    hoursBn: "রবি - বৃহস্পতি: সকাল ৭:৩০ - দুপুর ২:৩০",
  },
  {
    id: "kwt_city",
    countryBn: "কুয়েত",
    cityBn: "কুয়েত সিটি",
    flag: "🇰🇼",
    missionNameBn: "বাংলাদেশ দূতাবাস, কুয়েত",
    hotline: "+96525233243",
    phoneDisplay: "+965 2523 3243 / +965 6500 0000",
    email: "mission.kuwait@mofa.gov.bd",
    addressBn: "সাউথ সুররা, আল-জাভরা, ব্লক ১, কুয়েত",
    hoursBn: "রবি - বৃহস্পতি: সকাল ৮:০০ - দুপুর ২:০০",
  },
  {
    id: "omn_muscat",
    countryBn: "ওমান",
    cityBn: "মাস্কাট",
    flag: "🇴🇲",
    missionNameBn: "বাংলাদেশ দূতাবাস, মাস্কাট",
    hotline: "+96824603553",
    phoneDisplay: "+968 2460 3553 / +968 9622 4444",
    email: "mission.muscat@mofa.gov.bd",
    addressBn: "শাতী আল কুর্ম, ওয়ে নং ৩০১৫, মাস্কাট",
    hoursBn: "রবি - বৃহস্পতি: সকাল ৮:৩০ - দুপুর ২:৩০",
  },
  {
    id: "ita_rome",
    countryBn: "ইতালি",
    cityBn: "রোম",
    flag: "🇮🇹",
    missionNameBn: "বাংলাদেশ দূতাবাস, রোম",
    hotline: "+39068078577",
    phoneDisplay: "+39 06 8078 577",
    email: "mission.rome@mofa.gov.bd",
    addressBn: "ভিয়া আন্তোনিও নিববি ১৯, রোম",
    hoursBn: "সোম - শুক্র: সকাল ৯:০০ - বিকাল ৫:০০",
  },
  {
    id: "gbr_london",
    countryBn: "যুক্তরাজ্য",
    cityBn: "লন্ডন",
    flag: "🇬🇧",
    missionNameBn: "বাংলাদেশ হাইকমিশন, লন্ডন",
    hotline: "+442075840081",
    phoneDisplay: "+44 20 7584 0081",
    email: "mission.london@mofa.gov.bd",
    addressBn: "২৮ কুইন্স গেট, লন্ডন এসডব্লিউ৭ ৫জেএ",
    hoursBn: "সোম - শুক্র: সকাল ৯:৩০ - বিকাল ৫:৩০",
  },
];

export default function EmbassyDirectoryModal({ isOpen, onClose }: EmbassyDirectoryModalProps) {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return EMBASSIES_DATA;
    return EMBASSIES_DATA.filter(
      (e) =>
        e.countryBn.toLowerCase().includes(q) ||
        e.cityBn.toLowerCase().includes(q) ||
        e.missionNameBn.toLowerCase().includes(q)
    );
  }, [search]);

  if (!isOpen || !mounted || typeof document === "undefined") return null;

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
              <PhoneCall className="w-5 h-5 text-[#1B2340]" />
            </div>
            <div>
              <h3
                className="font-bold text-base leading-tight text-[#F1EAD9]"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                জরুরি হেল্পলাইন ও দূতাবাস ডিরেক্টরি
              </h3>
              <p className="text-[11px] text-[#A0AEC0]">
                প্রবাসী কল্যাণ কল সেন্টার ও বাংলাদেশ দূতাবাস জরুরি হটলাইন
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
        <div className="p-4 overflow-y-auto space-y-4 flex-1 scrollbar-none">
          {/* Top 24/7 Probashi Helpline Card */}
          <div
            className="p-4 rounded-2xl border space-y-2.5"
            style={{
              background: "linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(18, 24, 46, 0.85) 100%)",
              borderColor: "rgba(239, 68, 68, 0.40)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#ef4444]" />
                <span className="font-bold text-xs sm:text-sm text-white" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                  প্রবাসী কল্যাণ ২৪/৭ জরুরি কল সেন্টার
                </span>
              </div>
              <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-[#ef4444] text-white">
                টোল ফ্রি
              </span>
            </div>

            <p className="text-[11px] text-[#CBD5E1]">
              যেকোনো দেশে বিপদ বা জরুরি সহায়তায় সরাসরি কল করুন:
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:16135"
                onClick={playSweetTune}
                className="py-2 px-3 rounded-xl bg-[#ef4444] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>১৬১৩৫ (দেশ থেকে)</span>
              </a>

              <a
                href="tel:+8809612666666"
                onClick={playSweetTune}
                className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-[#F3D89B] border border-[#D9B15C]/30 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>বিদেশ থেকে কল</span>
              </a>
            </div>
          </div>

          {/* Airport Helpline */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-white block" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                বিমানবন্দর প্রবাসী কল্যাণ ডেস্ক ও ইমিগ্রেশন
              </span>
              <span className="text-[10.5px] text-[#A0AEC0]">শাহজালাল আন্তর্জাতিক বিমানবন্দর</span>
            </div>
            <a
              href="tel:13600"
              onClick={playSweetTune}
              className="py-1.5 px-3 rounded-lg bg-[#D9B15C] text-[#1B2340] text-xs font-bold flex items-center gap-1 shadow active:scale-95"
            >
              <PhoneCall className="w-3 h-3" />
              <span>১৩৬০০</span>
            </a>
          </div>

          {/* Search Input for Embassies */}
          <div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
              <Search className="w-4 h-4 text-[#D9B15C] shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="দেশ বা শহরের নাম দিয়ে দূতাবাস খুঁজুন..."
                className="w-full bg-transparent text-xs text-white placeholder-[#718096] outline-none"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              />
            </div>
          </div>

          {/* Embassies Directory List */}
          <div className="space-y-2.5">
            {filtered.map((embassy) => (
              <div
                key={embassy.id}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 shadow-md space-y-2"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{embassy.flag}</span>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-white" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                        {embassy.missionNameBn}
                      </h4>
                      <span className="text-[11px] text-[#A0AEC0]">{embassy.cityBn}</span>
                    </div>
                  </div>

                  <a
                    href={`tel:${embassy.hotline}`}
                    onClick={playSweetTune}
                    className="py-1.5 px-3 rounded-xl bg-[#10b981] text-[#0f172a] text-xs font-bold flex items-center gap-1.5 shadow-md active:scale-95 shrink-0"
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>কল করুন</span>
                  </a>
                </div>

                <div className="space-y-1 text-[11px] text-[#CBD5E1] pt-1 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <PhoneCall className="w-3 h-3 text-[#D9B15C] shrink-0" />
                    <span className="font-mono text-white">{embassy.phoneDisplay}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#D9B15C] shrink-0" />
                    <span className="font-mono">{embassy.email}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3 h-3 text-[#D9B15C] shrink-0 mt-0.5" />
                    <span>{embassy.addressBn}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#A0AEC0]">
                    <Clock className="w-3 h-3 text-[#D9B15C] shrink-0" />
                    <span>{embassy.hoursBn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
