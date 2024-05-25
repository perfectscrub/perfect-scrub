import Link from "next/link";
import BackgroundSlider from "../background-slider/BackgroundSlider";
const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* custom hero that depicts commercial and residential cleaning */}
      <BackgroundSlider/>
      {/* <div className="">
        <Link href="/commercial-cleaning">
          <div className="group h-full w-full flex items-center justify-center md:justify-start">
            <h2 className="text-2xl md:text-4xl lg:text-[65px] lg:leading-[85px] text-white text-center font-bold md:ml-8 lg:ml-16 px-6 py-8 group-hover:bg-green-400 group-focus:bg-green-400 rounded">
              Best in Industry Commercial <br />
              Cleaning
            </h2>
          </div>
        </Link>
      </div> */}
      {/* <div className="hero-2">
        <Link href="/residential-cleaning">
          <div className="group h-full w-full flex items-center justify-center md:justify-end ">
            <h2 className="text-2xl md:text-4xl lg:text-5xl leading-none text-white text-center font-bold md:mr-8 lg:mr-16 px-6 py-8 group-hover:bg-green-400 group-focus:bg-green-400 rounded">
              Residential
              <br />
              Cleaning
            </h2>
          </div>
        </Link>
      </div> */}
    </section>
  );
};

export default HeroSection;
