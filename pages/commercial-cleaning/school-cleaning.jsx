import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import FacilitiesSideMenu from "@/components/facilities-side-menu/FacilitiesSideMenu";
import LandingSection from "@/components/landing-section/LandingSection";
import EasySteps from "@/components/easy-steps/EasySteps";
import { commercial_steps } from "@/data";

const SchoolCleaning = () => {
  return (
    <>
      <Head>
        <title>
          Perfect Scrub Cleaning Services - Schools and Universities Facilities
        </title>
        <meta
          content="We clean schools and high institutions of learning like universities, colleges. Call us today and get a quote"
          name="description"
        />
      </Head>
      <main role="main">
        {/* Start of 'Facilities' Landing */}
        <LandingSection bgImg={"school-bg-image"} type={"facilities"} title={"Schools & Universities"} />
        

        {/* Start Information section*/}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              Academic spaces where students and teachers gather provide an
              excellent learning environment, but they also present challenges
              in terms of maintaining cleanliness and sanitation. The close
              proximity and frequent interaction among individuals create
              opportunities for the spread of germs, making cross-contamination
              a significant concern.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              At Perfect Scrub Cleaning, we understand the importance of
              creating a safe and healthy environment for academic staff and
              students. Our dedicated school cleaning services prioritize the
              well-being of everyone in the educational setting. We take
              proactive measures to ensure that your team is kept safe by
              performing multiple disinfecting services on a daily basis.
            </p>
            <Image
              width={500}
              height={500}
              className="max-h-full lg:h-100 mx-auto object-cover mb-10"
              src="/facilities/school.jpg"
              alt="School classroom"
            />
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              By implementing thorough disinfection protocols, we minimize the
              risk of germs spreading and help maintain the health of both staff
              and students. Our goal is to provide a clean and sanitary
              environment that supports optimal learning and ensures the
              well-being of everyone in the academic community.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              With Perfect Scrub School cleaning services, you can have peace of
              mind knowing that your academic space is being meticulously
              cleaned and disinfected. Contact us today to ensure that everyone,
              from staff to students, remains healthy and can thrive in a clean
              and safe learning environment.
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

export default SchoolCleaning;
