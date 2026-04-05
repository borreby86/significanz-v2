"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactButton } from "@/components/ui/ContactButton";

// Person silhouette path (head + shoulders)
const personPath = (cx: number, cy: number, scale = 1) => `
  M ${cx} ${cy - 5 * scale}
  a ${3 * scale} ${3 * scale} 0 1 0 0.01 0
  M ${cx - 4.5 * scale} ${cy + 4 * scale}
  a ${6 * scale} ${6 * scale} 0 0 1 ${9 * scale} 0
`;

// Service type icon component — person silhouettes for clarity
function ServiceTypeIcon({ type }: { type: "1:1" | "1:More" | "1:Many" }) {
  if (type === "1:1") {
    // Two people facing each other with a subtle connection line
    return (
      <svg viewBox="0 0 56 28" className="w-14 h-7">
        <path d={personPath(14, 14)} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d={personPath(42, 14)} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
      </svg>
    );
  }
  if (type === "1:More") {
    // One person + small team (3 people grouped)
    return (
      <svg viewBox="0 0 72 28" className="w-[72px] h-7">
        <path d={personPath(12, 14)} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="14" x2="30" y2="14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
        <path d={personPath(40, 14, 0.85)} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d={personPath(52, 14, 0.85)} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d={personPath(64, 14, 0.85)} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  // 1:Many — one person + large audience (5 people in two rows)
  return (
    <svg viewBox="0 0 84 28" className="w-[84px] h-7">
      <path d={personPath(12, 14)} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="14" x2="30" y2="14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
      <path d={personPath(38, 10, 0.7)} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d={personPath(49, 10, 0.7)} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d={personPath(60, 10, 0.7)} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d={personPath(43, 20, 0.7)} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d={personPath(55, 20, 0.7)} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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
            <div className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 bg-[#A12F63] text-[#BFA27A]">
              <ServiceTypeIcon type={serviceType} />
              <span className="text-xs font-medium uppercase tracking-widest">
                {serviceType} - {serviceLabel}
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

      {/* Results & Client Case Section */}
      {results && results.length > 0 && (
        <section className="py-20 md:py-28 bg-[#F7F6F5]">
          <Container size="wide">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Results - left column */}
                <div>
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

                {/* Client Case - right column in colored box */}
                {clientCase && clientCase.length > 0 && (
                  <div
                    className="p-8 md:p-10 lg:mt-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    <span className="text-sm font-medium uppercase tracking-wider text-[#BFA27A]">
                      Client case
                    </span>
                    <div className="mt-6 space-y-6">
                      {clientCase.map((paragraph, index) => (
                        <p
                          key={index}
                          className={`text-base md:text-lg leading-relaxed ${
                            index === 0
                              ? "italic font-[family-name:var(--font-playfair)] text-white"
                              : "text-white/75"
                          }`}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
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
