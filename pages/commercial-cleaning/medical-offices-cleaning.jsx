import Head from "next/head";
import LandingSection from "@/components/landing-section/LandingSection";
import FacilitiesSideMenu from "@/components/facilities-side-menu/FacilitiesSideMenu";
import EasySteps from "@/components/easy-steps/EasySteps";
import { commercial_steps } from "@/data";

const MedicalOfficeCleaning = () => {
  return (
    <>
      <Head>
        <title>Perfect Scrub Cleaning Services - Recreational Facilities</title>
        <meta
          content="When it comes to health, you want a cleaning services that does it right. We are that service. Call now"
          name="description"
        />
      </Head>
      <main role="main">
        {/* Start of 'Facilities' Landing */}
        <LandingSection bgImg={"medical-bg-image"} type={"facilities"} title={"Medical Offices & Clinics"} />
      

        {/* Start Information section*/}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              Medical office cleaning encompasses the meticulous cleaning of
              various healthcare facilities, including clinics, doctor's
              offices, dental offices, and more. When patients and other
              visitors enter your medical space, it is crucial to create an
              environment that instills trust and reflects the elevated hygiene
              and sanitation standards of the medical profession. Maintaining a
              professional, clean, and organized medical office is essential for
              delivering the exceptional experience your guests expect.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              At Perfect Scrub Cleaning, we understand the unique requirements
              of medical office spaces. Our responsive medical cleaning service
              is specifically designed to promote a cleaner, healthier, and
              safer environment for your patients, visitors, and employees. We
              prioritize the well-being and comfort of everyone in your medical
              facility.
            </p>
            {/* <Image width={500} height={500}  className="max-h-full lg:h-100 mx-auto object-cover mb-10" src=""
                alt="" /> */}
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Our dedicated cleaning team is trained in the specialized cleaning
              protocols necessary for healthcare settings. We ensure thorough
              cleaning and disinfection of high-touch surfaces, waiting areas,
              examination rooms, restrooms, and other critical areas. By using
              industry-approved cleaning products and following strict
              guidelines, we help prevent the spread of germs and maintain a
              high standard of cleanliness.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              With our professional medical office cleaning service, you can
              trust that your facility will uphold the highest hygiene standards
              and leave a positive impression on your patients and visitors.
              Contact us today to benefit from our expertise in creating a
              clean, inviting, and safe environment in your medical office.
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

export default MedicalOfficeCleaning;
