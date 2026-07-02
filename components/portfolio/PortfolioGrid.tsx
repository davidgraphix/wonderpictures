"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories, type Category } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";
import YouTubeVideo from "@/components/ui/YouTubeVideo";

export default function PortfolioGrid() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-36 md:px-10 md:pb-32">
      <AnimatedSection className="mb-14">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.45em] text-[#d6ad61]">
          All Films
        </p>

        <h1 className="font-serif text-5xl font-light leading-[0.92] tracking-[-0.05em] text-[#f5efe4] md:text-8xl">
          The Work
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mb-14 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`border px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] transition ${
              active === cat
                ? "border-[#d6ad61] bg-[#d6ad61] text-black"
                : "border-white/15 bg-transparent text-white/55 hover:border-[#d6ad61]/60 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </AnimatedSection>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              id={project.id}
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{
                duration: 0.45,
                delay: index * 0.035,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={getGridSpan(index)}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function getGridSpan(index: number) {
  const pattern = [
    "lg:col-span-7",
    "lg:col-span-5",
    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-6",
    "lg:col-span-6",
  ];

  return pattern[index % pattern.length];
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isLarge = index % 7 === 0 || index % 7 === 1;

  return (
    <article className="group overflow-hidden border border-white/10 bg-white/[0.03]">
      <div
        className={`relative overflow-hidden bg-black ${
          isLarge ? "aspect-[16/10]" : "aspect-[4/5]"
        }`}
      >
 <YouTubeVideo
  videoId={project.youtubeId}
  title={project.title}
  className="absolute left-1/2 top-1/2 h-[135%] w-[240%] -translate-x-1/2 -translate-y-1/2"
/>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/10" />

        <div className="absolute left-4 top-4">
          <span className="border border-[#d6ad61]/30 bg-black/45 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-[#d6ad61] backdrop-blur-md">
            {project.category}
          </span>
        </div>

        <div className="absolute right-4 top-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
            {project.year}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/45 bg-black/35 text-white backdrop-blur-md">
            <span className="ml-1 text-sm">▶</span>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="font-serif text-2xl font-light tracking-[-0.03em] text-[#f5efe4] transition group-hover:text-[#d6ad61] md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
          {project.location}
        </p>

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/55">
          {project.tagline}
        </p>
      </div>
    </article>
  );
}