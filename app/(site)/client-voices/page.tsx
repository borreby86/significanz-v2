"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { useTranslation } from "@/lib/i18n";
import { ContactButton } from "@/components/ui/ContactButton";

// How Clients Experience Us Section
function HowClientsExperienceUs() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const experiences = [
    {
      title: "Calm, yet challenging",
      description: "We create space for clarity -while still asking the questions that help progress happen.",
      color: "#A12F63",
    },
    {
      title: "Structured, yet flexible",
      description: "Clear on process, adaptable to what shows up, and practical about what works in real life.",
      color: "#BFA27A",
    },
    {
      title: "Professional, yet personal",
      description: "Building trust through consistency, discretion, and genuine presence.",
      color: "#34323A",
    },
  ];

  return (
    <section ref={ref} className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#F7F6F5]">
      <Container size="wide">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#A12F63]" />
            <span className="text-[#A12F63] text-sm font-medium uppercase tracking-[0.2em]">
              {t.aboutPage.workingTogether}
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#34323A] italic">
            {t.aboutPage.clientExperienceTitle}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#34323A]/70 leading-relaxed max-w-3xl">
            {t.clientVoicesPage.impactDescription}
          </p>
        </motion.div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white p-8"
            >
              <div
                className="w-12 h-1 mb-6"
                style={{ backgroundColor: exp.color }}
              />
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#34323A] mb-4">
                {exp.title}
              </h3>
              <p className="text-[#34323A]/70 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <span className="text-xs text-[#34323A]/40 uppercase tracking-[0.3em] mb-3">
            Scroll
          </span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-[#BFA27A] to-[#A12F63]"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ originY: 0 }}
          />
        </motion.div>

      </Container>
    </section>
  );
}

export default function ClientVoicesPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* How Clients Experience Us */}
      <HowClientsExperienceUs />

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <Container size="wide">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#A12F63]" />
              <span className="text-[#A12F63] text-sm font-medium uppercase tracking-[0.2em]">
                In their words
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#34323A] italic mb-16 md:mb-24">
              {t.clientVoicesPage.title}
            </h2>
          </FadeIn>
          <div className="space-y-16 md:space-y-24">
            {t.clientVoicesPage.testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.author} delay={index * 0.1}>
                <blockquote
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                    index % 2 === 1 ? "lg:text-right" : ""
                  }`}
                >
                  <div
                    className={`lg:col-span-8 ${
                      index % 2 === 1 ? "lg:col-start-5" : ""
                    }`}
                  >
                    <p className="font-[family-name:var(--font-playfair)] text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div
                    className={`lg:col-span-4 ${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div
                      className={`border-t border-gray-200 pt-6 ${
                        index % 2 === 1 ? "lg:border-t-0 lg:border-b lg:pt-0 lg:pb-6" : ""
                      }`}
                    >
                      <p className="font-medium text-black">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        {testimonial.role}
                      </p>
                      <p className="text-red text-sm">{testimonial.company}</p>
                      {testimonial.services && testimonial.services.length > 0 && (
                        <div className={`mt-4 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                          <p className="text-[10px] font-medium uppercase tracking-[2px] text-[#34323A]/50 mb-2">
                            Service Delivered
                          </p>
                          <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                            {testimonial.services.map((service) => (
                              <span
                                key={service}
                                className="inline-flex items-stretch"
                                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
                              >
                                <span
                                  className="w-2"
                                  style={{ backgroundColor: "#BFA27A" }}
                                />
                                <span
                                  className="px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white"
                                  style={{ backgroundColor: "#A12F63" }}
                                >
                                  {service}
                                </span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/workshop.jpeg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <Container size="default" className="relative z-10">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl tracking-tight">
                {t.clientVoicesPage.ctaTitle}
              </h2>
              <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
                {t.clientVoicesPage.ctaDescription}
              </p>
              <div className="mt-10">
                <ContactButton className="px-8 py-4 bg-[#A12F63] text-white font-medium hover:bg-[#8a2854] transition-colors">
                  {t.clientVoicesPage.ctaButton}
                </ContactButton>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
