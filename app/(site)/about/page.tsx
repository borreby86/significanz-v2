"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { SplitText } from "@/components/animations/SplitText";
import { FadeIn } from "@/components/animations/FadeIn";
import { useTranslation } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero - Full Screen Split Layout */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      >
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-warm-radial pointer-events-none" />

        {/* Grain texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none z-10" />

        {/* Decorative blobs - responsive */}
        <motion.div
          className="absolute -top-16 -left-16 md:-top-32 md:-left-32 w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 rounded-full bg-peach blur-2xl md:blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute -bottom-10 right-1/4 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 rounded-full bg-cream blur-2xl md:blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <motion.div style={{ opacity: heroOpacity }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="text-red font-medium text-sm uppercase tracking-wider">
                  {t.aboutPage.label}
                </span>
              </motion.div>

              <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tight leading-[1.1]">
                <SplitText splitType="words" delay={0.2} staggerDelay={0.1}>
                  {t.aboutPage.heroTitle}
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
                {t.aboutPage.heroDescription}
              </motion.p>

            </motion.div>

            {/* Right: Image with parallax */}
            <div className="relative">
              <motion.div
                className="aspect-[4/5] relative overflow-hidden"
                style={{ y: heroImageY, scale: heroImageScale }}
                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Image
                  src="/images/about/portrait.jpg"
                  alt={t.aboutPage.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-red/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-red/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* About Us / Our Edge Section */}
      <section id="our-edge" className="py-24 md:py-32 bg-white scroll-mt-20">
        <Container size="default">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                {t.aboutPage.aboutUsLabel}
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
                {t.aboutPage.aboutUsTitle}
              </h2>

              <div className="mt-10 space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>{t.aboutPage.aboutUsParagraph1}</p>
                <p>{t.aboutPage.aboutUsParagraph2}</p>
                <p>{t.aboutPage.aboutUsParagraph3}</p>
                <p>{t.aboutPage.aboutUsParagraph4}</p>
                <p className="text-black font-medium">{t.aboutPage.aboutUsParagraph5}</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Philosophy / Values and Logic - Full Width Black Section */}
      <section id="values-logic" className="py-24 md:py-32 bg-black relative overflow-hidden scroll-mt-20">
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

        <Container size="wide" className="relative z-10">
          <FadeIn>
            <div className="text-center">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                {t.aboutPage.ourPhilosophy}
              </span>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
                {t.aboutPage.philosophyTitle}
              </h2>
              <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {t.aboutPage.philosophyDescription}
              </p>
            </div>
          </FadeIn>

          {/* Formula display */}
          <FadeIn delay={0.2}>
            <div className="mt-16 p-12 md:p-16 border border-white/10 backdrop-blur-sm text-center relative overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red/50" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red/50" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red/50" />

              <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-8 text-2xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)]">
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {t.aboutPage.ability}
                </motion.span>
                <motion.span
                  className="text-gray-600"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  &times;
                </motion.span>
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {t.aboutPage.willingness}
                </motion.span>
                <motion.span
                  className="text-gray-600"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  =
                </motion.span>
                <motion.span
                  className="text-red"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  {t.aboutPage.meaningfulImpact}
                </motion.span>
              </div>
              <p className="mt-10 text-gray-500 max-w-xl mx-auto">
                {t.aboutPage.enablementDescription}
              </p>
            </div>
          </FadeIn>

          {/* Quote */}
          <FadeIn delay={0.3}>
            <blockquote className="mt-16 text-center relative">
              {/* Large quote marks */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[100px] font-serif text-white/10 leading-none select-none">
                &ldquo;
              </span>
              <p className="text-xl md:text-2xl text-gray-300 italic max-w-3xl mx-auto relative z-10">
                &ldquo;{t.aboutPage.quote}&rdquo;
              </p>
              <footer className="mt-6 text-red font-medium">— {t.aboutPage.quoteAuthor}</footer>
            </blockquote>
          </FadeIn>
        </Container>
      </section>

      {/* Enabling You Section - 4D & Tech */}
      <section id="enabling-you" className="py-24 md:py-32 bg-[#F7F6F5] scroll-mt-20">
        <Container size="default">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                Our Approach
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
                Enabling you
              </h2>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 4D Framework */}
                <div className="bg-white p-8">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#34323A] mb-4">
                    4D Design Framework
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    With our focused Discovery Phase, we listen deeply, stay close to your purpose, and translate insights into clear direction. This creates quick value: stronger focus, shared understanding, and a concrete starting point.
                  </p>
                </div>

                {/* Tech-forward */}
                <div className="bg-white p-8">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#34323A] mb-4">
                    Tech-forward
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We integrate relevant technology in discovery and delivery, keeping AI in mind as internal support for learning, decision-making, and execution.
                  </p>
                </div>
              </div>

              <p className="mt-10 text-lg text-gray-600 leading-relaxed">
                A key goal in our work is enablement. We want you to be more capable when we leave - better equipped to carry the work forward and become more self-sustaining.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-28 md:py-36 lg:py-48 bg-white">
        <Container size="wide">
          {/* Header */}
          <FadeIn>
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <span className="text-[#A12F63] font-medium text-sm uppercase tracking-[0.2em]">
                Get in Touch
              </span>
              <h2 className="mt-4 sm:mt-6 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#34323A] italic">
                Let&apos;s start a conversation
              </h2>
              <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-[#34323A]/70 leading-relaxed max-w-2xl mx-auto">
                Ready to create meaningful impact? We&apos;d love to hear from you. Share your challenges, and let&apos;s explore how we can help.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 md:gap-16 lg:gap-24">
            {/* Left - Contact Info */}
            <FadeIn className="lg:col-span-4">
              <div className="space-y-12">
                <div>
                  <p className="text-[#A12F63] text-sm font-medium uppercase tracking-[0.15em] mb-4">Email</p>
                  <a href="mailto:welcome@significanz.dk" className="text-2xl md:text-3xl text-[#34323A] hover:text-[#A12F63] transition-colors font-[family-name:var(--font-playfair)]">
                    welcome@significanz.dk
                  </a>
                </div>
                <div>
                  <p className="text-[#A12F63] text-sm font-medium uppercase tracking-[0.15em] mb-4">Location</p>
                  <p className="text-2xl md:text-3xl text-[#34323A] font-[family-name:var(--font-playfair)]">
                    Copenhagen, Denmark
                  </p>
                </div>
                <div>
                  <p className="text-[#A12F63] text-sm font-medium uppercase tracking-[0.15em] mb-4">Connect</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl text-[#34323A] hover:text-[#A12F63] transition-colors font-[family-name:var(--font-playfair)]">
                    LinkedIn
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Right - Form */}
            <FadeIn delay={0.2} className="lg:col-span-8">
              <form className="bg-white p-6 sm:p-8 md:p-10 lg:p-14">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#34323A] mb-3 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-0 py-4 border-0 border-b-2 border-[#34323A]/20 focus:border-[#A12F63] focus:outline-none transition-colors bg-transparent text-lg"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#34323A] mb-3 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-0 py-4 border-0 border-b-2 border-[#34323A]/20 focus:border-[#A12F63] focus:outline-none transition-colors bg-transparent text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#34323A] mb-3 uppercase tracking-wider">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-0 py-4 border-0 border-b-2 border-[#34323A]/20 focus:border-[#A12F63] focus:outline-none transition-colors bg-transparent text-lg"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#34323A] mb-3 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-0 py-4 border-0 border-b-2 border-[#34323A]/20 focus:border-[#A12F63] focus:outline-none transition-colors bg-transparent resize-none text-lg"
                      placeholder="Tell us about your challenges and goals..."
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="px-12 py-5 bg-[#34323A] text-white font-medium hover:bg-[#A12F63] transition-colors text-lg tracking-wide"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </FadeIn>
          </div>
        </Container>
      </section>

    </>
  );
}
