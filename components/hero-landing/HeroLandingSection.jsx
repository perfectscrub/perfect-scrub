import ResidentialBooking from "../residential-booking/ResidentialBooking";
import MonogramOverlay from "../monogram-overlay/MonogramOverlay";

const HeroLandingSection = ({ bgImg, title, type }) => {
  return (
    <section className={`${bgImg} flex lg:flex-row justify-around gap-2`}>
      <div className="z-20 md:self-start pt-16 px-5 lg:w-1/2">
        <h2 className="text-xs lg:text-base uppercase font-bold mb-2 lg:mb-4 text-gray-100">
          {type}
        </h2>
        <h1 className="font-semibold text-3xl lg:text-5xl text-gray-50 mb-8">
          {title}
        </h1>
      </div>
      <div className="z-20 md:self-end px-2 lg:w-1/2">

      {type === "Residential Cleaning" ? (
          <ResidentialBooking />
      ) : null}
      </div>
      {/* Monogram Overlay */}
      <MonogramOverlay />
    </section>
  );
};

export default HeroLandingSection;

