"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { NavSubItem } from "@/lib/navigation/config";
import { TranslationKeys } from "@/lib/i18n/types";

interface NavDropdownProps {
  label: string;
  href?: string;
  items: NavSubItem[];
  scrolled: boolean;
  t: TranslationKeys;
}

export function NavDropdown({ label, href, items, scrolled, t }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main nav item */}
      <button
        className="text-sm transition-colors duration-300 flex items-center gap-1.5 text-gray-600 hover:text-[#A12F63]"
      >
        {label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-3 py-2 min-w-[200px] bg-white shadow-lg border border-gray-100"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <Link
                  href={item.href}
                  className="block px-5 py-2.5 text-sm text-gray-600 hover:text-[#A12F63] hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
