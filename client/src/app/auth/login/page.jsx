"use client";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { userLogin } from "@/redux/middleware/user";
import logo from "../../../assets/logo.png";
import logo2 from "../../../assets/logo2.png";

import Image from "next/image";

function Page() {
  const dispatch = useDispatch();

  const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    dispatch(userLogin({ email, password }));
  };

  return (
    <>
      <div className="grid md:grid-cols-2 bg-[#F5D250] min-h-screen grid-cols-1">
        <div className=" m-auto ">
          <Image
            src={logo}
            className="mx-auto md:h-[200px] w-auto h-[150px] p-3"
          />
        </div>
        <div className="flex flex-col justify-center items-center px-6 py-12 md:px-8 bg-[#F8F7F3] rounded-t-3xl md:rounded-l-3xl md:justify-center md:items-center">
          <Image className="mx-auto h-20 w-auto" src={logo2} />
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-[#1F5673]">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    placeholder="example@mail.com"
                    id="email"
                    type="email"
                    className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      href=""
                      className="font-semibold text-[#1F5673] hover:text-[#F5D250]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    placeholder="******"
                    id="password"
                    type="password"
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-[#1F5673] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5D250] hover:bg-[#F5D250]"
                  onClick={login}
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="flex gap-1 mt-4 text-center text-sm">
              <p className="font-semibold text-gray-500">
                Don't have an account?
              </p>
              <Link
                href="/auth/register"
                className="font-semibold text-[#1F5673] hover:text-[#F5D250]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
