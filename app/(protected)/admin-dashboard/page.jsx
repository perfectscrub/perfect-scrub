import AdminDashboard from "@/components/dashboards/admin-dashboard/AdminDashboard";
import prisma from "@/lib/db";
import RoleGate from "@/components/auth/RoleGate";
import { UserRole } from "@prisma/client";
import { currentUser } from "@/lib/auth";


export default async function AdminPage({ searchParams }) {
  const user = await currentUser();

  const { tab } = searchParams;
  const contractorData = await prisma.contractor.findMany();
  const contractorCount = await prisma.contractor.count();


  return (
    <RoleGate allowedRole={UserRole.ADMIN}>
      <AdminDashboard
        data={contractorData}
        contractorCount={contractorCount}
        changeTab={tab}
        user={user?.name}
      />
    </RoleGate>
  );
}
