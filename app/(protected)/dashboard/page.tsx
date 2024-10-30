import Image from "next/image"
import UN from "@/public/under-construction.jpg";
import DashboardSidebar from "@/components/dashboards/DashboardSidebar";
const UserDashboardPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <DashboardSidebar user />
      <Image src={UN} alt="" width={724} height={724} className="w-[300px] h-auto"/>

    </div>
  )
}

export default UserDashboardPage