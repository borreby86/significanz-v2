"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactButton } from "@/components/ui/ContactButton";
import { useTranslation } from "@/lib/i18n";

// New gallery images
const galleryImages = [
  "Otte Scharmer.jpg",
  "DTU.jpg",
  "export m viviant farve.jpg",
  "Hofor.jpg",
  "IMG_0225.jpg",
  "IMG_0569.jpg",
  "IMG_0616.jpg",
  "IMG_0621.jpg",
  "IMG_0763.jpg",
  "IMG_4664.jpg",
  "IMG_5324.jpg",
  "IMG_8529.jpg",
  "IMG_8533.jpg",
  "IMG_8550.jpg",
  "IMG_8994.jpg",
  "IMG_9028.jpg",
  "IMG_9463.jpg",
  "IMG_9511.jpg",
  "IMG_9638.jpg",
  "IMG_9652.jpg",
].map((filename, i) => ({
  id: i + 1,
  src: `/images/gallery/${filename}`,
}));

export default function GalleryPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <Container size="wide">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#A12F63]" />
              <span className="text-[#A12F63] text-sm font-medium uppercase tracking-[0.2em]">
                {t.galleryPage.title}
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#34323A] italic">
              {t.galleryPage.caption}
            </h1>
          </FadeIn>
        </Container>
      </section>

      {/* Gallery Grid - Postcard style */}
      <section className="pb-24 md:pb-32">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <FadeIn key={image.id} delay={index * 0.03}>
                <div className="bg-white p-2 sm:p-3 md:p-4 shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={`${t.galleryPage.photoAlt} ${image.id}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-[#34323A] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/workshop.jpeg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#34323A]/85" />
        </div>
        <Container size="default" className="relative z-10">
          <FadeIn>
            <div className="text-center">
              <span className="text-[#BFA27A] font-medium text-sm uppercase tracking-[0.2em]">
                Get in touch
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[#F7F6F5] italic tracking-tight">
                Let&apos;s start a conversation
              </h2>
              <p className="mt-6 text-lg text-[#F7F6F5]/70 max-w-xl mx-auto">
                Ready to create meaningful impact? We&apos;d love to hear from you.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <ContactButton className="inline-flex items-center gap-3 px-8 py-4 bg-[#A12F63] text-white font-medium hover:bg-[#8a2854] transition-colors">
                  Get in touch
                  <span className="text-xl">→</span>
                </ContactButton>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
