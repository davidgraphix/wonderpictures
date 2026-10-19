"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { getProject, heroLoopVideoId } from "@/data/portfolio";
import YouTubeVideo from "@/components/ui/YouTubeVideo";
import VideoModal from "@/components/ui/VideoModal";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** Muted, looping cinematic film placed directly beneath the hero. */
export default function HeroReel() {
  const project = getProject(heroLoopVideoId);
  const [open, setOpen] = useState(false);
  const title = project?.title ?? "Wonder Pictures";

  return (
    <section aria-label="Featured film" className="bg-[#050505] px-0 pb-4 md:px-6 md:pb-8 lg:px-10">
      <AnimatedSection direction="none">
        <div className="relative mx-auto aspect-video w-full max-w-[1600px] overflow-hidden border-y border-white/10 bg-black md:aspect-[2.2/1] md:border">
          <YouTubeVideo videoId={heroLoopVideoId} title={title} />

          {/* Cinematic grading overlays */}
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {project && (
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6 md:p-10">
              <div className="min-w-0">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.4em] text-[#d6ad61] md:text-[10px]">
                  Now Showing · {project.category}
                </p>
                <p className="line-clamp-1 font-serif text-lg font-light tracking-[-0.02em] text-[#f5efe4] sm:text-2xl md:text-4xl">
                  {project.title}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex shrink-0 items-center gap-2 border border-white/30 bg-black/30 px-3 py-2.5 text-[9px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md transition hover:border-[#d6ad61] hover:bg-[#d6ad61] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d6ad61] sm:px-5 sm:py-3 md:text-[10px]"
              >
                <Play size={12} className="fill-current" />
                <span className="hidden sm:inline">Watch With Sound</span>
                <span className="sm:hidden">Watch</span>
              </button>
            </div>
          )}
        </div>
      </AnimatedSection>

      <VideoModal project={open ? project ?? null : null} onClose={() => setOpen(false)} />
    </section>
  );
}
