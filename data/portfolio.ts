/**
 * Single source of truth for every YouTube video shown on the site.
 *
 * `title` is the exact title published on YouTube (verified via oEmbed) and is
 * used for accessible labels and the video modal. Portfolio cards do not show
 * titles. `displayTitle` is an optional presentation label used only where the
 * YouTube title contains an obvious upload artefact.
 *
 * Years and locations are only set where they were verified; cards hide them
 * when missing.
 */

export type Category =
  | "Wedding"
  | "Event"
  | "Brand"
  | "Documentary";

export interface Project {
  id: string;
  /** Exact YouTube title. */
  title: string;
  /** Optional cleaner label for the modal heading; never replaces `title` as the record of truth. */
  displayTitle?: string;
  /** Omitted only while unverified; such videos appear under "All" but no category filter. */
  category?: Category;
  year?: number;
  location?: string;
  /** Bare 11-character YouTube video ID (no URL, no query params). */
  youtubeId: string;
  /** YouTube channel that published the video. */
  channel: string;
  /** Source aspect ratio. 4:3 videos get extra crop so pillarbox bars stay hidden. */
  aspect?: "16:9" | "4:3";
  /** Related YouTube playlist (e.g. the full series an episode belongs to). */
  playlistId?: string;
  featured: boolean;
  tagline?: string;
}

/** Placeholders for videos whose YouTube metadata has not been verified yet. */
const PENDING_TITLE = "Title pending verification";
const PENDING_CHANNEL = "Channel pending verification";

export const projects: Project[] = [
  {
    id: "zikoko-her-bawsty-clothing",
    title: "How Morenike Olusanya Built Bawsty Clothing into a Bold Fashion Brand | Zikoko Her",
    category: "Documentary",
    youtubeId: "YM8M5OfNUr0",
    channel: "Zikoko",
    featured: false,
  },
  {
    id: "bamboo-for-all-chioma",
    title: "BAMBOO FOR ALL - CHIOMA",
    category: "Brand",
    youtubeId: "wUXUp1hBYG8",
    channel: "Wonder",
    featured: true,
  },
  {
    id: "coca-cola-at-75-bts",
    title: "Coca cola at 75 Music production Bts",
    category: "Brand",
    youtubeId: "KIw-1IblhNI",
    channel: "Wonder",
    aspect: "4:3",
    featured: true,
  },
  {
    id: "lewis-leeanne-wedding",
    title: "LEWIS & LEEANNE WEDDING FILM HIGHLIGHT",
    category: "Wedding",
    youtubeId: "HppcaBZcEJI",
    channel: "Wonder",
    featured: true,
  },
  {
    id: "is-it-your-money-teaser",
    title: "Is It Your Money? | Chude Jideonwo's Big Budget Docu-series on Diezani Alison-Madueke | Teaser",
    category: "Documentary",
    youtubeId: "RkcNuyOBYtM",
    channel: "What Kept Me Up",
    featured: true,
  },
  {
    id: "buhler-afcott-customer-story",
    title: "Bühler West Africa: Sesame Processing in Nigeria | AFCOTT Customer Story",
    category: "Brand",
    youtubeId: "YIGPcO5LSBk",
    channel: "Bühler Group",
    featured: false,
  },
  {
    id: "unicef-sida-bayelsa-flood-response",
    title: "Striving amidst adversity/ UNICEF and SIDA's Flood Response in Bayelsa State",
    category: "Documentary",
    year: 2026,
    location: "Bayelsa, Nigeria",
    youtubeId: "rDbWQzcKO5o",
    channel: "Wonder",
    featured: false,
    tagline: "Documenting UNICEF and SIDA's flood response in Bayelsa State.",
  },
  {
    id: "daniel-vs-ekweremadu-teaser",
    title: "Chude Jideonwo’s New Docu-Series “Daniel vs Ekweremadu – The Battle Over One Man’s Kidney” Teaser",
    category: "Documentary",
    youtubeId: "23EtXLYZtTk",
    channel: "Prime Drift TV",
    featured: false,
  },
  {
    id: "afrobeat-exposed-trailer",
    title: "Afrobeat Exposed: The Good The Bad and The Ugly Official Documentary Trailer. #CynthiaMorgan",
    category: "Documentary",
    youtubeId: "J5BcbBuKldU",
    channel: "District Media Company",
    featured: false,
  },
  {
    id: "funmbi-michael-wedding",
    title: "Funmbi & Michael 5min highlight",
    category: "Wedding",
    year: 2026,
    youtubeId: "FxOFg3aFHuo",
    channel: "Wonder",
    aspect: "4:3",
    featured: false,
    tagline: "A five-minute wedding highlight film for Funmbi and Michael.",
  },
  {
    id: "hallelujah-challenge-story-ep1",
    title: "THE HALLELUJAH CHALLENGE STORY - EPISODE 1",
    category: "Documentary",
    youtubeId: "SM6EJabBE7w",
    channel: "Nathaniel Bassey Main",
    featured: false,
  },
  {
    id: "johnny-drille-touring-canada",
    title: "Johnny Drille - Touring Canada (Documentary)",
    category: "Documentary",
    year: 2026,
    location: "Canada",
    youtubeId: "YtwpcI4GR_I",
    channel: "Johnny Drille",
    featured: false,
    tagline: "Following Johnny Drille on tour across Canada.",
  },
  {
    id: "zikoko-her-yerwa-secrets",
    title: "How Fatima Babakura Built Yerwa Secrets into a Growing Beauty Brand | Zikoko Her",
    category: "Documentary",
    youtubeId: "vSkr2Dyento",
    channel: "Zikoko",
    featured: false,
  },
  {
    id: "oraimo-x-niphykeys",
    title: "ORIAMO X NIPHYKEYS",
    category: "Brand",
    youtubeId: "f2w7pLkixP4",
    channel: "Wonder",
    featured: false,
  },
  {
    id: "wheatbaker",
    title: "WHEATBAKER",
    category: "Brand",
    youtubeId: "YLbi2Iw05to",
    channel: "Wonder",
    featured: false,
  },
  {
    id: "she-rises-audrey-joe-ezigbo",
    title: "AUDREY JOE-EZIGBO TALKS ON BALANCING FAMILY, PURPOSE AND FAITH | SHE RISES",
    category: "Documentary",
    youtubeId: "JO4IwtmCcuQ",
    channel: "Gazmadu",
    // "SHE RISES 2026" — the full series this episode belongs to.
    playlistId: "PLLuGs1_kH2t2GbOvV24nuD0qGxRyTuEOG",
    featured: false,
  },
  {
    id: "gaise-baba-god-is-cooking",
    title: "GOD IS COOKING… Our ALBUM is Here!!!!⚡August 14",
    category: "Brand",
    youtubeId: "3Z2rMlPUzrc",
    channel: "Gaise Baba",
    aspect: "4:3",
    featured: false,
  },
  {
    id: "sonship-album-reveal-neon-adejo",
    title: "SONSHIP ALBUM REVEAL NEON ADEJO",
    category: "Brand",
    youtubeId: "jQMOdeF5rrs",
    channel: "Wonder",
    featured: false,
  },
  {
    id: "enya-fashion-docu",
    title: "ENYA fashion Docu",
    category: "Documentary",
    year: 2026,
    location: "Lagos, Nigeria",
    youtubeId: "UnPtJg9d_lM",
    channel: "Wonder",
    featured: false,
    tagline: "A fashion documentary telling the story behind ENYA.",
  },
  {
    id: "nxtcon24-film",
    title: "NXTCON24 FILM",
    category: "Event",
    youtubeId: "fZMaJXu3nHI",
    channel: "Wonder",
    featured: false,
  },
  {
    id: "benjay-at-90",
    title: "BENJAY AT 90 highlight",
    category: "Event",
    year: 2026,
    location: "Lagos, Nigeria",
    youtubeId: "pDRWlRCcSFc",
    channel: "Wonder",
    aspect: "4:3",
    featured: false,
    tagline: "Highlights from Benjay's 90th celebration.",
  },
  {
    id: "take-it-all-conference-2026",
    title: "Take it all Business Conference 2026",
    category: "Event",
    year: 2026,
    youtubeId: "cLQlibR7tb8",
    channel: "Wonder",
    featured: false,
    tagline: "Event highlights from the Take It All Business Conference 2026.",
  },
  {
    id: "nbc-2026-day-event",
    title: "NBC 2026 Day event",
    category: "Event",
    youtubeId: "WW9lmgRh6OU",
    channel: "Wonder",
    featured: false,
  },
  {
    id: "tsmf-grand-finale",
    title: "TSMF Grand finale",
    category: "Event",
    youtubeId: "WR4PwEznkig",
    channel: "Wonder",
    featured: false,
  },
  {
    id: "international-breweries-agm",
    title: "1 minute highlight AGM international breweriesmp4",
    displayTitle: "International Breweries AGM — 1 Minute Highlight",
    category: "Event",
    year: 2026,
    youtubeId: "tDlnj_rKVZs",
    channel: "Wonder",
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
    channel: "MiracleFeet",
    featured: false,
    tagline: "Chinecherem's journey through clubfoot treatment, told for MiracleFeet.",
  },
  // ---------------------------------------------------------------------------
  // Added without YouTube metadata (oEmbed was unreachable). Title, channel and
  // category still need to be verified on YouTube and filled in.
  // ---------------------------------------------------------------------------
  {
    id: "pending-B5rBrHWFJa0",
    title: PENDING_TITLE,
    displayTitle: "Wonder Pictures",
    youtubeId: "B5rBrHWFJa0",
    channel: PENDING_CHANNEL,
    featured: false,
  },
  {
    id: "pending-xlULLUye5I0",
    title: PENDING_TITLE,
    displayTitle: "Wonder Pictures",
    youtubeId: "xlULLUye5I0",
    channel: PENDING_CHANNEL,
    featured: false,
  },
  {
    id: "pending-hgBFzxRPd_4",
    title: PENDING_TITLE,
    displayTitle: "Wonder Pictures",
    youtubeId: "hgBFzxRPd_4",
    channel: PENDING_CHANNEL,
    featured: false,
  },
  {
    id: "pending-82tGNms-mr4",
    title: PENDING_TITLE,
    displayTitle: "Wonder Pictures",
    youtubeId: "82tGNms-mr4",
    channel: PENDING_CHANNEL,
    featured: false,
  },
  {
    id: "pending-gw-EuCuehMk",
    title: PENDING_TITLE,
    displayTitle: "Wonder Pictures",
    youtubeId: "gw-EuCuehMk",
    channel: PENDING_CHANNEL,
    featured: false,
  },
  {
    id: "pending-u3_MDqjwNs8",
    title: PENDING_TITLE,
    displayTitle: "Wonder Pictures",
    youtubeId: "u3_MDqjwNs8",
    channel: PENDING_CHANNEL,
    featured: false,
  },
  {
    id: "pending-O1bVO69DVMQ",
    title: PENDING_TITLE,
    displayTitle: "Wonder Pictures",
    youtubeId: "O1bVO69DVMQ",
    channel: PENDING_CHANNEL,
    featured: false,
  },
  {
    id: "pending-aYKaKub4tZI",
    title: PENDING_TITLE,
    displayTitle: "Wonder Pictures",
    youtubeId: "aYKaKub4tZI",
    channel: PENDING_CHANNEL,
    featured: false,
  },
  {
    id: "pending-eUV4ismY6NY",
    title: PENDING_TITLE,
    displayTitle: "Wonder Pictures",
    youtubeId: "eUV4ismY6NY",
    channel: PENDING_CHANNEL,
    featured: false,
  },
  {
    id: "pending-aoBJF0wYQTU",
    title: PENDING_TITLE,
    displayTitle: "Wonder Pictures",
    youtubeId: "aoBJF0wYQTU",
    channel: PENDING_CHANNEL,
    featured: false,
  },
  {
    id: "pending-nU3ijgOjp88",
    title: PENDING_TITLE,
    displayTitle: "Wonder Pictures",
    youtubeId: "nU3ijgOjp88",
    channel: PENDING_CHANNEL,
    featured: false,
  },
];

/** All portfolio categories, in display order. */
export const categories: Category[] = [
  "Wedding",
  "Event",
  "Brand",
  "Documentary",
];

/** Categories that currently have at least one video — used for the Work filters. */
export const activeCategories: Category[] = categories.filter((c) =>
  projects.some((p) => p.category === c),
);

export function getProject(youtubeId: string): Project | undefined {
  return projects.find((p) => p.youtubeId === youtubeId);
}

export function projectLabel(project: Project) {
  return project.displayTitle ?? project.title;
}

/**
 * Muted, looping background film that plays behind the homepage hero copy.
 * Deliberately different from the Featured Edit film so the two never repeat.
 */
export const heroBackground = {
  youtubeId: "HppcaBZcEJI",
} as const;

/**
 * Autoplaying background film for the "Featured Edit" ("Every Frame Tells A
 * Story") section further down the homepage. The client asked for it to start at 1:45.
 */
export const cinematicReel = {
  youtubeId: "YM8M5OfNUr0",
  startSeconds: 105,
} as const;
