import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote:
      "Wonders Pictures captured our wedding perfectly. Every moment, every emotion was beautifully told.",
    name: "Bolanle & Tunde",
    role: "Wedding Clients",
  },
  {
    quote:
      "Highly professional, creative and passionate. Our brand video exceeded all expectations.",
    name: "Daniel Okafor",
    role: "Brand Owner",
  },
  {
    quote:
      "He doesn’t just shoot videos, he tells stories that stay with you forever.",
    name: "Morenike A.",
    role: "Event Planner",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#050505] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <AnimatedSection className="mb-14">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.45em] text-[#d6ad61]">
            Kind Words
          </p>
          <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#f5efe4] md:text-6xl">
            What Clients Say
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.08}>
              <div className="h-full border border-white/10 bg-white/[0.04] p-7">
                <span className="mb-6 block font-serif text-5xl leading-none text-[#d6ad61]">
                  “
                </span>

                <p className="mb-8 text-sm leading-7 text-white/70">
                  {item.quote}
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d6ad61] text-sm font-bold text-black">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#d6ad61]">
                      {item.name}
                    </p>
                    <p className="text-xs text-white/45">{item.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d6ad61]" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
        </div>
      </div>
    </section>
  );
}