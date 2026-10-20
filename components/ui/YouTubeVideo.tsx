"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { youtubeBackgroundEmbed } from "@/lib/youtube";
import YouTubeThumbnail from "@/components/ui/YouTubeThumbnail";

type YouTubeVideoProps = {
  videoId: string;
  title: string;
  /** Seconds into the video where playback should begin (and resume after each loop). */
  start?: number;
  /** Extra classes for the outer wrapper (it fills its positioned parent by default). */
  className?: string;
  /** Remove the player again once it scrolls well out of view (for grids of many videos). */
  unloadWhenHidden?: boolean;
  /** Load the poster immediately; set false for below-the-fold grids. */
  eagerPoster?: boolean;
};

const PLAYING = 1;
const ENDED = 0;

/**
 * Ambient, muted, looping YouTube background that covers its container like
 * `object-fit: cover`.
 *
 * The poster stays on screen until YouTube itself reports that the video is
 * playing, so a blocked or failed autoplay never leaves a black rectangle.
 * The iframe is created when the section nears the viewport and paused while
 * it is off screen. Users who prefer reduced motion only get the poster.
 */
export default function YouTubeVideo({
  videoId,
  title,
  start,
  className = "",
  unloadWhenHidden = false,
  eagerPoster = true,
}: YouTubeVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const prefersReduced = useReducedMotion();
  const nearView = useInView(wrapperRef, { once: !unloadWhenHidden, margin: "200px" });
  const inView = useInView(wrapperRef, { amount: 0.15 });
  const [origin, setOrigin] = useState<string>();
  const [apiReady, setApiReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setOrigin(window.location.origin), []);

  const shouldMount = nearView && !prefersReduced && origin !== undefined;

  // A fresh player is created on remount, so forget the old one's state.
  useEffect(() => {
    if (shouldMount) return;
    setApiReady(false);
    setPlaying(false);
    setLoaded(false);
  }, [shouldMount]);

  const command = useCallback((func: string, args: unknown[] = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args, id: 1, channel: "widget" }),
      "*",
    );
  }, []);

  // Listen for the IFrame API's state updates for this player only.
  useEffect(() => {
    if (!shouldMount) return;

    const onMessage = (e: MessageEvent) => {
      if (e.source !== iframeRef.current?.contentWindow) return;
      let data: { event?: string; info?: unknown };
      try {
        data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }

      if (data.event === "onReady" || data.event === "initialDelivery") setApiReady(true);

      const state =
        data.event === "onStateChange"
          ? data.info
          : (data.info as { playerState?: number } | undefined)?.playerState;

      if (state === PLAYING) setPlaying(true);
      if (state === ENDED) {
        command("seekTo", [start ?? 0, true]);
        command("playVideo");
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [shouldMount, start, command]);

  // Handshake: announce ourselves until the player answers (or ~10s pass).
  useEffect(() => {
    if (!loaded || apiReady) return;
    let tries = 0;
    const timer = window.setInterval(() => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "listening", id: 1, channel: "widget" }),
        "*",
      );
      if (++tries >= 40) window.clearInterval(timer);
    }, 250);
    return () => window.clearInterval(timer);
  }, [loaded, apiReady]);

  // Only play while visible so a single background runs at a time.
  useEffect(() => {
    if (apiReady) command(inView ? "playVideo" : "pauseVideo");
  }, [apiReady, inView, command]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden bg-black [container-type:size] ${className}`}
    >
      {shouldMount && (
        <iframe
          ref={iframeRef}
          src={youtubeBackgroundEmbed(videoId, { start, origin })}
          title={title}
          tabIndex={-1}
          onLoad={() => setLoaded(true)}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          // 16:9 cover sizing, scaled slightly so YouTube's overlay chrome stays out of frame.
          className="pointer-events-none absolute left-1/2 top-1/2 h-[max(115%,64.7cqw)] w-[max(115%,204.4cqh)] -translate-x-1/2 -translate-y-1/2 border-0"
        />
      )}

      {/* Poster sits above the player until playback is confirmed. */}
      <YouTubeThumbnail
        videoId={videoId}
        alt=""
        eager={eagerPoster}
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
