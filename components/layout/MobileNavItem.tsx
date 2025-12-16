"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { NavItem } from "@/lib/navigation/config";
import { TranslationKeys } from "@/lib/i18n/types";

interface MobileNavItemProps {
  item: NavItem;
  t: TranslationKeys;
  index: number;
  onClose: () => void;
}

export function MobileNavItem({ item, t, index, onClose }: MobileNavItemProps) {
  const [expanded, setExpanded] = useState(false);
  const hasSubItems = item.items && item.items.length > 0;
  const label = t.nav[item.key as keyof typeof t.nav];

  if (!hasSubItems) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Link
          href={item.href || '#'}
          className="text-2xl font-[family-name:var(--font-playfair)] text-[#34323A] hover:text-[#A12F63] transition-colors block"
          onClick={onClose}
        >
          {label}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Main item with link and dropdown toggle */}
      <div className="flex items-center justify-between">
        <Link
          href={item.href || '#'}
          className="text-2xl font-[family-name:var(--font-playfair)] text-[#34323A] hover:text-[#A12F63] transition-colors"
          onClick={onClose}
        >
          {label}
        </Link>
        <button
          className="p-2 text-[#34323A] hover:text-[#A12F63] transition-colors"
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle submenu"
        >
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-4 pl-4 space-y-3">
              {item.items!.map((subItem, subIndex) => (
                <motion.div
                  key={subItem.key}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: subIndex * 0.05 }}
                >
                  <Link
                    href={subItem.href}
                    className="text-lg text-gray-600 hover:text-[#A12F63] transition-colors block"
                    onClick={onClose}
                  >
                    {t.nav[subItem.key as keyof typeof t.nav]}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
