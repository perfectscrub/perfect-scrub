import { useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import HomeFacilitiesList from "@/components/homeFacilitiesList/HomeFacilitiesList";
import IndexLocationsList from "@/components/indexLocationsList/IndexLocationsList";
import SimpleForm from "@/components/simple-form/SimpleForm";
import setObserver from "@/utils/observer.util";

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  useEffect(() => {
    const observer = setObserver();
    const hiddenElements = document.querySelectorAll(".hidden-element");
    hiddenElements.forEach(el => observer.observe(el));

    return ()=> (hiddenElements.forEach(el => observer.unobserve(el)))
  }, [])
  
  return (
    <>
      <Head>
        <meta name="description" content="Perfect Scrub for your offices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          content="We operate in the greater toronto area and we specialize in the cleaning of Offices, Schools and Universities, Event Centers, and other facilities"
          name="description" />
        <title>Perfect Scrub Cleaning Services- High quality Professional Cleaning for offices and commercial spaces</title>
      </Head>
      <main role="main">
        {/* start of hero (landing) section */}
        <section className="hero__container pt-20 md:pt-5 h-screen flex items-start justify-start">
          <div
            className="flex flex-col justify-center items-center h-full w-full md:w-1/2 lg:w-1/3 py-5 bg-gradient-to-b from-transparent to-white md:bg-gradient-to-r md:from-white md:to-transparent">
            <h1
              className="text-center text-3xl px-2 pt-12 lg:text-4xl lg:px-20 uppercase text-green-700 font-bold leading-10 tracking-widest">
              A<br />Professional Clean
              <br /><span className="text-blue-600">every time</span>
            </h1>
            <ul className="ml-1 mb-10">
              <li className="text-sm text-blue-800 font-semibold mt-12 ml-1 mr-2 mb-4 leading-relaxed text-left flex">
                <Image width={25} height={25} className="mr-2" src="/green-list-marker.png" alt="" /> Quality you can trust.
              </li>
              <li className="text-sm text-blue-800 font-semibold mt-2 ml-1 mr-2 mb-4 leading-relaxed text-left flex">
                <Image width={25} height={25} className="mr-2" src="/green-list-marker.png" alt="" /> Customizable pricing to meet your needs.
              </li>
              <li
                className="text-sm text-blue-800 font-semibold mt-2 ml-1 mr-2 mb-0 leading-relaxed text-left flex items-start">
                <Image width={25} height={25} className="mr-2" src="/green-list-marker.png" alt="" />Take care of business and leave clean up to
                us.
              </li>
            </ul>
            <div className="flex flex-col items-center">
              <Link className="inline-block uppercase text-center px-5 py-4 text-md lg:px-9 lg:py-4 hover:shadow-2xl mx-2 mb-4 lg:mx-8 bg-green-500 
        border border-green-500 text-green-50 hover:bg-blue-400 hover:border-blue-400 focus:ring-4 focus:ring-green-300"
                href="quote">Get a Quote</Link>
              <p
                className="text-xs text-blue-600 italic font-semibold mt-2 mx-auto mb-2 tracking-widest leading-relaxed text-center">
                A free, no obligation quote
              </p>
            </div>
          </div>
        </section>
        {/* end of hero (landing) section */}

        {/* Start of About  */}
        <section
          className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 md:py-32 bg-gradient-to-b from-gray-50 via-gray-200 to-gray-100">
          <div className="flex flex-col lg:flex-row lg:mx-8">
            <div className="w-full lg:w-1/2 lg:px-8">
              <h2 className="text-3xl font-sans font-light ">A little <span className="font-bold">About us</span></h2>
              <p className="text-lg font-medium mt-4">Leave your cleaning to us. We are great at it</p>
              <p className="mt-2 leading-relaxed">A clean work environment can significantly increase mood and productivity. Let
                us take care of that for you.</p>
              <div className="max-w-xl pt-6">
                <Image width={400} height={300} src="/office-space.jpg" alt="clean corporate office space" />
              </div>
            </div>

            <div className="flex flex-col justify-around px-4 mt-18 md:mt-0 lg:w-1/2 lg:px-8">
              <div className="flex flex-col md:flex-row items-center mt-10 md:mt-6">
                <div>
                  <div className="flex justify-center items-center w-16 h-16">
                    <Image width={40} height={40} className="w-16 h-16" src="/discount-hand.svg" alt="" />
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-8">
                  <h3 className="text-xl font-bold">We can customize cleaning services for your business</h3>
                  <p className="mt-2 leading-relaxed">Our comprehensive services will enable you to get the best out of your
                    workspaces and excellent value for money spent. At Perfect Scrub, clients can customize to fit their
                    budget
                    and preferences as we do not tie you into a contract. You have utmost flexibility to adjust your
                    services as required.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center mt-18 md:mt-12">
                <div>
                  <div className="flex justify-center items-center w-16 h-16">
                    <Image width={40} height={40} className="w-16 h-16" src="/clock.svg" alt="" />
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-8">
                  <h3 className="text-xl font-bold">Our response time is top class</h3>
                  <p className="mt-2 leading-relaxed">We are responsive to our clients and ensure we respond to your queries
                    within 3 hours at most.
                    We offer our services to clients within the GTA. Call us for a free walk-through of your space today!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="md:text-xl my-4 mx-auto py-10 text-center">
            Want to know more about {" "}
            <Link href="/about" className="text-blue-600 underline">
              why we do this?
            </Link>
          </p>
        </section>

        {/* Highlight Service  */}
        <section className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-8 p-4 mt-12 md:mt-0 lg:p-20">
            <Image width={500} height={400} className="w-full lg:w-1/2 object-cover" src="/two-women-cleaning-office.jpg" alt="" />
            <article className="w-full lg:w-1/2 text-left">
              <h2 className="text-3xl font-sans font-light ">
                <Link href="/facilities/office-buildings-cleaning" className="hover:underline">
                  <span className="font-bold">Office Cleaning </span></Link>
                that makes a difference
              </h2>
              <p className="my-5">Our dedicated cleaners understand the importance of thoroughness. They
                sweep, mop, and vacuum every nook and cranny, leaving no corner untouched. </p>
              <p className="my-5">We meticulously dust and sanitize surfaces, ensuring a germ-free environment that promotes
                health and well-being. By paying
                close attention to even the smallest details, we can guarantee a polished appearance that reflects
                the company's professionalism and commitment to excellence.</p>
              <p className="my-5">Leaving you a pristine work environment is our priority. Going above
                and beyond to ensure the utmost care in our work. That is what motivates us. We take great pride in our
                work.
                Because we believe that our dedication contributes to the overall success of the companies we serve.</p>
            </article>
          </div>
          <div className="px-4 mb-6 lg:mb-14 flex flex-col xl:flex-row gap-4">
            <article className="text-left pl-2 max-w-4xl flex flex-col">
              <h2 className="text-3xl font-sans font-light"><span className="font-bold">Facilities</span> we serve</h2>
              <p className="my-5">We provide our services to a wide range of facilities and establishments. Some of the
                facilities we serve include:</p>
              <HomeFacilitiesList />
            </article>
            <Image width={300} height={200} src="/gym.jpg" alt="a modern gym" className="w-full md:w-1/2 lg:pr-10 lg:mt-10" />
          </div>
        </section>

        {/* Start of Benefits Section  */}
        <section className="benefits-image text-gray-50 relative flex flex-col items-center text-center pt-20 bg-gray-100">
          <div className="flex flex-col mb-4 md:flex-row md:mb-0 z-10">
            <div className="mx-2 mt-0 p-4 bg-transparent">
              <h2 className="text-3xl font-sans font-light ">Why{" "}
                <span className="font-bold">Call us</span>
              </h2>
              <p className="mt-10 m-auto leading-snug py-4 px-4 text-xl font-normal">There are a lot
                of benefits to having a clean and well preserved space.</p>
              <p className="leading-snug m-auto pt-2 pb-4 px-4 text-xl font-normal">Here are some
                reasons why we should be your choice.</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center text-center text-gray-50 pt-10 max-w-screen-2xl pb-20 z-10">
            <div
              className="benefit overflow-hidden hidden-element flex flex-col items-center lg:w-96 m-4 lg:block text-center px-4 py-4">
              <div className="hidden-element inline-block rounded-full p-5 bg-blue-600 mb-2 overflow-hidden benefit-animate">
                <Image width={40} height={40} src="/like.svg" alt="" className="w-12 h-12 benefit-svg-opacity" />
              </div>
              <h3 className="text-xl font-semibold text-center">Satisfactory clean every time</h3>

            </div>
            <div
              className="benefit overflow-hidden hidden-element flex flex-col items-center lg:w-96 m-4 lg:block text-center px-4 py-4">
              <div className="hidden-element inline-block rounded-full p-5 bg-blue-600 mb-2 overflow-hidden benefit-animate">

                <Image width={40} height={40} src="/agreement.svg" alt="" className="w-12 h-12 benefit-svg-opacity" />
              </div>
              <h3 className="text-xl font-semibold text-center">Flexible service agreement - No term contract</h3>

            </div>
            <div
              className="benefit overflow-hidden hidden-element flex flex-col items-center lg:w-96 m-4 blockcentertext-left px-4 py-4">
              <div className="hidden-element inline-block rounded-full p-5 bg-blue-600 mb-2 overflow-hidden benefit-animate">
                <Image width={40} height={40} src="/tech-support.svg" alt="" className="w-12 benefit-svg-opacity" />
              </div>
              <h3 className="text-xl font-semibold text-center">Attentive Customer Service Team

              </h3>

            </div>
            <div
              className="benefit overflow-hidden hidden-element flex flex-col items-center lg:w-96 m-4 lg:block text-center px-4 py-4">
              <div className="hidden-element inline-block rounded-full p-5 bg-blue-600 mb-2 overflow-hidden benefit-animate">
                <Image width={40} height={40} src="/right-decision.svg" alt="" className="w-12 h-12 benefit-svg-opacity" />
              </div>
              <h3 className="text-xl font-semibold text-center">Easy Customization to suit you specific needs
              </h3>

            </div>
            <div
              className="benefit overflow-hidden hidden-element flex flex-col items-center lg:w-96 m-4 lg:block text-center px-4 py-4">
              <div className="hidden-element inline-block rounded-full p-5 bg-blue-600 mb-2 overflow-hidden benefit-animate">
                <Image width={40} height={40} src="/eco.svg" alt="" className="w-12 h-12 benefit-svg-opacity" />
              </div>
              <h3 className="text-xl font-semibold text-center">Eco-friendly cleaning products that help to protect the
                environment</h3>

            </div>
          </div>
          <div className="bg-black bg-opacity-70 absolute bottom-0 left-0 top-0 right-0 z-0"></div>
        </section>

        {/* Start of Services Section */}
        <section className="flex flex-col items-center text-center pt-20 lg:pb-30 lg:pt-20 pb-20 bg-white">
          <div>
            <h2 className="text-3xl font-sans font-light "><span className="font-bold">Services</span> we offer</h2>
            <p className="max-w-xl leading-relaxed m-auto text-gray-600 py-4 px-4 text-xl tracking-wider font-normal">
              Every client is unique. We know this. That's why our
              services can be customized to work for{" "}
              <span className="underline">you</span>.
            </p>
            <p className="leading-relaxed  m-auto text-gray-600 py-4 px-4 text-xl tracking-wider font-normal">Ask us about them.
              You'll be glad you did.</p>

            {/* Start of Sevices */}
            <div className="flex flex-row flex-wrap justify-center pt-12 max-w-screen-2xl">
              {/*Service*/}
              <div className="hidden-element card standard_clean_image">
                <div className="corner p-1 mb-1">
                  <Image src={"/bucket-icon.svg"} width={40} height={40} alt="" />
                </div>
                <h3 className="card-title">Standard <br />Cleaning</h3>
                <p className="small-desc">Our standard commercial cleaning service. Can be scheduled as a daily, weekly,
                  or monthly service. </p>
                <Link className="service-link flex justify-end gap-2 inline py-2 px-3 font-semibold mt-6"
                  href="services/standard-cleaning">Standard Clean<Image width={40} height={40} className="w-5" src="/read-more.svg"
                    alt="" /></Link>
              </div>
              {/*Service*/}
              <div className="hidden-element card deep_clean_image">
                <div className="corner p-1 mb-1">
                  <Image src={"/clean-icon.svg"} width={40} height={40} alt="" />
                </div>
                <h3 className="card-title">Deep <br />Cleaning</h3>
                <p className="small-desc">Our standard commercial cleaning service. Can be scheduled as a daily, weekly,
                  or monthly service. </p>
                <Link className="service-link flex justify-end gap-2 inline-block py-2 px-3 font-semibold mt-6"
                  href="services/deep-cleaning">Deep Cleaning <Image width={40} height={40} className="w-5" src="/read-more.svg" alt="" /></Link>
              </div>
              {/*Service*/}
              <div className="hidden-element card disinfecting_image">
                <div className="corner p-1 mb-1">
                  <Image src={"/disinfect-icon.svg"} width={40} height={40} alt="" />
                </div>
                <h3 className="card-title">Disinfecting <br />Services</h3>
                <p className="small-desc"> Our disinfecting service deeply cleans areas of your facility that may be
                  contaminated to prevent outbreaks.</p>
                <Link className="service-link flex justify-end gap-2 inline-block py-2 px-3 font-semibold mt-6"
                  href="services/disinfecting-services">Disinfecting Service<Image width={40} height={40} className="w-5" src="/read-more.svg"
                    alt="" /></Link>
              </div>
              {/*Service*/}
              <div className="hidden-element card carpet_cleaning_image">
                <div className="corner p-1 mb-1">
                  <Image src={"/carpet-clean-icon.svg"} width={40} height={40} alt="" />
                </div>
                <h3 className="card-title">Carpet <br />Cleaning</h3>
                <p className="small-desc">We understand that you need more than the average commercial carpet cleaning
                  service.</p>
                <Link className="service-link flex justify-end gap-2 inline-block py-2 px-3 font-semibold mt-6"
                  href="services/carpet-cleaning">Carpet Cleaning <Image width={40} height={40} className="w-5" src="/read-more.svg"
                    alt="" /></Link>
              </div>
              {/*Service*/}
              <div className="hidden-element card washroom_cleaning_image">
                <div className="corner p-1 mb-1">
                  <Image src={"/dispenser-icon.svg"} width={40} height={40} alt="" />
                </div>
                <h3 className="card-title">Washroom Services and Consumables</h3>
                <p className="small-desc">Sustaining a spotless, hygienic washroom facility is essential for every
                  organization.</p>
                <Link className="service-link flex justify-end gap-2 inline-block py-2 px-3 font-semibold mt-6"
                  href="services/washroom-cleaning-and-consumables">Washroom and Consumables <Image width={40} height={40} className="w-5"
                    src="/read-more.svg" alt="" /></Link>
              </div>
              {/*Service*/}
              <div className="hidden-element card janitorial_services_image">
                <div className="corner p-1 mb-1">
                  <Image src={"/janitor-icon.svg"} width={40} height={40} alt="" />
                </div>
                <h3 className="card-title">Janitorial<br /> Services</h3>
                <p className="small-desc">Sustaining a spotless, hygienic washroom facility is essential for every
                  organization.</p>
                <Link className="service-link flex justify-end gap-2 inline-block py-2 px-3 font-semibold mt-6"
                  href="services/janitorial-services">Janitorial Services <Image width={40} height={40} className="w-5" src="/read-more.svg"
                    alt="" /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Start of Testimonials Section */}
        <section className="flex flex-col items-center pt-20 lg:pt-40 pb-48 bg-blue-50">
          <h2 className="tracking-wider text-4xl lg:text-5xl text-gray-700">Testimonials</h2>
          <div className="flex flex-row flex-wrap justify-center pt-20 pb-18 max-w-screen-2xl">

            {/* Start of Testimonial Card*/}
            <div className="max-w-xl mx-10 bg-transparent mb-16 lg:mb-0">
              <p className="pt-8 pb-10 text-center text-gray-600"><span className="font-bold">“</span>It was a great pleasure engaging your services at our
                office and for the impressive services at your most inconvenient time frame. This depicts commitment,
                reliability and positive business drive.<span className="font-bold">”</span></p>
              <div className="flex flex-col items-center pb-6 bg-transparent">
                {/* <Image width={40} height={40} className="rounded-full w-24 border-4 -mt-12 border-white shadow-inner"
            src="/Testimonials/smiling_man.png" alt=""/> */}
                <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Alex Emmanuel</span>
                <span className="text-sm text-gray-500">VSF CONSULTING INC</span>
              </div>
            </div>
            {/* End of Testimonial Card*/}
          </div>
        </section>

        {/* Start of 'Ready To Get Started' Section */}
        <section id="get-quote" className="pt-0 bg-white">
          <div
            className="flex flex-col md:flex-row items-center justify-around py-10 bg-gradient-to-br from-blue-400 to-blue-800">

            <p className="text-2xl font-sans font-semibold text-white">
              Ready to Get Started?
              <span className="text-base block italic tracking-widest text-center text-blue-100">A free, no obligation
                quote</span>
            </p>
            <SimpleForm />

          </div>
        </section>

        {/* Locations we serve */}
        <section className="p-0 flex flex-col lg:flex-row bg-gray-700">
          <div className="location-image lg:w-1/2 max-h-full relative">
            <div
              className="bg-black bg-opacity-60 px-4 py-8  lg:absolute bottom-0 left-0 top-0 right-0 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center md:justify-around">
                <div className="text-center mt-10 h-full md:w-full text-white">
                  <h2 className="text-4xl font-sans font-light"><span className="font-bold">
                    Locations</span> we serve</h2>
                  <p className="max-w-2xl leading-relaxed pt-10 text-2xl tracking-wider font-semibold text-center">
                    Take a look at all the locations we cover.
                  </p>
                </div>
                {/* <Link className="text-2xl py-4 px-8 my-10 text-white bg-green-600 hover:shadow-xl text-center no-underline 
              uppercase border-2 border-green-600 hover:bg-green-500 hover:border-green-500 self-center cursor-pointer"
            href="contact">Book Now</Link> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:w-1/2 bg-white p-6 bg-gradient-to-br from-gray-100 to-gray-300 py-20 px-10">
            <p className="max-w-2xl leading-relaxed text-gray-600 pb-10 text-xl tracking-wider font-semibold text-center">
              Not sure about our coverage area?{" "}
              <Link className="text-blue-600 border-b-4 border-blue-600 hover:text-green-500 hover:border-green-500"
                href="contact#contact-us">Call us</Link>. <br />Our
              customer service team can help.
            </p>
            <IndexLocationsList />
          </div>
        </section>


      </main>
    </>
  )
}