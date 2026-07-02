export type Category =
  | "Wedding"
  | "Event"
  | "Brand"
  | "Music Video"
  | "Documentary"
  | "Video Editing";

export interface Project {
  id: string;
  title: string;
  category: Category;
  year: number;
  location: string;
  youtubeId: string;
  featured: boolean;
  tagline: string;
}

export const projects: Project[] = [
  {
    id: "film-one",
    title: "Cinematic Highlight",
    category: "Video Editing",
    year: 2026,
    location: "Lagos, Nigeria",
    youtubeId: "pDRWlRCcSFc",
    featured: true,
    tagline: "Professional editing that turns raw footage into clean cinematic stories.",
  },
  {
    id: "film-two",
    title: "Event Story",
    category: "Event",
    year: 2026,
    location: "Lagos, Nigeria",
    youtubeId: "UnPtJg9d_lM",
    featured: true,
    tagline: "Moments captured and edited with emotion, rhythm, and precision.",
  },
  {
    id: "film-three",
    title: "Creative Film",
    category: "Brand",
    year: 2026,
    location: "Lagos, Nigeria",
    youtubeId: "sqFskhIfA6E",
    featured: true,
    tagline: "Visual storytelling for creators, brands, events, and businesses.",
  },
  {
    id: "film-four",
    title: "Motion Story",
    category: "Music Video",
    year: 2026,
    location: "Lagos, Nigeria",
    youtubeId: "rDbWQzcKO5o",
    featured: true,
    tagline: "Clean cuts, cinematic pacing, colour, sound, and emotion.",
  },
];

export const categories: Category[] = [
  "Wedding",
  "Event",
  "Brand",
  "Music Video",
  "Documentary",
  "Video Editing",
];