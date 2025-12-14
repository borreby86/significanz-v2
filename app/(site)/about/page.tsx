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
                <p className="text-black font-medium">We are coaches, facilitators, and leadership developers at heart.</p>
                <p className="text-black font-medium">We create sustainable enablement for the benefit of leaders, teams, and organizations.</p>
              </div>
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

      {/* Philosophy / Values and Logic - Full Width Black Section */}
      <section id="values-logic" className="py-24 md:py-32 bg-black relative overflow-hidden scroll-mt-20">
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
              <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                From &ldquo;Me to We&rdquo; — taking responsibility for the right actions.
              </p>
              <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                True transformation happens when we move from &ldquo;Me to We&rdquo; - taking responsibility for the right actions at the right time on behalf of the organization. Our work is about creating those conditions — releasing the potential that already exists within people and organizations. We create the opportunities for people to act towards common goals through interactions that matter.
              </p>
              <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Significanz helps you cultivate the ability and willingness that enables people to take ownership and act in a meaningful way to ensure impact.
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
              <p className="mt-10 text-gray-400 max-w-xl mx-auto font-medium">
                Enablement is both our method and our measure of success.
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

      {/* Contact Section */}
      <section className="py-20 sm:py-28 md:py-36 lg:py-48 bg-white">
        <Container size="wide">
          {/* Header */}
          <FadeIn>
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <span className="text-[#A12F63] font-medium text-sm uppercase tracking-[0.2em]">
                Get in Touch
              </span>
              <h2 className="mt-4 sm:mt-6 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#34323A] italic">
                Let&apos;s start a conversation
              </h2>
              <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-[#34323A]/70 leading-relaxed max-w-2xl mx-auto">
                Ready to create meaningful impact? We&apos;d love to hear from you. Share your challenges, and let&apos;s explore how we can help.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 md:gap-16 lg:gap-24">
            {/* Left - Contact Info */}
            <FadeIn className="lg:col-span-4">
              <div className="space-y-12">
                <div>
                  <p className="text-[#A12F63] text-sm font-medium uppercase tracking-[0.15em] mb-4">Email</p>
                  <a href="mailto:welcome@significanz.dk" className="text-2xl md:text-3xl text-[#34323A] hover:text-[#A12F63] transition-colors font-[family-name:var(--font-playfair)]">
                    welcome@significanz.dk
                  </a>
                </div>
                <div>
                  <p className="text-[#A12F63] text-sm font-medium uppercase tracking-[0.15em] mb-4">Location</p>
                  <p className="text-2xl md:text-3xl text-[#34323A] font-[family-name:var(--font-playfair)]">
                    Copenhagen, Denmark
                  </p>
                </div>
                <div>
                  <p className="text-[#A12F63] text-sm font-medium uppercase tracking-[0.15em] mb-4">Connect</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl text-[#34323A] hover:text-[#A12F63] transition-colors font-[family-name:var(--font-playfair)]">
                    LinkedIn
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Right - Form */}
            <FadeIn delay={0.2} className="lg:col-span-8">
              <form className="bg-white p-6 sm:p-8 md:p-10 lg:p-14">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#34323A] mb-3 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-0 py-4 border-0 border-b-2 border-[#34323A]/20 focus:border-[#A12F63] focus:outline-none transition-colors bg-transparent text-lg"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#34323A] mb-3 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-0 py-4 border-0 border-b-2 border-[#34323A]/20 focus:border-[#A12F63] focus:outline-none transition-colors bg-transparent text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#34323A] mb-3 uppercase tracking-wider">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-0 py-4 border-0 border-b-2 border-[#34323A]/20 focus:border-[#A12F63] focus:outline-none transition-colors bg-transparent text-lg"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#34323A] mb-3 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-0 py-4 border-0 border-b-2 border-[#34323A]/20 focus:border-[#A12F63] focus:outline-none transition-colors bg-transparent resize-none text-lg"
                      placeholder="Tell us about your challenges and goals..."
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="px-12 py-5 bg-[#34323A] text-white font-medium hover:bg-[#A12F63] transition-colors text-lg tracking-wide"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </FadeIn>
          </div>
        </Container>
      </section>

    </>
  );
}
