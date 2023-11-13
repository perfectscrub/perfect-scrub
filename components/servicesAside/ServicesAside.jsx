import Link from "next/link";
import { services } from "@/data";

const ServicesAside = () => {
  return (
    <aside className="hidden lg:block">
      <h3 className="font-sans text-2xl mb-4">
        Our <span className="font-bold">Services</span>
      </h3>
      <ul className="pl-3 text-lg">
        {services.map(({ title, href }, i) => (
          <li
            key={i}
            className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600"
          >
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ServicesAside;
