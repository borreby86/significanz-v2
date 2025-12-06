"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, useInView } from "motion/react";
import { SplitText } from "@/components/animations/SplitText";
import { PurposeModel, segments } from "@/components/diagrams/PurposeModel";
import { useTranslation } from "@/lib/i18n";

const segmentOrder = ["professional", "private", "personal", "practice"] as const;

export default function HowWeWorkPage() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 150]);
  const heroScale = useTransform(heroScrollProgress, [0, 0.5], [1, 0.95]);

  return (
    <>
      {/* Hero Section */}
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

            {/* Main heading */}
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

            {/* Scroll indicator */}
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

      {/* Sticky Scroll Section - Each dimension revealed as user scrolls */}
      <StickyScrollSection />

      {/* Interactive Final Section - Hover to explore */}
      <InteractiveModelSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}

function StickyScrollSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Update current segment based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * 4), 3);
    setCurrentSegmentIndex(index);
  });

  const currentSegmentId = segmentOrder[currentSegmentIndex];
  const currentSegment = segments.find((s) => s.id === currentSegmentId);
  const segmentTranslation = t.howWeWorkPage.segments[currentSegmentId];

  // Transform values for smooth animations
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.23, 0.25, 0.28, 0.48, 0.5, 0.53, 0.73, 0.75, 0.78, 0.95, 1],
    [0, 1, 1, 0.3, 1, 1, 0.3, 1, 1, 0.3, 1, 1, 1]
  );

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh]" // 4x viewport height for 4 segments
    >
      {/* Sticky inner container */}
      <div className="sticky top-0 h-screen overflow-hidden bg-cream">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-dots opacity-20" />
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

        {/* Progress bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200/50 z-50">
          <motion.div
            className="h-full bg-red"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Progress indicators */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
          {segmentOrder.map((id, index) => (
            <motion.div
              key={id}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentSegmentIndex ? "bg-red" : "bg-gray-300"
              }`}
              animate={{
                scale: index === currentSegmentIndex ? 1.3 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        {/* Main content - split layout */}
        <Container size="wide" className="h-full relative z-10">
          <div className="h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">
              {/* Left side - Text content */}
              <motion.div
                className="order-2 lg:order-1"
                style={{ opacity: contentOpacity }}
              >
                {/* Phase indicator */}
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-12 h-[1px] bg-red/50" />
                  <span className="text-red font-medium text-xs uppercase tracking-[0.25em]">
                    {t.howWeWorkPage.fourDimensions} — {String(currentSegmentIndex + 1).padStart(2, "0")}
                  </span>
                </motion.div>

                {/* Dimension title - animated on change */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSegmentId}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black tracking-tight leading-[0.95]">
                      {segmentTranslation.title}
                    </h2>

                    {/* Accent line */}
                    <motion.div
                      className="mt-8 w-20 h-[3px] bg-red"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    {/* Description */}
                    <motion.p
                      className="mt-8 text-xl md:text-2xl text-gray-500 leading-relaxed max-w-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {segmentTranslation.description}
                    </motion.p>

                    {/* Large letter decoration */}
                    <motion.div
                      className="absolute -bottom-20 -left-10 text-[300px] font-[family-name:var(--font-playfair)] text-gray-100/50 leading-none select-none pointer-events-none hidden lg:block"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {segmentTranslation.title.charAt(0)}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Right side - Model with highlighted segment */}
              <div className="order-1 lg:order-2 flex items-center justify-center">
                <div className="relative w-full max-w-[450px]">
                  <PurposeModel
                    highlightedSegment={currentSegmentId}
                    interactive={false}
                    showDecorations={false}
                    size="compact"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll hint at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <motion.div
            className="text-xs text-gray-400 uppercase tracking-widest mb-2"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {currentSegmentIndex < 3 ? "Scroll to continue" : "Almost there"}
          </motion.div>
          <motion.div
            className="w-6 h-10 border border-gray-300 rounded-full flex items-start justify-center p-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-red rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InteractiveModelSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  const hoveredSegmentData = segments.find((s) => s.id === hoveredSegment);
  const hoveredTranslation = hoveredSegment
    ? t.howWeWorkPage.segments[hoveredSegment as keyof typeof t.howWeWorkPage.segments]
    : null;

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 bg-white relative overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cream/50 blur-[100px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-peach/30 blur-[100px]"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <Container size="wide" className="relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-red/50" />
            <span className="text-red font-medium text-xs uppercase tracking-[0.25em]">
              {t.howWeWorkPage.theModel}
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-red/50" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-black tracking-tight">
            {t.howWeWorkPage.modelTitle}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500">
            {t.howWeWorkPage.modelDescription}
          </p>
        </motion.div>

        {/* Interactive Model Area */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[500px]">
            {/* Model - animates left when card appears */}
            <motion.div
              className="relative flex justify-center"
              animate={{
                x: hoveredSegment ? -20 : 0,
                scale: hoveredSegment ? 0.95 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-full max-w-[450px]">
                <PurposeModel
                  interactive={true}
                  showDecorations={true}
                  onSegmentHover={setHoveredSegment}
                />
              </div>
            </motion.div>

            {/* Card area - slides in from right on hover */}
            <div className="relative h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                {hoveredSegmentData && hoveredTranslation ? (
                  <motion.div
                    key={hoveredSegment}
                    initial={{ opacity: 0, x: 80, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 40, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="w-full bg-white shadow-2xl border border-gray-100 p-10 md:p-14 relative overflow-hidden">
                      {/* Decorative accent */}
                      <motion.div
                        className="absolute top-0 left-0 bottom-0 w-1.5 bg-red"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Large background letter */}
                      <motion.span
                        className="absolute -top-10 -right-6 text-[200px] font-[family-name:var(--font-playfair)] text-gray-50 leading-none select-none"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {hoveredTranslation.title.charAt(0)}
                      </motion.span>

                      {/* Content */}
                      <div className="relative z-10">
                        <motion.span
                          className="text-red font-medium text-xs uppercase tracking-[0.2em]"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          Dimension
                        </motion.span>

                        <motion.h3
                          className="mt-4 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-black tracking-tight"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          {hoveredTranslation.title}
                        </motion.h3>

                        <motion.div
                          className="mt-6 w-16 h-[3px] bg-red"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />

                        <motion.p
                          className="mt-6 text-gray-600 text-lg leading-relaxed"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 }}
                        >
                          {hoveredTranslation.description}
                        </motion.p>
                      </div>

                      {/* Corner accents */}
                      <motion.div
                        className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-red/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full text-center p-10"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-6">
                      <motion.svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </motion.svg>
                    </div>
                    <p className="text-gray-500 text-lg">
                      Hover over the model to explore each dimension
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Each segment represents a key aspect of integrated leadership
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
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
