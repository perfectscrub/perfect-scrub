import Image from 'next/image';
import Link from "next/link";

const HeroSection = () => {
  return (
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
  )
}

export default HeroSection