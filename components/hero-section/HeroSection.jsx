import Image from "next/image";
import Link from "next/link";
import { taglines } from "@/data";

const HeroSection = () => {
  return (
    <section className="hero__container pt-20 md:pt-5 h-screen flex items-start justify-start">
      <div className="flex flex-col justify-center items-center lg:gap-y-6 h-full w-full md:w-1/2 lg:w-2/3 py-5 bg-gradient-to-b from-gray-50 via-transparent to-green-50 md:bg-gradient-to-r md:from-white md:to-transparent">
        <h1 className="text-center text-3xl px-2 pt-12 lg:mt-10 lg:text-4xl lg:px-10 uppercase text-blue-800 font-semibold tracking-wide italic">
          {/* A<br /> */}
          <span className="">Professional</span>
          <br /> 
          <span className="text-green-700"> Clean</span>
          <span className="text-green-700"> every</span>
          <br /> 
           <span className=""> time</span>
        </h1>
        <ul className="mx-2 mt-6 mb-6">

          {taglines.map((tag, i) => (
            <li key={i} className="text-base lg:text-lg italic text-blue-800 font-semibold mt-2 ml-1 mr-2 mb-3 tracking-wide text-left flex items-center lowercase">
              <Image
                width={25}
                height={25}
                className="mr-2"
                src="/green-list-marker.png"
                alt=""
              />
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center">
          <Link
            className="inline-block uppercase text-center px-5 py-4 text-md lg:px-9 lg:py-4 hover:shadow-2xl mx-2 mb-4 lg:mx-8 bg-blue-600 
        border-0 rounded-md border-blue-800 text-white hover:bg-blue-400 hover:border-blue-400 focus:ring-8 focus:ring-blue-300"
            href="/quote"
          >
            Get a Quote
          </Link>
          <p className="text-xs lg:text-base text-blue-600 italic font-semibold mt-2 mx-auto mb-2 tracking-widest text-center">
            A free, no obligation quote
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
