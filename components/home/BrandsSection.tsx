"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const brands = [
  "nivea.png",
  "unicef.png",
  "fujifilm.webp",
  "bamboo.webp",
  "guiness.png",
  "nxt-grid.jpg",
  "oraimo.png",
  "121selah.jpg",
  "zikoko.jpg",
  "cocacola.png",
  "hallelujah challenge.jpg",
  "miracle-feet.png",
  "ynaija.jpeg",
  "zero-malaria.jpg",
  "interface-africa.jpg",
  "uba.png",
  "enya.png",
  "dangote.jpg",
  "smlxy-fashion.png",
  "spotify.jpg",
  "lagos-state.png",
  "paystack.jpg",
];

export default function BrandsSection() {
  return (
    <section className="border-y border-white/10 bg-[#050505] py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <AnimatedSection>
          <p className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.45em] text-[#d6ad61]">
            Trusted By Brands & Organizations
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {brands.map((brand) => (
              <div
                key={brand}
                className="group flex min-h-24 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] p-4 transition duration-300 hover:border-[#d6ad61]/40 hover:bg-white/[0.04]"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={`/images/brands/${brand}`}
                    alt={brand.replace(/\.[^/.]+$/, "")}
                    fill
                    className="object-contain  duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                    sizes="(max-width:768px) 120px, 160px"
                  />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}