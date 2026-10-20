import type { Metadata } from "next";
import Link from "next/link";
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

      {/* Contact CTA */}
      <section className="py-28 md:py-36 text-center max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-[10px] font-mono tracking-widest3 text-gold uppercase mb-6">Shoot &middot; Edit</p>
          <h2
            className="font-display font-light text-ivory mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            Have a shoot or editing project in mind?
          </h2>
          <p className="text-muted text-sm mb-10">Contact us to discuss your project.</p>
          <Link href="/contact" className="btn-gold">
            Contact Us &rarr;
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
