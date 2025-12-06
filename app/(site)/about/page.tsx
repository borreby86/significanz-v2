"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { SplitText } from "@/components/animations/SplitText";
import { FadeIn } from "@/components/animations/FadeIn";
import { GradientDivider } from "@/components/ui/SectionDivider";
import { useTranslation } from "@/lib/i18n";

// Sticky Card Section Component
function StickyCards() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const logic = [
    {
      id: "peopleContribute",
      icon: "01",
    },
    {
      id: "bothAnd",
      icon: "02",
    },
    {
      id: "integratedSelf",
      icon: "03",
    },
  ] as const;

  return (
    <div ref={containerRef} className="relative">
      {logic.map((item, index) => {
        const targetScale = 1 - (logic.length - 1 - index) * 0.05;
        return (
          <StickyCard
            key={item.id}
            item={item}
            index={index}
            progress={scrollYProgress}
            targetScale={targetScale}
            range={[index * 0.25, 1]}
          />
        );
      })}
    </div>
  );
}

function StickyCard({
  item,
  index,
  progress,
  targetScale,
  range,
}: {
  item: { id: "peopleContribute" | "bothAnd" | "integratedSelf"; icon: string };
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  targetScale: number;
  range: [number, number];
}) {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const logicItem = t.aboutPage.logic[item.id];

  return (
    <div
      ref={cardRef}
      className="h-screen flex items-center justify-center sticky top-0"
      style={{ zIndex: index }}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full max-w-4xl mx-auto p-12 md:p-16 bg-white border border-warm-gray-dark shadow-xl"
      >
        {/* Large number decoration */}
        <span className="absolute -top-8 -left-8 text-[120px] font-[family-name:var(--font-playfair)] text-gray-100 leading-none select-none">
          {item.icon}
        </span>

        {/* Warm accent blob */}
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 bg-peach rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative z-10">
          <span className="text-red font-medium text-sm uppercase tracking-wider">
            {logicItem.label}
          </span>
          <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
            {logicItem.title}
          </h3>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
            {logicItem.description}
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-red/30" />
      </motion.div>
    </div>
  );
}

// 5P Interactive Wheel Component
function FivePWheel() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  const fivePs = [
    { id: "professional", color: "bg-red" },
    { id: "personal", color: "bg-black" },
    { id: "private", color: "bg-gray-700" },
    { id: "purpose", color: "bg-red/80" },
    { id: "practice", color: "bg-black/80" },
  ] as const;

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Grain texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

      {/* Floating red accent */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-red/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                {t.aboutPage.ourFramework}
              </span>
            </motion.div>

            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
              <SplitText splitType="words" delay={0.2} staggerDelay={0.08}>
                {t.aboutPage.fivePsTitle}
              </SplitText>
            </h2>

            <motion.div
              className="mt-6 w-20 h-0.5 bg-red origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            <motion.p
              className="mt-8 text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.aboutPage.fivePsDescription}
            </motion.p>
          </div>

          {/* Right: Interactive 5P List */}
          <div className="space-y-4">
            {fivePs.map((p, index) => {
              const pData = t.aboutPage.fivePs[p.id];
              return (
                <motion.div
                  key={p.id}
                  className="group relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-red/30 transition-all duration-300 cursor-pointer">
                    {/* Large P letter */}
                    <motion.span
                      className={`w-14 h-14 ${p.color} rounded-full flex items-center justify-center text-white text-xl font-[family-name:var(--font-playfair)]`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {pData.name.charAt(0)}
                    </motion.span>

                    <div className="flex-1">
                      <h3 className="text-white font-medium text-lg group-hover:text-red transition-colors duration-300">
                        {pData.name}
                      </h3>
                      <p className="mt-1 text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">
                        {pData.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <motion.span
                      className="text-gray-600 group-hover:text-red transition-colors duration-300"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      &rarr;
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

// Differentiators Bento Grid
function DifferentiatorsBento() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  const differentiators = [
    { id: "instantOutcomes", number: "01" },
    { id: "creatingEnablement", number: "02" },
    { id: "techForward", number: "03" },
    { id: "trustedPartner", number: "04" },
  ] as const;

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-warm-gray relative overflow-hidden">
      {/* Warm decorative blobs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-peach rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.4 } : {}}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-cream rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-red font-medium text-sm uppercase tracking-wider">
              {t.aboutPage.ourEdge}
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
              {t.aboutPage.differentiatorTitle}
            </h2>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => {
            const diffData = t.aboutPage.differentiators[item.id];
            return (
              <motion.div
                key={item.id}
                className={`group relative ${index === 0 ? 'md:col-span-2' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <motion.div
                  className={`
                  relative p-8 md:p-10 bg-white border border-warm-gray-dark overflow-hidden
                  ${index === 0 ? 'md:flex md:items-center md:gap-12' : ''}
                  shadow-sm hover:shadow-xl transition-all duration-500
                `}
                  whileHover={{ y: -5 }}
                >
                  {/* Large number background */}
                  <span className={`
                  absolute font-[family-name:var(--font-playfair)] text-gray-100 leading-none select-none
                  ${index === 0 ? 'text-[200px] -top-16 -right-8' : 'text-[120px] -top-8 -right-4'}
                `}>
                    {item.number}
                  </span>

                  {/* Content */}
                  <div className={`relative z-10 ${index === 0 ? 'md:flex-1' : ''}`}>
                    <span className="text-red font-medium text-sm">
                      {item.number}
                    </span>
                    <h3 className={`
                    mt-3 font-[family-name:var(--font-playfair)] text-black tracking-tight
                    ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}
                  `}>
                      {diffData.title}
                    </h3>
                    <p className={`mt-4 text-gray-600 leading-relaxed ${index === 0 ? 'text-lg' : ''}`}>
                      {diffData.description}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-red"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
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

  const clientExperience = [
    { id: "evidenceBased" },
    { id: "visibleProgress" },
    { id: "safetyFirst" },
    { id: "coCreation" },
  ] as const;

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

        {/* Decorative blobs */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-peach blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full bg-cream blur-3xl"
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

              {/* Scroll indicator */}
              <motion.div
                className="hidden lg:flex items-center gap-3 mt-16"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.div
                  className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-1 h-2 bg-gray-400 rounded-full"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  {t.aboutPage.scrollToExplore}
                </span>
              </motion.div>
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
                  src="/images/about/portrait.jpg"
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
            </div>
          </div>
        </Container>
      </section>

      {/* Gradient transition */}
      <GradientDivider fromColor="#FFFFFF" toColor="#FDF8F3" height={100} />

      {/* Purpose Section - Large Typography */}
      <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
        {/* Warm blobs */}
        <motion.div
          className="absolute -top-40 right-1/4 w-80 h-80 bg-peach rounded-full blur-3xl opacity-30"
        />

        <Container size="default">
          <FadeIn>
            <div className="text-center">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                {t.aboutPage.ourPurpose}
              </span>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-black tracking-tight">
                {t.aboutPage.purposeTitle}
              </h2>
              <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t.aboutPage.purposeDescription}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Philosophy - Full Width Black Section */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        {/* Grain texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

        {/* Red accent glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <Container size="wide" className="relative z-10">
          <FadeIn>
            <div className="text-center">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                {t.aboutPage.ourPhilosophy}
              </span>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
                {t.aboutPage.philosophyTitle}
              </h2>
              <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {t.aboutPage.philosophyDescription}
              </p>
            </div>
          </FadeIn>

          {/* Formula display */}
          <FadeIn delay={0.2}>
            <div className="mt-16 p-12 md:p-16 border border-white/10 backdrop-blur-sm text-center relative overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red/50" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red/50" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red/50" />

              <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-8 text-2xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)]">
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {t.aboutPage.ability}
                </motion.span>
                <motion.span
                  className="text-gray-600"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  &times;
                </motion.span>
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {t.aboutPage.willingness}
                </motion.span>
                <motion.span
                  className="text-gray-600"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  =
                </motion.span>
                <motion.span
                  className="text-red"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  {t.aboutPage.meaningfulImpact}
                </motion.span>
              </div>
              <p className="mt-10 text-gray-500 max-w-xl mx-auto">
                {t.aboutPage.enablementDescription}
              </p>
            </div>
          </FadeIn>

          {/* Quote */}
          <FadeIn delay={0.3}>
            <blockquote className="mt-16 text-center relative">
              {/* Large quote marks */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[100px] font-serif text-white/10 leading-none select-none">
                &ldquo;
              </span>
              <p className="text-xl md:text-2xl text-gray-300 italic max-w-3xl mx-auto relative z-10">
                &ldquo;{t.aboutPage.quote}&rdquo;
              </p>
              <footer className="mt-6 text-red font-medium">— {t.aboutPage.quoteAuthor}</footer>
            </blockquote>
          </FadeIn>
        </Container>
      </section>

      {/* Gradient transition */}
      <GradientDivider fromColor="#000000" toColor="#FFFFFF" height={100} />

      {/* Sticky Cards - Our Logic */}
      <section className="bg-white relative">
        <Container size="wide">
          <FadeIn>
            <div className="text-center pt-24 md:pt-32 pb-16">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                {t.aboutPage.whatWeBelieve}
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
                {t.aboutPage.ourLogicTitle}
              </h2>
            </div>
          </FadeIn>
        </Container>

        <StickyCards />

        {/* Spacer for sticky effect */}
        <div className="h-[50vh]" />
      </section>

      {/* 5P Framework */}
      <FivePWheel />

      {/* Gradient transition */}
      <GradientDivider fromColor="#000000" toColor="#F7F5F3" height={100} />

      {/* Differentiators Bento Grid */}
      <DifferentiatorsBento />

      {/* Gradient transition */}
      <GradientDivider fromColor="#F7F5F3" toColor="#FFFFFF" height={100} />

      {/* Client Experience Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Warm accent */}
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-cream rounded-full blur-3xl opacity-60"
        />

        <Container size="default" className="relative z-10">
          <FadeIn>
            <div className="text-center">
              <span className="text-red font-medium text-sm uppercase tracking-wider">
                {t.aboutPage.workingTogether}
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
                {t.aboutPage.clientExperienceTitle}
              </h2>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                {t.aboutPage.clientExperienceSubtitle}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {clientExperience.map((item, index) => {
                const expData = t.aboutPage.clientExperience[item.id];
                return (
                  <motion.div
                    key={item.id}
                    className="group p-8 border border-warm-gray-dark bg-white hover:bg-cream transition-all duration-300 relative overflow-hidden"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Number decoration */}
                    <span className="absolute top-4 right-4 text-4xl font-[family-name:var(--font-playfair)] text-gray-100">
                      0{index + 1}
                    </span>

                    <h4 className="font-medium text-black text-lg group-hover:text-red transition-colors duration-300">
                      {expData.title}
                    </h4>
                    <p className="mt-2 text-gray-600">{expData.description}</p>

                    {/* Hover line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-red"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" data-cursor="pointer">
                  {t.aboutPage.startConversation}
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
