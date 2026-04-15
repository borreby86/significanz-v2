"use client";

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";

export type ConsentValue = "granted" | "denied";

interface ConsentCtx {
  consent: ConsentValue | null;
  setConsent: (value: ConsentValue) => void;
  openPreferences: () => void;
  closeBanner: () => void;
  isBannerOpen: boolean;
  hydrated: boolean;
}

const Ctx = createContext<ConsentCtx | null>(null);
const STORAGE_KEY = "cookie-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushConsentUpdate(value: ConsentValue) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ConsentValue | null>(null);
  const [isBannerOpen, setBannerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "granted" || saved === "denied") {
        setConsentState(saved);
        pushConsentUpdate(saved);
      } else {
        setBannerOpen(true);
      }
    } catch {
      setBannerOpen(true);
    }
    setHydrated(true);
  }, []);

  const setConsent = useCallback((value: ConsentValue) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setConsentState(value);
    setBannerOpen(false);
    pushConsentUpdate(value);
  }, []);

  const openPreferences = useCallback(() => setBannerOpen(true), []);
  const closeBanner = useCallback(() => setBannerOpen(false), []);

  return (
    <Ctx.Provider
      value={{ consent, setConsent, openPreferences, closeBanner, isBannerOpen, hydrated }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useConsent must be used inside ConsentProvider");
  return ctx;
}
