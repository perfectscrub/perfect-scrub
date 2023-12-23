import Image from "next/image";
import Head from "next/head";
import FacilitiesSideMenu from "@/components/facilities-side-menu/FacilitiesSideMenu";
import LandingSection from "@/components/landing-section/LandingSection";
import EasySteps from "@/components/easy-steps/EasySteps";
import { commercial_steps } from "@/data";
const PostConstructionCleaning = () => {
  return (
    <>
      <Head>
        <title>Perfect Scrub Cleaning Services - Post-construction cleaning of Facilities</title>
        <meta
          content="We can clean out your newly completed project, home or business. We leave you with a clean environment to start your new stage"
          name="description"
        />
      </Head>
      <main role="main">
        {/* Start of 'Facilities' Landing */}
        <LandingSection bgImg={"construction-bg-image"} type={"facilities"} title={"Post Construction Clean"} />
        

        {/* Start Information section*/}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              Congratulations on the completion of your beautiful construction
              project! At Perfect Scrub, we comprehend the importance of
              providing a clean and spotless environment for your clients to
              enjoy. We are here to assist you with the clean-up process and
              ensure that your new construction looks impeccable, giving your
              clients the homely feeling they desire.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Our team is experienced in post-construction cleaning and knows
              the unique challenges involved in removing debris and thoroughly
              cleaning the space. We will meticulously clean all areas,
              including removing construction materials, dusting, and sanitizing
              surfaces to create a pristine and welcoming atmosphere.
            </p>
            <Image
              width={500}
              height={500}
              className="max-h-full lg:h-100 mx-auto object-cover mb-10"
              src="/facilities/apartment-building-complex.jpg"
              alt="A person cleaning exterior windows"
            />
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Our comprehensive cleaning services include washing and cleaning
              all washrooms, ensuring they are fresh and hygienic. We also pay
              close attention to detail when it comes to cleaning windows,
              doors, cabinets, and furniture, leaving no trace of dust or dirt
              behind. Our goal is to provide a thorough and detailed cleaning
              service that exceeds your expectations.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              At Perfect Scrub, we understand that every construction project is
              unique. Therefore, we offer flexibility in our services and can
              customize our cleaning approach to suit your specific needs.
              Whether you require additional services or have specific cleaning
              requirements, we are here to accommodate your requests and ensure
              your satisfaction.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              If you would like to discuss your post-construction cleaning needs
              or schedule a walk-through of your newly constructed space, please
              don't hesitate to contact us. We are eager to help you create a
              clean and inviting environment for your clients to enjoy.
            </p>
          </article>
          {/* Side Menu */}
          <FacilitiesSideMenu />
        </section>

        {/* Start of Small Steps */}
        <EasySteps type={"commercial"} steps={commercial_steps}/>
      </main>
    </>
  );
};

export default PostConstructionCleaning;
