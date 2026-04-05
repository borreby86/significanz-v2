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
      {/* Floating button - round circle with speech bubble icon */}
      <motion.button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#A12F63] text-white shadow-lg hover:bg-[#8a2854] transition-colors flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open contact form"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.span>
          ) : (
            <motion.span
              key="open"
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Form panel - slides in from right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[480px] bg-[#A12F63]/75 backdrop-blur-lg shadow-2xl overflow-y-auto flex flex-col justify-center"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Close button inside panel */}
              <button
                onClick={close}
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="px-10 pt-10 pb-6">
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white">
                  Get in touch
                </h2>
                <p className="mt-3 text-base text-white/60">
                  We&apos;d love to hear from you.
                </p>
              </div>

              {status === "success" ? (
                <div className="px-10 pb-10 text-center">
                  <div className="py-8">
                    <div className="w-16 h-16 rounded-full bg-[#BFA27A]/30 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#BFA27A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-white text-lg font-medium mb-2">Thank you!</h4>
                    <p className="text-white/60 text-sm">We&apos;ll get back to you soon.</p>
                    <button
                      onClick={handleReset}
                      className="mt-6 text-sm text-[#BFA27A] hover:text-[#BFA27A]/80 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-10 pb-10 space-y-5">
                  {/* Name & Email side by side */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-medium text-[#BFA27A] uppercase tracking-[0.15em] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 placeholder:text-white/40 focus:border-[#BFA27A] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-[#BFA27A] uppercase tracking-[0.15em] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 placeholder:text-white/40 focus:border-[#BFA27A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[10px] font-medium text-[#BFA27A] uppercase tracking-[0.15em] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState((s) => ({ ...s, company: e.target.value }))}
                      placeholder="Your company"
                      className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 placeholder:text-white/40 focus:border-[#BFA27A] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label className="block text-[10px] font-medium text-[#BFA27A] uppercase tracking-[0.15em] mb-2">
                      Service
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState((s) => ({ ...s, service: e.target.value }))}
                      className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 focus:border-[#BFA27A] focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#A12F63]">Select a service (optional)</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-[#A12F63]">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-medium text-[#BFA27A] uppercase tracking-[0.15em] mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      placeholder="Tell us about your challenges and goals..."
                      className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 placeholder:text-white/40 focus:border-[#BFA27A] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 bg-[#BFA27A] text-white font-medium text-sm hover:bg-[#BFA27A]/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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
