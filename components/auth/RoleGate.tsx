"use client";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";
import React from "react";
import { FormError } from "../FormError";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
  role: UserRole;
}

const RoleGate = ({ children, allowedRole, role }: RoleGateProps) => {
  if (role !== allowedRole) {
    return (
      <div className="ml-auto">
        <FormError message="You do not have permission to view this content!" />
      </div>
    );
  }
  return <>{children}</>;
};

export default RoleGate;
