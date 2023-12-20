import Image from "next/image";
import Link from "next/link";

const EasySteps = ({ type, steps }) => {
  return (
    <section className="flex flex-col px-4 py-20 justify-center bg-white text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Get it done in 3 Easy Steps!
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap px-4 py-16 justify-center bg-white">
        {steps.map((step) => (
          <article key={step.title} className="max-w-xs py-4 px-3 mx-4">
            <Image
              className="rounded-[125px] mx-auto"
              width={250}
              height={250}
              src={step.src}
              alt={step.alt}
            />
            <div className="px-3 py-4">
              <h3 className="text-lg md:text-xl lg:text-2xl pb-3 leading-relaxed font-semibold">
                {step.title}
              </h3>
              <p className="">{step.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="pb-10">
        <Link
          href={type === "residential" ? "/booking" : "/quote"}
          className={`rounded py-6 px-10 text-white ${type==="residential"? "bg-red-500":"bg-blue-500"} text-3xl hover:shadow-2xl`}
        >
          {type === "residential" ? "Book Now" : "Get Quote"}
        </Link>
      </div>
    </section>
  );
};

export default EasySteps;
