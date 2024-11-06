import DashboardSidebar from "@/components/dashboards/DashboardSidebar";
import TopNav from "@/components/dashboards/admin-dashboard/TopNav";
import Provider from "@/components/auth/Provider";
import { auth } from "@/auth";
import Protected from "@/components/Protected";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {

  const session = await auth();

  return (
    <Provider session={session}>
      <Protected>{children}</Protected>
    </Provider>
  );
};

export default ProtectedLayout;
