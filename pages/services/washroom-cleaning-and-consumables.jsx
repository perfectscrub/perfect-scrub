import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import LandingSection from "@/components/landing-section/LandingSection";
import ServicesSideMenu from "@/components/services-side-menu/ServicesSideMenu";
import EasySteps from "@/components/easy-steps/EasySteps";

const WashroomCleaningAndConsumables = () => {
  return (
    <>
      <Head>
        <title>
          Perfect Scrub Cleaning Services - Washroom Cleaning and Consumables
        </title>
        <meta
          content="With us you can be sure that your office or business washroom will be cleaned an well stocked with the needed supplies. Call and get a quote"
          name="description"
        />
      </Head>
      <main role="main">
        {/* Start of 'Services' Landing */}
        <LandingSection bgImg={"washroom-bg-image"} type={"SERVICES"}  title={"Washroom services \nand Consumables"} />

        {/* Start Information section*/}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              Maintaining a clean and hygienic washroom facility is crucial for
              any organization. At Perfect Scrub, we offer a comprehensive range
              of paper products, dispensing systems, soap, and hand wash
              products that cater to various budgets.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              We understand the importance of keeping customer and staff toilets
              clean and well-maintained to uphold high standards. Through our
              professional cleaning service, we ensure that your washrooms are
              impeccably cleaned and maintained to the highest levels of
              cleanliness and hygiene. Our team conducts regular quality
              inspections to ensure consistent service excellence.
            </p>
            <Image
              width={500}
              height={500}
              className="max-h-full lg:h-100 mx-auto object-cover mb-10"
              src="/toilet-paper-carton.jpg"
              alt="a box of toilet paper"
            />
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              We also ensure that your washrooms are well stocked with the
              necessary consumables, guaranteeing a seamless experience for your
              visitors and staff.
            </p>
          </article>
          <ServicesSideMenu />
        </section>

        {/* Start of Small Steps */}
        <EasySteps imageOption={"worker"} />
      </main>
    </>
  );
};

export default WashroomCleaningAndConsumables;
