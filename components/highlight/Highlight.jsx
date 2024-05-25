import Image from "next/image"
import Link from "next/link"
import HomeFacilitiesList from "../homeFacilitiesList/HomeFacilitiesList";


const Highlight = () => {
  return (
    <section className="flex flex-col pt-10">
          <div className="flex flex-col-reverse lg:flex-row gap-8 p-4 mt-12 md:mt-0 lg:p-20">
            <Image width={500} height={400} className="w-full md:w-1/2 object-cover mx-auto md:mb-10" src="/two-women-cleaning-office.jpg" alt="" />
            <article className="w-full lg:w-1/2 text-left">
              <h2 className="text-3xl font-sans font-light ">
                <Link href="/commercial-cleaning/office-buildings-cleaning" className="hover:underline">
                  <span className="font-bold">Office Cleaning</span></Link>
                {" "}that makes a difference
              </h2>
              <p className="my-5">Our dedicated cleaners understand the importance of thoroughness. They
                sweep, mop, and vacuum every nook and cranny, leaving no corner untouched. </p>
              <p className="my-5">We meticulously dust and sanitize surfaces, ensuring a germ-free environment that promotes
                health and well-being. By paying
                close attention to even the smallest details, we can guarantee a polished appearance that reflects
                the company's professionalism and commitment to excellence.</p>
              <p className="my-5">Leaving you a pristine work environment is our priority. Going above
                and beyond to ensure the utmost care in our work. That is what motivates us. We take great pride in our
                work.
                Because we believe that our dedication contributes to the overall success of the companies we serve.</p>
            </article>
          </div>
          <div className="px-4 mb-6 md:mx-8 lg:mb-14 flex flex-col lg:flex-row lg:gap-x-4">
            <article className="w-full lg:w-1/2 text-left pl-2 max-w-2xl flex flex-col">
              <h2 className="text-3xl font-sans font-light"><span className="font-bold">Facilities</span> we serve</h2>
              <p className="my-5">We provide our services to a wide range of facilities and establishments. Some of the
                facilities we serve include:</p>
              <HomeFacilitiesList />
            </article>
            <Image width={1000} height={400} src="/facilities/gym-cleaner.jpg" alt="a modern gym" className="hidden lg:block w-full md:w-1/2 lg:mt-10 object-contain rounded-md" />
          </div>
        </section>
  )
}

export default Highlight;