import Image from "next/image";
import Link from "next/link";


const Blog = () => {
  return (

    
    <main role="main">

  {/* Start of Blog*/}
  <section class="pt-36 pb-40 lg:pt-40 lg:pb-60 flex justify-center">
    <div class="mx-8 w-full md:mx-auto md:w-11/12 lg:mx-auto lg:w-1/2">
      {/* 5th Blog Post (Main)*/}
      <Link href="blog/find-the-best-commercial-cleaning-near-me-in-2023">
        <div class="md:grid md:grid-cols-5 mb-16 md:mb-12">
          <div class="min-h-0 col-start-1 col-end-4">
            <Image width={500} height={500} class="h-full w-full object-cover rounded-md" src="https://images.surferseo.art/fb47003a-4b8f-4b37-a5f8-2689217819e1.jpeg"
              alt="peopla around a laptop" />
          </div>
          <div class="flex min-h-0 flex-col col-start-4 col-end-6 md:ml-6">
            <div class="mt-2 md:mt-0"><span class="uppercase font-semibold text-gray-700 text-xs">Advice</span><span
                class="text-gray-400 mx-2 font-medium text-sm">Oct 09, 2023</span></div>
            <h2 class="font-workSans text-2xl font-semibold my-2 text-gray-700">
              Find the Best Commercial Cleaning Near Me in 2023</h2>
            <p class="text-sm mb-6 flex-grow text-gray-600">Are you tired of dealing with sub-par cleaning services for your Toronto and GTA-based business? It’s time to discover top-notch “commercial cleaning” services that meet your unique requirements and help you maintain a clean, healthy, and productive workspace...</p>
            <div class="flex items-center">
              {/* <div class="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                <Image width={500} height={500} class="w-full h-full object-cover object-bottom" src="/writer.png"
                alt="">
              </div> */}
              <div class="ml-2 text-xs">
                <span class="block font-semibold text-gray-700">Buki Folashakin</span>
                <span class="block font-medium text-gray-500">Blogger</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* 5th Blog Post (Main) end*/}
      {/* 4th Blog Post*/}
      <Link href="blog/indicators-to-assess-the-performance-of-your-cleaning-contract">
        <div class="md:grid md:grid-cols-5 mb-16 md:mb-12">
          <div class="min-h-0 col-start-1 col-end-4">
            <Image width={500} height={500} class="h-full w-full object-cover rounded-md" src="/blog/planning-together.jpg"
              alt="peopla around a laptop" />
          </div>
          <div class="flex min-h-0 flex-col col-start-4 col-end-6 md:ml-6">
            <div class="mt-2 md:mt-0"><span class="uppercase font-semibold text-gray-700 text-xs">Advice</span><span
                class="text-gray-400 mx-2 font-medium text-sm">Sep 13, 2023</span></div>
            <h2 class="font-workSans text-2xl font-semibold my-2 text-gray-700">
              5 indicators to assess the performance of your cleaning contract</h2>
            <p class="text-sm mb-6 flex-grow text-gray-600">You are the Facility manager responsible for the look and feel of the office. You have hired a cleaning company who say they do scheduled cleaning as agreed with your company.</p>
            <div class="flex items-center">
              {/* <div class="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                <Image width={500} height={500} class="w-full h-full object-cover object-bottom" src="/writer.png"
                alt="">
              </div> */}
              <div class="ml-2 text-xs">
                <span class="block font-semibold text-gray-700">Buki Folashakin</span>
                <span class="block font-medium text-gray-500">Blogger</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* 4th Blog Post (Main) end*/}
      <h2 class="text-2xl my-20">Other Articles</h2>
      <div class="md:flex gap-10 items-center">
        {/* 3rd Blog Post*/}
        <div class="flex flex-col md:w-1/2 md:mr-4 mb-16 md:mb-0">
          <Link href="blog/why-you-need-a-cleaning-service">
            <div class="w-full h-60">
              <Image width={500} height={500} class="h-full w-full object-cover rounded-md" src="/blog/business-man-with-pen-mark-checkbox.jpg"
                alt="A man checking boxes on the screen" />
            </div>
            <div class="flex flex-col">
              <div class="mt-2"><span class="uppercase font-semibold text-gray-700 text-xs">Advice</span><span
                  class="text-gray-400 mx-2 font-medium text-sm">Jun 2, 2023</span></div>
              <h2 class="font-workSans text-2xl font-semibold my-2 text-gray-700">Why You Need a Cleaning Service and How to Pick One</h2>
              <p class="text-sm mb-6 flex-grow text-gray-600">In today's fast-paced business world,
                maintaining a clean and hygienic environment is essential for the success . . .</p>
              <div class="flex items-center">
                {/* <div class="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image width={500} height={500} class="w-full h-full object-cover object-bottom" src="/writer-3.png"
                  alt="">
                </div> */}
                <div class="ml-2 text-xs">
                  <span class="block font-semibold text-gray-700">Matthew Oke</span>
                  <span class="block font-medium text-gray-500">Health and Productivity Blogger</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* 2nd Blog Post*/}
        <div class="flex flex-col md:w-1/2 md:mr-4 mb-16 md:mb-0">
          <Link href="blog/ten-ways-a-clean-office-supports-mental-health-at-work">
            <div class="h-60">
              <Image width={500} height={500} class="h-full w-full object-cover rounded-md" src="/blog/happy-employees.jpg"
                alt="Happy employees behind a desk." />
            </div>
            <div class="flex flex-col">
              <div class="mt-2"><span class="uppercase font-semibold text-gray-700 text-xs">Productivity</span><span
                  class="text-gray-400 mx-2 font-medium text-sm">Mar 13, 2023</span></div>
              <h2 class="font-workSans text-2xl font-semibold my-2 text-gray-700">10 ways a clean office supports mental health at work</h2>
              <p class="text-sm mb-6 flex-grow text-gray-600">A clean office environment can have significant
                benefits for the mental health and well-being of your staff. . .</p>
              <div class="flex items-center">
                {/* <div class="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image width={500} height={500} class="w-full h-full object-cover object-bottom" src="/writer-3.png"
                  alt="">
                </div> */}
                <div class="ml-2 text-xs">
                  <span class="block font-semibold text-gray-700">Matthew Oke</span>
                  <span class="block font-medium text-gray-500">Health and Productivity Blogger</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* 1st Blog Post*/}
        {/* <div class="flex flex-col md:w-1/2 md:ml-4">
          <Link href="blog/tough-stains-and how to remove-them">
          <div>
          <Image width={500} height={500} class="h-full w-full object-cover rounded-md" src="/blog/stained-carget.jpg"
          alt="Mud prints on a carpet">
          </div>
          <div class="flex flex-col">
          <div class="mt-2"><span class="uppercase font-semibold text-gray-700 text-xs">Advice</span>
          <span class="text-gray-400 mx-2 font-medium text-sm">Feb 16, 2023</span>
          </div>
          <h2 class="font-workSans text-2xl font-semibold my-2 text-gray-700">
          Tough Stains - Do you know how to remove them
          </h2>
          <p class="text-sm mb-6 flex-grow text-gray-600">
          Stains can be an unwelcome guest on our favorite clothing, carpets, upholstery, or any surface. From red wine spills and stubborn grease marks. . .
          </p>
        <div class="flex items-center"> */}
                {/* <div class="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image width={500} height={500} class="w-full h-full object-cover object-bottom" src="/writer-2.png"
                    alt="">
                  </div> */}
                {/* <div class="ml-2 text-xs">
                  <span class="block font-semibold text-gray-700">Matthew Oke</span>
                  <span class="block font-medium text-gray-500">Health and Productivity Blogger</span>
                  </div>
                  </div>
                  </div>
                  </Link>
                </div> */}


      </div>
    </div>
  </section>


  {/* Start of 'Ready To Get Started' Section */}
  <section class="relative overflow-hidden flex flex-col items-center pt-14 pb-16 lg:pt-28 lg:pb-28 bg-gradient-to-b from-blue-600 to-blue-900">
    <h2 class="text-center max-w-2xl font-bold px-4 lg:px-0 text-2xl lg:text-3xl text-gray-50">
      At Perfect Scrub clients can customize to fit their budget and needs.
    </h2>
    <Link class="link_underline inline-block text-2xl mt-16 p-3 text-gray-50 z-20" href="quote">Request a free quote today</Link>
    {/* Monogran Overlay -2 */}
    <div class="ps-monogram-image-bottom w-80 h-80 lg:w-100 lg:h-100 absolute -bottom-3 lg:-bottom-10 -right-3 opacity-10 z-10"></div>
  </section>

  </main>
                )
            }
            
            export default Blog