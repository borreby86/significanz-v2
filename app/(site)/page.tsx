"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/lib/i18n";

// Organic blob shapes component
function OrganicBlobs() {
  return (
    <>
      {/* Sage green blob - left */}
      <motion.div
        className="absolute left-0 top-1/4 w-64 md:w-80 lg:w-96"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <svg viewBox="0 0 200 300" className="w-full h-auto">
          <path
            d="M50,20 Q120,0 150,80 Q180,160 140,220 Q100,280 50,250 Q0,220 10,140 Q20,60 50,20"
            fill="#8B9D83"
            opacity="0.9"
          />
        </svg>
      </motion.div>

      {/* Pink blob - right */}
      <motion.div
        className="absolute right-0 top-1/4 w-48 md:w-64 lg:w-80"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-auto">
          <path
            d="M100,10 Q180,30 180,100 Q180,170 100,190 Q20,170 20,100 Q20,30 100,10"
            fill="#E8C4C4"
            opacity="0.9"
          />
        </svg>
      </motion.div>

      {/* Blue blob - bottom left */}
      <motion.div
        className="absolute left-1/4 bottom-10 w-40 md:w-56 lg:w-64"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 200 150" className="w-full h-auto">
          <path
            d="M30,50 Q80,0 150,30 Q200,60 180,100 Q160,140 100,130 Q40,120 20,90 Q0,60 30,50"
            fill="#7BA3B5"
            opacity="0.9"
          />
        </svg>
      </motion.div>

      {/* Gold/tan accent - center right */}
      <motion.div
        className="absolute right-1/3 top-1/2 w-32 md:w-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <svg viewBox="0 0 150 80" className="w-full h-auto">
          <path
            d="M10,40 Q40,10 80,20 Q120,30 140,50 Q120,70 80,65 Q40,60 10,40"
            fill="#C9A76C"
            opacity="0.9"
          />
        </svg>
      </motion.div>

      {/* White decorative line */}
      <motion.div
        className="absolute left-1/3 top-1/3 w-24 md:w-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <svg viewBox="0 0 100 150" className="w-full h-auto">
          <path
            d="M50,0 Q30,50 50,100 Q70,150 50,150"
            fill="none"
            stroke="white"
            strokeWidth="3"
            opacity="0.6"
          />
        </svg>
      </motion.div>
    </>
  );
}

// Hero with rotating words (Good Company style)
function Hero() {
  const { t } = useTranslation();
  const words = ["Leadership", "Growth", "Impact", "Change", "Purpose"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#2D4A4A] flex items-center justify-center">
      {/* Organic blob shapes */}
      <OrganicBlobs />

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-[family-name:var(--font-playfair)] text-white">
            <span className="block text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
              Significanz
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                className="block text-7xl md:text-8xl lg:text-9xl leading-[0.9] italic mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
          </h1>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-px h-16 bg-white/30"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}

// Who We Are + Services Section (Good Company style)
function WhoWeAreAndServices() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const services = [
    {
      title: t.services.items.executiveCoaching.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-16 h-16">
          <circle cx="32" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 52c0-12 8-18 16-18s16 6 16 18" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M44 24l8-8M52 24l-8-8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: t.services.items.teamCoaching.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-16 h-16">
          <circle cx="20" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="44" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="44" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M26 28l6 10M38 28l-6 10" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: t.services.items.leadershipDevelopment.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-16 h-16">
          <path d="M12 52L32 12L52 52H12Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="32" cy="36" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: t.services.items.outdoorCoaching.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-16 h-16">
          <path d="M8 52L24 20L36 40L44 28L56 52H8Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="48" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <Container size="wide">
        {/* Top section - Who are we? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Left - Big heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-black italic">
              Who are we?
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-black leading-relaxed font-medium">
              We are coaches, facilitators, and leadership developers at heart.
            </p>
            <p className="mt-6 text-xl md:text-2xl text-black leading-relaxed">
              We create sustainable change for the benefit of leaders, teams, and organizations.
            </p>
          </motion.div>
        </div>

        {/* Bottom section - Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Link href="/4d" className="group flex items-center gap-6">
                {/* Icon */}
                <div className="text-black flex-shrink-0">
                  {service.icon}
                </div>

                {/* Vertical line */}
                <div className="w-px h-16 bg-gray-300 flex-shrink-0" />

                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-black group-hover:text-red transition-colors leading-tight">
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

// Be Inspired Section (Good Company style - colored cards)
function BeInspired() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <Container size="wide">
        {/* Header row */}
        <div className="flex justify-between items-end mb-16">
          <motion.h2
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-black italic"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Be inspired
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/4d" className="text-red hover:text-red-dark transition-colors flex items-center gap-2 text-lg">
              See all content
              <span className="text-2xl">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - The 4D Model (Sage green) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group"
          >
            <Link href="/4d">
              <div className="bg-[#8B9D83] p-8 aspect-square flex flex-col">
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-black mb-2">
                  The 4D Model
                </h3>
                <p className="text-black/80 mb-auto">
                  Our proven framework for lasting transformation
                </p>
                {/* Illustration */}
                <div className="mt-6 flex justify-center">
                  <svg viewBox="0 0 120 100" className="w-32 h-auto">
                    <rect x="10" y="10" width="40" height="50" fill="white" stroke="black" strokeWidth="2" transform="rotate(-10 30 35)"/>
                    <rect x="70" y="20" width="40" height="50" fill="white" stroke="black" strokeWidth="2" transform="rotate(10 90 45)"/>
                    <circle cx="30" cy="30" r="8" fill="black"/>
                    <path d="M85 35 L95 50 L75 50 Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Discover → Define → Design → Deploy
              </p>
            </Link>
          </motion.div>

          {/* Card 2 - Client Voices (Pink) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group"
          >
            <Link href="/client-voices">
              <div className="bg-[#E8C4C4] p-8 aspect-square flex flex-col">
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-black mb-auto">
                  Client Voices
                </h3>
                {/* Illustration */}
                <div className="flex justify-center">
                  <svg viewBox="0 0 100 100" className="w-28 h-auto">
                    <circle cx="50" cy="40" r="25" fill="white" stroke="black" strokeWidth="2"/>
                    <circle cx="42" cy="35" r="3" fill="black"/>
                    <circle cx="58" cy="35" r="3" fill="black"/>
                    <path d="M40 48 Q50 55 60 48" fill="none" stroke="black" strokeWidth="2"/>
                    <path d="M50 65 L50 85 M35 75 L65 75" stroke="black" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-red text-sm font-medium">Featured story:</p>
              <p className="mt-1 font-[family-name:var(--font-playfair)] text-xl text-black">
                Leadership transformation at scale
              </p>
            </Link>
          </motion.div>

          {/* Card 3 - Gallery (Blue) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group"
          >
            <Link href="/gallery">
              <div className="bg-[#7BA3B5] p-8 aspect-square flex flex-col">
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-white mb-auto">
                  Gallery
                </h3>
                {/* Illustration */}
                <div className="flex justify-center">
                  <svg viewBox="0 0 100 100" className="w-28 h-auto">
                    <rect x="20" y="30" width="60" height="45" rx="3" fill="white" stroke="black" strokeWidth="2"/>
                    <circle cx="35" cy="45" r="8" fill="black"/>
                    <path d="M25 70 L45 50 L60 60 L75 45 L75 70 Z" fill="black" opacity="0.3"/>
                    <circle cx="65" cy="40" r="5" fill="#C9A76C"/>
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-red text-sm font-medium">Explore:</p>
              <p className="mt-1 font-[family-name:var(--font-playfair)] text-xl text-black">
                Moments from our sessions
              </p>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Get in Touch CTA (Good Company style)
function GetInTouch() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="bg-[#7BA3B5] py-20 md:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-black italic">
              Get in touch
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-black/80 leading-relaxed max-w-md">
              Contact us if you want to know more about our coaching and leadership development.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-black hover:text-white transition-colors text-lg font-medium"
            >
              See more
              <span className="text-xl">→</span>
            </Link>
          </motion.div>

          {/* Right - Image placeholder (silhouette style) */}
          <motion.div
            className="relative h-[400px] md:h-[500px] flex items-end justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Stylized illustration of people */}
            <svg viewBox="0 0 400 350" className="w-full h-auto max-w-md">
              {/* Person 1 */}
              <g transform="translate(40, 50)">
                <ellipse cx="40" cy="25" rx="25" ry="28" fill="#2D4A4A"/>
                <path d="M10 180 Q20 80 40 70 Q60 80 70 180 Z" fill="#2D4A4A"/>
                <rect x="15" y="180" width="50" height="100" fill="#2D4A4A"/>
              </g>
              {/* Person 2 */}
              <g transform="translate(130, 30)">
                <ellipse cx="45" cy="28" rx="28" ry="30" fill="#1a1a1a"/>
                <path d="M10 200 Q25 90 45 80 Q65 90 80 200 Z" fill="#1a1a1a"/>
                <rect x="15" y="200" width="60" height="90" fill="#1a1a1a"/>
              </g>
              {/* Person 3 */}
              <g transform="translate(240, 40)">
                <ellipse cx="40" cy="25" rx="25" ry="28" fill="#2D4A4A"/>
                <path d="M10 190 Q20 80 40 70 Q60 80 70 190 Z" fill="#2D4A4A"/>
                <rect x="15" y="190" width="50" height="95" fill="#2D4A4A"/>
              </g>
              {/* Person 4 */}
              <g transform="translate(320, 60)">
                <ellipse cx="35" cy="22" rx="22" ry="25" fill="#1a1a1a"/>
                <path d="M8 170 Q18 70 35 60 Q52 70 62 170 Z" fill="#1a1a1a"/>
                <rect x="12" y="170" width="46" height="85" fill="#1a1a1a"/>
              </g>
            </svg>
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
