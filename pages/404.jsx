import Link from "next/link";
import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Perfect Scrub Cleaning Services - 404 Page</title>
        <meta
          content="Error finding the page you requested"
          name="description"
        />
      </Head>
      <main role="main">
        <section className="h-screen flex flex-col place-content-center p-4">
          <h4 className="max-w-prose text-center text-gray-700 tracking-wider text-3xl lg:text-5xl font-bold">
            You seem to have taken a wrong turn!
          </h4>
          <p className="px-10 pt-10 text-center self-center font-normal text-xl lg:text-2xl">
            Sorry about that. Let's get you back on track. :)
          </p>
          <Link
            className="self-center text-white bg-blue-900 px-6 py-4 mt-5 rounded"
            href="/"
          >
            Back to Homepage
          </Link>
        </section>
      </main>
    </>
  );
};

export default Custom404;
