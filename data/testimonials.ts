export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  project: string;
  /* REPLACE: add actual client photo paths */
  avatar?: string; // e.g. /images/clients/sarah.jpg
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-james",
    name: "Sarah & James Whitmore",
    role: "Wedding Clients",
    project: "Tuscany Wedding, 2024",
    avatar: "/images/clients/client-1.jpg",
    quote:
      "We've watched our film over a hundred times. I don't think any other footage has ever made me cry the way this does — not because it's sad, but because it's so completely true to how that day felt. You captured something I didn't even know was there.",
  },
  {
    id: "nova-brand",
    name: "Maya Chen",
    role: "Creative Director, Nova",
    project: "Brand Campaign, 2024",
    avatar: "/images/clients/client-2.jpg",
    quote:
      "Working with DT Films was unlike any production partner we'd worked with before. They didn't just execute a brief — they pushed us to think deeper about our story, and the result was a campaign that genuinely stopped people scrolling.",
  },
  {
    id: "atlas-event",
    name: "Marcus Reid",
    role: "Head of Events, Atlas Group",
    project: "Annual Gala, 2023",
    avatar: "/images/clients/client-3.jpg",
    quote:
      "The edit they delivered the morning after the gala was extraordinary. Fast, beautiful, emotional. Our board watched it in silence — and that said everything. We won't use anyone else for events going forward.",
  },
];
