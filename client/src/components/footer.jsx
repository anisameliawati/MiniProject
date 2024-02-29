import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import logo2 from "../assets/logo2.png";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="bg-[#F5D250] grid">
        <div className="flex justify-around items-center mx-10 my-4 gap-2 sm:gap-6">
          <div className="text-start">
            <div className=" text-[#274C5B] font-semibold text-[20px]">
              Contact Us
            </div>
            <div className=" text-[#274C5B] font-semibold text-[15px] mt-2">
              Email
            </div>
            <div className="font-sans font-light text-[#274C5B] text-[14px]">
              needhelp@ticketed.com
            </div>
            <div className=" text-[#274C5B] font-semibold text-[15px] mt-2">
              Phone
            </div>
            <div className="font-sans font-light text-[#274C5B] text-[14px]">
              123 456 789
            </div>
            <div className=" text-[#274C5B] font-semibold text-[15px] mt-2">
              Address
            </div>
            <div className="font-sans font-light text-[#274C5B] text-[14px]">
              Jl. Jenderal Sudirman No.Kav. 21
            </div>
          </div>
          <div>
            <Image src={logo2} className="m-auto h-20 w-auto" />
            <div className="text-center font-sans font-light text-[#274C5B] text-[14px] m-4">
              We are a popular and trusted company aspiring to be a leader in
              the Ticket Agency Industry.
            </div>
            <div className="flex justify-center gap-5">
              <div>
                <FaLinkedin className="size-[25px]" />
              </div>
              <div>
                <FaSquareFacebook className="size-[25px]" />
              </div>
              <div>
                <FaXTwitter className="size-[25px]" />
              </div>
            </div>
          </div>
          <div className="text-end">
            <div className=" text-[#274C5B] font-semibold text-[20px]">
              Company
            </div>
            <div className=" text-[#274C5B] font-semibold text-[15px] mt-4">
              Tickets
            </div>
            <div className=" text-[#274C5B] font-semibold text-[15px] mt-4">
              About Us
            </div>
            <div className=" text-[#274C5B] font-semibold text-[15px] mt-4">
              Our Team
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
