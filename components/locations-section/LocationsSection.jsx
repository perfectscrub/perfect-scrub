"use client";
import { useEffect } from "react";
import setObserver from "@/utils/observer.util";
import Link from 'next/link';
import IndexLocationsList from "../indexLocationsList/IndexLocationsList";
const LocationsSection = () => {
  useEffect(() => {
    const observer = setObserver();
    const hiddenElements = document.querySelectorAll(".hidden-element");
    hiddenElements.forEach(el => observer.observe(el));

    return () => observer.disconnect()
  }, [])
  return (
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
  )
}

export default LocationsSection