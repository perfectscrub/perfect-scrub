import Head from "next/head";
import EasySteps from "@/components/easy-steps/EasySteps";
import HeroLandingSection from "@/components/hero-landing/HeroLandingSection";
import { residential_steps } from "@/data";

const Residential = () => {
  return (
    <>
      <Head>
        <meta
          content="We offer top notch residential cleaning. Booking a clean with us is quick and easy"
          name="description"
        />
        <title>Perfect Scrub Cleaning Services- Residential Cleaning Page</title>
      </Head>
      <HeroLandingSection
        bgImg={"residential-cleaning-image"}
        title={"We Leave your home spotless"}
        type={"Residential Cleaning"}
      />
      
      <EasySteps type={"residential"} steps={residential_steps}/>
    </>
  );
};

export default Residential;
