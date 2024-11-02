"use client";
import React from 'react'
import { useState } from "react";
import DashboardSidebar from "@/components/dashboards/DashboardSidebar";
import TopNav from "@/components/dashboards/admin-dashboard/TopNav";
import SignOutBtn from "@/components/dashboards/admin-dashboard/SignOutBtn";
import Navbar from "@/components/InnerNavbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu((prev) => !prev);
    };

    return (
        <main className="flex flex-col lg:flex-row h-screen w-full bg-gray-100">
            <DashboardSidebar user={false} showMenu={showMenu} handleShowMenu={handleShowMenu} />
            <TopNav handleShowMenu={handleShowMenu} showMenu={showMenu} />
            <section className="flex-1 p-3 md:px-6 pt-5 space-y-5">
                <Navbar />
                {children}
            </section>
        </main>
    );
}

export default ProtectedLayout;