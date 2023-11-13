import React from "react";
import Image from "next/image";
import Link from 'next/link';
// import styles from "./HomeFacilitiesList.module.css";

const indexFacilitiesList = [
    {
      title:"Office buildings",
      href:"facilities/office-buildings-cleaning",
      imgUrl:"/office-building.svg",
    },
    {
      title:"Retail stores and shopping centers",
      href:"facilities/retail-stores-cleaning",
      imgUrl:"/supermarket.svg",
    },
    {
      title:"Day Care and Preschool",
      href:"facilities/day-care-cleaning",
      imgUrl:"/day-care-center.svg",
    },
    {
      title:"Schools and universities",
      href:"facilities/school-cleaning",
      imgUrl:"/university.svg",
    },
    {
      title:"Medical Offices and clinics",
      href:"facilities/medical-office-cleaning",
      imgUrl:"/hospital.svg",
    },
    {
      title:"Hotels and resorts",
      href:"facilities/hotel-cleaning",
      imgUrl:"/hotel.svg",
    },
    {
      title:"Sports and recreational facilities",
      href:"facilities/recreational-facilities-cleaning",
      imgUrl:"/gym.svg",
    },
    {
      title:"Post Construction Clean up",
      href:"facilities/post-construction-cleaning",
      imgUrl:"/construction.svg",
    },
  ];

const HomeFacilitiesList = () => {
  return (
    <ul className="flex flex-wrap font-medium text-blue-900">
      {indexFacilitiesList.map((facility,i) => (
        <li key={i} className="facility-list-item">
          <Link className="facility-list-link" href={facility.href}>
            <span>
              <Image
                width={40}
                height={40}
                className="w-10"
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
