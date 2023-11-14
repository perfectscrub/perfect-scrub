import Head from "next/head";
import Link from "next/link";

const Success = () => {
  return (
    <>
      <Head>
        <title>Perfect Scrub Cleaning Services - Success Page</title>
        <meta
          content="Thank you for taking the time to contact us"
          name="description"
        />
      </Head>
      <main role="main">
        <section className="h-screen flex flex-col place-content-center">
          <div>
            <h4 className="text-center text-green-600 tracking-wider text-3xl lg:text-5xl font-bold">
              Thanks!
            </h4>
            <p className="px-10 pt-10 text-center self-center font-medium text-xl lg:text-2xl">
              We'll be in touch soon.
            </p>
          </div>
          <Link
            className="self-center text-white bg-blue-900 px-6 py-4 mt-5 rounded"
            href="index"
          >
            Back to Homepage
          </Link>
        </section>
      </main>
    </>
  );
};

export default Success;
