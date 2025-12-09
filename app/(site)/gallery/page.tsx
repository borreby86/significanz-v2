"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { useTranslation } from "@/lib/i18n";

// New gallery images
const galleryImages = [
  "DTU.jpg",
  "export m viviant farve.jpg",
  "export m viviant farve(1).jpg",
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
  "MM200841.jpg",
  "MM200895.jpg",
  "MM201085.jpg",
  "Otte Scharmer.jpg",
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
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-[#34323A] italic">
              {t.galleryPage.caption}
            </h1>
          </FadeIn>
        </Container>
      </section>

      {/* Gallery Grid - Color images, no border */}
      <section className="pb-24 md:pb-32">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <FadeIn key={image.id} delay={index * 0.03}>
                <div className="aspect-square relative overflow-hidden group cursor-pointer">
                  <Image
                    src={image.src}
                    alt={`${t.galleryPage.photoAlt} ${image.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#34323A]/0 group-hover:bg-[#34323A]/20 transition-colors duration-300" />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
