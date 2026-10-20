"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, activeCategories, type Category, type Project } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";
import YouTubeThumbnail from "@/components/ui/YouTubeThumbnail";
import VideoModal from "@/components/ui/VideoModal";

export default function PortfolioGrid() {
  const [active, setActive] = useState<Category | "All">("All");
  const [playing, setPlaying] = useState<Project | null>(null);

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
        {(["All", ...activeCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={`border px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6ad61] ${
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
              <ProjectCard project={project} index={index} onPlay={setPlaying} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <VideoModal project={playing} onClose={() => setPlaying(null)} />
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
  onPlay,
}: {
  project: Project;
  index: number;
  onPlay: (project: Project) => void;
}) {
  const isLarge = index % 7 === 0 || index % 7 === 1;
  // Landscape cards would reveal the pillarbox bars baked into 4:3 thumbnails.
  const zoom = isLarge && project.aspect === "4:3" ? "scale-[1.4]" : "scale-[1.04]";

  return (
    <article className="overflow-hidden border border-white/10 bg-white/[0.03]">
      <button
        type="button"
        onClick={() => onPlay(project)}
        aria-label={`Play ${project.title}`}
        className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#d6ad61]"
      >
        <div
          className={`relative overflow-hidden bg-black ${
            isLarge ? "aspect-[16/10]" : "aspect-[4/5]"
          }`}
        >
          <div className={`absolute inset-0 transition duration-700 group-hover:brightness-110 ${zoom}`}>
            <YouTubeThumbnail
              videoId={project.youtubeId}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

          <div className="absolute left-4 top-4">
            <span className="border border-[#d6ad61]/30 bg-black/45 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-[#d6ad61] backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {project.year && (
            <div className="absolute right-4 top-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                {project.year}
              </span>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center opacity-70 transition duration-500 group-hover:opacity-100 md:opacity-0 md:group-focus-visible:opacity-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/45 bg-black/35 text-white backdrop-blur-md transition group-hover:scale-110 group-hover:border-[#d6ad61]">
              <span className="ml-1 text-sm">▶</span>
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}
