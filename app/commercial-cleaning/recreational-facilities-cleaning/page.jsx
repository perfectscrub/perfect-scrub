import Image from "next/image";
import FacilitiesSideMenu from "@/components/facilities-side-menu/FacilitiesSideMenu";
import LandingSection from "@/components/landing-section/LandingSection";
import EasySteps from "@/components/easy-steps/EasySteps";
import { commercial_steps } from "@/data";

export const metadata = {
  title: " Recreational Facilities",
  description:
    "We are able to clean bowling alleys, arcades, and other recreational spots indoor and outdoor with easy and attention to detail.",
};

const RecreationalFacilitiesCleaning = () => {
  return (
    <main role="main">
      {/* Start of 'Facilities' Landing */}
      <LandingSection
        bgImg={"recreational-bg-image"}
        type={"facilities"}
        title={"Sports & Recreational Facilities"}
      />

      {/* Start Information section*/}
      <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
        <article>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
            Absolutely! At Perfect Scrub, we understand the importance of
            maintaining clean and sanitary environments in various types of
            establishments, including local gyms, yoga studios, and bowling
            alleys. We take pride in delivering exceptional cleaning services
            that meet your specific needs, ensuring that your venues remain
            clean both before and after use.
          </p>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            We pay meticulous attention to quality and understand that these
            spaces require thorough cleaning to provide a pleasant and safe
            experience for your patrons. Our dedicated service teams are trained
            in deep cleaning techniques, ensuring that all areas, including
            high-touch surfaces, floors, and equipment, receive the attention
            they deserve.
          </p>
          <Image
            width={500}
            height={500}
            className="max-h-full lg:h-100 mx-auto object-cover mb-10"
            src="/facilities/gym-cleaner.jpg"
            alt="person about to clean a gym"
          />
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            Whether it's sanitizing exercise machines and yoga mats, maintaining
            cleanliness in locker rooms and shower facilities, or ensuring the
            lanes and seating areas in a bowling alley are pristine, we have the
            expertise to handle the unique cleaning requirements of your
            establishment.
          </p>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            By choosing Perfect Scrub as your preferred service provider, you
            can trust that we will go above and beyond to exceed your
            expectations. Our commitment to quality and customer satisfaction
            ensures that your venues are consistently clean, creating a positive
            and hygienic environment for your customers.
          </p>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            If you have specific cleaning needs or would like to discuss how our
            services can benefit your gym, yoga studio, or bowling alley, please
            feel free to reach out to us. We would be more than happy to assist
            you and provide a free walk-through of your space to determine the
            best cleaning solutions for your establishment.
          </p>
        </article>

        {/* Side Menu */}
        <FacilitiesSideMenu />
      </section>

      {/* Start of Small Steps */}
      <EasySteps type={"commercial"} steps={commercial_steps} />
    </main>
  );
};

export default RecreationalFacilitiesCleaning;
