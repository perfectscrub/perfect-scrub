import ServicesSideMenu from "@/components/services-side-menu/ServicesSideMenu";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import LandingSection from "@/components/landing-section/LandingSection";
import EasySteps from "@/components/easy-steps/EasySteps";

const DisinfectingServices = () => {
  return (
    <>
      <Head>
        <title>Perfect Scrub Cleaning Services - Disinfecting Services</title>
        <meta
          content="We can disinfect your business, office, warehouse of germs, bacteria, viruses. Call us to get a free quote "
          name="description"
        />
      </Head>
      <main role="main">
        {/* Start of 'Services' Landing */}
        <LandingSection bgImg={"disinfecting-bg-image"} type={"SERVICES"}  title={"Disinfecting Services"} />
        

        {/* Start Information section*/}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              To ensure effective disinfection, we prioritize thorough cleaning
              to eliminate dust and dirt from your facility beforehand. Our
              disinfecting service goes beyond regular cleaning, specifically
              targeting areas that may be contaminated to prevent outbreaks.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              We meticulously disinfect high traffic or high touch areas,
              including tables, doorknobs, computer screens and keyboards,
              workstations, equipment, restrooms, lunchroom/lunch areas, as well
              as wiping down baseboards and floors.{" "}
            </p>
            <Image
              width={800}
              height={600}
              className="max-h-full lg:h-100 mx-auto object-cover mb-10"
              src="/disinfect.jpg"
              alt="a box of toilet paper"
            />
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Rest assured that we exclusively employ Canada Health approved
              cleaning products for all our disinfecting services.
            </p>
          </article>
          <ServicesSideMenu />
        </section>

        {/* Start of Small Steps */}
        <EasySteps imageOption={"man"} />
      </main>
    </>
  );
};

export default DisinfectingServices;
