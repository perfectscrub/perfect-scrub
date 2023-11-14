import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const RetailStoresCleaning = () => {
  return (
    <>
      <Head>
        <title>
          Perfect Scrub Cleaning Services - Schools and Universities
        </title>
        <meta
          content="Your customers expect the best when they come to your store. We can keep your store clean and you can keep the customers coming in"
          name="description"
        />
      </Head>

      <main role="main">
        {/* Start of 'Facilities' Landing */}
        <section className="retail-bg-image flex">
          <div className="z-20 self-center md:self-start md:pl-16">
            <h2 className="text-xs lg:text-base uppercase font-bold mb-2 lg:mb-4 text-gray-100">
              FACILITIES
            </h2>
            <h1 className="font-semibold text-3xl lg:text-5xl text-gray-50 mb-8">
              Retail stores and <br />
              Shopping centers
            </h1>
            {/* Monogram Overlay */}
            <Image
              width={500}
              height={500}
              className="absolute max-w-xs z-10 opacity-30 -bottom-5 -left-10 w-3/4"
              src="/ps-monogram-white.svg"
              alt=""
            />
          </div>
        </section>

        {/* Start Information section */}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              When it comes to maintaining a pristine and inviting atmosphere in
              your retail store, Perfect Scrub Cleaning is the ultimate choice.
              With constant foot traffic entering and exiting your store, it's
              crucial to have a clean environment that enhances the customer
              service experience. Our professional cleaning services allow you
              to focus on the business of selling while we handle the clean-up
              process.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Retail stores are particularly sensitive environments with
              numerous touchpoints that require regular disinfection. At Perfect
              Scrub Cleaning, we know how important it is to maintain a safe and
              healthy space for both your staff and customers. Our service
              ensures a thorough cleaning of all surfaces and implements regular
              disinfection using Canadian approved disinfectants. This helps to
              prevent the spread of germs and ensures the well-being of everyone
              in your store.
            </p>
            {/* <Image width={500} height={500}  className="max-h-full lg:h-100 mx-auto object-cover mb-10" src=""
              alt="" /> */}
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              For the best quote and to experience our exceptional cleaning
              services tailored specifically for retail stores, don't hesitate
              to contact us today. We are dedicated to providing you with a
              clean and welcoming environment that leaves a positive impression
              on your customers.
            </p>
          </article>
          <aside className="hidden lg:block">
            <h3 className="font-sans text-2xl mb-4">
              Other <span className="font-bold">Facilities</span> we service:
            </h3>
            <ul className="pl-3 text-lg">
              <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
                <Link href="office-buildings-cleaning">Office Buildings</Link>
              </li>
              <li className="active-side-menu py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
                <Link href="retail-stores-cleaning">
                  Retail stores and shopping centers
                </Link>
              </li>
              <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
                <Link href="day-care-cleaning">Day Care and Preschool</Link>
              </li>
              <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
                <Link href="school-cleaning">Schools and universities</Link>
              </li>
              <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
                <Link href="medical-office-cleaning">
                  Medical Offices and clinics
                </Link>
              </li>
              <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
                <Link href="hotel-cleaning">Hotels and resorts</Link>
              </li>
              <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
                <Link href="recreational-facilities-cleaning">
                  Sports and recreational facilities
                </Link>
              </li>
              <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
                <Link href="post-construction-cleaning">
                  Post Construction Clean up
                </Link>
              </li>
            </ul>
          </aside>
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

export default RetailStoresCleaning;
