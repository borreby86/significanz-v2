"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";

interface Segment {
  id: string;
  label: string;
  description: string;
  color: string;
  hoverColor: string;
}

const segments: Segment[] = [
  {
    id: "professional",
    label: "Professional",
    description: "Your role, responsibilities, and professional growth. Aligning career aspirations with organizational impact.",
    color: "#34323A",
    hoverColor: "#4A484F",
  },
  {
    id: "private",
    label: "Private",
    description: "Your values, boundaries, and personal space. Understanding what matters most and protecting what's sacred.",
    color: "#5a5a5a",
    hoverColor: "#6b6b6b",
  },
  {
    id: "personal",
    label: "Personal",
    description: "Your relationships, reflections, and self-awareness. Building meaningful connections and deepening self-knowledge.",
    color: "#6b6b6b",
    hoverColor: "#7d7d7d",
  },
  {
    id: "practice",
    label: "Practice",
    description: "Your daily habits, routines, and consistent actions. Turning intentions into sustainable behaviors.",
    color: "#d0d0d0",
    hoverColor: "#e0e0e0",
  },
];

// SVG arc path generator for donut segments
function describeArc(
  cx: number,
  cy: number,
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number
): string {
  const startOuter = polarToCartesian(cx, cy, outerRadius, endAngle);
  const endOuter = polarToCartesian(cx, cy, outerRadius, startAngle);
  const startInner = polarToCartesian(cx, cy, innerRadius, endAngle);
  const endInner = polarToCartesian(cx, cy, innerRadius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", startOuter.x, startOuter.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
    "L", endInner.x, endInner.y,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
    "Z"
  ].join(" ");
}

function polarToCartesian(cx: number, cy: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
}

// Get text position for segment labels
function getTextPosition(cx: number, cy: number, radius: number, startAngle: number, endAngle: number) {
  const midAngle = (startAngle + endAngle) / 2;
  return polarToCartesian(cx, cy, radius, midAngle);
}

interface PurposeModelProps {
  className?: string;
}

export function PurposeModel({ className = "" }: PurposeModelProps) {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const cx = 200;
  const cy = 200;
  const innerRadius = 85;
  const outerRadius = 160;
  const gap = 4;

  const segmentAngles = [
    { start: 0 + gap / 2, end: 90 - gap / 2 },
    { start: 90 + gap / 2, end: 180 - gap / 2 },
    { start: 180 + gap / 2, end: 270 - gap / 2 },
    { start: 270 + gap / 2, end: 360 - gap / 2 },
  ];

  const activeSegmentData = segments.find((s) => s.id === activeSegment);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Decorative orbiting dots */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-[520px] h-[520px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {[0, 90, 180, 270].map((angle, i) => (
            <motion.div
              key={angle}
              className="absolute w-2 h-2 bg-red/40 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${angle}deg) translateY(-260px) translateX(-50%)`,
              }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Outer decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-[480px] h-[480px] rounded-full border border-gray-200/50"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="absolute w-[520px] h-[520px] rounded-full border border-gray-100/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
        <motion.div
          className="absolute w-[560px] h-[560px] rounded-full border border-dashed border-gray-100/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          initial={{ scale: 0, opacity: 0 }}
          style={isInView ? { scale: 1, opacity: 1 } : {}}
        />
      </div>

      {/* Pulsing background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-80 h-80 bg-red/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* SVG Diagram */}
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full max-w-[500px] mx-auto relative z-10"
        initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Definitions for effects */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
          </filter>
          <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B84575" />
            <stop offset="100%" stopColor="#A12F63" />
          </linearGradient>
          <radialGradient id="centerGlow" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#C85585" />
            <stop offset="100%" stopColor="#A12F63" />
          </radialGradient>
        </defs>

        {/* Rotating background circle */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={outerRadius + 15}
          fill="none"
          stroke="url(#centerGradient)"
          strokeWidth="1"
          strokeDasharray="8 8"
          opacity={0.2}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />

        {/* Segments */}
        {segments.map((segment, index) => {
          const angles = segmentAngles[index];
          const path = describeArc(cx, cy, innerRadius, outerRadius, angles.start, angles.end);
          const isActive = activeSegment === segment.id;
          const textPos = getTextPosition(cx, cy, (innerRadius + outerRadius) / 2, angles.start, angles.end);

          return (
            <g key={segment.id}>
              {/* Segment path */}
              <motion.path
                d={path}
                fill={isActive ? segment.hoverColor : segment.color}
                className="cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: isActive ? 1.05 : 1,
                  filter: isActive ? "url(#shadow)" : "none",
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.3 + index * 0.15 },
                  scale: { duration: 0.3, ease: "easeOut" },
                }}
                onMouseEnter={() => setActiveSegment(segment.id)}
                onMouseLeave={() => setActiveSegment(null)}
                style={{ transformOrigin: "center" }}
              />

              {/* Segment hover glow */}
              <AnimatePresence>
                {isActive && (
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="#A12F63"
                    strokeWidth="2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    filter="url(#glow)"
                    style={{ pointerEvents: "none" }}
                  />
                )}
              </AnimatePresence>

              {/* Segment label */}
              <motion.text
                x={textPos.x}
                y={textPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="pointer-events-none select-none"
                fill={segment.id === "practice" ? "#34323A" : "white"}
                fontSize="13"
                fontWeight="500"
                fontFamily="var(--font-dm-sans)"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.8 + index * 0.1 },
                  scale: { duration: 0.2 }
                }}
              >
                {segment.label}
              </motion.text>
            </g>
          );
        })}

        {/* Inner white ring */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={innerRadius}
          fill="white"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Center circle with gradient */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={innerRadius - 8}
          fill="url(#centerGlow)"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Pulsing ring around center */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={innerRadius - 8}
          fill="none"
          stroke="white"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? {
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.2, 0.5]
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1
          }}
        />

        {/* White decorative ring */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={innerRadius - 3}
          fill="none"
          stroke="white"
          strokeWidth="5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Purpose text */}
        <motion.text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="24"
          fontWeight="400"
          fontFamily="var(--font-playfair)"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Purpose
        </motion.text>

        {/* Decorative dots around center */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const pos = polarToCartesian(cx, cy, innerRadius - 20, angle);
          return (
            <motion.circle
              key={angle}
              cx={pos.x}
              cy={pos.y}
              r="2"
              fill="white"
              opacity={0.4}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: [0, 1, 0.8] } : {}}
              transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
            />
          );
        })}
      </motion.svg>

      {/* Tooltip */}
      <AnimatePresence>
        {activeSegmentData && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full mt-6 w-full max-w-sm"
          >
            <motion.div
              className="bg-white shadow-2xl border border-gray-100 p-6 text-center relative overflow-hidden"
              layoutId="tooltip"
            >
              {/* Decorative accent */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-red"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.h4
                className="font-[family-name:var(--font-playfair)] text-xl text-black"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {activeSegmentData.label}
              </motion.h4>
              <motion.p
                className="mt-3 text-gray-600 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                {activeSegmentData.description}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instruction text */}
      <motion.p
        className="text-center text-sm text-gray-400 mt-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
      >
        Hover over each dimension to explore
      </motion.p>
    </div>
  );
}
