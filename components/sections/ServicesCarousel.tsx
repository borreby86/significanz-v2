"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";

interface Service {
  id: string;
  title: string;
  description: string;
  color: string;
  textDark?: boolean;
  href: string;
  serviceType: string;
  serviceLabel: string;
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
            return (
              <Link key={service.id} href={service.href}>
                <motion.div
                  className={`relative flex min-h-[280px] group cursor-pointer transition-opacity hover:opacity-95 overflow-hidden`}
                  style={{ backgroundColor: service.color }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Vertical service type sidebar */}
                  <div className={`w-8 flex-shrink-0 flex items-center justify-center ${service.textDark ? "bg-black/5" : "bg-white/10"}`}>
                    <span
                      className={`text-[10px] font-medium uppercase tracking-[2px] whitespace-nowrap ${service.textDark ? "text-[#34323A]/50" : "text-[#F7F6F5]/60"}`}
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {service.serviceType} - {service.serviceLabel}
                    </span>
                  </div>
                  <div className={`p-8 md:p-10 flex flex-col flex-grow ${isRightColumn ? "md:text-right" : ""}`}>
                    <h3 className={`font-[family-name:var(--font-playfair)] text-3xl md:text-4xl italic ${service.textDark ? "text-[#34323A]" : "text-[#F7F6F5]"}`}>
                      {service.title}
                    </h3>
                    <p className={`mt-4 leading-relaxed flex-grow whitespace-pre-line ${service.textDark ? "text-[#34323A]/70" : "text-[#F7F6F5]/80"}`}>
                      {service.description}
                    </p>
                    <span className={`mt-4 text-sm font-medium group-hover:underline ${service.textDark ? "text-[#A12F63]" : "text-[#F7F6F5]/90"}`}>
                      Read more →
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Strategic Advisory - centered square overlay */}
        <Link href={advisory.href} className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            className="w-40 h-40 lg:w-48 lg:h-48 relative flex overflow-hidden text-center group cursor-pointer transition-opacity hover:opacity-95"
            style={{ backgroundColor: advisory.color }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Vertical service type sidebar */}
            <div className="w-6 flex-shrink-0 flex items-center justify-center bg-black/5">
              <span
                className="text-[#34323A]/50 text-[9px] font-medium uppercase tracking-[2px] whitespace-nowrap"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                1:1
              </span>
            </div>
            <div className="flex-grow flex items-center justify-center px-3">
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-[#34323A] italic">
                  {advisory.title}
                </h3>
                <p className="mt-2 text-[#34323A]/70 text-xs lg:text-sm leading-relaxed">
                  {advisory.description}
                </p>
              </div>
            </div>
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
