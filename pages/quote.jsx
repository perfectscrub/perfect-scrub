import MonogramOverlay from "@/components/monogram-overlay/MonogramOverlay";
import QuoteForm from "@/components/quote-form/QuoteForm";
import Head from "next/head";

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
        <section className="landing-section relative overflow-hidden flex flex-col lg:flex-row lg:justify-between pt-28 lg:pt-44 lg:pl-10 bg-gradient-to-br from-blue-600 to-green-400">
          <h1 className="font-semibold text-3xl lg:text-5xl text-gray-50 mt-10 mx-10 mb-8">
            Get A Quote
          </h1>
          {/* Monogran Overlay */}
          <MonogramOverlay />
          {/* Contact Info */}
          <div className="get-a-quote-image w-full lg:w-1/2 self-end"/>
        </section>

        {/* Quote Form */}
        <QuoteForm />

        {/* Google Map Location*/}
        {/* <section className="relative h-96">
    <div className="absolute top-0 right-0 left-0 bottom-0 pointer-events-none bg-blue-500 opacity-20"></div>
    <iframe width="100%" height="100%" frameBorder="0" scrolling="yes" marginHeight="0" marginWidth="0"
      src="https://maps.google.com/maps?width=753&amp;height=300&amp;hl=en&amp;q=toronto cn tower&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
  </section> */}
      </main>
    </>
  );
};

export default Quote;
