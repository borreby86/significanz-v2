"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

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
    color: "#34323A",
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
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-5% 0px" });

  // Mouse tracking for subtle 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setActiveLevel(null);
  };

  const activeLevelData = pyramidLevels.find((l) => l.id === activeLevel);

  // Pyramid dimensions - connected properly
  // viewBox: 0 0 600 520
  // Peak at (300, 40)
  // Mastery bottom at y=180, width from 210 to 390
  // Leverage bottom at y=320, width from 120 to 480
  // Awareness bottom at y=480, width from 30 to 570

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Centered layout with overlay card */}
      <div className="relative max-w-5xl mx-auto">
        {/* 3D Pyramid */}
        <motion.div
          className="relative"
          style={{ perspective: "1000px" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Connected Pyramid SVG */}
            <svg
              viewBox="0 0 600 520"
              className="w-full h-auto"
              style={{
                filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.15))",
              }}
            >
              <defs>
                {/* Gradients */}
                <linearGradient id="awarenessGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4a484f" />
                  <stop offset="100%" stopColor="#2a282f" />
                </linearGradient>
                <linearGradient id="awarenessGradHover" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5a585f" />
                  <stop offset="100%" stopColor="#3a383f" />
                </linearGradient>

                <linearGradient id="leverageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D4BC94" />
                  <stop offset="100%" stopColor="#A8895E" />
                </linearGradient>
                <linearGradient id="leverageGradHover" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E5D0AA" />
                  <stop offset="100%" stopColor="#BFA27A" />
                </linearGradient>

                <linearGradient id="masteryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#c85585" />
                  <stop offset="100%" stopColor="#8B2854" />
                </linearGradient>
                <linearGradient id="masteryGradHover" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E88AAF" />
                  <stop offset="100%" stopColor="#A12F63" />
                </linearGradient>

                {/* Right side gradients (darker) */}
                <linearGradient id="awarenessRight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#34323A" />
                  <stop offset="100%" stopColor="#1a181f" />
                </linearGradient>
                <linearGradient id="leverageRight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A8895E" />
                  <stop offset="100%" stopColor="#8A7048" />
                </linearGradient>
                <linearGradient id="masteryRight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B2854" />
                  <stop offset="100%" stopColor="#5A1A38" />
                </linearGradient>
              </defs>

              {/* AWARENESS - Bottom trapezoid (y: 320 to 480) */}
              <motion.g
                className="cursor-pointer"
                onMouseEnter={() => setActiveLevel("awareness")}
                onMouseLeave={() => setActiveLevel(null)}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Left face */}
                <motion.path
                  d="M30 480 L128 320 L300 320 L300 480 Z"
                  fill={activeLevel === "awareness" ? "url(#awarenessGradHover)" : "url(#awarenessGrad)"}
                  animate={{ y: activeLevel === "awareness" ? -8 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                {/* Right face */}
                <motion.path
                  d="M300 320 L472 320 L570 480 L300 480 Z"
                  fill={activeLevel === "awareness" ? "url(#awarenessGradHover)" : "url(#awarenessRight)"}
                  animate={{ y: activeLevel === "awareness" ? -8 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                {/* Top edge highlight */}
                <motion.line
                  x1="128" y1="320" x2="472" y2="320"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  animate={{ y: activeLevel === "awareness" ? -8 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                {/* Label */}
                <motion.text
                  x="300"
                  y="410"
                  textAnchor="middle"
                  fill="white"
                  fontSize="24"
                  fontWeight="400"
                  fontFamily="var(--font-playfair)"
                  letterSpacing="0.2em"
                  animate={{
                    y: activeLevel === "awareness" ? -8 : 0,
                    opacity: activeLevel === "awareness" ? 1 : 0.8
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  AWARENESS
                </motion.text>
              </motion.g>

              {/* LEVERAGE - Middle trapezoid (y: 180 to 320) */}
              <motion.g
                className="cursor-pointer"
                onMouseEnter={() => setActiveLevel("leverage")}
                onMouseLeave={() => setActiveLevel(null)}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Left face */}
                <motion.path
                  d="M128 320 L214 180 L300 180 L300 320 Z"
                  fill={activeLevel === "leverage" ? "url(#leverageGradHover)" : "url(#leverageGrad)"}
                  animate={{ y: activeLevel === "leverage" ? -8 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                {/* Right face */}
                <motion.path
                  d="M300 180 L386 180 L472 320 L300 320 Z"
                  fill={activeLevel === "leverage" ? "url(#leverageGradHover)" : "url(#leverageRight)"}
                  animate={{ y: activeLevel === "leverage" ? -8 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                {/* Top edge highlight */}
                <motion.line
                  x1="214" y1="180" x2="386" y2="180"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  animate={{ y: activeLevel === "leverage" ? -8 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                {/* Label */}
                <motion.text
                  x="300"
                  y="265"
                  textAnchor="middle"
                  fill="white"
                  fontSize="22"
                  fontWeight="400"
                  fontFamily="var(--font-playfair)"
                  letterSpacing="0.2em"
                  animate={{
                    y: activeLevel === "leverage" ? -8 : 0,
                    opacity: activeLevel === "leverage" ? 1 : 0.8
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  LEVERAGE
                </motion.text>
              </motion.g>

              {/* MASTERY - Top triangle (y: 40 to 180) */}
              <motion.g
                className="cursor-pointer"
                onMouseEnter={() => setActiveLevel("mastery")}
                onMouseLeave={() => setActiveLevel(null)}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Left face */}
                <motion.path
                  d="M214 180 L300 40 L300 180 Z"
                  fill={activeLevel === "mastery" ? "url(#masteryGradHover)" : "url(#masteryGrad)"}
                  animate={{ y: activeLevel === "mastery" ? -10 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                {/* Right face */}
                <motion.path
                  d="M300 40 L386 180 L300 180 Z"
                  fill={activeLevel === "mastery" ? "url(#masteryGradHover)" : "url(#masteryRight)"}
                  animate={{ y: activeLevel === "mastery" ? -10 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                {/* Peak highlight */}
                <motion.circle
                  cx="300"
                  cy="40"
                  r="4"
                  fill="white"
                  animate={{
                    y: activeLevel === "mastery" ? -10 : 0,
                    opacity: activeLevel === "mastery" ? 0.9 : 0.5,
                    scale: activeLevel === "mastery" ? [1, 1.3, 1] : 1
                  }}
                  transition={{
                    y: { type: "spring", stiffness: 300, damping: 25 },
                    opacity: { type: "spring", stiffness: 300, damping: 25 },
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                {/* Label */}
                <motion.text
                  x="300"
                  y="145"
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="400"
                  fontFamily="var(--font-playfair)"
                  letterSpacing="0.1em"
                  animate={{
                    y: activeLevel === "mastery" ? -10 : 0,
                    opacity: activeLevel === "mastery" ? 1 : 0.85
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  MASTERY
                </motion.text>
              </motion.g>
            </svg>
          </motion.div>
        </motion.div>

        {/* Overlay Info Card - Appears on top of pyramid */}
        <AnimatePresence mode="wait">
          {activeLevelData && (
            <motion.div
              key={activeLevelData.id}
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.8
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-20 pointer-events-none"
            >
              <div
                className="bg-white/95 backdrop-blur-md shadow-2xl p-8 md:p-10 border border-white/50"
                style={{
                  boxShadow: `0 25px 60px -15px rgba(0,0,0,0.25), 0 0 0 1px ${activeLevelData.color}20`
                }}
              >
                {/* Colored top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: activeLevelData.color }}
                />

                {/* Number */}
                <span
                  className="absolute top-4 right-6 text-7xl font-[family-name:var(--font-playfair)] leading-none select-none"
                  style={{ color: `${activeLevelData.color}15` }}
                >
                  {activeLevelData.number}
                </span>

                <div className="relative">
                  {/* Subtitle */}
                  <span
                    className="text-xs uppercase tracking-[0.3em] font-medium"
                    style={{ color: activeLevelData.color }}
                  >
                    {activeLevelData.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-4xl text-black tracking-tight">
                    {activeLevelData.title}
                  </h3>

                  {/* Divider */}
                  <div
                    className="mt-4 w-10 h-[2px]"
                    style={{ backgroundColor: activeLevelData.color }}
                  />

                  {/* Description */}
                  <p className="mt-4 text-gray-600 text-base leading-relaxed">
                    {activeLevelData.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint text when no selection */}
        <AnimatePresence>
          {!activeLevel && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center"
            >
              <p className="text-gray-400 text-sm">
                Hover over each level to learn more
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export { pyramidLevels };
