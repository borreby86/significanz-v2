"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1a1a1a] text-white py-16 md:py-20">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Left - Contact info */}
          <div>
            <h3 className="font-medium text-white mb-6">
              {t.footer.workWithUs}
            </h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <a
                href="mailto:welcome@significanz.dk"
                className="block hover:text-white transition-colors"
              >
                welcome@significanz.dk
              </a>
              <p>{t.footer.location}</p>
              <Link
                href="/contact"
                className="block hover:text-white transition-colors mt-4"
              >
                {t.footer.privacyPolicy}
              </Link>
            </div>
          </div>

          {/* Center - Logo */}
          <div className="text-center">
            <Link
              href="/"
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl tracking-tight hover:text-gray-300 transition-colors inline-block"
            >
              Significanz
            </Link>
          </div>

          {/* Right - Social */}
          <div className="md:text-right">
            <h3 className="font-medium text-white mb-6">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-3 md:justify-end">
              {/* LinkedIn */}
              <a
                href="https://dk.linkedin.com/in/stinne-madsen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              {new Date().getFullYear()}, Significanz
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
