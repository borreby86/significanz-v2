"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { PyramidModel } from "@/components/diagrams/PyramidModel";
import { PurposeModel } from "@/components/diagrams/PurposeModel";

export default function ModelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F7F6F5]">
        <Container size="default">
          <FadeIn>
            <div className="text-center">
              <span className="text-[#A12F63] font-medium text-sm uppercase tracking-[0.2em]">
                Our Frameworks
              </span>
              <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[#34323A] tracking-tight italic">
                Visual Models
              </h1>
              <p className="mt-6 text-lg text-[#34323A]/70 max-w-2xl mx-auto">
                Our frameworks visualized. These models guide our approach to leadership development and meaningful impact.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Pyramid/Triangle Model Section */}
      <section className="py-24 md:py-32 bg-white">
        <Container size="wide">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#A12F63] font-medium text-sm uppercase tracking-[0.2em]">
                The Mastery Framework
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#34323A] tracking-tight">
                Awareness • Leverage • Mastery
              </h2>
              <p className="mt-6 text-lg text-[#34323A]/70 max-w-2xl mx-auto">
                True mastery emerges when deep self-awareness combines with strategic leverage to create lasting, transformative impact.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-2xl mx-auto">
              <PyramidModel />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Purpose Model Section */}
      <section className="py-24 md:py-32 bg-[#F7F6F5]">
        <Container size="wide">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#A12F63] font-medium text-sm uppercase tracking-[0.2em]">
                Integrated Self-Leadership
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#34323A] tracking-tight">
                The 4P's of Purpose
              </h2>
              <p className="mt-6 text-lg text-[#34323A]/70 max-w-2xl mx-auto">
                Self-leadership is the foundation of meaningful impact. Four dimensions that integrate around your core purpose.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <PurposeModel
              interactive={true}
              showDecorations={true}
              size="default"
            />
          </FadeIn>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#34323A]">
        <Container size="default">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white italic">
                Ready to explore these frameworks?
              </h2>
              <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
                Let's discuss how these models can guide your leadership development journey.
              </p>
              <a
                href="mailto:welcome@significanz.dk"
                className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-white text-[#34323A] font-medium hover:bg-[#F7F6F5] transition-colors"
              >
                Get in touch
                <span className="text-xl">→</span>
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
