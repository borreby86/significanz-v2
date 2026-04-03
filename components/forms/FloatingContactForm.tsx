"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useContactForm } from "@/lib/contact-form-context";

const services = [
  "Executive Coaching",
  "Keynotes",
  "Team Performance",
  "Leadership Development",
  "Advisory",
];

export function FloatingContactForm() {
  const { isOpen, toggle, close } = useContactForm();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company || undefined,
          message: formState.service
            ? `[Service: ${formState.service}]\n\n${formState.message}`
            : formState.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
  };

  return (
    <>
      {/* Floating bubble button */}
      <motion.button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#A12F63] text-white shadow-lg hover:bg-[#8a2854] transition-colors flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open contact form"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Form panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            <motion.div
              className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-[420px] bg-[#1a1a1a] shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Header */}
              <div className="px-8 pt-8 pb-4">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
                  Get in touch
                </h3>
                <p className="mt-1 text-sm text-white/50">
                  We&apos;d love to hear from you.
                </p>
              </div>

              {status === "success" ? (
                <div className="px-8 pb-8 text-center">
                  <div className="py-8">
                    <div className="w-16 h-16 rounded-full bg-[#A12F63]/20 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#A12F63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-white text-lg font-medium mb-2">Thank you!</h4>
                    <p className="text-white/60 text-sm">We&apos;ll get back to you soon.</p>
                    <button
                      onClick={handleReset}
                      className="mt-6 text-sm text-[#A12F63] hover:text-[#BFA27A] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-5">
                  {/* Name & Email side by side */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-medium text-white/40 uppercase tracking-[0.15em] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full bg-transparent border-b border-white/20 text-white text-sm py-2 placeholder:text-white/30 focus:border-[#A12F63] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-white/40 uppercase tracking-[0.15em] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="w-full bg-transparent border-b border-white/20 text-white text-sm py-2 placeholder:text-white/30 focus:border-[#A12F63] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[10px] font-medium text-white/40 uppercase tracking-[0.15em] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState((s) => ({ ...s, company: e.target.value }))}
                      placeholder="Your company"
                      className="w-full bg-transparent border-b border-white/20 text-white text-sm py-2 placeholder:text-white/30 focus:border-[#A12F63] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label className="block text-[10px] font-medium text-white/40 uppercase tracking-[0.15em] mb-2">
                      Service
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState((s) => ({ ...s, service: e.target.value }))}
                      className="w-full bg-transparent border-b border-white/20 text-white text-sm py-2 focus:border-[#A12F63] focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#1a1a1a]">Select a service (optional)</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-[#1a1a1a]">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-medium text-white/40 uppercase tracking-[0.15em] mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      placeholder="Tell us about your challenges and goals..."
                      className="w-full bg-transparent border-b border-white/20 text-white text-sm py-2 placeholder:text-white/30 focus:border-[#A12F63] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 bg-[#A12F63] text-white font-medium text-sm hover:bg-[#8a2854] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
