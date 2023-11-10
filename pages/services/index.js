import Image from "next/image";
import Link from 'next/link';

const Services = () => {
  return (
    <main role="main">
      {/* Start of 'Services' Landing  */}
      <section className="landing-section overflow-hidden flex flex-col md:flex-row pt-28 px-4 pl-6 lg:pt-16 lg:pl-32 bg-gradient-to-b from-blue-600 to-blue-900">
        <div className="lg:mt-20 lg:w-1/2">
          <h1 className="font-semibold text-md uppercase lg:text-2xl text-green-300 mb-8">
            Services
          </h1>
          <p className="font-semibold lg:w-5/6 text-3xl lg:text-4xl text-gray-50">
            Services you can rely on. Customer care that's the best.
          </p>
        </div>
        {/* Services Overlapping Image  */}
        <div className="h-80 mt-12 md:w-1/2 lg:h-full overflow-hidden lg:relative">
          <Image
            width={254}
            height={526}
            className="lg:absolute lg:-bottom-20 left-20 z-20 mx-auto"
            src="/images/about-us-image.png"
            alt=""
          />
          {/* Monogram Overlay  */}
          <div className="ps-monogram-image object-cover w-100 h-80 absolute hidden lg:block lg:-bottom-5 lg:right-0 opacity-10 z-10"></div>
        </div>
      </section>

      {/* Start of Services */}
      <section className="md:px-20 p-4 lg:py-18">
        <div className="grid grid-cols-3 text-gray-500 gap-6">
          <p className="col-span-3 md:col-span-1 text-2xl font-medium leading-10 lg:text-3xl text-gray-700 pt-8 pb-4">
            We provide best-in-industry services.
          </p>
          <p className="col-span-3  md:col-span-2 max-w-prose leading-loose mb-5">
            A clean and tidy environment is important to you. Whether it's your
            home, office, or commercial space, a clean space not only enhances
            the aesthetics but also contributes to a healthier and more
            productive atmosphere. We are here to make your cleaning worries
            disappear and provide you with top-notch cleaning services tailored
            to your specific needs.
          </p>
        </div>
        <div className="grid grid-cols-4 text-gray-500 gap-6 md:mb-10">
          <p className="col-span-4  md:col-start-3 md:col-span-2 text-2xl font-medium leading-10 lg:text-3xl text-gray-700 pt-8 pb-4">
            Services we provide include:
          </p>
          <div className="col-span-4  md:col-start-1 md:col-end-3 block lg:gap-x-10">
            <Image
              width={50}
              height={50}
              className="object-cover"
              src="/clean-office.jpg"
              alt="A clean office"
            />
          </div>
          {/* Service List */}
          <ul className="col-span-4 md:col-start-3 md:col-end-5 self-start list-disc cursor-pointer ml-10 pl-3 pt-5 text-lg mb-8">
            <li className="py-2 pr-1 hover:text-blue-600">
              <Link href="standard-cleaning">Standard Cleaning</Link>
            </li>
            <li className="py-2 pr-1 hover:text-blue-600">
              <Link href="deep-cleaning">Deep Cleaning</Link>
            </li>
            <li className="py-2 pr-1 hover:text-blue-600">
              <Link href="disinfecting-services">Disinfecting Services</Link>
            </li>
            <li className="py-2 pr-1 hover:text-blue-600">
              <Link href="janitorial-services">Janitorial Services</Link>
            </li>
            <li className="py-2 pr-1 hover:text-blue-600">
              <Link href="carpet-cleaning">Carpet Cleaning</Link>
            </li>
            <li className="py-2 pr-1 hover:text-blue-600">
              <Link href="washroom-cleaning-and-consumables">
                Washroom & Consumables
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-4">
          <div className="col-span-4 lg:col-span-2 m-0 lg:mt-10">
            <h3 className="font-sans text-2xl font-light mb-2 text-gray-700">
              Skilled <span className="font-bold">Professionals</span>
            </h3>
            <p className="text-gray-500 leading-loose mb-8">
              Our team of highly trained and experienced professionals takes
              pride in delivering exceptional cleaning services with attention
              to detail. We utilize the latest cleaning techniques, advanced
              equipment, and eco-friendly cleaning products to ensure
              outstanding results while prioritizing the well-being of our
              clients and the environment.
            </p>
            <h3 className="font-sans text-2xl font-light mb-2 text-gray-700">
              <span className="font-bold">Care for</span>
              our work and <span className="font-bold">our customers</span>
            </h3>
            <p className="text-gray-500 leading-loose mb-8">
              Customer satisfaction is at the heart of everything we do. We
              strive to provide you with a seamless and hassle-free experience
              from the moment you contact us to the completion of the cleaning
              service. Our friendly and dedicated customer support team is
              always available to address any questions or concerns you may
              have.
            </p>
            <p className="text-lg lg:text-2xl font-medium mb-8 text-gray-600">
              Take the stress out of cleaning and let Perfect Srcub Cleaning
              Services handle it all for you. Sit back, relax, and enjoy a
              spotless and inviting space. We are committed to delivering
              excellence in every aspect of our service, ensuring your complete
              satisfaction.
            </p>
          </div>
          {/* image */}
          <div className="col-span-4 lg:col-span-2 place-self-center w-full max-w-sm lg:block">
            <Image
              width={50}
              height={50}
              className="object-cover"
              src="/cleaning-service-team-1.jpg"
              alt="A team of cleaners smiling"
            />
          </div>
        </div>
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
              width={50}
              height={50}
              className="hidden lg:block max-h-full object-cover"
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
              <Link className="text-blue-600 hover:underline" href="../quote">
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
              A cleaning crew will be at your location on your designated start
              date
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
            href="../contact"
          >
            contact us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
