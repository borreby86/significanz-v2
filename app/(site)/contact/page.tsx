"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactForm } from "@/components/forms/ContactForm";
import { motion, useInView } from "motion/react";
import { SplitText } from "@/components/animations/SplitText";
import { GradientDivider } from "@/components/ui/SectionDivider";
import { useTranslation } from "@/lib/i18n";

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    description: "Anytime",
    value: "contact@significanz.dk",
    href: "mailto:contact@significanz.dk",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Location",
    description: "Denmark",
    value: "Copenhagen",
    href: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Global",
    description: "Remote & On-site",
    value: "Worldwide",
    href: null,
  },
];

export default function ContactPage() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero - Full Width Split */}
      <section
        ref={heroRef}
        className="min-h-[70vh] flex items-center pt-20 relative overflow-hidden"
      >
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-warm-radial pointer-events-none" />

        {/* Grain texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none z-10" />

        {/* Decorative blobs */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-peach blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-cream blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="text-red font-medium text-sm uppercase tracking-wider">
                  {t.contactPage.getInTouch}
                </span>
              </motion.div>

              <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tight leading-[1.1]">
                <SplitText splitType="words" delay={0.2} staggerDelay={0.1}>
                  {t.contactPage.title}
                </SplitText>
              </h1>

              <motion.div
                className="mt-8 w-24 h-1 bg-red origin-left"
                initial={{ scaleX: 0 }}
                animate={heroInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              />

              <motion.p
                className="mt-8 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {t.contactPage.subtitle}
              </motion.p>

              {/* Contact methods */}
              <motion.div
                className="mt-12 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  >
                    {method.href ? (
                      <a
                        href={method.href}
                        className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm border border-warm-gray-dark hover:border-red hover:bg-white transition-all duration-300"
                      >
                        <span className="text-red group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </span>
                        <div>
                          <p className="font-medium text-black">{method.title}</p>
                          <p className="text-sm text-gray-500">{method.description}</p>
                        </div>
                        <span className="ml-auto text-red font-medium">
                          {method.value}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm border border-warm-gray-dark">
                        <span className="text-gray-400">
                          {method.icon}
                        </span>
                        <div>
                          <p className="font-medium text-black">{method.title}</p>
                          <p className="text-sm text-gray-500">{method.description}</p>
                        </div>
                        <span className="ml-auto text-gray-600">
                          {method.value}
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right: Decorative element */}
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-80 h-80">
                {/* Animated circles */}
                <motion.div
                  className="absolute inset-0 border-2 border-red/20 rounded-full"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-8 border-2 border-black/10 rounded-full"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute inset-16 border-2 border-red/30 rounded-full"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl font-[family-name:var(--font-playfair)] text-red">S</span>
                    <p className="mt-2 text-sm text-gray-500 uppercase tracking-wider">Significanz</p>
                  </div>
                </div>

                {/* Floating dots */}
                <motion.div
                  className="absolute top-0 left-1/2 w-3 h-3 bg-red rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 right-10 w-2 h-2 bg-black rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-1/4 left-0 w-2 h-2 bg-peach rounded-full"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Gradient transition */}
      <GradientDivider fromColor="#FFFFFF" toColor="#FDF8F3" height={100} />

      {/* Form Section */}
      <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
        {/* Warm blobs */}
        <motion.div
          className="absolute -top-40 right-1/4 w-80 h-80 bg-peach rounded-full blur-3xl opacity-30"
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-warm-gray rounded-full blur-3xl opacity-50"
        />

        {/* Grain texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

        <Container size="default" className="relative z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                {t.contactPage.sendMessage}
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-black tracking-tight">
                {t.contactPage.startConversation}
              </h2>
              <p className="mt-4 text-gray-600 max-w-lg mx-auto">
                {t.contactPage.respondTime}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-xl mx-auto">
              <div className="p-8 md:p-12 bg-white border border-warm-gray-dark shadow-lg relative overflow-hidden">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red/30" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red/30" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red/30" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red/30" />

                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Gradient transition */}
      <GradientDivider fromColor="#FDF8F3" toColor="#000000" height={100} />

      {/* Alternative Contact - Dark Section */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        {/* Grain texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

        {/* Red accent glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <Container size="default" className="relative z-10">
          <FadeIn>
            <div className="text-center">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                {t.contactPage.directContact}
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
                {t.contactPage.preferEmail}
              </h2>
              <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
                {t.contactPage.reachUs}
              </p>

              {/* Email link */}
              <motion.a
                href="mailto:contact@significanz.dk"
                className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-red hover:border-red transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">contact@significanz.dk</span>
              </motion.a>

              {/* Additional links */}
              <div className="mt-12 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-red transition-colors duration-300"
                >
                  {t.contactPage.learnAboutUs}
                </Link>
                <Link
                  href="/4d"
                  className="text-gray-400 hover:text-red transition-colors duration-300"
                >
                  {t.contactPage.exploreFramework}
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
