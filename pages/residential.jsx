import Head from "next/head";
import EasySteps from "@/components/easy-steps/EasySteps";
import ServicesSection from "@/components/services-section/ServicesSection";
import React from "react";
import HeroLandingSection from "@/components/hero-landing/HeroLandingSection";

const Residential = () => {
  return (
    <>
      <Head>
        <meta
          content="We offer top notch residential cleaning. Booking a clean with us is quick and easy"
          name="description"
        />
        <title>Perfect Scrub Cleaning Services- Facilities Page</title>
      </Head>
      <HeroLandingSection
        bgImg={"residential-cleaning-image"}
        title={"We Leave your home spotless"}
        type={"Residential Cleaning"}
      />
      {/* Booking */}
      
      {/* explain the service */}
      <ServicesSection />
      {/* contact */}
      <EasySteps imageOption={"man"} />
    </>
  );
};

export default Residential;
