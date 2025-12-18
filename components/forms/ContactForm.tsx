"use client";

import { useTranslation } from "@/lib/i18n";

export function ContactForm() {
  const { t } = useTranslation();

  // Temporary out of service message
  return (
    <div className="text-center py-12 px-6 bg-gray-50 border border-gray-200">
      <div className="w-16 h-16 bg-[#A12F63]/10 rounded-full mx-auto mb-6 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-[#A12F63]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-medium text-black mb-3">
        Contact form temporarily unavailable
      </h3>
      <p className="text-gray-600 mb-6">
        Please send us an email directly at:
      </p>
      <a
        href="mailto:welcome@significanz.dk"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#A12F63] text-white font-medium hover:bg-[#8a2854] transition-colors"
      >
        welcome@significanz.dk
      </a>
    </div>
  );
}
