"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { useTranslation } from "@/lib/i18n";

interface UnderConstructionProps {
  title: string;
}

export function UnderConstruction({ title }: UnderConstructionProps) {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F7F6F5]">
      <Container size="narrow" className="text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-[#A12F63]/10 flex items-center justify-center">
              <svg
                viewBox="0 0 64 64"
                className="w-12 h-12 text-[#A12F63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="32" cy="32" r="28" strokeDasharray="8 4" />
                <path d="M32 20v16" strokeLinecap="round" />
                <circle cx="32" cy="44" r="2" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Page title */}
          <span className="text-[#A12F63] text-sm font-medium uppercase tracking-wider">
            {title}
          </span>

          {/* Coming Soon */}
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-[#34323A] italic">
            {t.underConstruction.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-xl md:text-2xl text-[#34323A]/70 max-w-lg mx-auto">
            {t.underConstruction.subtitle}
          </p>

          {/* Description */}
          <p className="mt-4 text-lg text-[#34323A]/50">
            {t.underConstruction.description}
          </p>

          {/* Action buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#34323A] text-white hover:bg-[#4A484F] transition-colors"
            >
              <span>←</span>
              {t.underConstruction.backToHome}
            </Link>
            <Link
              href="/collaborate"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#34323A]/20 text-[#34323A] hover:bg-[#34323A]/5 transition-colors"
            >
              {t.underConstruction.exploreCollaborate}
              <span>→</span>
            </Link>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#A12F63]/5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#BFA27A]/5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </Container>
    </section>
  );
}
