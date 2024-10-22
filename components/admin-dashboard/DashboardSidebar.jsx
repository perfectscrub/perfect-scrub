import React from "react";
import { Button } from "../ui/button.jsx";
import { Briefcase, HardHat, Users } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import PSLogo from "@/public/perfect-scrub-logo.png";

const DashboardSidebar = ({ showMenu }) => {
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
      <nav className="space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => handleTabClick("job-requests")}
        >
          <Briefcase className="mr-2 h-4 w-4" />
          Job Requests
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => handleTabClick("workers")}
        >
          <Users className="mr-2 h-4 w-4" />
          Workers
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => handleTabClick("contractors")}
        >
          <HardHat className="mr-2 h-4 w-4" />
          Contractors
        </Button>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
