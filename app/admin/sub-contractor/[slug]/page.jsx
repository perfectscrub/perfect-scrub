import React from "react";
import Link from "next/link";
import prisma from "@/lib/db";
import { ArrowLeft } from "lucide-react";

// jspdf to convert to pdf
async function SubContractorPage({ params }) {
  const { slug } = params;
  const contractorData = await prisma.contractor.findUnique({
    where: {
      slug,
    },
  });

  return (
    <div className="min-h-screen py-40 max-w-[1200px] mx-auto">
      <Link href={"/admin?tab=contractors"} className="flex gap-3">
        <ArrowLeft /> Back to Dashboard
      </Link>
      <p className="mt-10">{contractorData?.businessName}</p>
    </div>
  );
}

export default SubContractorPage;
