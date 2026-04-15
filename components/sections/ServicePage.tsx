"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactButton } from "@/components/ui/ContactButton";

type ServiceType = "1:1" | "1:More" | "1:Many";

// Each service type has a primary (type code) and secondary (label) color
const serviceTypeMeta: Record<ServiceType, { label: string; primary: string; secondary: string }> = {
  "1:1": { label: "Individuals", primary: "#BFA27A", secondary: "#34323A" },
  "1:More": { label: "Teams", primary: "#A12F63", secondary: "#BFA27A" },
  "1:Many": { label: "Organizations", primary: "#5A1735", secondary: "#A12F63" },
};

function ServiceTypeBadges({ types }: { types: ServiceType[] }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-2">
      {types.map((type) => {
        const meta = serviceTypeMeta[type];
        return (
          <div key={type} className="inline-flex items-center">
            <span
              className="inline-flex items-center px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white"
              style={{ backgroundColor: meta.primary }}
            >
              {type}
            </span>
            <span
              className="inline-flex items-center px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white"
              style={{ backgroundColor: meta.secondary }}
            >
              {meta.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

interface ServicePageProps {
  title: string;
  description: string;
  serviceTypes: ServiceType[];
  accentColor: string;
  results?: string[];
  clientCase?: string[];
}

export function ServicePageLayout({
  title,
  description,
  serviceTypes,
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
            {/* Service type badges */}
            <ServiceTypeBadges types={serviceTypes} />

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
      <section className="relative py-20 md:py-28 bg-[#34323A] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/workshop.jpeg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#34323A]/85" />
        </div>
        <Container size="default" className="relative z-10">
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
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#A12F63] text-white font-medium hover:bg-[#8a2854] transition-colors"
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
