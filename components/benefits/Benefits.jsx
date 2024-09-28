"use client";
import { useEffect } from "react";
import setObserver from "@/utils/observer.util";
import Image from 'next/image';

const Benefits = () => {
  useEffect(() => {
    const observer = setObserver();
    const hiddenElements = document.querySelectorAll(".hidden-element");
    hiddenElements.forEach(el => observer.observe(el));

    return () => observer.disconnect()
  }, [])
  return (
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
  )
}

export default Benefits;