"use client"
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import PSLogo from "@/public/perfect-scrub-logo.png";
import SignOutBtn from "@/components/dashboards/admin-dashboard/SignOutBtn";
import DashboardNav from "@/components/dashboards/admin-dashboard/DashboardNav";

type DashboardSidebarProps = {
  user: boolean,
  showMenu?:
  boolean, handleShowMenu?: () => {}
}

const DashboardSidebar = ({ user, showMenu, handleShowMenu }: DashboardSidebarProps) => {
  return (
    <aside
      className={cn(
        "translate-x-[-2000px] lg:translate-x-0 absolute opacity-0 lg:opacity-100 lg:relative md:block w-64 bg-white p-6 shadow-md transition-all",
        { "translate-x-0 opacity-100 min-h-screen z-50": showMenu }
      )}
    >
      <Image
        src={PSLogo}
        alt=""
        width={300}
        height={135}
        className="mb-10 w-[150px] h-auto"
      />
      <div className="flex flex-col min-h-[40vh] justify-between">
        {!user &&
          <DashboardNav handleShowMenu={handleShowMenu} />
        }

        <SignOutBtn />
      </div>
    </aside>
  );
};

export default DashboardSidebar;
