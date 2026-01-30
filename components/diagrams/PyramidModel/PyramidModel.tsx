"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface PyramidLevel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  number: string;
}

const pyramidLevels: PyramidLevel[] = [
  {
    id: "awareness",
    title: "Awareness",
    subtitle: "The Foundation",
    description:
      "Deep self-knowledge, understanding of others, and clarity about the systems you operate within.",
    color: "#D4A574", // Lighter gold/tan
    number: "01",
  },
  {
    id: "leverage",
    title: "Leverage",
    subtitle: "The Amplifier",
    description:
      "Using your position, relationships, and resources to multiply effectiveness and create impact.",
    color: "#BFA27A", // Champagne Gold
    number: "02",
  },
  {
    id: "mastery",
    title: "Mastery",
    subtitle: "The Pinnacle",
    description:
      "True mastery emerges when awareness and leverage combine to create lasting, transformative impact.",
    color: "#A12F63", // Nordic Berry
    number: "03",
  },
];

interface PyramidModelProps {
  className?: string;
}

export function PyramidModel({ className = "" }: PyramidModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-5% 0px" });

  const levels = [
    { label: "Mastery", color: "#A12F63", width: "40%" },
    { label: "Leverage", color: "#BFA27A", width: "65%" },
    { label: "Awareness", color: "#D4A574", width: "100%" },
  ];

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="max-w-[60%] mx-auto flex flex-col items-center gap-[5%]">
        {levels.map((level, index) => (
          <motion.div
            key={level.label}
            className="flex items-center justify-center py-5 md:py-7"
            style={{
              width: level.width,
              backgroundColor: level.color,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
          >
            <span className="text-white text-base md:text-lg font-[family-name:var(--font-playfair)] italic">
              {level.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export { pyramidLevels };
