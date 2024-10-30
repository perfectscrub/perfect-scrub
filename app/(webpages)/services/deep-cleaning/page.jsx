import ServicesSideMenu from "@/components/services-side-menu/ServicesSideMenu";
import LandingSection from "@/components/landing-section/LandingSection";
import EasySteps from "@/components/easy-steps/EasySteps";
import { commercial_steps } from "@/utils/data";

export const metadata = {
  title: " Deep Cleaning Services",
  description:
    "We offer a deep clean service that is a step above the rest. We make sure the area is spotless. Call today",
};

const DeepCleaning = () => {
  return (
    <main role="main">
      {/* Start of 'Services' Landing */}
      <LandingSection
        bgImg={"deep-bg-image"}
        type={"SERVICES"}
        title={"Deep Cleaning"}
      />

      {/* Start Information section*/}
      <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
        <article>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
            Our enhanced cleaning service goes beyond our standard offering to
            provide a more thorough and comprehensive clean. It encompasses a
            range of additional tasks such as hand washing cabinets in the
            kitchen, cleaning windowsills, window and door trims, vacuuming
            upholstery, polishing wood surfaces, cleaning the inside of the
            microwave and refrigerator, dusting ceiling fan blades, and more.
          </p>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            In addition, we prioritize the disinfection of all high touch points
            to ensure a hygienic environment. We highly recommend this service
            on a quarterly or bi-annual basis, especially for offices connected
            to warehouses or environments that are prone to the accumulation of
            dust, dirt, and grime.
          </p>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            This comprehensive cleaning service is included in our full scrub
            package, which offers a complete and meticulous cleaning solution
            for your space.
          </p>
        </article>
        <ServicesSideMenu />
      </section>

      {/* Start of Small Steps */}
      <EasySteps type={"commercial"} steps={commercial_steps} />
    </main>
  );
};

export default DeepCleaning;
