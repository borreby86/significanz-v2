"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface Service {
  id: string;
  title: string;
  description: string;
  color: string;
  textDark?: boolean;
}

const gridServices: Service[] = [
  {
    id: "executive-coaching",
    title: "Executive coaching",
    description: "A confidential space to think clearly and act with confidence.\nWe work with your real situations - decisions, stakeholder conversations, dilemmas - and turn insight into practical next steps.",
    color: "#BFA27A", // Champagne Gold
    textDark: false,
  },
  {
    id: "keynotes",
    title: "Keynotes",
    description: "Inspiration with a point. Keynotes that give people energy, shared language, and a clear \"what now.\" Great for kick-offs, leadership days, and change moments.",
    color: "#34323A", // Charcoal
    textDark: false,
  },
  {
    id: "team-transition",
    title: "Team transition",
    description: "We help teams align expectations, strengthen trust, and establish clear ways of working so they can move forward together.",
    color: "#5A1735", // Deep Mulberry
    textDark: false,
  },
  {
    id: "leadership-development",
    title: "Leadership development",
    description: "Practical leadership development focused on real situations leaders face. We strengthen decision making, communication, and stakeholder management so leaders create clarity, direction, and sustainable performance.",
    color: "#A12F63", // Nordic Berry
    textDark: false,
  },
];

const advisory: Service = {
  id: "advisory",
  title: "Advisory",
  description: "Strategic sparring when you need clarity and a steady way forward.",
  color: "#EFEDEA", // Warm Mist
};

interface ServicesCarouselProps {
  className?: string;
}

export function ServicesCarousel({ className = "" }: ServicesCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`${className}`}>
      {/* 2x2 Grid with Advisory center overlay */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridServices.map((service, index) => {
            const isRightColumn = index % 2 === 1;
            return (
              <motion.div
                key={service.id}
                className={`p-8 md:p-10 flex flex-col min-h-[280px] ${isRightColumn ? "md:text-right" : ""}`}
                style={{ backgroundColor: service.color }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className={`font-[family-name:var(--font-playfair)] text-3xl md:text-4xl italic ${service.textDark ? "text-[#34323A]" : "text-[#F7F6F5]"}`}>
                  {service.title}
                </h3>
                <p className={`mt-4 leading-relaxed flex-grow whitespace-pre-line ${service.textDark ? "text-[#34323A]/70" : "text-[#F7F6F5]/80"}`}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Advisory - centered square overlay */}
        <motion.div
          className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-40 h-40 lg:w-48 lg:h-48 items-center justify-center text-center"
          style={{ backgroundColor: advisory.color }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="px-4">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-[#34323A] italic">
              {advisory.title}
            </h3>
            <p className="mt-2 text-[#34323A]/70 text-xs lg:text-sm leading-relaxed">
              {advisory.description}
            </p>
          </div>
        </motion.div>

        {/* Advisory - mobile (full width card) */}
        <motion.div
          className="md:hidden mt-4 p-8 flex flex-col min-h-[200px]"
          style={{ backgroundColor: advisory.color }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[#34323A] italic">
            {advisory.title}
          </h3>
          <p className="mt-4 text-[#34323A]/70 leading-relaxed flex-grow">
            Strategic sparring when you need clarity and a steady way forward. We help you sharpen direction, stress-test choices, and prepare the conversations that create buy-in.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
