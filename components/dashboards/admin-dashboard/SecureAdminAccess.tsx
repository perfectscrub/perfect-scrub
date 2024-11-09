"use client";
import RoleGate from "@/components/auth/RoleGate";
import React from "react";
import AdminDashboard from "./AdminDashboard";
import { UserRole } from "@prisma/client";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const SecureAdminAccess = ({ contractorData, contractorCount, tab }) => {
  const user = useCurrentUser();

  return (
    <RoleGate allowedRole={UserRole.ADMIN} role={user?.role}>
      <AdminDashboard
        contractorData={contractorData}
        contractorCount={contractorCount}
        changeTab={tab}
        user={user?.name}
      />
    </RoleGate>
  );
};

export default SecureAdminAccess;
