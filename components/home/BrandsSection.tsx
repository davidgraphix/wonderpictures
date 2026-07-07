"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const brands = [
  "nivea",
  "unicef",
  "fujifilm",
  "bamboo",
  "guinness",
  "nxt-grid",
  "oraimo",
  "121selah",
  "zikoko",
  "cocacola",
  "hallelujah-challenge",
  "miracle-feet",
  "chude-ynaija",
  "zero-malaria",
  "interface-africa",
  "uba",
  "enya",
  "dangote",
  "smlxy-fashion",
  "spotify",
  "lagos-state",
  "paystack",
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
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

            {brands.map((brand) => (
              <div
                key={brand}
                className="group flex h-20 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] transition duration-300 hover:border-[#d6ad61]/40 hover:bg-white/[0.04]"
              >
                <Image
                  src={`/images/brands/${brand}.png`}
                  alt={brand}
                  width={130}
                  height={60}
                  className="h-10 w-auto object-contain opacity-60 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            ))}

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}