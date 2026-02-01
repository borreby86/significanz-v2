"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useTranslation } from "@/lib/i18n";

interface CursorState {
  isHovering: boolean;
  isPointer: boolean;
  textType: "view" | "explore" | null;
}

export function CustomCursor() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isPointer: false,
    textType: null,
  });

  // Get translated text based on textType
  const cursorText = cursorState.textType
    ? cursorState.textType === "view" ? t.cursor.view : t.cursor.explore
    : null;

  // Raw mouse position - start off-screen
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smoothed cursor position with spring physics
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Slower spring for the outer ring
  const ringSpringConfig = { damping: 30, stiffness: 200, mass: 0.8 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Track hover states on interactive elements
    const handleElementHover = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]'
      );
      const viewElements = document.querySelectorAll('[data-cursor="view"]');
      const exploreElements = document.querySelectorAll(
        '[data-cursor="explore"]'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setCursorState((prev) => ({ ...prev, isPointer: true }));
        });
        el.addEventListener("mouseleave", () => {
          setCursorState((prev) => ({ ...prev, isPointer: false }));
        });
      });

      viewElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setCursorState({ isHovering: true, isPointer: true, textType: "view" });
        });
        el.addEventListener("mouseleave", () => {
          setCursorState({ isHovering: false, isPointer: false, textType: null });
        });
      });

      exploreElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setCursorState({
            isHovering: true,
            isPointer: true,
            textType: "explore",
          });
        });
        el.addEventListener("mouseleave", () => {
          setCursorState({ isHovering: false, isPointer: false, textType: null });
        });
      });
    };

    // Initial setup and observe DOM changes
    handleElementHover();
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  // Don't render on touch devices
  if (typeof window !== "undefined") {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return null;
  }

  return (
    <>
      {/* Hide default cursor globally */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Outer ring - follows slower (hidden when pointer) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorState.isPointer ? 0 : (cursorState.isHovering ? 2 : 1),
          opacity: isVisible && !cursorState.isPointer ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className={`
            w-10 h-10 rounded-full border-2 border-[#A12F63]/40
            flex items-center justify-center
            transition-colors duration-200
            ${cursorState.isHovering ? "bg-white/10" : "bg-transparent"}
          `}
        >
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-medium text-white uppercase tracking-wider"
            >
              {cursorText}
            </motion.span>
          )}
        </div>
      </motion.div>

      {/* Berry arrow cursor - visible when hovering interactive elements */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: cursorState.isPointer ? 1 : 0,
          opacity: isVisible && cursorState.isPointer ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L1 17L5.5 13L9.5 22L12.5 20.5L8.5 12L14 11L1 1Z" fill="#A12F63" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Inner dot - follows faster (hidden when pointer) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorState.isPointer ? 0 : 1,
          opacity: isVisible && !cursorState.isPointer ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-2 h-2 bg-[#A12F63] rounded-full" />
      </motion.div>
    </>
  );
}
