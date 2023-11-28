import LandingSection from "../landing-section/LandingSection";

const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* custom hero that depicts commercial and residential cleaning */}
      <LandingSection bgImg={"commercial-cleaning-image"} title={"A Proper Cleaner"} type={"Commercial Cleaning"}/>
    </section>
  );
};

export default HeroSection;
