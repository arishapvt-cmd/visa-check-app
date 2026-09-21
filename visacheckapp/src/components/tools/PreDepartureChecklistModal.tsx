"use client";

import React, { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X, CheckSquare, RotateCcw, CheckCircle2, ShieldCheck, Plane, FileCheck, Sparkles } from "lucide-react";
import { playSweetTune } from "@/lib/sound";
import ToolGuideCards, { ToolGuideItem } from "./ToolGuideCards";
import ToolModalFooter from "./ToolModalFooter";

interface PreDepartureChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChecklistItem {
  id: string;
  category: "passport_visa" | "clearance_medical" | "travel_tickets" | "personal";
  categoryTitleBn: string;
  titleBn: string;
  descBn: string;
  isCrucial: boolean;
}

const DEFAULT_CHECKLIST_ITEMS: ChecklistItem[] = [
  // Category 1: Passport & Visa
  {
    id: "pv_1",
    category: "passport_visa",
    categoryTitleBn: "পাসপোর্ট ও ভিসা সংক্রান্ত",
    titleBn: "পাসপোর্টের মেয়াদ অন্তত ৬ মাস অবশিষ্ট থাকা",
    descBn: "ভ্রমণের দিন থেকে পাসপোর্টের ন্যূনতম ৬ মাস মেয়াদ থাকতে হবে।",
    isCrucial: true,
  },
  {
    id: "pv_2",
    category: "passport_visa",
    categoryTitleBn: "পাসপোর্ট ও ভিসা সংক্রান্ত",
    titleBn: "অরিজিনাল ভিসা পেপারের কালার প্রিন্ট কপি",
    descBn: "ই-ভিসা বা ভিসা স্টিকারের পরিষ্কার ৩-৪ কপি প্রিন্ট সাথে রাখুন।",
    isCrucial: true,
  },
  {
    id: "pv_3",
    category: "passport_visa",
    categoryTitleBn: "পাসপোর্ট ও ভিসা সংক্রান্ত",
    titleBn: "সরকারি পোর্টাল থেকে ভিসা স্ট্যাটাস ভেরিফাই",
    descBn: "ভিসাটি ইস্যুকারী দেশের অফিশিয়াল ওয়েবসাইটে 'Active/Valid' আছে কি না চেক করুন।",
    isCrucial: true,
  },

  // Category 2: BMET & Clearance
  {
    id: "cm_1",
    category: "clearance_medical",
    categoryTitleBn: "সরকারি ছাড়পত্র ও মেডিকেল",
    titleBn: "বিএমইটি (BMET) ইমিগ্রেশন স্মার্ট কার্ড",
    descBn: "কাজের ভিসার ক্ষেত্রে বিএমইটি ছাড়পত্র ও স্মার্ট কার্ড আবশ্যক।",
    isCrucial: true,
  },
  {
    id: "cm_2",
    category: "clearance_medical",
    categoryTitleBn: "সরকারি ছাড়পত্র ও মেডিকেল",
    titleBn: "গামকা (GAMCA/Wafid) ফিট মেডিকেল রিপোর্ট",
    descBn: "অনুমোদিত মেডিকেল সেন্টার থেকে প্রাপ্ত মূল মেডিকেল ফিট সার্টিফিকেট।",
    isCrucial: true,
  },
  {
    id: "cm_3",
    category: "clearance_medical",
    categoryTitleBn: "সরকারি ছাড়পত্র ও মেডিকেল",
    titleBn: "পুলিশ ক্লিয়ারেন্স সনদ (প্রযোজ্য ক্ষেত্রে)",
    descBn: "পররাষ্ট্র মন্ত্রণালয় সত্যায়িত অরিজিনাল পুলিশ ক্লিয়ারেন্স সনদ।",
    isCrucial: false,
  },
  {
    id: "cm_4",
    category: "clearance_medical",
    categoryTitleBn: "সরকারি ছাড়পত্র ও মেডিকেল",
    titleBn: "আন্তর্জাতিক ভ্যাকসিন ও হেলথ কার্ড",
    descBn: "প্রয়োজনীয় পোলিও/ইয়েলো ফিভার বা কোভিড-১৯ ভ্যাকসিন ডোজ সার্টিফিকেট।",
    isCrucial: false,
  },

  // Category 3: Travel & Tickets
  {
    id: "tt_1",
    category: "travel_tickets",
    categoryTitleBn: "বিমান টিকিট ও বুকিং",
    titleBn: "কনফার্মড এয়ার টিকিট (রিটার্ন টিকিট জরুরি)",
    descBn: "ভিজিট ভিসার ক্ষেত্রে অবশ্যই রিটার্ন টিকিট এবং কাজের ক্ষেত্রে ওয়ান-ওয়ে টিকিট।",
    isCrucial: true,
  },
  {
    id: "tt_2",
    category: "travel_tickets",
    categoryTitleBn: "বিমান টিকিট ও বুকিং",
    titleBn: "হোটেল বুকিং বা স্পন্সরের থাকার ঠিকানা",
    descBn: "ইমিগ্রেশনে প্রদর্শনের জন্য বৈধ হোটেল ভাউচার অথবা কফিল/আত্মীয়ের পূর্ণ ঠিকানা।",
    isCrucial: true,
  },
  {
    id: "tt_3",
    category: "travel_tickets",
    categoryTitleBn: "বিমান টিকিট ও বুকিং",
    titleBn: "পর্যাপ্ত বৈদেশিক মুদ্রা ও শো-মানি (Show Money)",
    descBn: "ট্যুরিস্টের জন্য অন্তত ৫০০–১০০০ ডলার এনডোর্সমেন্ট বা সমমূল্যের নগদ বিদেশি মুদ্রা।",
    isCrucial: true,
  },
  {
    id: "tt_4",
    category: "travel_tickets",
    categoryTitleBn: "বিমান টিকিট ও বুকিং",
    titleBn: "অ্যারাইভাল কার্ড / ট্রানজিট ডিক্লেয়ারেশন",
    descBn: "সিঙ্গাপুর SGAC বা মালয়েশিয়া MDAC ডিজিটাল কার্ড ফ্লাইটের ৩ দিন পূর্বে পূরণ।",
    isCrucial: false,
  },

  // Category 4: Personal Preparation
  {
    id: "pp_1",
    category: "personal",
    categoryTitleBn: "ব্যক্তিগত নিরাপত্তা ও প্রস্তুতি",
    titleBn: "জরুরি হেল্পলাইন নম্বর ডায়েরিতে নোট করা",
    descBn: "প্রবাসী কল্যাণ ডেস্ক (১৬১৩৫) ও গন্তব্য দেশের বাংলাদেশ দূতাবাসের হটলাইন নম্বর রাখা।",
    isCrucial: false,
  },
  {
    id: "pp_2",
    category: "personal",
    categoryTitleBn: "ব্যক্তিগত নিরাপত্তা ও প্রস্তুতি",
    titleBn: "পরিবারের কাছে সকল ডকুমেন্টের ডিজিটাল কপি রাখা",
    descBn: "পাসপোর্ট, ভিসা, টিকিট ও বীমা পলিসির ছবি বা পিডিএফ পরিবারের ইমেইল/হোয়াটসঅ্যাপে দেওয়া।",
    isCrucial: false,
  },
  {
    id: "pp_3",
    category: "personal",
    categoryTitleBn: "ব্যক্তিগত নিরাপত্তা ও প্রস্তুতি",
    titleBn: "প্রেসক্রিপশনসহ প্রয়োজনীয় জরুরি ওষুধ",
    descBn: "ব্যথানাশক ও নিষিদ্ধ ওষুধ পরিহার করে রেজিস্টার্ড ডাক্তারের ইংরেজি প্রেসক্রিপশন রাখা।",
    isCrucial: false,
  },
  {
    id: "pp_4",
    category: "personal",
    categoryTitleBn: "ব্যক্তিগত নিরাপত্তা ও প্রস্তুতি",
    titleBn: "আন্তর্জাতিক রোমিং বা গন্তব্য দেশের ই-সিম চেক",
    descBn: "এয়ারপোর্টে নামার পর পরিবারের সাথে যোগাযোগের জন্য সিম প্রস্তুতি।",
    isCrucial: false,
  },
];

const CHECKLIST_GUIDE_ITEMS: ToolGuideItem[] = [
  {
    id: "checklist_what",
    type: "what",
    badge: "কী?",
    title: "বিমানবন্দর ইমিগ্রেশন অফলোড (Offload) কী এবং কেন আটকায়?",
    shortDesc: "বৈধ টিকিট ও ভিসা থাকা সত্ত্বেও ইমিগ্রেশন পুলিশ যাত্রীদের বিমানে উঠতে না দিয়ে ফেরত পাঠানোর কারণ।",
    fullParagraph: `ইমিগ্রেশন অফলোড হলো বৈধ বিমান টিকিট ও ভিসা থাকা সত্ত্বেও বিমানবন্দর ইমিগ্রেশন পুলিশের নিরাপত্তা ও আইনি যাচাই-বাছাইয়ে কোনো ত্রুটি ধরা পড়ায় যাত্রীকে বিমানে উঠতে না দিয়ে ফেরত পাঠানোর প্রক্রিয়া। ঢাকার হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর কিংবা চট্টগ্রামের শাহ আমানত বিমানবন্দরে প্রতি মাসেই শত শত বিদেশগামী যাত্রী অফলোডের শিকার হয়ে চরম মানসিক ও আর্থিক ক্ষতির মুখোমুখি হন। প্রধানত যে কারণে যাত্রীদের অফলোড করা হয় তা হলো—জাল ভিসা বা ভুয়া স্পনসর লেটার, বিএমইটি (BMET) ইমিগ্রেশন ক্লিয়ারেন্স কার্ড না থাকা, ভিজিট ভিসায় গিয়ে কাজের উদ্দেশ্যে ভ্রমণের সন্দেহে আটকানো, এবং পর্যাপ্ত শো-মানি বা ফেরত আসার নিশ্চিত রিটার্ন টিকিট না থাকা। বিশেষ করে মধ্যপ্রাচ্য, মালয়েশিয়া বা থাইল্যান্ডগামী ভিজিট ভিসাধারীদের ক্ষেত্রে ইমিগ্রেশন পুলিশ হোটেল বুকিং ও ভ্রমণ ব্যয়ের প্রমাণ অত্যন্ত কড়াকড়িভাবে পরীক্ষা করে। কোনো অসঙ্গতি বা জালিয়াতি ধরা পড়লেই তাৎক্ষণিক অফলোড সিল দিয়ে ফ্লাইট বাতিল করে দেওয়া হয়।`,
    keyPoints: [
      "ভিজিট ভিসায় গেলে অবশ্যই নিশ্চিত রিটার্ন টিকিট ও পর্যাপ্ত শো-মানি (ডলার এনডোর্সমেন্ট) সাথে রাখতে হবে।",
      "হোটেল বুকিং বা স্পন্সরের সঠিক ঠিকানা দেখাতে ব্যর্থ হলে অফলোড হওয়ার আশঙ্কা থাকে।",
      "কাজের উদ্দেশ্যে ভিজিট ভিসায় ভ্রমণের সন্দেহ তৈরি হলে ইমিগ্রেশন অফিসার যাত্রা বাতিল করতে পারেন।"
    ]
  },
  {
    id: "checklist_why",
    type: "why",
    badge: "কেন?",
    title: "বিএমইটি (BMET) স্মার্ট কার্ড ও ম্যানপাওয়ার ক্লিয়ারেন্স কেন বাধ্যতামূলক?",
    shortDesc: "প্রবাসী কল্যাণ মন্ত্রণালয়ের আইনি সুরক্ষা, রাষ্ট্রীয় জীবন বীমা ও বিমানবন্দর পার হওয়ার বাধ্যতামূলক নিয়ম।",
    fullParagraph: `বাংলাদেশ সরকারের প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়ের আইন অনুযায়ী কাজের উদ্দেশ্যে বিদেশগামী প্রত্যেক নাগরিকের জন্য জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET) কর্তৃক প্রদত্ত স্মার্ট কার্ড বা ম্যানপাওয়ার ক্লিয়ারেন্স গ্রহণ করা বাধ্যতামূলক। এই কার্ডটি কেবল একটি ভ্রমণের অনুমতিপত্র নয়, বরং এটি বিদেশে প্রবাসীর সম্পূর্ণ আইনি সুরক্ষার ঢাল। বিএমইটি নিবন্ধনের মাধ্যমে একজন কর্মী সরকারি ডেটাবেজে তালিকাভুক্ত হন এবং সরকার নির্ধারিত জীবন বীমার আওতাভুক্ত হন। বিদেশে কর্মরত অবস্থায় কোনো কর্মী আকস্মিক দুর্ঘটনা বা মৃত্যুর শিকার হলে তার পরিবার সরকারিভাবে তাৎক্ষণিক ক্ষতিপূরণ, মরদেহ পরিবহন খরচ এবং প্রবাস কল্যাণ ব্যাংক থেকে পুনর্বাসন ঋণ সহায়তা পাওয়ার অধিকারী হন। বিএমইটি ক্লিয়ারেন্স ব্যতীত কেউ কাজের ভিসায় বিমানবন্দরে গেলে তাকে ইমিগ্রেশন পার হতে দেওয়া হয় না। ফলে দালালের প্রতারণা এড়াতে ও প্রবাস জীবনের নিরাপত্তা নিশ্চিত করতে ম্যানপাওয়ার ক্লিয়ারেন্স সম্পন্ন করা অপরিহার্য।`,
    keyPoints: [
      "বিএমইটি স্মার্ট কার্ড ছাড়া কাজের ভিসাধারীদের ইমিগ্রেশন অতিক্রম করতে দেওয়া হয় না।",
      "প্রবাসী কর্মী দুর্ঘটনা বা মৃত্যুর শিকার হলে পরিবার সরকারি আর্থিক অনুদান ও বীমা সুবিধা পায়।",
      "দালাল বা অননুমোদিত রিক্রুটিং এজেন্সির প্রতারণা শনাক্তে এটি সবচেয়ে কার্যকর রক্ষাকবচ।"
    ]
  },
  {
    id: "checklist_how",
    type: "how",
    badge: "কীভাবে?",
    title: "বিমানবন্দরে চেকিং, কাস্টমস ও বোর্ডিং পাস নেওয়ার সঠিক নিয়মাবলী কী?",
    shortDesc: "ফ্লাইটের অন্তত ৪ ঘণ্টা পূর্বে পৌঁছানো, লাগেজ সতর্কতা, ইমিগ্রেশন ইন্টারভিউ ও বোর্ডিং নিয়মাবলী।",
    fullParagraph: `ফ্লাইটের দিনে বিমানবন্দরে কোনো প্রকার অনাকাঙ্ক্ষিত ঝামেলা বা ফ্লাইট মিস এড়াতে সুনির্দিষ্ট কিছু নিয়ম মেনে চলা জরুরি। প্রথমত, আন্তর্জাতিক ফ্লাইটের ক্ষেত্রে নির্ধারিত উড্ডয়নের কমপক্ষে ৪ থেকে ৫ ঘণ্টা পূর্বে বিমানবন্দরে উপস্থিত হতে হবে। বিমানবন্দর টার্মিনালে প্রবেশের সময় মূল পাসপোর্ট, কনফার্মড টিকিট ও ভিসার প্রিন্ট কপি সিকিউরিটি গার্ডকে দেখাতে হয়। এরপর সংশ্লিষ্ট এয়ারলাইন্সের চেক-ইন কাউন্টারে গিয়ে লাগেজ ড্রপ করে বোর্ডিং পাস (Boarding Pass) গ্রহণ করতে হবে; মনে রাখবেন ব্যাগেজে অনুমোদিত ওজনের (সাধারণত ২৩ থেকে ৩০ কেজি) বেশি যেন না হয় এবং ব্যাগে কোনো পাওয়ার ব্যাংক বা তরল সামগ্রী রাখা যাবে না। বোর্ডিং পাস পাওয়ার পর ইমিগ্রেশন কাউন্টারে গিয়ে পাসপোর্ট, ভিসা ও বিএমইটি কার্ড প্রদর্শন করতে হবে। ইমিগ্রেশন অফিসারকে শান্ত ও আত্মবিশ্বাসের সাথে প্রশ্নের উত্তর দিন। সবশেষে সিকিউরিটি স্ক্রিনিং পার হয়ে বোর্ডিং গেটে পৌঁছান এবং ফ্লাইটের অন্তত ৪০ মিনিট আগে গেটে উপস্থিত থাকুন।`,
    keyPoints: [
      "ফ্লাইট উড্ডয়নের অন্তত ৪ থেকে ৫ ঘণ্টা আগে বিমানবন্দরে চেক-ইন লাইনে উপস্থিত হোন।",
      "পাওয়ার ব্যাংক, ব্যাটারি বা ল্যাপটপ হ্যান্ড ব্যাগেজে রাখুন, চেক-ইন লাগেজে দেওয়া নিষিদ্ধ।",
      "ইমিগ্রেশন কাউন্টারে আত্মবিশ্বাসের সাথে ভ্রমণের সুনির্দিষ্ট উদ্দেশ্য ও থাকার জায়গা স্পষ্ট করুন।"
    ]
  }
];

const LOCAL_STORAGE_KEY = "visacheck_travel_checklist_v1";

export default function PreDepartureChecklistModal({ isOpen, onClose }: PreDepartureChecklistModalProps) {
  const [mounted, setMounted] = useState(false);
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setCheckedMap(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleToggle = (id: string) => {
    playSweetTune();
    setCheckedMap((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const handleReset = () => {
    playSweetTune();
    if (typeof window !== "undefined" && window.confirm("আপনি কি সব চেকলিস্ট রিসেট করতে চান?")) {
      setCheckedMap({});
      try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } catch {
        // Ignore
      }
    }
  };

  const completedCount = useMemo(() => {
    return Object.values(checkedMap).filter(Boolean).length;
  }, [checkedMap]);

  const percentage = Math.round((completedCount / DEFAULT_CHECKLIST_ITEMS.length) * 100);

  if (!isOpen || !mounted || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-[#090D1A] flex flex-col overflow-hidden text-slate-100">
      {/* ─── Top Header (Starts at top safe area, zero top gap) ─── */}
      <header
        className="shrink-0 px-4 pb-3.5 border-b border-white/10 flex items-center justify-between shadow-lg"
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 12px)",
          background: "linear-gradient(180deg, #1C1917 0%, #0F0D0C 100%)",
          borderBottom: "1.5px solid rgba(245, 158, 11, 0.35)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md shrink-0"
            style={{ background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)" }}
          >
            <CheckSquare className="w-5 h-5 text-[#1B2340]" />
          </div>
          <div>
            <h3
              className="font-bold text-base leading-tight text-[#F1EAD9]"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              বিদেশযাত্রার ডিজিটাল চেকলিস্ট
            </h3>
            <p className="text-[11px] text-[#A0AEC0]">
              ইমিগ্রেশন অফলোড এড়াতে প্রয়োজনীয় প্রস্তুতি
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

      {/* ─── Body (Scrollable, 100% full screen auto-responsive with 2 3D Cards) ─── */}
      <main className="flex-1 overflow-y-auto p-3 sm:p-3.5 scrollbar-none flex flex-col">
        <div className="min-h-full flex flex-col justify-between gap-3 sm:gap-3.5 flex-1">
          {/* ══════════════════════════════════════════════════════════
              ═══ 3D PREMIUM CARD 1: FULL TOOL SECTION (INTERACTIVE) ═══
              ══════════════════════════════════════════════════════════ */}
          <div
            className="w-full rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border flex flex-col justify-between transition-all select-none space-y-3"
            style={{
              background: "linear-gradient(145deg, rgba(20, 29, 54, 0.90) 0%, rgba(10, 16, 32, 0.96) 100%)",
              borderColor: "rgba(245, 158, 11, 0.35)",
              boxShadow: "0 10px 32px rgba(0, 0, 0, 0.50), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Card 1 Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <h4
                  className="text-xs sm:text-sm font-bold text-[#F1EAD9] tracking-wide"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  বিদেশযাত্রার ডিজিটাল চেকলিস্ট
                </h4>
              </div>
              <span
                className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border bg-[rgba(245,158,11,0.15)] border-[#f59e0b] text-[#fbbf24]"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                ইমিগ্রেশন প্রস্তুতি
              </span>
            </div>

            {/* Progress Bar inside Card 1 */}
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center justify-between text-[11.5px] font-bold mb-1">
                  <span className="text-[#F3D89B]" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                    যাত্রার প্রস্তুতি: {completedCount}/{DEFAULT_CHECKLIST_ITEMS.length} সম্পন্ন
                  </span>
                  <span className="text-[#10b981]">{percentage}% প্রস্তুত</span>
                </div>
                <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #10b981 0%, #D9B15C 100%)",
                    }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                title="চেকলিস্ট রিসেট করুন"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#A0AEC0] hover:text-[#f87171] transition-colors shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Category Groups */}
            <div className="space-y-3">
              {["passport_visa", "clearance_medical", "travel_tickets", "personal"].map((catKey) => {
                const items = DEFAULT_CHECKLIST_ITEMS.filter((i) => i.category === catKey);
                const catTitle = items[0]?.categoryTitleBn || "";

                return (
                  <div key={catKey} className="space-y-1.5">
                    <h5
                      className="text-[11.5px] font-bold text-[#D9B15C] flex items-center gap-1.5"
                      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                    >
                      {catKey === "passport_visa" && <FileCheck className="w-3 h-3" />}
                      {catKey === "clearance_medical" && <ShieldCheck className="w-3 h-3" />}
                      {catKey === "travel_tickets" && <Plane className="w-3 h-3" />}
                      {catKey === "personal" && <Sparkles className="w-3 h-3" />}
                      <span>{catTitle}</span>
                    </h5>

                    <div className="space-y-1.5">
                      {items.map((item) => {
                        const isChecked = !!checkedMap[item.id];
                        return (
                          <div
                            key={item.id}
                            onClick={() => handleToggle(item.id)}
                            className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer select-none flex items-start gap-2.5 ${
                              isChecked
                                ? "bg-[#10b981]/10 border-[#10b981]/30 opacity-70"
                                : "bg-white/[0.04] border-white/10 hover:border-white/20 active:scale-[0.99]"
                            }`}
                          >
                            <div className="mt-0.5 shrink-0">
                              {isChecked ? (
                                <div className="w-4.5 h-4.5 rounded-md bg-[#10b981] flex items-center justify-center text-black">
                                  <CheckCircle2 className="w-3 h-3 text-black stroke-[3]" />
                                </div>
                              ) : (
                                <div className="w-4.5 h-4.5 rounded-md border-2 border-[#D9B15C]/60 bg-black/20" />
                              )}
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-xs font-bold leading-snug ${
                                    isChecked ? "text-[#E2E8F0] line-through opacity-80" : "text-white"
                                  }`}
                                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                                >
                                  {item.titleBn}
                                </span>
                                {item.isCrucial && (
                                  <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-[#ef4444]/20 text-[#f87171] border border-[#ef4444]/30 shrink-0">
                                    বাধ্যতামূলক
                                  </span>
                                )}
                              </div>
                              <p className="text-[10.5px] text-[#94A3B8] leading-tight mt-0.5">
                                {item.descBn}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              ═══ 3D PREMIUM CARD 2: TOOL GUIDE CARDS (কী? কেন? কীভাবে?) ═══
              ══════════════════════════════════════════════════════════ */}
          <ToolGuideCards
            sectionTitle="ভ্রমণ নির্দেশিকা (কী? কেন? কীভাবে?)"
            subtitle="অফলোড প্রতিরোধ, বিএমইটি সুরক্ষা ও কাস্টমস নিয়মের পূর্ণাঙ্গ গাইডলাইন"
            theme="amber"
            items={CHECKLIST_GUIDE_ITEMS}
            className="w-full flex-1"
          />
        </div>
      </main>

      {/* ─── Sticky Footer with Attached Copyright Trust Bar ─── */}
      <ToolModalFooter
        onClose={onClose}
        btnGradient="linear-gradient(135deg, #fbbf24 0%, #d97706 100%)"
        btnTextColor="#1E1B18"
      />
    </div>,
    document.body
  );
}
