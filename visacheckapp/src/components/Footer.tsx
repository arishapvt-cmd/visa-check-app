"use client";

import Link from "next/link";
import { Globe, Mail, Shield, Heart } from "lucide-react";

const footerLinks = {
  countries: [
    { label: "🇮🇳 ভারত ভিসা", href: "/countries/india" },
    { label: "🇸🇦 সৌদি আরব ভিসা", href: "/countries/saudi-arabia" },
    { label: "🇦🇪 UAE ভিসা", href: "/countries/uae" },
    { label: "🇲🇾 মালয়েশিয়া ভিসা", href: "/countries/malaysia" },
    { label: "🇸🇬 সিঙ্গাপুর ভিসা", href: "/countries/singapore" },
    { label: "🇹🇭 থাইল্যান্ড ভিসা", href: "/countries/thailand" },
  ],
  moreCountries: [
    { label: "🇬🇧 যুক্তরাজ্য ভিসা", href: "/countries/uk" },
    { label: "🇺🇸 USA ভিসা", href: "/countries/usa" },
    { label: "🇨🇦 কানাডা ভিসা", href: "/countries/canada" },
    { label: "🇦🇺 অস্ট্রেলিয়া ভিসা", href: "/countries/australia" },
    { label: "🇶🇦 কাতার ভিসা", href: "/countries/qatar" },
    { label: "🇹🇷 তুরস্ক ভিসা", href: "/countries/turkey" },
  ],
  resources: [
    { label: "ভিসা গাইড", href: "/guide" },
    { label: "প্রায়ই জিজ্ঞাসিত প্রশ্ন", href: "/faq" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
    { label: "যোগাযোগ", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-xl rotate-6" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <Globe className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-white font-bold text-xl font-['Syne']">
                Visa<span className="gradient-text">Check</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              বাংলাদেশ থেকে বিশ্বের শীর্ষ ২০টি দেশের ভিসার তথ্য একটি প্ল্যাটফর্মে। সরকারি সূত্র থেকে সরাসরি ১০০% বিশ্বস্ত তথ্য।
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full w-fit">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span>সরকারি সূত্র থেকে Live Data</span>
            </div>
          </div>

          {/* Popular Countries */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">জনপ্রিয় দেশসমূহ</h3>
            <ul className="space-y-2">
              {footerLinks.countries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Countries */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">আরও দেশ</h3>
            <ul className="space-y-2">
              {footerLinks.moreCountries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">সহায়তা</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Shield className="w-4 h-4 text-sky-400" />
              <span>১০০% নিরাপদ ও বিশ্বস্ত</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2024 VisaCheckApp.net — সর্বস্বত্ব সংরক্ষিত। সকল তথ্য সরকারি পোর্টাল থেকে সংগৃহীত।
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <span>বাংলাদেশিদের জন্য তৈরি</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
