"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";

type ServiceTypeCode = "1:1" | "1:More" | "1:Many";

// Match sub-page ServicePage.tsx two-tone colors
const serviceTypeMeta: Record<ServiceTypeCode, { label: string; primary: string; secondary: string }> = {
  "1:1": { label: "Individuals", primary: "#BFA27A", secondary: "#34323A" },
  "1:More": { label: "Teams", primary: "#A12F63", secondary: "#BFA27A" },
  "1:Many": { label: "Organizations", primary: "#5A1735", secondary: "#A12F63" },
};

interface Service {
  id: string;
  title: string;
  description: string;
  color: string;
  textDark?: boolean;
  href: string;
  serviceType: ServiceTypeCode;
  serviceLabel: string;
  badgeBg?: string; // override pill secondary color when default would clash with card bg
}

// Vertical two-tone badge (matches sub-page pill colors, rotated)
function VerticalBadge({ type, side }: { type: ServiceTypeCode; side: "left" | "right" }) {
  const meta = serviceTypeMeta[type];
  return (
    <div className="w-8 flex-shrink-0 flex flex-col">
      <div
        className="flex-1 flex items-center justify-center"
        style={{ backgroundColor: meta.secondary }}
      >
        <span
          className="text-white text-[10px] font-medium uppercase tracking-[2px] whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: side === "left" ? "rotate(180deg)" : "none" }}
        >
          {meta.label}
        </span>
      </div>
      <div
        className="h-14 flex items-center justify-center"
        style={{ backgroundColor: meta.primary }}
      >
        <span
          className="text-white text-[10px] font-bold uppercase tracking-[2px] whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: side === "left" ? "rotate(180deg)" : "none" }}
        >
          {type}
        </span>
      </div>
    </div>
  );
}

// Horizontal pill — gold "1:X" on white, charcoal label, used on every card
function HorizontalPillBadge({ type, align = "start" }: { type: ServiceTypeCode; align?: "start" | "end" }) {
  const meta = serviceTypeMeta[type];
  return (
    <div
      className={`inline-flex items-center mb-4 ${align === "end" ? "self-end" : "self-start"}`}
      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.25)" }}
    >
      <span
        className="inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
        style={{ backgroundColor: "#BFA27A" }}
      >
        {type}
      </span>
      <span
        className="inline-flex items-center px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white"
        style={{ backgroundColor: "#34323A" }}
      >
        {meta.label}
      </span>
    </div>
  );
}

const gridServices: Service[] = [
  {
    id: "executive-coaching",
    title: "Executive Coaching",
    description: "A confidential space to think clearly and act with confidence.\nWe work with your real situations - decisions, stakeholder conversations, dilemmas - and turn insight into practical next steps.",
    color: "#BFA27A", // Champagne Gold
    textDark: false,
    href: "/executive-coaching",
    serviceType: "1:1",
    serviceLabel: "Individuals",
    badgeBg: "#34323A", // charcoal so badge pops on gold card
  },
  {
    id: "keynotes",
    title: "Keynotes",
    description: "Inspiration with a point. Keynotes that give people energy, shared language, and a clear \"what now.\" Great for kick-offs, leadership days, and change moments.",
    color: "#34323A", // Charcoal
    textDark: false,
    href: "/keynotes",
    serviceType: "1:Many",
    serviceLabel: "Organizations",
  },
  {
    id: "team-performance",
    title: "Team Performance",
    description: "We help teams align expectations, strengthen trust, and establish clear ways of working so they can move forward together.",
    color: "#5A1735", // Deep Mulberry
    textDark: false,
    href: "/team-performance",
    serviceType: "1:More",
    serviceLabel: "Teams",
  },
  {
    id: "leadership-development",
    title: "Leadership Development",
    description: "Practical leadership development focused on real situations leaders face. We strengthen decision making, communication, and stakeholder management so leaders create clarity, direction, and sustainable performance.",
    color: "#A12F63", // Nordic Berry
    textDark: false,
    href: "/leadership-development",
    serviceType: "1:More",
    serviceLabel: "Teams",
    badgeBg: "#5A1735", // mulberry so it pops on berry card
  },
];

const advisory: Service = {
  id: "strategic-advisory",
  title: "Strategic Advisory",
  description: "Strategic sparring when you need clarity and a steady way forward.",
  color: "#EFEDEA", // Warm Mist
  href: "/strategic-advisory",
  serviceType: "1:1",
  serviceLabel: "Individuals",
};

interface ServicesCarouselProps {
  className?: string;
}

export function ServicesCarousel({ className = "" }: ServicesCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`${className}`}>
      {/* 2x2 Grid with Advisory center overlay */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridServices.map((service, index) => {
            const isRightColumn = index % 2 === 1;
            const useHorizontalPill = true;
            return (
              <Link key={service.id} href={service.href} className="block h-full">
                <motion.div
                  className={`relative flex flex-col h-full min-h-[320px] group cursor-pointer transition-opacity hover:opacity-95 overflow-hidden`}
                  style={{ backgroundColor: service.color }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`p-8 md:p-10 flex flex-col flex-grow ${isRightColumn ? "md:text-right md:items-end" : ""}`}>
                    {useHorizontalPill && <HorizontalPillBadge type={service.serviceType} align={isRightColumn ? "end" : "start"} />}
                    <h3 className={`font-[family-name:var(--font-playfair)] text-3xl md:text-4xl italic ${service.textDark ? "text-[#34323A]" : "text-[#F7F6F5]"}`}>
                      {service.title}
                    </h3>
                    <p className={`mt-4 leading-relaxed flex-grow whitespace-pre-line ${service.textDark ? "text-[#34323A]/70" : "text-[#F7F6F5]/80"}`}>
                      {service.description}
                    </p>
                    <span className={`mt-4 text-sm font-medium group-hover:underline ${isRightColumn ? "self-end" : "self-start"} ${service.textDark ? "text-[#A12F63]" : "text-[#F7F6F5]/90"}`}>
                      Read more →
                    </span>
                  </div>

                  {!useHorizontalPill && isRightColumn && (
                    <VerticalBadge type={service.serviceType} side="right" />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Strategic Advisory - centered rectangular overlay */}
        <Link href={advisory.href} className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            className="w-64 lg:w-72 px-6 py-5 text-center group cursor-pointer transition-opacity hover:opacity-95 shadow-lg"
            style={{ backgroundColor: advisory.color }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-[#34323A] italic">
              {advisory.title}
            </h3>
            <p className="mt-1 text-[#34323A]/70 text-xs lg:text-sm leading-relaxed">
              {advisory.description}
            </p>
          </motion.div>
        </Link>

        {/* Strategic Advisory - mobile (full width card) */}
        <Link href={advisory.href} className="md:hidden block">
          <motion.div
            className="mt-4 relative flex min-h-[200px] group cursor-pointer overflow-hidden"
            style={{ backgroundColor: advisory.color }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Vertical service type sidebar */}
            <div className="w-8 flex-shrink-0 flex items-center justify-center bg-black/5">
              <span
                className="text-[#34323A]/50 text-[10px] font-medium uppercase tracking-[2px] whitespace-nowrap"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {advisory.serviceType} - {advisory.serviceLabel}
              </span>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[#34323A] italic">
                {advisory.title}
              </h3>
              <p className="mt-4 text-[#34323A]/70 leading-relaxed flex-grow">
                Strategic sparring when you need clarity and a steady way forward. We help you sharpen direction, stress-test choices, and prepare the conversations that create buy-in.
              </p>
              <span className="mt-4 text-sm font-medium text-[#A12F63] group-hover:underline">
                Read more →
              </span>
            </div>
          </motion.div>
        </Link>
      </div>

    </div>
  );
}
