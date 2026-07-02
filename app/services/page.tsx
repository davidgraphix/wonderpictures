import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FilmTicker from "@/components/ui/FilmTicker";

export const metadata: Metadata = {
  title: "Services",
  description: "Wedding films, brand videos, events, music videos, and documentaries.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <span className="gold-line" />
          <p className="text-[10px] font-mono tracking-widest3 text-gold uppercase mb-4">What We Create</p>
          <h1
            className="font-display font-light text-ivory max-w-3xl"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.92, letterSpacing: "-0.025em" }}
          >
            Crafted For
            <br />
            Every Story
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="text-muted text-sm leading-7 mt-8 max-w-lg">
            Each type of project demands its own approach. What stays constant is the
            commitment to craftsmanship, collaboration, and a film that lives beyond the day.
          </p>
        </AnimatedSection>
      </section>

      <FilmTicker />

      {/* Services list */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12 space-y-0">
        {services.map((service, i) => (
          <AnimatedSection
            key={service.id}
            delay={i * 0.06}
            id={service.id}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-10 lg:gap-20 py-16 border-b border-whisper/40">
              {/* Left */}
              <div className="lg:sticky lg:top-28 self-start">
                <span className="text-gold font-mono text-4xl mb-6 block">{service.icon}</span>
                <h2 className="font-display font-light text-ivory text-4xl md:text-5xl mb-4">
                  {service.title}
                </h2>
                <p className="text-[10px] font-mono tracking-widest2 text-gold uppercase border border-gold/30 inline-flex px-3 py-1.5">
                  From {service.startingFrom}
                </p>
              </div>

              {/* Right */}
              <div>
                <p className="text-muted text-base leading-8 mb-10">{service.description}</p>

                <p className="text-[10px] font-mono tracking-widest3 text-gold uppercase mb-5">
                  What's Included
                </p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-gold mt-1 flex-shrink-0 text-xs">◆</span>
                      <span className="text-sm text-ivory font-sans">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link href="/contact" className="btn-ghost">
                    Enquire about {service.title} →
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="py-28 text-center max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <h2
            className="font-display font-light text-ivory mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            Not sure which service fits?
          </h2>
          <p className="text-muted text-sm mb-10">
            Reach out and describe your project. We'll guide you to the right approach.
          </p>
          <Link href="/contact" className="btn-gold">
            Start the conversation →
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
