"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import YouTubeVideo from "@/components/ui/YouTubeVideo";
import VideoModal from "@/components/ui/VideoModal";
import { cinematicReel, getProject } from "@/data/portfolio";

export default function CinematicReel() {
  const project = getProject(cinematicReel.youtubeId);
  const [open, setOpen] = useState(false);

  return (
    <section
      aria-label="Featured edit"
      className="relative h-[560px] overflow-hidden bg-black sm:h-[640px] md:h-[750px]"
    >
      {/* Background YouTube Video (poster shows until playback is confirmed) */}
      <YouTubeVideo
        videoId={cinematicReel.youtubeId}
        start={cinematicReel.startSeconds}
        title={project?.title ?? "Wonder Pictures featured edit"}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.45em] text-[#d6ad61]">
              Featured Edit
            </p>

            <h2 className="font-serif text-5xl font-light leading-[0.9] tracking-[-0.04em] text-[#f5efe4] md:text-8xl">
              Every Frame
              <br />
              Tells A Story
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/70 md:text-base">
              From cinematic wedding films to brand commercials, documentaries,
              events and professional video editing, every project is crafted
              with storytelling, emotion and precision.
            </p>

            {project && (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="mt-10 inline-flex items-center gap-3 border border-[#d6ad61] bg-[#d6ad61] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-black transition duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6ad61]"
              >
                <Play size={12} className="fill-current" />
                Watch The Film
              </button>
            )}
          </div>
        </AnimatedSection>
      </div>

      <VideoModal project={open ? project ?? null : null} onClose={() => setOpen(false)} />
    </section>
  );
}
