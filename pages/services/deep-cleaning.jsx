import ServicesAside from "@/components/servicesAside/ServicesAside";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const DeepCleaning = () => {
  return (
    <>
      <Head>
        <title>Perfect Scrub Cleaning Services - Deep Cleaning Services</title>
        <meta
          content="We offer a deep clean service that is a step above the rest. We make sure the area is spotless. Call today"
          name="description"
        />
      </Head>
      <main role="main">
        {/* Start of 'Services' Landing */}
        <section className="deep-bg-image flex">
          <div className="z-20 self-center md:self-start md:pl-16">
            <h2 className="text-xs lg:text-base uppercase font-bold mb-2 lg:mb-4 text-gray-100">
              SERVICES
            </h2>
            <h1 className="font-semibold text-3xl lg:text-5xl text-gray-50 mb-8">
              Deep Cleaning
            </h1>
          </div>
          {/* Monogram Overlay */}
          <Image
            width={500}
            height={500}
            className="absolute max-w-xs z-10 opacity-30 -bottom-5 -left-10 w-3/4"
            src="/ps-monogram-white.svg"
            alt=""
          />
        </section>

        {/* Start Information section*/}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              Our enhanced cleaning service goes beyond our standard offering to
              provide a more thorough and comprehensive clean. It encompasses a
              range of additional tasks such as hand washing cabinets in the
              kitchen, cleaning windowsills, window and door trims, vacuuming
              upholstery, polishing wood surfaces, cleaning the inside of the
              microwave and refrigerator, dusting ceiling fan blades, and more.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              In addition, we prioritize the disinfection of all high touch
              points to ensure a hygienic environment. We highly recommend this
              service on a quarterly or bi-annual basis, especially for offices
              connected to warehouses or environments that are prone to the
              accumulation of dust, dirt, and grime.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              This comprehensive cleaning service is included in our full scrub
              package, which offers a complete and meticulous cleaning solution
              for your space.
            </p>
          </article>
          <ServicesAside />
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
                alt="man holding a broom"
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

export default DeepCleaning;
