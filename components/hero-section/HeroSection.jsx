import Link from "next/link";
import BackgroundSlider from "../background-slider/BackgroundSlider";
const HeroSection = () => {
  return (
    /* <section className="hero-container">
    // <BackgroundSlider/>
    {/* </section> */

    /* <section className="hero-container">
      {/* <div className="">
        <Link href="/commercial-cleaning">
          <div className="group h-full w-full flex items-center justify-center md:justify-start">
            <h2 className="text-2xl md:text-4xl lg:text-[65px] lg:leading-[85px] text-white text-center font-bold md:ml-8 lg:ml-16 px-6 py-8 group-hover:bg-green-400 group-focus:bg-green-400 rounded">
              Best in Industry Commercial <br />
              Cleaning
            </h2>
          </div>
        </Link>
      </div> 
       <div className="hero-2">
        <Link href="/residential-cleaning">
          <div className="group h-full w-full flex items-center justify-center md:justify-end ">
            <h2 className="text-2xl md:text-4xl lg:text-5xl leading-none text-white text-center font-bold md:mr-8 lg:mr-16 px-6 py-8 group-hover:bg-green-400 group-focus:bg-green-400 rounded">
              Residential
              <br />
              Cleaning
            </h2>
          </div>
        </Link>
      </div>
    </section> */

    <section
      className="relative w-full h-[88vh] min-h-[500px] bg-cover bg-center bg-no-repeat flex justify-center"
      style={{ backgroundImage: `url('/buffing-floor.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container h-full flex items-center justify-center px-4 md:px-6">
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-4xl leading-[45px] font-bold text-white sm:text-5xl md:text-5xl md:leading-[56px] lg:text-6xl lg:leading-[72px]">
            Ontario’s Premier Commercial Cleaning Service
          </h1>
          <p className="text-lg text-white md:text-xl pb-8">
            We are Ontario's #1 Commercial Cleaning Company
          </p>
          <Link
            href="/quote"
            className="inline-flex h-12 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-500/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
