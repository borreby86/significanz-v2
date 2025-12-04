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

// export const metadata: Metadata = {
//   title: "About",
//   description:
//     "Significanz helps leaders and organizations create meaningful impact through interactions that matter.",
// };

const logic = [
  {
    title: "People want to contribute",
    description: "Everyone has the potential to make a meaningful difference.",
    icon: "01",
  },
  {
    title: "BothAnd thinking",
    description: "Embrace complexity. Move beyond either/or.",
    icon: "02",
  },
  {
    title: "Integrated self-leadership",
    description: "The 5P's framework for holistic growth.",
    icon: "03",
  },
];

const fivePs = [
  { name: "Professional", description: "Role & performance", color: "bg-red" },
  { name: "Personal", description: "Reflection & relations", color: "bg-black" },
  { name: "Private", description: "Values & self-awareness", color: "bg-gray-700" },
  { name: "Purpose", description: "Individual to common", color: "bg-red/80" },
  { name: "Practice", description: "Consistent habits", color: "bg-black/80" },
];

const differentiators = [
  {
    title: "Instant outcomes",
    description: "Results from day one through deep listening.",
    number: "01",
  },
  {
    title: "Creating Enablement",
    description: "Self-sufficient clients who continue independently.",
    number: "02",
  },
  {
    title: "Tech-forward",
    description: "AI-integrated discovery and deployment.",
    number: "03",
  },
  {
    title: "Trusted partner",
    description: "Deep listening. Kind challenges.",
    number: "04",
  },
];

const clientExperience = [
  { title: "Evidence-based", description: "Documented learning" },
  { title: "Visible progress", description: "Clear metrics" },
  { title: "Safety first", description: "Hard conversations with care" },
  { title: "Co-creation", description: "Built with, not for" },
];

// Sticky Card Section Component
function StickyCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative">
      {logic.map((item, index) => {
        const targetScale = 1 - (logic.length - 1 - index) * 0.05;
        return (
          <StickyCard
            key={item.title}
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
  item: typeof logic[0];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  targetScale: number;
  range: [number, number];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

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
            Our Logic — {item.icon}
          </span>
          <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
            {item.title}
          </h3>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
            {item.description}
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
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

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
                Our Framework
              </span>
            </motion.div>

            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
              <SplitText splitType="words" delay={0.2} staggerDelay={0.08}>
                The 5P&apos;s of Integrated Self-Leadership
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
              Self-leadership is the foundation of meaningful impact.
            </motion.p>
          </div>

          {/* Right: Interactive 5P List */}
          <div className="space-y-4">
            {fivePs.map((p, index) => (
              <motion.div
                key={p.name}
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
                    {p.name.charAt(0)}
                  </motion.span>

                  <div className="flex-1">
                    <h3 className="text-white font-medium text-lg group-hover:text-red transition-colors duration-300">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">
                      {p.description}
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
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// Differentiators Bento Grid
function DifferentiatorsBento() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

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
              Our Edge
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
              What sets us apart
            </h2>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
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
                    {item.title}
                  </h3>
                  <p className={`mt-4 text-gray-600 leading-relaxed ${index === 0 ? 'text-lg' : ''}`}>
                    {item.description}
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
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
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
                  About Significanz
                </span>
              </motion.div>

              <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tight leading-[1.1]">
                <SplitText splitType="words" delay={0.2} staggerDelay={0.1}>
                  Creating meaningful impact
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
                Helping leaders take meaningful action at the right time.
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
                  Scroll to explore
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
                  alt="Stinne Madsen - Executive Coach"
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
                Our Purpose
              </span>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-black tracking-tight">
                Interactions that matter
              </h2>
              <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Enabling the ability and willingness to create meaningful impact.
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
                Our Philosophy
              </span>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
                Meaningful Impact
              </h2>
              <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                From &ldquo;Me to We&rdquo; — taking responsibility for the right actions.
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
                  Ability
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
                  Willingness
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
                  Meaningful Impact
                </motion.span>
              </div>
              <p className="mt-10 text-gray-500 max-w-xl mx-auto">
                Enablement is both our method and measure of success.
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
                &ldquo;Stop asking for permission. Start taking meaningful action.&rdquo;
              </p>
              <footer className="mt-6 text-red font-medium">— Stinne Madsen</footer>
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
                What We Believe
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
                Our Logic
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
                Working Together
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
                How clients experience us
              </h2>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Calm yet challenging. Structured yet fluid.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {clientExperience.map((item, index) => (
                <motion.div
                  key={item.title}
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
                    {item.title}
                  </h4>
                  <p className="mt-2 text-gray-600">{item.description}</p>

                  {/* Hover line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-red"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" data-cursor="pointer">
                  Start a conversation
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
