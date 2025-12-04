"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";
import { SplitText, AnimatedUnderline } from "@/components/animations/SplitText";

interface HeroProps {
  showCtas?: boolean;
}

export function Hero({ showCtas = true }: HeroProps) {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-warm-radial pointer-events-none" />

      {/* Subtle grain texture overlay - increased opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-10 bg-noise" />

      {/* Large decorative warm blob - top left */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-peach blur-3xl animate-float-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      />

      {/* Decorative warm blob - bottom right */}
      <motion.div
        className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full bg-cream blur-3xl animate-float-delayed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div style={{ y: textY, opacity }} className="order-2 lg:order-1">
            {/* Animated headline with split text */}
            <div className="overflow-hidden">
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tight leading-[1.1]">
                <SplitText splitType="words" delay={0.2} staggerDelay={0.1}>
                  {t.hero.title}
                </SplitText>
              </h1>
            </div>

            {/* Animated underline accent */}
            <motion.div
              className="mt-6 w-24 h-1 bg-red origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* Subtitle with line reveal */}
            <motion.p
              className="mt-8 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs with staggered animation */}
            {showCtas && (
              <motion.div
                className="mt-12 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link href="/contact">
                  <Button variant="primary" size="lg" data-cursor="pointer">
                    {t.hero.ctaBook}
                  </Button>
                </Link>
                <Link href="/4d">
                  <Button variant="secondary" size="lg" data-cursor="pointer">
                    {t.hero.ctaServices}
                  </Button>
                </Link>
              </motion.div>
            )}

            {/* Scroll indicator */}
            <motion.div
              className="hidden lg:flex items-center gap-3 mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
                Scroll
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Image with parallax */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              className="aspect-[4/5] lg:aspect-[3/4] relative overflow-hidden"
              style={{ y: imageY, scale: imageScale }}
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src="/images/hero/hero-portrait.jpg"
                alt="Executive coaching in nature"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>

            {/* Floating accent element - increased opacity */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-red/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Corner accent line - increased opacity */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-red/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />

            {/* Additional warm accent */}
            <motion.div
              className="absolute top-1/3 -right-8 w-16 h-16 bg-peach rounded-full blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </div>
        </div>
      </Container>

      {/* Background decoration - warm gradient */}
      <motion.div
        className="absolute top-1/4 right-0 w-1/2 h-2/3 bg-gradient-to-l from-cream to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 bg-dots-warm opacity-30 pointer-events-none" />
    </section>
  );
}
