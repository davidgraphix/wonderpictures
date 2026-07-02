import Hero from "@/components/home/Hero";
import FeaturedFilms from "@/components/home/FeaturedFilms";
import FilmTicker from "@/components/ui/FilmTicker";
import Storytelling from "@/components/home/Storytelling";
import CinematicReel from "@/components/home/CinematicReel";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import BookingCTA from "@/components/home/BookingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedFilms />
      <FilmTicker />
      {/* <Storytelling /> */}
      <CinematicReel />
      <FilmTicker reverse speed="fast" />
      <ServicesSection />
      <ProcessSection />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
