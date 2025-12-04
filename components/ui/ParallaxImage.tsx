"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "motion/react";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number; // Parallax speed: positive = moves up, negative = moves down
  scale?: boolean; // Scale up on scroll
  reveal?: boolean; // Curtain reveal effect
  revealDirection?: "left" | "right" | "top" | "bottom";
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  speed = 0.2,
  scale = false,
  reveal = false,
  revealDirection = "left",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = true,
  width,
  height,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  // Scale effect
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  // Get reveal clip path based on direction
  const getRevealClipPath = () => {
    if (!reveal) return undefined;

    const clipPathEnd = "inset(0 0 0 0)";
    const clipPathStart =
      revealDirection === "left"
        ? "inset(0 100% 0 0)"
        : revealDirection === "right"
          ? "inset(0 0 0 100%)"
          : revealDirection === "top"
            ? "inset(0 0 100% 0)"
            : "inset(100% 0 0 0)";

    return isInView ? clipPathEnd : clipPathStart;
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <motion.div
        className="w-full h-full"
        style={{
          y,
          scale: scale ? imageScale : 1,
        }}
        initial={reveal ? { clipPath: "inset(0 100% 0 0)" } : undefined}
        animate={reveal ? { clipPath: getRevealClipPath() } : undefined}
        transition={
          reveal
            ? {
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }
            : undefined
        }
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={cn("object-cover", className)}
            sizes={sizes}
            priority={priority}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn("object-cover", className)}
            sizes={sizes}
            priority={priority}
          />
        )}
      </motion.div>

      {/* Optional grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-noise" />
    </div>
  );
}

// Image with hover zoom effect
interface ZoomImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  zoomScale?: number;
  priority?: boolean;
  sizes?: string;
}

export function ZoomImage({
  src,
  alt,
  className,
  containerClassName,
  zoomScale = 1.1,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ZoomImageProps) {
  return (
    <div className={cn("relative overflow-hidden group", containerClassName)}>
      <motion.div
        className="w-full h-full"
        whileHover={{ scale: zoomScale }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn("object-cover", className)}
          sizes={sizes}
          priority={priority}
        />
      </motion.div>
    </div>
  );
}

// Image with reveal mask animation
interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  priority?: boolean;
  sizes?: string;
}

export function RevealImage({
  src,
  alt,
  className,
  containerClassName,
  direction = "left",
  delay = 0,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getInitialClipPath = () => {
    switch (direction) {
      case "left":
        return "inset(0 100% 0 0)";
      case "right":
        return "inset(0 0 0 100%)";
      case "top":
        return "inset(0 0 100% 0)";
      case "bottom":
        return "inset(100% 0 0 0)";
    }
  };

  return (
    <div ref={ref} className={cn("relative overflow-hidden", containerClassName)}>
      <motion.div
        className="w-full h-full"
        initial={{ clipPath: getInitialClipPath() }}
        animate={isInView ? { clipPath: "inset(0 0 0 0)" } : {}}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
          delay,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn("object-cover", className)}
          sizes={sizes}
          priority={priority}
        />
      </motion.div>

      {/* Reveal overlay that slides away */}
      <motion.div
        className="absolute inset-0 bg-white-soft"
        initial={{ x: 0 }}
        animate={
          isInView
            ? {
                x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
                y: direction === "top" ? "100%" : direction === "bottom" ? "-100%" : 0,
              }
            : {}
        }
        transition={{
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
          delay,
        }}
      />
    </div>
  );
}
