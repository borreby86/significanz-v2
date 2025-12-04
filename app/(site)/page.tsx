"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/ui/Container";
import { useTranslation } from "@/lib/i18n";

// Hero with full-width photo
function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-office.png"
          alt="Office environment with Copenhagen lakes view"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Logo at top */}
        <motion.div
          className="pt-8 md:pt-12 px-6 md:px-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/logo/logo.avif"
            alt="Significanz"
            width={200}
            height={60}
            className="h-12 md:h-16 w-auto brightness-0 invert"
          />
        </motion.div>

        {/* Main content - centered */}
        <div className="flex-1 flex items-center justify-center px-6">
          <motion.div
            className="text-center max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-[family-name:var(--font-playfair)] text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight">
              Creating lasting change through{" "}
              <span className="italic">leadership development</span>
            </h1>
            <p className="mt-8 text-white/80 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              We are coaches, facilitators, and leadership developers dedicated to sustainable transformation.
            </p>
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#34323A] font-medium hover:bg-[#EFEDEA] transition-colors"
              >
                Get in touch
                <span className="text-xl">→</span>
              </Link>
            </motion.div>
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
      title: t.services.items.executiveCoaching.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          <circle cx="32" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M16 52c0-12 8-18 16-18s16 6 16 18" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M44 24l8-8M52 24l-8-8" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: t.services.items.teamCoaching.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          <circle cx="20" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="44" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="32" cy="44" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M26 28l6 10M38 28l-6 10" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: t.services.items.leadershipDevelopment.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          <path d="M12 52L32 12L52 52H12Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="32" cy="36" r="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: t.services.items.outdoorCoaching.title,
      icon: (
        <svg viewBox="0 0 64 64" className="w-14 h-14">
          <path d="M8 52L24 20L36 40L44 28L56 52H8Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="48" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
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
              Who are we?
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-[#34323A] leading-relaxed font-medium">
              We are coaches, facilitators, and leadership developers at heart.
            </p>
            <p className="mt-6 text-xl md:text-2xl text-[#34323A]/70 leading-relaxed">
              We create sustainable change for the benefit of leaders, teams, and organizations.
            </p>
          </motion.div>
        </div>

        {/* Bottom section - Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
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
            Be inspired
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/4d" className="text-[#34323A] hover:text-[#A12F63] transition-colors flex items-center gap-2 text-lg">
              See all content
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
                <span className="text-[#A12F63] text-sm font-medium uppercase tracking-wider">Framework</span>
                <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-[#34323A]">
                  The 4D Model
                </h3>
                <p className="mt-3 text-[#34323A]/70">
                  Our proven framework for lasting transformation
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
                <span className="text-[#BFA27A] text-sm font-medium uppercase tracking-wider">Testimonials</span>
                <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-[#F7F6F5]">
                  Client Voices
                </h3>
                <p className="mt-3 text-[#F7F6F5]/70">
                  Hear from leaders who have transformed
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
                <span className="text-[#A12F63] text-sm font-medium uppercase tracking-wider">Gallery</span>
                <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-[#34323A]">
                  Our Sessions
                </h3>
                <p className="mt-3 text-[#34323A]/70">
                  Moments from coaching and development sessions
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
              Get in touch
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-[#F7F6F5]/70 leading-relaxed max-w-md">
              Contact us if you want to know more about our coaching and leadership development.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F7F6F5] text-[#34323A] font-medium hover:bg-[#EFEDEA] transition-colors"
              >
                Contact us
                <span className="text-xl">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#F7F6F5]/30 text-[#F7F6F5] font-medium hover:bg-[#F7F6F5]/10 transition-colors"
              >
                About us
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
                <p className="text-[#BFA27A] text-sm font-medium uppercase tracking-wider mb-2">Email</p>
                <a
                  href="mailto:contact@significanz.dk"
                  className="text-2xl md:text-3xl text-[#F7F6F5] hover:text-[#BFA27A] transition-colors font-[family-name:var(--font-playfair)]"
                >
                  contact@significanz.dk
                </a>
              </div>
              <div>
                <p className="text-[#BFA27A] text-sm font-medium uppercase tracking-wider mb-2">Location</p>
                <p className="text-2xl md:text-3xl text-[#F7F6F5] font-[family-name:var(--font-playfair)]">
                  Copenhagen, Denmark
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
