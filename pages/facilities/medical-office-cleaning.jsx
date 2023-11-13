import Image from "next/image";
import Link from "next/link";

import React from 'react'

const MedicalOfficeCleaning = () => {
  return (
      <main role="main">

    {/* Start of 'Facilities' Landing */}
    <section className="medical-bg-image flex">
        <div className="z-20 self-center md:self-start md:pl-16">
            <h2 className="text-xs lg:text-base uppercase font-bold mb-2 lg:mb-4 text-gray-100">FACILITIES</h2>
                <h1 className="font-semibold text-3xl lg:text-5xl text-gray-50 mb-8">Medical Offices <br />and clinics</h1>
            </div>
            {/* Monogram Overlay */}
            <Image width={500} height={500}  className="absolute max-w-xs z-10 opacity-30 -bottom-5 -left-10 w-3/4" src="/ps-monogram-white.svg" alt="" />
    </section>

    {/* Start Information section*/}
    <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
        <article>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">Medical office
                cleaning encompasses the meticulous cleaning of various healthcare facilities, including clinics,
                doctor's offices, dental offices, and more. When patients and other visitors enter your medical space,
                it is crucial to create an environment that instills trust and reflects the elevated hygiene and
                sanitation standards of the medical profession. Maintaining a professional, clean, and organized medical
                office is essential for delivering the exceptional experience your guests expect.</p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">At Perfect Scrub
                Cleaning, we understand the unique requirements of medical office spaces. Our responsive medical
                cleaning service is specifically designed to promote a cleaner, healthier, and safer environment for
                your patients, visitors, and employees. We prioritize the well-being and comfort of everyone in your
                medical facility.</p>
            {/* <Image width={500} height={500}  className="max-h-full lg:h-100 mx-auto object-cover mb-10" src=""
                alt="" /> */}
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">Our dedicated
                cleaning team is trained in the specialized cleaning protocols necessary for healthcare settings. We
                ensure thorough cleaning and disinfection of high-touch surfaces, waiting areas, examination rooms,
                restrooms, and other critical areas. By using industry-approved cleaning products and following strict
                guidelines, we help prevent the spread of germs and maintain a high standard of cleanliness.
            </p>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">With our
                professional medical office cleaning service, you can trust that your facility will uphold the highest
                hygiene standards and leave a positive impression on your patients and visitors. Contact us today to
                benefit from our expertise in creating a clean, inviting, and safe environment in your medical office.
            </p>
        </article>
        <aside className="hidden lg:block">
            <h3 className="font-sans text-2xl mb-4">Other <span className="font-bold">Facilities</span> we service:</h3>
            <ul className="pl-3 text-lg">
                <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600"><Link
                        href="office-buildings-cleaning">Office
                        Buildings</Link></li>
                <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600"><Link
                        href="retail-stores-cleaning">Retail stores and shopping centers</Link></li>
                <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600"><Link
                        href="day-care-cleaning">Day Care and Preschool</Link>
                </li>
                <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600"><Link
                        href="school-cleaning">Schools
                        and universities</Link>
                </li>
                <li className="active-side-menu py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600"><Link
                        href="medical-office-cleaning">Medical Offices and clinics</Link>
                </li>
                <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600"><Link
                        href="hotel-cleaning">Hotels
                        and resorts</Link></li>
                <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600"><Link
                        href="recreational-facilities-cleaning">Sports and recreational facilities</Link>
                </li>
                <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600"><Link
                        href="post-construction-cleaning">Post Construction Clean up</Link></li>
            </ul>
        </aside>

    </section>

    {/* Start of Small Steps */}
    <section className="flex flex-col px-4 py-16 justify-center bg-white">
        <div className="flex flex-col-reverse md:flex-row justify-between">
            <h2
                className="font-semibold text-2xl lg:text-4xl text-gray-700 px-1 py-5 mb-8 border-t-4 rounded-xl md:ml-8 self-center  border-b-8 border-green-500">
                Getting your <br />Perfect Scrub Clean <br /> is
                as EASY AS:
                {/* <span className="text-blue-600">1-2-3</span> */}
            </h2>
            <div className="lg:block mb-0 lg:-mb-16 w-1/2 self-center">
                <Image width={500} height={500}  className="object-cover" src="/woman-with-spray-bottle.png" alt="woman with a spray bottle" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row p-6 lg:px-4 justify-center text-center bg-white">
            <div
                className="w-full md:w-72 border-8 rounded-2xl border-blue-600 px-2 py-6 mb-8 lg:ml-10 font-plexSerif font-semibold flex flex-col lg:mb-16 pb-2 ring-4 ring-blue-300 ring-inset">
                <span className="text-2xl lg:text-4xl lg:mr-2 mb-4 text-green-500">#1</span>
                <span className="text-xl lg:text-2xl px-2 pb-8 lg:mr-2 text-gray-700">Use our
                    <Link className="text-blue-600 hover:underline" href="/quote"> get a quote</Link>
                    form to inform us about your cleaning needs</span>
            </div>
            <div
                className="w-full md:w-72 border-8 rounded-2xl border-blue-600 px-2 py-6 mb-8 lg:ml-10 font-plexSerif font-semibold flex flex-col lg:mb-16 pb-2 ring-4 ring-blue-300 ring-inset">
                <span className="text-2xl lg:text-4xl lg:mr-2 mb-4 text-green-500">#2</span>
                <span className="text-xl lg:text-2xl px-2 pb-8 lg:mr-2 text-gray-700">We will get in touch with you and
                    process your
                    cleaning request</span>
            </div>
            <div
                className="w-full md:w-72 border-8 rounded-2xl border-blue-600 px-2 py-6 mb-8 lg:ml-10 font-plexSerif font-semibold flex flex-col lg:mb-16 pb-2 ring-4 ring-blue-300 ring-inset">
                <span className="text-2xl lg:text-4xl lg:mr-2 mb-4 text-green-500">#3</span>
                <span className="text-xl lg:text-2xl px-2 pb-8 lg:mr-2 text-gray-700">A cleaning crew will be at your
                    location on
                    your
                    designated start date</span>
            </div>
        </div>
        <div className="py-6 mb-8 font-sans font-bold grid grid-col-1 lg:mb-20 pb-10">
            {/* <h2 className="font-sans text-4xl">A job well done is what we stand for</h2> */}
            <h2 className="font-sans text-4xl text-center mb-6">A job well done. That is our promise to you.</h2>
            <p className="font-plexSerif text-2xl lg:text-3xl lg:mr-2 mb-10 text-green-500 text-center">Our 100%
                SATISFACTION
                GUARANTEE</p>
            <p className="text-lg lg:text-2xl mb-20 m-auto text-gray-700 text-center">If you are not totally satisfied with
                our performance - we will clean it again, free.</p>
            <Link className="text-2xl py-4 px-8 m-auto text-white bg-green-600 hover:shadow-xl text-center no-underline 
              uppercase border-2 border-green-600 hover:bg-green-500 hover:border-green-500 scale-100 hover:scale-105 self-center cursor-pointer"
              href="/contact">contact us</Link>
        </div>
    </section>

    </main>      
            )
          }
          
          export default MedicalOfficeCleaning