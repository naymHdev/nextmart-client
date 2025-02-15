import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/authService";

const HomePage = async () => {
  const user = await getCurrentUser();
  console.log("user", user);

  return (
    <div className="">
      <Button>Welcome to Home Page</Button>
    </div>
  );
};

export default HomePage;
