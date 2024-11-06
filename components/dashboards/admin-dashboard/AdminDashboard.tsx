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
  data,
  contractorCount,
  changeTab,
}) {
  const [tab, setTab] = useState("job-requests");
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const handleTabClick = useCallback(
    (val: string) => {
      setTab(val);
      showMenu ? setShowMenu(false) : null;
    },
    [showMenu]
  );


  const onApiRouteClick = () => {
    fetch("/api/admin")
      .then((response) => {
        if (response.ok) {
          console.log("OKAY");

        } else {
          console.error("Forbidden");
        }
      })
  }

  const onServerActionClick = () => {
    admin().then(data => {
      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    })
  }

  useEffect(() => {
    if (changeTab) {
      handleTabClick(changeTab);
      router.replace("/admin-dashboard");
    }
  }, [changeTab, router, handleTabClick]);

  return (
    <main className="max-w-[1100px] space-y-6">
      <h1 className="text-3xl mb-10 capitalize">Welcome, {user}</h1>
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
        <TabsContent value="job-requests" className="overflow-auto">
          <JobRequestTab />
        </TabsContent>
        <TabsContent value="contractors" className="overflow-auto">
          <ContractorTab contractorCount={contractorCount} data={data} />
        </TabsContent>
      </Tabs>

      {/* <Card className="space-y-4">
        <CardHeader>
          Admin only
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
            <p className="text-sm font-medium">API route</p>
            <Button onClick={onApiRouteClick}>Click for admin stuff</Button>
          </div>
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
            <p className="text-sm font-medium">Server Action</p>
            <Button onClick={onServerActionClick}>Click for admin stuff</Button>
          </div>
        </CardContent>
      </Card> */}
    </main>
  );
}
