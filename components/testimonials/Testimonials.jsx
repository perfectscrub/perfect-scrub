import { useEffect, useState, useRef } from "react";
import TestimonialCard from "../testimonial-card/TestimonialCard";
import { testimonials } from "@/data";
import Image from "next/image";

const delay = 6000;

const Testimonials = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderTimerRef = useRef(null);

  const resetTimeout = () => {
    if (sliderTimerRef.current) clearTimeout(sliderTimerRef.current);
  };

  useEffect(() => {
    sliderTimerRef.current = setTimeout(() => {
      setSliderPosition((prevPosition) =>
        prevPosition === testimonials.length - 1 ? 0 : prevPosition + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [sliderPosition]);
  return (
    <section className="flex flex-col items-center pt-10 lg:pt-40 pb-12 bg-green-200">
      <h2 className="tracking-wider text-3xl lg:text-5xl text-gray-700 text-center">
        Our Client Testimonials
      </h2>
      <div className="flex flex-col-reverse md:flex-row justify-around items-center">
        <Image width={500} height={400} src={"/testimonials.png"}className="md:self-end p-5" />
        <div className="slideShow">
          <div
            className="slider"
            style={{
              transform: `translate3d(${-sliderPosition * 100}%, 0, 0)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                testimonial={testimonial}
                className="slide"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
// flex flex-row flex-wrap justify-center pt-10 pb-8 max-w-screen-2xl
