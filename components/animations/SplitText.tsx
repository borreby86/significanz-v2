"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type SplitType = "chars" | "words" | "lines";

interface SplitTextProps {
  children: string;
  className?: string;
  splitType?: SplitType;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
}

export function SplitText({
  children,
  className,
  splitType = "words",
  delay = 0,
  staggerDelay,
  duration,
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const getSplitContent = () => {
    switch (splitType) {
      case "chars":
        return children.split("");
      case "lines":
        return children.split("\n");
      default:
        return children.split(" ");
    }
  };

  const splitContent = getSplitContent();
  const defaultStagger = splitType === "chars" ? 0.02 : splitType === "lines" ? 0.15 : 0.08;
  const actualStagger = staggerDelay ?? defaultStagger;
  const actualDuration = duration ?? (splitType === "chars" ? 0.5 : splitType === "lines" ? 0.8 : 0.6);

  return (
    <span
      ref={ref}
      className={cn("inline-block", className)}
      aria-label={children}
    >
      {splitContent.map((item, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: actualDuration,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: delay + index * actualStagger,
            }}
            style={{
              display: "inline-block",
              willChange: "transform, opacity",
            }}
          >
            {item}
            {splitType === "words" && index < splitContent.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Animated line reveal - for paragraphs
interface LineRevealProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function LineReveal({
  children,
  className,
  delay = 0,
  once = true,
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Animated underline that draws itself
interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  thickness?: number;
  delay?: number;
}

export function AnimatedUnderline({
  children,
  className,
  color = "currentColor",
  thickness = 2,
  delay = 0,
}: AnimatedUnderlineProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <span ref={ref} className={cn("relative inline-block", className)}>
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: thickness,
          backgroundColor: color,
          originX: 0,
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay,
        }}
      />
    </span>
  );
}

// Gradient text with animation
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className,
  from = "#C41E3A",
  to = "#E8354D",
  animate = false,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent",
        animate && "animate-gradient-x bg-[length:200%_auto]",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(90deg, ${from}, ${to}, ${from})`,
      }}
    >
      {children}
    </span>
  );
}
