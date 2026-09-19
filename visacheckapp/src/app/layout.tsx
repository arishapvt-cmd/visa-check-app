import type { Metadata, Viewport } from "next";
import "./globals.css";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import GlassyBackButton from "@/components/GlassyBackButton";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "VisaCheck — বিশ্বের ২০টি দেশের ভিসা স্ট্যাটাস চেক করুন",
  description:
    "বাংলাদেশ থেকে ভারত, সৌদি আরব, UAE, মালয়েশিয়া, USA সহ ২০টি দেশের ভিসা স্ট্যাটাস তাৎক্ষণিকভাবে চেক করুন।",
  keywords: "ভিসা চেক, visa check bangladesh, ভারত ভিসা, সৌদি ভিসা, UAE ভিসা",
  metadataBase: new URL("https://visacheckapp.net"),
  icons: {
    icon: [
      { url: "/favicon.ico",        sizes: "any" },
      { url: "/favicon-32x32.png",  type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png",  type: "image/png", sizes: "16x16" },
      { url: "/logo512.png",        type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "VisaCheck — ভিসা স্ট্যাটাস চেক করুন",
    description: "বাংলাদেশিদের জন্য বিশ্বের ২০টি দেশের ভিসা তথ্য",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#020817",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Syne:wght@400..800&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        style={{
          fontFamily: "'Plus Jakarta Sans', 'Hind Siliguri', sans-serif",
          backgroundColor: "var(--bg-page)",
          color: "var(--text-primary)",
          minHeight: "100dvh",
          overflowX: "hidden",
          transition: "background-color 0.35s ease, color 0.35s ease",
        }}
      >
        <LanguageProvider>
          <ThemeProvider>
            {/* Sticky App Header — always on top */}
            <AppHeader />

            {/* Glassy Back Button — right side middle, hidden on homepage */}
            <GlassyBackButton />

            {/* Main content — padded for header + bottom nav */}
            <main style={{ minHeight: "100dvh" }}>
              {children}
            </main>

            {/* Bottom Navigation — always visible */}
            <BottomNav />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
