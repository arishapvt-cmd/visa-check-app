"use client";

/**
 * useAndroidBridge — hook for calling native Android features from Next.js
 *
 * Safely detects whether the app is running inside the Android WebView shell.
 * In a browser (localhost / web), all methods are no-ops or fallbacks.
 */

declare global {
  interface Window {
    AndroidBridge?: {
      shareContent: (title: string, text: string) => void;
      openExternalUrl: (url: string) => void;
      openGovPortal: (url: string, title: string, countryName: string) => void;
      openGovPortalWithGuide?: (
        url: string,
        title: string,
        countryName: string,
        guideTitle: string,
        guideSubtitle: string,
        passportNo?: string,
        appNo?: string
      ) => void;
      openGovPortalWithData?: (
        url: string,
        title: string,
        countryName: string,
        guideTitle: string,
        guideSubtitle: string,
        passportNo: string,
        appNo: string
      ) => void;
      copyToClipboard?: (label: string, text: string) => void;
      saveFavorite: (countryId: string) => void;
      removeFavorite: (countryId: string) => void;
      isFavorite: (countryId: string) => boolean;
      getFavorites: () => string; // JSON array string
      hapticFeedback: () => void;
      getAppVersion: () => string;
      isAndroidApp: () => boolean;
    };
  }
}

export function useAndroidBridge() {
  const isAndroid = typeof window !== "undefined" && !!window.AndroidBridge;

  /** Share visa info via native Android share sheet */
  const shareContent = (title: string, text: string) => {
    if (isAndroid && window.AndroidBridge) {
      window.AndroidBridge.shareContent(title, text);
    } else {
      // Browser fallback — Web Share API
      if (navigator.share) {
        navigator.share({ title, text }).catch(() => {});
      } else {
        // Clipboard fallback
        navigator.clipboard?.writeText(`${title}\n\n${text}`).catch(() => {});
      }
    }
  };

  /** Save a country to favorites */
  const saveFavorite = (countryId: string) => {
    if (isAndroid && window.AndroidBridge) {
      window.AndroidBridge.saveFavorite(countryId);
      window.AndroidBridge.hapticFeedback?.();
    } else {
      // Browser fallback — localStorage
      const favs = getBrowserFavorites();
      if (!favs.includes(countryId)) {
        localStorage.setItem("favorites", JSON.stringify([...favs, countryId]));
      }
    }
  };

  /** Remove a country from favorites */
  const removeFavorite = (countryId: string) => {
    if (isAndroid && window.AndroidBridge) {
      window.AndroidBridge.removeFavorite(countryId);
      window.AndroidBridge.hapticFeedback?.();
    } else {
      const favs = getBrowserFavorites().filter((id) => id !== countryId);
      localStorage.setItem("favorites", JSON.stringify(favs));
    }
  };

  /** Check if a country is a favorite */
  const isFavorite = (countryId: string): boolean => {
    if (isAndroid && window.AndroidBridge) {
      return window.AndroidBridge.isFavorite(countryId);
    }
    return getBrowserFavorites().includes(countryId);
  };

  /** Get all saved favorites as array */
  const getFavorites = (): string[] => {
    if (isAndroid && window.AndroidBridge) {
      try {
        return JSON.parse(window.AndroidBridge.getFavorites()) as string[];
      } catch {
        return [];
      }
    }
    return getBrowserFavorites();
  };

  /** Trigger native haptic vibration */
  const hapticFeedback = () => {
    if (isAndroid && window.AndroidBridge) {
      window.AndroidBridge.hapticFeedback();
    }
  };

  /** Open official government portal in seamless native in-app portal activity */
  const openGovPortal = (
    url: string,
    title?: string,
    countryName?: string,
    guideTitle?: string,
    guideSubtitle?: string,
    passportNo?: string,
    appNo?: string
  ) => {
    if (isAndroid && window.AndroidBridge) {
      if (window.AndroidBridge.openGovPortalWithData) {
        window.AndroidBridge.openGovPortalWithData(
          url,
          title || "ভিসা স্ট্যাটাস যাচাই",
          countryName || "সরকারি পোর্টাল",
          guideTitle || "",
          guideSubtitle || "",
          passportNo || "",
          appNo || ""
        );
      } else if (window.AndroidBridge.openGovPortalWithGuide) {
        window.AndroidBridge.openGovPortalWithGuide(
          url,
          title || "ভিসা স্ট্যাটাস যাচাই",
          countryName || "সরকারি পোর্টাল",
          guideTitle || "",
          guideSubtitle || "",
          passportNo,
          appNo
        );
      } else if (window.AndroidBridge.openGovPortal) {
        window.AndroidBridge.openGovPortal(
          url,
          title || "ভিসা স্ট্যাটাস যাচাই",
          countryName || "সরকারি পোর্টাল"
        );
      }
    } else if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  /** Copy text to clipboard and trigger native Android toast or browser clipboard */
  const copyToClipboard = (label: string, text: string) => {
    if (!text) return;
    if (isAndroid && window.AndroidBridge?.copyToClipboard) {
      window.AndroidBridge.copyToClipboard(label, text);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
  };

  /** Open external URL */
  const openExternalUrl = (url: string) => {
    if (isAndroid && window.AndroidBridge?.openExternalUrl) {
      window.AndroidBridge.openExternalUrl(url);
    } else if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  return {
    isAndroid,
    shareContent,
    openGovPortal,
    copyToClipboard,
    openExternalUrl,
    saveFavorite,
    removeFavorite,
    isFavorite,
    getFavorites,
    hapticFeedback,
  };
}

// ── Browser helpers ────────────────────────────────────────────────────────
function getBrowserFavorites(): string[] {
  try {
    return JSON.parse(localStorage.getItem("favorites") ?? "[]") as string[];
  } catch {
    return [];
  }
}
