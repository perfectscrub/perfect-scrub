import HomeAboutSection from "@/components/home-about/HomeAbout";
import Highlight from "@/components/highlight/Highlight";
import Benefits from "@/components/benefits/Benefits";
import Testimonials from "@/components/testimonials/Testimonials";
import ServicesSection from "@/components/services-section/ServicesSection";
import LocationsSection from "@/components/locations-section/LocationsSection";
import QuoteSection from "@/components/quote-section/QuoteSection";
import HeroSection from "@/components/hero-section/HeroSection";

export const metadata = {
  title:
    "Perfect Scrub Cleaning - High quality Professional Cleaning for offices and commercial spaces",
  description:
    "We operate in the greater toronto area and we specialize in the cleaning of Offices, Schools and Universities, Event Centers, and other facilities",
};

export default function Home() {
  return (
    <>
      {/* start of hero (landing) section */}
      <HeroSection />
      {/* Highlight Service  */}
      <Highlight />
      {/* Locations we serve */}
      <LocationsSection />
      {/* Start of Benefits Section  */}
      <Benefits />
      {/* Start of Services Section */}
      <ServicesSection />
      {/* About  */}
      <HomeAboutSection />
      {/* Start of Testimonials Section */}
      <Testimonials />
      {/* Start of 'Ready To Get Started' Section */}
      <QuoteSection />
    </>
  );
}
