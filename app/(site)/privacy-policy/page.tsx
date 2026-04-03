"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
      <Container size="default">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <span className="text-[#A12F63] font-medium text-sm uppercase tracking-wider">
              Legal
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[#34323A] tracking-tight">
              Privacy Policy
            </h1>
            <div className="mt-12 p-8 bg-[#F7F6F5] border border-[#EFEDEA]">
              <p className="text-lg text-[#34323A]/70 leading-relaxed">
                Our privacy policy is currently being updated. Please check back soon for the full text.
              </p>
              <p className="mt-4 text-[#34323A]/70">
                For any questions about your data, please contact us at{" "}
                <a
                  href="mailto:welcome@significanz.dk"
                  className="text-[#A12F63] hover:underline"
                >
                  welcome@significanz.dk
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
