"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface Service {
  id: string;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    id: "executive-coaching",
    title: "Executive coaching",
    description: "A confidential space to think clearly and act with confidence. We work with your real situations—decisions, stakeholder conversations, dilemmas—and turn insight into practical next steps.",
    color: "#BFA27A", // Champagne Gold
  },
  {
    id: "keynotes",
    title: "Key notes",
    description: "Inspiration with a point. Keynotes that give people energy, shared language, and a clear \"what now.\" Great for kick-offs, leadership days, and change moments.",
    color: "#A12F63", // Nordic Berry
  },
  {
    id: "teams-leadership",
    title: "Teams and leadership development",
    description: "Stronger leadership and teamwork—built into everyday work. We create shared language, practical tools, and habits that improve decisions, feedback, and collaboration.",
    color: "#5A1735", // Deep Mulberry
  },
  {
    id: "advisory",
    title: "Advisory",
    description: "Strategic sparring when you need clarity and a steady way forward. We help you sharpen direction, stress-test choices, and prepare the conversations that create buy-in.",
    color: "#34323A", // Warm Charcoal
  },
  {
    id: "strategic-projects",
    title: "Strategic projects",
    description: "Hands-on support for our existing key clients when it matters and it can't wait. We bring structure, pace, and the right conversations—so decisions get made.",
    color: "#BFA27A", // Champagne Gold
  },
];

interface ServicesCarouselProps {
  className?: string;
}

export function ServicesCarousel({ className = "" }: ServicesCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`${className}`}>
      {/* Row 1: 2 boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {services.slice(0, 2).map((service, index) => (
          <motion.div
            key={service.id}
            className="p-8 md:p-10 flex flex-col min-h-[280px]"
            style={{ backgroundColor: service.color }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#F7F6F5] italic">
              {service.title}
            </h3>
            <p className="mt-4 text-[#F7F6F5]/80 leading-relaxed flex-grow">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Row 2: 3 boxes with Advisory in center */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.slice(2).map((service, index) => (
          <motion.div
            key={service.id}
            className="p-8 md:p-10 flex flex-col min-h-[280px]"
            style={{ backgroundColor: service.color }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#F7F6F5] italic">
              {service.title}
            </h3>
            <p className="mt-4 text-[#F7F6F5]/80 leading-relaxed flex-grow">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
