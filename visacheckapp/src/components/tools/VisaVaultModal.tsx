"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, FolderLock, Plus, Trash2, ShieldCheck, AlertTriangle, ShieldAlert, User } from "lucide-react";
import { playSweetTune } from "@/lib/sound";

interface VisaVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface VaultItem {
  id: string;
  name: string;
  passportNumber: string;
  countryName: string;
  visaType: string;
  expiryDate: string;
  visaNumber?: string;
}

const VAULT_STORAGE_KEY = "visacheck_vault_items_v1";

export default function VisaVaultModal({ isOpen, onClose }: VisaVaultModalProps) {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<VaultItem[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [countryName, setCountryName] = useState("সৌদি আরব");
  const [visaType, setVisaType] = useState("কাজের ভিসা / আকামা");
  const [expiryDate, setExpiryDate] = useState("");
  const [visaNumber, setVisaNumber] = useState("");

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(VAULT_STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  const saveItems = (newItems: VaultItem[]) => {
    setItems(newItems);
    try {
      localStorage.setItem(VAULT_STORAGE_KEY, JSON.stringify(newItems));
    } catch {
      // Ignore
    }
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !passportNumber.trim() || !expiryDate) {
      alert("অনুগ্রহ করে নাম, পাসপোর্ট নম্বর ও শেষ মেয়াদের তারিখ পূরণ করুন।");
      return;
    }

    playSweetTune();
    const newItem: VaultItem = {
      id: Date.now().toString(),
      name: name.trim(),
      passportNumber: passportNumber.trim().toUpperCase(),
      countryName,
      visaType,
      expiryDate,
      visaNumber: visaNumber.trim() || undefined,
    };

    saveItems([newItem, ...items]);
    // Reset form
    setName("");
    setPassportNumber("");
    setExpiryDate("");
    setVisaNumber("");
    setShowAddForm(false);
  };

  const handleDeleteItem = (id: string) => {
    playSweetTune();
    if (confirm("আপনি কি এই ভিসা রেকর্ডটি মুছে ফেলতে চান?")) {
      saveItems(items.filter((i) => i.id !== id));
    }
  };

  const getValidityStatus = (dateStr: string) => {
    const expiry = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    expiry.setHours(0, 0, 0, 0);

    const diffDays = Math.floor((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return {
        label: `মেয়াদোত্তীর্ণ (${Math.abs(diffDays)} দিন পার)`,
        color: "#ef4444",
        bg: "rgba(239, 68, 68, 0.15)",
        border: "rgba(239, 68, 68, 0.35)",
        icon: ShieldAlert,
      };
    } else if (diffDays <= 90) {
      return {
        label: `জরুরি সতর্কবার্তা — মেয়াদ বাকি: ${diffDays} দিন`,
        color: "#f59e0b",
        bg: "rgba(245, 158, 11, 0.15)",
        border: "rgba(245, 158, 11, 0.35)",
        icon: AlertTriangle,
      };
    } else {
      return {
        label: `নিরাপদ — মেয়াদ বাকি: ${diffDays} দিন`,
        color: "#10b981",
        bg: "rgba(16, 185, 129, 0.15)",
        border: "rgba(16, 185, 129, 0.35)",
        icon: ShieldCheck,
      };
    }
  };

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
              <FolderLock className="w-5 h-5 text-[#1B2340]" />
            </div>
            <div>
              <h3
                className="font-bold text-base leading-tight text-[#F1EAD9]"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                আমার ভিসা ও পাসপোর্ট ভল্ট
              </h3>
              <p className="text-[11px] text-[#A0AEC0]">
                অফলাইনে নিজের পাসপোর্ট ও ভিসার তথ্য ও মেয়াদ অ্যালার্ট
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

        {/* Action Bar: Add Record Button */}
        <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between shrink-0">
          <span className="text-xs font-bold text-[#E2E8F0]" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
            সংরক্ষিত তথ্য: {items.length}টি
          </span>

          <button
            type="button"
            onClick={() => {
              playSweetTune();
              setShowAddForm(!showAddForm);
            }}
            className="px-3 py-1.5 rounded-xl text-xs font-bold text-[#1B2340] flex items-center gap-1.5 shadow-md active:scale-95"
            style={{
              background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)",
              fontFamily: "'Hind Siliguri', sans-serif",
            }}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{showAddForm ? "বাতিল" : "নতুন তথ্য যোগ করুন"}</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-4 overflow-y-auto space-y-3.5 flex-1 scrollbar-none">
          {/* Add Record Form */}
          {showAddForm && (
            <form
              onSubmit={handleAddItem}
              className="p-4 rounded-2xl bg-[#0e1428] border border-[#D9B15C]/40 shadow-xl space-y-3"
            >
              <h4 className="text-xs font-bold text-[#F3D89B] flex items-center gap-1.5" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                <Plus className="w-4 h-4 text-[#D9B15C]" />
                <span>নতুন ভিসা বা পাসপোর্ট তথ্য সংরক্ষণ করুন</span>
              </h4>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-[#CBD5E1] mb-1">ব্যক্তির নাম:</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="যেমন: মোঃ কামরুল হাসান"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white outline-none focus:border-[#D9B15C]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#CBD5E1] mb-1">পাসপোর্ট নম্বর:</label>
                  <input
                    type="text"
                    required
                    value={passportNumber}
                    onChange={(e) => setPassportNumber(e.target.value)}
                    placeholder="যেমন: A01234567"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white uppercase outline-none focus:border-[#D9B15C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-[#CBD5E1] mb-1">দেশ:</label>
                  <select
                    value={countryName}
                    onChange={(e) => setCountryName(e.target.value)}
                    className="w-full bg-[#1A223E] border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white outline-none"
                  >
                    <option value="সৌদি আরব">সৌদি আরব</option>
                    <option value="দুবাই / ইউএই">দুবাই / ইউএই</option>
                    <option value="মালয়েশিয়া">মালয়েশিয়া</option>
                    <option value="কাতার">কাতার</option>
                    <option value="কুয়েত">কুয়েত</option>
                    <option value="ওমান">ওমান</option>
                    <option value="সিঙ্গাপুর">সিঙ্গাপুর</option>
                    <option value="ইতালি">ইতালি</option>
                    <option value="যুক্তরাজ্য (UK)">যুক্তরাজ্য (UK)</option>
                    <option value="অন্যান্য">অন্যান্য</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#CBD5E1] mb-1">ভিসার ধরন:</label>
                  <select
                    value={visaType}
                    onChange={(e) => setVisaType(e.target.value)}
                    className="w-full bg-[#1A223E] border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white outline-none"
                  >
                    <option value="কাজের ভিসা / আকামা">কাজের ভিসা / আকামা</option>
                    <option value="ট্যুরিস্ট / ভিজিট ভিসা">ট্যুরিস্ট / ভিজিট ভিসা</option>
                    <option value="স্টুডেন্ট ভিসা">স্টুডেন্ট ভিসা</option>
                    <option value="বিজনেস ভিসা">বিজনেস ভিসা</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-[#CBD5E1] mb-1">ভিসা শেষ মেয়াদ (Expiry):</label>
                  <input
                    type="date"
                    required
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white outline-none focus:border-[#D9B15C]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#CBD5E1] mb-1">ভিসা/আইডি নম্বর (ঐচ্ছিক):</label>
                  <input
                    type="text"
                    value={visaNumber}
                    onChange={(e) => setVisaNumber(e.target.value)}
                    placeholder="যেমন: ইকামা বা ভিসা নম্বর"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-3.5 py-1.5 rounded-xl bg-white/10 text-xs font-semibold text-[#A0AEC0]"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl text-xs font-bold text-[#1B2340]"
                  style={{ background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)" }}
                >
                  সেভ করুন
                </button>
              </div>
            </form>
          )}

          {/* List of Saved Items */}
          {items.length > 0 ? (
            items.map((item) => {
              const status = getValidityStatus(item.expiryDate);
              const StatusIcon = status.icon;

              return (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/10 shadow-md space-y-2 relative"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-white flex items-center gap-1.5" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                        <User className="w-3.5 h-3.5 text-[#D9B15C]" />
                        <span>{item.name}</span>
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-[#A0AEC0] mt-0.5">
                        <span className="font-mono text-white font-bold">{item.passportNumber}</span>
                        <span>•</span>
                        <span>{item.countryName}</span>
                        <span>•</span>
                        <span>{item.visaType}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDeleteItem(item.id)}
                      className="p-1.5 rounded-lg text-[#A0AEC0] hover:text-[#f87171] hover:bg-white/5 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Status Badge */}
                  <div
                    className="px-3 py-1.5 rounded-xl flex items-center justify-between text-xs font-bold"
                    style={{
                      background: status.bg,
                      border: `1px solid ${status.border}`,
                      color: status.color,
                      fontFamily: "'Hind Siliguri', sans-serif",
                    }}
                  >
                    <div className="flex items-center gap-1.5">
                      <StatusIcon className="w-3.5 h-3.5" />
                      <span>{status.label}</span>
                    </div>
                    <span className="text-[11px] font-mono opacity-80">{item.expiryDate}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 px-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <FolderLock className="w-10 h-10 text-[#D9B15C] mx-auto opacity-50" />
              <h4 className="font-bold text-sm text-white" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                কোনো ভিসা বা পাসপোর্ট সংরক্ষিত নেই
              </h4>
              <p className="text-xs text-[#A0AEC0] max-w-xs mx-auto">
                আপনার বা পরিবারের পাসপোর্ট ও ভিসার তথ্য অফলাইনে সেভ করে রাখুন যাতে মেয়াদ শেষ হওয়ার আগেই সতর্কবার্তা পান।
              </p>
              <button
                type="button"
                onClick={() => setShowAddForm(true)}
                className="mt-2 px-4 py-1.5 rounded-xl text-xs font-bold text-[#1B2340]"
                style={{ background: "linear-gradient(135deg, #F3D89B 0%, #D9B15C 100%)" }}
              >
                প্রথম তথ্য যোগ করুন
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-white/10 bg-black/20 flex items-center justify-between shrink-0">
          <span className="text-[10.5px] text-[#A0AEC0]">
            🔒 ১০০% অফলাইন ও নিরাপদ (ডাটা শুধু আপনার ফোনেই থাকবে)
          </span>
          <button
            type="button"
            onClick={() => {
              playSweetTune();
              onClose();
            }}
            className="px-5 py-2 rounded-xl text-xs font-bold text-[#1B2340]"
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
