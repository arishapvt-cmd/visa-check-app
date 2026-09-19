"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  isDark: true,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  // Helper to sync native Android system navigation and status bar icons
  const syncNativeBars = (isDarkTheme: boolean) => {
    if (typeof window !== "undefined" && (window as any).AndroidBridge?.setSystemBarsTheme) {
      try {
        (window as any).AndroidBridge.setSystemBarsTheme(isDarkTheme);
      } catch (_) {}
    }
  };

  // Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("visacheck-theme") as Theme | null;
    const initialTheme: Theme = saved === "light" || saved === "dark" ? saved : "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    syncNativeBars(initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("visacheck-theme", next);
    document.documentElement.setAttribute("data-theme", next);
    syncNativeBars(next === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
