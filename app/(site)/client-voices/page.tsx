import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Client Voices",
  description: "What our clients say about working with Significanz.",
};

const testimonials = [
  {
    quote:
      "Stinne is a gifted facilitator of life-changing conversations. She has a unique balance between empathy and results-orientation — creating a psychologically safe and energetic space that transforms both thinking and behaviour.",
    author: "Christina Juel Hegaard",
    role: "Global Head of Change Leadership & D&I",
    company: "Arla",
  },
  {
    quote:
      "In working with Stinne, I've discovered how she combines professional insight, business understanding, and curiosity for technology. She has helped move me and my department — both humanly and professionally. It's always a pleasure being in her presence: good energy, humour, and high competence.",
    author: "Michael Warrer",
    role: "CIO",
    company: "NRGi",
  },
  {
    quote:
      "Stinne Enemærke Madsen draws on a vast background in psychology, psychotherapy, leadership, HR, and tech. She weaves these perspectives into forward-looking coaching that puts personal and professional development at the centre. You feel in competent hands.",
    author: "Katja Iversen",
    role: "CEO",
    company: "UN Live",
  },
  {
    quote:
      "We have worked with Significanz through several long-term programmes. Stinne's coaching has been precise, efficient, and has truly moved us forward as an organisation. I can only give Significanz my strongest recommendation.",
    author: "Thomas Højlt",
    role: "Deputy Director",
    company: "City of Copenhagen",
  },
];

export default function ClientVoicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container size="default">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-black tracking-tight text-center">
              Client Voices
            </h1>
            <p className="mt-6 text-lg text-gray-600 text-center max-w-2xl mx-auto">
              The impact of our work, in the words of those who have
              experienced it.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="pb-24 md:pb-32">
        <Container size="wide">
          <div className="space-y-16 md:space-y-24">
            {testimonials.map((testimonial, index) => (
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
                Ready to write your story?
              </h2>
              <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
                Let&apos;s explore how Significanz can create meaningful impact
                for you and your organization.
              </p>
              <div className="mt-10">
                <a href="mailto:contact@significanz.dk">
                  <Button variant="accent" size="lg">
                    Get in touch
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
