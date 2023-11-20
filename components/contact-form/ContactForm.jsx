import Link from 'next/link';

const ContactForm = () => {
  return (
    <section className="relative contact bg-gradient-bl from-gray-50 to-blue-200 px-4 py-12 lg:pt-24 lg:pb-32">
          {/* Form */}
          <div className="text-gray-700 bg-transparent p-4 pb-8 mx-auto max-w-2xl">
            <h2 className="font-sans text-4xl font-semibold mt-6">
              Have a question for us?
            </h2>
            <p className="text-gray-700 font-sans text-xl font-semibold mt-4 lg:w-1/2 italic">
              or do you want a{" "}
              <Link className="text-green-500 underline" href="quote">
                free quote
              </Link>
              ?
            </p>
            <p className="text-blue-700 font-sans text-base font-semibold mt-4 lg:w-1/2">
              We are more than happy to help. Fill out the form below and we'll
              get back to you.
            </p>
            <form
              action="success"
              name="contact"
              data-netlify="true"
              autoComplete="off"
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
                    title="No spaces required"
                    placeholder="the placeholder"
                    autoComplete="off"
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
              <div className="mt-4">
                <label className="font-semibold" htmlFor="choose-service">
                  Please choose a service:
                </label>
                <div className="select-wrapper mt-2">
                  <select name="choose-service" id="choose-service">
                    <option value="">None</option>
                    <option value="Standard Cleaning">Standard Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Disinfecting Services">
                      Disinfecting Services
                    </option>
                    <option value="Janitorial Services">
                      Janitorial Services
                    </option>
                    <option value="Carpet Cleaning">Carpet Cleaning</option>
                    <option value="Consumables">Washroom & Consumables</option>
                  </select>
                </div>
              </div>
              <div>
                <textarea
                  className="rounded"
                  name="question"
                  placeholder="Your Question"
                  id="question"
                  cols="30"
                  rows="5"
                  minLength="10"
                  maxLength="100"
                  required
                  autoComplete="off"
                ></textarea>
              </div>
              <button
                type="submit"
                id="submit-button"
                className="w-full md:w-1/2 uppercase font-semibold text-center px-5 py-3 shadow-md my-4 lg:mb-0 bg-green-600 border border-green-500 text-white hover:bg-green-400 hover:border-green-400 focus:ring-4 focus:ring-green-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
  )
}

export default ContactForm