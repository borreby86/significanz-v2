"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { useTranslation } from "@/lib/i18n";

// How Clients Experience Us Section
function HowClientsExperienceUs() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const experiences = [
    {
      title: "Calm, yet challenging",
      description: "We create space for clarity — while still asking the questions that help progress happen.",
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
    <section ref={ref} className="py-24 md:py-32 bg-[#F7F6F5]">
      <Container size="wide">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#A12F63] text-sm font-medium uppercase tracking-wider">
            {t.aboutPage.workingTogether}
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[#34323A] italic">
            {t.aboutPage.clientExperienceTitle}
          </h2>
        </motion.div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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

      </Container>
    </section>
  );
}

export default function ClientVoicesPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container size="default">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-black tracking-tight text-center">
              {t.clientVoicesPage.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 text-center max-w-2xl mx-auto">
              {t.clientVoicesPage.impactDescription}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* How Clients Experience Us */}
      <HowClientsExperienceUs />

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <Container size="wide">
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
                    </div>
                  </div>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-black text-white">
        <Container size="default">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl tracking-tight">
                {t.clientVoicesPage.ctaTitle}
              </h2>
              <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
                {t.clientVoicesPage.ctaDescription}
              </p>
              <div className="mt-10">
                <a href="mailto:welcome@significanz.dk">
                  <Button variant="accent" size="lg">
                    {t.clientVoicesPage.ctaButton}
                  </Button>
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
