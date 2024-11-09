"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, HardHat, Users } from "lucide-react";

const DashboardNav = ({ handleShowMenu }) => {
  return (
    <nav className="space-y-2">
      <Link href={"/admin-dashboard?tab=job-requests"}>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => handleShowMenu()}
        >
          <Briefcase className="mr-2 h-4 w-4" />
          Customers
        </Button>
      </Link>
      <Link href={"/admin-dashboard?tab=workers"}>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => handleShowMenu()}
        >
          <Users className="mr-2 h-4 w-4" />
          Workers
        </Button>
      </Link>
      <Link href={"/admin-dashboard?tab=contractors"}>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => handleShowMenu()}
        >
          <HardHat className="mr-2 h-4 w-4" />
          Contractors
        </Button>
      </Link>
    </nav>
  );
};

export default DashboardNav;
