import prisma from "@/lib/db";
import SecureAdminAccess from "@/components/dashboards/admin-dashboard/SecureAdminAccess";

export const revalidate = 3600

export default async function AdminPage({ searchParams }) {
  const { tab } = searchParams;
  const contractorData = await prisma.contractor.findMany();
  const contractorCount = await prisma.contractor.count();

  return (
    <SecureAdminAccess
      contractorData={contractorData}
      contractorCount={contractorCount}
      tab={tab}
    />
  );
}
