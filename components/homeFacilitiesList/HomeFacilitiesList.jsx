import React from "react";
import Image from "next/image";
import Link from "next/link";
import { indexFacilitiesList } from "@/data";
import { ArrowRight } from "lucide-react";
// import styles from "./HomeFacilitiesList.module.css";

const HomeFacilitiesList = () => {
  return (
    <>
      <ul className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 font-normal text-blue-900">
        {indexFacilitiesList.map((facility, i) => (
          <li key={i} className="facility-list-item">
            <div className="group relative w-40 h-28 lg:w-64 lg:h-48 rounded-[10px] overflow-hidden">
              <Link className="facility-list-link" href={facility.href}>
                <Image
                  width={150}
                  height={150}
                  className="max-w-full rounded-lg w-64 h-48"
                  src={facility.src}
                  alt=""
                />
                <p className="bg-[#fcfcfcbe] group-hover:bg-[#1e3b8ab0] group-hover:text-white tracking-wider font-bold text-xs md:text-base text-center w-full px-1 py-4 absolute -bottom-10 group-hover:bottom-0 transition-all duration-1000">
                  {/* <Image
                    width={40}
                    height={40}
                    className="w-6 h-auto"
                    src={facility.imgUrl}
                    alt={facility.alt}
                  /> */}
                  {facility.title}
                  <span className="flex gap-3 mt-5 justify-center items-center">
                    <span className="block text-xs">Learn more</span>{" "}
                    <ArrowRight size={16} />
                  </span>
                </p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomeFacilitiesList;
