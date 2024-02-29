import Image from "next/image";
import logo from "../assets/logo.png";

function LoadingPage() {
  return (
    <div className=" flex w-screen h-screen font-bold justify-center items-center ">
      <Image src={logo} className=" max-w-48" alt="" />
    </div>
  );
}
export default LoadingPage;
