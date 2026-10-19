/**
 * Single source of truth for every YouTube video shown on the site.
 *
 * Titles are the exact titles published on YouTube (verified via oEmbed).
 * Years are the YouTube publish year. Locations are only set where they are
 * known; cards hide the location line when it is missing.
 */

export type Category =
  | "Wedding"
  | "Event"
  | "Brand"
  | "Music Video"
  | "Documentary";

export interface Project {
  id: string;
  /** Exact YouTube title. */
  title: string;
  category: Category;
  year: number;
  location?: string;
  /** Bare 11-character YouTube video ID (no URL, no query params). */
  youtubeId: string;
  /** Source aspect ratio. 4:3 videos get extra crop so pillarbox bars stay hidden. */
  aspect?: "16:9" | "4:3";
  featured: boolean;
  tagline: string;
}

export const projects: Project[] = [
  {
    id: "funmbi-michael-wedding",
    title: "Funmbi & Michael 5min highlight",
    category: "Wedding",
    year: 2026,
    youtubeId: "FxOFg3aFHuo",
    aspect: "4:3",
    featured: true,
    tagline: "A five-minute wedding highlight film for Funmbi and Michael.",
  },
  {
    id: "benjay-at-90",
    title: "BENJAY AT 90 highlight",
    category: "Event",
    year: 2026,
    location: "Lagos, Nigeria",
    youtubeId: "pDRWlRCcSFc",
    aspect: "4:3",
    featured: true,
    tagline: "Highlights from Benjay's 90th celebration.",
  },
  {
    id: "take-it-all-conference-2026",
    title: "Take it all Business Conference 2026",
    category: "Event",
    year: 2026,
    youtubeId: "cLQlibR7tb8",
    featured: true,
    tagline: "Event highlights from the Take It All Business Conference 2026.",
  },
  {
    id: "unicef-sida-bayelsa-flood-response",
    title: "Striving amidst adversity/ UNICEF and SIDA's Flood Response in Bayelsa State",
    category: "Documentary",
    year: 2026,
    location: "Bayelsa, Nigeria",
    youtubeId: "rDbWQzcKO5o",
    featured: true,
    tagline: "Documenting UNICEF and SIDA's flood response in Bayelsa State.",
  },
  {
    id: "enya-fashion-docu",
    title: "ENYA fashion Docu",
    category: "Documentary",
    year: 2026,
    location: "Lagos, Nigeria",
    youtubeId: "UnPtJg9d_lM",
    featured: false,
    tagline: "A fashion documentary telling the story behind ENYA.",
  },
  {
    id: "johnny-drille-touring-canada",
    title: "Johnny Drille - Touring Canada (Documentary)",
    category: "Documentary",
    year: 2026,
    location: "Canada",
    youtubeId: "YtwpcI4GR_I",
    featured: false,
    tagline: "Following Johnny Drille on tour across Canada.",
  },
  {
    id: "international-breweries-agm",
    title: "1 minute highlight AGM international breweriesmp4",
    category: "Event",
    year: 2026,
    youtubeId: "tDlnj_rKVZs",
    featured: false,
    tagline: "A one-minute highlight from the International Breweries AGM.",
  },
  {
    id: "miraclefeet-chinecherem",
    title: "Cause for Celebration: Chinecherem’s Transformation",
    category: "Documentary",
    year: 2023,
    location: "Lagos, Nigeria",
    youtubeId: "sqFskhIfA6E",
    featured: false,
    tagline: "Chinecherem's journey through clubfoot treatment, told for MiracleFeet.",
  },
];

/** All portfolio categories, in display order. */
export const categories: Category[] = [
  "Wedding",
  "Event",
  "Brand",
  "Music Video",
  "Documentary",
];

/** Categories that currently have at least one video — used for the Work filters. */
export const activeCategories: Category[] = categories.filter((c) =>
  projects.some((p) => p.category === c),
);

export function getProject(youtubeId: string): Project | undefined {
  return projects.find((p) => p.youtubeId === youtubeId);
}

/** Muted looping film shown directly beneath the homepage hero. */
export const heroLoopVideoId = "tDlnj_rKVZs";

/** Background film for the "Every Frame Tells A Story" homepage reel. */
export const cinematicReelVideoId = "UnPtJg9d_lM";
