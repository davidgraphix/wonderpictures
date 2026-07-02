export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  /* REPLACE: update icon or swap for a custom SVG/image */
  icon: string; // Unicode symbol or emoji used as fallback
  startingFrom: string;
}

export const services: Service[] = [
  {
    id: "wedding",
    title: "Wedding Films",
    description:
      "Your day, distilled into a film you'll return to for the rest of your lives. Every look, whisper, and tear — preserved with intention.",
    features: [
      "Full-day coverage",
      "Highlight film (4–8 min)",
      "Full ceremony cut",
      "Drone footage",
      "Colour-graded 4K delivery",
      "Private online gallery",
    ],
    icon: "◈",
    startingFrom: "£3,500",
  },
  {
    id: "event",
    title: "Event Coverage",
    description:
      "Galas, launches, conferences, celebrations — captured with the craft and rhythm that transforms footage into memory.",
    features: [
      "Multi-camera setup",
      "Same-day edit option",
      "Branded content cuts",
      "Social media edits",
      "Raw footage archive",
    ],
    icon: "◉",
    startingFrom: "£1,800",
  },
  {
    id: "brand",
    title: "Brand & Commercial",
    description:
      "Visual storytelling that moves people to act. We translate your brand's identity into film — honest, striking, and unforgettable.",
    features: [
      "Creative concept development",
      "Storyboarding & pre-production",
      "Professional lighting & sound",
      "Motion graphics integration",
      "Multiple format deliverables",
      "Usage licensing",
    ],
    icon: "◇",
    startingFrom: "£2,500",
  },
  {
    id: "music-video",
    title: "Music Videos",
    description:
      "We treat music videos as short films. From concept to colour grade, we build visuals that serve your sound and expand your audience.",
    features: [
      "Concept & treatment development",
      "Location scouting",
      "Cinematic colour grading",
      "VFX & visual effects",
      "Multiple aspect ratio deliverables",
    ],
    icon: "◐",
    startingFrom: "£2,000",
  },
  {
    id: "documentary",
    title: "Documentaries",
    description:
      "The stories that deserve more than a highlight reel. Longer-form narrative films that dig beneath the surface and find the truth.",
    features: [
      "Research & interview prep",
      "Observational filming",
      "Archive integration",
      "Full narrative edit",
      "Festival submission formats",
    ],
    icon: "◑",
    startingFrom: "£4,000",
  },
];
