"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactButton } from "@/components/ui/ContactButton";

// Service type icon component
function ServiceTypeIcon({ type }: { type: "1:1" | "1:More" | "1:Many" }) {
  if (type === "1:1") {
    return (
      <svg viewBox="0 0 64 32" className="w-16 h-8">
        <circle cx="10" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="16" r="3" fill="currentColor" />
        <text x="24" y="20" fontSize="12" fill="currentColor" fontWeight="bold">:</text>
        <circle cx="38" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="38" cy="16" r="3" fill="currentColor" />
      </svg>
    );
  }
  if (type === "1:More") {
    return (
      <svg viewBox="0 0 80 32" className="w-20 h-8">
        <circle cx="10" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="16" r="3" fill="currentColor" />
        <text x="24" y="20" fontSize="12" fill="currentColor" fontWeight="bold">:</text>
        <circle cx="42" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="42" cy="16" r="2" fill="currentColor" />
        <circle cx="56" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="56" cy="10" r="2" fill="currentColor" />
        <circle cx="56" cy="22" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="56" cy="22" r="2" fill="currentColor" />
      </svg>
    );
  }
  // 1:Many
  return (
    <svg viewBox="0 0 80 32" className="w-20 h-8">
      <circle cx="10" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="16" r="3" fill="currentColor" />
      <text x="24" y="20" fontSize="12" fill="currentColor" fontWeight="bold">:</text>
      <circle cx="42" cy="8" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="42" cy="8" r="1.5" fill="currentColor" />
      <circle cx="54" cy="8" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="54" cy="8" r="1.5" fill="currentColor" />
      <circle cx="42" cy="24" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="42" cy="24" r="1.5" fill="currentColor" />
      <circle cx="54" cy="24" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="54" cy="24" r="1.5" fill="currentColor" />
      <circle cx="66" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="66" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

interface ServicePageProps {
  title: string;
  description: string;
  serviceType: "1:1" | "1:More" | "1:Many";
  serviceLabel: string;
  accentColor: string;
  results?: string[];
  clientCase?: string[];
}

export function ServicePageLayout({
  title,
  description,
  serviceType,
  serviceLabel,
  accentColor,
  results,
  clientCase,
}: ServicePageProps) {
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Service type badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="text-[#34323A]/60">
                <ServiceTypeIcon type={serviceType} />
              </div>
              <span
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                {serviceType} — {serviceLabel}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#34323A] tracking-tight">
              {title}
            </h1>

            <motion.div
              className="mt-6 w-24 h-1 origin-left"
              style={{ backgroundColor: accentColor }}
              initial={{ scaleX: 0 }}
              animate={heroInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            />

            <p className="mt-8 text-lg md:text-xl text-[#34323A]/70 leading-relaxed max-w-3xl">
              {description}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Results Section */}
      {results && results.length > 0 && (
        <section className="py-20 md:py-28 bg-[#F7F6F5]">
          <Container size="default">
            <FadeIn>
              <div className="max-w-3xl">
                <span
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: accentColor }}
                >
                  Results
                </span>
                <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#34323A] tracking-tight">
                  What you can expect
                </h2>
                <ul className="mt-10 space-y-5">
                  {results.map((result, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span
                        className="mt-2 w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: accentColor }}
                      />
                      <span className="text-lg text-[#34323A]/80 leading-relaxed">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* Client Case Section */}
      {clientCase && clientCase.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <Container size="default">
            <FadeIn>
              <div className="max-w-3xl">
                <span
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: accentColor }}
                >
                  Client case
                </span>
                <div className="mt-6 space-y-6">
                  {clientCase.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg text-[#34323A]/70 leading-relaxed italic font-[family-name:var(--font-playfair)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#34323A]">
        <Container size="default">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white italic">
                Interested in {title.toLowerCase()}?
              </h2>
              <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
                Let&apos;s explore how we can support your leadership journey.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <ContactButton
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#F7F6F5] text-[#34323A] font-medium hover:bg-[#EFEDEA] transition-colors"
                >
                  Get in touch
                  <span className="text-xl">&rarr;</span>
                </ContactButton>
                <Link
                  href="/collaborate"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  All services
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
