"use client";
import RoleGate from "@/components/auth/RoleGate";
import React from "react";
import AdminDashboard from "./AdminDashboard";
import { UserRole } from "@prisma/client";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import AdminSettings from "./AdminSettings";

const SecureSettingsAccess = () => {
  const user = useCurrentUser();

  return (
    <RoleGate allowedRole={UserRole.ADMIN} role={user?.role}>
      <AdminSettings />
    </RoleGate>
  );
};

export default SecureSettingsAccess;
