"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import Link from "next/link";

function TransactionComponents() {
  return (
    <>
      <NavbarTransaction />
      <div>
        <table className="w-full mt-4">
          <tr className=" text-center">
            <th>Product</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          {/* untuk looping items
          {events.map((event, key) => (
              <AdminProductCard
                {...event}
                key={key}
                edit={() => edit(event.id)}
                hapus={() => hapus(event.id)}
              />
            ))} */}
        </table>
        <div className=" font-bold text-[#1F5673] pl-10 mt-5">
          Total Payment :<div></div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="rounded-lg h-9 w-20 text-center py-1.5 bg-[#F5D250] text-[#FFFF] hover:bg-white hover:text-[#F5D250]">
            <Link href={"/transaction/transaction-detail"}>Payment</Link>
          </div>
          <div className="rounded-lg h-9 w-20 text-center py-1.5 bg-[#1F5673] text-[#FFFF] hover:bg-white hover:text-[#1F5673]">
            <Link href={"/eventList"}>Cancel</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default TransactionComponents;

export function NavbarTransaction() {
  const userSelector = useSelector((state) => state.auth);
  return (
    <>
      <div className=" flex items-center justify-between py-6 px-11 bg-[#F8F7F3]">
        <Link href={"/"}>
          <Image src={logo} className=" h-12 w-auto" />
        </Link>

        <div className=" font-bold text-[#1F5673] text-xl">Transaction</div>

        <div className="flex gap-3 justify-center items-center">
          <div className="text-[#1F5673] md:font-medium md:text-lg text-sm ">
            {userSelector?.first_name}
          </div>
        </div>
      </div>
    </>
  );
}
