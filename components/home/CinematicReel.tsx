"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CinematicReel() {
  const videoId = "UnPtJg9d_lM";

  return (
    <section className="relative h-[600px] overflow-hidden bg-black md:h-[750px]">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          title="Wonder Pictures Showreel"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute left-1/2 top-1/2 h-[130%] w-[230%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.45em] text-[#d6ad61]">
              Featured Edit
            </p>

            <h2 className="font-serif text-5xl font-light leading-[0.9] tracking-[-0.04em] text-[#f5efe4] md:text-8xl">
              Every Frame
              <br />
              Tells A Story
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/70 md:text-base">
              From cinematic wedding films to brand commercials, documentaries,
              events and professional video editing, every project is crafted
              with storytelling, emotion and precision.
            </p>

            <a
              href="https://youtu.be/UnPtJg9d_lM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-[#d6ad61] bg-[#d6ad61] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-black transition duration-300 hover:bg-white"
            >
              Watch On YouTube →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}