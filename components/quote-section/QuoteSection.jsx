import React from 'react'
import SimpleForm from "../simple-form/SimpleForm";

const QuoteSection = () => {
  return (
    <section id="get-quote" className="pt-0 bg-white">
          <div
            className="flex flex-col md:flex-row items-center justify-around py-20 bg-gradient-to-br from-blue-400 to-blue-800">

            <p className="text-2xl font-sans font-semibold text-white">
              Ready to Get Started?
              <span className="text-base block italic tracking-widest text-center text-blue-100">A free, no obligation
                quote</span>
            </p>
            <SimpleForm />

          </div>
        </section>
  )
}

export default QuoteSection