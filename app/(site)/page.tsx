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
    { text: "Leadership", color: "#BFA27A" },  // Champagne Gold
    { text: "Growth", color: "#A12F63" },      // Nordic Berry
    { text: "Impact", color: "#EFEDEA" },      // Warm Mist
    { text: "Change", color: "#BFA27A" },      // Champagne Gold
    { text: "Purpose", color: "#A12F63" },     // Nordic Berry
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
          {/* Ripple/impact circles with heart center - meaningful impact */}
          <circle cx="32" cy="32" r="24" fill="none" stroke="#A12F63" strokeWidth="2" opacity="0.3"/>
          <circle cx="32" cy="32" r="16" fill="none" stroke="#A12F63" strokeWidth="2" opacity="0.6"/>
          <circle cx="32" cy="32" r="8" fill="#A12F63"/>
        </svg>
      )
    },
    {
      title: t.services.items.actAbility.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          {/* Hand/power symbol - ability to act */}
          <circle cx="32" cy="32" r="22" fill="none" stroke="#34323A" strokeWidth="2.5"/>
          <path d="M32 18V32L42 42" fill="none" stroke="#A12F63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="4" fill="#A12F63"/>
        </svg>
      )
    },
    {
      title: t.services.items.executiveCoaching.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          {/* Person with guiding hand - coaching */}
          <circle cx="32" cy="20" r="10" fill="none" stroke="#34323A" strokeWidth="2.5"/>
          <path d="M16 54C16 42 23 36 32 36C41 36 48 42 48 54" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="32" cy="20" r="4" fill="#A12F63"/>
        </svg>
      )
    },
    {
      title: t.services.items.leadershipDevelopment.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          {/* Rising bar chart - growth/development */}
          <rect x="8" y="40" width="10" height="16" rx="2" fill="#34323A" opacity="0.4"/>
          <rect x="22" y="30" width="10" height="26" rx="2" fill="#34323A" opacity="0.6"/>
          <rect x="36" y="20" width="10" height="36" rx="2" fill="#34323A" opacity="0.8"/>
          <rect x="50" y="10" width="10" height="46" rx="2" fill="#A12F63"/>
        </svg>
      )
    },
    {
      title: t.services.items.keynotes.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          {/* Speech bubble - keynotes/speaking */}
          <path d="M12 14C12 10.7 14.7 8 18 8H46C49.3 8 52 10.7 52 14V34C52 37.3 49.3 40 46 40H28L18 50V40H18C14.7 40 12 37.3 12 34V14Z" fill="none" stroke="#34323A" strokeWidth="2.5" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="3" fill="#A12F63"/>
          <circle cx="32" cy="24" r="3" fill="#A12F63"/>
          <circle cx="40" cy="24" r="3" fill="#A12F63"/>
        </svg>
      )
    },
    {
      title: t.services.items.teamTransformation.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          {/* Three people in circle - team */}
          <circle cx="32" cy="32" r="24" fill="none" stroke="#34323A" strokeWidth="2" opacity="0.3"/>
          <circle cx="32" cy="16" r="6" fill="#A12F63"/>
          <circle cx="18" cy="44" r="6" fill="#34323A"/>
          <circle cx="46" cy="44" r="6" fill="#34323A"/>
          <path d="M26 20L22 38M38 20L42 38M24 44H40" stroke="#34323A" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
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
            <p className="mt-6 text-xl md:text-2xl text-[#34323A]/70 leading-relaxed">
              {t.homepage.weCreateChange}
            </p>
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
              <Link href="/4d" className="group flex items-center gap-6">
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
                  href="mailto:contact@significanz.dk"
                  className="text-2xl md:text-3xl text-[#F7F6F5] hover:text-[#BFA27A] transition-colors font-[family-name:var(--font-playfair)]"
                >
                  contact@significanz.dk
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
      <BeInspired />
      <GetInTouch />
    </>
  );
}
