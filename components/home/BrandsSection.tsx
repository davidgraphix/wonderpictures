"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

/**
 * Monochrome logos live in /images/brands/mono (white artwork on transparency,
 * generated from the colour masters in /images/brands).
 */
const brands = [
  { name: "NIVEA", file: "nivea.png" },
  { name: "UNICEF", file: "unicef.png" },
  { name: "Fujifilm", file: "fujifilm.png" },
  { name: "Bamboo", file: "bamboo.png" },
  { name: "Guinness", file: "guinness.png" },
  { name: "NXT Grid", file: "nxt-grid.png" },
  { name: "Oraimo", file: "oraimo.png" },
  { name: "121 Selah", file: "121selah.png" },
  { name: "Zikoko", file: "zikoko.png" },
  { name: "Coca-Cola", file: "cocacola.png" },
  { name: "Hallelujah Challenge", file: "hallelujah-challenge.png" },
  { name: "MiracleFeet", file: "miracle-feet.png" },
  { name: "YNaija", file: "ynaija.png" },
  { name: "Zero Malaria", file: "zero-malaria.png" },
  { name: "Interfaces Africa", file: "interfaces-africa.png" },
  { name: "UBA", file: "uba.png" },
  { name: "ENYA", file: "enya.png" },
  { name: "Dangote", file: "dangote.png" },
  // SMLXY Fashion and Lagos State are hidden until logo files are supplied.
  { name: "Spotify", file: "spotify.png" },
  { name: "Paystack", file: "paystack.png" },
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
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 lg:gap-8">
            {brands.map((brand) => (
              <li
                key={brand.file}
                className="group flex min-h-24 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] px-5 py-4 transition duration-300 hover:border-[#d6ad61]/40 hover:bg-white/[0.04]"
              >
                <div className="relative h-12 w-full max-w-[150px]">
                  <Image
                    src={`/images/brands/mono/${brand.file}`}
                    alt={brand.name}
                    fill
                    className="object-contain opacity-70 grayscale transition duration-500 group-hover:opacity-100"
                    sizes="(max-width:768px) 140px, 150px"
                  />
                </div>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
