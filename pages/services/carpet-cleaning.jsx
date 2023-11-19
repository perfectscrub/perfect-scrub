import LandingSection from "@/components/landing-section/LandingSection";
import ServicesSideMenu from "@/components/services-side-menu/ServicesSideMenu";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import EasySteps from "@/components/easy-steps/EasySteps";

const CarpetCleaning = () => {
  return (
    <>
      <Head>
        <title>
          Perfect Scrub Cleaning Services - Frequently asked Questions
        </title>
        <meta
          content="Have a carpet that needs cleaning? Call us today to get a quote"
          name="description"
        />
      </Head>
      <main role="main">
        {/* Start of 'Services' Landing */}
        <LandingSection bgImg={"carpet-bg-image"} type={"SERVICES"}  title={"Carpet Cleaning"} />
        

        {/* Start Information section*/}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              Did you know that over 70% of debris and dirt finds its way into
              spaces through carpets? This unwanted dirt buildup not only
              creates an unattractive appearance but can also pose potential
              health risks. At our company, we understand that you require more
              than just an average commercial carpet cleaning service. We
              recognize that clean carpets play a vital role in creating an
              appealing, safe, and healthy workspace environment. Our commitment
              goes beyond mere cleaning – we aim to help our clients protect
              their carpets and extend their lifespan.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Through our high-quality service, we offer thorough shampoo
              cleaning that effectively eliminates dirt, dust, and allergens
              from your carpet surfaces. By regularly restoring your carpets, we
              not only enhance their appearance but also contribute to a
              healthier indoor environment. We collaborate closely with your
              team to assess your spaces and identify areas with high foot
              traffic, ensuring that our carpet cleaning is tailored to your
              specific needs.
            </p>
            <Image
              width={500}
              height={500}
              className="max-h-full lg:h-100 mx-auto object-cover mb-10"
              src="/carpet-cleaner-2.jpg"
              alt="man cleaning a carpet"
            />
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Moreover, we prioritize the use of products that are both safe for
              your carpets and environmentally friendly, minimizing any
              potential damage. With our comprehensive carpet cleaning service,
              you can enjoy the benefits of clean, well-maintained carpets that
              enhance the overall ambiance of your workspace while ensuring a
              healthy and inviting atmosphere.
            </p>
          </article>
          <ServicesSideMenu />
        </section>

        {/* Start of Small Steps */}
        <EasySteps imageOption={"woman"}/>
      </main>
    </>
  );
};

export default CarpetCleaning;
