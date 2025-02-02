import Link from "next/link";
import ContactForm from "@/components/contact-form/ContactForm";
import MonogramOverlay from "@/components/monogram-overlay/MonogramOverlay";

export const metadata = {
  title: " Contact Us",
  description:
    "Contact us | we are a cleaning service for the Greater Toronto Area. For more information, Please contact us",
};

const Contact = () => {
  return (
    <main role="main">
      <section className="landing-section relative overflow-hidden flex flex-col lg:flex-row lg:justify-between pt-28 lg:pt-44 lg:pl-10 bg-gradient-to-br from-blue-600 to-green-400">
        <h1 className="font-semibold text-3xl lg:text-5xl text-gray-50 mt-10 mx-10 mb-8">
          Contact Us
        </h1>
        {/* Monogran Overlay */}
        <MonogramOverlay />
        {/* Contact Image */}
        <div className="get-in-touch-image w-full lg:w-1/2 place-self-end" />
      </section>
      {/* Contact Form */}
      <ContactForm />

      <section
        id="contact-us"
        className="flex justify-center items-center py-16 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-xl"
      >
        {/* Contact Info */}
        <div className="w-full lg:w-3/4 rounded-md overflow-hidden lg:shadow-2xl z-20">
          <div className=" w-full bg-white bg-opacity-30 h-full py-12">
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-3xl mb-10 text-center text-gray-800">
                Get in Touch
              </h2>
              <div>
                <div className="flex items-center mb-10">
                  <div className="p-2 rounded-full mr-6 bg-green-200">
                    <svg
                      className="text-gray-800 fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.3649 1.88322C4.30193 1.80222 4.22245 1.73554 4.13173 1.68762C4.04101 1.6397 3.94113 1.61162 3.83873 1.60527C3.73633 1.59891 3.63375 1.61442 3.5378 1.65075C3.44185 1.68709 3.35474 1.74342 3.28223 1.81602L2.1793 2.92002C1.6641 3.43628 1.47423 4.16695 1.6993 4.80802C2.63342 7.46144 4.15295 9.87052 6.14517 11.8566C8.13122 13.8487 10.5403 15.3683 13.1937 16.3024C13.8348 16.5275 14.5654 16.3376 15.0817 15.8224L16.1846 14.7195C16.2572 14.647 16.3136 14.5599 16.3499 14.4639C16.3862 14.368 16.4017 14.2654 16.3954 14.163C16.389 14.0606 16.361 13.9607 16.313 13.87C16.2651 13.7793 16.1984 13.6998 16.1174 13.6368L13.6566 11.7232C13.5701 11.6561 13.4694 11.6095 13.3623 11.587C13.2551 11.5644 13.1442 11.5665 13.038 11.5931L10.702 12.1766C10.3902 12.2545 10.0635 12.2503 9.75375 12.1645C9.44401 12.0788 9.16177 11.9142 8.9345 11.687L6.31477 9.06615C6.08732 8.83899 5.92258 8.5568 5.83659 8.24706C5.75061 7.93732 5.7463 7.61058 5.8241 7.29869L6.40863 4.96268C6.4352 4.85644 6.43729 4.74555 6.41475 4.63838C6.39221 4.53121 6.34562 4.43056 6.2785 4.34402L4.3649 1.88322ZM2.4769 1.01175C2.66356 0.82503 2.88781 0.680157 3.13475 0.58675C3.3817 0.493343 3.64569 0.453539 3.9092 0.469984C4.17271 0.486428 4.4297 0.558742 4.66312 0.682126C4.89654 0.80551 5.10103 0.977139 5.26303 1.18562L7.17663 3.64535C7.52757 4.09655 7.6513 4.68428 7.51263 5.23895L6.92917 7.57495C6.899 7.69594 6.90063 7.82268 6.9339 7.94286C6.96717 8.06303 7.03094 8.17256 7.11903 8.26082L9.73983 10.8816C9.82819 10.9699 9.93791 11.0338 10.0583 11.067C10.1787 11.1003 10.3056 11.1018 10.4268 11.0715L12.7617 10.488C13.0354 10.4196 13.3211 10.4143 13.5972 10.4725C13.8733 10.5307 14.1325 10.6509 14.3553 10.824L16.815 12.7376C17.6993 13.4256 17.7804 14.7323 16.9889 15.5227L15.886 16.6256C15.0966 17.415 13.9169 17.7616 12.8172 17.3744C10.0024 16.384 7.44679 14.7726 5.33983 12.6598C3.22707 10.5531 1.61568 7.99784 0.625166 5.18348C0.239033 4.08482 0.585699 2.90402 1.37503 2.11468L2.47797 1.01175H2.4769Z" />
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="17.0667"
                            height="17.0667"
                            fill="white"
                            transform="translate(0.466797 0.466667)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-gray-600">
                      Telephone Number
                    </span>
                    <span className="block font-medium text-gray-600">
                      <Link href="tel:4375245122">437 524 5122</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-10">
                <div className="p-2 rounded-full mr-6 bg-green-200">
                  <svg
                    className="text-gray-800 fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.8571 0H1.14286C0.839753 0 0.549062 0.120408 0.334735 0.334735C0.120408 0.549062 0 0.839753 0 1.14286V10.2857C0 10.5888 0.120408 10.8795 0.334735 11.0938C0.549062 11.3082 0.839753 11.4286 1.14286 11.4286H14.8571C15.1602 11.4286 15.4509 11.3082 15.6653 11.0938C15.8796 10.8795 16 10.5888 16 10.2857V1.14286C16 0.839753 15.8796 0.549062 15.6653 0.334735C15.4509 0.120408 15.1602 0 14.8571 0V0ZM13.6 1.14286L8 5.01714L2.4 1.14286H13.6ZM1.14286 10.2857V1.66286L7.67429 6.18286C7.76994 6.24922 7.88358 6.28478 8 6.28478C8.11642 6.28478 8.23006 6.24922 8.32571 6.18286L14.8571 1.66286V10.2857H1.14286Z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-medium text-gray-600">
                    Email Address
                  </span>
                  <span className="block font-medium text-gray-600">
                    <Link href="mailto:info@perfectscrubcleaning.com">
                      info@perfectscrubcleaning.com
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Google Map Location*/}
      <section className="relative h-96">
        <div className="absolute top-0 right-0 left-0 bottom-0 pointer-events-none bg-blue-500 opacity-20"></div>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="yes"
          marginHeight="0"
          marginWidth="0"
          title="toronto map"
          src="https://maps.google.com/maps?width=753&amp;height=300&amp;hl=en&amp;q=toronto cn tower&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;
