"use client";

import { AnimatePresence, motion } from "motion/react";
import { useConsent } from "@/lib/consent-context";

export function CookieConsent() {
  const { isBannerOpen, setConsent, hydrated } = useConsent();

  return (
    <AnimatePresence>
      {hydrated && isBannerOpen && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 inset-x-0 z-[60] px-4 pb-4 md:px-6 md:pb-6 pointer-events-none"
        >
          <div className="pointer-events-auto mx-auto max-w-5xl bg-[#34323A]/95 backdrop-blur-md text-[#F7F6F5] shadow-2xl border border-white/10">
            <div className="px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              <div className="flex-1 text-sm leading-relaxed text-[#F7F6F5]/85">
                We use strictly necessary cookies to run this site. With your consent, we also use
                analytics cookies to understand how the site is used and to improve it. See our{" "}
                <a
                  href="/privacy-policy"
                  className="underline hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                .
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:shrink-0">
                <button
                  type="button"
                  onClick={() => setConsent("denied")}
                  className="px-5 py-2.5 text-sm font-medium border border-[#F7F6F5]/30 text-[#F7F6F5] hover:bg-[#F7F6F5]/10 transition-colors"
                >
                  Only necessary
                </button>
                <button
                  type="button"
                  onClick={() => setConsent("granted")}
                  className="px-5 py-2.5 text-sm font-medium bg-[#A12F63] text-white hover:bg-[#8a2854] transition-colors"
                >
                  Accept analytics
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
