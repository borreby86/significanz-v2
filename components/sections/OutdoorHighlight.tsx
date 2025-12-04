"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useTranslation } from "@/lib/i18n";
import { SplitText } from "@/components/animations/SplitText";

export function OutdoorHighlight() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0.5]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.div className="w-full h-[120%] relative" style={{ scale: imageScale }}>
          <Image
            src="/images/outdoor/nature-hero.jpg"
            alt="Nature coaching environment"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      {/* Grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-noise z-10" />

      <Container size="wide" className="relative z-20">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red font-medium text-sm uppercase tracking-wider">
              {t.outdoor.label}
            </span>
          </motion.div>

          {/* Title with split text */}
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            <SplitText splitType="words" delay={0.2} staggerDelay={0.1}>
              {t.outdoor.title}
            </SplitText>
          </h2>

          {/* Animated line */}
          <motion.div
            className="mt-6 w-20 h-0.5 bg-red origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* Description */}
          <motion.p
            className="mt-8 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t.outdoor.description1}
          </motion.p>
          <motion.p
            className="mt-4 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {t.outdoor.description2}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/4d">
              <Button variant="accent" size="lg" data-cursor="pointer">
                {t.outdoor.readMore}
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 right-10 md:right-20 w-32 h-32 border border-white/10 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
      />
      <motion.div
        className="absolute top-20 right-1/4 w-2 h-2 bg-red rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}
