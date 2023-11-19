
const TestimonialCard = ({testimonial:{ text, author, business }}) => {
  return (
    <div className="max-w-xl mx-10 bg-transparent mb-16 lg:mb-0">
      <p className="pt-8 pb-2 text-center text-gray-600">
        <span className="font-bold text-5xl">“</span>
        {text}
        {/* <span className="font-bold">”</span> */}
      </p>
      <div className="flex flex-col items-center pb-6 bg-transparent">
        {/* <Image width={40} height={40} className="rounded-full w-24 border-4 -mt-12 border-white shadow-inner"
            src="/Testimonials/smiling_man.png" alt=""/> */}
        <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">
          {author}
        </span>
        <span className="text-sm text-gray-500">{business}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
