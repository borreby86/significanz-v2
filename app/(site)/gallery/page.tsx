"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { useTranslation } from "@/lib/i18n";

const galleryImages = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/${String(i + 1).padStart(2, '0')}.jpg`,
}));

export default function GalleryPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero - Featured Image */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <Container size="wide">
          <FadeIn>
            <div className="aspect-[21/9] relative overflow-hidden">
              <Image
                src="/images/gallery/featured.jpg"
                alt={t.galleryPage.featuredAlt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 md:py-12">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <FadeIn key={image.id} delay={index * 0.05}>
                <div className="aspect-square bg-white p-3 md:p-4 shadow-sm border border-gray-100">
                  <div className="w-full h-full relative">
                    <Image
                      src={image.src}
                      alt={`${t.galleryPage.photoAlt} ${image.id}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Caption */}
      <section className="py-16 md:py-24">
        <Container size="default">
          <FadeIn>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              {t.galleryPage.caption}
            </p>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
