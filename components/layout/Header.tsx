"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { NavDropdown } from "./NavDropdown";
import { MobileNavItem } from "./MobileNavItem";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "@/lib/i18n";
import { navigationConfig } from "@/lib/navigation/config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        (scrolled || !isHomepage) ? "bg-white/90 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <Container size="full">
        <nav className="relative flex items-center justify-between h-20">
          {/* Logo - switches from full logo to icon on scroll */}
          <Link href="/" className="relative flex items-center w-[140px] sm:w-[170px] md:w-[210px]">
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
                    className="h-10 sm:h-12 md:h-14 w-auto"
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
                    className="h-10 sm:h-12 md:h-14 w-auto"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Navigation */}
          <ul className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10">
            {navigationConfig.map((item) => (
              <li key={item.key}>
                {item.items ? (
                  <NavDropdown
                    label={t.nav[item.key as keyof typeof t.nav]}
                    href={item.href}
                    items={item.items}
                    scrolled={scrolled}
                    t={t}
                  />
                ) : (
                  <Link
                    href={item.href || '#'}
                    className={cn(
                      "text-base transition-colors duration-300 hover:text-[#A12F63]",
                      scrolled ? "text-gray-600" : "text-white"
                    )}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Spacer for layout balance */}
          <div className="hidden md:flex items-center gap-6 w-[100px]" />

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div
              className={cn(
                "w-6 h-0.5 transition-all duration-300",
                mobileMenuOpen ? "bg-black rotate-45 translate-y-1" : (scrolled || !isHomepage) ? "bg-black" : "bg-white"
              )}
            />
            <div
              className={cn(
                "w-6 h-0.5 mt-1.5 transition-all duration-300",
                mobileMenuOpen ? "bg-black -rotate-45 -translate-y-0.5" : (scrolled || !isHomepage) ? "bg-black" : "bg-white"
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
              className="fixed top-0 right-0 h-screen w-72 sm:w-80 max-w-[90vw] bg-white z-40 md:hidden shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col pt-24 px-6 sm:px-8 gap-5 sm:gap-6 pb-8">
                {navigationConfig.map((item, index) => (
                  <MobileNavItem
                    key={item.key}
                    item={item}
                    t={t}
                    index={index}
                    onClose={() => setMobileMenuOpen(false)}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
