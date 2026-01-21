"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/ui/Container";
import { useTranslation } from "@/lib/i18n";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";

// Hero Section
function ServicesHero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="min-h-[60vh] flex items-center pt-20 bg-[#F7F6F5]">
      <Container size="wide">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#A12F63] text-sm font-medium uppercase tracking-wider">
            What we offer
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-[#34323A] italic">
            Our Services
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-[#34323A]/80 leading-relaxed max-w-3xl">
            We offer five distinct services to support leaders and organizations in creating meaningful impact.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

// Delivery Model Card
interface DeliveryCardProps {
  scale: string;
  title: string;
  description: string;
  services: string[];
  index: number;
  href?: string;
}

function DeliveryCard({ scale, title, description, services, index, href }: DeliveryCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const colors = [
    { bg: "bg-[#A12F63]", text: "text-white", accent: "text-[#BFA27A]" },
    { bg: "bg-white", text: "text-[#34323A]", accent: "text-[#A12F63]" },
    { bg: "bg-[#34323A]", text: "text-white", accent: "text-[#BFA27A]" },
    { bg: "bg-[#EFEDEA]", text: "text-[#34323A]", accent: "text-[#A12F63]" },
  ];

  const color = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${color.bg} p-8 md:p-12 ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
    >
      {/* Scale indicator */}
      <span className={`${color.accent} text-sm font-medium uppercase tracking-wider`}>
        {scale}
      </span>

      {/* Title */}
      <h3 className={`mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl ${color.text}`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`mt-4 text-lg ${color.text} opacity-80 leading-relaxed`}>
        {description}
      </p>

      {/* Services list */}
      {services.length > 0 && (
        <ul className="mt-8 space-y-3">
          {services.map((service, i) => (
            <li key={i} className={`flex items-start gap-3 ${color.text} opacity-70`}>
              <span className={`${color.accent} mt-1`}>•</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Optional link */}
      {href && (
        <Link
          href={href}
          className={`mt-8 inline-flex items-center gap-2 ${color.accent} hover:opacity-80 transition-opacity`}
        >
          Learn more
          <span>→</span>
        </Link>
      )}
    </motion.div>
  );
}

// Delivery Models Section
function DeliveryModels() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const models = [
    {
      ...t.collaboratePage.individuals,
      href: "/executive-coaching",
    },
    {
      ...t.collaboratePage.teamsGroups,
    },
    {
      ...t.collaboratePage.organizations,
      href: "/keynotes",
    },
    {
      ...t.collaboratePage.coherentEnablement,
      services: [],
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <Container size="wide">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#34323A] italic">
            Choose your format
          </h2>
        </motion.div>

        {/* Grid of delivery models */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((model, index) => (
            <DeliveryCard
              key={model.scale}
              scale={model.scale}
              title={model.title}
              description={model.description}
              services={'services' in model ? model.services : []}
              index={index}
              href={'href' in model ? model.href : undefined}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

// CTA Section
function CollaborateCTA() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#34323A]">
      <Container size="wide">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white italic">
            {t.collaboratePage.ctaTitle}
          </h2>
          <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
            Let&apos;s explore how we can support your leadership journey.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-white text-[#34323A] hover:bg-[#F7F6F5] transition-colors font-medium"
          >
            {t.collaboratePage.ctaButton}
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

// Services Section with Carousel
function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <Container size="wide">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#34323A] italic text-center">
            Explore our offerings
          </h2>
        </motion.div>

        <ServicesCarousel />
      </Container>
    </section>
  );
}

export default function CollaboratePage() {
  return (
    <>
      <ServicesHero />
      <ServicesSection />
      {/* DeliveryModels hidden per client request */}
      <CollaborateCTA />
    </>
  );
}
