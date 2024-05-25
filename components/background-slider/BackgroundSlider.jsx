import { useEffect, useState } from "react";
import Link from "next/link";
import "animate.css"
import { sliderImgs } from "@/data";

const BackgroundSlider = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentBg === 2) {
        setCurrentBg(0);
      } else {
        setCurrentBg(currentBg + 1);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [currentBg]);

  const sliderStyles = {
    backgroundImage: `url(${sliderImgs[currentBg].img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "inherit",
  };

  return (
    
    <div
      className={`animate__animated animate__${sliderImgs[currentBg].effect} md:pt-5 h-screen flex items-start justify-start`}
      style={sliderStyles}
    >
      <div className="flex flex-col justify-around items-center lg:gap-y-6 h-full w-full md:w-1/2 lg:w-2/3 py-5 bg-gradient-to-b from-gray-50 via-transparent to-green-50 md:bg-gradient-to-r md:from-white md:to-transparent">
        <h1 className="text-center text-3xl px-2 pt-12 lg:mt-10 lg:text-4xl lg:px-10 uppercase text-blue-800 font-semibold tracking-wide italic">
          {/* A<br /> */}
          <span className="">Professional</span>
          <br />
          <span className="text-green-700"> Clean</span>
          <span className="text-green-700"> every</span>
          <br />
          <span className=""> time</span>
        </h1>
        <p className="text-shadow-effect text-xl lg:text-2xl italic font-semibold text-blue-800 m-3 tracking-wide text-center flex items-center lowercase">
          {sliderImgs[currentBg].text}
        </p>
        <div className="flex flex-col items-center">
          <Link
            className="inline-block uppercase text-center px-5 py-4 text-md lg:px-9 lg:py-4 hover:shadow-2xl mx-2 mb-4 lg:mx-8 bg-blue-600 
    border-0 rounded-md border-blue-800 text-white hover:bg-blue-400 hover:border-blue-400 focus:ring-8 focus:ring-blue-300"
            href="/quote"
          >
            Get a Quote
          </Link>
          <p className="text-xs lg:text-base text-black italic font-semibold mt-2 mx-auto mb-2 tracking-widest text-center">
            A free, no obligation quote
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
