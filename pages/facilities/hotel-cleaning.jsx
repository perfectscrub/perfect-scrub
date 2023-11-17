import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import LandingSection from "@/components/landing-section/LandingSection";
import FacilitiesSideMenu from "@/components/facilities-side-menu/FacilitiesSideMenu";

const HotelCleaning = () => {
  return (
    <>
      <Head>
        <title>Perfect Scrub Cleaning Services- Hotel Facilities</title>
        <meta
          content="We strive to ensure a high standard when cleaning hotels and resorts. There are many people that know and depend on us to do our job"
          name="description"
        />
      </Head>

      <main role="main">
        {/* Start of 'Facilities' Landing */}
        <LandingSection bgImg={"hotel-bg-image"} type={"facilities"} title={"Hotels & Resorts"} />
        

        {/* Start Information section*/}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              We specialize in providing tailor-made cleaning services for the
              hotel and leisure sectors, recognizing that each business has
              unique cleaning needs. At Perfect Scrub Cleaning, we understand
              the weight of maintaining cleanliness and hygiene in high-traffic
              areas within hotels, resorts, and leisure centers. Our services
              are designed to keep these areas clean and well-maintained, while
              also protecting your investments in carpets, flooring, and
              washroom amenities.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              We take pride in using high-quality cleaning materials and
              employing our expertise to effectively manage and maintain your
              assets. Our goal is to ensure that your guests experience a clean
              and pleasant environment, enhancing their overall satisfaction
              during their stay.
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
              your partner, we understand the significant role of housekeeping
              and cleanliness in shaping your organization's reputation. We
              offer customization options to tailor your cleaning package
              according to your specific requirements, providing you with the
              flexibility to adjust and optimize the service as needed.
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
              committed to delivering exceptional cleaning services and
              supporting your organization's success in the hotel and leisure
              sector. Contact us today to discuss your cleaning needs and
              explore how our customized solutions can benefit your business.
            </p>
          </article>

          {/* Side Menu */}
          <FacilitiesSideMenu />
        </section>

        {/* Start of Small Steps */}
        <section className="flex flex-col px-4 py-16 justify-center bg-white">
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <h2 className="font-semibold text-2xl lg:text-4xl text-gray-700 px-1 py-5 mb-8 border-t-4 rounded-xl md:ml-8 self-center  border-b-8 border-green-500">
              Getting your <br />
              Perfect Scrub Clean <br /> is as EASY AS:
              {/* <span className="text-blue-600">1-2-3</span> */}
            </h2>
            <div className="lg:block mb-0 lg:-mb-16 w-1/2 self-center">
              <Image
                width={500}
                height={500}
                className="object-cover"
                src="/man-holding-brush.png"
                alt="man ready to clean"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row p-6 lg:px-4 justify-center text-center bg-white">
            <div className="w-full md:w-72 border-8 rounded-2xl border-blue-600 px-2 py-6 mb-8 lg:ml-10 font-plexSerif font-semibold flex flex-col lg:mb-16 pb-2 ring-4 ring-blue-300 ring-inset">
              <span className="text-2xl lg:text-4xl lg:mr-2 mb-4 text-green-500">
                #1
              </span>
              <span className="text-xl lg:text-2xl px-2 pb-8 lg:mr-2 text-gray-700">
                Use our
                <Link className="text-blue-600 hover:underline" href="/quote">
                  {" "}
                  get a quote
                </Link>
                form to inform us about your cleaning needs
              </span>
            </div>
            <div className="w-full md:w-72 border-8 rounded-2xl border-blue-600 px-2 py-6 mb-8 lg:ml-10 font-plexSerif font-semibold flex flex-col lg:mb-16 pb-2 ring-4 ring-blue-300 ring-inset">
              <span className="text-2xl lg:text-4xl lg:mr-2 mb-4 text-green-500">
                #2
              </span>
              <span className="text-xl lg:text-2xl px-2 pb-8 lg:mr-2 text-gray-700">
                We will get in touch with you and process your cleaning request
              </span>
            </div>
            <div className="w-full md:w-72 border-8 rounded-2xl border-blue-600 px-2 py-6 mb-8 lg:ml-10 font-plexSerif font-semibold flex flex-col lg:mb-16 pb-2 ring-4 ring-blue-300 ring-inset">
              <span className="text-2xl lg:text-4xl lg:mr-2 mb-4 text-green-500">
                #3
              </span>
              <span className="text-xl lg:text-2xl px-2 pb-8 lg:mr-2 text-gray-700">
                A cleaning crew will be at your location on your designated
                start date
              </span>
            </div>
          </div>
          <div className="py-6 mb-8 font-sans font-bold grid grid-col-1 lg:mb-20 pb-10">
            {/* <h2 className="font-sans text-4xl">A job well done is what we stand for</h2> */}
            <h2 className="font-sans text-4xl text-center mb-6">
              A job well done. That is our promise to you.
            </h2>
            <p className="font-plexSerif text-2xl lg:text-3xl lg:mr-2 mb-10 text-green-500 text-center">
              Our 100% SATISFACTION GUARANTEE
            </p>
            <p className="text-lg lg:text-2xl mb-20 m-auto text-gray-700 text-center">
              If you are not totally satisfied with our performance - we will
              clean it again, free.
            </p>
            <Link
              className="text-2xl py-4 px-8 m-auto text-white bg-green-600 hover:shadow-xl text-center no-underline 
              uppercase border-2 border-green-600 hover:bg-green-500 hover:border-green-500 scale-100 hover:scale-105 self-center cursor-pointer"
              href="/contact"
            >
              contact us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};
export default HotelCleaning;
