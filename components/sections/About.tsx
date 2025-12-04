"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useTranslation } from "@/lib/i18n";
import { SplitText } from "@/components/animations/SplitText";

export function About() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Subtle grain overlay - increased opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-noise" />

      {/* Large warm blob - top right */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-peach rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.35 } : {}}
        transition={{ duration: 1.2 }}
      />

      {/* Warm accent - bottom left */}
      <motion.div
        className="absolute -bottom-20 left-1/4 w-64 h-64 bg-warm-gray rounded-full blur-3xl animate-float-slow"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with reveal animation */}
          <div ref={imageRef} className="relative">
            {/* Image container with parallax */}
            <motion.div
              className="aspect-[4/5] relative overflow-hidden"
              style={{ y: imageY }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={isInView ? { clipPath: "inset(0% 0 0 0)" } : {}}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              <motion.div className="w-full h-full" style={{ scale: imageScale }}>
                <Image
                  src="/images/about/portrait.jpg"
                  alt={t.about.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </motion.div>

            {/* Decorative elements - increased opacity */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-red/40"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            />

            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 bg-peach rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Additional warm accent near image */}
            <motion.div
              className="absolute bottom-1/3 -left-10 w-20 h-20 bg-red/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Heading with split text */}
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
              <SplitText splitType="words" delay={0.5} staggerDelay={0.08}>
                {t.about.title}
              </SplitText>
            </h2>

            {/* Animated underline */}
            <motion.div
              className="mt-4 w-16 h-1 bg-red origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            />

            {/* Description with staggered fade-in */}
            <motion.p
              className="mt-8 text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t.about.description1}
            </motion.p>
            <motion.p
              className="mt-4 text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {t.about.description2}
            </motion.p>

            {/* Credentials with animated bullets */}
            <ul className="mt-8 space-y-3">
              {t.about.credentials.map((credential, index) => (
                <motion.li
                  key={credential}
                  className="text-sm text-gray-500 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <motion.span
                    className="w-2 h-2 bg-red rounded-full flex-shrink-0"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                  />
                  {credential}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Link href="/about">
                <Button variant="secondary" data-cursor="pointer">
                  {t.about.readMore}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
