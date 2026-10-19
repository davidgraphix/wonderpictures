"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { youtubeBackgroundEmbed } from "@/lib/youtube";
import YouTubeThumbnail from "@/components/ui/YouTubeThumbnail";

type YouTubeVideoProps = {
  videoId: string;
  title: string;
  /** Extra classes for the outer wrapper (it fills its positioned parent by default). */
  className?: string;
};

/**
 * Ambient, muted, looping YouTube background that covers its container like
 * `object-fit: cover`. The iframe is only created once the section nears the
 * viewport, and playback pauses whenever it scrolls out of view so only the
 * visible background plays. Users who prefer reduced motion get the poster.
 */
export default function YouTubeVideo({ videoId, title, className = "" }: YouTubeVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const prefersReduced = useReducedMotion();
  const nearView = useInView(wrapperRef, { once: true, margin: "300px" });
  const inView = useInView(wrapperRef, { margin: "0px" });
  const [ready, setReady] = useState(false);

  const shouldMount = nearView && !prefersReduced;

  useEffect(() => {
    if (!ready) return;
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: inView ? "playVideo" : "pauseVideo", args: [] }),
      "*",
    );
  }, [inView, ready]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden bg-black [container-type:size] ${className}`}
    >
      <YouTubeThumbnail
        videoId={videoId}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />

      {shouldMount && (
        <iframe
          ref={iframeRef}
          src={youtubeBackgroundEmbed(videoId)}
          title={title}
          tabIndex={-1}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => {
            // Give YouTube a moment to paint the first frame before revealing it.
            window.setTimeout(() => setReady(true), 1200);
          }}
          // 16:9 cover sizing, scaled slightly so YouTube's overlay chrome stays out of frame.
          className="pointer-events-none absolute left-1/2 top-1/2 h-[max(115%,64.7cqw)] w-[max(115%,204.4cqh)] -translate-x-1/2 -translate-y-1/2 border-0"
        />
      )}
    </div>
  );
}
