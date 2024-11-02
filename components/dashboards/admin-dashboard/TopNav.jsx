import { Menu, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import PSLogo from "@/public/perfect-scrub-logo.png";

const TopNav = ({ handleShowMenu, showMenu }) => {
  return (
    <header className="px-5 py-3 lg:hidden w-full">
      <nav className="flex justify-between items-center">
        <Image
          src={PSLogo}
          alt=""
          width={300}
          height={135}
          className="w-[75px] h-auto"
        />
        {showMenu ? (
          <X onClick={handleShowMenu} />
        ) : (
          <Menu onClick={handleShowMenu} />
        )}
      </nav>
    </header>
  );
};

export default TopNav;
