import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import FacilitiesSideMenu from "@/components/facilities-side-menu/FacilitiesSideMenu";
import LandingSection from "@/components/landing-section/LandingSection";
const PostConstructionCleaning = () => {
  return (
    <>
      <Head>
        <title>Perfect Scrub Cleaning Services - Post-construction cleaning of Facilities</title>
        <meta
          content="We can clean out your newly completed project, home or business. We leave you with a clean environment to start your new stage"
          name="description"
        />
      </Head>
      <main role="main">
        {/* Start of 'Facilities' Landing */}
        <LandingSection bgImg={"construction-bg-image"} type={"facilities"} title={"Post Construction Clean"} />
        

        {/* Start Information section*/}
        <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
          <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
              Congratulations on the completion of your beautiful construction
              project! At Perfect Scrub, we comprehend the importance of
              providing a clean and spotless environment for your clients to
              enjoy. We are here to assist you with the clean-up process and
              ensure that your new construction looks impeccable, giving your
              clients the homely feeling they desire.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Our team is experienced in post-construction cleaning and knows
              the unique challenges involved in removing debris and thoroughly
              cleaning the space. We will meticulously clean all areas,
              including removing construction materials, dusting, and sanitizing
              surfaces to create a pristine and welcoming atmosphere.
            </p>
            <Image
              width={500}
              height={500}
              className="max-h-full lg:h-100 mx-auto object-cover mb-10"
              src="/facilities/apartment-building-complex.jpg"
              alt="A person cleaning exterior windows"
            />
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              Our comprehensive cleaning services include washing and cleaning
              all washrooms, ensuring they are fresh and hygienic. We also pay
              close attention to detail when it comes to cleaning windows,
              doors, cabinets, and furniture, leaving no trace of dust or dirt
              behind. Our goal is to provide a thorough and detailed cleaning
              service that exceeds your expectations.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              At Perfect Scrub, we understand that every construction project is
              unique. Therefore, we offer flexibility in our services and can
              customize our cleaning approach to suit your specific needs.
              Whether you require additional services or have specific cleaning
              requirements, we are here to accommodate your requests and ensure
              your satisfaction.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
              If you would like to discuss your post-construction cleaning needs
              or schedule a walk-through of your newly constructed space, please
              don't hesitate to contact us. We are eager to help you create a
              clean and inviting environment for your clients to enjoy.
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

export default PostConstructionCleaning;
