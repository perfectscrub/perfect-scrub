import React from 'react'
import AdminDashboard from "@/components/admin-dashboard/AdminDashboard"
import prisma from "@/lib/db";

export default async function AdminPage({searchParams}) {
  const {tab}= searchParams;  
  const contractorData = await prisma.contractor.findMany();
  const contractorCount = await prisma.contractor.count(); 
  
  return (
    <AdminDashboard data={contractorData} contractorCount={contractorCount} changeTab={tab}/>
  )
}