import EasySteps from "@/components/easy-steps/EasySteps";
import HeroLandingSection from "@/components/hero-landing/HeroLandingSection";
import { residential_steps } from "@/utils/data";

export const metadata = {
  title: " Residential Cleaning Page",
  description:
    "We offer top notch residential cleaning. Booking a clean with us is quick and easy",
};

const Residential = () => {
  return (
    <>
      <HeroLandingSection
        bgImg={"residential-cleaning-image"}
        title={"We Leave your home spotless"}
        type={"Residential Cleaning"}
      />

      <EasySteps type={"residential"} steps={residential_steps} />
    </>
  );
};

export default Residential;
