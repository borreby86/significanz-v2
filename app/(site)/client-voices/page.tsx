"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { useTranslation } from "@/lib/i18n";

export default function ClientVoicesPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container size="default">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-black tracking-tight text-center">
              {t.clientVoicesPage.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 text-center max-w-2xl mx-auto">
              {t.clientVoicesPage.impactDescription}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="pb-24 md:pb-32">
        <Container size="wide">
          <div className="space-y-16 md:space-y-24">
            {t.clientVoicesPage.testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.author} delay={index * 0.1}>
                <blockquote
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                    index % 2 === 1 ? "lg:text-right" : ""
                  }`}
                >
                  <div
                    className={`lg:col-span-8 ${
                      index % 2 === 1 ? "lg:col-start-5" : ""
                    }`}
                  >
                    <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl lg:text-3xl text-black leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div
                    className={`lg:col-span-4 ${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div
                      className={`border-t border-gray-200 pt-6 ${
                        index % 2 === 1 ? "lg:border-t-0 lg:border-b lg:pt-0 lg:pb-6" : ""
                      }`}
                    >
                      <p className="font-medium text-black">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        {testimonial.role}
                      </p>
                      <p className="text-red text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-black text-white">
        <Container size="default">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl tracking-tight">
                {t.clientVoicesPage.ctaTitle}
              </h2>
              <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
                {t.clientVoicesPage.ctaDescription}
              </p>
              <div className="mt-10">
                <a href="mailto:contact@significanz.dk">
                  <Button variant="accent" size="lg">
                    {t.clientVoicesPage.ctaButton}
                  </Button>
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
