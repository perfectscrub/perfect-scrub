import React from "react";
import Image from "next/image";
import Link from "next/link";
import { indexFacilitiesList } from "@/data";
// import styles from "./HomeFacilitiesList.module.css";

const HomeFacilitiesList = () => {
  return (
    <ul className="flex flex-wrap font-medium text-blue-900">
      {indexFacilitiesList.map((facility, i) => (
        <li key={i} className="facility-list-item">
          <Link className="facility-list-link" href={facility.href}>
            <span>
              <Image
                width={40}
                height={40}
                className="w-10 h-auto"
                src={facility.imgUrl}
                alt={facility.title}
              />
            </span>
            <span>{facility.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HomeFacilitiesList;
