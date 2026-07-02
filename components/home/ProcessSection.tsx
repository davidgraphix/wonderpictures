import { Search, Camera, Scissors, Send } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    icon: Search,
    number: "Step 01",
    title: "Discover",
    text: "We listen, understand your vision, and define the emotion behind the story.",
  },
  {
    icon: Camera,
    number: "Step 02",
    title: "Shoot",
    text: "We capture real, authentic moments with creativity and cinematic precision.",
  },
  {
    icon: Scissors,
    number: "Step 03",
    title: "Edit",
    text: "We craft your story with rhythm, colour, sound, and emotion.",
  },
  {
    icon: Send,
    number: "Step 04",
    title: "Deliver",
    text: "A cinematic film delivered beautifully, ready for every screen.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#050505] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <AnimatedSection className="mb-14">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.45em] text-[#d6ad61]">
            Our Process
          </p>
          <h2 className="font-serif text-4xl font-light tracking-[-0.04em] text-[#f5efe4] md:text-6xl">
            How We Work
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <AnimatedSection key={step.title} delay={index * 0.08}>
                <div className="relative">
                  <Icon className="mb-6 text-white/80" size={36} />

                  <div className="mb-4 flex items-center gap-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d6ad61]">
                      {step.number}
                    </p>

                    {index !== steps.length - 1 && (
                      <div className="hidden h-px flex-1 bg-white/15 lg:block" />
                    )}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-6 text-white/55">{step.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}