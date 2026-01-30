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

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative max-w-6xl mx-auto">
        {/* Main layout: pyramid on left, cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Pyramid SVG */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <svg
              viewBox="0 0 400 500"
              className="w-full max-w-xl mx-auto h-auto"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
              }}
            >
              <defs>
                {/* Gradients for each level */}
                <linearGradient id="awarenessGradNew" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E5C9A8" />
                  <stop offset="100%" stopColor="#D4A574" />
                </linearGradient>
                <linearGradient id="awarenessRightNew" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4A574" />
                  <stop offset="100%" stopColor="#C49464" />
                </linearGradient>

                <linearGradient id="leverageGradNew" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D4BC94" />
                  <stop offset="100%" stopColor="#BFA27A" />
                </linearGradient>
                <linearGradient id="leverageRightNew" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#BFA27A" />
                  <stop offset="100%" stopColor="#A8895E" />
                </linearGradient>

                <linearGradient id="masteryGradNew" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C85585" />
                  <stop offset="100%" stopColor="#A12F63" />
                </linearGradient>
                <linearGradient id="masteryRightNew" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A12F63" />
                  <stop offset="100%" stopColor="#8B2854" />
                </linearGradient>
              </defs>

              {/* AWARENESS - Bottom (y: 330 to 480) */}
              <motion.g
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <path d="M60 480 L107 330 L200 330 L200 480 Z" fill="url(#awarenessGradNew)" />
                <path d="M200 330 L293 330 L340 480 L200 480 Z" fill="url(#awarenessRightNew)" />
                <line x1="107" y1="330" x2="293" y2="330" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <text x="200" y="418" textAnchor="middle" fill="white" fontSize="22" fontWeight="400" fontFamily="var(--font-playfair)" fontStyle="italic">
                  Awareness
                </text>
              </motion.g>

              {/* LEVERAGE - Middle (y: 180 to 330) */}
              <motion.g
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                <path d="M107 330 L153 180 L200 180 L200 330 Z" fill="url(#leverageGradNew)" />
                <path d="M200 180 L247 180 L293 330 L200 330 Z" fill="url(#leverageRightNew)" />
                <line x1="153" y1="180" x2="247" y2="180" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <text x="200" y="270" textAnchor="middle" fill="white" fontSize="20" fontWeight="400" fontFamily="var(--font-playfair)" fontStyle="italic">
                  Leverage
                </text>
              </motion.g>

              {/* MASTERY - Top (y: 30 to 180) */}
              <motion.g
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <path d="M153 180 L200 30 L200 180 Z" fill="url(#masteryGradNew)" />
                <path d="M200 30 L247 180 L200 180 Z" fill="url(#masteryRightNew)" />
                <circle cx="200" cy="30" r="3" fill="white" opacity="0.7" />
                <text x="200" y="120" textAnchor="middle" fill="white" fontSize="18" fontWeight="400" fontFamily="var(--font-playfair)" fontStyle="italic">
                  Mastery
                </text>
              </motion.g>
            </svg>
          </motion.div>

          {/* Static Info Cards - always visible */}
          <div className="flex flex-col gap-6">
            {pyramidLevels.slice().reverse().map((level, index) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="relative bg-white shadow-lg border border-gray-100 p-6 md:p-8"
              >
                {/* Colored left accent */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-1"
                  style={{ backgroundColor: level.color }}
                />

                {/* Number watermark */}
                <span
                  className="absolute top-3 right-4 text-5xl font-[family-name:var(--font-playfair)] leading-none select-none"
                  style={{ color: `${level.color}20` }}
                >
                  {level.number}
                </span>

                <div className="relative pl-2">
                  {/* Subtitle */}
                  <span
                    className="text-xs uppercase tracking-[0.2em] font-medium"
                    style={{ color: level.color }}
                  >
                    {level.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#34323A]">
                    {level.title}
                  </h3>

                  {/* Divider */}
                  <div
                    className="mt-3 w-8 h-[2px]"
                    style={{ backgroundColor: level.color }}
                  />

                  {/* Description */}
                  <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                    {level.description}
                  </p>
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
