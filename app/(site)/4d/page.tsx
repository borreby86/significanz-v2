"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ContactButton } from "@/components/ui/ContactButton";
import { motion, useInView } from "motion/react";
import { useTranslation } from "@/lib/i18n";

// Phase data
const phases = [
  {
    id: "discover",
    number: "01",
    name: "Discover",
    tagline: "The Why",
    description: "Deep exploration of your current reality. We listen, observe, and uncover what's really happening beneath the surface.",
    outcomes: ["Current Reality Mapped", "Hidden Barriers Identified", "True Purpose Clarified", "Stakeholder Alignment"],
    color: "#BFA27A", // Champagne Gold
  },
  {
    id: "define",
    number: "02",
    name: "Define",
    tagline: "The What",
    description: "Crystal clear priorities emerge. We define exactly what success looks like and how to measure it.",
    outcomes: ["Clear Priorities Set", "Success Metrics Defined", "Full Alignment Achieved", "Roadmap Established"],
    color: "#A12F63", // Nordic Berry
  },
  {
    id: "design",
    number: "03",
    name: "Design",
    tagline: "The How",
    description: "Tailored interventions take shape. We create custom solutions designed specifically for your context.",
    outcomes: ["Custom Solutions Created", "Action Plans Developed", "Change Agents Identified", "Risk Mitigation Planned"],
    color: "#5A1735", // Deep Mulberry
  },
  {
    id: "deploy",
    number: "04",
    name: "Deploy",
    tagline: "Delivery",
    description: "Sustainable change becomes reality. We implement, support, and embed lasting transformation.",
    outcomes: ["Successful Execution", "Embedded Change", "Measurable Impact", "Self-Sustaining Growth"],
    color: "#34323A", // Warm Charcoal
  },
];

// Organic blob shapes for hero
function OrganicBlobs() {
  return (
    <>
      {/* Champagne Gold blob - left */}
      <motion.div
        className="absolute left-0 top-1/4 w-48 md:w-64 lg:w-80"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <svg viewBox="0 0 200 300" className="w-full h-auto">
          <path
            d="M50,20 Q120,0 150,80 Q180,160 140,220 Q100,280 50,250 Q0,220 10,140 Q20,60 50,20"
            fill="#BFA27A"
            opacity="0.9"
          />
        </svg>
      </motion.div>

      {/* Nordic Berry blob - right */}
      <motion.div
        className="absolute right-0 top-1/3 w-40 md:w-56 lg:w-72"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-auto">
          <path
            d="M100,10 Q180,30 180,100 Q180,170 100,190 Q20,170 20,100 Q20,30 100,10"
            fill="#A12F63"
            opacity="0.9"
          />
        </svg>
      </motion.div>

      {/* Deep Mulberry blob - bottom */}
      <motion.div
        className="absolute right-1/4 bottom-20 w-32 md:w-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 150 100" className="w-full h-auto">
          <path
            d="M20,50 Q50,10 100,30 Q140,50 120,75 Q100,100 60,90 Q20,80 20,50"
            fill="#5A1735"
            opacity="0.9"
          />
        </svg>
      </motion.div>
    </>
  );
}

// Hero Section - Clean and minimal like homepage
function Hero4D() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#34323A] flex items-center">
      {/* Organic blob shapes */}
      <OrganicBlobs />

      <Container size="wide" className="relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.h1
              className="font-[family-name:var(--font-playfair)] text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-6xl md:text-7xl lg:text-8xl leading-[0.9] italic">
                {t.fourDPage.title}
              </span>
            </motion.h1>

            <motion.p
              className="mt-8 text-xl md:text-2xl text-[#F7F6F5]/70 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.fourDPage.subtitle}
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

// Phase Card Component
function PhaseCard({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      id={phase.id}
      className="p-8 md:p-12 flex flex-col h-full"
      style={{ backgroundColor: phase.color }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Phase number */}
      <span className="text-[#F7F6F5]/60 text-sm font-medium tracking-wider">
        {t.fourDPage.phase} {phase.number}
      </span>

      {/* Phase name */}
      <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#F7F6F5] italic">
        {phase.name}
      </h3>

      {/* Tagline */}
      <p className="mt-1 text-[#F7F6F5]/70 text-lg">
        {phase.tagline}
      </p>

      {/* Description */}
      <p className="mt-6 text-[#F7F6F5]/80 leading-relaxed flex-grow">
        {phase.description}
      </p>

      {/* Outcomes */}
      <div className="mt-8 pt-6 border-t border-[#F7F6F5]/20">
        <span className="text-[#F7F6F5]/50 text-xs uppercase tracking-wider">{t.fourDPage.keyOutcomes}</span>
        <div className="mt-3 flex flex-wrap gap-2">
          {phase.outcomes.map((outcome) => (
            <span
              key={outcome}
              className="px-3 py-1 bg-[#F7F6F5]/10 text-[#F7F6F5] text-sm rounded-sm"
            >
              {outcome}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Phases Grid Section
function PhasesSection() {
  const { t } = useTranslation();
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
            {t.fourDPage.fourPhases}
          </motion.h2>
        </div>

        {/* Phase cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>
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

// CTA Section - Matching homepage style
function CTASection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="relative bg-[#34323A] py-20 md:py-32 overflow-hidden">
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
      <Container size="wide" className="relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-[#F7F6F5] italic">
            {t.fourDPage.instantOutcomes}
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-[#F7F6F5]/80 leading-relaxed">
            {t.fourDPage.instantOutcomesDesc}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ContactButton className="inline-flex items-center gap-3 px-8 py-4 bg-[#A12F63] text-white font-medium hover:bg-[#8a2854] transition-colors">
              Get in touch
              <span className="text-xl">→</span>
            </ContactButton>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#F7F6F5] text-[#F7F6F5] font-medium hover:bg-[#F7F6F5] hover:text-[#34323A] transition-colors"
            >
              {t.fourDPage.aboutUs}
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function FourDPage() {
  return (
    <>
      <Hero4D />
      <PhasesSection />
      <DeliverySection />
      <CTASection />
    </>
  );
}
