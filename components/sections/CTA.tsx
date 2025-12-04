"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTA({
  title = "Klar til at tage næste skridt?",
  subtitle = "Book en uforpligtende samtale og lad os tale om dine mål og hvordan coaching kan hjælpe dig.",
  buttonText = "Book en samtale",
  buttonHref = "/book",
}: CTAProps) {
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <Container size="default">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl tracking-tight">
              {title}
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
              {subtitle}
            </p>
            <div className="mt-10">
              <Link href={buttonHref}>
                <Button variant="accent" size="lg">
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
