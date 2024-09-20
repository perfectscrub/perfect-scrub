import Image from "next/image";
import Head from "next/head";
import SimpleForm from "@/components/simple-form/SimpleForm";

const About = () => {
  return (
    <>
      <Head>
        <title>Perfect Scrub Cleaning Services - About us</title>
        <meta
          content="About us | Perfect Scrub Cleaning is a high quality cleaning service for the Greater Toronto Area. We specialize in office cleaning and maintenance"
          name="description"
        />
      </Head>
      <main role="main">
        {/* Start of 'About Us' Landing */}
        <section className="landing-section overflow-hidden flex flex-col md:flex-row pt-28 px-4 pl-6 lg:pt-16 lg:pl-32 bg-gradient-to-b from-blue-600 to-blue-900">
          <div className="lg:mt-20 lg:w-1/2">
            <h1 className="font-semibold text-md uppercase lg:text-2xl text-green-300 mb-8 mt-4">
              About Us
            </h1>
            <p className="font-semibold lg:w-5/6 text-3xl lg:text-4xl text-gray-50">
              We are that reliable cleaning service you can trust.
            </p>
          </div>
          {/* About Us background image */}
          <div className="h-80 mt-12 md:w-1/2 lg:h-full overflow-hidden lg:relative">
            <Image
              width={254}
              height={526}
              className="lg:absolute lg:-bottom-20 left-20 z-20 mx-auto"
              src="/about-us-image.png"
              alt=""
            />
            {/* Monogram Overlay */}
            <div className="ps-monogram-image object-cover w-100 h-80 absolute hidden lg:block lg:-bottom-5 lg:right-0 opacity-10 z-10" />
          </div>
        </section>

        {/* Start of About Us longer description/story */}
        <section className="flex flex-col items-center pt-16 lg:pt-20 pb-40 px-4 gap-4">
          <h2 className="thick_underline tracking-wider text-center font-sans font-light text-3xl lg:text-4xl uppercase text-gray-700">
            Welcome to Perfect Scrub Cleaning!
          </h2>
          <div>
            <p className="max-w-prose pt-12 pb-2 lg:px-0 text-gray-700">
              At Perfect Scrub Cleaning, we believe a clean space is a happy
              one. Based in Ontario, we aim to transform your environment into a
              haven of wellness and peace. We specialize in commercial cleaning
              services tailored to meet the unique needs of your business,
              ensuring every corner shines and promotes a healthy atmosphere for
              your employees and clients alike.
            </p>
            <p className="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
              Our dedicated team of cleaning professionals is committed to
              excellence. With meticulous attention to detail and the use of
              eco-friendly products, we not only clean but also enhance your
              workspace’s overall well-being. We understand that a clean
              environment boosts productivity and morale, and we strive to
              provide a service that exceeds your expectations.
            </p>
            <p className="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
              Whether you operate an office, or retail space, or require
              post-construction cleaning, Perfect Scrub Cleaning will make your
              space immaculate. Let us take care of the cleaning, so you can
              focus on what you do best.
            </p>
            <p className="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
              Join us in creating a healthier, happier workplace!
            </p>
          </div>
          <div className="mt-4">
            <Image
              width={600}
              height={369}
              src={"/customer-care.jpg"}
              alt="customer care people"
            />
          </div>
          {/* <div>
            <h2 className="text-3xl font-sans font-light mt-12">
              Our <span className="font-bold">Customers Matter </span>to us
            </h2>
            <p className="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
              While we know our role in our client’s business is to ensure clean
              spaces, over here at Perfect Scrub we see our contribution as
              being more than that. Clean spaces energize your staff, create a
              good ambience, and enhance your organization’s productivity.
            </p>
            <p className="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
              Working with us, we want to make sure that an organization can
              focus on the core business issues and confidently leave the
              mundane clean up to us. This is why we provide a full end-to-end
              cleaning service for all areas, making sure you don’t have to hire
              multiple contractors to get the service you need.
            </p>
            <div className="mt-6">
              <Image
                width={600}
                height={369}
                src={"/our-promise.jpg"}
                alt="group with their thumbs up"
              />
            </div>
            <h2 className="text-3xl font-sans font-light mt-12">
              Our <span className="font-bold">Promise</span>
            </h2>
            <p className="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
              We believe in providing an excellent quality of service that sets
              us apart from our competitors. Service delivery is important to
              us. Just as important is the dedicated staff that provide it. At
              Perfect Scrub Cleaning, we carry out a very stringent vetting
              process when hiring to ensure that the qualities and character of
              our staff match our core values.{" "}
            </p>
            <p className="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
              We are always looking for better ways to do what we do best and
              are constantly innovating. We aim to save money for our clients
              while meeting their cleaning needs because that never hurts.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-sans font-light mt-12">
              What we <span className="font-bold">Strive for</span>
            </h2>
            <p className="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
              In our hopes to keep growing our business and to give back to the
              community we have started to provide employment for those in our
              immediate community in Peel region which we have called home these
              last 5 years. We hope our efforts will contribute towards an even
              better and more prosperous community in the long run.
            </p>
            <p className="max-w-prose pt-10 pb-2 lg:px-0 text-gray-700">
              We look forward to a future where Perfect Scrub will become a
              household name that has earned the trust of all our customers and
              become the preferred cleaning company in Ontario.
            </p>
          </div> */}
          <p className="text-sm font-semibold text-gray-600 pt-10">
            - The Perfect Scrub Team
          </p>
        </section>

        {/* Start of Ready To Get Started Section */}
        <section className="flex flex-col md:flex-row items-center justify-around py-10 bg-gradient-to-br from-blue-400 to-blue-800">
          <p className="text-2xl font-sans font-semibold text-white">
            Ready to Get Started?
            <span className="text-base block italic tracking-widest text-center text-blue-100">
              A free, no obligation quote
            </span>
          </p>
          <SimpleForm />
        </section>
      </main>
    </>
  );
};

export default About;
