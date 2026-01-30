"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "motion/react";

interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  detailsType: "keywords" | "clientCases" | "solutions" | "topics" | "examples";
}

const services: Service[] = [
  {
    id: "executive-coaching",
    title: "Executive coaching",
    description: "A confidential space to think clearly and act with confidence. We work with your real situations—decisions, stakeholder conversations, dilemmas—and turn insight into practical next steps. For leaders who want clarity, calm, and follow-through.",
    details: ["leadership transitions", "tough conversations", "prioritisation and boundaries", "decision-making under pressure", "leading through complexity"],
    detailsType: "keywords",
  },
  {
    id: "keynotes",
    title: "Key notes",
    description: "Inspiration with a point. Keynotes that give people energy, shared language, and a clear \"what now.\" Great for kick-offs, leadership days, and change moments where you want people to leave aligned—and ready to act.",
    details: ["psychological safety", "feedback and courageous conversations", "culture and cross-culture", "AI: what to expect and how to get your team ready", "and many more..."],
    detailsType: "examples",
  },
  {
    id: "advisory",
    title: "Advisory",
    description: "Strategic sparring when you need clarity and a steady way forward. We help you sharpen direction, stress-test choices, and prepare the conversations that create buy-in. Focused, practical, and grounded in your reality.",
    details: ["organizational design questions", "governance and decision forums", "what do we do next in change moments", "ongoing high-level HR strategy work", "leadership development design"],
    detailsType: "clientCases",
  },
  {
    id: "strategic-projects",
    title: "Strategic projects",
    description: "Hands-on support for our existing key clients when it matters and it can't wait. We bring structure, pace, and the right conversations—so decisions get made and the work moves forward with clear ownership.",
    details: ["strategy roll-out", "operating model and ways of working for AI", "cross-functional alignment", "tender response preparation", "whistleblower handling", "board collaboration"],
    detailsType: "solutions",
  },
  {
    id: "teams-leadership",
    title: "Teams and leadership development",
    description: "Stronger leadership and teamwork—built into everyday work. We create shared language, practical tools, and habits that improve decisions, feedback, and collaboration. Creating learnings that changes behaviour.",
    details: ["change readiness", "team leadership", "self-awareness and personal impact", "communication and culture", "negotiations"],
    detailsType: "topics",
  },
];

// Reorder so Advisory (index 2) is in the center
const orderedServices = [
  services[0], // Executive coaching
  services[1], // Key notes
  services[2], // Advisory (CENTER)
  services[3], // Strategic projects
  services[4], // Teams and leadership
];

const detailsTypeLabels: Record<Service["detailsType"], string> = {
  keywords: "Key words",
  clientCases: "Client cases",
  solutions: "Client solutions",
  topics: "Topic examples",
  examples: "Examples we often work on",
};

interface ServicesCarouselProps {
  className?: string;
}

export function ServicesCarousel({ className = "" }: ServicesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(2); // Start at Advisory (center)
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const cardWidth = isMobile ? windowWidth - 48 : 400;
  const gap = 24;

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = cardWidth / 4;
    const velocity = info.velocity.x;

    if (info.offset.x > threshold || velocity > 500) {
      // Swipe right - go to previous
      setActiveIndex((prev) => Math.max(0, prev - 1));
    } else if (info.offset.x < -threshold || velocity < -500) {
      // Swipe left - go to next
      setActiveIndex((prev) => Math.min(orderedServices.length - 1, prev + 1));
    }
    setIsDragging(false);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const activeService = orderedServices[activeIndex];

  return (
    <div className={`relative ${className}`}>
      {/* Desktop: 2x2 grid with Advisory center */}
      <div className="hidden md:block">
        <div className="relative">
          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-1">
            {/* Top-left: Executive Coaching */}
            <div className="bg-[#A12F63]/80 p-10 min-h-[300px] flex flex-col">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-white italic">
                {services[0].title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {services[0].description}
              </p>
            </div>

            {/* Top-right: Keynotes */}
            <div className="bg-[#A12F63] p-10 min-h-[300px] flex flex-col">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-white italic">
                {services[1].title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {services[1].description}
              </p>
            </div>

            {/* Bottom-left: Teams & Leadership */}
            <div className="bg-[#5A1735] p-10 min-h-[300px] flex flex-col">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-white italic">
                {services[4].title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {services[4].description}
              </p>
            </div>

            {/* Bottom-right: Strategic Projects */}
            <div className="bg-[#BFA27A] p-10 min-h-[300px] flex flex-col">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-[#34323A] italic">
                {services[3].title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#34323A]/70">
                {services[3].description}
              </p>
            </div>
          </div>

          {/* Center: Advisory overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="bg-[#34323A] text-white w-52 h-52 lg:w-60 lg:h-60 rounded-full flex flex-col items-center justify-center text-center shadow-2xl pointer-events-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl italic">
                {services[2].title}
              </h3>
              <p className="mt-2 text-white/60 text-xs leading-relaxed max-w-[160px]">
                Strategic sparring when you need clarity and a steady way forward.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile: Swipe carousel */}
      <div className="md:hidden">
        <motion.div
          ref={containerRef}
          className="cursor-grab active:cursor-grabbing touch-pan-y"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          style={{ x }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="px-6"
            >
              <div
                className={`p-6 ${
                  activeService.id === "advisory" ? "bg-[#A12F63] text-white" : "bg-white shadow-lg"
                }`}
              >
                {activeService.id === "advisory" && (
                  <span className="text-xs uppercase tracking-wider text-white/70 font-medium mb-2 block">
                    Featured
                  </span>
                )}

                <h3
                  className={`font-[family-name:var(--font-playfair)] text-2xl ${
                    activeService.id === "advisory" ? "text-white" : "text-[#34323A]"
                  }`}
                >
                  {activeService.title}
                </h3>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    activeService.id === "advisory" ? "text-white/90" : "text-[#34323A]/70"
                  }`}
                >
                  {activeService.description}
                </p>

                <div className="mt-6">
                  <p
                    className={`text-xs uppercase tracking-wider font-medium mb-3 ${
                      activeService.id === "advisory" ? "text-white/70" : "text-[#A12F63]"
                    }`}
                  >
                    {detailsTypeLabels[activeService.detailsType]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeService.details.map((detail, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-1 ${
                          activeService.id === "advisory"
                            ? "bg-white/20 text-white"
                            : "bg-[#F7F6F5] text-[#34323A]/70"
                        }`}
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Swipe hint */}
        <p className="text-center text-sm text-[#34323A]/50 mt-4">
          Swipe to explore services
        </p>
      </div>

      {/* Dots indicator - mobile only */}
      <div className="flex md:hidden justify-center gap-2 mt-8">
        {orderedServices.map((service, index) => (
          <button
            key={service.id}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? service.id === "advisory"
                  ? "bg-[#A12F63] w-8"
                  : "bg-[#34323A] w-8"
                : "bg-[#34323A]/20 hover:bg-[#34323A]/40"
            }`}
            aria-label={`Go to ${service.title}`}
          />
        ))}
      </div>

      {/* Scroll indicator - below services */}
      <motion.div
        className="flex flex-col items-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-xs text-[#34323A]/40 uppercase tracking-[0.3em] mb-3">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-[#34323A]/20"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </div>
  );
}
