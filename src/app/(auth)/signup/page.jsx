import LeftSide from "@/components/ui/signupComponent/LeftSide";
import Rightside from "@/components/ui/signupComponent/Rightside";

const SignupPage = () => {
  return (
    <div
      className="min-h-screen
     flex flex-col-reverse lg:flex-row items-center justify-center bg-[#ffece3] px-6 lg:px-20 gap-5"
    >
      <LeftSide />
      <Rightside />
    </div>
  );
};

export default SignupPage;
