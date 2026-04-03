"use client";

import { useContactForm } from "@/lib/contact-form-context";

interface ContactButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function ContactButton({ children, className }: ContactButtonProps) {
  const { open } = useContactForm();

  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
}
