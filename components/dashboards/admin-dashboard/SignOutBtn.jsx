import { signout } from "@/actions/signout";
import { Button } from "@/components/ui/button";

const SignOutBtn = () => {
  return (
    <form action={signout} className="">
      <Button type="submit" variant="outline" size="lg" className="w-full border-primary text-primary">Logout</Button>
    </form>
  );
};

export default SignOutBtn;
