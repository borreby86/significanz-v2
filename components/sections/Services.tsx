"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion, useInView } from "motion/react";
import { useTranslation } from "@/lib/i18n";
import { SplitText } from "@/components/animations/SplitText";

export function Services() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  const services = [
    {
      title: t.services.items.meaningfulAction.title,
      description: t.services.items.meaningfulAction.description,
      href: "/4d",
      number: "01",
      image: "/images/services/executive.jpg",
    },
    {
      title: t.services.items.actAbility.title,
      description: t.services.items.actAbility.description,
      href: "/4d",
      number: "02",
      image: "/images/services/outdoor.jpg",
    },
    {
      title: t.services.items.executiveCoaching.title,
      description: t.services.items.executiveCoaching.description,
      href: "/4d",
      number: "03",
      image: "/images/services/team.jpg",
    },
    {
      title: t.services.items.leadershipDevelopment.title,
      description: t.services.items.leadershipDevelopment.description,
      href: "/4d",
      number: "04",
      image: "/images/services/leadership.jpg",
    },
    {
      title: t.services.items.keynotes.title,
      description: t.services.items.keynotes.description,
      href: "/4d",
      number: "05",
      image: "/images/services/culture.jpg",
    },
    {
      title: t.services.items.teamTransformation.title,
      description: t.services.items.teamTransformation.description,
      href: "/4d",
      number: "06",
      image: "/images/services/executive.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-warm-gray">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      {/* Warm gradient decoration - top left */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-cream rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1 }}
      />

      {/* Warm gradient decoration - bottom right */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-peach rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.4 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Grain texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red font-medium text-sm uppercase tracking-wider">
              Services
            </span>
          </motion.div>

          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
            <SplitText splitType="words" delay={0.2} staggerDelay={0.08}>
              {t.services.title}
            </SplitText>
          </h2>

          <motion.p
            className="mt-6 text-lg text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Link href={service.href} className="group block h-full" data-cursor="view">
                <motion.article
                  className="relative bg-white border border-warm-gray-dark h-full overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {/* Number badge */}
                    <span className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center text-sm font-medium text-black">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl text-black group-hover:text-red transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Arrow link */}
                    <div className="mt-4 flex items-center gap-2 text-gray-400 group-hover:text-red transition-colors duration-300">
                      <span className="text-sm">{t.services.readMore}</span>
                      <motion.span
                        className="inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        &rarr;
                      </motion.span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
