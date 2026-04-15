"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion, useInView } from "motion/react";
import { ContactFormPanel } from "@/components/forms/ContactFormPanel";

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const cardsRef = useRef<HTMLElement>(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-10%" });

  return (
    <>
      {/* Hero Section - Bright split: image+title left, form right */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-[#F7F6F5] min-h-screen flex items-stretch pt-20"
      >
        {/* Soft warm decorative blobs */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#BFA27A]/30 blur-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute -bottom-32 right-0 w-[28rem] h-[28rem] rounded-full bg-[#A12F63]/15 blur-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Full-bleed background image */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src="/images/hero/hero new.jpg"
            alt="Professional leadership coaching"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient so left text is readable on the lighter sky */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#34323A]/85 via-[#34323A]/60 to-[#34323A]/30" />
        </motion.div>

        <Container size="wide" className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-screen py-24">
            {/* Left: heading over the image */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-12 h-px bg-[#BFA27A]" />
                <span className="text-[#BFA27A] font-medium text-sm uppercase tracking-[0.2em]">
                  Let&apos;s Connect
                </span>
              </motion.div>

              <motion.h1
                className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1] sm:leading-[0.95]"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Start a<br />
                <span className="italic text-[#BFA27A]">meaningful</span>
                <br />
                conversation
              </motion.h1>

              <motion.p
                className="mt-8 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ready to explore how we can support your leadership journey?
                <br />
                We&apos;d love to hear from you.
              </motion.p>
            </div>

            {/* Right: Form as a contained box */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ContactFormPanel variant="solid" />
            </motion.div>
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
