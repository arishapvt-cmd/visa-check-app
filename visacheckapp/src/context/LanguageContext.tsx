"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

type Lang = "bn" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  /** Shorthand: pass Bangla string first, English second */
  t: (bn: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "bn",
  toggleLang: () => {},
  t: (bn) => bn,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("bn"); // Default: Bangla

  // Hydrate from localStorage on first render
  useEffect(() => {
    try {
      const saved = localStorage.getItem("vc-lang") as Lang | null;
      if (saved === "en" || saved === "bn") setLang(saved);
    } catch {
      // SSR or storage unavailable — keep default
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "bn" ? "en" : "bn";
      try {
        localStorage.setItem("vc-lang", next);
      } catch {}
      return next;
    });
  }, []);

  const t = useCallback(
    (bn: string, en: string) => (lang === "bn" ? bn : en),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
