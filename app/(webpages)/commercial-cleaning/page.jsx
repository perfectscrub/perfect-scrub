import Highlight from "@/components/highlight/Highlight";
import Benefits from "@/components/benefits/Benefits";
import ServicesSection from "@/components/services-section/ServicesSection";
import QuoteSection from "@/components/quote-section/QuoteSection";
import LandingSection from "@/components/landing-section/LandingSection";
import HomeFacilitiesList from "@/components/homeFacilitiesList/HomeFacilitiesList";

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

      <div className="md:max-w-[400px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto py-20 ">
        <h2 className="text-3xl font-bold font-sans text-center mb-10">
          Facilities & Businesses we offer services to
        </h2>

        <HomeFacilitiesList />
      </div>
      {/* Start of Services Section */}
      <ServicesSection />
      {/* Start of 'Ready To Get Started' Section */}
      <QuoteSection />
    </>
  );
};

export default Facilities;
