"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "animate.css";
import { sliderImgs } from "@/utils/data";

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
        <h1 className="title-shadow-effect text-center md:text-left text-4xl leading-[45px] px-2 pt-12 lg:mt-10 lg:text-[48px] lg:leading-[60px] lg:px-10 capitalize text-blue-800 font-bold tracking-wide italic">
          {/* A<br /> */}
          <span className="">Professional</span>
          <br />
          <span className="text-green-600"> clean</span>
          {/* <span className="text-green-700"> every</span> */}
          <br />
          <span className=""> every time</span>
        </h1>
        <p className=" md:max-w-[350px] h-16 text-shadow-effect text-xl lg:text-[20px] italic font-semibold m-3 tracking-wide text-center flex items-center lowercase">
          {sliderImgs[currentBg].text}
        </p>
        <div className="flex flex-col items-center">
          <Link
            className="inline-block uppercase text-white text-center px-20 py-4 text-lg md:text-xl  md:px-24 md:py-4 hover:shadow-2xl mx-2 mb-1 lg:mx-8 bg-blue-600 
    border-0 rounded-xl border-blue-800  hover:bg-blue-800 hover:border-blue-800 focus:ring-8 focus:ring-blue-300"
            href="/quote"
          >
            Get a Quote
          </Link>
          <p className="text-[10px] lg:text-xs text-black italic font-semibold mt-2 mx-auto mb-2 tracking-widest text-center">
            A free, no obligation quote
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
