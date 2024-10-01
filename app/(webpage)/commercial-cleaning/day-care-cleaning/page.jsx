import LandingSection from "@/components/landing-section/LandingSection";
import FacilitiesSideMenu from "@/components/facilities-side-menu/FacilitiesSideMenu";
import EasySteps from "@/components/easy-steps/EasySteps";
import { commercial_steps } from "@/data";

export const metadata = {
  title: " DayCare Cleaning",
  description:
    "We clean day-care facilities and pre-schools. We leave the facility neat and ready for use",
};

const DayCareCleaning = () => {
  return (
    <>
      <main role="main">
        {/* Start of 'Facilities' Landing */}
        <LandingSection
          bgImg={"day-care-bg-image"}
          type={"facilities"}
          title={"Daycares & Preschools"}
        />

        {/* Start Information section*/}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              Day-cares and preschools are places where toddlers, their parents,
              staff, and school administrators experience immense joy and
              satisfaction. It is undeniable that the health and safety of these
              little children should be the top priority in such facilities,
              considering their vulnerability to germs and diseases in their
              immediate environment.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              At Perfect Scrub Cleaning, we understand the significance of
              maintaining the highest standards of cleanliness in an academic
              environment dedicated to pupils and students of all ages. That's
              why our highly efficient team of professionally trained cleaners
              is committed to ensuring a clean and safe space for children. We
              structure our cleaning services based on the frequency required to
              maintain a safe environment for the children in your facility.
            </p>
            {/* <Image width={500} height={500}  className="max-h-full lg:h-100 mx-auto object-cover mb-10" src=""
                alt=""> */}
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              To prioritize the well-being of the children, we strictly adhere
              to the use of green cleaning products. This ensures that children
              are not exposed to the potentially harmful effects of
              chemical-based cleaning products. We are committed to the job of
              providing a safe and healthy environment for children to learn,
              play, and grow.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Contact us today to initiate your cleaning program and experience
              the exceptional service we provide. We are here to support you in
              maintaining a clean and safe environment for the children in your
              care to learn and grow.
            </p>
          </article>

          {/* Side Menu */}
          <FacilitiesSideMenu />
        </section>

        {/* Start of Small Steps */}
        <EasySteps type={"commercial"} steps={commercial_steps} />
      </main>
    </>
  );
};

export default DayCareCleaning;
