import prisma from "@/lib/db";
import SecureAccess from "@/components/dashboards/admin-dashboard/SecureAccess";

export default async function AdminPage({ searchParams }) {
  const { tab } = searchParams;
  const contractorData = await prisma.contractor.findMany();
  const contractorCount = await prisma.contractor.count();

  return (
    <SecureAccess
      contractorData={contractorData}
      contractorCount={contractorCount}
      tab={tab}
    />
  );
}
