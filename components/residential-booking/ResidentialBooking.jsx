import Link from "next/link";

const ResidentialBooking =()=>{
    return (
      <div className="glass flex flex-col justify-center mb-10 py-6 lg:py-16 px-4 bg-white/30 text-center rounded-md lg:w-3/4 min-h-[400px]">
            <div className="mb-5">
              <h2 className="text-2xl font-sans font-light ">
                <span className="font-bold">Book a clean</span> for your home
              </h2>
              <p className="leading-relaxed m-auto text-gray-700 py-2 px-2 text-lg tracking-wider font-normal">
                Do you need to get you home cleaned?
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href={"/booking"}
                className="rounded py-4 px-8 text-white bg-red-400 text-2xl"
                >
                Book Now
              </Link>
            </div>
          </div>
    )
  }

  export default ResidentialBooking;