import Link from "next/link";

const Guarantee = () => {
  return (
    <div className="py-6 mb-8 font-sans font-bold grid grid-col-1 lg:mb-20 pb-10">
      {/* <h2 className="font-sans text-4xl">A job well done is what we stand for</h2> */}
      <h2 className="font-sans text-4xl text-blue-700 text-center mb-10">
        100% SATISFACTION GUARANTEE
      </h2>
      <p className="text-2xl lg:text-3xl lg:mr-2 mb-10 text-center">
        A job well done. That is <span className="text-blue-700">our promise</span> to you
      </p>
      <p className="text-lg lg:text-2xl mb-20 m-auto text-gray-700 text-center">
        If you are not totally satisfied with our performance - we will clean it
        again, <span className="border-b-4 border-blue-700">free</span>
      </p>
      <Link
        className="text-2xl py-4 px-8 m-auto text-white bg-green-600 hover:shadow-xl text-center no-underline 
              uppercase border-2 border-green-600 hover:bg-green-500 hover:border-green-500 scale-100 hover:scale-[1.01] self-center cursor-pointer"
        href="/contact"
      >
        contact us
      </Link>
    </div>
  );
};

export default Guarantee;
