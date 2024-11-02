import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: " Frequently asked Questions",
  description: "Frequently asked Questions",
};

const Faq = () => {
  return (
    <main role="main">
      {/* Start of 'FAQs' Landing */}
      <section className="flex px-8 lg:px-0 justify-center bg-gray-100">
        <div className="flex flex-col lg:flex-row items-center max-w-screen-xl lg:px-8">
          <div className="pt-32 pb-20 lg:pt-44 lg:pb-32">
            <h1 className="text-xs lg:text-base uppercase font-bold mb-2 lg:mb-4 text-gray-400">
              FAQS
            </h1>
            <h2 className="font-semibold text-3xl lg:text-5xl text-gray-700 mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sed pharetra magna tortor at ultrices nisi id orci. Sit blandit
              elementum enim vel, volutpat scelerisque et nibh.
            </p>
          </div>
          {/* FAQ Overlapping Image */}
          <div className="lg:pt-28 -mb-12 g:-mb-16 w-1/2">
            <Image
              width={500}
              height={500}
              className="max-h-full object-cover shadow-lg"
              src="/faqs.png"
              alt="Pens and a notepad on a white surface"
            />
          </div>
        </div>
      </section>

      {/* Start of FAQ dropdowns*/}
      <section className="pt-48 pb-40 lg:pt-40 lg:pb-60 flex justify-center -mt-8">
        <ul className="mx-4 w-full md:mx-auto md:w-2/3 lg:mx-auto lg:w-2/5">
          {/* 1st drop down subsection*/}
          <div>
            <h3 className="font-workSans uppercase text-2xl font-semibold text-gray-700">
              Taxation
            </h3>

            {/* FAQ */}
            <li className="inline-block w-full my-8">
              <details className=" shadow-md bg-gray-200">
                <summary className="cursor-pointer px-6 py-4 lg:px-12 lg:py-8 font-medium text-base lg:text-lg text-gray-700">
                  <div className="flex items-center">
                    <span className="pr-4 lg:pr-8">
                      <svg
                        className="h-3 fill-current text-gray-600 "
                        width="28"
                        height="18"
                        viewBox="0 0 28 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
                      </svg>
                    </span>
                    <span>
                      Some insightful question that will be promptly answered?
                    </span>
                  </div>
                </summary>
                <p className="px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-gray-600">
                  Here is the answer to said insightful question which does
                  include many illuminating responses that do their utmost at
                  portraying an air of trust, professionalism in a beautifully
                  succinct manner.
                </p>
              </details>
            </li>

            {/* FAQ */}
            <li className="inline-block w-full my-8">
              <details className=" shadow-md bg-gray-200">
                <summary className="cursor-pointer px-6 py-4 lg:px-12 lg:py-8 font-medium text-base lg:text-lg text-gray-700">
                  <div className="flex items-center">
                    <span className="pr-4 lg:pr-8">
                      <svg
                        className="h-3 fill-current text-gray-600 "
                        width="28"
                        height="18"
                        viewBox="0 0 28 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
                      </svg>
                    </span>
                    <span>
                      Some insightful question that will be promptly answered?
                    </span>
                  </div>
                </summary>
                <p className="px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-gray-600">
                  Here is the answer to said insightful question which does
                  include many illuminating responses that do their utmost at
                  portraying an air of trust, professionalism in a beautifully
                  succinct manner.
                </p>
              </details>
            </li>

            {/* FAQ */}
            <li className="inline-block w-full my-8">
              <details className=" shadow-md bg-gray-200">
                <summary className="cursor-pointer px-6 py-4 lg:px-12 lg:py-8 font-medium text-base lg:text-lg text-gray-700">
                  <div className="flex items-center">
                    <span className="pr-4 lg:pr-8">
                      <svg
                        className="h-3 fill-current text-gray-600 "
                        width="28"
                        height="18"
                        viewBox="0 0 28 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
                      </svg>
                    </span>
                    <span>
                      Some insightful question that will be promptly answered?
                    </span>
                  </div>
                </summary>
                <p className="px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-gray-600">
                  Here is the answer to said insightful question which does
                  include many illuminating responses that do their utmost at
                  portraying an air of trust, professionalism in a beautifully
                  succinct manner.
                </p>
              </details>
            </li>
          </div>

          {/* 2nd drop down subsection*/}
          <div>
            <h3 className="uppercase mt-16 lg:mt-32 font-workSans text-2xl font-semibold text-gray-700">
              Other Support Services
            </h3>
            {/* FAQ */}
            <li className="inline-block w-full my-8">
              <details className=" shadow-md bg-gray-200">
                <summary className="cursor-pointer px-6 py-4 lg:px-12 lg:py-8 font-medium text-base lg:text-lg text-gray-700">
                  <div className="flex items-center">
                    <span className="pr-4 lg:pr-8">
                      <svg
                        className="h-3 fill-current text-gray-600 "
                        width="28"
                        height="18"
                        viewBox="0 0 28 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
                      </svg>
                    </span>
                    <span>
                      Some insightful question that will be promptly answered?
                    </span>
                  </div>
                </summary>
                <p className="px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-gray-600">
                  Here is the answer to said insightful question which does
                  include many illuminating responses that do their utmost at
                  portraying an air of trust, professionalism in a beautifully
                  succinct manner.
                </p>
              </details>
            </li>

            <li className="inline-block w-full my-8">
              <details className=" shadow-md bg-gray-200">
                <summary className="cursor-pointer px-6 py-4 lg:px-12 lg:py-8 font-medium text-base lg:text-lg text-gray-700">
                  <div className="flex items-center">
                    <span className="pr-4 lg:pr-8">
                      <svg
                        className="h-3 fill-current text-gray-600 "
                        width="28"
                        height="18"
                        viewBox="0 0 28 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24.5313 0L14 10.5313L3.46872 0L0 3.46872L14 17.4687L28 3.46872L24.5313 0Z" />
                      </svg>
                    </span>
                    <span>
                      Some insightful question that will be promptly answered?
                    </span>
                  </div>
                </summary>
                <p className="px-6 pb-6 pt-2 lg:px-12 lg:pb-12 lg:-mt-2 leading-relaxed text-gray-600">
                  Here is the answer to said insightful question which does
                  include many illuminating responses that do their utmost at
                  portraying an air of trust, professionalism in a beautifully
                  succinct manner.
                </p>
              </details>
            </li>
            {/* FAQ */}
          </div>
        </ul>
      </section>

      {/* Start of 'Ready To Get Started' Section */}
      <section className="get_started__header flex flex-col items-center pt-14 pb-16 lg:pt-28 lg:pb-28 bg-blue-900">
        <h2 className="text-center font-bold px-4 lg:px-0 text-3xl lg:text-4xl uppercase text-gray-50">
          Ready to Get Started?
        </h2>
        <Link
          className="link_underline inline-block text-2xl mt-16 text-gray-50"
          href="quote"
        >
          Request a free quote.
        </Link>
      </section>
    </main>
  );
};

export default Faq;
