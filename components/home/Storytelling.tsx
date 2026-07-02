import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import VideoBlock from "@/components/ui/VideoBlock";

export default function Storytelling() {
  return (
    <section className="bg-[#050505] border-y border-white/10">
      <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-2">
        <AnimatedSection className="relative min-h-[420px] overflow-hidden">
          <VideoBlock
            src="/videos/storytelling.mp4"
            poster="/images/storytelling-poster.jpg"
            className="absolute inset-0 h-full w-full"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </AnimatedSection>

        <div className="flex items-center px-5 py-20 md:px-10 lg:px-20">
          <AnimatedSection>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.45em] text-[#d6ad61]">
              About Wonders Pictures
            </p>

            <h2 className="mb-7 font-serif text-4xl font-light leading-[1] tracking-[-0.04em] text-[#f5efe4] md:text-6xl">
              Driven By Passion. <br />
              Defined By Stories.
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/65">
              I’m a storyteller at heart. Through my lens, I transform real
              moments into cinematic experiences that evoke emotion and stand the
              test of time.
            </p>

            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex border border-white/20 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-white transition hover:border-[#d6ad61] hover:bg-[#d6ad61] hover:text-black"
              >
                Learn More →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}