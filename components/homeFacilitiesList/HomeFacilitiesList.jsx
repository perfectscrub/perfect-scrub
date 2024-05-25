import React from "react";
import Image from "next/image";
import Link from "next/link";
import { indexFacilitiesList } from "@/data";
// import styles from "./HomeFacilitiesList.module.css";

const HomeFacilitiesList = () => {
  return (
    <ul className="flex flex-row flex-wrap font-normal text-blue-900">
      {indexFacilitiesList.map((facility, i) => (
        <li key={i} className="facility-list-item">
          <Link className="facility-list-link" href={facility.href}>
            <div>
              <Image
                width={40}
                height={40}
                className="w-8 h-auto"
                src={facility.imgUrl}
                alt={facility.alt}
              />
            </div>
            <p className="w-28 pl-2 text-xs text-center">{facility.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HomeFacilitiesList;
