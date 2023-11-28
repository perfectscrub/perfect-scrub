import ServicesSideMenu from "@/components/services-side-menu/ServicesSideMenu";
import Head from "next/head";
import LandingSection from "@/components/landing-section/LandingSection";
import EasySteps from "@/components/easy-steps/EasySteps";

const StandardCleaning = () => {
  return (
    <>
      <Head>
        <title>
          Perfect Scrub Cleaning Services - Standard Cleaning
        </title>
        <meta
          content="Our standard cleaning service is all you need to get that office space looking nice and tidy. Get a free quote today"
          name="description"
        />
      </Head>
      <main role="main">
        {/* Start of Services Landing */}
        <LandingSection bgImg={"standard-bg-image"} type={"SERVICES"}  title={"Standard Cleaning"} />
        

        {/* Start Information section */}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              Our standard commercial cleaning service encompasses a range of
              tasks to ensure a clean and sanitized environment. This includes
              dusting, sweeping, mopping, disinfecting, and sanitizing all
              washrooms. We also handle garbage removal and disposal, as well as
              thorough cleaning of all visible surfaces. You have the
              flexibility to choose the frequency of our cleaning service,
              whether it's on a daily, weekly, or monthly basis.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Additionally, we provide the option to customize your cleaning
              schedule to better suit your specific needs. When we begin our
              regular cleaning services, we offer one standard clean with a
              comprehensive deep clean.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Please see our deep cleaning service for more information on
              increasing your deep clean frequency.
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

export default StandardCleaning;
