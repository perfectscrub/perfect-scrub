"use client";
import { UserButton } from "@/components/auth/UserButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl max-w-[1440px] w-full shadow-sm">
            <div className="grid grid-cols-2 gap-y-3 md:grid-cols-4 gap-x-2">
                <Button asChild variant={pathname === "/server" ? "default" : "outline"}>
                    <Link href={"/server"}>
                        Server
                    </Link>
                </Button>
                <Button asChild variant={pathname === "/dashboard" ? "default" : "outline"}>
                    <Link href={"/dashboard"}>
                        Dashboard
                    </Link>
                </Button>
                <Button asChild variant={pathname === "/admin-dashboard" ? "default" : "outline"}>
                    <Link href={"/admin-dashboard"}>
                        Admin
                    </Link>
                </Button>
                <Button asChild variant={pathname === "/settings" ? "default" : "outline"}>
                    <Link href={"/settings"}>
                        Settings
                    </Link>
                </Button>
            </div>
            <UserButton />
        </nav>
    )
}

export default Navbar