/** @format */

import NavbarComponent from "@/components/navbar";
import { axiosInstanceSSR } from "@/axios/axios";
import { MdDateRange } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import moment from "moment";
import Link from "next/link";

export const metadata = {
  title: "Ticketed | Event Detail",
  description: "An easy access to book your favorite events",
};

async function Page({ params }) {
  const { eventId } = params;

  const event = (await axiosInstanceSSR().get("/event/" + eventId)).data.result;
  const eventPrice = event.price == 0 ? "free" : event.price;

  return (
    <>
      <NavbarComponent />
      <div className="md:flex px-10 mt-10 gap-10 rounded-lg">
        <div className="md:max-w-[60%] md:max-h-[40%]">
          <img
            className="rounded-lg"
            src={process.env.API_URL + event.imgUrl}
            alt=""
          />
        </div>
        <div className="md:w-[30%] bg-[#F8F7F3] rounded-xl text-center items-start gap-6 px-10 flex flex-col pt-6">
          <div className=" font-semibold text-xl">{event.eventName}</div>
          <div>
            <div className=" flex items-center gap-2">
              <MdDateRange className="text-[#2E86B4]" />
              <div className="text-[#274C5B]">
                {moment(event.eventDate).format("DD  MMMM  YYYY")}
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <IoLocationSharp className="text-[#2E86B4]" />
              <div className="text-[#274C5B]">{event.location}</div>
            </div>
          </div>
          <div className="text-[#E02828] font-semibold items-center">
            {eventPrice === "free"
              ? "FREE"
              : `IDR ${Number(eventPrice).toLocaleString("id-ID")}`}{" "}
          </div>
          {/* <div>{stock.stock_status}</div> */}
          <Link href={"/transaction"}>
            <button className="h-[49px] w-[168px] rounded-lg text-white bg-[#F5D250] hover:bg-white  hover:text-[#274C5B]">
              Buy Ticket
            </button>
          </Link>
          <div className="flex flex-col items-start mb-3">
            <div className="font-bold">Description</div>
            <div>{event.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
