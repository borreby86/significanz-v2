"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "motion/react";
import { SplitText } from "@/components/animations/SplitText";
import { FadeIn } from "@/components/animations/FadeIn";
import { useTranslation } from "@/lib/i18n";
import { PurposeModel } from "@/components/diagrams/PurposeModel";

// Our Edge data
const ourEdgeItems = [
  {
    number: "01",
    title: "Instant outcomes",
    shortDesc: "Results from day one through deep listening.",
    longDesc: "From day one, you and your organisation see progress. We listen carefully, identify what matters most, and translate it into clear actions. Early results create direction and momentum. The work stays practical and focused on your organisation's real needs, so value becomes visible quickly and can be built upon.",
  },
  {
    number: "02",
    title: "Creating Enablement",
    shortDesc: "Self-sufficient clients who continue independently.",
    longDesc: "We build lasting capability with you and your organisation. Through shared work, simple methods, and clear handovers, your organisation gains confidence and control. You and your organisation develop the ability to maintain momentum, make sound decisions, and improve step by step. The result is strength that continues independently.",
  },
  {
    number: "03",
    title: "Tech-forward",
    shortDesc: "AI-integrated discovery and deployment.",
    longDesc: "We integrate modern technology into your organisation's work. AI supports discovery, helps identify patterns, and accelerates delivery. Technology strengthens decision-making and execution across your organisation. This creates a smoother path from insight to implementation and improves speed, quality, and consistency.",
  },
  {
    number: "04",
    title: "Trusted partner",
    shortDesc: "Deep listening. Kind challenges.",
    longDesc: "We build trust with you and your organisation through attention, reliability, and integrity. Deep listening creates understanding, and respectful challenges bring clarity. We help you and your organisation surface what matters, agree priorities, and act with confidence. The partnership is steady, professional, and focused on meaningful progress.",
  },
];

// Our Edge Card Component
function OurEdgeCard({ item, index }: { item: typeof ourEdgeItems[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white p-8 md:p-10 cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Number */}
      <span className="text-red text-sm font-medium tracking-wider mb-4 block">
        {item.number}
      </span>

      {/* Title */}
      <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#34323A] mb-4">
        {item.title}
      </h3>

      {/* Description - toggles between short and long */}
      <AnimatePresence mode="wait">
        <motion.p
          key={isHovered ? "long" : "short"}
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {isHovered ? item.longDesc : item.shortDesc}
        </motion.p>
      </AnimatePresence>

      {/* Hover indicator line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-red"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

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
                  src="/images/photo til about siden.jpg"
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

              {/* Founder caption */}
              <motion.p
                className="mt-4 text-center text-sm text-[#34323A]/60 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Our founder Stinne Madsen
              </motion.p>
            </div>
          </div>
        </Container>
      </section>

      {/* Purpose Section */}
      <section id="purpose" className="py-24 md:py-32 bg-white scroll-mt-20">
        <Container size="default">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                Purpose
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
                Creating meaningful impact
              </h2>

              <div className="mt-10 space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>Significanz is about helping leaders and organizations create meaningful impact so they can assume responsibility and take the right action at the right time.</p>
                <p>We excel in enabling individuals, teams and organizations to combine the ability to act with the willingness of both the individual and the group to create meaningful impact.</p>
                <p>Creating impactful actions that makes sense for the overall purpose of organization is at the core of everything we do. First things first - why is the business, organization or NGO in the first place - that&apos;s where we start in our discovery phase.</p>
              </div>

              {/* Highlighted quote */}
              <p className="mt-10 font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#A12F63] italic leading-relaxed">
                We are coaches, facilitators, and leadership developers at heart.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Our Edge Section */}
      <section id="our-edge" className="py-24 md:py-32 bg-[#F7F6F5] scroll-mt-20">
        <Container size="wide">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                Our Edge
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
                What sets us apart
              </h2>
            </div>
          </FadeIn>

          {/* 4 Wide Cards with Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ourEdgeItems.map((item, index) => (
              <OurEdgeCard key={item.number} item={item} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* The 5P's of Integrated Self-Leadership */}
      <section id="framework" className="py-24 md:py-32 bg-white scroll-mt-20">
        <Container size="wide">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                {t.aboutPage.ourFramework}
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
                {t.aboutPage.fivePsTitle}
              </h2>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                {t.aboutPage.fivePsDescription}
              </p>
            </div>
          </FadeIn>

          {/* 5P Model Diagram */}
          <FadeIn delay={0.2}>
            <PurposeModel
              interactive={true}
              showDecorations={true}
              size="default"
            />
          </FadeIn>
        </Container>
      </section>

      {/* Philosophy Section - HIDDEN per client request */}
      {/*
      <section id="our-philosophy" className="py-24 md:py-32 bg-black relative overflow-hidden scroll-mt-20">
        ... Philosophy content removed ...
      </section>
      */}

      {/* Contact Section - Email Only */}
      <section className="py-20 sm:py-28 md:py-36 lg:py-48 bg-white">
        <Container size="default">
          <FadeIn>
            <div className="text-center">
              <span className="text-[#A12F63] font-medium text-sm uppercase tracking-[0.2em]">
                Get in Touch
              </span>
              <h2 className="mt-4 sm:mt-6 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#34323A] italic">
                Let&apos;s start a conversation
              </h2>
              <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-[#34323A]/70 leading-relaxed max-w-2xl mx-auto">
                Ready to create meaningful impact? We&apos;d love to hear from you.
              </p>
              <a
                href="mailto:welcome@significanz.dk"
                className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-[#A12F63] text-white font-medium hover:bg-[#8a2854] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                welcome@significanz.dk
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

    </>
  );
}
