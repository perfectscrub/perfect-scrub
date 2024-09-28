import Highlight from "@/components/highlight/Highlight";
import Benefits from "@/components/benefits/Benefits";
import ServicesSection from "@/components/services-section/ServicesSection";
import QuoteSection from "@/components/quote-section/QuoteSection";
import LandingSection from "@/components/landing-section/LandingSection";

export const metadata = {
  title: " Facilities Page",
  description:
    "Blog | Some of the facilities that we are experienced at cleaning. Such as offices, schools, day-care. Give us a call",
};

const Facilities = () => {
  return (
    <>
      {/* start of hero (landing) section */}
      <LandingSection
        bgImg={"commercial-cleaning-image"}
        title={"A Proper Clean"}
        type={"Commercial Cleaning"}
      />
      {/* Highlight Service  */}
      <Highlight />
      {/* Start of Benefits Section  */}
      <Benefits />
      {/* Start of Services Section */}
      <ServicesSection />
      {/* Start of 'Ready To Get Started' Section */}
      <QuoteSection />
    </>
  );
};

export default Facilities;
