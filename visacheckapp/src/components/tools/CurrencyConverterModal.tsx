"use client";

import React, { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRightLeft, Sparkles, AlertCircle } from "lucide-react";
import { playSweetTune } from "@/lib/sound";
import ToolGuideCards, { ToolGuideItem } from "./ToolGuideCards";

interface CurrencyConverterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CurrencyInfo {
  code: string;
  nameBn: string;
  nameEn: string;
  flag: string;
  rateToBdt: number;
}

const CURRENCIES: CurrencyInfo[] = [
  { code: "SAR", nameBn: "সৌদি রিয়াল", nameEn: "Saudi Riyal", flag: "🇸🇦", rateToBdt: 32.55 },
  { code: "AED", nameBn: "দুবাই দিরহাম", nameEn: "UAE Dirham", flag: "🇦🇪", rateToBdt: 33.25 },
  { code: "MYR", nameBn: "মালয়েশিয়ান রিংগিত", nameEn: "Malaysian Ringgit", flag: "🇲🇾", rateToBdt: 27.85 },
  { code: "QAR", nameBn: "কাতারি রিয়াল", nameEn: "Qatari Riyal", flag: "🇶🇦", rateToBdt: 33.45 },
  { code: "KWD", nameBn: "কুয়েতি দিনার", nameEn: "Kuwaiti Dinar", flag: "🇰🇼", rateToBdt: 395.20 },
  { code: "OMR", nameBn: "ওমানি রিয়াল", nameEn: "Omani Rial", flag: "🇴🇲", rateToBdt: 316.50 },
  { code: "BHD", nameBn: "বাহরাইনি দিনার", nameEn: "Bahraini Dinar", flag: "🇧🇭", rateToBdt: 322.80 },
  { code: "SGD", nameBn: "সিঙ্গাপুর ডলার", nameEn: "Singapore Dollar", flag: "🇸🇬", rateToBdt: 92.60 },
  { code: "USD", nameBn: "ইউএস ডলার", nameEn: "US Dollar", flag: "🇺🇸", rateToBdt: 122.00 },
  { code: "EUR", nameBn: "ইউরো", nameEn: "Euro", flag: "🇪🇺", rateToBdt: 132.80 },
  { code: "GBP", nameBn: "ব্রিটিশ পাউন্ড", nameEn: "British Pound", flag: "🇬🇧", rateToBdt: 155.40 },
];

const CURRENCY_GUIDE_ITEMS: ToolGuideItem[] = [
  {
    id: "currency_what",
    type: "what",
    badge: "কী?",
    title: "প্রবাসী আয়ে ২.৫% সরকারি নগদ প্রণোদনা আসলে কী?",
    shortDesc: "বৈধ চ্যানেলে রেমিট্যান্স পাঠালে মূল টাকার সাথে বাড়তি আড়াই শতাংশ সরকারি নগদ বোনাস পাওয়ার নিয়ম।",
    fullParagraph: `প্রবাসী বাংলাদেশিদের কষ্টার্জিত বৈদেশিক মুদ্রাকে বৈধ চ্যানেলে দেশে পাঠাতে উৎসাহিত করার লক্ষ্যে বাংলাদেশ সরকার ও বাংলাদেশ ব্যাংক কর্তৃক প্রদত্ত একটি বিশেষ আর্থিক সুবিধা হলো আড়াই শতাংশ (২.৫%) নগদ প্রণোদনা। এর অর্থ হলো, আপনি বৈধ ব্যাংকিং চ্যানেল, এক্সচেঞ্জ হাউস বা অনুমোদিত রেমিট্যান্স অ্যাপসের মাধ্যমে বাংলাদেশে পরিবারকে যে অর্থ পাঠাবেন, সেই মূল টাকার সাথে অতিরিক্ত আরও ২.৫% টাকা সরাসরি বাংলাদেশ সরকার যোগ করে দেবে। উদাহরণস্বরূপ, আপনি যদি ব্যাংক রেটে ১,০০,০০০ (এক লক্ষ) টাকা সমমূল্যের রিয়াল বা দিরহাম পাঠান, তবে আপনার পরিবার কোনো রকম অতিরিক্ত ফি কাটা ছাড়াই মোট ১,০২,৫০০ টাকা উত্তোলন করতে পারবে। এই অতিরিক্ত ২,৫০০ টাকা সম্পূর্ণ সরকারি অনুদান যা বৈধ চ্যানেলের মাধ্যমে প্রেরিত প্রতি কিস্তিতে প্রযোজ্য। এর জন্য কোনো দীর্ঘ আবেদন প্রক্রিয়ার প্রয়োজন হয় না; অনুমোদিত ব্যাংকে টাকা পৌঁছানোর সাথে সাথেই সুবিধাভোগীর ব্যাংক একাউন্ট বা মোবাইল ওয়ালেটে প্রণোদনার টাকা স্বয়ংক্রিয়ভাবে যোগ হয়ে যায়।`,
    keyPoints: [
      "প্রতি ১ লক্ষ টাকায় বাড়তি ২,৫০০ টাকা সরকারি বোনাস স্বয়ংক্রিয়ভাবে ব্যাংক যোগ করে দেয়।",
      "ব্যাংক ড্রাফট, অনুমোদিত এক্সচেঞ্জ ও অ্যাপসে প্রেরিত সকল বৈধ রেমিট্যান্সে এটি প্রযোজ্য।",
      "এর জন্য আলাদা কোনো আবেদন ফরম পূরণের প্রয়োজন হয় না।"
    ]
  },
  {
    id: "currency_why",
    type: "why",
    badge: "কেন?",
    title: "হুন্ডি কেন অবৈধ ও ব্যাংকিং চ্যানেলে টাকা পাঠানো কেন জরুরি?",
    shortDesc: "হুন্ডির আইনি বিপদ, সর্বস্ব হারানোর ঝুঁকি এবং ব্যাংকিং চ্যানেলে টাকা পাঠানোর রাষ্ট্রীয় সুবিধা।",
    fullParagraph: `হুন্ডি বা অননুমোদিত ব্যক্তির মাধ্যমে টাকা পাঠানো বাংলাদেশ ও আন্তর্জাতিক আইন অনুযায়ী একটি গুরুতর শাস্তিযোগ্য অপরাধ। অনেক প্রবাসী সামান্য টাকার রেট বেশি পাওয়ার লোভে হুন্ডির ফাঁদে পা দেন, যার ফলে বহু ক্ষেত্রে সর্বস্ব হারানোর করুণ পরিণতি ঘটে। হুন্ডি ব্যবসায়ীদের কোনো আইনি নিবন্ধন থাকে না; যেকোনো সময় তারা টাকা আত্মসাৎ করে পালিয়ে যেতে পারে এবং এর কোনো সরকারি রসিদ থাকে না। অধিকন্তু, হুন্ডির অর্থ চোরাচালান, অর্থপাচার ও রাষ্ট্রবিরোধী কর্মকাণ্ডে ব্যবহৃত হতে পারে, যা ধরা পড়লে প্রেরক ও প্রাপক উভয়কেই মানি লন্ডারিং আইনে কারাদণ্ডের মুখোমুখি হতে হয়। অপরদিকে, ব্যাংকিং চ্যানেল বা অনুমোদিত মানিগ্রাম, ওয়েস্টার্ন ইউনিয়ন ও অনলাইন ব্যাংকিংয়ে পাঠানো অর্থের শতভাগ রাষ্ট্রীয় নিরাপত্তা থাকে। প্রতিটি লেনদেনের ট্র্যাকিং নাম্বার (MTCN) ও সরকারি রসিদ থাকে, যা পরবর্তীতে ব্যাংক ঋণ পাওয়া, পরিবারের আর্থিক নিরাপত্তা এবং প্রবাস কল্যাণ কার্ডের সুবিধা পেতে অফিশিয়াল প্রমাণ হিসেবে কাজ করে।`,
    keyPoints: [
      "হুন্ডি অবৈধ এবং প্রেরক ও প্রাপক উভয়েই মানি লন্ডারিং মামলার ঝুঁকিতে পড়তে পারেন।",
      "ব্যাংকিং চ্যানেলে পাঠালে প্রতিটি লেনদেনের সরকারি রসিদ ও ট্র্যাকিং নম্বর পাওয়া যায়।",
      "বৈধ রেমিট্যান্স প্রেরকদের জন্য রয়েছে সিআইপি (CIP) মর্যাদা ও প্রবাসী ঋণ সুবিধা।"
    ]
  },
  {
    id: "currency_how",
    type: "how",
    badge: "কীভাবে?",
    title: "রিয়াল, দিরহাম ও দিনারের সেরা রেট ও কম চার্জে কীভাবে পাঠাবেন?",
    shortDesc: "মার্কেট রেট ট্র্যাকিং, ডিজিটাল অ্যাপস ব্যবহার ও ট্রানজেকশন খরচ বাঁচানোর মোক্ষম কৌশল।",
    fullParagraph: `প্রবাস থেকে দেশে টাকা পাঠানোর সময় সর্বোচ্চ বিনিময় হার (Exchange Rate) ও ন্যূনতম ট্রানজেকশন ফি পাওয়ার জন্য কিছু কৌশল অবলম্বন করা অত্যন্ত ফলপ্রসূ। প্রথমত, কোনো এক্সচেঞ্জ হাউসে যাওয়ার আগে প্রতিদিনের ব্যাংক রেট ও খোলা বাজারের রেটের পার্থক্য অনলাইন বা আমাদের অ্যাপের মাধ্যমে যাচাই করে নিন। দ্বিতীয়ত, মাসের প্রথম সপ্তাহের চেয়ে মাসের মাঝামাঝি বা আন্তর্জাতিক মুদ্রা বাজারের ওঠানামার সময় রেট কিছুটা ভালো পাওয়া যায়। তৃতীয়ত, সরাসরি ক্যাশ কাউন্টারে না গিয়ে আল-আনসারি এক্সচেঞ্জ, এসটিসি পে (STC Pay), ইউআরপে (Urpay), কিংবা লুলু মানি-র মতো ডিজিটাল অ্যাপ ব্যবহার করলে ক্যাশ লেনদেনের চেয়ে ভালো রেট এবং কখনো কখনো জিরো ট্রান্সফার ফি অফার পাওয়া যায়। চতুর্থত, ছোট ছোট পরিমাণের চেয়ে বড় অঙ্কের টাকা একত্রে পাঠালে সার্বিক ট্রান্সফার চার্জ অনেক কমে যায়। পঞ্চমত, টাকা পাঠানোর সময় সুবিধাভোগীর সরাসরি ব্যাংক একাউন্ট বা বিকাশ/নগদ ওয়ালেটে পাঠালে তাত্ক্ষণিক সরকারি প্রণোদনাসহ পুরো টাকা জমা নিশ্চিত হয়।`,
    keyPoints: [
      "এসটিসি পে (STC Pay), ইউআরপে বা এক্সচেঞ্জ অ্যাপ ব্যবহার করলে ক্যাশ কাউন্টারের চেয়ে ভালো রেট মেলে।",
      "একবারে বেশি পরিমাণ পাঠালে জনপ্রতি ট্রান্সফার সার্ভিস ফি অনেকটাই সাশ্রয় হয়।",
      "বিকাশ বা সরাসরি ব্যাংক একাউন্টে পাঠালে মুহূর্তেই ২.৫% প্রণোদনাসহ টাকা জমা হয়।"
    ]
  }
];

export default function CurrencyConverterModal({ isOpen, onClose }: CurrencyConverterModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>("SAR");
  const [amount, setAmount] = useState<number>(1000);
  const [isForeignToBdt, setIsForeignToBdt] = useState<boolean>(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currency = useMemo(() => {
    return CURRENCIES.find((c) => c.code === selectedCurrencyCode) || CURRENCIES[0];
  }, [selectedCurrencyCode]);

  // Conversion Calculations
  const result = useMemo(() => {
    if (isNaN(amount) || amount <= 0) return { main: 0, incentiveBdt: 0, totalWithIncentive: 0 };

    if (isForeignToBdt) {
      const bdt = amount * currency.rateToBdt;
      const incentive = bdt * 0.025; // 2.5% Bangladesh Govt Remittance Incentive
      return {
        main: Math.round(bdt * 100) / 100,
        incentiveBdt: Math.round(incentive * 100) / 100,
        totalWithIncentive: Math.round((bdt + incentive) * 100) / 100,
      };
    } else {
      const foreign = amount / currency.rateToBdt;
      return {
        main: Math.round(foreign * 100) / 100,
        incentiveBdt: 0,
        totalWithIncentive: Math.round(foreign * 100) / 100,
      };
    }
  }, [amount, currency, isForeignToBdt]);

  if (!isOpen || !mounted || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-[#090D1A] flex flex-col overflow-hidden text-slate-100">
      {/* ─── Top Header (Starts at top safe-area, zero top gap) ─── */}
      <header
        className="shrink-0 px-4 pb-3.5 border-b border-white/10 flex items-center justify-between shadow-lg"
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 12px)",
          background: "linear-gradient(180deg, #101F2C 0%, #09131C 100%)",
          borderBottom: "1.5px solid rgba(16, 185, 129, 0.35)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md shrink-0"
            style={{ background: "linear-gradient(135deg, #34d399 0%, #10b981 100%)" }}
          >
            <ArrowRightLeft className="w-5 h-5 text-[#0c1a1f]" />
          </div>
          <div>
            <h3
              className="font-bold text-base leading-tight text-[#F1EAD9]"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              প্রবাসী মুদ্রা রূপান্তরকারী (টাকার রেট)
            </h3>
            <p className="text-[11px] text-[#A0AEC0]">
              রিয়াল, দিরহাম, দিনার ও ডলার থেকে বাংলাদেশি টাকা
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
        {/* Quick Currency Selector Grid */}
        <div>
          <label
            className="block text-xs font-bold text-[#E2E8F0] mb-1.5"
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          >
            মুদ্রা নির্বাচন করুন:
          </label>
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none">
            {CURRENCIES.map((c) => {
              const isSelected = c.code === selectedCurrencyCode;
              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    playSweetTune();
                    setSelectedCurrencyCode(c.code);
                  }}
                  className="px-3 py-2 rounded-xl flex items-center gap-1.5 shrink-0 transition-all select-none"
                  style={{
                    background: isSelected
                      ? "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)"
                      : "rgba(255, 255, 255, 0.05)",
                    border: isSelected ? "1.5px solid #F3D89B" : "1px solid rgba(255, 255, 255, 0.08)",
                    color: isSelected ? "#1B2340" : "#E2E8F0",
                    fontWeight: isSelected ? 700 : 500,
                  }}
                >
                  <span className="text-base leading-none">{c.flag}</span>
                  <span className="text-xs">{c.code}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Input Card with Direction Swap */}
        <div className="rounded-2xl p-4 bg-white/[0.04] border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span
              className="text-xs font-bold text-[#F1EAD9]"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              {isForeignToBdt ? `${currency.nameBn} (${currency.code})` : "বাংলাদেশি টাকা (BDT)"}
            </span>

            {/* Direction Toggle Button */}
            <button
              type="button"
              onClick={() => {
                playSweetTune();
                setIsForeignToBdt(!isForeignToBdt);
              }}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-semibold text-[#D9B15C] flex items-center gap-1.5 border border-white/10 active:scale-95 transition-all"
            >
              <ArrowRightLeft className="w-3 h-3" />
              <span>পরিবর্তন করুন</span>
            </button>
          </div>

          {/* Amount Input */}
          <div className="flex items-center gap-2 bg-[#0d1326] border border-white/10 rounded-xl px-3 py-2.5">
            <span className="text-base font-bold text-[#D9B15C]">
              {isForeignToBdt ? currency.flag : "🇧🇩"}
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              placeholder="পরিমাণ লিখুন..."
              className="w-full bg-transparent text-lg font-bold text-white outline-none"
            />
            <span className="text-xs font-bold text-[#A0AEC0]">
              {isForeignToBdt ? currency.code : "BDT"}
            </span>
          </div>

          {/* Fast Preset Amount Buttons */}
          <div className="flex items-center gap-1.5 pt-1">
            <span className="text-[10.5px] text-[#A0AEC0] mr-1">দ্রুত নির্বাচন:</span>
            {[100, 500, 1000, 5000].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  playSweetTune();
                  setAmount(preset);
                }}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#E2E8F0] border border-white/5 active:scale-95 transition-transform"
              >
                {preset.toLocaleString("en-US")}
              </button>
            ))}
          </div>
        </div>

        {/* Conversion Result Display */}
        <div
          className="rounded-2xl p-4"
          style={{
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(18, 24, 46, 0.90) 100%)",
            border: "1.5px solid rgba(16, 185, 129, 0.40)",
            boxShadow: "0 6px 24px rgba(0, 0, 0, 0.35)",
          }}
        >
          <div className="flex items-center justify-between mb-1">
            <span
              className="text-xs text-[#A0AEC0] font-medium"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              {isForeignToBdt ? "মোট সমপরিমাণ টাকা" : `মোট সমপরিমাণ ${currency.nameBn}`}
            </span>
            <span className="text-[10px] text-[#10b981] font-mono font-bold">
              ১ {currency.code} = ৳ {currency.rateToBdt} BDT
            </span>
          </div>

          <div className="text-2xl sm:text-3xl font-black text-[#F3D89B] tracking-tight">
            {isForeignToBdt ? "৳ " : `${currency.code} `}
            {result.main.toLocaleString("bn-BD", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>

          {/* Remittance Incentive Calculation */}
          {isForeignToBdt && (
            <div className="mt-3 pt-3 border-t border-white/10 space-y-1">
              <div className="flex items-center justify-between text-[11px] text-[#CBD5E1]">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#10b981]" />
                  <span>সরকারি ২.৫% রেমিট্যান্স প্রণোদনা:</span>
                </span>
                <span className="font-bold text-[#10b981]">
                  + ৳ {result.incentiveBdt.toLocaleString("bn-BD", { minimumFractionDigits: 2 })}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-white pt-1">
                <span>প্রণোদনাসহ মোট প্রাপ্তি (ব্যাংক রেট):</span>
                <span className="text-sm font-black text-[#10b981]">
                  ≈ ৳ {result.totalWithIncentive.toLocaleString("bn-BD", { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl p-3 bg-white/5 border border-white/5 flex items-start gap-2 text-[11px] text-[#A0AEC0] leading-relaxed">
          <AlertCircle className="w-4 h-4 text-[#D9B15C] shrink-0 mt-0.5" />
          <span>
            * এটি বাংলাদেশ ব্যাংক ও শীর্ষ এক্সচেঞ্জ হাউসগুলোর গড় রেফারেন্স রেট। ব্যাংক ভেদে বা মানিগ্রাম/ওয়েস্টার্ন ইউনিয়নে কিছুটা পরিবর্তন হতে পারে।
          </span>
        </div>

        {/* ─── NEW: কী? কেন? কীভাবে? Interactive 3 Cards Section with In-Viewport Zoom ─── */}
        <ToolGuideCards
          sectionTitle="রেমিট্যান্স নির্দেশিকা (কী? কেন? কীভাবে?)"
          subtitle="সরকারি প্রণোদনা, হুন্ডি প্রতিরোধ ও সেরা এক্সচেঞ্জ রেট পাওয়ার নিয়মাবলী"
          theme="emerald"
          items={CURRENCY_GUIDE_ITEMS}
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
