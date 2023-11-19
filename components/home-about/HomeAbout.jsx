import Image from 'next/image';
import Link from 'next/link';

const HomeAboutSection = () => {
  return (
    <section
          className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-16 pb-8 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 via-gray-200 to-gray-100">
          <div className="flex flex-col lg:flex-row lg:mx-8">
            <div className="w-full lg:w-1/2 lg:px-8">
              <h2 className="text-3xl font-sans font-light ">A little <span className="font-bold">About us</span></h2>
              <p className="text-lg font-medium mt-4">Leave your cleaning to us. We are great at it</p>
              <p className="mt-2 leading-relaxed">A clean work environment can significantly increase mood and productivity. Let
                us take care of that for you.</p>
              <div className="max-w-xl pt-6">
                <Image width={1272} height={848} src="/office-space.jpg" alt="clean corporate office space" />
              </div>
            </div>

            <div className="flex flex-col justify-around px-4 mt-8 md:mt-0 lg:w-1/2 lg:px-8">
              <div className="flex flex-col md:flex-row items-center mt-10 md:mt-6">
                <div>
                  <div className="flex justify-center items-center w-16 h-16">
                    <Image width={40} height={40} className="w-16 h-16" src="/discount-hand.svg" alt="" />
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-8">
                  <h3 className="text-xl font-bold">We can customize cleaning services for your business</h3>
                  <p className="mt-2 leading-relaxed">Our comprehensive services will enable you to get the best out of your
                    workspaces and excellent value for money spent. At Perfect Scrub, clients can customize to fit their
                    budget
                    and preferences as we do not tie you into a contract. You have utmost flexibility to adjust your
                    services as required.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center mt-10 md:mt-12">
                <div>
                  <div className="flex justify-center items-center w-16 h-16">
                    <Image width={40} height={40} className="w-16 h-16" src="/clock.svg" alt="" />
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-8">
                  <h3 className="text-xl font-bold">Our response time is top class</h3>
                  <p className="mt-2 leading-relaxed">We are responsive to our clients and ensure we respond to your queries
                    within 3 hours at most.
                    We offer our services to clients within the GTA. Call us for a free walk-through of your space today!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="md:text-xl my-4 mx-auto py-10 text-center">
            Want to know more about {" "}
            <Link href="/about" className="text-blue-600 underline">
              why we do this?
            </Link>
          </p>
        </section>
  )
}

export default HomeAboutSection;