"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { functionLogout } from "../redux/slices/userSlice";
import { useState } from "react";

function NavbarComponents() {
  const [open, setOpen] = useState(false);
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(functionLogout());
  };

  return (
    <>
      <div className="flex justify-between items-center py-6 top-0 sticky px-11 bg-[#F8F7F3] z-50">
        {/* logo */}
        <Link href={"/"}>
          <Image src={logo} className=" h-10 w-auto" />
        </Link>
        {/* search */}
        <div className="flex justify-center items-center ">
          <input
            placeholder="find your ticket here"
            className="lg:w-[800px] md:w-[600px] w-[200px] h-8 pl-2 rounded-l-lg"
          />
          <div className="bg-[#F5D250] h-8 w-9 rounded-r-lg p-2">
            <IoSearch className=" fill-[#F8F7F3]" />
          </div>
        </div>

        {/* navigate to home and find events */}
        <div className="flex gap-3 ">
          <Link href={"/"} className="text-[#1F5673] md:font-medium text-sm">
            Event
          </Link>
          <Link href={"/"} className="text-[#1F5673] md:font-medium text-sm">
            My Ticket
          </Link>
        </div>

        {/* Login and register */}
        {userSelector?.id ? (
          <div className="flex gap-3">
            <div className="text-[#1F5673] font-medium">
              {userSelector?.first_name}
            </div>
            <button
              className="rounded-md bg-[#1F5673] text-[#F5D250] px-2"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4 justify-center items-center">
            <div className="bg-[#F5D250] text-[#1F5673] rounded-lg h-9 w-12 p-1">
              <Link className="" href={"/auth/login"}>
                Login
              </Link>
            </div>
            <div className="bg-[#1F5673] text-[#F5D250] rounded-lg h-9 w-20 justify-center items-center py-1 px-2">
              <Link href={"/auth/register"}>Register</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default NavbarComponents;
