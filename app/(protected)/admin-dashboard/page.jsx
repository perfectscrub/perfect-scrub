import React from 'react'
import AdminDashboard from "@/components/admin-dashboard/AdminDashboard"
import prisma from "@/lib/db";
import { auth } from "@/auth";

export default async function AdminPage({searchParams}) {
  const session = await auth();
  const {tab}= searchParams;  
  const contractorData = await prisma.contractor.findMany();
  const contractorCount = await prisma.contractor.count(); 
  
  return (
    <AdminDashboard data={contractorData} contractorCount={contractorCount} changeTab={tab}/>
  )
}