"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import PSLogo from "@/public/perfect-scrub-logo.png";
import { UserButton } from "@/components/auth/UserButton";

const TopNav = ({ handleShowMenu, showMenu }) => {
  return (
    <header className="px-5 py-3 w-full">
      <nav className="flex justify-between lg:justify-end items-center">
        <Image
          src={PSLogo}
          alt=""
          width={300}
          height={135}
          className="w-[75px] h-auto lg:hidden"
        />
        <div className=" flex items-center gap-3">
          <UserButton />
          <div className="lg:hidden">
            {showMenu ? (
              <X onClick={handleShowMenu} />
            ) : (
              <Menu onClick={handleShowMenu} />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
