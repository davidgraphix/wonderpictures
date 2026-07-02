import { Camera, Clapperboard, Music, Gem, Briefcase } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    title: "Video Editing",
    text: "Professional editing for creators, brands, events, and businesses. From raw footage to clean cinematic stories.",
  },
  {
    title: "Wedding Films",
    text: "Breathtaking wedding films that tell your love story beautifully.",
  },
  {
    title: "Event Coverage",
    text: "From corporate events to parties, we capture it all.",
  },
  {
    title: "Brand & Commercial",
    text: "High-quality videos that elevate your brand and connect with your audience.",
  },
  {
    title: "Music Videos",
    text: "Creative, cinematic music videos that bring your sound to life.",
  },
];

export default function ServicesSection() {
  return (
    <section className="border-y border-white/10 bg-[#050505] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <AnimatedSection className="mb-14">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.45em] text-[#d6ad61]">
            What We Do
          </p>
          <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#f5efe4] md:text-6xl">
            Services
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
           

            return (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <div className="group h-full border border-white/10 bg-white/[0.02] p-6 transition hover:border-[#d6ad61]/60 hover:bg-white/[0.05]">

                  <h3 className="mb-4 text-base font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-6 text-white/55">{service.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}