"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/Container";
import { useTranslation } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";

// Hero with full-width photo and rotating words with brand colors
function Hero() {
  const words = [
    { text: "Leadership", color: "#A12F63" },  // Nordic Berry (Red)
    { text: "Growth", color: "#34323A" },      // Warm Charcoal
    { text: "Impact", color: "#A12F63" },      // Nordic Berry (Red)
    { text: "Change", color: "#EFEDEA" },      // Warm Mist
    { text: "Purpose", color: "#34323A" },     // Warm Charcoal
  ];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero new.jpg"
          alt="Office environment with Copenhagen lakes view"
          fill
          className="object-cover grayscale"
          priority
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main content - centered */}
        <div className="flex-1 flex items-center justify-center px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-[family-name:var(--font-playfair)] text-white">
              <span className="block text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
                Significanz
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  className="block text-7xl md:text-8xl lg:text-9xl leading-[0.9] italic mt-2"
                  style={{ color: words[currentWord].color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {words[currentWord].text}
                </motion.span>
              </AnimatePresence>
            </h1>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="pb-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-px h-16 bg-white/40"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// Our DNA Section
function OurDNA() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white overflow-hidden">
      <Container size="wide">
        {/* Header with tagline */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#A12F63]" />
            <span className="text-[#A12F63] text-sm font-medium uppercase tracking-[0.2em]">
              {t.ourDNA.tagline}
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-[#34323A] italic">
            {t.ourDNA.title}
          </h2>
        </motion.div>

        {/* Main content with image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Image */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/gallery/OUR DNA.jpg"
                alt="Our DNA"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-lg text-[#34323A] leading-relaxed">
              {t.ourDNA.description1}
            </p>
            <p className="mt-6 text-lg text-[#34323A]/70 leading-relaxed">
              {t.ourDNA.description2}
            </p>

            {/* Ability & Willingness - Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Ability */}
              <div className="bg-[#F7F6F5] p-6 border-l-4 border-[#A12F63]">
                <h3 className="text-lg font-medium text-[#34323A] mb-2">
                  {t.ourDNA.abilityTitle}
                </h3>
                <p className="text-base text-[#34323A]/70 leading-relaxed">
                  {t.ourDNA.abilityDescription}
                </p>
              </div>

              {/* Willingness */}
              <div className="bg-[#F7F6F5] p-6 border-l-4 border-[#BFA27A]">
                <h3 className="text-lg font-medium text-[#34323A] mb-2">
                  {t.ourDNA.willingnessTitle}
                </h3>
                <p className="text-base text-[#34323A]/70 leading-relaxed">
                  {t.ourDNA.willingnessDescription}
                </p>
              </div>
            </div>

            {/* Closing statement */}
            <div className="mt-10">
              <p className="text-base text-[#34323A]/70 leading-relaxed">
                {t.ourDNA.closingStatement}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// About Us Section - Awwwards style
function AboutUs() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="about" ref={ref} className="py-32 md:py-48 bg-[#F7F6F5] overflow-hidden">
      <Container size="wide">
        {/* Large statement with mixed typography */}
        <div className="relative">
          {/* Background year */}
          <motion.div
            className="absolute -top-20 -right-10 text-[20rem] md:text-[28rem] font-[family-name:var(--font-playfair)] text-[#34323A]/[0.03] leading-none select-none pointer-events-none"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            15
          </motion.div>

          {/* Main content */}
          <div className="relative z-10">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-px bg-[#A12F63]" />
              <span className="text-[#A12F63] text-sm font-medium uppercase tracking-[0.2em]">
                {t.homepage.aboutUs}
              </span>
            </motion.div>

            {/* Big statement */}
            <motion.h2
              className="font-[family-name:var(--font-playfair)] text-[#34323A] max-w-5xl"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                A network of{" "}
                <span className="italic text-[#A12F63]">professionals</span>
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl leading-[1.1] mt-2">
                transforming how leaders
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl leading-[1.1] mt-2">
                <span className="italic">think</span> and{" "}
                <span className="italic text-[#BFA27A]">act</span>
              </span>
            </motion.h2>

            {/* Stats row */}
            <motion.div
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { number: "2015", label: "Founded" },
                { number: "100+", label: "Leaders coached" },
                { number: "4D", label: "Framework" },
                { number: "∞", label: "Possibilities" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#34323A] group-hover:text-[#A12F63] transition-colors">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-sm text-[#34323A]/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-4"
              >
                <span className="text-[#34323A] group-hover:text-[#A12F63] transition-colors">
                  Discover our story
                </span>
                <span className="w-12 h-12 rounded-full border border-[#34323A]/20 flex items-center justify-center group-hover:bg-[#A12F63] group-hover:border-[#A12F63] transition-all">
                  <span className="text-[#34323A] group-hover:text-white transition-colors">→</span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Who We Are + Services Section
function WhoWeAreAndServices() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const services = [
    {
      title: t.services.items.meaningfulAction.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          {/* Circle with target dot and arrow breaking out - meaningful action */}
          <circle cx="32" cy="32" r="24" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="4" fill="none" stroke="#34323A" strokeWidth="2.5"/>
          <path d="M32 8V2M32 2L27 7M32 2L37 7" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: t.services.items.actAbility.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          {/* Circular progress with emphasized arc - ability to act */}
          <circle cx="32" cy="32" r="24" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round" opacity="0.3"/>
          <path d="M32 8A24 24 0 0 1 56 32" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="6" fill="none" stroke="#34323A" strokeWidth="2.5"/>
        </svg>
      )
    },
    {
      title: t.services.items.executiveCoaching.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          {/* Two abstract profiles facing each other with insight dot */}
          <circle cx="32" cy="32" r="24" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="22" cy="28" r="6" fill="none" stroke="#34323A" strokeWidth="2.5"/>
          <circle cx="42" cy="28" r="6" fill="none" stroke="#34323A" strokeWidth="2.5"/>
          <circle cx="32" cy="42" r="3" fill="none" stroke="#34323A" strokeWidth="2.5"/>
        </svg>
      )
    },
    {
      title: t.services.items.leadershipDevelopment.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          {/* Three ascending rounded bars inside circle - growth */}
          <circle cx="32" cy="32" r="24" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M18 44V38" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M32 44V30" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M46 44V20" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: t.services.items.keynotes.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          {/* Minimalist microphone in circle - keynote speaking */}
          <circle cx="32" cy="32" r="24" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="32" cy="26" r="8" fill="none" stroke="#34323A" strokeWidth="2.5"/>
          <path d="M32 34V44M26 48H38" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: t.services.items.teamTransformation.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          {/* Large circle with three smaller circles moving to center - unity */}
          <circle cx="32" cy="32" r="24" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="32" cy="18" r="5" fill="none" stroke="#34323A" strokeWidth="2.5"/>
          <circle cx="20" cy="42" r="5" fill="none" stroke="#34323A" strokeWidth="2.5"/>
          <circle cx="44" cy="42" r="5" fill="none" stroke="#34323A" strokeWidth="2.5"/>
          <circle cx="32" cy="32" r="3" fill="none" stroke="#34323A" strokeWidth="2.5"/>
        </svg>
      )
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#F7F6F5]">
      <Container size="wide">
        {/* Top section - Who are we? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Left - Big heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-[#34323A] italic">
              {t.homepage.whoAreWe}
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-[#34323A] leading-relaxed font-medium">
              {t.homepage.weAreCoaches}
            </p>
            {t.homepage.weCreateChange && (
              <p className="mt-6 text-xl md:text-2xl text-[#34323A]/70 leading-relaxed">
                {t.homepage.weCreateChange}
              </p>
            )}
          </motion.div>
        </div>

        {/* Bottom section - Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Link href="/collaborate" className="group flex items-center gap-6">
                {/* Icon */}
                <div className="text-[#34323A] flex-shrink-0">
                  {service.icon}
                </div>

                {/* Vertical line */}
                <div className="w-px h-14 bg-[#34323A]/20 flex-shrink-0" />

                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#34323A] group-hover:text-[#A12F63] transition-colors leading-tight">
                  {service.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Be Inspired Section - More neutral with accent touches
function BeInspired() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <Container size="wide">
        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
          <motion.h2
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-[#34323A] italic"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {t.homepage.beInspired}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/4d" className="text-[#34323A] hover:text-[#A12F63] transition-colors flex items-center gap-2 text-lg">
              {t.homepage.seeAllContent}
              <span className="text-2xl">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Cards grid - more neutral, subtle accent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - The 4D Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group"
          >
            <Link href="/4d">
              <div className="bg-[#EFEDEA] p-8 aspect-square flex flex-col hover:bg-[#E5E3E0] transition-colors">
                <span className="text-[#A12F63] text-sm font-medium uppercase tracking-wider">{t.homepage.framework}</span>
                <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-[#34323A]">
                  {t.homepage.the4DModel}
                </h3>
                <p className="mt-3 text-[#34323A]/70">
                  {t.homepage.frameworkDescription}
                </p>
                <div className="mt-auto pt-8 flex justify-end">
                  <span className="text-[#34323A] group-hover:text-[#A12F63] transition-colors text-2xl">→</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 2 - Client Voices */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group"
          >
            <Link href="/client-voices">
              <div className="bg-[#34323A] p-8 aspect-square flex flex-col hover:bg-[#4A484F] transition-colors">
                <span className="text-[#BFA27A] text-sm font-medium uppercase tracking-wider">{t.homepage.testimonials}</span>
                <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-[#F7F6F5]">
                  {t.homepage.clientVoices}
                </h3>
                <p className="mt-3 text-[#F7F6F5]/70">
                  {t.homepage.testimonialsDescription}
                </p>
                <div className="mt-auto pt-8 flex justify-end">
                  <span className="text-[#F7F6F5] group-hover:text-[#BFA27A] transition-colors text-2xl">→</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 3 - Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group"
          >
            <Link href="/gallery">
              <div className="bg-[#EFEDEA] p-8 aspect-square flex flex-col hover:bg-[#E5E3E0] transition-colors">
                <span className="text-[#A12F63] text-sm font-medium uppercase tracking-wider">{t.homepage.gallery}</span>
                <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-[#34323A]">
                  {t.homepage.ourSessions}
                </h3>
                <p className="mt-3 text-[#34323A]/70">
                  {t.homepage.galleryDescription}
                </p>
                <div className="mt-auto pt-8 flex justify-end">
                  <span className="text-[#34323A] group-hover:text-[#A12F63] transition-colors text-2xl">→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Get in Touch CTA - Clean and professional
function GetInTouch() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="bg-[#34323A] py-24 md:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-[#F7F6F5] italic">
              {t.homepage.getInTouch}
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-[#F7F6F5]/70 leading-relaxed max-w-md">
              {t.homepage.contactDescription}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F7F6F5] text-[#34323A] font-medium hover:bg-[#EFEDEA] transition-colors"
              >
                {t.homepage.contactUs}
                <span className="text-xl">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#F7F6F5]/30 text-[#F7F6F5] font-medium hover:bg-[#F7F6F5]/10 transition-colors"
              >
                {t.homepage.aboutUs}
              </Link>
            </div>
          </motion.div>

          {/* Right - Contact info */}
          <motion.div
            className="lg:text-right"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <p className="text-[#BFA27A] text-sm font-medium uppercase tracking-wider mb-2">{t.homepage.email}</p>
                <a
                  href="mailto:welcome@significanz.dk"
                  className="text-2xl md:text-3xl text-[#F7F6F5] hover:text-[#BFA27A] transition-colors font-[family-name:var(--font-playfair)]"
                >
                  welcome@significanz.dk
                </a>
              </div>
              <div>
                <p className="text-[#BFA27A] text-sm font-medium uppercase tracking-wider mb-2">{t.homepage.location}</p>
                <p className="text-2xl md:text-3xl text-[#F7F6F5] font-[family-name:var(--font-playfair)]">
                  {t.homepage.locationValue}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAreAndServices />
      <OurDNA />
      <AboutUs />
      <BeInspired />
      <GetInTouch />
    </>
  );
}
