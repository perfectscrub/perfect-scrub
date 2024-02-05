import { useState } from "react";
import Image from "next/image";
const TestimonialCard = ({ testimonial: { text, author, business } }) => {
  const [toggleText, setToggleText] = useState(false);

  const handleToggleText = () => {};

  return (
    <div className="slide">
      <div className="slideContainer">
        <Image width={100} height={40} src={"/five-stars.png"} alt="star rating" className="mx-auto"/>
        {text.length <= 250 ? (
          <p className="w-full block py-2 text-center text-gray-600">
            <span className="font-bold text-5xl">“</span>
            {/* <span className="font-bold">”</span> */}
            {text}
          </p>
        ) : (
          <p className="block py-2 text-center text-gray-600">
            <span className="font-bold text-5xl">“</span>
            {/* <span className="font-bold">”</span> */}
            {`${text.substring(0, 250)}... `}
            {/* <span
              className="underline text-gray-800 hover:text-green-500 whitespace-nowrap"
              onClick={handleToggleText}
            >
              {toggleText ? "show less" : "read more"}
            </span> */}
          </p>
        )}
        <div className="flex flex-col items-center pb-6 bg-transparent">
          {/* <Image width={40} height={40} className="rounded-full w-24 border-4 -mt-12 border-white shadow-inner"
            src="/Testimonials/smiling_man.png" alt=""/> */}
          <span className="text-sm font-bold mt-2 tracking-wider text-blue-800">
            - {author}
          </span>
          {business === "N/A" ? null : (
            <span className="text-xs italic text-gray-500">{business}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
