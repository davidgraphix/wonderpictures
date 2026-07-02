import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-[url('/images/booking-bg.jpg')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-5 py-20 md:px-10">
        <AnimatedSection>
          <h2 className="max-w-2xl font-serif text-4xl font-light leading-[1] tracking-[-0.04em] text-[#f5efe4] md:text-6xl">
            Ready To Tell <br /> Your Story?
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            Let’s create something unforgettable together.
          </p>

          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex bg-[#d6ad61] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-black transition hover:bg-white"
            >
              Book A Shoot →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}