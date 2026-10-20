"use client";

import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import AnimatedSection from "@/components/ui/AnimatedSection";
import YouTubeThumbnail from "@/components/ui/YouTubeThumbnail";
import VideoModal from "@/components/ui/VideoModal";

const featured = projects.filter((p) => p.featured).slice(0, 4);

export default function FeaturedFilms() {
  const [playing, setPlaying] = useState<Project | null>(null);

  return (
    <section className="bg-[#050505] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <AnimatedSection>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.45em] text-[#d6ad61]">
              Featured Films
            </p>

            <h2 className="font-serif text-4xl font-light leading-none tracking-[-0.04em] text-[#f5efe4] md:text-6xl">
              A Glimpse Of <br className="hidden sm:block" /> Our Work
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Link
              href="/portfolio"
              className="group inline-flex text-[10px] font-bold uppercase tracking-[0.35em] text-[#d6ad61] transition hover:text-white"
            >
              View All Films
              <span className="ml-2 transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.08}>
              <FilmCard project={project} onPlay={setPlaying} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      <VideoModal project={playing} onClose={() => setPlaying(null)} />
    </section>
  );
}

function FilmCard({
  project,
  onPlay,
}: {
  project: Project;
  onPlay: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onPlay(project)}
      aria-label={`Play ${project.title}`}
      className="group relative block w-full overflow-hidden border border-white/10 bg-white/[0.03] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6ad61]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-black">
        <div className="absolute inset-0 scale-[1.04] transition duration-700 group-hover:scale-110">
          <YouTubeThumbnail
            videoId={project.youtubeId}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/10" />

        <div className="absolute inset-0 flex items-center justify-center opacity-70 transition duration-500 group-hover:opacity-100 md:opacity-0 md:group-focus-visible:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/45 bg-black/35 backdrop-blur-md transition group-hover:scale-110 group-hover:border-[#d6ad61]">
            <Play size={18} className="ml-1 text-white" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="flex items-center justify-between border-t border-white/20 pt-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/70">
              {project.category}
            </p>

            {project.year && (
              <p className="text-[9px] font-bold text-white/70">
                {project.year}
              </p>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
