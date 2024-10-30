import Link from "next/link";

const Success = () => {
  return (
    <main role="main">
      <section className="h-screen flex flex-col place-content-center">
        <div>
          <h4 className="text-center text-green-600 tracking-wider text-3xl lg:text-5xl font-bold italic">
            Thank you!
          </h4>
          <p className="px-10 pt-10 text-center self-center font-medium text-xl lg:text-2xl">
            Your message has been sent.
          </p>
          <p className="px-10 pt-5 pb-10 text-center self-center font-medium text-xl lg:text-2xl">
            We'll be in touch soon.
          </p>
        </div>
        <Link
          className="self-center text-white bg-blue-900 px-6 py-4 mt-5 rounded"
          href="/"
        >
          Back to Homepage
        </Link>
      </section>
    </main>
  );
};

export default Success;
