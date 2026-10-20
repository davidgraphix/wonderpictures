import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FilmTicker from "@/components/ui/FilmTicker";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: "About",
  description: "Crafting narratives, one frame at a time — Wonder Pictures.",
};

const AWARDS: { title: string; year?: string }[] = [
  { title: "AFRIFF AWARD NOMINATION — (Best documentary)", year: "2025" },
  { title: "REFTA AWARD NOMINATION — (Best documentary)", year: "2025" },
  { title: "ATEKER INTERNATIONAL FILM FESTIVAL OFFICIAL SELECTION", year: "2025" },
  { title: "AMVCA — (Best documentary)", year: "2026" },
  // Year not supplied by the client yet.
  {
    title:
      "GOLD AWARD FOR THE GOOD THE BAD THE UGLY AT THE INTERNATIONAL CELEBRATION OF CINEMA IN ENGLAND",
  },
];

const BIO_SECTIONS = [
  {
    heading: "My Approach",
    paragraphs: [
      "My work is driven by a clean, minimalist aesthetic that removes the unnecessary and allows the core story to breathe. Whether I am structuring complex narratives in Adobe Premiere Pro or refining audio and finishing touches in DaVinci Resolve, my focus remains on clarity, emotion, and impact. I approach video editing much like elegant typography—favoring timeless structure and intentional design over fleeting trends.",
    ],
  },
  {
    heading: "Selected Work",
    paragraphs: [
      "I have had the privilege of shaping compelling narratives across culture, music, and brand storytelling. My editing portfolio includes an AMVCA-nominated documentary, the five-part “HER” series for Zikoko Films, and the official Johnny Drille Canada Tour documentary.",
      "I have also collaborated on the opening presentation for the Tiwa Savage Music Foundation in partnership with Berklee, crafted narrative-driven highlights for Coca-Cola at 75 Music Production, and edited the #Zeromalaria documentary. With every project, my goal is to find the wonder in the footage and translate it into an unforgettable viewer experience.",
    ],
  },
  {
    heading: "Education & Community",
    paragraphs: [
      "Beyond the edit bay, I am passionate about cultivating the next generation of storytellers. Influenced by the incredible mentors who have shaped my own journey, I launched the “Storytelling with Wonder” masterclass. My mission is to help emerging editors find their unique voice, master their post-production workflows, and build intentional, sustainable careers in film.",
    ],
  },
  {
    heading: "Let’s Tell Your Story",
    paragraphs: [
      "Whether it is an immersive documentary, a high-impact brand piece, or a compelling music visual, I am always looking for stories that matter.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 max-w-site mx-auto px-6 lg:px-12 2xl:px-20">
        <AnimatedSection>
          <span className="gold-line" />
          <p className="text-[10px] font-mono tracking-widest3 text-gold uppercase mb-4">About</p>
          <h1
            className="font-display font-light text-ivory max-w-4xl"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.92, letterSpacing: "-0.025em" }}
          >
            Crafting Narratives,
            <br />
            One Frame at a Time
          </h1>
        </AnimatedSection>
      </section>

      {/* Split: photo + bio */}
      <section className="max-w-site mx-auto px-6 lg:px-12 2xl:px-20 pb-28 grid grid-cols-1 lg:grid-cols-[auto,minmax(0,1fr)] gap-16 2xl:gap-24 items-start">
        {/* Sized to the viewport height and sticky, so it stays in view beside the long bio. */}
        <AnimatedSection className="lg:sticky lg:top-28">
          <div className="relative aspect-[3/4] overflow-hidden lg:w-[min(60vh,38vw)]">
            <Image
              src="/images/about-portrait.jpg"
              alt="Portrait of Olaniyi Iyanuoluwa"
              fill
              priority
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 to-transparent" />
          </div>
        </AnimatedSection>

        <div className="lg:pt-10 space-y-8 max-w-4xl">
          <AnimatedSection>
            <h2 className="font-display font-light text-ivory text-5xl md:text-6xl">
              OLANIYI IYANUOLUWA
            </h2>
            <p className="text-[10px] font-mono tracking-widest2 text-gold uppercase mt-3">
              Cinematographer and Editor
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="space-y-5">
            <p className="text-muted text-sm leading-7 2xl:text-base 2xl:leading-8">
              I am a professional video editor and post-production specialist deeply dedicated to the art of
              documentary storytelling. I believe that editing is where the soul of a film is truly found—it is
              the intentional pacing, the emotional rhythm, and the precise arrangement of audio and visuals that
              bring a narrative to life.
            </p>
          </AnimatedSection>

          {BIO_SECTIONS.map((section) => (
            <AnimatedSection key={section.heading} delay={0.1} className="space-y-5">
              <h3 className="text-[10px] font-mono tracking-widest3 text-gold uppercase">
                {section.heading}
              </h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-muted text-sm leading-7 2xl:text-base 2xl:leading-8">
                  {paragraph}
                </p>
              ))}
            </AnimatedSection>
          ))}

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
                    {a.year && (
                      <span className="text-xs font-mono text-muted flex-shrink-0">{a.year}</span>
                    )}
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
