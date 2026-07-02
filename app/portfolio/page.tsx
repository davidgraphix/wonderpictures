import type { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Films",
  description: "A curated collection of cinematic work — weddings, brands, events, and more.",
};

export default function PortfolioPage() {
  return <PortfolioGrid />;
}
