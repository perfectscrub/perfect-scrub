"use client";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Trash2, Edit, Menu, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";
// import DashboardSidebar from "./DashboardSidebar";
import ContractorTab from "./ContractorTab";
import WorkersTab from "./WorkersTab";
import JobRequestTab from "./JobRequestTab";

export default function AdminDashboard({
  user = "Admin",
  data,
  contractorCount,
  changeTab,
}) {
  const [tab, setTab] = useState("job-requests");
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const handleTabClick = useCallback(
    (val) => {
      setTab(val);
      showMenu ? setShowMenu(false) : null;
    },
    [showMenu]
  );

  useEffect(() => {
    if (changeTab) {
      handleTabClick(changeTab);
      router.replace("/admin");
    }
  }, [changeTab, router, handleTabClick]);

  return (
    <main className="">
      <h1 className="text-3xl mb-10">Welcome, {user}</h1>
      <Tabs value={tab} onValueChange={handleTabClick}>
        <TabsList className="">
          <TabsTrigger
            value="job-requests"
            onClick={() => handleTabClick("job-requests")}
          >
            Job Requests
          </TabsTrigger>
          <TabsTrigger
            value="workers"
            onClick={() => handleTabClick("workers")}
          >
            Workers
          </TabsTrigger>
          <TabsTrigger
            value="contractors"
            onClick={() => handleTabClick("contractors")}
          >
            Contractors
          </TabsTrigger>
        </TabsList>
        <TabsContent value="workers" className="overflow-auto">
          <WorkersTab />
        </TabsContent>
        <TabsContent value="job-requests">
          <JobRequestTab />
        </TabsContent>
        <TabsContent value="contractors">
          <ContractorTab contractorCount={contractorCount} data={data} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
