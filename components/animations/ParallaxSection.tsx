"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Parallax speed multiplier (default 0.5)
  direction?: "up" | "down";
}

export function ParallaxSection({
  children,
  className,
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * speed * multiplier, -100 * speed * multiplier]
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

// Parallax layer - for creating depth with multiple layers
interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  offset?: [number, number]; // Start and end offset percentages
}

export function ParallaxLayer({
  children,
  className,
  speed = 0.3,
  offset = [-50, 50],
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offset[0] * speed, offset[1] * speed]
  );

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

// Sticky parallax section - content sticks while background scrolls
interface StickyParallaxProps {
  children: ReactNode;
  background?: ReactNode;
  className?: string;
  height?: string; // e.g., "200vh"
}

export function StickyParallax({
  children,
  background,
  className,
  height = "200vh",
}: StickyParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={ref} className={cn("relative", className)} style={{ height }}>
      {/* Background layer */}
      {background && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: backgroundY }}
        >
          {background}
        </motion.div>
      )}

      {/* Sticky content */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

// Scale on scroll section
interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
  startScale?: number;
  endScale?: number;
}

export function ScaleOnScroll({
  children,
  className,
  startScale = 0.8,
  endScale = 1,
}: ScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [startScale, endScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <motion.div ref={ref} className={className} style={{ scale, opacity }}>
      {children}
    </motion.div>
  );
}

// Horizontal scroll section
interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalScroll({ children, className }: HorizontalScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={ref} className={cn("relative h-[300vh]", className)}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div className="flex gap-8" style={{ x }}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}

// Reveal on scroll - reveals content as you scroll
interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function RevealOnScroll({
  children,
  className,
  direction = "up",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return { y: useTransform(scrollYProgress, [0, 1], [100, 0]) };
      case "down":
        return { y: useTransform(scrollYProgress, [0, 1], [-100, 0]) };
      case "left":
        return { x: useTransform(scrollYProgress, [0, 1], [100, 0]) };
      case "right":
        return { x: useTransform(scrollYProgress, [0, 1], [-100, 0]) };
    }
  };

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...getTransform(), opacity }}
    >
      {children}
    </motion.div>
  );
}

// Progress indicator for scroll
interface ScrollProgressProps {
  className?: string;
  color?: string;
  height?: number;
  position?: "top" | "bottom";
}

export function ScrollProgress({
  className,
  color = "#C41E3A",
  height = 3,
  position = "top",
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        "fixed left-0 right-0 z-50 origin-left",
        position === "top" ? "top-0" : "bottom-0",
        className
      )}
      style={{
        scaleX: scrollYProgress,
        height,
        backgroundColor: color,
      }}
    />
  );
}
