"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { SplitText } from "@/components/animations/SplitText";
import { FadeIn } from "@/components/animations/FadeIn";
import { PurposeModel } from "@/components/diagrams/PurposeModel";
import { useTranslation } from "@/lib/i18n";

export default function HowWeWorkPage() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const segments = [
    { id: "professional", letter: "P", color: "bg-black" },
    { id: "private", letter: "P", color: "bg-gray-700" },
    { id: "personal", letter: "P", color: "bg-gray-500" },
    { id: "practice", letter: "P", color: "bg-gray-300" },
  ] as const;

  return (
    <>
      {/* Hero Section - Full immersive centered */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 20%, rgba(239,237,234,0.8) 0%, rgba(255,255,255,1) 50%, rgba(247,246,245,0.6) 100%)",
              "radial-gradient(ellipse at 70% 80%, rgba(247,246,245,0.8) 0%, rgba(255,255,255,1) 50%, rgba(239,237,234,0.6) 100%)",
              "radial-gradient(ellipse at 30% 20%, rgba(239,237,234,0.8) 0%, rgba(255,255,255,1) 50%, rgba(247,246,245,0.6) 100%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Grain texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none z-10" />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-[15%] left-[8%] w-40 h-40 border border-red/10 rounded-full"
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[25%] right-[12%] w-28 h-28 border border-gray-200/50 rotate-45"
          animate={{ y: [0, 40, 0], rotate: [45, 225, 405] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[15%] w-20 h-20 bg-red/5 rounded-full blur-sm"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[8%] w-3 h-3 bg-red/40 rounded-full"
          animate={{ y: [0, -20, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[60%] left-[5%] w-2 h-2 bg-gray-300 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />

        {/* Large ambient blobs */}
        <motion.div
          className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-peach/30 to-transparent blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-60 -right-60 w-[800px] h-[800px] rounded-full bg-gradient-to-tl from-cream/40 to-transparent blur-[120px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red/[0.02] blur-[80px]"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <Container size="wide" className="relative z-10">
          <motion.div
            style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Animated label */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-4"
            >
              <motion.div
                className="w-16 h-[1px] bg-gradient-to-r from-transparent to-red/60"
                initial={{ scaleX: 0 }}
                animate={heroInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <span className="text-red font-medium text-xs uppercase tracking-[0.25em]">
                {t.howWeWorkPage.ourApproach}
              </span>
              <motion.div
                className="w-16 h-[1px] bg-gradient-to-l from-transparent to-red/60"
                initial={{ scaleX: 0 }}
                animate={heroInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.div>

            {/* Main heading with character animation */}
            <h1 className="mt-10 font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] text-black tracking-tight leading-[1]">
              <SplitText splitType="chars" delay={0.4} staggerDelay={0.025}>
                {t.howWeWorkPage.title}
              </SplitText>
            </h1>

            {/* Animated accent line */}
            <motion.div
              className="mt-10 mx-auto flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                className="w-8 h-[2px] bg-red"
                initial={{ scaleX: 0 }}
                animate={heroInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-red"
                initial={{ scale: 0 }}
                animate={heroInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.5 }}
              />
              <motion.div
                className="w-8 h-[2px] bg-red"
                initial={{ scaleX: 0 }}
                animate={heroInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="mt-10 text-xl md:text-2xl lg:text-[1.75rem] text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {t.howWeWorkPage.subtitle}
            </motion.p>

            {/* Premium scroll indicator */}
            <motion.div
              className="mt-24 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <motion.div
                className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gray-300 to-red/40"
                animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <motion.div
                className="mt-4 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-3 rounded-full bg-gradient-to-b from-gray-300 to-red/60"
                  animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* The Model Section - Premium immersive */}
      <ModelSection />

      {/* Segment Details Section */}
      <SegmentDetailsSection segments={segments} />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}

function ModelSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const modelY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const modelScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="py-40 md:py-56 bg-cream relative overflow-hidden"
    >
      {/* Animated dot pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-32 left-16 w-72 h-72 rounded-full bg-gradient-to-br from-red/5 to-transparent blur-[80px]"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-96 h-96 rounded-full bg-gradient-to-tl from-peach/50 to-transparent blur-[100px]"
        animate={{ scale: [1.1, 1, 1.1], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Corner accents */}
      <motion.div
        className="absolute top-24 right-24 w-40 h-40 border-t border-r border-red/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-24 left-24 w-40 h-40 border-b border-l border-red/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-red/20"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <Container size="default" className="relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="w-12 h-[1px] bg-gradient-to-r from-transparent to-red/50"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <span className="text-red font-medium text-xs uppercase tracking-[0.25em]">
              {t.howWeWorkPage.theModel}
            </span>
            <motion.div
              className="w-12 h-[1px] bg-gradient-to-l from-transparent to-red/50"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black tracking-tight">
            <SplitText splitType="words" delay={0.5} staggerDelay={0.1}>
              {t.howWeWorkPage.modelTitle}
            </SplitText>
          </h2>

          <motion.p
            className="mt-8 text-lg md:text-xl text-gray-500 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t.howWeWorkPage.modelDescription}
          </motion.p>
        </motion.div>

        {/* The Interactive Diagram with parallax */}
        <motion.div
          className="mt-24 md:mt-32 relative"
          style={{ y: modelY, scale: modelScale }}
        >
          <PurposeModel className="pb-32" />
        </motion.div>
      </Container>
    </section>
  );
}

function SegmentDetailsSection({ segments }: { segments: readonly { id: "professional" | "private" | "personal" | "practice"; letter: string; color: string }[] }) {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5% 0px" });

  return (
    <section
      ref={sectionRef}
      className="py-40 md:py-56 bg-white relative overflow-hidden"
    >
      {/* Ambient background */}
      <motion.div
        className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full bg-cream/60 blur-[100px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-60 -left-60 w-[500px] h-[500px] rounded-full bg-peach/40 blur-[100px]"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <Container size="wide" className="relative z-10">
        {/* Section header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-red/50" />
              <span className="text-red font-medium text-xs uppercase tracking-[0.25em]">
                {t.howWeWorkPage.fourDimensions}
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-red/50" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-black tracking-tight">
              {t.howWeWorkPage.dimensionsTitle}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-500">
              {t.howWeWorkPage.dimensionsSubtitle}
            </p>
          </div>
        </FadeIn>

        {/* Premium staggered card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {segments.map((segment, index) => {
            const segmentData = t.howWeWorkPage.segments[segment.id];
            return (
              <motion.div
                key={segment.id}
                className={`group relative ${index % 2 === 1 ? "md:mt-20" : ""}`}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.15 + index * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <motion.div
                  className="relative p-10 md:p-14 bg-white border border-gray-100 overflow-hidden transition-all duration-700 hover:border-red/20"
                  whileHover={{
                    y: -12,
                    boxShadow: "0 40px 80px -20px rgba(0, 0, 0, 0.08)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Large background letter */}
                  <motion.span
                    className="absolute -top-10 -right-6 text-[220px] font-[family-name:var(--font-playfair)] text-gray-50 leading-none select-none"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  >
                    {segment.letter}
                  </motion.span>

                  {/* Index number */}
                  <motion.div
                    className="absolute top-8 right-8 text-[10px] text-gray-300 font-medium tracking-[0.2em]"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    0{index + 1}
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with glow effect */}
                    <motion.div
                      className={`w-18 h-18 ${segment.color} rounded-full flex items-center justify-center shadow-xl relative`}
                      style={{ width: "4.5rem", height: "4.5rem" }}
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-red/20 blur-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative text-white text-2xl font-[family-name:var(--font-playfair)]">
                        {segment.letter}
                      </span>
                    </motion.div>

                    <h3 className="mt-10 font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl text-black tracking-tight group-hover:text-red transition-colors duration-500">
                      {segmentData.title}
                    </h3>

                    {/* Animated accent line */}
                    <motion.div
                      className="mt-5 w-14 h-[2px] bg-gradient-to-r from-red to-red/50 origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    />

                    <p className="mt-6 text-gray-500 leading-relaxed text-lg md:text-xl">
                      {segmentData.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red-light to-red origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Corner accent */}
                  <motion.div
                    className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-red/0 group-hover:border-red/20 transition-all duration-500"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function CTASection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={sectionRef}
      className="py-40 md:py-56 bg-black relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 30% 50%, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 70%)",
            "radial-gradient(ellipse at 70% 50%, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 70%)",
            "radial-gradient(ellipse at 30% 50%, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 70%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Grain texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Animated accent glows */}
      <motion.div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red/8 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.08, 0.15, 0.08],
          x: [0, 80, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red/5 rounded-full blur-[100px]"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.05, 0.1, 0.05],
          x: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Decorative line */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-transparent via-red/20 to-red/40"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.2 }}
      />

      <Container size="default" className="relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Label */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="w-12 h-[1px] bg-gradient-to-r from-transparent to-red/50"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <span className="text-red font-medium text-xs uppercase tracking-[0.25em]">
              {t.howWeWorkPage.readyToBegin}
            </span>
            <motion.div
              className="w-12 h-[1px] bg-gradient-to-l from-transparent to-red/50"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Heading */}
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight">
            <SplitText splitType="words" delay={0.5} staggerDelay={0.1}>
              {t.howWeWorkPage.discoverPurpose}
            </SplitText>
          </h2>

          {/* Animated accent */}
          <motion.div
            className="mt-8 mx-auto flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            <motion.div
              className="w-6 h-[2px] bg-red"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            />
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-red"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 1.1 }}
            />
            <motion.div
              className="w-6 h-[2px] bg-red"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-10 text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t.howWeWorkPage.ctaDescription}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link href="/contact">
              <Button variant="accent" size="lg" data-cursor="pointer">
                {t.howWeWorkPage.startConversation}
              </Button>
            </Link>
          </motion.div>

          {/* Decorative bottom dots */}
          <motion.div
            className="mt-24 flex justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full bg-red/30"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
