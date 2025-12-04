"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedLink({ href, children, className }: AnimatedLinkProps) {
  return (
    <Link href={href} className={cn("relative inline-block group", className)}>
      <span>{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-red"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </Link>
  );
}
