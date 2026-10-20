"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { projectLabel, type Project } from "@/data/portfolio";
import { youtubePlayerEmbed, youtubePlaylistUrl, youtubeWatchUrl } from "@/lib/youtube";

type Props = {
  project: Project | null;
  onClose: () => void;
};

/** Full-screen lightbox that loads the YouTube player only when opened. */
export default function VideoModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const isOpen = project !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[min(72rem,128vh)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-6">
              <div className="min-w-0">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#d6ad61]">
                  {project.category}{project.year ? ` · ${project.year}` : ""}
                </p>
                <h2
                  id="video-modal-title"
                  className="font-serif text-2xl font-light leading-tight tracking-[-0.03em] text-[#f5efe4] md:text-4xl"
                >
                  {projectLabel(project)}
                </h2>
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close video"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-[#d6ad61] hover:text-[#d6ad61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d6ad61]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-black">
              <iframe
                src={youtubePlayerEmbed(project.youtubeId)}
                title={project.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              <a
                href={youtubeWatchUrl(project.youtubeId)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 transition hover:text-[#d6ad61]"
              >
                Watch on YouTube →
              </a>
              {project.playlistId && (
                <a
                  href={youtubePlaylistUrl(project.playlistId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 transition hover:text-[#d6ad61]"
                >
                  Watch the full series →
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
