"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-black mb-2">
          {t.form.thankYou}
        </h3>
        <p className="text-gray-600">
          {t.form.thankYouMessage}
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-red hover:text-red-dark transition-colors text-sm"
        >
          {t.form.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-black mb-2"
        >
          {t.form.name} *
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className={cn(
            "w-full px-4 py-3 border bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent transition-all",
            errors.name ? "border-red" : "border-gray-300"
          )}
          placeholder={t.form.namePlaceholder}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red">{t.form.nameError}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-black mb-2"
        >
          {t.form.email} *
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={cn(
            "w-full px-4 py-3 border bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent transition-all",
            errors.email ? "border-red" : "border-gray-300"
          )}
          placeholder={t.form.emailPlaceholder}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red">{t.form.emailError}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-black mb-2"
        >
          {t.form.company}
        </label>
        <input
          type="text"
          id="company"
          {...register("company")}
          className="w-full px-4 py-3 border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent transition-all"
          placeholder={t.form.companyPlaceholder}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-black mb-2"
        >
          {t.form.message} *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className={cn(
            "w-full px-4 py-3 border bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent transition-all resize-none",
            errors.message ? "border-red" : "border-gray-300"
          )}
          placeholder={t.form.messagePlaceholder}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red">{t.form.messageError}</p>
        )}
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red text-red text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? t.form.submitting : t.form.submit}
      </Button>
    </form>
  );
}
