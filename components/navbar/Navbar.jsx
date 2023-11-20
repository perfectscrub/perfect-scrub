import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { services, facilities } from "@/data";

const Navbar = ({toggleNav, setToggleNav, handleNavClose}) => {
  
  const [toggleChevron1, setToggleChevron1] = useState(false);
  const [toggleChevron2, setToggleChevron2] = useState(false);

  const handleNavMenuClick = (option) => {
    if (option === "nav") setToggleNav((prevState) => !prevState);
    else if (option === "chevron1")
      setToggleChevron1((prevState) => !prevState);
    else setToggleChevron2((prevState) => !prevState);
  };

  return (
    <header
      role="banner"
      className="fixed w-full z-50 shadow-md px-0 bg-gray-900"
    >
      <div 
      onClick={handleNavClose}
      className="bg-green-500 text-xs md:text-sm text-white p-3 pr-10 flex flex-row items-center justify-between lg:justify-start gap-8 md:pl-10">
        <div className="">
          <Link
            className="flex justify-between gap-x-2 items-center"
            href="/quote"
          >
            <Image
              width={300}
              height={300}
              className="w-4 mt-1"
              src="/quote.svg"
              alt=""
            />
            <p className="tracking-wider font-medium">Get a free quote</p>
          </Link>
        </div>
        <div className="">
          <Link
            className="flex justify-between gap-x-1 items-center"
            href="tel:6474736478"
          >
          <p className="tracking-wider font-medium hidden md:block">Call us now - </p>
            <Image
              width={300}
              height={300}
              className="w-3 mt-1"
              src="/phone-receiver-silhouette.svg"
              alt=""
            />
            <p className="tracking-wider font-medium">1-647-473-6478</p>
          </Link>
        </div>
      </div>
      <nav
        className="max-w-screen-2xl flex flex-row flex-wrap justify-between my-1 ml-auto mr-auto "
        role="navigation"
      >
        {/* COMPANY LOGO (SVG)  */}
        <div className="flex items-center ml-5 lg:ml-30">
          <Link href="/" title="perfect scrub" onClick={handleNavClose}>
            <Image
              width={188}
              height={84}
              className="my-2 w-24 h-auto"
              src="/perfect-scrub-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="inline-block h-8 mt-3 mb-2 mr-5 lg:hidden">
          <button
            id="nav_toggle"
            title="menu button"
            className="h-full w-full"
            onClick={() => handleNavMenuClick("nav")}
          >
            <Image width={40} height={40} src={"/hamburger.svg"} alt="" />
          </button>
        </div>
        <div
          id="nav_content"
          className={`${
            toggleNav ? "" : "hidden"
          } w-full py-8 mr-3 lg:flex lg:w-auto lg:py-0 lg:items-center`}
        >
          <ul className="flex flex-col ml-auto tracking-wider font-medium text-sm text-blue-200 lg:flex-row">
            <li className="dropdown pb-5 ml-3 lg:py-8 lg:px-6">
              <span className="flex items-center justify-between gap-2">
                <Link
                  className="hover:text-green-300"
                  href="/services"
                  onClick={() => handleNavMenuClick("nav")}
                >
                  SERVICES
                </Link>
                <span
                  id="chevron1"
                  className="w-1/3 mt-1 flex justify-end"
                  onClick={() => handleNavMenuClick("chevron1")}
                >
                  <svg width="14" height="10" fill="#bfdbfe">
                    <polygon points="0,0 10,0 5,8" />
                  </svg>
                </span>
              </span>
              <ul
                id="dropdown1"
                className={`dropdown-content ${toggleChevron1 ? "" : "hidden"}`}
              >
                {services.map(({ title, href }, i) => (
                  <li
                    key={i}
                    className="dropdown-content-list-item"
                    onClick={() => handleNavMenuClick("nav")}
                  >
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="pb-5 ml-3 lg:py-8 lg:px-6">
              <Link className="hover:text-green-300" href="/blog" onClick={() => handleNavMenuClick("nav")}>
                BLOG
              </Link>
            </li>

            <li className="pb-5 ml-3 lg:py-8 lg:px-6">
              <Link className="hover:text-green-300" href="/about" onClick={() => handleNavMenuClick("nav")}>
                ABOUT
              </Link>
            </li>
            <li className="dropdown pb-5 ml-3 lg:py-8 lg:px-6 ">
              <span className="flex items-center justify-between gap-2">
                <Link
                  className="hover:text-green-300"
                  href="/facilities"
                  onClick={() => handleNavMenuClick("nav")}
                >
                  FACILITIES
                </Link>
                <span
                  id="chevron2"
                  className="w-1/3 mt-1 flex justify-end"
                  onClick={() => handleNavMenuClick("chevron2")}
                >
                  <svg width="14" height="10" fill="#bfdbfe">
                    <polygon points="0,0 10,0 5,8" />
                  </svg>
                </span>
              </span>
              <ul
                id="dropdown2"
                className={`dropdown-content ${toggleChevron2 ? "" : "hidden"}`}
              >
                {facilities.map(({ title, href }, i) => (
                  <li
                    key={i}
                    className="dropdown-content-list-item"
                    onClick={() => handleNavMenuClick("nav")}
                  >
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <Link
            className="inline-block p-2 ml-3 mr-6 font-medium text-sm border-2 mt-2 lg:mt-0 text-green-400 border-green-400 hover:bg-green-400 hover:text-green-50"
            href="/contact"
            onClick={() => handleNavMenuClick("nav")}
          >
            GET IN TOUCH
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
