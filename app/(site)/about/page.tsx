"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "motion/react";
import { SplitText } from "@/components/animations/SplitText";
import { FadeIn } from "@/components/animations/FadeIn";
import { useTranslation } from "@/lib/i18n";
import { PurposeModel } from "@/components/diagrams/PurposeModel";
import { PyramidModel, pyramidLevels } from "@/components/diagrams/PyramidModel";

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
    title: "Creating enablement",
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

// Expandable framework card
function FrameworkCard({
  title,
  description,
  accentColor,
  bg = "bg-white",
  children,
}: {
  title: string;
  description: string;
  accentColor: string;
  bg?: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeIn>
      <div className={`${bg} border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-lg`}>
        {/* Accent line top -always visible */}
        <div className="h-[3px]" style={{ backgroundColor: accentColor }} />

        {/* Collapsed header -always visible */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left px-8 md:px-12 py-8 md:py-10 flex items-center justify-between gap-6 group cursor-pointer"
        >
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#34323A] tracking-tight">
              {title}
            </h3>
            <p className="mt-2 text-gray-600 max-w-2xl">
              {description}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <motion.span
              className="text-sm font-medium hidden sm:block"
              style={{ color: accentColor }}
              animate={{ x: isOpen ? 0 : [0, 4, 0] }}
              transition={isOpen ? {} : { duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              {isOpen ? "Close" : "Explore →"}
            </motion.span>
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: isOpen ? accentColor : "#E5E7EB",
                backgroundColor: isOpen ? accentColor : "transparent",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"
                className="transition-colors"
                style={{ color: isOpen ? "white" : "#6B7280" }}
              >
                <line x1="7" y1="1" x2="7" y2="13" />
                <line x1="1" y1="7" x2="13" y2="7" />
              </svg>
            </motion.div>
          </div>
        </button>

        {/* Expandable content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-8 md:px-12 py-10 md:py-16">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
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
                Founder and CEO of Significanz
              </motion.p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stinne Madsen Bio Section */}
      <section className="py-24 md:py-32 bg-[#F7F6F5]">
        <Container size="default">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                Founder
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
                Stinne Madsen
              </h2>
              <p className="mt-2 text-lg text-[#A12F63] font-medium">
                Founder and CEO of Significanz
              </p>
              <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                With a Master&apos;s degree in Economics, Law &amp; Sociology and a degree in Psychotherapy, Stinne brings a rare combination of academic depth and real-world leadership experience. Over 15+ years as an executive coach, she has worked across complex global organisations, from pharma to tech, having held senior roles including Country Manager for Ireland &amp; the UK and Head of HR Europe. Since 2001, she has partnered with 50+ companies to unlock leadership potential and drive meaningful change.
              </p>
            </div>
          </FadeIn>
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
      <section id="our-edge" className="py-24 md:py-32 bg-white scroll-mt-20">
        <Container size="wide">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                What sets us apart
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
                Every solution we build is engineered around your exact needs, not adapted from someone else&apos;s.
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

      {/* Our Frameworks */}
      <section id="framework" className="py-24 md:py-32 bg-white scroll-mt-20">
        <Container size="wide">
          {/* Overarching intro */}
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                How we work
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight max-w-4xl mx-auto">
                At Significanz, we use three core frameworks to give leaders and teams a shared language, turning the invisible visible in every engagement.
              </h2>
            </div>
          </FadeIn>

          {/* Framework cards */}
          <div className="space-y-6">
            {/* 5P Model card */}
            <FrameworkCard
              title={t.aboutPage.fivePsTitle}
              description={t.aboutPage.fivePsDescription}
              accentColor="#A12F63"
            >
              <PurposeModel
                interactive={true}
                showDecorations={true}
                size="default"
              />
            </FrameworkCard>

            {/* Mastery Framework card */}
            <div id="mastery-framework" className="scroll-mt-20">
              <FrameworkCard
                title="The Mastery Triangle"
                description="True mastery emerges when deep self-awareness combines with strategic leverage to create lasting, transformative impact."
                accentColor="#BFA27A"
                bg="bg-[#FAFAF8]"
              >
                <PyramidModel />
              </FrameworkCard>
            </div>

            {/* 4D Model - Expandable placeholder */}
            <div id="4d-framework" className="scroll-mt-20">
              <FrameworkCard
                title="The 4D Model"
                description="A structured approach to organizational transformation through four phases: Discover, Define, Design, and Deploy."
                accentColor="#34323A"
                bg="bg-white"
              >
                <div className="text-center py-8">
                  <p className="text-gray-500 italic">
                    Content for the 4D Model framework is being prepared. Check back soon for details on our Discover, Define, Design, and Deploy methodology.
                  </p>
                </div>
              </FrameworkCard>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
