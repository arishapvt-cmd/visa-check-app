"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X, ChevronDown, Zap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(2,8,23,0.95)] backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-lg rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <Globe className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg font-['Syne']">
                  Visa<span className="gradient-text">Check</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                  visacheckapp.net
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink href="/">হোম</NavLink>
              <NavLink href="/countries">সব দেশ</NavLink>
              <NavLink href="/guide">ভিসা গাইড</NavLink>
              <NavLink href="/about">আমাদের সম্পর্কে</NavLink>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="font-medium">Live Data</span>
              </div>
              <Link href="/countries" className="btn-primary text-sm py-2 px-5">
                <Zap className="w-4 h-4" />
                ভিসা চেক করুন
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg glass text-slate-300 hover:text-white transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass border-b border-white/5 md:hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>🏠 হোম</MobileNavLink>
              <MobileNavLink href="/countries" onClick={() => setMobileOpen(false)}>🌍 সব দেশ</MobileNavLink>
              <MobileNavLink href="/guide" onClick={() => setMobileOpen(false)}>📚 ভিসা গাইড</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setMobileOpen(false)}>ℹ️ আমাদের সম্পর্কে</MobileNavLink>
              <div className="pt-2 mt-2 border-t border-white/5">
                <Link
                  href="/countries"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  <Zap className="w-4 h-4" />
                  ভিসা চেক করুন
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-sm text-slate-300 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-4 py-3 text-slate-300 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
    >
      {children}
    </Link>
  );
}
