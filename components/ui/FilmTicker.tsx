"use client";

import { useReducedMotion } from "framer-motion";

const WORDS = [
  "FILM",
  "·",
  "STORY",
  "·",
  "EMOTION",
  "·",
  "LIGHT",
  "·",
  "MOVEMENT",
  "·",
  "VISION",
  "·",
  "CRAFT",
  "·",
  "TRUTH",
  "·",
  "MEMORY",
  "·",
];

// Duplicate so the seamless loop works (we animate -50%)
const ITEMS = [...WORDS, ...WORDS];

interface Props {
  /** Slow (default) or fast */
  speed?: "slow" | "fast";
  /** Reverse direction */
  reverse?: boolean;
  className?: string;
}

export default function FilmTicker({
  speed = "slow",
  reverse = false,
  className = "",
}: Props) {
  const prefersReduced = useReducedMotion();

  const duration = speed === "slow" ? "50s" : "28s";
  const direction = reverse ? "reverse" : "normal";

  return (
    <div
      className={`overflow-hidden py-5 border-y border-whisper/60 ${className}`}
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={
          prefersReduced
            ? {}
            : {
                animation: `tickerLTR ${duration} linear infinite ${direction}`,
                willChange: "transform",
              }
        }
      >
        {ITEMS.map((word, i) => (
          <span
            key={i}
            className={`
              inline-block px-6
              font-mono text-[10px] tracking-widest3
              ${word === "·" ? "text-gold" : "text-muted"}
            `}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
