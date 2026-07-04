import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FilmTicker from "@/components/ui/FilmTicker";
import VideoBlock from "@/components/ui/VideoBlock";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: "About",
  description: "The person behind the lens — DT Films.",
};

const AWARDS = [
  { title: "AFRIFF AWARD NOMINATION — (Best documentary)", year: "2025" },
  { title: "REFTA AWARD NOMINATION — (Best documentary)", year: "2025" },
  { title: "ATEKER INTERNATIONAL FILM FESTIVAL OFFICIAL SELECTION", year: "2025" },
  { title: "AMVCA — (Best documentary)", year: "2026" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <span className="gold-line" />
          <p className="text-[10px] font-mono tracking-widest3 text-gold uppercase mb-4">About</p>
          <h1
            className="font-display font-light text-ivory max-w-4xl"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.92, letterSpacing: "-0.025em" }}
          >
            The Person
            <br />
            Behind the Lens
          </h1>
        </AnimatedSection>
      </section>

      {/* Split: photo + bio */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-28 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-16 items-start">
        <AnimatedSection>
          <div className="relative aspect-[3/4] overflow-hidden">
            <VideoBlock
              src="/videos/portrait.mp4"
              poster="/images/director-poster.jpg"
              className="absolute inset-0 w-full h-full"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 to-transparent" />
          </div>
        </AnimatedSection>

        <div className="lg:pt-10 space-y-8">
          <AnimatedSection>
            <h2 className="font-display font-light text-ivory text-5xl md:text-6xl">
              OLANIYI IYANUOLUWA
            </h2>
            <p className="text-[10px] font-mono tracking-widest2 text-gold uppercase mt-3">
              Cinematographer and Editor
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="space-y-5">
            <p className="text-muted text-sm leading-7">
              I founded Wonder Pictures to bridge the gap between technical precision and raw human experience.
              We take on select projects to ensure every frame whether
              for a global brand or a private celebration receives the focus and high-end craft it deserves.
            </p>
          </AnimatedSection>

          {/* Signature — REPLACE with actual scanned signature image */}
          <AnimatedSection delay={0.2}>
            <p className="font-display italic text-3xl text-muted mt-6">— Olaniyi Iyanuoluwa.</p>
          </AnimatedSection>

          {/* Awards */}
          <AnimatedSection delay={0.3}>
            <div className="border-t border-whisper/60 pt-8 mt-8">
              <p className="text-[10px] font-mono tracking-widest3 text-gold uppercase mb-6">
                Recognition
              </p>
              <ul className="space-y-4">
                {AWARDS.map((a) => (
                  <li key={a.title} className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-ivory">{a.title}</span>
                    <span className="text-xs font-mono text-muted flex-shrink-0">{a.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FilmTicker />

      {/* Philosophy */}
      <section className="py-28 bg-carbon border-y border-whisper/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <p className="text-[10px] font-mono tracking-widest3 text-gold uppercase mb-8">
              The Belief
            </p>
            <blockquote
              className="font-display font-light text-ivory"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
            >
              "A film is a document of what people feel, not just what they do. My job is
              to be close enough to catch it, and quiet enough not to disturb it."
            </blockquote>
            <p className="font-display italic text-muted text-2xl mt-8">— Olaniyi Iyanuoluwa.</p>
          </AnimatedSection>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
