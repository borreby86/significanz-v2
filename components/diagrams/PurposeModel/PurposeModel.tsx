"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";

interface Segment {
  id: string;
  label: string;
  description: string;
  color: string;
  hoverColor: string;
  highlightColor: string;
}

const segments: Segment[] = [
  {
    id: "professional",
    label: "Professional",
    description: "Your role, responsibilities, and professional growth. Aligning career aspirations with organizational impact.",
    color: "#34323A",
    hoverColor: "#4A484F",
    highlightColor: "#A12F63",
  },
  {
    id: "private",
    label: "Private",
    description: "Your values, boundaries, and personal space. Understanding what matters most and protecting what's sacred.",
    color: "#5A1735",
    hoverColor: "#7A2855",
    highlightColor: "#A12F63",
  },
  {
    id: "personal",
    label: "Personal",
    description: "Your relationships, reflections, and self-awareness. Building meaningful connections and deepening self-knowledge.",
    color: "#8B6B61",
    hoverColor: "#9E7D73",
    highlightColor: "#B08E84",
  },
  {
    id: "practice",
    label: "Practice",
    description: "Your daily habits, routines, and consistent actions. Turning intentions into sustainable behaviors.",
    color: "#BFA27A",
    hoverColor: "#CDB38B",
    highlightColor: "#D8C49C",
  },
];

function describeArc(
  cx: number, cy: number, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number
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

function getTextPosition(cx: number, cy: number, radius: number, startAngle: number, endAngle: number) {
  const midAngle = (startAngle + endAngle) / 2;
  return polarToCartesian(cx, cy, radius, midAngle);
}

export interface PurposeModelProps {
  className?: string;
  highlightedSegment?: string | null;
  interactive?: boolean;
  showDecorations?: boolean;
  size?: "default" | "compact";
  onSegmentHover?: (segmentId: string | null) => void;
}

export function PurposeModel({
  className = "",
  highlightedSegment = null,
  interactive = true,
  showDecorations = true,
  size = "default",
  onSegmentHover,
}: PurposeModelProps) {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const handleSegmentEnter = (segmentId: string) => {
    if (interactive) {
      setActiveSegment(segmentId);
      onSegmentHover?.(segmentId);
    }
  };

  const handleSegmentLeave = () => {
    if (interactive) {
      setActiveSegment(null);
      onSegmentHover?.(null);
    }
  };

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

  const isCompact = size === "compact";

  const getSegmentFill = (segment: Segment, isActive: boolean) => {
    if (highlightedSegment) {
      return segment.id === highlightedSegment ? segment.highlightColor : "#E5E5E5";
    }
    return isActive ? segment.hoverColor : segment.color;
  };

  const getSegmentOpacity = (segment: Segment) => {
    if (highlightedSegment) {
      return segment.id === highlightedSegment ? 1 : 0.4;
    }
    return 1;
  };

  // Card positions: top-right, bottom-right, bottom-left, top-left
  // Matching segment order: Professional (top-right), Private (bottom-right), Personal (bottom-left), Practice (top-left)
  const cardLayout: { side: "left" | "right"; vAlign: "top" | "bottom" }[] = [
    { side: "right", vAlign: "top" },
    { side: "right", vAlign: "bottom" },
    { side: "left", vAlign: "bottom" },
    { side: "left", vAlign: "top" },
  ];

  return (
    <div ref={containerRef} className={`${className}`}>
      <div className={`relative ${isCompact ? "max-w-[400px]" : "max-w-6xl"} mx-auto`}>
        {/* Main layout: cards on left, diagram center, cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center">

          {/* Left side cards (Practice top-left, Personal bottom-left) */}
          <div className="hidden lg:flex flex-col gap-6 justify-center">
            {[3, 2].map((segIndex) => {
              const segment = segments[segIndex];
              const isExpanded = expandedCard === segment.id;
              return (
                <motion.div
                  key={segment.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + segIndex * 0.1 }}
                  className="relative bg-white border border-gray-100 px-5 py-4 transition-shadow duration-300 hover:shadow-md"
                  onMouseEnter={() => handleSegmentEnter(segment.id)}
                  onMouseLeave={handleSegmentLeave}
                >
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1"
                    style={{ backgroundColor: segment.color }}
                  />
                  <div className="pl-3">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#34323A] italic">
                      {segment.label}
                    </h3>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-600 text-sm leading-relaxed overflow-hidden"
                        >
                          <span className="block pt-2">{segment.description}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <button
                      onClick={() => setExpandedCard(isExpanded ? null : segment.id)}
                      className="mt-2 text-xs uppercase tracking-wider font-medium cursor-pointer"
                      style={{ color: segment.color }}
                    >
                      {isExpanded ? "Close" : "Learn more"}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center: SVG diagram */}
          <div className="relative flex-shrink-0">
            {showDecorations && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  className="absolute w-96 h-96 bg-red/5 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            )}

            <motion.svg
              viewBox="0 0 400 400"
              className={`w-full ${isCompact ? "max-w-[300px]" : "max-w-[420px]"} mx-auto relative z-10`}
              initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
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

              {showDecorations && (
                <motion.circle
                  cx={cx} cy={cy} r={outerRadius + 15}
                  fill="none" stroke="url(#centerGradient)" strokeWidth="1" strokeDasharray="8 8" opacity={0.2}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />
              )}

              {segments.map((segment, index) => {
                const angles = segmentAngles[index];
                const path = describeArc(cx, cy, innerRadius, outerRadius, angles.start, angles.end);
                const isActive = activeSegment === segment.id;
                const isHighlighted = highlightedSegment === segment.id;
                const textPos = getTextPosition(cx, cy, (innerRadius + outerRadius) / 2, angles.start, angles.end);

                return (
                  <g key={segment.id}>
                    <motion.path
                      d={path}
                      fill={getSegmentFill(segment, isActive)}
                      className={interactive ? "cursor-pointer" : ""}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: getSegmentOpacity(segment),
                        scale: (isActive || isHighlighted) ? 1.05 : 1,
                        filter: (isActive || isHighlighted) ? "url(#shadow)" : "none",
                      }}
                      transition={{
                        opacity: { duration: 0.6, delay: 0.3 + index * 0.15 },
                        scale: { duration: 0.3, ease: "easeOut" },
                      }}
                      onMouseEnter={() => handleSegmentEnter(segment.id)}
                      onMouseLeave={handleSegmentLeave}
                      style={{ transformOrigin: "center" }}
                    />
                    <AnimatePresence>
                      {(isActive || isHighlighted) && (
                        <motion.path
                          d={path} fill="none" stroke="#A12F63" strokeWidth="2"
                          initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }} filter="url(#glow)"
                          style={{ pointerEvents: "none" }}
                        />
                      )}
                    </AnimatePresence>
                    <motion.text
                      x={textPos.x} y={textPos.y} textAnchor="middle" dominantBaseline="middle"
                      className="pointer-events-none select-none"
                      fill={
                        highlightedSegment
                          ? (isHighlighted ? "white" : "#999999")
                          : (segment.id === "practice" ? "#34323A" : "white")
                      }
                      fontSize="15" fontWeight="400" fontFamily="var(--font-playfair)" fontStyle="italic"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        opacity: highlightedSegment ? (isHighlighted ? 1 : 0.5) : 1,
                        scale: (isActive || isHighlighted) ? 1.1 : 1,
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

              <motion.circle cx={cx} cy={cy} r={innerRadius} fill="white"
                initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.circle cx={cx} cy={cy} r={innerRadius - 8} fill="url(#centerGlow)"
                initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.circle cx={cx} cy={cy} r={innerRadius - 8} fill="none" stroke="white" strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] } : {}}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <motion.circle cx={cx} cy={cy} r={innerRadius - 3} fill="none" stroke="white" strokeWidth="5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle"
                fill="white" fontSize="22" fontWeight="400" fontFamily="var(--font-playfair)" fontStyle="italic"
                initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                Purpose
              </motion.text>
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const pos = polarToCartesian(cx, cy, innerRadius - 20, angle);
                return (
                  <motion.circle key={angle} cx={pos.x} cy={pos.y} r="2" fill="white" opacity={0.4}
                    initial={{ scale: 0 }} animate={isInView ? { scale: [0, 1, 0.8] } : {}}
                    transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                  />
                );
              })}
            </motion.svg>
          </div>

          {/* Right side cards (Professional top-right, Private bottom-right) */}
          <div className="hidden lg:flex flex-col gap-6 justify-center">
            {[0, 1].map((segIndex) => {
              const segment = segments[segIndex];
              const isExpanded = expandedCard === segment.id;
              return (
                <motion.div
                  key={segment.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + segIndex * 0.1 }}
                  className="relative bg-white border border-gray-100 px-5 py-4 transition-shadow duration-300 hover:shadow-md"
                  onMouseEnter={() => handleSegmentEnter(segment.id)}
                  onMouseLeave={handleSegmentLeave}
                >
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1"
                    style={{ backgroundColor: segment.color }}
                  />
                  <div className="pl-3">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#34323A] italic">
                      {segment.label}
                    </h3>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-600 text-sm leading-relaxed overflow-hidden"
                        >
                          <span className="block pt-2">{segment.description}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <button
                      onClick={() => setExpandedCard(isExpanded ? null : segment.id)}
                      className="mt-2 text-xs uppercase tracking-wider font-medium cursor-pointer"
                      style={{ color: segment.color }}
                    >
                      {isExpanded ? "Close" : "Learn more"}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: stacked cards below */}
        <div className="lg:hidden mt-8 grid grid-cols-2 gap-4">
          {segments.map((segment, index) => {
            const isExpanded = expandedCard === segment.id;
            return (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative bg-white border border-gray-100 px-4 py-3"
                onMouseEnter={() => handleSegmentEnter(segment.id)}
                onMouseLeave={handleSegmentLeave}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: segment.color }} />
                <h3 className="font-[family-name:var(--font-playfair)] text-base text-[#34323A] italic">
                  {segment.label}
                </h3>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 text-sm leading-relaxed overflow-hidden"
                    >
                      <span className="block pt-2">{segment.description}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : segment.id)}
                  className="mt-1 text-xs uppercase tracking-wider font-medium cursor-pointer"
                  style={{ color: segment.color }}
                >
                  {isExpanded ? "Close" : "Learn more"}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { segments };
