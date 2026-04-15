"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactButton } from "@/components/ui/ContactButton";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useTranslation } from "@/lib/i18n";

// Phase data with short and long descriptions
const phases = [
  {
    id: "discover",
    number: "01",
    name: "Discover",
    tagline: "The Why",
    shortDesc: "We Discover what truly matters -the few actions that will make the greatest difference.",
    longDesc: "We Discover by listening deeply and observing carefully. Together, we identify what truly matters: the few actions that will create real movement, beyond symptoms and assumptions. Discovery includes context, power dynamics, strengths, friction points, and the everyday behaviours that shape outcomes.",
    color: "#BFA27A", // Champagne Gold
  },
  {
    id: "define",
    number: "02",
    name: "Define",
    tagline: "The What",
    shortDesc: "We Define shared language, direction, and the transformations required.",
    longDesc: "We Define shared language, direction, and transformation. This is where clarity is built: what needs to change, why it matters now, and what \"better\" looks like in practice. Definition makes alignment possible -across leaders, teams, and stakeholders.",
    color: "#A12F63", // Nordic Berry
  },
  {
    id: "design",
    number: "03",
    name: "Design",
    tagline: "The How",
    shortDesc: "We Design the interactions that matter most -where insight turns into behaviour.",
    longDesc: "We Design the interactions that matter most. We shape the right rhythm of meetings, workshops, coaching, facilitation, and learning moments -tailored to your reality. Design is where insight becomes practical: clear choices, concrete behaviours, and visible progress.",
    color: "#5A1735", // Deep Mulberry
  },
  {
    id: "deploy",
    number: "04",
    name: "Deploy",
    tagline: "Delivery",
    shortDesc: "We Deploy together, evaluating progress and adjusting along the way.",
    longDesc: "We Deploy with you. We test changes in real conditions, evaluate what works, and adapt fast. Deployment is not a handover -it's shared execution with reflection built in, so you gain the confidence and capability to continue independently.",
    color: "#34323A", // Warm Charcoal
  },
];

// Hero Section - Clean without blobs
function HeroOurMethod() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#34323A] flex items-center">
      <Container size="wide" className="relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.p
              className="text-[#F7F6F5]/60 text-sm font-medium tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Method
            </motion.p>

            <motion.h1
              className="mt-4 font-[family-name:var(--font-playfair)] text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="block text-6xl md:text-7xl lg:text-8xl leading-[0.9] italic">
                The 4D Model
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 text-xl md:text-2xl text-[#F7F6F5]/50 font-[family-name:var(--font-playfair)] italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover · Define · Design · Deploy
            </motion.p>

            <motion.p
              className="mt-8 text-lg md:text-xl text-[#F7F6F5]/70 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              4D is both our methodology and our strategic map. It guides every collaboration and ensures coherence from first conversation to lasting impact.
            </motion.p>

            {/* Phase quick links */}
            <motion.div
              className="mt-12 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {phases.map((phase, index) => (
                <motion.a
                  key={phase.id}
                  href={`#${phase.id}`}
                  className="group flex items-center gap-2 px-5 py-3 border border-[#F7F6F5]/30 hover:border-[#A12F63] hover:bg-[#A12F63] transition-all duration-300 rounded-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <span className="text-[#F7F6F5]/50 group-hover:text-[#F7F6F5] text-sm">{phase.number}</span>
                  <span className="text-[#F7F6F5] text-sm font-medium">{phase.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - 4D Visual */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-72 md:w-80 lg:w-96 aspect-square">
              {/* Center circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#A12F63] flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#F7F6F5]">4D</span>
                </div>
              </div>

              {/* Phase circles */}
              {phases.map((phase, index) => {
                const angle = index * 90 - 45;
                const radius = 42;
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
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: phase.color }}
                    >
                      <span className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#F7F6F5]">
                        {phase.name.charAt(0)}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Connecting ring */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#F7F6F5"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-px h-16 bg-[#F7F6F5]/30"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}

// Phase Card Component with click-to-expand
function PhaseCard({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      id={phase.id}
      className="p-8 md:p-12 flex flex-col cursor-pointer group"
      style={{ backgroundColor: phase.color }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Phase number */}
      <span className="text-[#F7F6F5]/60 text-sm font-medium tracking-wider">
        Phase {phase.number}
      </span>

      {/* Phase name */}
      <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#F7F6F5] italic">
        {phase.name}
      </h3>

      {/* Tagline */}
      <p className="mt-1 text-[#F7F6F5]/70 text-lg">
        {phase.tagline}
      </p>

      {/* Short Description - always visible */}
      <p className="mt-6 text-[#F7F6F5]/80 leading-relaxed">
        {phase.shortDesc}
      </p>

      {/* Expanded Long Description */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-[#F7F6F5]/20">
              <p className="text-[#F7F6F5]/90 leading-relaxed">
                {phase.longDesc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Read more indicator */}
      <div className="mt-6 flex items-center gap-2 text-[#F7F6F5]/60 group-hover:text-[#F7F6F5] transition-colors">
        <span className="text-sm">{isExpanded ? "Read less" : "Read more"}</span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </div>
    </motion.div>
  );
}

// Phases Grid Section
function PhasesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#F7F6F5]">
      <Container size="wide">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <motion.h2
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-[#34323A] italic"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            The four phases
          </motion.h2>
        </div>

        {/* Phase cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>

        {/* Closing statement */}
        <motion.p
          className="mt-16 text-center text-lg md:text-xl text-[#34323A]/70 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          4D allows us to work with clarity, momentum, and care -always grounded in real situations and measurable progress.
        </motion.p>
      </Container>
    </section>
  );
}

// Delivery Models Section
function DeliverySection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const models = [
    { scale: "1:1", title: t.fourDPage.delivery.individuals.title, description: t.fourDPage.delivery.individuals.description },
    { scale: "1:More", title: t.fourDPage.delivery.teams.title, description: t.fourDPage.delivery.teams.description },
    { scale: "1:Many", title: t.fourDPage.delivery.organizations.title, description: t.fourDPage.delivery.organizations.description },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#34323A]">
      <Container size="wide">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <motion.h2
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-[#F7F6F5] italic"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {t.fourDPage.deliveryModels}
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-[#F7F6F5]/70 leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.fourDPage.deliveryModelsSubtitle}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <motion.div
              key={model.scale}
              className="bg-[#F7F6F5] p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <span className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] text-[#A12F63]">
                {model.scale}
              </span>
              <h3 className="mt-4 text-2xl font-[family-name:var(--font-playfair)] text-[#34323A]">
                {model.title}
              </h3>
              <p className="mt-3 text-[#34323A]/70">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#34323A] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/workshop.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#34323A]/85" />
      </div>
      <Container size="default" className="relative z-10">
        <FadeIn>
          <div className="text-center">
            <span className="text-[#BFA27A] font-medium text-sm uppercase tracking-[0.2em]">
              Get in touch
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[#F7F6F5] italic tracking-tight">
              Let&apos;s start a conversation
            </h2>
            <p className="mt-6 text-lg text-[#F7F6F5]/70 max-w-xl mx-auto">
              Ready to create meaningful impact? We&apos;d love to hear from you.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <ContactButton className="inline-flex items-center gap-3 px-8 py-4 bg-[#A12F63] text-white font-medium hover:bg-[#8a2854] transition-colors">
                Get in touch
                <span className="text-xl">→</span>
              </ContactButton>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default function OurMethodPage() {
  return (
    <>
      <HeroOurMethod />
      <PhasesSection />
      <DeliverySection />
      <CTASection />
    </>
  );
}
