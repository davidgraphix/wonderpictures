"use client";

import { useState } from "react";
import { youtubeThumbnail, type ThumbnailQuality } from "@/lib/youtube";

const FALLBACK_CHAIN: ThumbnailQuality[] = ["maxresdefault", "sddefault", "hqdefault"];

type Props = {
  videoId: string;
  alt: string;
  className?: string;
};

/**
 * YouTube poster image with graceful fallback: tries the highest quality
 * first, steps down when a size is missing, and finally shows a branded
 * placeholder so the card never renders a broken image.
 */
export default function YouTubeThumbnail({ videoId, alt, className = "" }: Props) {
  const [step, setStep] = useState(0);
  const failed = step >= FALLBACK_CHAIN.length;

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1611] via-[#0b0b0b] to-black"
      >
        <span className="font-serif text-2xl italic text-[#d6ad61]/40">Wonder Pictures</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={youtubeThumbnail(videoId, FALLBACK_CHAIN[step])}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onLoad={(e) => {
        // YouTube serves a 120px grey placeholder (sometimes with 200 OK) for missing sizes.
        if (e.currentTarget.naturalWidth <= 120) setStep((s) => s + 1);
      }}
      onError={() => setStep((s) => s + 1)}
    />
  );
}
