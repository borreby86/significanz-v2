"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type DividerType = "wave" | "curve" | "diagonal" | "zigzag";
type DividerPosition = "top" | "bottom";

interface SectionDividerProps {
  type?: DividerType;
  position?: DividerPosition;
  className?: string;
  color?: string;
  height?: number;
  animated?: boolean;
}

export function SectionDivider({
  type = "wave",
  position = "bottom",
  className,
  color = "#FAFAFA",
  height = 80,
  animated = true,
}: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathOffset = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const getPath = () => {
    switch (type) {
      case "wave":
        return `M0,${height} C150,${height * 0.3} 350,${height * 1.3} 500,${height} C650,${height * 0.7} 850,${height * 1.1} 1000,${height} L1000,${position === "top" ? 0 : height * 2} L0,${position === "top" ? 0 : height * 2} Z`;
      case "curve":
        return position === "top"
          ? `M0,${height} Q500,0 1000,${height} L1000,0 L0,0 Z`
          : `M0,0 Q500,${height} 1000,0 L1000,${height} L0,${height} Z`;
      case "diagonal":
        return position === "top"
          ? `M0,${height} L1000,0 L1000,0 L0,0 Z`
          : `M0,0 L1000,${height} L1000,${height} L0,${height} Z`;
      case "zigzag":
        const points = [];
        const segments = 10;
        for (let i = 0; i <= segments; i++) {
          const x = (i / segments) * 1000;
          const y = i % 2 === 0 ? 0 : height;
          points.push(`${x},${y}`);
        }
        return position === "top"
          ? `M${points.join(" L")} L1000,0 L0,0 Z`
          : `M${points.join(" L")} L1000,${height} L0,${height} Z`;
      default:
        return "";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden pointer-events-none",
        position === "top" ? "-top-px" : "-bottom-px",
        className
      )}
      style={{ height: height }}
    >
      <motion.svg
        className="absolute w-full h-full"
        viewBox={`0 0 1000 ${height}`}
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.path
          d={getPath()}
          fill={color}
          style={animated ? { translateX: pathOffset } : {}}
        />
      </motion.svg>
    </div>
  );
}

// Gradient divider - smooth color transition
interface GradientDividerProps {
  fromColor?: string;
  toColor?: string;
  height?: number;
  className?: string;
}

export function GradientDivider({
  fromColor = "transparent",
  toColor = "#FAFAFA",
  height = 120,
  className,
}: GradientDividerProps) {
  return (
    <div
      className={cn("w-full pointer-events-none", className)}
      style={{
        height,
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
      }}
    />
  );
}

// Animated line divider
interface LineDividerProps {
  className?: string;
  color?: string;
  thickness?: number;
  animated?: boolean;
}

export function LineDivider({
  className,
  color = "#E5E5E5",
  thickness = 1,
  animated = true,
}: LineDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={cn("w-full overflow-hidden", className)}>
      <motion.div
        className="w-full"
        style={{
          height: thickness,
          backgroundColor: color,
          originX: 0,
        }}
        initial={{ scaleX: 0 }}
        animate={isInView && animated ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

// Decorative dots divider
interface DotsDividerProps {
  className?: string;
  color?: string;
  count?: number;
  size?: number;
  gap?: number;
}

export function DotsDivider({
  className,
  color = "#D4D4D4",
  count = 3,
  size = 4,
  gap = 8,
}: DotsDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={cn("flex justify-center items-center", className)}
      style={{ gap }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.4,
            delay: i * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      ))}
    </div>
  );
}

// Elegant bracket divider
interface BracketDividerProps {
  className?: string;
  children?: React.ReactNode;
}

export function BracketDivider({ className, children }: BracketDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-6", className)}
    >
      <motion.div
        className="flex-1 h-px bg-gray-200 origin-right"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {children}
        </motion.div>
      )}
      <motion.div
        className="flex-1 h-px bg-gray-200 origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}
