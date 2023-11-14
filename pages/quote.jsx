import Head from "next/head";
import Link from "next/link";

const Quote = () => {
  return (
    <>
      <Head>
        <title>Perfect Scrub Cleaning Services - Get A Quote</title>
        <meta
          content="Get a quote | We can generate a free quote for you. A budget friendly cleaning service at your service"
          name="description"
        />
      </Head>
      <main role="main">
        <section className="landing-section relative overflow-hidden flex flex-col lg:flex-row lg:justify-around pt-28 lg:pt-44 lg:pl-10 bg-gradient-to-br from-blue-600 to-green-400">
          <h1 className="font-semibold text-3xl lg:text-5xl text-gray-50 mt-10 mx-10 mb-8">
            Get A Quote
          </h1>
          {/* Monogran Overlay */}
          <div className="ps-monogram-image object-cover w-72 h-72 absolute -bottom-5 lg:left-0 opacity-20 z-10"></div>
          {/* Contact Info */}
          <div className="get-a-quote-image w-full lg:w-1/2 place-self-end"></div>
        </section>

        {/* Quote Form */}
        <section className="contact bg-gradient-bl from-gray-50 to-blue-200 px-4 py-12 lg:pt-24 lg:pb-32">
          {/* Form */}
          <div className="text-gray-700 bg-white p-4 pb-8 mx-auto max-w-2xl">
            <h2 className="font-sans text-4xl font-semibold mt-6">
              Need a quote?
            </h2>
            <p className="text-gray-700 font-sans text-xl font-semibold mt-4 lg:w-1/2 italic">
              or do you have a{" "}
              <Link className="text-blue-500 underline" href="/contact">
                question
              </Link>
              ?
            </p>
            <p className="text-blue-700 font-sans text-base font-semibold mt-4 lg:w-1/2">
              Fill out the form below and we'll get back to you.
            </p>
            <form
              action="success"
              name="quote-large-form"
              data-netlify="true"
              autocomplete="off"
              netlify-honeypot="bot-field"
            >
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <div className="flex flex-col md:flex-row justify-between gap-x-8">
                <div className="input-animated md:w-1/2">
                  <input
                    type="text"
                    id="name"
                    className="required-input"
                    name="name"
                    required
                    pattern="\S+.*"
                    minlength="1"
                    maxlength="30"
                    placeholder="the placeholder"
                  />
                  <label htmlFor="name" className="label-name">
                    <span className="content-name">First Name</span>
                  </label>
                </div>
                <div className="input-animated md:w-1/2">
                  <input
                    type="text"
                    id="lastname"
                    className="optional-input"
                    name="lastname"
                    minlength="0"
                    maxlength="30"
                    title="Please fill a last name. Not required."
                    placeholder="the placeholder"
                  />
                  <label htmlFor="lastname" className="label-lastname">
                    <span className="content-optional">Last Name</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-x-8">
                <div className="input-animated md:w-1/2">
                  <input
                    type="tel"
                    id="phone"
                    className="required-input"
                    name="phone"
                    required
                    pattern="^\d{10}$"
                    minlength="10"
                    maxlength="10"
                    title="No spaces required"
                    placeholder="the placeholder"
                  />
                  <label htmlFor="phone" className="label-phone">
                    <span className="content-phone">Phone</span>
                  </label>
                </div>
                <div className="input-animated md:w-1/2">
                  <input
                    type="email"
                    id="email"
                    className="required-input"
                    name="email"
                    required
                    placeholder="the placeholder"
                  />
                  <label htmlFor="email" className="label-email">
                    <span className="content-email">Email</span>
                  </label>
                </div>
              </div>
              <div className="input-animated">
                <input
                  type="text"
                  id="company"
                  className="optional-input"
                  name="company"
                  pattern="\S*.*"
                  maxlength="100"
                  title="Please fill a company name. Not required."
                  placeholder="the placeholder"
                />
                <label htmlFor="company" className="label-company">
                  <span className="content-optional">Company</span>
                </label>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-x-8">
                <div className="input-animated md:w-1/2">
                  <input
                    type="text"
                    id="address"
                    className="optional-input"
                    name="address"
                    maxlength="150"
                    title="Office Address"
                    placeholder="the placeholder"
                  />
                  <label htmlFor="address" className="label-address">
                    <span className="content-address">Address</span>
                  </label>
                </div>
                <div className="input-animated md:w-1/2">
                  <input
                    type="number"
                    id="sq-footage"
                    className="optional-input"
                    name="sq-footage"
                    placeholder="the placeholder"
                  />
                  <label htmlFor="sq-footage" className="label-sq-footage">
                    <span className="content-sq-footage">Square Footage</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-x-8">
                <div className="input-animated md:w-1/2">
                  <input
                    type="number"
                    id="washrooms"
                    className="optional-input"
                    name="washrooms"
                    maxlength="150"
                    title="Number of washrooms"
                    placeholder="the placeholder"
                  />
                  <label htmlFor="washrooms" className="label-washrooms">
                    <span className="content-washrooms">
                      Number of Washrooms
                    </span>
                  </label>
                </div>
                <div className="input-animated md:w-1/2">
                  <input
                    type="number"
                    id="offices"
                    className="optional-input"
                    name="offices"
                    placeholder="the placeholder"
                  />
                  <label htmlFor="offices" className="label-offices">
                    <span className="content-offices">
                      Number of offices to be cleaned
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <textarea
                  className="rounded"
                  name="question"
                  placeholder="Any additional spaces you would like cleaned?"
                  id="question"
                  cols="30"
                  rows="5"
                  minLength="10"
                  maxLength="100"
                  required
                ></textarea>
              </div>
              <p className="my-4">
                Do you currently work with a cleaning service:
              </p>
              <div className="flex gap-4 my-4">
                <div>
                  <input
                    type="radio"
                    id="yes"
                    name="previous-cleaning-service"
                    value="yes"
                  />
                  <label for="yes" className="label-yes">
                    Yes
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="no"
                    name="previous-cleaning-service"
                    value="no"
                  />
                  <label for="no" className="label-no">
                    No
                  </label>
                </div>
              </div>
              <p className="my-4">How did you hear about us?</p>
              <div className="grid grid-col-4 gap-2 my-4 text-xs">
                <label for="">
                  <input
                    type="checkbox"
                    id=""
                    name="found-by-referral"
                    value="referral"
                  />
                  Referral
                </label>
                <label for="search" className="col-start-3">
                  <input
                    type="checkbox"
                    id="search"
                    name="found-by-search"
                    value="search"
                  />
                  Internet Search
                </label>
                <label for="social-media">
                  <input
                    type="checkbox"
                    id="social-media"
                    name="found-by-social-media"
                    value="social-media"
                  />
                  Social Media
                </label>
                <label for="other" className="col-start-3">
                  <input
                    type="checkbox"
                    id="other"
                    name="found-by-other"
                    value="other"
                  />
                  Other
                </label>
              </div>
              <button
                type="submit"
                id="submit-button"
                className="w-full md:w-1/2 uppercase font-semibold text-center px-5 py-3 shadow-md my-4 lg:mb-0 bg-blue-600 border border-blue-500 text-white hover:bg-blue-500 hover:border-blue-400 focus:ring-4 focus:ring-green-300"
              >
                Get Quote
              </button>
            </form>
          </div>
        </section>

        {/* Google Map Location*/}
        {/* <section className="relative h-96">
    <div className="absolute top-0 right-0 left-0 bottom-0 pointer-events-none bg-blue-500 opacity-20"></div>
    <iframe width="100%" height="100%" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"
      src="https://maps.google.com/maps?width=753&amp;height=300&amp;hl=en&amp;q=toronto cn tower&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
  </section> */}
      </main>
    </>
  );
};

export default Quote;
