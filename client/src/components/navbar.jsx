"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { functionLogout } from "../redux/slices/userSlice";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { axiosInstance } from "../axios/axios";
import {
  changeEventCategory,
  changeEventName,
} from "@/redux/slices/eventSlice";

function NavbarComponents() {
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 500);
  const [open, setOpen] = useState(false);
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(functionLogout());
  };
  useEffect(() => {
    // fetchProducts();
    // fetchCategory();
  }, [value]);
  return (
    <>
      <div className="flex justify-between items-center py-6 top-0 sticky px-11 bg-[#F8F7F3] z-50">
        {/* logo */}
        <Link href={"/"}>
          <Image src={logo} className=" h-12 w-auto" alt="" />
        </Link>
        {/* search */}
        <div className="flex justify-center items-center ">
          <div className="flex gap-1 bg-[#FFFF] rounded-lg">
            <input
              placeholder="find your ticket here"
              className="lg:w-[500px] md:w-[400px] w-[150px] h-10 pl-2 rounded-l-lg"
              // value={search}

              // onChange={(e) => setSearch(e.target.value)}
              onChange={(e) => {
                dispatch(changeEventName(e.target.value));
              }}
            />

            {/* <div className="flex items-center ">
              <div className="text-[#676666]">Filter by:</div>
              <select
                // value={search}
                onChange={(e) => {
                  dispatch(changeEventCategory(e.target.value));
                }}
                className="text-[#676666]"
              >
                <option selected>Categories</option>
                {categories.map((category, key) => (
                  <option key={key} value={category.id} className="text-center">
                    {category.category_name}
                  </option>
                ))}
              </select>
            </div> */}
          </div>
          <div className="bg-[#F5D250] h-10 w-9 rounded-r-lg py-3 px-2">
            <IoSearch className=" fill-[#F8F7F3]" />
          </div>
        </div>

        {/* navigate to home and find events */}
        {/* <div className="flex gap-3 ">
          <Link
            href={"/"}
            className="text-[#1F5673] md:font-medium md:text-lg text-sm"
          >
            Event
          </Link>
          <Link
            href={"/"}
            className="text-[#1F5673] md:font-medium md:text-lg text-sm"
          >
            My Ticket
          </Link>
        </div> */}

        {/* Login and register */}
        {userSelector?.id ? (
          <div className="flex gap-3 justify-center items-center">
            <div className="text-[#1F5673] md:font-medium md:text-lg text-sm ">
              <Link href={"/user/detail"}>{userSelector?.first_name}</Link>
            </div>
            <button
              className="bg-[#1F5673] text-[#FFFF] rounded-lg h-9 w-20 justify-center items-center text-center py-1.5"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4 justify-center items-center">
            <div className="bg-[#F5D250] text-[#FFFF] rounded-lg h-9 w-20 text-center py-1.5">
              <Link className="" href={"/auth/login"}>
                Login
              </Link>
            </div>
            <div className="bg-[#1F5673] text-[#FFFF] rounded-lg h-9 w-20 justify-center items-center text-center py-1.5">
              <Link href={"/auth/register"}>Register</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default NavbarComponents;

export function NavbarAdmin() {
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    console.log("test");
    dispatch(functionLogout());
  };
  return (
    <>
      <div className="flex justify-between items-center py-6 top-0 sticky px-11 bg-[#F8F7F3] z-50">
        <Link href={"/"}>
          <Image src={logo} className=" h-12 w-auto" alt="" />
        </Link>
        <div className="font-bold text-lg text-[#1F5673]">ADMIN DASHBOARD</div>
        {/* Login and register */}
        {userSelector?.id ? (
          <div className="flex gap-3 justify-center items-center">
            <div className="text-[#1F5673] md:font-medium md:text-lg text-sm ">
              {userSelector?.first_name}
            </div>
            <button
              className="bg-[#1F5673] text-[#FFFF] rounded-lg h-9 w-20 justify-center items-center text-center py-1.5"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4 justify-center items-center">
            <div className="bg-[#F5D250] text-[#1F5673] rounded-lg h-9 w-20 text-center py-1.5">
              <Link className="" href={"/auth/login"}>
                Login
              </Link>
            </div>
            <div className="bg-[#1F5673] text-[#F5D250] rounded-lg h-9 w-20 justify-center items-center text-center py-1.5">
              <Link href={"/auth/register"}>Register</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
