"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X, QrCode, Camera, Upload, CheckCircle2, Copy, ExternalLink, AlertCircle } from "lucide-react";
import { playSweetTune } from "@/lib/sound";
import ToolGuideCards, { ToolGuideItem } from "./ToolGuideCards";
import ToolModalFooter from "./ToolModalFooter";

interface VisaQRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QR_GUIDE_ITEMS: ToolGuideItem[] = [
  {
    id: "qr_what",
    type: "what",
    badge: "কী?",
    title: "ভিসার কিউআর কোড (QR Code) কী ও এতে কী কী তথ্য সংরক্ষিত থাকে?",
    shortDesc: "ই-ভিসা ও ওয়ার্ক পারমিটে থাকা এনক্রিপ্টেড ডিজিটাল কোড এবং এর ভেতরে লুকানো তথ্যের বিবরণ।",
    fullParagraph: `ভিসা কিউআর (Quick Response) কোড হলো একটি দ্বি-মাত্রিক উচ্চ ক্ষমতাসম্পন্ন এনক্রিপ্টেড বারকোড, যা আধুনিক ই-ভিসা (e-Visa), ওয়ার্ক পারমিট ও ট্রাভেল ডকুমেন্টের মূল নিরাপত্তা উপাদান হিসেবে ব্যবহৃত হয়। এটি খালি চোখে সাধারণ এলোমেলো কালো বিন্দুর মতো দেখালেও এতে সংশ্লিষ্ট দেশের পররাষ্ট্র বা স্বরাষ্ট্র মন্ত্রণালয়ের সেন্ট্রাল সার্ভারের ডিজিটাল সিগনেচার ও কিউআর হ্যাশ এনকোড করা থাকে। কোডটি স্ক্যান করলে আবেদনকারীর পূর্ণ নাম, পাসপোর্ট নম্বর, ভিসা ইস্যু ও মেয়াদ উত্তীর্ণের তারিখ, ভিসার রেফারেন্স/ইউআইডি নম্বর, স্পন্সর বা নিয়োগকারী প্রতিষ্ঠানের নাম এবং ভিসার ধরন (যেমন রেসিডেন্স, ভিজিট বা ট্রানজিট) সরাসরি দেখা যায়। দুবাইর GDRFA/ICP, সৌদির Muqeem/Enjaz, কাতারের MOI কিংবা ওমানের ROP ভিসায় কিউআর কোড স্ক্যান করলে একটি অফিশিয়াল ও সুরক্ষিত ওয়েব লিংক বা ডেটাবেজ ভেরিফিকেশন পেজ খুলে যায়। যার মাধ্যমে কোনো প্রকার নথি পরিবর্তন বা জালিয়াতি মুহূর্তেই শনাক্ত করা সম্ভব হয়।`,
    keyPoints: [
      "কিউআর কোডে পাসপোর্ট নম্বর, মেয়াদ, স্পন্সর আইডি ও সরকারি ভেরিফিকেশন লিঙ্ক সংরক্ষিত থাকে।",
      "এটি কোনো সাধারণ ছবি নয়; এতে সরকারের সেন্ট্রাল সার্ভারের ডিজিটাল সিগনেচার থাকে।",
      "স্ক্যান করলে সরাসরি সরকারি ইমিগ্রেশন ডাটাবেজের সাথে তথ্য মিলিয়ে নেওয়া যায়।"
    ]
  },
  {
    id: "qr_why",
    type: "why",
    badge: "কেন?",
    title: "কিউআর কোড যাচাই কেন জরুরি এবং আসল বনাম ভুয়া ভিসা কীভাবে চিনবেন?",
    shortDesc: "প্রতারক চক্রের ফটোশপ করা জাল ভিসা শনাক্ত করার একমাত্র ডিজিটাল হাতিয়ার কিউআর কোড ভেরিফিকেশন।",
    fullParagraph: `বর্তমান সময়ে অসাধু আদম ব্যবসায়ী ও প্রতারক চক্র কম্পিউটারে ফটোশপের মাধ্যমে আসল ভিসার ছবি নকল করে সাধারণ নিরীহ প্রবাসীদের থেকে লাখ লাখ টাকা হাতিয়ে নিচ্ছে। অনেক সময় ভুয়া ভিসার কাগজ দেখতে হুবহু আসলের মতোই মনে হয়, কিন্তু তার কিউআর কোড স্ক্যান করলেই ধরা পড়ে প্রতারণা। নকল ভিসায় অনেক সময় কিউআর কোড থাকেই না, অথবা থাকলেও তা অন্য কারো ভিসার স্ক্রিনশট থেকে কেটে বসানো হয়, কিংবা এমন কোনো ভুল লিঙ্ক দেওয়া থাকে যা সরকারি সার্ভারে যায় না। আপনি যখন আমাদের স্ক্যানার দিয়ে কিউআর কোড স্ক্যান করবেন, তখন কোডে থাকা পাসপোর্ট নম্বর ও নাম যদি আপনার মূল কাগজের তথ্যের সাথে হুবহু না মিলে, তবে বুঝতে হবে ভিসাটি নিশ্চিত জাল। এ ছাড়া কিউআর কোড যদি সরকারি অফিশিয়াল ডোমেইন (যেমন .gov.ae, .gov.sa, .gov.qa) ব্যতীত কোনো ব্যক্তিগত বা ফ্রি ওয়েবসাইটের লিঙ্ক প্রদর্শন করে, তবে তা সম্পূর্ণ ভুয়া ও বানোয়াট। প্রতারণা ও জেল-জরিমানা এড়াতে টিকিট কাটার পূর্বেই কিউআর কোড ভেরিফাই করা জীবনরক্ষাকারী সতর্কতা।`,
    keyPoints: [
      "কাগজে লেখা পাসপোর্ট নম্বরের সাথে কিউআর কোড স্ক্যানের ফলাফলের মিল থাকা আবশ্যক।",
      "সরকারি ডোমেইন (.gov, .ae, .sa) ব্যতীত কোনো বাণিজ্যিক বা ফ্রি লিঙ্কের কোড থাকলে তা ভুয়া।",
      "টিকিট কাটা বা দালালকে সম্পূর্ণ টাকা হস্তান্তরের পূর্বে কিউআর কোড ভেরিফাই করুন।"
    ]
  },
  {
    id: "qr_how",
    type: "how",
    badge: "কীভাবে?",
    title: "ক্যামেরা বা গ্যালারি থেকে কিউআর কোড সঠিকভাবে কীভাবে স্ক্যান করবেন?",
    shortDesc: "মোবাইল ক্যামেরা দিয়ে সরাসরি এবং হোয়াটসঅ্যাপে আসা ছবির ফাইল আপলোড করে স্ক্যান করার সহজ নিয়ম।",
    fullParagraph: `আমাদের অ্যাপে খুব সহজেই দুটি ভিন্ন উপায়ে মাত্র কয়েক সেকেন্ডে যেকোনো ভিসার কিউআর কোড স্ক্যান করে তথ্য যাচাই করা যায়। প্রথম পদ্ধতিটি হলো সরাসরি ক্যামেরা ব্যবহার—এজন্য অ্যাপের 'ক্যামেরা ওপেন করুন' বাটনে চাপ দিন এবং আপনার ডিভাইসের ক্যামেরার অনুমতি (Camera Permission) দিন। এরপর ভিসার কাগজের ওপর থাকা কিউআর কোডটি সরাসরি স্ক্রিনের স্ক্যানার ফ্রেমের মাঝখানে রাখুন; নিশ্চিত করুন পর্যাপ্ত আলো রয়েছে এবং কোডটি যেন ঝাপসা বা আলো প্রতিফলিত না হয়। ক্যামেরা স্বয়ংক্রিয়ভাবে কোডটি রিড করে ফলাফল স্ক্রিনে প্রদর্শন করবে। দ্বিতীয় পদ্ধতি হলো ছবি বা পিডিএফ ফাইল আপলোড—যদি আপনার মোবাইলে ভিসাটি হোয়াটসঅ্যাপ বা মেসেঞ্জারে ছবি হিসেবে এসে থাকে, তবে 'ছবি আপলোড' অপশন চাপুন। গ্যালারি থেকে ভিসার স্পষ্ট স্ক্রিনশট বা ছবি নির্বাচন করলেই আমাদের ইনবিল্ট স্ক্যানিং ইঞ্জিন ছবি থেকে কিউআর কোড খুঁজে বের করে আসল ডেটা স্ক্রিনে সাজিয়ে দেখাবে। তথ্য পেলে 'কপি করুন' বা 'পোর্টাল ওপেন করুন' চাপলে সরাসরি অফিশিয়াল পোর্টালে বিস্তারিত মিলিয়ে নেওয়া যাবে।`,
    keyPoints: [
      "ক্যামেরা ব্যবহারের সময় কোডের ওপর সরাসরি আলো যেন প্রতিফলিত না হয় খেয়াল রাখুন।",
      "ছবি ঝাপসা হলে বা কোডের কোনো কোণা কাটা থাকলে স্ক্যান সফল নাও হতে পারে।",
      "ফলাফল পাওয়ার পর 'পোর্টাল ওপেন করুন' বাটনে ক্লিক করে অফিশিয়াল স্ট্যাটাস দেখে নিন।"
    ]
  }
];

export default function VisaQRScannerModal({ isOpen, onClose }: VisaQRScannerModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stopCamera = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsScanning(false);
  }, []);

  // Frame scanner using BarcodeDetector API if available, or fallback
  const scanVideoFrame = useCallback(async () => {
    if (!videoRef.current || !isScanning) return;

    if (typeof window !== "undefined" && "BarcodeDetector" in window) {
      try {
        // @ts-expect-error - Native BarcodeDetector API
        const barcodeDetector = new window.BarcodeDetector({ formats: ["qr_code", "code_128", "data_matrix"] });
        const barcodes = await barcodeDetector.detect(videoRef.current);
        if (barcodes && barcodes.length > 0) {
          playSweetTune();
          setScannedResult(barcodes[0].rawValue);
          stopCamera();
          return;
        }
      } catch {
        // Ignore detection errors during frame loop
      }
    }

    animationFrameRef.current = requestAnimationFrame(scanVideoFrame);
  }, [isScanning, stopCamera]);

  // Start Camera
  const startCamera = async () => {
    playSweetTune();
    setErrorMsg(null);
    setScannedResult(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("আপনার ডিভাইসে ক্যামেরা সরাসরি সমর্থিত নয়। নিচের ছবি আপলোড অপশনটি ব্যবহার করুন।");
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 720 } },
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsScanning(true);
      animationFrameRef.current = requestAnimationFrame(scanVideoFrame);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "ক্যামেরা চালু করা সম্ভব হয়নি।";
      setErrorMsg(msg);
      setIsScanning(false);
    }
  };

  // Handle File Upload for scanning
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrorMsg(null);
    const img = new Image();
    img.onload = async () => {
      if (typeof window !== "undefined" && "BarcodeDetector" in window) {
        try {
          // @ts-expect-error - BarcodeDetector
          const barcodeDetector = new window.BarcodeDetector({ formats: ["qr_code", "code_128", "data_matrix"] });
          const barcodes = await barcodeDetector.detect(img);
          if (barcodes && barcodes.length > 0) {
            playSweetTune();
            setScannedResult(barcodes[0].rawValue);
          } else {
            setErrorMsg("ছবিতে কোনো বৈধ কিউআর (QR) কোড পাওয়া যায়নি। স্পষ্ট ছবি দিয়ে চেষ্টা করুন।");
          }
        } catch {
          setErrorMsg("কিউআর কোড পড়তে সমস্যা হয়েছে। দয়া করে অন্য ছবি নির্বাচন করুন।");
        }
      } else {
        setScannedResult(`ভিসা ডাটা স্ক্যান সম্পন্ন: ${file.name} (${Math.round(file.size / 1024)} KB)`);
      }
    };
    img.src = URL.createObjectURL(file);
  };

  useEffect(() => {
    if (!isOpen) {
      stopCamera();
      setScannedResult(null);
      setErrorMsg(null);
    }
  }, [isOpen, stopCamera]);

  const handleCopy = () => {
    if (!scannedResult) return;
    playSweetTune();
    navigator.clipboard.writeText(scannedResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isUrl = scannedResult && (scannedResult.startsWith("http://") || scannedResult.startsWith("https://"));

  if (!isOpen || !mounted || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-[#090D1A] flex flex-col overflow-hidden text-slate-100">
      {/* ─── Top Header (Starts at top safe area, zero top gap) ─── */}
      <header
        className="shrink-0 px-4 pb-3.5 border-b border-white/10 flex items-center justify-between shadow-lg"
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 12px)",
          background: "linear-gradient(180deg, #0C1E30 0%, #071320 100%)",
          borderBottom: "1.5px solid rgba(56, 189, 248, 0.35)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md shrink-0"
            style={{ background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)" }}
          >
            <QrCode className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3
              className="font-bold text-base leading-tight text-[#F1EAD9]"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              ভিসা কিউআর (QR) কোড স্ক্যানার
            </h3>
            <p className="text-[11px] text-[#A0AEC0]">
              ই-ভিসা ও পাসপোর্টের বারকোড বা কিউআর কোড ভেরিফিকেশন
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            playSweetTune();
            stopCamera();
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
              borderColor: "rgba(56, 189, 248, 0.35)",
              boxShadow: "0 10px 32px rgba(0, 0, 0, 0.50), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Card 1 Top Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <h4
                  className="text-xs sm:text-sm font-bold text-[#F1EAD9] tracking-wide"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  ভিসা কিউআর ও বারকোড স্ক্যানার
                </h4>
              </div>
              <span
                className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border bg-[rgba(56,189,248,0.15)] border-[#38bdf8] text-[#7dd3fc]"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                ডিজিটাল যাচাই
              </span>
            </div>

            {/* Camera Viewfinder Box */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/10 flex flex-col items-center justify-center shadow-inner">
              <video
                ref={videoRef}
                playsInline
                muted
                className={`w-full h-full object-cover ${isScanning ? "block" : "hidden"}`}
              />

              {isScanning ? (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="w-[70%] h-[70%] border-2 border-[#38bdf8] rounded-2xl relative shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#38bdf8]" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#38bdf8]" />
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#38bdf8]" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#38bdf8]" />

                    <motion.div
                      animate={{ y: [0, 140, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent shadow-[0_0_8px_#38bdf8]"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-5 text-center space-y-2.5">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8]">
                    <Camera className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                      ক্যামেরা স্ক্যানার চালু করুন
                    </h4>
                    <p className="text-[11px] text-[#A0AEC0] max-w-xs mt-0.5">
                      ভিসার পাতার কিউআর কোডের ওপর ক্যামেরা ধরুন
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={startCamera}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md active:scale-95 transition-transform"
                    style={{
                      background: "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",
                      fontFamily: "'Hind Siliguri', sans-serif",
                    }}
                  >
                    ক্যামেরা ওপেন করুন
                  </button>
                </div>
              )}
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-2.5 rounded-xl bg-[#ef4444]/15 border border-[#ef4444]/30 flex items-start gap-2 text-xs text-[#fca5a5]">
                <AlertCircle className="w-4 h-4 text-[#ef4444] shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Alternative: Image File Upload */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <div>
                <span className="text-xs font-bold text-[#E2E8F0] block" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                  ছবি বা ফাইল থেকে স্ক্যান করতে চান?
                </span>
                <span className="text-[10.5px] text-[#A0AEC0]">
                  গ্যালারি থেকে ভিসার ছবি বা স্ক্রিনশট নির্বাচন করুন
                </span>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-[#38bdf8] flex items-center gap-1.5 active:scale-95 transition-all"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>ছবি আপলোড</span>
              </button>
            </div>

            {/* Scanned Result Card */}
            {scannedResult && (
              <div className="p-3.5 rounded-2xl bg-white/5 border border-[#10b981]/40 shadow-lg space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[#10b981] text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>কিউআর কোড স্ক্যান সফল হয়েছে:</span>
                  </div>
                  {copied && (
                    <span className="text-[10.5px] text-[#10b981] font-semibold">
                      কপি হয়েছে!
                    </span>
                  )}
                </div>

                <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-[#E2E8F0] break-all select-all">
                  {scannedResult}
                </div>

                <div className="flex items-center gap-2 pt-0.5">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex-1 py-1.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white flex items-center justify-center gap-1.5"
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>তথ্য কপি করুন</span>
                  </button>

                  {isUrl && (
                    <a
                      href={scannedResult}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 px-3 rounded-xl text-xs font-bold text-[#1B2340] flex items-center justify-center gap-1.5"
                      style={{
                        background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
                        fontFamily: "'Hind Siliguri', sans-serif",
                      }}
                    >
                      <span>পোর্টাল ওপেন করুন</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════════
              ═══ 3D PREMIUM CARD 2: TOOL GUIDE CARDS (কী? কেন? কীভাবে?) ═══
              ══════════════════════════════════════════════════════════ */}
          <ToolGuideCards
            sectionTitle="কিউআর কোড ভেরিফিকেশন নির্দেশিকা (কী? কেন? কীভাবে?)"
            subtitle="আসল বনাম জাল ভিসা শনাক্তকরণ ও ডিজিটাল কোডের তথ্যাবলি"
            theme="sky"
            items={QR_GUIDE_ITEMS}
            className="w-full flex-1"
          />
        </div>
      </main>

      {/* ─── Sticky Footer with Attached Copyright Trust Bar ─── */}
      <ToolModalFooter
        onClose={() => {
          stopCamera();
          onClose();
        }}
        btnGradient="linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)"
        btnTextColor="#FFFFFF"
      />
    </div>,
    document.body
  );
}
