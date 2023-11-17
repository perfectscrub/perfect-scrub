import { useState } from "react";
import Link from "next/link";
import { services } from "@/data";

const FacilitiesSideMenu = () => {
  //update active index in state, cause re-render
  const [activeIndex, setActiveIndex] = useState(0);

  const handeClick = (i) => {
    console.log("i: ", i);
    setActiveIndex(i);
  };
  // console.log('activeIndex', activeIndex);
  return (
    <aside className="hidden lg:block">
      <h3 className="font-sans text-2xl mb-4">
        Other <span className="font-bold">Facilities</span> we service:
      </h3>
      <ul className="pl-3 text-lg">
        {facilities.map(({ title, href }, i) => (
          <li
            key={i}
            className={`${
              i == 1 ? "active" : ""
            } py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600`}
            // onClick={()=>handeClick(id)}
          >
            <Link href={href} className={`${i == 1 ? "active" : ""}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const facilities = [
  { href: "office-buildings-cleaning", title: "Office Buildings" },
  { href: "retail-stores-cleaning", title: "Retail & Shopping centers"},
  { href: "day-care-cleaning", title: "DayCare & Preschool" },
  { href: "school-cleaning", title: "Schools & Universities" },
  { href: "medical-office-cleaning", title: "Medical Offices & Clinics" },
  { href: "hotel-cleaning", title: "Hotels & Resorts" },
  { href: "recreational-facilities-cleaning", title: "Sports & Recreational Centers"},
  { href: "post-construction-cleaning", title: "Post Construction Clean" },
];
export default FacilitiesSideMenu;
