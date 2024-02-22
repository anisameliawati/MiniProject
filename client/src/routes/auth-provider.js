/** @format */
"use client";
import { keepLogin } from "@/redux/middleware/user";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";

function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const path = usePathname();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(keepLogin());
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [path]);
  return <div>{isLoading ? <></> : children}</div>;
}
export default AuthProvider;
