"use client";
import React from "react";
import { useState } from "react";
import DashboardSidebar from "./dashboards/DashboardSidebar";
import TopNav from "./dashboards/admin-dashboard/TopNav";

const Protected = ({ children }: { children: React.ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <main className="max-w-[1540px] mx-auto flex flex-col lg:flex-row relative h-full w-full bg-gray-100">
      <DashboardSidebar showMenu={showMenu} handleShowMenu={handleShowMenu} />
      <section className="flex-1 p-3 md:px-6 pt-5 space-y-5">
        <TopNav handleShowMenu={handleShowMenu} showMenu={showMenu} />
        {children}
      </section>
    </main>
  );
};

export default Protected;
