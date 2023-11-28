import Image from "next/image";
import Head from "next/head";
import LandingSection from "@/components/landing-section/LandingSection";
import FacilitiesSideMenu from "@/components/facilities-side-menu/FacilitiesSideMenu";
import EasySteps from "@/components/easy-steps/EasySteps";

const OfficeBuildingsCleaning = () => {
  return (
    <>
      <Head>
        <title>Perfect Scrub Cleaning Services - Office Building Facilities</title>
        <meta
          content="Are you looking for a cleaning service for your office? Call us today and get a free quote"
          name="description"
        />
      </Head>
      <main role="main">
        {/* Start of 'Facilities' Landing */}
        <LandingSection bgImg={"office-bg-image"} type={"facilities"} title={`Office ${"\n"}Buildings`} />
        

        {/* Start Information section*/}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              At Perfect Scrub Cleaning, we recognize that a clean environment
              plays a vital role in promoting increased productivity. That's why
              we are dedicated to creating a space that fosters and supports
              your goals, ensuring that you always step into an environment that
              enhances your productivity. With our exceptional cleaning
              services, we are the ideal choice for meeting your cleaning needs.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              We understand that every client has unique requirements, which is
              why we offer the ability to tailor our services to your specific
              preferences. Unlike other cleaning services, we do not enforce
              term contracts, providing you with the flexibility to start or
              stop the service as per your specific needs.
            </p>
            <Image
              width={500}
              height={500}
              className="max-h-full lg:h-100 mr-auto object-cover mb-10"
              src="/facilities/office-interior.jpg"
              alt="Office hallway"
            />
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              In order to maintain a healthy and germ-free environment, we
              meticulously clean and disinfect all high touch areas, preventing
              the spread of germs and diseases. Our entry-level office cleaning
              service includes a comprehensive range of tasks, such as dusting
              all surfaces, sweeping, mopping, cleaning surfaces, screens, and
              laptops, emptying bins and replacing bin liners, as well as
              cleaning and disinfecting washrooms.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              If you require additional services or wish to add to them, we are
              more than happy to discuss your options. We can customize your
              existing package to better suit your specific needs, ensuring that
              you receive the highest level of satisfaction from our services.
            </p>
          </article>
          {/* Side Menu */}
          <FacilitiesSideMenu />
        </section>

        {/* Start of Small Steps */}
        <EasySteps imageOption={"man"} />
      </main>
    </>
  );
};

export default OfficeBuildingsCleaning;
