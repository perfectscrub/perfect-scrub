import Image from 'next/image';
import Link from 'next/link';

const Testimonials = () => {
  return (
    <main role="main">

  <section className="pt-12 pb-0 lg:pt-12 lg:pb-32">
    <h1 className="font-semibold text-center text-3xl lg:text-5xl text-gray-700 my-18">Testimonials</h1>
    {/* Testimonials Container */}
    <div className="flex flex-row flex-wrap justify-center pb-18 mx-auto max-w-screen-2xl">

      {/* Start of Testimonial Card*/}
      <div className="w-96 mx-4 shadow-md bg-white mb-16 lg:mb-0 mt-4 h-full">
        <p className="px-6 pt-8 pb-10 text-gray-500">“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta
          pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. <span className="px-1 bg-blue-400 text-white">Aperiam error
            explicabo</span> enim similique quos asperiores omnis est. Sint, in qui! Necessitatibus eaque cupiditate
          incidunt recusandae nam suscipit neque libero quam. .”</p>
        <div className="flex items-center mx-6 pb-6">
          <Image width={500} height={500} className="rounded-full w-16 shadow-inner" src="/Testimonials/smiling_man.png" alt="" />
          <div className="flex flex-col mx-4">
            <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Thom Yorke</span>
            <span className="text-sm text-gray-400">Founder, Radiohead</span>
          </div>
        </div>
      </div>
      {/* End of Testimonial Card*/}

      {/* Start of Testimonial Card*/}
      <div className="w-96 mx-4 shadow-md bg-white mb-16 lg:mb-0 mt-4 h-full">
        <p className="px-6 pt-8 pb-10 text-gray-500">“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta
          pharetra. Risus nunc turpis vehicula sed. <span className="px-1 bg-blue-400 text-white">Aperiam error
            explicabo</span> Volutpat mollis quam volutpat nulla pellentesque. Lorem ipsum dolor sit amet enim similique
          quos asperiores omnis est. Sint, in qui! Necessitatibus eaque cupiditate incidunt recusandae nam suscipit
          neque libero quam. Volutpat mollis <span className="px-1 bg-blue-400 text-white">quam volutpat nulla</span>
          pellentesque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet enim
          similique quos asperiores omnis est. Sint, in qui!”</p>
        <div className="flex items-center mx-6 pb-6">
          <Image width={500} height={500} className="rounded-full w-16 shadow-inner" src="/Testimonials/smiling_man.png" alt=""/>
          <div className="flex flex-col mx-4">
            <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Thom Yorke</span>
            <span className="text-sm text-gray-400">Founder, Radiohead</span>
          </div>
        </div>
      </div>
      {/* End of Testimonial Card*/}

      {/* Start of Testimonial Card*/}
      <div className="w-96 mx-4 shadow-md bg-white mb-16 lg:mb-0 mt-4 h-full">
        <p className="px-6 pt-8 pb-10 text-gray-500">“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta
          pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. <span className="px-1 bg-blue-400 text-white">Aperiam error
            explicabo</span> enim similique quos asperiores omnis est. Sint, in qui! Necessitatibus eaque cupiditate
          incidunt recusandae nam suscipit neque libero quam. Volutpat mollis <span
            className="px-1 bg-blue-400 text-white">quam volutpat nulla</span> pellentesque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.”</p>
        <div className="flex items-center mx-6 pb-6">
          <Image width={500} height={500} className="rounded-full w-16 shadow-inner" src="/Testimonials/smiling_man.png" alt="" />
          <div className="flex flex-col mx-4">
            <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Thom Yorke</span>
            <span className="text-sm text-gray-400">Founder, Radiohead</span>
          </div>
        </div>
      </div>
      {/* End of Testimonial Card*/}

      {/* Start of Testimonial Card*/}
      <div className="w-96 mx-4 shadow-md bg-white mb-16 lg:mb-0 mt-4 h-full">
        <p className="px-6 pt-8 pb-10 text-gray-500">“Nec gravida tempus, lobortis elit augue tellus. <span
            className="px-1 bg-blue-400 text-white">Aperiam error explicabo</span> enim similique quos asperiores omnis est.
          Sint, in qui! Dolor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat
          nulla pellentesque. Lorem ipsum dolor sit amet consectetur adipisicing.Necessitatibus eaque cupiditate
          incidunt recusandae nam suscipit neque libero quam. Volutpat mollis <span
            className="px-1 bg-blue-400 text-white">quam volutpat nulla</span> pellentesque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.”</p>
        <div className="flex items-center mx-6 pb-6">
          <Image width={500} height={500} className="rounded-full w-16 shadow-inner" src="/Testimonials/smiling_man.png" alt="" />
          <div className="flex flex-col mx-4">
            <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Thom Yorke</span>
            <span className="text-sm text-gray-400">Founder, Radiohead</span>
          </div>
        </div>
      </div>
      {/* End of Testimonial Card*/}

      {/* Start of Testimonial Card*/}
      <div className="w-96 mx-4 shadow-md bg-white mb-16 lg:mb-0 mt-4 h-full">
        <p className="px-6 pt-8 pb-10 text-gray-500">“Nec gravida tempus, lobortis elit augue tellus. <span
            className="px-1 bg-blue-400 text-white">Aperiam error explicabo</span> enim similique quos asperiores omnis est.
          Sint, in qui! Necessitatibus eaque cupiditate incidunt recusandae nam suscipit neque libero quam. Volutpat
          mollis <span className="px-1 bg-blue-400 text-white">quam volutpat nulla</span> Dolor, et ipsum porta pharetra.
          Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.Enim similique quos asperiores omnis est. Sint, in qui! Necessitatibus eaque
          cupiditate incidunt recusandae nam suscipit neque libero quam. Volutpat mollis <span
            className="px-1 bg-blue-400 text-white">quam volutpat nulla</span> pellentesque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.”</p>
        <div className="flex items-center mx-6 pb-6">
          <Image width={500} height={500} className="rounded-full w-16 shadow-inner" src="/Testimonials/smiling_man.png" alt="" />
          <div className="flex flex-col mx-4">
            <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Thom Yorke</span>
            <span className="text-sm text-gray-400">Founder, Radiohead</span>
          </div>
        </div>
      </div>
      {/* End of Testimonial Card*/}

      {/* Start of Testimonial Card*/}
      <div className="w-96 mx-4 shadow-md bg-white mb-16 lg:mb-0 mt-4 h-full">
        <p className="px-6 pt-8 pb-10 text-gray-500">“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta
          pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. <span className="px-1 bg-blue-400 text-white">Aperiam error
            explicabo</span> enim similique quos asperiores omnis est. Sint, in qui! Necessitatibus eaque cupiditate
          incidunt recusandae nam suscipit neque libero quam. Volutpat mollis <span
            className="px-1 bg-blue-400 text-white">quam volutpat nulla</span> pellentesque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.”</p>
        <div className="flex items-center mx-6 pb-6">
          <Image width={500} height={500} className="rounded-full w-16 shadow-inner" src="/Testimonials/smiling_man.png" alt="" />
          <div className="flex flex-col mx-4">
            <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Thom Yorke</span>
            <span className="text-sm text-gray-400">Founder, Radiohead</span>
          </div>
        </div>
      </div>
      {/* End of Testimonial Card*/}
    </div>
  </section>

  {/* Start of 'Ready To Get Started' Section */}
  <section className="get_started__header flex flex-col items-center pt-14 pb-16 lg:pt-18 lg:pb-20 bg-white">
    <h2 className="text-center font-bold px-4 lg:px-0 text-3xl lg:text-4xl uppercase text-gray-700">
      Ready to Get Started?
    </h2>
    <Link className="link_underline inline-block text-2xl mt-16 text-gray-600" href="quote">Request a free
      quote.</Link>
  </section>


  </main>      
            )
          }
          
          export default Testimonials;