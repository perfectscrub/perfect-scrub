import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";

const SignOutBtn = () => {
  return (
    <form action={logout} className="mt-auto">
      <Button type="submit" variant="outline" size="lg" className="w-full border-primary text-primary">Logout</Button>
    </form>
  );
};

export default SignOutBtn;
