"use client";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useEffect } from "react";
import { axiosInstance } from "@/axios/axios";
import { redirect } from "next/dist/server/api-utils";
import { useFormik } from "formik";
import logo from "../../../assets/logo.png";
import logo2 from "../../../assets/logo2.png";
import Image from "next/image";
import Link from "next/link";

function Page() {
  YupPassword(Yup);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      gender: "male",
      email: "",
      password: "",
      confirmpassword: "",
      username: "",
    },
    validationSchema: Yup.object().shape({
      first_name: Yup.string().required(),
      last_name_name: Yup.string().required(),
      email: Yup.string().required().email("bukan email"),
      password: Yup.string().required().min(5),
      confirmpassword: Yup.string().required().min(5),
      username: Yup.string().required(),
    }),
    onSubmit: () => {
      mendaftar();
    },
  });
  const mendaftar = () => {
    const user = formik.values;
    console.log(user);
    if (
      user.email &&
      user.first_name &&
      user.last_name &&
      user.password &&
      user.username &&
      user.gender
    ) {
      axiosInstance()
        .post("/users", user)
        .then((res) => {
          formik.resetForm();
          alert("register berhasil");
          redirect("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);
  return (
    <>
      <div className="grid md:grid-cols-2 bg-[#F5D250] min-h-screen grid-cols-1">
        <div className=" m-auto ">
          <Image
            src={logo}
            className="mx-auto md:h-[200px] w-auto h-[200px] p-3"
          />
        </div>
        <div className="flex flex-col justify-center items-center px-6 py-12 md:px-8 bg-[#F8F7F3] rounded-t-3xl md:rounded-l-3xl md:justify-center md:items-center">
          <Image className="mx-auto h-20 w-auto" src={logo2} />
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-[#1F5673]">
              Sign up your account
            </h2>
          </div>

          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-2">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    for="first_name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder=""
                      id="first_name"
                      type="first_name"
                      onChange={formik.handleChange}
                      value={formik.values.first_name}
                      className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="last_name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder=""
                      id="last_name"
                      type="last_name"
                      onChange={formik.handleChange}
                      value={formik.values.last_name}
                      className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

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
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    placeholder="username"
                    id="username"
                    type="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="gender"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Gender
                  </label>
                </div>
                <div className="flex gap-7">
                  <select
                    className=" py-2 px-1 bg-[#FFFF] text-gray-400 font-medium border text-sm rounded-lg  "
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    // onChange={(e) =>
                    //   formik.setFieldValue("gender", e.target.value)
                    // } //panggil function inputHandler otomatis kirim event
                  >
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                  </select>
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
                </div>
                <div className="mt-2">
                  <input
                    placeholder="******"
                    id="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    placeholder="******"
                    id="confirmpassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmpassword}
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={formik.handleSubmit}
                  className="flex w-full justify-center rounded-md bg-[#1F5673] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5D250] hover:bg-[#F5D250]"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="flex gap-1 mt-4 text-center text-sm">
              <p className="font-semibold text-gray-500">
                Already have an account?
              </p>
              <Link
                href="/auth/login"
                className="font-semibold text-[#1F5673] hover:text-[#F5D250]"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
