"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { LanguageProvider } from "@/lib/i18n";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ContactFormProvider } from "@/lib/contact-form-context";
import { ConsentProvider } from "@/lib/consent-context";
import { FloatingContactForm } from "@/components/forms/FloatingContactForm";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Analytics } from "@/components/layout/Analytics";

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideFloatingForm = pathname === "/contact";
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <LanguageProvider>
      <ConsentProvider>
        <ContactFormProvider>
          <CustomCursor />
          {children}
          {!hideFloatingForm && <FloatingContactForm />}
          <CookieConsent />
          <Analytics />
        </ContactFormProvider>
      </ConsentProvider>
    </LanguageProvider>
  );
}
