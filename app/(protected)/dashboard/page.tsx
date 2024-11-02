"use client";

// import Image from "next/image"
// import UN from "@/public/under-construction.jpg";
import DashboardSidebar from "@/components/dashboards/DashboardSidebar";
import RoleGate from "@/components/auth/RoleGate";
import { UserRole } from "@prisma/client";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import TopNav from "@/components/dashboards/admin-dashboard/TopNav";
import { useState } from "react";
import { UserInfo } from "@/components/auth/UserInfo";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const UserDashboardPage = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const user = useCurrentUser();
  const handleShowMenu = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <RoleGate allowedRole={UserRole.USER}>
      <UserInfo
        user={user}
        label="User Dashboard"
      />
    </RoleGate>
  )
}

export default UserDashboardPage