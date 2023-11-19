import React from 'react'
import TestimonialCard from "../testimonial-card/TestimonialCard";
import { testimonials } from "@/data";

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center pt-20 lg:pt-40 pb-12 bg-green-200">
          <h2 className="tracking-wider text-4xl lg:text-5xl text-gray-700">Testimonials</h2>
          <div className="flex flex-row flex-wrap justify-center pt-10 pb-8 max-w-screen-2xl">
            {/* End of Testimonial Card*/}
            {
                testimonials.map(testimonial => <TestimonialCard key={testimonial.author} testimonial={testimonial} />)
            }
          </div>
        </section>
  )
}

export default Testimonials