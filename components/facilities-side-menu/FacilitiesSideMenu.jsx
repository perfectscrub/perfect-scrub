import { useRouter } from "next/router";
import Link from "next/link";
import { facilities } from "@/data";

const FacilitiesSideMenu = () => {
  const router = useRouter();
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
        {facilities.map(({ title, href }, i) => {
          if (router.pathname.includes(href)) {
            return (
              <li
                key={i}
                className="active-side-menu py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600"
              >
                <Link href={href}>{title}</Link>
              </li>
            );
          }
          return (
            <li
              key={i}
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


export default FacilitiesSideMenu;
