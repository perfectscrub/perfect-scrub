import LandingSection from "@/components/landing-section/LandingSection";
import ServicesSideMenu from "@/components/services-side-menu/ServicesSideMenu";
import Head from "next/head";
import EasySteps from "@/components/easy-steps/EasySteps";

const JanitorialServices = () => {
  return (
    <>
      <Head>
        <title>
          Perfect Scrub Cleaning Services - Janitorial Services
        </title>
        <meta
          content="Do you need a janitor for your business? We have vetted and experienced professionals that can get the job done. Call today"
          name="description"
        />
      </Head>
      <main role="main">
        {/* Start of Services Landing */}
        <LandingSection bgImg={"janitorial-bg-image"} type={"SERVICES"}  title={"Janitorial Services"} />

        {/* Start Information section*/}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              If you're in need of daily cleaning services for your facility, we
              have the perfect solution for you. Our dedicated cleaning staff
              can cater to all your cleaning requirements, exclusively assigned
              to your location.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Rest assured, our staff members are carefully selected,
              pre-screened, trained, and insured. Before they are deployed to
              your office, we conduct thorough background checks to ensure your
              peace of mind regarding the security of your business premises.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Our janitorial service providers are not only professional and
              reliable but also maintain a polished appearance by wearing
              uniforms. They prioritize courteousness and are fully committed to
              delivering the best service possible. With our dedicated cleaning
              staff, you can trust that your facility will be maintained to the
              highest standards.
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

export default JanitorialServices;