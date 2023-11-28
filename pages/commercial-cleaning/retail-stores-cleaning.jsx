import Head from "next/head";
import FacilitiesSideMenu from "@/components/facilities-side-menu/FacilitiesSideMenu";
import LandingSection from "@/components/landing-section/LandingSection";
import EasySteps from "@/components/easy-steps/EasySteps";

const RetailStoresCleaning = () => {
  return (
    <>
      <Head>
        <title>
          Perfect Scrub Cleaning Services - Schools and Universities
        </title>
        <meta
          content="Your customers expect the best when they come to your store. We can keep your store clean and you can keep the customers coming in"
          name="description"
        />
      </Head>

      <main role="main">
        {/* Start of 'Facilities' Landing */}
        <LandingSection
          bgImg={"retail-bg-image"}
          type={"FACILITIES"}
          title={"Retail stores & Shopping centers"}
        />

        {/* Start Information section */}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              When it comes to maintaining a pristine and inviting atmosphere in
              your retail store, Perfect Scrub Cleaning is the ultimate choice.
              With constant foot traffic entering and exiting your store, it's
              crucial to have a clean environment that enhances the customer
              service experience. Our professional cleaning services allow you
              to focus on the business of selling while we handle the clean-up
              process.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Retail stores are particularly sensitive environments with
              numerous touchpoints that require regular disinfection. At Perfect
              Scrub Cleaning, we know how important it is to maintain a safe and
              healthy space for both your staff and customers. Our service
              ensures a thorough cleaning of all surfaces and implements regular
              disinfection using Canadian approved disinfectants. This helps to
              prevent the spread of germs and ensures the well-being of everyone
              in your store.
            </p>
            {/* <Image width={500} height={500}  className="max-h-full lg:h-100 mx-auto object-cover mb-10" src=""
              alt="" /> */}
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              For the best quote and to experience our exceptional cleaning
              services tailored specifically for retail stores, don't hesitate
              to contact us today. We are dedicated to providing you with a
              clean and welcoming environment that leaves a positive impression
              on your customers.
            </p>
          </article>

          {/* Side Menu */}
          <FacilitiesSideMenu />
        </section>

        {/* Start of Small Steps */}
        <EasySteps imageOption={"worker"} />
      </main>
    </>
  );
};

export default RetailStoresCleaning;
