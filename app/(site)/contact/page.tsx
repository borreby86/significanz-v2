"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion, useInView } from "motion/react";

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const cardsRef = useRef<HTMLElement>(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-10%" });

  return (
    <>
      {/* Hero Section - Split Design */}
      <section
        ref={heroRef}
        className="min-h-screen relative overflow-hidden bg-[#34323A]"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#A12F63]/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#BFA27A]/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <Container size="wide" className="relative z-10 h-full">
          <div className="min-h-screen flex items-center py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
              {/* Left: Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="w-12 h-px bg-[#A12F63]" />
                  <span className="text-[#A12F63] font-medium text-sm uppercase tracking-[0.2em]">
                    Let's Connect
                  </span>
                </motion.div>

                <motion.h1
                  className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Start a{" "}
                  <span className="italic text-[#BFA27A]">meaningful</span>{" "}
                  conversation
                </motion.h1>

                <motion.p
                  className="mt-8 text-xl md:text-2xl text-white/70 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Ready to explore how we can support your leadership journey? We'd love to hear from you.
                </motion.p>

                {/* Email CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-12"
                >
                  <a
                    href="mailto:welcome@significanz.dk"
                    className="group inline-flex items-center gap-4 px-8 py-5 bg-[#A12F63] text-white font-medium hover:bg-[#8a2854] transition-all duration-300 text-lg"
                  >
                    <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    welcome@significanz.dk
                    <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </motion.div>
              </div>

              {/* Right: Image with overlay card */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* Main image container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/hero/hero new.jpg"
                    alt="Professional leadership coaching"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#34323A]/60 via-transparent to-transparent" />
                </div>

                {/* Floating card */}
                <motion.div
                  className="absolute -bottom-8 -left-8 bg-white p-6 md:p-8 max-w-xs shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="w-10 h-10 bg-[#A12F63]/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-[#A12F63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-[#34323A] font-medium">Based in Copenhagen</p>
                  <p className="text-[#34323A]/60 text-sm mt-1">Working with leaders globally</p>
                </motion.div>

                {/* Decorative element */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#BFA27A]/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Methods Section */}
      <section ref={cardsRef} className="py-24 md:py-32 bg-[#F7F6F5]">
        <Container size="wide">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#34323A] italic">
              Ways to reach us
            </h2>
            <p className="mt-4 text-lg text-[#34323A]/70 max-w-lg mx-auto">
              Choose how you'd like to connect. We're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <motion.a
              href="mailto:welcome@significanz.dk"
              className="group relative bg-white p-8 md:p-10 border border-[#34323A]/10 hover:border-[#A12F63] transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-[#A12F63] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#A12F63]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center mb-6 transition-colors duration-500">
                  <svg className="w-7 h-7 text-[#A12F63] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#34323A] group-hover:text-white transition-colors duration-500 mb-2">
                  Email
                </h3>
                <p className="text-[#34323A]/60 group-hover:text-white/80 transition-colors duration-500 text-sm mb-4">
                  Drop us a line anytime
                </p>
                <span className="text-[#A12F63] group-hover:text-white font-medium transition-colors duration-500">
                  welcome@significanz.dk
                </span>
              </div>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/stinne-madsen/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white p-8 md:p-10 border border-[#34323A]/10 hover:border-[#BFA27A] transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-[#BFA27A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#BFA27A]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center mb-6 transition-colors duration-500">
                  <svg className="w-7 h-7 text-[#BFA27A] group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#34323A] group-hover:text-white transition-colors duration-500 mb-2">
                  LinkedIn
                </h3>
                <p className="text-[#34323A]/60 group-hover:text-white/80 transition-colors duration-500 text-sm mb-4">
                  Connect with Stinne
                </p>
                <span className="text-[#BFA27A] group-hover:text-white font-medium transition-colors duration-500">
                  Stinne Madsen
                </span>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href="tel:+4531753125"
              className="group relative bg-white p-8 md:p-10 border border-[#34323A]/10 hover:border-[#34323A] transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-[#34323A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#34323A]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center mb-6 transition-colors duration-500">
                  <svg className="w-7 h-7 text-[#34323A] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#34323A] group-hover:text-white transition-colors duration-500 mb-2">
                  Phone
                </h3>
                <p className="text-[#34323A]/60 group-hover:text-white/80 transition-colors duration-500 text-sm mb-4">
                  Mon-Fri, 9-17 CET
                </p>
                <span className="text-[#34323A] group-hover:text-white font-medium transition-colors duration-500">
                  +45 3175 3125
                </span>
              </div>
            </motion.a>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#A12F63]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#BFA27A]/5 rounded-full translate-x-1/2 translate-y-1/2" />

        <Container size="default" className="relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[#34323A]">
                Explore how we can{" "}
                <span className="italic text-[#A12F63]">collaborate</span>
              </h2>
              <p className="mt-6 text-lg text-[#34323A]/70 max-w-xl mx-auto">
                Learn more about our services and find the right approach for your leadership development journey.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/collaborate"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#34323A] text-white font-medium hover:bg-[#4A484F] transition-colors"
                >
                  Our Services
                  <span className="text-xl">→</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#34323A] text-[#34323A] font-medium hover:bg-[#34323A] hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
