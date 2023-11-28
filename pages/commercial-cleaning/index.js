import Head from "next/head";
import Highlight from "@/components/highlight/Highlight";
import Benefits from "@/components/benefits/Benefits";
import ServicesSection from "@/components/services-section/ServicesSection";
import QuoteSection from "@/components/quote-section/QuoteSection";
import LandingSection from "@/components/landing-section/LandingSection";

const Facilities = () => {
  return (
    <>
      <Head>
        <meta content="Here you will find all the facilities that we are experienced at cleaning. Such as offices, schools, day-care. Give us a call" name="description" />
        <title>Perfect Scrub Cleaning Services- Facilities Page</title>
      </Head>
      {/* start of hero (landing) section */}
      <LandingSection bgImg={"commercial-cleaning-image"} title={"A Proper Clean"} type={"Commercial Cleaning"}/>
      {/* Highlight Service  */}
      <Highlight />
      {/* Start of Benefits Section  */}
      <Benefits />
      {/* Start of Services Section */}
      <ServicesSection />
      {/* Start of 'Ready To Get Started' Section */}
      <QuoteSection />

    </>
  )
}

export default Facilities;