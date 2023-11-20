import EasySteps from "@/components/easy-steps/EasySteps";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Facilities = () => {
  return (
    <>
      <Head>
        <meta content="Here you will find all the faciilities that we are experienced at cleaning. SUch as offices, schhools, day-care. Check it out and give us a call" name="description" />
        <title>Perfect Scrub Cleaning Services- Facilities Page</title>
      </Head>
      <main role="main">
        {/* Start of 'Facilities' Landing */}
        <section
          className="landing-section overflow-hidden flex flex-col md:flex-row pt-28 px-4 pl-6 lg:pt-16 lg:pl-32 bg-gradient-to-b from-blue-600 to-blue-900">
          <div className="lg:mt-20 lg:w-1/2">
            <h1 className="font-semibold text-md uppercase lg:text-2xl text-green-300 mb-8 mt-4">Facilities</h1>
            <p className="font-semibold lg:w-5/6 text-3xl lg:text-4xl text-gray-50">Have confidence that you have the best team in
              your corner.</p>
          </div>
          {/* Facilities Overlapping Image */}
          <div className="h-80 mt-12 md:w-1/2 lg:h-full overflow-hidden lg:relative">
            <Image width={254} height={526} priority className="lg:absolute lg:-bottom-20 left-20 z-20 mx-auto" src="/about-us-image.png" alt="" />
            {/* Monogram Overlay */}
            <div className="ps-monogram-image object-cover w-100 h-80 absolute hidden lg:block lg:-bottom-5 lg:right-0 opacity-10 z-10" />
          </div>
        </section>


        {/* Start of Facilites*/}
        <section className="md:px-20 p-4 lg:py-18">
          <div className="flex flex-col gap-y-10 pt-10">
            <div className="max-w-prose font-plexSerif font-bold lg:mb-14">
              <p className="text-2xl leading-10 lg:text-3xl lg:mr-40 text-gray-700">We provide our services to a wide range of
                facilities and establishments.</p>
            </div>
            <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-1 gap-10">
              <div className="place-self-center lg:block">
                <Image width={800} height={600} className="object-cover" src="/facilities/mall-interior.jpg" alt="A warehouse" />
              </div>

              <div className="flex flex-col-reverse">
                <div className="m-0 lg:mt-10">
                  <p className="text-gray-500 leading-loose mb-5">
                    As a business owner, you put a lot of work in to building your business. At Perfect Scrub Cleaning we know
                    that your facility is important to you. We specialize in the cleaning and maintenance of these facilities.
                  </p>

                </div>
                {/* <div className="hidden lg:block lg:gap-x-10">
                  <Image width={500} height={500} className="object-cover" src="/facilities/bowling-alley.jpg" alt="A bowling alley" />
                </div> */}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg lg:text-2xl font-medium my-8 text-gray-600">
              Some of the facilities we serve include:
            </h2>
            <ul
              className="facilities grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-semibold gap-y-5 gap-x-3 lg:px-10 text-blue-800 lg:mt-20">
              <li className="facility-list-item">
                <Link className="facility-list-link" href="/facilities/office-buildings-cleaning">
                  <span>
                    <Image width={40} height={40} className="" src="/office-building.svg" alt="" />
                  </span>
                  <span>Office buildings</span>
                </Link>
              </li>
              <li className="facility-list-item">
                <Link className="facility-list-link" href="/facilities/retail-stores-cleaning">
                  <span>
                    <Image width={40} height={40} className="" src="/supermarket.svg" alt="" />
                  </span>
                  <span>Retail stores and shopping centers</span>
                </Link>
              </li>
              <li className="facility-list-item">
                <Link className="facility-list-link" href="/facilities/day-care-cleaning">
                  <span>
                    <Image width={50} height={50} className="w-10 h-auto" src="/day-care-center.svg" alt="" />
                  </span>
                  <span>Day Care and Preschool</span>
                </Link>
              </li>
              <li className="facility-list-item">
                <Link className="facility-list-link" href="/facilities/school-cleaning">
                  <span>
                    <Image width={50} height={50} className="w-10 h-auto" src="/university.svg" alt="" />
                  </span>
                  <span>Schools and universities</span>
                </Link>
              </li>
              <li className="facility-list-item">
                <Link className="facility-list-link" href="/facilities/medical-office-cleaning">
                  <span>
                    <Image width={50} height={50} className="w-10 h-auto" src="/hospital.svg" alt="" />
                  </span>
                  <span>Medical Offices and clinics</span>
                </Link>
              </li>
              <li className="facility-list-item">
                <Link className="facility-list-link" href="/facilities/hotel-cleaning">
                  <span>
                    <Image width={40} height={40} className="" src="/hotel.svg" alt="" />
                  </span>
                  <span>Hotels and resorts</span>
                </Link>
              </li>
              <li className="facility-list-item">
                <Link className="facility-list-link" href="/facilities/recreational-facilities-cleaning">
                  <span>
                    <Image width={50} height={50} className="w-10 h-auto" src="/gym.svg" alt="" />
                  </span>
                  <span>Sports and recreational facilities</span>
                </Link>
              </li>
              <li className="facility-list-item">
                <Link className="facility-list-link" href="/facilities/post-construction-cleaning">
                  <span>
                    <Image width={50} height={50} className="w-10 h-auto" src="/construction.svg" alt="" />
                  </span>
                  <span>Post Construction Clean up</span>
                </Link></li>
            </ul>
          </div>
          <div className="max-w-prose">
            <div className="m-0 lg:mt-10">
              <p className="text-gray-500 leading-loose mb-5">
                Our services are designed to cater to the unique needs of each facility, ensuring a clean and well-maintained
                environment for both employees and visitors.
              </p>
              <p className="font-medium mb-8 text-gray-600">
                Please note that this is not an exhaustive list, and we are equipped to serve various other types of
                facilities as well. <Link href="/contact" className="text-blue-700">Talk to us</Link> about specific needs you may have for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Start of Small Steps */}
        <EasySteps imageOption={"woman"} />

      </main>
    </>
  )
}

export default Facilities;