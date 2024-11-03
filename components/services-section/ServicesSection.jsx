"use client";
import { useEffect } from "react";
import setObserver from "@/utils/observer.util";
import Image from 'next/image';
import Link from "next/link";

const ServicesSection = () => {
  useEffect(() => {
    const observer = setObserver();
    const hiddenElements = document.querySelectorAll(".hidden-element");
    hiddenElements.forEach(el => observer.observe(el));

    return () => observer.disconnect()
  }, [])
  return (
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
              <div className="hidden-element card standard-clean-image">
                <div className="corner p-1 mb-1">
                  <Image src={"/bucket-icon.svg"} width={40} height={40} alt="" />
                </div>
                <h3 className="card-title">Standard <br />Clean</h3>
                <p className="small-desc">Our standard commercial cleaning service. Can be scheduled as a daily, weekly,
                  or monthly service. </p>
                <Link className="service-link flex justify-end gap-2 py-2 px-3 font-semibold mt-6"
                  href="services/standard-cleaning">Standard Clean<Image width={20} height={20} className="w-5" src="/read-more.svg"
                    alt="" /></Link>
              </div>
              {/*Service*/}
              <div className="hidden-element card deep-clean-image">
                <div className="corner p-1 mb-1">
                  <Image src={"/clean-icon.svg"} width={30} height={30} alt="" />
                </div>
                <h3 className="card-title">Deep <br />Clean</h3>
                <p className="small-desc">In need of deep cleaning services? Give us a call. We can schedule a deep clean today. </p>
                <Link className="service-link flex justify-end gap-2 py-2 px-3 font-semibold mt-6"
                  href="services/deep-cleaning">Deep Clean <Image width={20} height={20} className="w-5" src="/read-more.svg" alt="" /></Link>
              </div>
              {/*Service*/}
              <div className="hidden-element card disinfecting-image">
                <div className="corner p-1 mb-1">
                  <Image src={"/disinfect-icon.svg"} width={30} height={30} alt="" />
                </div>
                <h3 className="card-title">Disinfecting <br />Services</h3>
                <p className="small-desc"> Our disinfecting service deeply cleans areas of your facility that may be
                  contaminated to prevent outbreaks.</p>
                <Link className="service-link flex justify-end gap-2 py-2 px-3 font-semibold mt-6"
                  href="services/disinfecting-services">Disinfecting Service<Image width={20} height={20} className="w-5" src="/read-more.svg"
                    alt="" /></Link>
              </div>
              {/*Service*/}
              <div className="hidden-element card carpet-cleaning-image">
                <div className="corner p-1 mb-1">
                  <Image src={"/carpet-clean-icon.svg"} width={30} height={30} alt="" />
                </div>
                <h3 className="card-title">Carpet <br />Clean</h3>
                <p className="small-desc">We understand that you need more than the average commercial carpet cleaning
                  service.</p>
                <Link className="service-link flex justify-end gap-2 py-2 px-3 font-semibold mt-6"
                  href="services/carpet-cleaning">Carpet Clean <Image width={20} height={20} className="w-5" src="/read-more.svg"
                    alt="" /></Link>
              </div>
              {/*Service*/}
              <div className="hidden-element card washroom-cleaning-image">
                <div className="corner p-1 mb-1">
                  <Image src={"/dispenser-icon.svg"} width={30} height={30} alt="" />
                </div>
                <h3 className="card-title">Washroom and Consumables</h3>
                <p className="small-desc">Sustaining a spotless, hygienic washroom is essential for every
                  organization.</p>
                <Link className="service-link flex justify-end gap-2 py-2 px-3 font-semibold mt-6"
                  href="services/washroom-cleaning-and-consumables">
                    Washroom and Consumables <Image width={20} height={20} className="w-5" src="/read-more.svg" alt="" />
                </Link>
              </div>
              {/*Service*/}
              <div className="hidden-element card janitorial-services-image">
                <div className="corner p-1 mb-1 pl-1">
                  <Image src={"/janitor-icon.svg"} width={30} height={30} alt="" />
                </div>
                <h3 className="card-title">Janitorial<br /> Services</h3>
                <p className="small-desc">Get a janitor for you business. From surface cleaning to trash removal. We get the </p>
                <Link className="service-link flex justify-end gap-2 py-2 px-3 font-semibold mt-6"
                  href="services/janitorial-services">Janitorial Services <Image width={20} height={20} className="w-5" src="/read-more.svg"
                    alt="" /></Link>
              </div>
            </div>
          </div>
        </section>
  )
}

export default ServicesSection;