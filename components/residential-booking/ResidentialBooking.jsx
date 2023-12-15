import Link from "next/link";

const ResidentialBooking = () => {
  return (
    <div className="glass flex flex-col justify-center mb-10 py-4 lg:py-8 px-8 bg-white/25 text-center rounded-md lg:w-3/5 lg:min-h-[360px]">
      <div className="mb-8">
        <h2 className="text-2xl font-sans font-light p-3">
          <span className="font-bold">Book a clean</span> for your home
        </h2>
      </div>
      <div className="flex justify-center">
        <Link
          href={"/booking"}
          className="rounded py-4 px-8 text-white bg-red-500 text-2xl hover:shadow-2xl"
        >
          Book Now
        </Link>
      </div>
        <p className="text-xs leading-relaxed m-auto text-gray-800 py-2 lg:py-4 px-2 lg:text-lg tracking-wider font-semibold">
          An expert clean done by professionals
        </p>
    </div>
  );
};

export default ResidentialBooking;
