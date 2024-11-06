"use client";
import RoleGate from "@/components/auth/RoleGate";
import React from "react";
import AdminDashboard from "./AdminDashboard";
import { UserRole } from "@prisma/client";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const SecureAccess = ({ contractorData, contractorCount, tab }) => {
  const user = useCurrentUser();

  console.log("ROLEGATE: ", user?.role)
  return (
    <RoleGate allowedRole={UserRole.ADMIN} role={user?.role}>
      <AdminDashboard
        data={contractorData}
        contractorCount={contractorCount}
        changeTab={tab}
        user={user?.name}
      />
    </RoleGate>
  );
};

export default SecureAccess;
