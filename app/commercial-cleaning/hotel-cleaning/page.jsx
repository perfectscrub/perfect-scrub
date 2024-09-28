import Image from "next/image";
import LandingSection from "@/components/landing-section/LandingSection";
import FacilitiesSideMenu from "@/components/facilities-side-menu/FacilitiesSideMenu";
import EasySteps from "@/components/easy-steps/EasySteps";
import { commercial_steps } from "@/data";

export const metadata = {
  title: " Hotel Facilities",
  description:
    "We strive to ensure a high standard when cleaning hotels and resorts. There are many people that know and depend on us to do our job",
};

const HotelCleaning = () => {
  return (
    <main role="main">
      {/* Start of 'Facilities' Landing */}
      <LandingSection
        bgImg={"hotel-bg-image"}
        type={"facilities"}
        title={"Hotels & Resorts"}
      />

      {/* Start Information section*/}
      <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
        <article>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
            We specialize in providing tailor-made cleaning services for the
            hotel and leisure sectors, recognizing that each business has unique
            cleaning needs. At Perfect Scrub Cleaning, we understand the weight
            of maintaining cleanliness and hygiene in high-traffic areas within
            hotels, resorts, and leisure centers. Our services are designed to
            keep these areas clean and well-maintained, while also protecting
            your investments in carpets, flooring, and washroom amenities.
          </p>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            We take pride in using high-quality cleaning materials and employing
            our expertise to effectively manage and maintain your assets. Our
            goal is to ensure that your guests experience a clean and pleasant
            environment, enhancing their overall satisfaction during their stay.
          </p>
          <Image
            width={500}
            height={500}
            className="max-h-full lg:h-100 mx-auto object-cover mb-10"
            src="/facilities/hotel-room.jpg"
            alt="hands wiping a table with a cloth"
          />
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            Choosing to outsource your housekeeping services is a strategic
            decision, and we are here to make that decision a fruitful one. As
            your partner, we understand the significant role of housekeeping and
            cleanliness in shaping your organization's reputation. We offer
            customization options to tailor your cleaning package according to
            your specific requirements, providing you with the flexibility to
            adjust and optimize the service as needed.
          </p>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            If you already have an in-house cleaning crew, we can complement
            their efforts by providing monthly deep cleans of high-traffic
            areas. Our cleaning team can even wear uniforms branded with your
            logos, seamlessly integrating with your brand identity, and
            maintaining a professional appearance.
          </p>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            By choosing Perfect Scrub Cleaning, you gain a dedicated partner
            committed to delivering exceptional cleaning services and supporting
            your organization's success in the hotel and leisure sector. Contact
            us today to discuss your cleaning needs and explore how our
            customized solutions can benefit your business.
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
export default HotelCleaning;
