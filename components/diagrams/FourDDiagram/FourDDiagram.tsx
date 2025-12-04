"use client";

import { useState, useEffect, useRef } from "react";
import { useInView, motion } from "motion/react";
import { PHASES, SIZES, COLORS } from "./constants";
import type { FourDDiagramProps, Phase } from "./types";
import { cn } from "@/lib/utils";

// Helper functions for SVG arc calculations
function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
}

function describeArc(
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number
): string {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
}

export function FourDDiagram({
  variant = 'full',
  className,
  autoPlay = false,
  interactive = true,
}: FourDDiagramProps) {
  const [activePhase, setActivePhase] = useState<Phase['id'] | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const size = SIZES[variant];
  const centerX = size.width / 2;
  const centerY = size.height / 2;

  // Trigger entrance animation when in view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Auto-play cycling through phases
  useEffect(() => {
    if (!autoPlay || !hasAnimated) return;

    const interval = setInterval(() => {
      setActivePhase((current) => {
        const currentIndex = current
          ? PHASES.findIndex(p => p.id === current)
          : -1;
        const nextIndex = (currentIndex + 1) % PHASES.length;
        return PHASES[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay, hasAnimated]);

  const handlePhaseHover = (phaseId: Phase['id'] | null) => {
    if (interactive) {
      setActivePhase(phaseId);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full",
        variant === 'full' ? "aspect-[16/9]" : "aspect-square",
        className
      )}
    >
      <svg
        viewBox={`0 0 ${size.width} ${size.height}`}
        className="w-full h-full"
        aria-labelledby="four-d-title four-d-desc"
        role="img"
      >
        <title id="four-d-title">4D Framework Diagram</title>
        <desc id="four-d-desc">
          Interactive diagram showing the four phases: Discover, Define, Design, Deploy
        </desc>

        {/* Background circle */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={size.outerRadius}
          fill="none"
          stroke={COLORS.gray200}
          strokeWidth={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={hasAnimated ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Segments */}
        {PHASES.map((phase, index) => {
          const midAngle = (phase.startAngle + phase.endAngle) / 2;
          const labelPos = polarToCartesian(centerX, centerY, size.labelRadius, midAngle);
          const isActive = activePhase === phase.id;

          const arcPath = describeArc(
            centerX,
            centerY,
            size.outerRadius - 15,
            phase.startAngle + 3,
            phase.endAngle - 3
          );

          return (
            <g
              key={phase.id}
              role="button"
              aria-label={`${phase.name}: ${phase.tagline}`}
              tabIndex={interactive ? 0 : -1}
              onMouseEnter={() => handlePhaseHover(phase.id)}
              onMouseLeave={() => handlePhaseHover(null)}
              onFocus={() => handlePhaseHover(phase.id)}
              onBlur={() => handlePhaseHover(null)}
              style={{ cursor: interactive ? 'pointer' : 'default' }}
            >
              {/* Arc segment */}
              <motion.path
                d={arcPath}
                fill="none"
                stroke={isActive ? COLORS.red : COLORS.gray400}
                strokeWidth={isActive ? 4 : 2}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={hasAnimated ? {
                  pathLength: 1,
                  opacity: 1,
                } : {}}
                transition={{
                  pathLength: { duration: 0.8, delay: index * 0.15 },
                  opacity: { duration: 0.4, delay: index * 0.15 },
                }}
              />

              {/* Phase number */}
              <motion.text
                x={labelPos.x}
                y={labelPos.y - (variant === 'full' ? 28 : 22)}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isActive ? COLORS.red : COLORS.gray400}
                fontSize={variant === 'full' ? 12 : 10}
                fontWeight={500}
                style={{ fontFamily: 'var(--font-dm-sans)' }}
                initial={{ opacity: 0, y: 10 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.3,
                }}
              >
                {phase.number}
              </motion.text>

              {/* Phase name */}
              <motion.text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isActive ? COLORS.black : COLORS.gray600}
                fontSize={variant === 'full' ? 18 : 14}
                fontWeight={400}
                style={{ fontFamily: 'var(--font-playfair)' }}
                initial={{ opacity: 0, y: 10 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.4,
                }}
              >
                {phase.name}
              </motion.text>

              {/* Tagline (only in full variant) */}
              {variant === 'full' && (
                <motion.text
                  x={labelPos.x}
                  y={labelPos.y + 22}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isActive ? COLORS.red : COLORS.gray400}
                  fontSize={11}
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15 + 0.5,
                  }}
                >
                  {phase.tagline}
                </motion.text>
              )}
            </g>
          );
        })}

        {/* Center circle */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={size.innerRadius}
          fill={COLORS.white}
          stroke={COLORS.gray200}
          strokeWidth={1}
          initial={{ scale: 0, opacity: 0 }}
          animate={hasAnimated ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.8,
            type: "spring",
            stiffness: 200,
          }}
        />

        {/* "4D" text in center */}
        <motion.text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={COLORS.black}
          fontSize={variant === 'full' ? 28 : 22}
          fontWeight={400}
          style={{ fontFamily: 'var(--font-playfair)' }}
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          4D
        </motion.text>
      </svg>
    </div>
  );
}
