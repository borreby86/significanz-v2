"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { SplitText } from "@/components/animations/SplitText";
import { useTranslation } from "@/lib/i18n";

// Phase data with extended content
const phases = [
  {
    id: "discover",
    number: "01",
    name: "Discover",
    tagline: "The Why",
    description: "Deep exploration of your current reality. We listen, observe, and uncover what's really happening beneath the surface.",
    longDescription: "Through structured interviews, assessments, and observation, we map your current state. We identify hidden barriers, untapped potential, and the true purpose driving your organization forward.",
    outcomes: ["Current Reality Mapped", "Hidden Barriers Identified", "True Purpose Clarified", "Stakeholder Alignment"],
    visual: "exploration",
  },
  {
    id: "define",
    number: "02",
    name: "Define",
    tagline: "The What",
    description: "Crystal clear priorities emerge. We define exactly what success looks like and how to measure it.",
    longDescription: "With clarity on where you are, we define where you need to go. We establish measurable outcomes, prioritize initiatives, and ensure complete alignment across all stakeholders.",
    outcomes: ["Clear Priorities Set", "Success Metrics Defined", "Full Alignment Achieved", "Roadmap Established"],
    visual: "clarity",
  },
  {
    id: "design",
    number: "03",
    name: "Design",
    tagline: "The How",
    description: "Tailored interventions take shape. We create custom solutions designed specifically for your context.",
    longDescription: "No two organizations are alike. We design bespoke interventions, action plans, and change strategies that fit your unique culture, capabilities, and constraints.",
    outcomes: ["Custom Solutions Created", "Action Plans Developed", "Change Agents Identified", "Risk Mitigation Planned"],
    visual: "creation",
  },
  {
    id: "deploy",
    number: "04",
    name: "Deploy",
    tagline: "Delivery",
    description: "Sustainable change becomes reality. We implement, support, and embed lasting transformation.",
    longDescription: "Execution is everything. We guide implementation, provide hands-on support, and ensure change becomes embedded in your organization's DNA—not just a temporary initiative.",
    outcomes: ["Successful Execution", "Embedded Change", "Measurable Impact", "Self-Sustaining Growth"],
    visual: "transformation",
  },
];

// Giant Hero with animated 4D model
function Hero4D() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={heroRef} className="h-[150vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(200,30,30,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 70%, rgba(200,30,30,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 30%, rgba(200,30,30,0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

        <motion.div
          className="relative z-10 h-full flex items-center"
          style={{ opacity, scale, y }}
        >
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Content */}
              <div>
                <motion.span
                  className="text-red font-medium text-sm uppercase tracking-[0.3em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  The Framework
                </motion.span>

                <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9]">
                  <SplitText splitType="words" delay={0.2} staggerDelay={0.15}>
                    {t.fourDPage.title}
                  </SplitText>
                </h1>

                <motion.div
                  className="mt-8 h-1 bg-red origin-left"
                  initial={{ scaleX: 0, width: 0 }}
                  animate={{ scaleX: 1, width: 120 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />

                <motion.p
                  className="mt-8 text-xl text-white/60 max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {t.fourDPage.subtitle}
                </motion.p>

                {/* Phase quick links */}
                <motion.div
                  className="mt-12 flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {phases.map((phase, index) => (
                    <motion.a
                      key={phase.id}
                      href={`#${phase.id}`}
                      className="group flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-red hover:bg-red transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <span className="text-white/50 group-hover:text-white text-sm">{phase.number}</span>
                      <span className="text-white text-sm">{phase.name}</span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Right - Giant 4D visualization */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                  {/* Outer pulsing ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-white/10"
                    animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Rotating ring */}
                  <motion.div
                    className="absolute inset-4 rounded-full border border-red/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Phase circles */}
                  {phases.map((phase, index) => {
                    const angle = index * 90 - 45;
                    const radius = 38;
                    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                    return (
                      <motion.div
                        key={phase.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${x}%`, top: `${y}%` }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.15, type: "spring" }}
                      >
                        <motion.div
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/20 bg-black/50 backdrop-blur flex items-center justify-center cursor-pointer hover:border-red hover:bg-red/20 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="text-center">
                            <span className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-white">
                              {phase.name.charAt(0)}
                            </span>
                            <span className="block text-[10px] text-white/50 uppercase tracking-wider">
                              {phase.number}
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}

                  {/* Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-red flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                    >
                      <div className="text-center">
                        <span className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white">4D</span>
                        <span className="block text-xs text-white/70 uppercase tracking-wider mt-1">Model</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    {phases.map((_, index) => {
                      const angle = index * 90 - 45;
                      const x1 = 50 + 18 * Math.cos((angle * Math.PI) / 180);
                      const y1 = 50 + 18 * Math.sin((angle * Math.PI) / 180);
                      const x2 = 50 + 30 * Math.cos((angle * Math.PI) / 180);
                      const y2 = 50 + 30 * Math.sin((angle * Math.PI) / 180);

                      return (
                        <motion.line
                          key={index}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="rgba(200,30,30,0.5)"
                          strokeWidth="0.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                        />
                      );
                    })}
                  </svg>
                </div>
              </motion.div>
            </div>
          </Container>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-white/40 text-xs uppercase tracking-[0.3em]">Scroll to explore</span>
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// Individual Phase Section - Full screen for each phase
function PhaseSection({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  const isEven = index % 2 === 0;
  const bgColor = isEven ? "bg-white" : "bg-black";
  const textColor = isEven ? "text-black" : "text-white";
  const mutedColor = isEven ? "text-gray-600" : "text-white/60";

  return (
    <section
      ref={sectionRef}
      id={phase.id}
      className={`min-h-screen py-32 md:py-48 ${bgColor} relative overflow-hidden`}
    >
      {/* Background decorations */}
      {isEven ? (
        <>
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-peach rounded-full blur-3xl opacity-30"
            style={{ y }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-cream rounded-full blur-3xl opacity-40"
          />
        </>
      ) : (
        <>
          <motion.div
            className="absolute top-1/4 right-0 w-96 h-96 bg-red/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </>
      )}

      <Container size="wide" className="relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
          {/* Content side */}
          <motion.div
            className={!isEven ? "lg:col-start-2" : ""}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Phase number */}
            <motion.span
              className="text-red text-sm uppercase tracking-[0.3em] font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Phase {phase.number}
            </motion.span>

            {/* Giant phase name */}
            <h2 className={`mt-4 font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${textColor} tracking-tight`}>
              {phase.name}
            </h2>

            {/* Tagline */}
            <p className={`mt-2 text-xl ${mutedColor} italic`}>
              {phase.tagline}
            </p>

            {/* Animated line */}
            <motion.div
              className="mt-8 h-1 bg-red origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ width: 100 }}
            />

            {/* Description */}
            <motion.p
              className={`mt-8 text-lg ${mutedColor} leading-relaxed max-w-lg`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              {phase.longDescription}
            </motion.p>

            {/* Outcomes */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h4 className={`text-sm font-medium ${isEven ? "text-gray-500" : "text-white/40"} uppercase tracking-wider mb-4`}>
                Key Outcomes
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {phase.outcomes.map((outcome, i) => (
                  <motion.div
                    key={outcome}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-red rounded-full shrink-0" />
                    <span className={`text-sm ${isEven ? "text-gray-700" : "text-white/80"}`}>{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual side - Giant number */}
          <motion.div
            className={`relative ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
            style={{ opacity }}
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Giant number background */}
              <motion.span
                className={`absolute inset-0 flex items-center justify-center text-[300px] md:text-[400px] font-[family-name:var(--font-playfair)] leading-none select-none ${isEven ? "text-gray-100" : "text-white/5"}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {phase.number.replace("0", "")}
              </motion.span>

              {/* Phase letter circle */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              >
                <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full ${isEven ? "bg-black" : "bg-red"} flex items-center justify-center`}>
                  <span className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] text-white">
                    {phase.name.charAt(0)}
                  </span>
                </div>
              </motion.div>

              {/* Orbiting ring */}
              <motion.div
                className={`absolute inset-8 rounded-full border ${isEven ? "border-gray-200" : "border-white/10"}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {/* Orbiting dot */}
                <motion.div
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-red rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Delivery Section - Split screen dramatic
function DeliverySection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const models = [
    { scale: "1:1", title: t.fourDPage.delivery.individuals.title, description: t.fourDPage.delivery.individuals.description },
    { scale: "1:More", title: t.fourDPage.delivery.teams.title, description: t.fourDPage.delivery.teams.description },
    { scale: "1:Many", title: t.fourDPage.delivery.organizations.title, description: t.fourDPage.delivery.organizations.description },
  ];

  return (
    <section ref={ref} className="py-32 md:py-48 bg-black relative overflow-hidden">
      {/* Animated red gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 0% 50%, rgba(200,30,30,0.2) 0%, transparent 50%)",
            "radial-gradient(ellipse at 100% 50%, rgba(200,30,30,0.2) 0%, transparent 50%)",
            "radial-gradient(ellipse at 0% 50%, rgba(200,30,30,0.2) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <Container size="wide" className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-red text-sm uppercase tracking-[0.3em] font-medium">
            Delivery Scale
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white">
            {t.fourDPage.deliveryModels}
          </h2>
          <p className="mt-4 text-xl text-white/50">
            {t.fourDPage.deliveryModelsSubtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {models.map((model, index) => (
            <motion.div
              key={model.scale}
              className="group relative bg-black p-12 md:p-16 text-center cursor-pointer hover:bg-white/5 transition-colors duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              {/* Giant scale number */}
              <motion.span
                className="text-7xl md:text-8xl lg:text-9xl font-[family-name:var(--font-playfair)] text-white/5 group-hover:text-red/20 transition-colors duration-500"
                whileHover={{ scale: 1.1 }}
              >
                {model.scale}
              </motion.span>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-white group-hover:text-red transition-colors duration-300">
                  {model.title}
                </h3>
                <p className="mt-4 text-white/50">{model.description}</p>
              </div>

              {/* Hover line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-red"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Final CTA
function FinalCTA() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="py-32 md:py-48 bg-red relative overflow-hidden">
      {/* Animated pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <Container size="default" className="relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/60 text-sm uppercase tracking-[0.3em]">
            Get Started
          </span>

          <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
            {t.fourDPage.instantOutcomes}
          </h2>

          <p className="mt-6 text-xl text-white/70 max-w-xl mx-auto">
            {t.fourDPage.instantOutcomesDesc}
          </p>

          <motion.div
            className="mt-12 flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact">
              <button className="px-10 py-5 bg-white text-black font-medium text-lg hover:bg-black hover:text-white transition-all duration-300">
                {t.fourDPage.startDiscovery}
              </button>
            </Link>
            <Link href="/about">
              <button className="px-10 py-5 border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-red transition-all duration-300">
                About Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function FourDPage() {
  return (
    <>
      <Hero4D />
      {phases.map((phase, index) => (
        <PhaseSection key={phase.id} phase={phase} index={index} />
      ))}
      <DeliverySection />
      <FinalCTA />
    </>
  );
}
