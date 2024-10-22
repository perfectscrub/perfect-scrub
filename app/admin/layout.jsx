"use client";
import { useState } from "react";
import DashboardSidebar from "@/components/admin-dashboard/DashboardSidebar";
import TopNav from "@/components/admin-dashboard/TopNav";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <main className="flex flex-col lg:flex-row h-screen bg-gray-100">
        <DashboardSidebar showMenu={showMenu} />
      <TopNav handleShowMenu={handleShowMenu} showMenu={showMenu} />
      <section className="flex-1 p-3 pt-10">
        {children}
      </section>
    </main>
  );
};

export default Layout;
