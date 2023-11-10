import Image from "next/image";
import Link from "next/link";
import { services } from "@/data";

const Navbar = () => {
  return (
    <header
      role="banner"
      className="fixed w-full z-50 shadow-md px-0 bg-gray-900"
    >
      <div className="bg-green-500 text-xs text-white p-3 pr-10 flex flex-row items-center justify-center lg:justify-end gap-2">
        <p className="tracking-wider font-medium">Call us now - </p>
        <Link
          className="flex justify-between gap-x-1 items-center"
          href="tel:6474736478"
        >
          <Image
            width={300}
            height={300}
            className="w-2 mt-1"
            src="/phone-receiver-silhouette.svg"
            alt=""
          />
          <p className="tracking-wider font-medium">647-473-6478</p>
        </Link>
      </div>
      <nav
        className="max-w-screen-2xl flex flex-row flex-wrap justify-between my-1 ml-auto mr-auto "
        role="navigation"
      >
        {/* COMPANY LOGO (SVG)  */}
        <div className="flex items-center ml-5 lg:ml-30">
          <Link href="/" title="perfect scrub">
            <Image
              width={120}
              height={48}
              className="my-2"
              src="/perfect-scrub-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="inline-block h-8 mt-3 mb-2 mr-5 lg:hidden">
          <button id="nav_toggle" title="menu button" className="h-full w-full">
            <Image width={40} height={40} src={"/hamburger.svg"} alt=""/>
          </button>
        </div>
        <div
          id="nav_content"
          className="w-full hidden py-8 mr-3 lg:flex lg:w-auto lg:py-0 lg:items-center"
        >
          <ul className="flex flex-col ml-auto tracking-wider font-medium text-sm text-blue-200 lg:flex-row">
            <li className="dropdown pb-5 ml-3 lg:py-8 lg:px-6">
              <span className="flex items-center justify-between gap-2">
                <Link className="hover:text-green-300" href="/services">
                  SERVICES
                </Link>
                <span id="chevron1" className="w-1/3 mt-1 flex justify-end">
                  <svg width="14" height="10" fill="#bfdbfe">
                    <polygon points="0,0 10,0 5,8" />
                  </svg>
                </span>
              </span>
              <ul id="dropdown1" className="dropdown-content hidden">
                {services.map(({ title, href }, i) => (
                  <li key={i} className="dropdown-content-list-item">
                    <Link href={href}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="pb-5 ml-3 lg:py-8 lg:px-6">
              <Link className="hover:text-green-300" href="blog">
                BLOG
              </Link>
            </li>

            <li className="pb-5 ml-3 lg:py-8 lg:px-6">
              <Link className="hover:text-green-300" href="about">
                ABOUT
              </Link>
            </li>
            <li className="dropdown pb-5 ml-3 lg:py-8 lg:px-6 ">
              <span className="flex items-center justify-between gap-2">
                <Link className="hover:text-green-300" href="facilities/index">
                  FACILITIES
                </Link>
                <span id="chevron2" className="w-1/3 mt-1 flex justify-end">
                  <svg width="14" height="10" fill="#bfdbfe">
                    <polygon points="0,0 10,0 5,8" />
                  </svg>
                </span>
              </span>
              <ul id="dropdown2" className="dropdown-content hidden">
                <li className="dropdown-content-list-item">
                  <Link href="facilities/office-buildings-cleaning">
                    Office buildings
                  </Link>
                </li>
                <li className="dropdown-content-list-item">
                  <Link href="facilities/retail-stores-cleaning">
                    Retail stores and shopping centers
                  </Link>
                </li>
                <li className="dropdown-content-list-item">
                  <Link href="facilities/day-care-cleaning">
                    Day Care and Preschool
                  </Link>
                </li>
                <li className="dropdown-content-list-item">
                  <Link href="facilities/school-cleaning">
                    Schools and universities
                  </Link>
                </li>
                <li className="dropdown-content-list-item">
                  <Link href="facilities/medical-office-cleaning">
                    Medical Offices and clinics
                  </Link>
                </li>
                <li className="dropdown-content-list-item">
                  <Link href="facilities/hotel-cleaning">
                    Hotels and resorts
                  </Link>
                </li>
                <li className="dropdown-content-list-item">
                  <Link href="facilities/recreational-facilities-cleaning">
                    Sports and recreational facilities
                  </Link>
                </li>
                <li className="dropdown-content-list-item">
                  <Link href="facilities/post-construction-cleaning">
                    Post Construction Clean up
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <Link
            className="inline-block p-2 ml-3 mr-6 font-medium text-sm border-2 mt-2 lg:mt-0 text-green-400 border-green-400 hover:bg-green-400 hover:text-green-50"
            href="contact"
          >
            GET IN TOUCH
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
