"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "@/lib/i18n";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navigation = [
    { name: t.nav.about, href: "/about" },
    { name: t.nav.collaborate, href: "/collaborate" },
    { name: t.nav.gallery, href: "/gallery" },
    { name: t.nav.clientVoices, href: "/client-voices" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/90 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <Container size="full">
        <nav className="relative flex items-center justify-between h-20">
          {/* Logo - switches from full logo to icon on scroll */}
          <Link href="/" className="relative flex items-center w-[210px]">
            <AnimatePresence mode="popLayout">
              {!scrolled ? (
                <motion.div
                  key="full-logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/logo/significanz navnetræk - warm charcoal.png"
                    alt="Significanz"
                    width={300}
                    height={80}
                    className="h-14 w-auto"
                    priority
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="icon-logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/logo/Icon significanz BLACK.png"
                    alt="Significanz"
                    width={56}
                    height={56}
                    className="h-14 w-auto"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Navigation */}
          <ul className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors duration-300",
                    scrolled
                      ? "text-gray-600 hover:text-black"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <LanguageToggle scrolled={scrolled} />
            <Link
              href="/contact"
              className={cn(
                "text-sm transition-colors duration-300",
                scrolled
                  ? "text-red hover:text-red-dark"
                  : "text-white hover:text-[#BFA27A]"
              )}
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div
              className={cn(
                "w-6 h-0.5 transition-all duration-300",
                mobileMenuOpen ? "bg-black rotate-45 translate-y-1" : scrolled ? "bg-black" : "bg-white"
              )}
            />
            <div
              className={cn(
                "w-6 h-0.5 mt-1.5 transition-all duration-300",
                mobileMenuOpen ? "bg-black -rotate-45 -translate-y-0.5" : scrolled ? "bg-black" : "bg-white"
              )}
            />
          </button>
        </nav>
      </Container>

      {/* Mobile Menu - Slide from right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Side panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-40 md:hidden shadow-2xl"
            >
              <div className="flex flex-col pt-24 px-8 gap-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-2xl font-[family-name:var(--font-playfair)] text-[#34323A] hover:text-[#A12F63] transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className="mt-4 pt-6 border-t border-gray-200"
                >
                  <Link
                    href="/contact"
                    className="text-xl text-[#A12F63] hover:text-[#5A1735] transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.contact}
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navigation.length + 1) * 0.1 }}
                  className="mt-4"
                >
                  <LanguageToggle />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
