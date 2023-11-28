import Link from "next/link";
// import MonogramOverlay from "../monogram-overlay/MonogramOverlay";

const HeroLandingSection = ({ bgImg, title, type }) => {
  return (
    <section className={`${bgImg} flex lg:flex-row justify-around gay-2`}>
      <div className="z-20 md:self-start px-5 lg:w-1/2">
        <h2 className="text-xs lg:text-base uppercase font-bold mb-2 lg:mb-4 text-gray-100">
          {type}
        </h2>
        <h1 className="font-semibold text-3xl lg:text-5xl text-gray-50 mb-8">
          {title}
        </h1>
      </div>
      <div className="z-20 md:self-end px-2 lg:w-1/2">

      {type === "Residential Cleaning" ? (
          <section className="glass flex flex-col justify-center mb-10 py-6 lg:py-16 px-4 bg-white/30 text-center rounded-md lg:w-3/4 ">
          <div className="mb-5">
            <h2 className="text-2xl font-sans font-light ">
              <span className="font-bold">Book</span> a clean for your home
            </h2>
            <p className="leading-relaxed m-auto text-gray-700 py-2 px-2 text-lg tracking-wider font-normal">
              Do you need to get you home cleaned?
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href={"/booking"}
              className="rounded py-3 px-6 text-white bg-red-400 "
              >
              Book Now
            </Link>
          </div>
        </section>
      ) : null}
      </div>
      {/* Monogram Overlay */}
      {/* <MonogramOverlay /> */}
    </section>
  );
};

export default HeroLandingSection;
