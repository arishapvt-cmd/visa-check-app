"use client";

import React, { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Calculator, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { playSweetTune } from "@/lib/sound";
import ToolGuideCards, { ToolGuideItem } from "./ToolGuideCards";

interface OverstayCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CountryFineRule {
  id: string;
  nameBn: string;
  nameEn: string;
  flag: string;
  currency: string;
  currencyBn: string;
  rateToBdt: number;
  dailyFine: number;
  exitPassFee: number;
  rulesBn: string[];
}

const COUNTRY_RULES: CountryFineRule[] = [
  {
    id: "uae",
    nameBn: "দুবাই ও ইউএই (UAE)",
    nameEn: "UAE / Dubai",
    flag: "🇦🇪",
    currency: "AED",
    currencyBn: "দিরহাম",
    rateToBdt: 33.2,
    dailyFine: 50,
    exitPassFee: 300,
    rulesBn: [
      "ভিজিট বা ট্যুরিস্ট ভিসার মেয়াদ শেষ হওয়ার পর প্রতিদিন ৫০ এইডি (AED) জরিমানা ধার্য হয়।",
      "এয়ারপোর্টে বা ইমিগ্রেশনে জরিমানা পরিশোধের সময় প্রায় ৩০০ দিরহাম আউটপাস বা ক্লিয়ারেন্স ফি যুক্ত হয়।",
      "জরিমানা বেশি হয়ে গেলে ইউএই সরকারের সাধারণ ক্ষমা (Amnesty) বা আউটপাস সেবা গ্রহণ করতে পারেন।"
    ]
  },
  {
    id: "saudi",
    nameBn: "সৌদি আরব (KSA)",
    nameEn: "Saudi Arabia",
    flag: "🇸🇦",
    currency: "SAR",
    currencyBn: "সৌদি রিয়াল",
    rateToBdt: 32.5,
    dailyFine: 3.5, // ~100 SAR/month
    exitPassFee: 500,
    rulesBn: [
      "ভিজিট ভিসা ওভারস্টে হলে প্রতি মাস বা তার অংশের জন্য ১০০ রিয়াল জরিমানা এবং এয়ারপোর্ট ক্লিয়ারেন্স প্রয়োজন।",
      "ইকামা বা রেসিডেন্স পারমিট নবায়ন না করলে প্রথমবার ৫০০ রিয়াল ও দ্বিতীয়বার ১,০০০ রিয়াল জরিমানা হয়।",
      "হুরুব (পলাতক) তালিকায় নাম উঠলে কিওয়া পোর্টালে যোগাযোগ করে আইনি সমাধান নিতে হবে।"
    ]
  },
  {
    id: "qatar",
    nameBn: "কাতার",
    nameEn: "Qatar",
    flag: "🇶🇦",
    currency: "QAR",
    currencyBn: "কাতারি রিয়াল",
    rateToBdt: 33.4,
    dailyFine: 20,
    exitPassFee: 200,
    rulesBn: [
      "ভিসার মেয়াদ পার হওয়ার পর থেকে প্রতিদিন ২০ কাতারি রিয়াল (QAR) হারে জরিমানা ধার্য করা হয়।",
      "কাতার ত্যাগ করার পূর্বে MOI বা হামাদ আন্তর্জাতিক বিমানবন্দরে সরাসরি জরিমানা পরিশোধ করতে হয়।"
    ]
  },
  {
    id: "kuwait",
    nameBn: "কুয়েত",
    nameEn: "Kuwait",
    flag: "🇰🇼",
    currency: "KWD",
    currencyBn: "কুয়েতি দিনার",
    rateToBdt: 395.0,
    dailyFine: 2,
    exitPassFee: 10,
    rulesBn: [
      "কুয়েতে ভিসার মেয়াদ শেষ হলে প্রতিদিন ২ কুয়েতি দিনার (KWD) জরিমানা গণনা করা হয়।",
      "সর্বোচ্চ ৬০০ দিনার পর্যন্ত জরিমানা উঠতে পারে। নির্ধারিত সময়ে দেশত্যাগ না করলে ব্ল্যাকলিস্ট করা হতে পারে।"
    ]
  },
  {
    id: "malaysia",
    nameBn: "মালয়েশিয়া",
    nameEn: "Malaysia",
    flag: "🇲🇾",
    currency: "MYR",
    currencyBn: "রিংগিত",
    rateToBdt: 27.8,
    dailyFine: 30,
    exitPassFee: 100,
    rulesBn: [
      "মালয়েশিয়ায় ওভারস্টে করলে প্রতিদিন ৩০ রিংগিত জরিমানা এবং ইমিগ্রেশন থেকে স্পেশাল পাস (RM 100) নিতে হয়।",
      "অধিক সময় ওভারস্টে করলে রি-এন্ট্রি ব্ল্যাকলিস্ট বা ডিটেনশন জটিলতা এড়াতে দূতাবাস থেকে ট্রাভেল পাস (TP) সংগ্রহ করুন।"
    ]
  },
  {
    id: "oman",
    nameBn: "ওমান",
    nameEn: "Oman",
    flag: "🇴🇲",
    currency: "OMR",
    currencyBn: "ওমানি রিয়াল",
    rateToBdt: 316.0,
    dailyFine: 10,
    exitPassFee: 20,
    rulesBn: [
      "ভিসার মেয়াদোত্তীর্ণের পর ওমানে প্রতিদিন ১০ ওমানি রিয়াল (OMR) জরিমানা ধার্য করা হয়।",
      "রয়্যাল ওমান পুলিশ (ROP) পোর্টাল বা বিমানবন্দরে বহির্গমন কাউন্টারে জরিমানা পরিশোধ বাধ্যতামূলক।"
    ]
  }
];

const OVERSTAY_GUIDE_ITEMS: ToolGuideItem[] = [
  {
    id: "overstay_what",
    type: "what",
    badge: "কী?",
    title: "ভিসা ওভারস্টে (Overstay) ও ফাইন আসলে কী?",
    shortDesc: "অনুমোদিত মেয়াদের চেয়ে অতিরিক্ত সময় বিদেশে অবস্থান করা এবং দৈনিক হারে জরিমানা ধার্য হওয়ার নিয়মাবলি।",
    fullParagraph: `ভিসা ওভারস্টে হলো কোনো দেশে অনুমোদিত মেয়াদের অতিরিক্ত সময় বৈধ অনুমতি বা ভিসা নবায়ন ব্যতিরেকে অবস্থান করা। আরব আমিরাত (UAE), সৌদি আরব, কাতার, কুয়েত, ওমান ও মালয়েশিয়া সহ প্রতিটি দেশেই বিদেশি নাগরিকদের অবস্থানের একটি সুনির্দিষ্ট সময়সীমা থাকে। ভিজিট ভিসা, ট্যুরিস্ট ভিসা কিংবা কর্মসংস্থান (ওয়ার্ক পারমিট বা ইকামা) ভিসার মেয়াদ পার হয়ে গেলে সংশ্লিষ্ট দেশের অভিবাসন আইন অনুযায়ী স্বয়ংক্রিয়ভাবে দৈনিক ভিত্তিতে জরিমানা গণনা শুরু হয়। সংযুক্ত আরব আমিরাতে গ্রেস পিরিয়ড শেষ হওয়ার পর থেকে প্রতিদিন ৫০ এইডি জরিমানা ছাড়াও বিমানবন্দর বহির্গমন ছাড়পত্রের জন্য প্রায় ৩০০ দিরহাম ফি পরিশোধ করতে হয়। অন্যদিকে কুয়েতে প্রতিদিন ২ কুয়েতি দিনার এবং মালয়েশিয়ায় প্রতিদিন ৩০ রিংগিত জরিমানা জমা হয়। সময়মতো এই জরিমানা পরিশোধ না করলে তা দিনের পর দিন বিশাল অঙ্কের ঋণে পরিণত হয় এবং ব্যক্তির নাম আন্তর্জাতিক অভিবাসন ডেটাবেজে কালো তালিকাভুক্ত (Blacklisted) হওয়ার চরম ঝুঁকি তৈরি করে।`,
    keyPoints: [
      "অনুমোদিত মেয়াদের পর অবস্থান করলেই স্বয়ংক্রিয়ভাবে দৈনিক জরিমানা গণনা শুরু হয়।",
      "ট্যুরিস্ট ও ওয়ার্ক ভিসার ক্ষেত্রে জরিমানা ও বহির্গমন ফি ভিন্ন হতে পারে।",
      "দীর্ঘদিন জরিমানা অপরিশোধিত থাকলে ব্যক্তির নামে ব্ল্যাকলিস্ট জারি হতে পারে।"
    ]
  },
  {
    id: "overstay_why",
    type: "why",
    badge: "কেন?",
    title: "ওভারস্টে জরিমানা দ্রুত নিষ্পত্তি করা কেন জরুরি?",
    shortDesc: "জরিমানা বকেয়া থাকলে জেল, ডিপোর্টেশন (আজীবন বহিষ্কার) ও আন্তর্জাতিক ভ্রমণ নিষেধাজ্ঞার ঝুঁকি থাকে।",
    fullParagraph: `ওভারস্টে জরিমানা ফেলে রাখলে তা কেবল আর্থিক বোঝার সৃষ্টি করে না, বরং অভিবাসী ব্যক্তির ব্যক্তি স্বাধীনতা ও ভবিষ্যৎ আইনি অবস্থানকে পুরোপুরি ধ্বংস করে দেয়। অনেকে মনে করেন জরিমানা জমে থাকলে কোনো সমস্যা নেই, পরে দেখা যাবে; কিন্তু জরিমানা পরিশোধ না করা পর্যন্ত যেকোনো আন্তর্জাতিক বিমানবন্দর দিয়ে বহির্গমন সম্পূর্ণ নিষিদ্ধ থাকে। সংশ্লিষ্ট দেশের পুলিশ বা অপরাধ তদন্ত বিভাগ যেকোনো সময় আকস্মিক অভিযানে অবৈধ অবস্থানকারী হিসেবে আটক করে ডিটেনশন সেন্টারে পাঠাতে পারে। ডিটেনশন সেন্টারে আটক হলে জেল খাটার পাশাপাশি চোখের আইরিশ ও আঙুলের ছাপ নিয়ে আজীবনের জন্য বহিষ্কার (Deportation) করে দেওয়া হতে পারে। একবার ডিপোর্টেশন সিল পড়লে সেই দেশে তো আর কখনো ফেরা যায়ই না, উপরন্তু জিসিসি (GCC) জোটভুক্ত অন্যান্য দেশেও নতুন কোনো ভিসার অনুমোদন পাওয়া অসম্ভব হয়ে পড়ে। তাই জরিমানা স্বল্প থাকা অবস্থাতেই তা সরকারি পোর্টালে পরিশোধ করা অথবা দূতাবাস ও স্থানীয় অভিবাসন বিভাগের পরামর্শ গ্রহণ করা বুদ্ধিমানের কাজ।`,
    keyPoints: [
      "জরিমানা অপরিশোধিত থাকলে বিমানবন্দরে বোর্ডিং পাস ইস্যু বন্ধ থাকে।",
      "ডিটেনশন ও গ্রেপ্তারের শিকার হলে ডিপোর্টেশন (আজীবন প্রবেশ নিষেধাজ্ঞা) হতে পারে।",
      "জিসিসি এক দেশে ডিপোর্ট হলে অন্যান্য সদস্য দেশেও নতুন ভিসা পাওয়া জটিল হয়ে যায়।"
    ]
  },
  {
    id: "overstay_how",
    type: "how",
    badge: "কীভাবে?",
    title: "সাধারণ ক্ষমা (Amnesty) বা আউটপাস কীভাবে গ্রহণ করবেন?",
    shortDesc: "জরিমানা মওকুফ পেয়ে নিরাপদে দেশে ফেরার আইনি প্রক্রিয়া ও দূতাবাসের সহায়তা পাওয়ার ধাপসমূহ।",
    fullParagraph: `যদি ভিসার জরিমানা এত বেশি হয়ে যায় যে তা পরিশোধ করে দেশে ফেরা অসম্ভব ঠেকে, তবে সংশ্লিষ্ট দেশের সরকার কর্তৃক ঘোষিত সাধারণ ক্ষমা (Amnesty) বা আউটপাস সেবার মাধ্যমে নিরাপদে দেশে ফেরা সম্ভব। যখন কোনো দেশ অবৈধ প্রবাসীদের জন্য সাধারণ ক্ষমার সময়সীমা ঘোষণা করে, তখন জমে থাকা সম্পূর্ণ জরিমানা অথবা সিংহভাগ জরিমানা মওকুফ করে নিঃশর্ত বহির্গমন পারমিট (Exit Permit) প্রদান করা হয়। আউটপাস পাওয়ার জন্য প্রথমে বাংলাদেশ দূতাবাসের শ্রম উইং বা নির্ধারিত আউটপাস ক্যাম্পে গিয়ে পাসপোর্টের কপি ও আবেদন জমা দিতে হয়। মূল পাসপোর্ট কফিলের কাছে আটকে থাকলে দূতাবাস থেকে ট্রাভেল পারমিট (Travel Document / White Paper) সংগ্রহ করতে হয়। এরপর স্থানীয় অভিবাসন দপ্তর বা অনুমোদিত আমের সেন্টারে গিয়ে বায়োমেট্রিক ও নির্ধারিত বহির্গমন ফি দিয়ে আউটপাস সংগ্রহ করতে হয়। আউটপাস ইস্যুর সাধারণত ৭ থেকে ১৪ দিনের একটি মেয়াদ থাকে, যার মধ্যে নিজ খরচে বিমানের টিকিট কেটে নিজ দেশে নিরাপদে প্রত্যাবর্তন করতে হয়।`,
    keyPoints: [
      "সরকার ঘোষিত সাধারণ ক্ষমা (Amnesty) চলাকালীন জরিমানা মওকুফে আউটপাস নেওয়া যায়।",
      "পাসপোর্ট না থাকলে বাংলাদেশ দূতাবাস থেকে ট্রাভেল পারমিট (টিপি) সংগ্রহ করতে হবে।",
      "আউটপাস ইস্যুর নির্দিষ্ট মেয়াদের (সাধারণত ৭–১৪ দিন) মধ্যে দেশে ফিরে যেতে হবে।"
    ]
  }
];

export default function OverstayCalculatorModal({ isOpen, onClose }: OverstayCalculatorModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedCountryId, setSelectedCountryId] = useState<string>("uae");
  const [expiryDateStr, setExpiryDateStr] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() - 5);
    return d.toISOString().split("T")[0];
  });
  const [visaType, setVisaType] = useState<"tourist" | "work">("tourist");

  useEffect(() => {
    setMounted(true);
  }, []);

  const selectedCountry = useMemo(() => {
    return COUNTRY_RULES.find((c) => c.id === selectedCountryId) || COUNTRY_RULES[0];
  }, [selectedCountryId]);

  // Calculation logic
  const calculation = useMemo(() => {
    if (!expiryDateStr) return null;
    const expiry = new Date(expiryDateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    expiry.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - expiry.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
      return {
        isOverstayed: false,
        daysRemaining: Math.abs(diffDays),
        daysOverstayed: 0,
        estimatedFine: 0,
        bdtEquivalent: 0,
      };
    } else {
      const fineAmount = Math.round((diffDays * selectedCountry.dailyFine) + selectedCountry.exitPassFee);
      const bdtAmount = Math.round(fineAmount * selectedCountry.rateToBdt);
      return {
        isOverstayed: true,
        daysRemaining: 0,
        daysOverstayed: diffDays,
        estimatedFine: fineAmount,
        bdtEquivalent: bdtAmount,
      };
    }
  }, [expiryDateStr, selectedCountry]);

  if (!isOpen || !mounted || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-[#090D1A] flex flex-col overflow-hidden text-slate-100">
      {/* ─── Top Header (Starts at top safe-area, zero top gap) ─── */}
      <header
        className="shrink-0 px-4 pb-3.5 border-b border-white/10 flex items-center justify-between shadow-lg"
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 12px)",
          background: "linear-gradient(180deg, #12182F 0%, #0C1122 100%)",
          borderBottom: "1.5px solid rgba(217, 177, 92, 0.35)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md shrink-0"
            style={{ background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)" }}
          >
            <Calculator className="w-5 h-5 text-[#1B2340]" />
          </div>
          <div>
            <h3
              className="font-bold text-base leading-tight text-[#F1EAD9]"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              ভিসা মেয়াদ ও জরিমানা ক্যালকুলেটর
            </h3>
            <p className="text-[11px] text-[#A0AEC0]">
              বিভিন্ন দেশের ওভারস্টে ফাইন ও বহির্গমন ফি হিসাব
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            playSweetTune();
            onClose();
          }}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#A0AEC0] hover:text-white transition-colors"
          title="বন্ধ করুন"
        >
          <X className="w-4 h-4" />
        </button>
      </header>

      {/* ─── Body (Scrollable, 100% full screen responsive) ─── */}
      <main className="p-4 overflow-y-auto space-y-4 flex-1 scrollbar-none">
        {/* Country Selector */}
        <div>
          <label
            className="block text-xs font-bold text-[#E2E8F0] mb-1.5"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            দেশ নির্বাচন করুন:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {COUNTRY_RULES.map((country) => {
              const isSelected = country.id === selectedCountryId;
              return (
                <button
                  key={country.id}
                  type="button"
                  onClick={() => {
                    playSweetTune();
                    setSelectedCountryId(country.id);
                  }}
                  className="p-2.5 rounded-xl flex flex-col items-center justify-center gap-1 transition-all text-center select-none"
                  style={{
                    background: isSelected
                      ? "linear-gradient(135deg, rgba(217, 177, 92, 0.25) 0%, rgba(58, 74, 142, 0.40) 100%)"
                      : "rgba(255, 255, 255, 0.04)",
                    border: isSelected ? "1.5px solid #D9B15C" : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isSelected ? "0 0 14px rgba(217, 177, 92, 0.25)" : "none",
                  }}
                >
                  <span className="text-xl leading-none">{country.flag}</span>
                  <span
                    className="text-[11px] font-semibold text-[#F1EAD9] line-clamp-1"
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  >
                    {country.nameBn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Input Parameters: Visa Type & Expiry Date */}
        <div className="grid grid-cols-2 gap-3">
          {/* Visa Type */}
          <div>
            <label
              className="block text-xs font-bold text-[#E2E8F0] mb-1.5"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              ভিসার ধরন:
            </label>
            <select
              value={visaType}
              onChange={(e) => {
                playSweetTune();
                setVisaType(e.target.value as "tourist" | "work");
              }}
              className="w-full bg-[#1A213E] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#F1EAD9] focus:outline-none focus:border-[#D9B15C]"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              <option value="tourist">ট্যুরিস্ট / ভিজিট ভিসা</option>
              <option value="work">কাজের ভিসা / রেসিডেন্স পারমিট</option>
            </select>
          </div>

          {/* Expiry Date */}
          <div>
            <label
              className="block text-xs font-bold text-[#E2E8F0] mb-1.5"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              ভিসার শেষ মেয়াদ:
            </label>
            <input
              type="date"
              value={expiryDateStr}
              onChange={(e) => {
                playSweetTune();
                setExpiryDateStr(e.target.value);
              }}
              className="w-full bg-[#1A213E] border border-white/10 rounded-xl px-2.5 py-2 text-xs text-[#F1EAD9] focus:outline-none focus:border-[#D9B15C]"
            />
          </div>
        </div>

        {/* Calculation Result Box */}
        {calculation && (
          <div>
            {calculation.isOverstayed ? (
              <div
                className="rounded-2xl p-4 border transition-all"
                style={{
                  background: "linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(30, 20, 35, 0.7) 100%)",
                  borderColor: "rgba(239, 68, 68, 0.35)",
                  boxShadow: "0 4px 20px rgba(239, 68, 68, 0.15)",
                }}
              >
                <div className="flex items-center gap-2 text-red-400 mb-2">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <h4
                    className="text-xs font-bold"
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  >
                    সতর্কতা: ভিসা ওভারস্টে হয়েছে ({calculation.daysOverstayed} দিন)
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center py-2 border-y border-red-500/20 my-2">
                  <div>
                    <span className="text-[10px] text-[#A0AEC0] block">আনুমানিক মোট জরিমানা</span>
                    <span className="text-base font-extrabold text-red-200">
                      {calculation.estimatedFine.toLocaleString("en-US")} {selectedCountry.currency}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A0AEC0] block">বাংলাদেশি টাকায় রূপান্তর</span>
                    <span className="text-base font-extrabold text-emerald-400">
                      ≈ ৳ {calculation.bdtEquivalent.toLocaleString("bn-BD")}
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-[#A0AEC0] text-center mt-1">
                  * প্রতিদিন {selectedCountry.dailyFine} {selectedCountry.currency} জরিমানা এবং আনুমানিক {selectedCountry.exitPassFee} {selectedCountry.currency} আউটপাস/ক্লিয়ারেন্স ফি যুক্ত করা হয়েছে।
                </p>
              </div>
            ) : (
              <div
                className="rounded-2xl p-4 border transition-all"
                style={{
                  background: "linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(15, 30, 25, 0.7) 100%)",
                  borderColor: "rgba(16, 185, 129, 0.35)",
                  boxShadow: "0 4px 20px rgba(16, 185, 129, 0.15)",
                }}
              >
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <h4
                    className="text-xs font-bold"
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  >
                    ভিসা এখনো বৈধ আছে ({calculation.daysRemaining} দিন বাকি)
                  </h4>
                </div>
                <p className="text-[11px] text-[#A0AEC0] mt-1">
                  আপনার ভিসায় কোনো জরিমানা নেই। মেয়াদ শেষ হওয়ার অন্তত ৭–১০ দিন আগে দেশে ফেরা অথবা ভিসা নবায়ন করার পরামর্শ দেওয়া হচ্ছে।
                </p>
              </div>
            )}
          </div>
        )}

        {/* Country Official Guidance Notes */}
        <div className="rounded-xl p-3 bg-white/5 border border-white/5">
          <h4
            className="text-xs font-bold text-[#F3D89B] flex items-center gap-1.5 mb-2"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            <Info className="w-3.5 h-3.5 text-[#D9B15C]" />
            <span>{selectedCountry.nameBn}-র সরকারি নিয়মাবলী:</span>
          </h4>
          <ul className="space-y-1.5 text-[11px] text-[#A0AEC0]">
            {selectedCountry.rulesBn.map((r, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-[#D9B15C] mt-0.5">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ─── NEW: কী? কেন? কীভাবে? Interactive 3 Cards Section with In-Viewport Zoom ─── */}
        <ToolGuideCards
          sectionTitle="ওভারস্টে নির্দেশিকা (কী? কেন? কীভাবে?)"
          subtitle="জরিমানা বিধি, আইনি ঝুঁকি ও সরকারি সাধারণ ক্ষমা সম্পর্কে বিস্তারিত জানুন"
          theme="gold"
          items={OVERSTAY_GUIDE_ITEMS}
        />
      </main>

      {/* ─── Footer Action ─── */}
      <footer
        className="p-3.5 border-t border-white/10 bg-[#090d1a]/95 backdrop-blur-md shrink-0"
        style={{
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 14px)",
        }}
      >
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
          সম্পন্ন করুন
        </button>
      </footer>
    </div>,
    document.body
  );
}
