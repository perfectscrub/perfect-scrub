
import { useRouter } from "next/router";
import Link from 'next/link';
import { submitHandler } from "@/utils/form";

const QuoteForm = () => {
  const router = useRouter();

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    const form = e.currentTarget
    submitHandler(form, "quote-large-form");
    router.push("/success");

  }
  return (
    <section className="contact bg-blue-100 px-4 py-12 lg:pt-24 lg:pb-32">
          {/* Form */}
          <div className="text-gray-700 bg-blue-100 p-4 pb-8 mx-auto max-w-2xl">
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
            <p className="text-blue-700 font-sans text-base font-semibold mt-4 pb-4">
              Fill out the form below and we'll get back to you.
            </p>
            <form
              action="success"
              name="quote-large-form"
              data-netlify="true"
              autoComplete="off"
              netlify-honeypot="bot-field"
              onSubmit={handleFormSubmit}
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
                    minLength="1"
                    maxLength="30"
                    placeholder="the placeholder"
                    autoComplete="off"
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
                    minLength="0"
                    maxLength="30"
                    title="Please fill a last name. Not required."
                    placeholder="the placeholder"
                    autoComplete="off"
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
                    minLength="10"
                    maxLength="10"
                    autoComplete="off"
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
                    autoComplete="off"
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
                  maxLength="100"
                  title="Please fill a company name. Not required."
                  placeholder="the placeholder"
                  autoComplete="off"
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
                    maxLength="150"
                    title="Office Address"
                    placeholder="the placeholder"
                    autoComplete="off"
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
                    autoComplete="off"
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
                    maxLength="150"
                    title="Number of washrooms"
                    placeholder="the placeholder"
                    autoComplete="off"
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
                    autoComplete="off"
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
                  autoComplete="off"
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
                    autoComplete="off"
                  />
                  <label htmlFor="yes" className="label-yes">
                    Yes
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="no"
                    name="previous-cleaning-service"
                    value="no"
                    autoComplete="off"
                  />
                  <label htmlFor="no" className="label-no">
                    No
                  </label>
                </div>
              </div>
              <p className="my-4">How did you hear about us?</p>
              <div className="grid grid-col-4 gap-2 my-4 text-xs">
                <label htmlFor="referral" className="col-start-1 flex items-center gap-1">
                  <input
                    type="checkbox"
                    id="referral"
                    name="found by referral"
                    value="referral"
                    autoComplete="off"
                  />
                  Referral
                </label>
                <label htmlFor="search" className="col-start-1 flex items-center gap-1">
                  <input
                    type="checkbox"
                    id="search"
                    name="found by search"
                    value="search"
                    autoComplete="off"
                  />
                  {" "}Internet Search
                </label>
                <label htmlFor="social-media" className="col-start-1 flex items-center gap-1">
                  <input
                    type="checkbox"
                    id="social-media"
                    name="found by social media"
                    value="social-media"
                    autoComplete="off"
                  />
                  Social Media
                </label>
                <label htmlFor="other" className="col-start-1 flex items-center gap-1">
                  <input
                    type="checkbox"
                    id="other"
                    name="found by other means"
                    value="other"
                    autoComplete="off"
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
  )
}

export default QuoteForm;