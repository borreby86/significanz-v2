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
    color: "#C9956A",
    number: "01",
  },
  {
    id: "leverage",
    title: "Leverage",
    subtitle: "The Amplifier",
    description:
      "Using your position, relationships, and resources to multiply effectiveness and create impact.",
    color: "#BFA27A",
    number: "02",
  },
  {
    id: "mastery",
    title: "Mastery",
    subtitle: "The Pinnacle",
    description:
      "True mastery emerges when awareness and leverage combine to create lasting, transformative impact.",
    color: "#A12F63",
    number: "03",
  },
];

interface PyramidModelProps {
  className?: string;
}

export function PyramidModel({ className = "" }: PyramidModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-5% 0px" });

  // Cards in order: Mastery (top), Leverage (mid), Awareness (bottom)
  const cardPositions = [
    { level: pyramidLevels[2], top: "5%" },
    { level: pyramidLevels[1], top: "38%" },
    { level: pyramidLevels[0], top: "68%" },
  ];

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center gap-10 lg:gap-16">
          {/* Pyramid — 60% width */}
          <motion.div
            className="w-[60%] shrink-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <svg
              viewBox="0 0 500 450"
              className="w-full h-auto"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
              }}
            >
              <defs>
                {/* Awareness — warm terracotta/sand */}
                <linearGradient id="awarenessGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D9A87A" />
                  <stop offset="100%" stopColor="#C9956A" />
                </linearGradient>
                <linearGradient id="awarenessRight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C9956A" />
                  <stop offset="100%" stopColor="#B8845A" />
                </linearGradient>

                {/* Leverage — champagne gold */}
                <linearGradient id="leverageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D4BC94" />
                  <stop offset="100%" stopColor="#BFA27A" />
                </linearGradient>
                <linearGradient id="leverageRight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#BFA27A" />
                  <stop offset="100%" stopColor="#A8895E" />
                </linearGradient>

                {/* Mastery — nordic berry */}
                <linearGradient id="masteryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C85585" />
                  <stop offset="100%" stopColor="#A12F63" />
                </linearGradient>
                <linearGradient id="masteryRight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A12F63" />
                  <stop offset="100%" stopColor="#8B2854" />
                </linearGradient>
              </defs>

              {/* AWARENESS - Bottom (y: 300 to 430) */}
              <motion.g
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <path d="M50 430 L115 300 L250 300 L250 430 Z" fill="url(#awarenessGrad)" />
                <path d="M250 300 L385 300 L450 430 L250 430 Z" fill="url(#awarenessRight)" />
                <line x1="115" y1="300" x2="385" y2="300" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <text x="250" y="380" textAnchor="middle" fill="white" fontSize="22" fontWeight="400" fontFamily="var(--font-playfair)" fontStyle="italic">
                  Awareness
                </text>
              </motion.g>

              {/* LEVERAGE - Middle (y: 180 to 300) */}
              <motion.g
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                <path d="M115 300 L175 180 L250 180 L250 300 Z" fill="url(#leverageGrad)" />
                <path d="M250 180 L325 180 L385 300 L250 300 Z" fill="url(#leverageRight)" />
                <line x1="175" y1="180" x2="325" y2="180" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <text x="250" y="255" textAnchor="middle" fill="white" fontSize="20" fontWeight="400" fontFamily="var(--font-playfair)" fontStyle="italic">
                  Leverage
                </text>
              </motion.g>

              {/* MASTERY - Top (y: 30 to 180) */}
              <motion.g
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <path d="M175 180 L250 30 L250 180 Z" fill="url(#masteryGrad)" />
                <path d="M250 30 L325 180 L250 180 Z" fill="url(#masteryRight)" />
                <circle cx="250" cy="30" r="3" fill="white" opacity="0.7" />
                <text x="250" y="120" textAnchor="middle" fill="white" fontSize="18" fontWeight="400" fontFamily="var(--font-playfair)" fontStyle="italic">
                  Mastery
                </text>
              </motion.g>
            </svg>
          </motion.div>

          {/* Info cards — aligned to each layer */}
          <div className="relative flex-1 self-stretch">
            {cardPositions.map(({ level, top }, index) => (
              <motion.div
                key={level.id}
                className="absolute left-0 right-0"
                style={{ top }}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              >
                <div className="relative bg-white shadow-sm border border-gray-100 px-5 py-4">
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1"
                    style={{ backgroundColor: level.color }}
                  />
                  <div className="pl-3">
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] font-medium"
                      style={{ color: level.color }}
                    >
                      {level.subtitle}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#34323A]">
                      {level.title}
                    </h3>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                      {level.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { pyramidLevels };
