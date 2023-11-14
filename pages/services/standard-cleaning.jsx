import ServicesAside from "@/components/servicesAside/ServicesAside";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

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
        <section className="standard-bg-image flex">
          <div className="z-20 self-center md:self-start md:pl-16">
            <h2 className="text-xs lg:text-base uppercase font-bold mb-2 lg:mb-4 text-gray-100">
              SERVICES
            </h2>
            <h1 className="font-semibold text-3xl lg:text-5xl text-gray-50 mb-8">
              Standard Cleaning
            </h1>
          </div>
          {/* Monogram Overlay */}
          <Image
            width={300}
            height={300}
            className="absolute max-w-xs z-10 opacity-30 -bottom-5 -left-10 w-3/4"
            src="/ps-monogram-white.svg"
            alt=""
          />
        </section>

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
                width={300}
                height={300}
                className="max-h-full object-cover"
                src="/woman-with-spray-bottle.png"
                alt="woman holding spray bottle"
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

export default StandardCleaning;
