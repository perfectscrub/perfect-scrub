"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/utils/data";

const ServicesSideMenu = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block">
      <h3 className="font-sans text-2xl mb-4">
        Our <span className="font-bold">Services</span>
      </h3>
      <ul className="pl-3 text-lg">
        {services.map(({ id, title, href }, i) => {
          if (pathname.includes(href)) {
            return (
              <li
                key={id}
                className="active-side-menu py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600"
              >
                <Link href={href} className={`${i == 1 ? "active" : ""}`}>
                  {title}
                </Link>
              </li>
            );
          }
          return (
            <li
              key={id}
              className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600"
            >
              <Link href={href} className={`${i == 1 ? "active" : ""}`}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ServicesSideMenu;
