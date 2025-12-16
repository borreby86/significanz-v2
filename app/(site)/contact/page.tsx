"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion, useInView } from "motion/react";
import { useTranslation } from "@/lib/i18n";

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    description: "Anytime",
    value: "welcome@significanz.dk",
    href: "mailto:welcome@significanz.dk",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    title: "LinkedIn",
    description: "Connect with Stinne",
    value: "Stinne Madsen",
    href: "https://www.linkedin.com/in/stinne-madsen/",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    description: "Mon-Fri, 9-17",
    value: "+45 3175 3125",
    href: "tel:+4531753125",
  },
];

export default function ContactPage() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <>
      {/* Hero - Full Width with Background Image */}
      <section
        ref={heroRef}
        className="min-h-screen relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero new.jpg"
            alt="Copenhagen office environment"
            fill
            className="object-cover grayscale"
            priority
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
        </div>

        {/* Content */}
        <Container size="wide" className="relative z-10 h-full">
          <div className="min-h-screen flex items-center pt-32 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
              {/* Left: Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-[#A12F63] font-medium text-sm uppercase tracking-wider">
                    Contact
                  </span>
                </motion.div>

                <motion.h1
                  className="mt-8 font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.1] italic"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Get in touch
                </motion.h1>

                <motion.p
                  className="mt-8 text-xl md:text-2xl text-white/80 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Ready to transform your leadership journey? Let's start a conversation.
                </motion.p>
              </div>

              {/* Right: Contact Form */}
              <motion.div
                className="lg:ml-auto w-full max-w-md"
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#34323A] mb-6">
                    Send us a message
                  </h2>

                  {submitStatus === "success" ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[#34323A] font-medium">Thank you!</p>
                      <p className="text-gray-600 mt-2">We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-[#F7F6F5] border border-gray-200 text-[#34323A] placeholder-gray-400 focus:outline-none focus:border-[#A12F63] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-[#F7F6F5] border border-gray-200 text-[#34323A] placeholder-gray-400 focus:outline-none focus:border-[#A12F63] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Company (optional)"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F7F6F5] border border-gray-200 text-[#34323A] placeholder-gray-400 focus:outline-none focus:border-[#A12F63] transition-colors"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Your message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-[#F7F6F5] border border-gray-200 text-[#34323A] placeholder-gray-400 focus:outline-none focus:border-[#A12F63] transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 bg-[#A12F63] text-white font-medium hover:bg-[#8a2854] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 md:py-28 bg-[#F7F6F5]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Contact Methods */}
            <div>
              <FadeIn>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[#A12F63]" />
                  <span className="text-[#A12F63] text-sm font-medium uppercase tracking-[0.2em]">
                    Reach out
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#34323A] italic mb-4">
                  Let's connect
                </h2>
                <p className="text-lg text-[#34323A]/70 mb-10 max-w-md">
                  We'd love to hear from you. Choose your preferred way to get in touch.
                </p>
              </FadeIn>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <FadeIn key={method.title} delay={0.1 * index}>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-4 p-5 bg-white border border-[#34323A]/10 hover:border-[#A12F63] transition-all duration-300"
                      >
                        <span className="text-[#A12F63] group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium text-[#34323A]">{method.title}</p>
                          <p className="text-sm text-[#34323A]/50">{method.description}</p>
                        </div>
                        <span className="text-[#A12F63] font-medium">
                          {method.value}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-5 bg-white border border-[#34323A]/10">
                        <span className="text-[#34323A]/40">
                          {method.icon}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium text-[#34323A]">{method.title}</p>
                          <p className="text-sm text-[#34323A]/50">{method.description}</p>
                        </div>
                        <span className="text-[#34323A]/70">
                          {method.value}
                        </span>
                      </div>
                    )}
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Right: Logo Icon */}
            <FadeIn delay={0.3}>
              <div className="flex items-center justify-center">
                <motion.div
                  className="relative w-64 h-64 md:w-80 md:h-80"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Animated circles around logo */}
                  <motion.div
                    className="absolute inset-0 border border-[#A12F63]/20 rounded-full"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-6 border border-[#34323A]/10 rounded-full"
                    animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />

                  {/* Logo Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/images/logo/Icon significanz BLACK.png"
                      alt="Significanz"
                      width={160}
                      height={160}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain"
                    />
                  </div>

                  {/* Floating dots */}
                  <motion.div
                    className="absolute top-4 left-1/2 w-2 h-2 bg-[#A12F63] rounded-full"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-[#34323A] rounded-full"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#34323A]">
        <Container size="default">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white italic">
                Ready to start your journey?
              </h2>
              <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
                Discover how we can help you and your organization reach new heights.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#34323A] font-medium hover:bg-[#F7F6F5] transition-colors"
                >
                  Learn about us
                  <span className="text-xl">→</span>
                </Link>
                <Link
                  href="/4d"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Explore our framework
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
