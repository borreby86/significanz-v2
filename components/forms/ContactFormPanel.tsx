"use client";

import { useState } from "react";

const services = [
  "Executive Coaching",
  "Keynotes",
  "Team Performance",
  "Leadership Development",
  "Advisory",
];

interface ContactFormPanelProps {
  /** Solid berry background (popup) or transparent so parent supplies bg */
  variant?: "solid" | "embedded";
  title?: string;
  subtitle?: string;
}

export function ContactFormPanel({
  variant = "solid",
  title = "Get in touch",
  subtitle = "We'd love to hear from you.",
}: ContactFormPanelProps) {
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

  const wrapperClass =
    variant === "solid"
      ? "bg-[#A12F63]/80 backdrop-blur-lg shadow-2xl"
      : "bg-[#A12F63] w-full h-full min-h-full justify-start";

  return (
    <div className={`${wrapperClass} flex flex-col`}>
      <div className={`px-8 md:px-12 ${variant === "embedded" ? "pt-28 lg:pt-36" : "pt-12"} pb-6`}>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white">
          {title}
        </h2>
        <p className="mt-3 text-base text-white/60">{subtitle}</p>
      </div>

      {status === "success" ? (
        <div className="px-8 md:px-10 pb-10 text-center">
          <div className="py-8">
            <div className="w-16 h-16 rounded-full bg-[#BFA27A]/30 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#BFA27A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-white text-lg font-medium mb-2">Thank you!</h4>
            <p className="text-white/60 text-sm">We&apos;ll get back to you soon.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-[#BFA27A] hover:text-[#BFA27A]/80 transition-colors"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="px-8 md:px-10 pb-10 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
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
                className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 placeholder:text-white/40 focus:border-[#BFA27A] outline-none focus:ring-1 focus:ring-[#BFA27A] transition-colors"
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
                className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 placeholder:text-white/40 focus:border-[#BFA27A] outline-none focus:ring-1 focus:ring-[#BFA27A] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-medium text-[#BFA27A] uppercase tracking-[0.15em] mb-2">
              Company
            </label>
            <input
              type="text"
              value={formState.company}
              onChange={(e) => setFormState((s) => ({ ...s, company: e.target.value }))}
              placeholder="Your company"
              className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 placeholder:text-white/40 focus:border-[#BFA27A] outline-none focus:ring-1 focus:ring-[#BFA27A] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] font-medium text-[#BFA27A] uppercase tracking-[0.15em] mb-2">
              Service
            </label>
            <select
              value={formState.service}
              onChange={(e) => setFormState((s) => ({ ...s, service: e.target.value }))}
              className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 focus:border-[#BFA27A] outline-none focus:ring-1 focus:ring-[#BFA27A] transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#A12F63]">Select a service (optional)</option>
              {services.map((service) => (
                <option key={service} value={service} className="bg-[#A12F63]">
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-medium text-[#BFA27A] uppercase tracking-[0.15em] mb-2">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
              placeholder="Tell us about your challenges and goals..."
              className="w-full bg-transparent border-b border-white/30 text-white text-sm py-2 placeholder:text-white/40 focus:border-[#BFA27A] outline-none focus:ring-1 focus:ring-[#BFA27A] transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-red-200 text-sm">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 bg-[#BFA27A] text-white font-medium text-sm hover:bg-[#BFA27A]/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>
        </form>
      )}
    </div>
  );
}
