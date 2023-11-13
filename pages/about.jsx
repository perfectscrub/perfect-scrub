import Image from "next/image";

import React from "react";

const About = () => {
  return (
    <main role="main">
      {/* Start of 'About Us' Landing */}
      <section class="landing-section overflow-hidden flex flex-col md:flex-row pt-28 px-4 pl-6 lg:pt-16 lg:pl-32 bg-gradient-to-b from-blue-600 to-blue-900">
        <div class="lg:mt-20 lg:w-1/2">
          <h1 class="font-semibold text-md uppercase lg:text-2xl text-green-300 mb-8">
            About Us
          </h1>
          <p class="font-semibold lg:w-5/6 text-3xl lg:text-4xl text-gray-50">
            We are that reliable cleaning service you can trust.
          </p>
        </div>
        {/* About Us background image */}
        <div class="h-80 mt-12 md:w-1/2 lg:h-full overflow-hidden lg:relative">
          <Image
            width={254}
            height={526}
            class="lg:absolute lg:-bottom-20 left-20 z-20 mx-auto"
            src="/about-us-image.png"
            alt=""
          />
          {/* Monogram Overlay */}
          <div class="ps-monogram-image object-cover w-100 h-80 absolute hidden lg:block lg:-bottom-5 lg:right-0 opacity-10 z-10" />
        </div>
      </section>

      {/* Start of 'About Us' longer description/story */}
      <section class="flex flex-col items-center pt-16 lg:pt-20 pb-40 px-4">
        <h2 class="thick_underline tracking-wider text-center font-sans font-light text-3xl lg:text-4xl uppercase text-gray-700">
          A Closer Look At <span class="font-bold">Who We Are</span>
        </h2>
        <div>
          <p class="max-w-prose pt-24 pb-2 lg:px-0 text-gray-700">
            Hi there, my name is Bukola, and I am the CEO of Perfect Scrub
            Cleaning.
          </p>
          <p class="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
            My husband and father of my two kids has long had a passion for
            cleaning. He cleans so much on a regular basis our little girls
            nicknamed him Mr. Clean a while back. I on the other hand have
            always leaned towards business and entrepreneurship having started a
            small business in the past.
          </p>
          <p class="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
            With our passion intact, we saw the opportunity to bring our brand
            and desire for quality cleaning to the market. So, the idea for
            Perfect Scrub was born to tackle several pain points in the
            industry.
          </p>
          <p class="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
            We continue to satisfy our clients’ demands with our quality service
            and are pleased with the positive feedback we have received.
          </p>
        </div>
        <div>
          <h2 class="text-3xl font-sans font-light mt-12">
            Our <span class="font-bold">Customers Matter </span>to us
          </h2>
          <p class="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
            While we know our role in our client’s business is to ensure clean
            spaces, over here at Perfect Scrub we see our contribution as being
            more than that. Clean spaces energize your staff, create a good
            ambience, and enhance your organization’s productivity.
          </p>
          <p class="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
            Working with us, we want to make sure that an organization can focus
            on the core business issues and confidently leave the mundane clean
            up to us. This is why we provide a full end-to-end cleaning service
            for all areas, making sure you don’t have to hire multiple
            contractors to get the service you need.
          </p>
          <h2 class="text-3xl font-sans font-light mt-12">
            Our <span class="font-bold">Promise</span>
          </h2>
          <p class="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
            We believe in providing an excellent quality of service that sets us
            apart from our competitors. Service delivery is important to us.
            Just as important is the dedicated staff that provide it. At Perfect
            Scrub Cleaning, we carry out a very stringent vetting process when
            hiring to ensure that the qualities and character of our staff match
            our core values.{" "}
          </p>
          <p class="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
            We are always looking for better ways to do what we do best and are
            constantly innovating. We aim to save money for our clients while
            meeting their cleaning needs because that never hurts.
          </p>
        </div>
        <div>
          <h2 class="text-3xl font-sans font-light mt-12">
            What we <span class="font-bold">Strive for</span>
          </h2>
          <p class="max-w-prose pt-5 pb-2 lg:px-0 text-gray-700">
            In our hopes to keep growing our business and to give back to the
            community we have started to provide employment for those in our
            immediate community in Peel region which we have called home these
            last 5 years. We hope our efforts will contribute towards an even
            better and more prosperous community in the long run.
          </p>
          <p class="max-w-prose pt-10 pb-2 lg:px-0 text-gray-700">
            We look forward to a future where Perfect Scrub will become a
            household name that has earned the trust of all our customers and
            become the preferred cleaning company in Ontario.
          </p>
        </div>
        <p class="text-sm font-semibold text-gray-600 pt-10">
          - The Perfect Scrub Team
        </p>
      </section>

      {/* Start of 'Ready To Get Started' Section */}
      <section class="flex flex-col md:flex-row items-center justify-around py-10 bg-gradient-to-br from-blue-400 to-blue-800">
        <p class="text-2xl font-sans font-semibold text-white">
          Ready to Get Started?
          <span class="text-base block italic tracking-widest text-center text-blue-100">
            A free, no obligation quote
          </span>
        </p>
        <form
          action="success"
          class="quote-form py-3 mt-8 sm:w-1/2"
          name="quote"
          data-netlify="true"
          autocomplete="off"
          netlify-honeypot="bot-field"
        >
          <p class="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div class="flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-x-4">
            <div class="flex flex-col lg:w-1/2 gap-y-4 lg:gap-6">
              <input
                class="quote-form-input"
                type="text"
                id="name"
                name="name"
                required
                pattern="\S+.*"
                placeholder="Name"
              />
              <input
                class="quote-form-input"
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
            </div>
            <div class="flex flex-col lg:w-1/2 gap-y-4 lg:gap-6">
              <input
                class="quote-form-input"
                type="tel"
                id="phone"
                name="phone"
                required
                pattern="^\d{10}$"
                minlength="10"
                maxlength="10"
                placeholder="Phone"
              />
              <input
                class="quote-form-btn"
                type="submit"
                id="submit-button"
                value="Get Quote"
              />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default About;
