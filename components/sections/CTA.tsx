"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { useTranslation } from "@/lib/i18n";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTA({
  title,
  subtitle,
  buttonText,
  buttonHref = "/contact",
}: CTAProps) {
  const { t } = useTranslation();
  const displayTitle = title ?? t.cta.title;
  const displaySubtitle = subtitle ?? t.cta.subtitle;
  const displayButtonText = buttonText ?? t.cta.buttonText;
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <Container size="default">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl tracking-tight">
              {displayTitle}
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
              {displaySubtitle}
            </p>
            <div className="mt-10">
              <Link href={buttonHref}>
                <Button variant="accent" size="lg">
                  {displayButtonText}
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
