"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

interface Props {
  src: string;
  /** Poster image shown while video loads. REPLACE with actual thumbnail path. */
  poster?: string;
  className?: string;
  /** Whether to pause when scrolled out of view (saves battery) */
  pauseWhenHidden?: boolean;
  objectFit?: "cover" | "contain";
}

export default function VideoBlock({
  src,
  poster,
  className = "",
  pauseWhenHidden = true,
  objectFit = "cover",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { margin: "-20%" });

  useEffect(() => {
    if (!pauseWhenHidden || !ref.current) return;
    if (isInView) {
      ref.current.play().catch(() => {});
    } else {
      ref.current.pause();
    }
  }, [isInView, pauseWhenHidden]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      style={{ objectFit }}
    />
  );
}
