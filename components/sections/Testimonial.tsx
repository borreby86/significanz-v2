"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence, useInView } from "motion/react";
import { useTranslation } from "@/lib/i18n";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

interface TestimonialProps {
  testimonials?: TestimonialItem[];
  autoPlay?: boolean;
  interval?: number;
}

export function Testimonial({
  testimonials,
  autoPlay = true,
  interval = 6000,
}: TestimonialProps) {
  const { t } = useTranslation();

  // Use translated testimonials if none provided
  const displayTestimonials = testimonials ?? t.testimonials.items.map((item, index) => ({
    ...item,
    image: `/images/testimonials/client-${index + 1}.jpg`,
  }));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, displayTestimonials.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-warm-gradient">
      {/* Warm decorative blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-peach rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-cream rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.4 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Large decorative quote marks - increased visibility */}
      <motion.div
        className="absolute top-16 left-8 md:left-16 text-[200px] md:text-[300px] font-serif text-gray-200 leading-none pointer-events-none select-none"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        &ldquo;
      </motion.div>

      <Container size="default" className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Testimonial content */}
          <div className="min-h-[300px] md:min-h-[250px] relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="text-center absolute inset-0"
              >
                {/* Quote text */}
                <motion.p
                  className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  &ldquo;{displayTestimonials[currentIndex].quote}&rdquo;
                </motion.p>

                {/* Author info with photo */}
                <motion.footer
                  className="mt-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center justify-center gap-4">
                    {/* Client photo */}
                    <motion.div
                      className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-red/20"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <Image
                        src={displayTestimonials[currentIndex].image}
                        alt={displayTestimonials[currentIndex].author}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </motion.div>
                    <div className="text-left">
                      <p className="text-black font-medium">
                        {displayTestimonials[currentIndex].author}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {displayTestimonials[currentIndex].role},{" "}
                        {displayTestimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          {displayTestimonials.length > 1 && (
            <motion.div
              className="flex justify-center gap-3 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {displayTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group relative p-2"
                  aria-label={`Go to testimonial ${index + 1}`}
                  data-cursor="pointer"
                >
                  <span
                    className={`
                      block w-2 h-2 rounded-full transition-all duration-300
                      ${index === currentIndex ? "bg-red scale-125" : "bg-gray-300 group-hover:bg-gray-400"}
                    `}
                  />
                  {/* Active indicator ring */}
                  {index === currentIndex && (
                    <motion.span
                      className="absolute inset-0 m-auto w-6 h-6 rounded-full border border-red/30"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      layoutId="testimonial-indicator"
                    />
                  )}
                </button>
              ))}
            </motion.div>
          )}

          {/* Progress bar */}
          {autoPlay && displayTestimonials.length > 1 && (
            <motion.div
              className="mt-8 max-w-xs mx-auto h-0.5 bg-gray-200 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                className="h-full bg-red origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: interval / 1000, ease: "linear" }}
                key={currentIndex}
              />
            </motion.div>
          )}
        </div>
      </Container>

      {/* Closing quote mark - increased visibility */}
      <motion.div
        className="absolute bottom-16 right-8 md:right-16 text-[200px] md:text-[300px] font-serif text-gray-200 leading-none pointer-events-none select-none rotate-180"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      >
        &ldquo;
      </motion.div>
    </section>
  );
}
