import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Why You Need a Cleaning Service and How to Pick One",
  description:
    "Blog | a cleaning service for your business could be worthwhile",
};

const Blog = () => {
  return (
    <main role="main">
      {/* Start of Blog*/}
      <section className="pt-36 pb-40 px-4 lg:pt-40 lg:pb-60 flex justify-center">
        <div className="mx-8 w-full md:mx-auto lg:mx-auto lg:w-3/4">
          {/* 5th Blog Post (Main)*/}
          <Link href="/blog/find-the-best-commercial-cleaning-near-me-in-2023">
            <div className="md:grid md:grid-cols-5 mb-16 md:mb-12">
              <div className="min-h-0 col-start-1 col-end-4">
                <Image
                  width={500}
                  height={500}
                  className="h-full w-full object-cover rounded-md"
                  src="https://images.surferseo.art/fb47003a-4b8f-4b37-a5f8-2689217819e1.jpeg"
                  alt="peopla around a laptop"
                />
              </div>
              <div className="flex min-h-0 flex-col col-start-4 col-end-6 md:ml-6">
                <div className="mt-2 md:mt-0">
                  <span className="uppercase font-semibold text-gray-700 text-xs">
                    Advice
                  </span>
                  <span className="text-gray-400 mx-2 font-medium text-sm">
                    Oct 09, 2023
                  </span>
                </div>
                <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                  Find the Best Commercial Cleaning Near Me in 2023
                </h2>
                <p className="text-sm mb-6 flex-grow text-gray-600">
                  Are you tired of dealing with sub-par cleaning services for
                  your Toronto and GTA-based business? It’s time to discover
                  top-notch “commercial cleaning” services that meet your unique
                  requirements and help you maintain a clean, healthy, and
                  productive workspace...
                </p>
                <div className="flex items-center">
                  {/* <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                <Image width={500} height={500} className="w-full h-full object-cover object-bottom" src="/writer.png"
                alt="">
              </div> */}
                  <div className="ml-2 text-xs">
                    <span className="block font-semibold text-gray-700">
                      Buki Folashakin
                    </span>
                    <span className="block font-medium text-gray-500">
                      Blogger
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* 5th Blog Post (Main) end*/}
          {/* 4th Blog Post*/}
          <Link href="/blog/indicators-to-assess-the-performance-of-your-cleaning-contract">
            <div className="md:grid md:grid-cols-5 mb-16 md:mb-12">
              <div className="min-h-0 col-start-1 col-end-4">
                <Image
                  width={500}
                  height={500}
                  className="h-full w-full object-cover rounded-md"
                  src="/blog/a-group-planning-together.jpg"
                  alt="peopla around a laptop"
                />
              </div>
              <div className="flex min-h-0 flex-col col-start-4 col-end-6 md:ml-6">
                <div className="mt-2 md:mt-0">
                  <span className="uppercase font-semibold text-gray-700 text-xs">
                    Advice
                  </span>
                  <span className="text-gray-400 mx-2 font-medium text-sm">
                    Sep 13, 2023
                  </span>
                </div>
                <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                  5 indicators to assess the performance of your
                  cleaning contract
                </h2>
                <p className="text-sm mb-6 flex-grow text-gray-600">
                  You are the Facility manager responsible for the look and feel
                  of the office. You have hired a cleaning company who say they
                  do scheduled cleaning as agreed with your company.
                </p>
                <div className="flex items-center">
                  {/* <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                <Image width={500} height={500} className="w-full h-full object-cover object-bottom" src="/writer.png"
                alt="">
              </div> */}
                  <div className="ml-2 text-xs">
                    <span className="block font-semibold text-gray-700">
                      Buki Folashakin
                    </span>
                    <span className="block font-medium text-gray-500">
                      Blogger
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* 4th Blog Post (Main) end*/}
          <h2 className="text-2xl mt-20 mb-12">Other Articles</h2>
          <div className="flex flex-col md:flex-row justify-between ">
            {/* 3rd Blog Post*/}
            <div className="flex flex-col md:w-1/2 mb-16 md:mb-0">
              <Link href="/blog/why-you-need-a-cleaning-service">
                <div className="w-60 pb-4">
                  <Image
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-md"
                    src="/blog/business-man-with-pen-mark-checkbox.jpg"
                    alt="A man checking boxes on the screen"
                  />
                </div>
                <div className="flex flex-col md:mr-6">
                  <div className="mt-2">
                    <span className="uppercase font-semibold text-gray-700 text-xs">
                      Advice
                    </span>
                    <span className="text-gray-400 mx-2 font-medium text-sm">
                      Jun 2, 2023
                    </span>
                  </div>
                  <h2 className="font-workSans text-2xl font-semibold my-2text-gray-700">
                    Why You Need a Cleaning Service and How to Pick One
                  </h2>
                  <p className="text-sm mb-6 flex-grow text-gray-600">
                    In today's fast-paced business world, maintaining a clean
                    and hygienic environment is essential . . .
                  </p>
                  <div className="flex items-center">
                    {/* <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image width={500} height={500} className="w-full h-full object-cover object-bottom" src="/writer-3.png"
                  alt="">
                </div> */}
                    <div className="ml-2 text-xs">
                      <span className="block font-semibold text-gray-700">
                        Matthew Oke
                      </span>
                      <span className="block font-medium text-gray-500">
                        Health and Productivity Blogger
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* 2nd Blog Post*/}
            <div className="flex flex-col md:w-1/2 md:mr-4 mb-16 md:mb-0">
              <Link href="/blog/ten-ways-a-clean-office-supports-mental-health-at-work">
                <div className="w-60 pb-4">
                  <Image
                    width={500}
                    height={500}
                    className="h-full w-full object-cover rounded-md"
                    src="/blog/happy-employees.jpg"
                    alt="Happy employees behind a desk."
                  />
                </div>
                <div className="flex flex-col md:mr-6">
                  <div className="mt-2">
                    <span className="uppercase font-semibold text-gray-700 text-xs">
                      Productivity
                    </span>
                    <span className="text-gray-400 mx-2 font-medium text-sm">
                      Mar 13, 2023
                    </span>
                  </div>
                  <h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
                    10 ways a clean office supports mental health at work
                  </h2>
                  <p className="text-sm mb-6 flex-grow text-gray-600">
                    A clean office environment can have significant benefits for
                    the mental health and well-being of your staff. . .
                  </p>
                  <div className="flex items-center">
                    {/* <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image width={500} height={500} className="w-full h-full object-cover object-bottom" src="/writer-3.png"
                  alt="">
                </div> */}
                    <div className="ml-2 text-xs">
                      <span className="block font-semibold text-gray-700">
                        Matthew Oke
                      </span>
                      <span className="block font-medium text-gray-500">
                        Health and Productivity Blogger
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Start of 'Ready To Get Started' Section */}
      <section className="relative overflow-hidden flex flex-col items-center pt-14 pb-16 lg:pt-28 lg:pb-28 bg-gradient-to-b from-blue-600 to-blue-900">
        <h2 className="text-center max-w-2xl font-bold px-4 lg:px-0 text-2xl lg:text-3xl text-gray-50">
          At Perfect Scrub clients can customize to fit their budget and needs.
        </h2>
        <Link
          className="link_underline inline-block text-2xl mt-16 p-3 text-gray-50 z-20"
          href="/quote"
        >
          Request a free quote today
        </Link>
        {/* Monogran Overlay -2 */}
        <div className="ps-monogram-image-bottom w-80 h-80 lg:w-100 lg:h-100 absolute -bottom-3 lg:-bottom-10 -right-3 opacity-10 z-10" />
      </section>
    </main>
  );
};

export default Blog;
