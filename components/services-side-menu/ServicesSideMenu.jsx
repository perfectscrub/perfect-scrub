import { useState } from "react";
import Link from "next/link";
import { services } from "@/data";

const ServicesSideMenu = () => {
  //update active index in state, cause re-render
  const [ activeIndex, setActiveIndex ] = useState(0);
  
  const handeClick = (i) => {
    console.log("i: ", i)
    setActiveIndex(i)
  };
  // console.log('activeIndex', activeIndex);
  return (
    <aside className="hidden lg:block">
      <h3 className="font-sans text-2xl mb-4">
        Our <span className="font-bold">Services</span>
      </h3>
      <ul className="pl-3 text-lg">
        {services.map(({ id, title, href }, i) => (
          <li
            key={id}
            className={`${
              i == 1 ? "active" : ""} py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600`}
            // onClick={()=>handeClick(id)}
          >
            <Link href={href} className={`${i==1? "active": ""}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ServicesSideMenu;
