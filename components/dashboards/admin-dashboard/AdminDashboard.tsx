"use client";
import { useCallback, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import ContractorTab from "./ContractorTab";
import WorkersTab from "./WorkersTab";
import JobRequestTab from "./JobRequestTab";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { admin } from "@/actions/admin";
import { toast } from "sonner";

export default function AdminDashboard({
  user = "Admin",
  contractorData,
  contractorCount,
  changeTab,
}) {
  const [tab, setTab] = useState("contractors");
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const handleTabClick = useCallback(
    (val: string) => {
      setTab(val);
      showMenu ? setShowMenu(false) : null;
    },
    [showMenu]
  );

  useEffect(() => {
    if (changeTab) {
      handleTabClick(changeTab);
      router.replace("/admin-dashboard");
    }
  }, [changeTab, router, handleTabClick]);

  return (
    <main className="space-y-6 overflow-x-hidden">
      <h1 className="text-3xl mb-10 capitalize">Welcome, {user}</h1>
      <Tabs value={tab} onValueChange={handleTabClick} className="">
        <TabsList className="mb-2">
          <TabsTrigger
            value="contractors"
            onClick={() => handleTabClick("contractors")}
            className="capitalize py-4 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Contractors
          </TabsTrigger>
          <TabsTrigger
            value="job-requests"
            onClick={() => handleTabClick("job-requests")}
             className="capitalize py-4 rounded data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Customers
          </TabsTrigger>
          <TabsTrigger
            value="workers"
            onClick={() => handleTabClick("workers")}
            className="capitalize py-4 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Workers
          </TabsTrigger>
        </TabsList>
        <TabsContent value="contractors" className="overflow-auto">
          <ContractorTab contractorCount={contractorCount} contractorData={contractorData} />
        </TabsContent>
        <TabsContent value="workers" className="overflow-auto">
          <WorkersTab />
        </TabsContent>
        <TabsContent value="job-requests" className="overflow-auto">
          <JobRequestTab />
        </TabsContent>
      </Tabs>
    </main>
  );
}
