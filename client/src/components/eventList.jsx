"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { axiosInstance } from "../axios/axios";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { IoLocationOutline } from "react-icons/io5";
import { changeEventCategory } from "@/redux/slices/eventSlice";
import logo2 from "../assets/logo2.png";

function EventList() {
  const [events, setEvents] = useState([]);
  const eventSearch = useSelector((state) => state.event);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const fetchCategory = () => {
    axiosInstance()
      .get("/category")
      .then((res) => {
        setCategories(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchProducts = () => {
    axiosInstance()
      .get("/event/", {
        params: {
          eventName: eventSearch.eventName,
          category: eventSearch.category,
        },
      })
      .then((res) => {
        setEvents(res.data.result);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchProducts();
    fetchCategory();
  }, [eventSearch]);

  return (
    <>
      <div
        className="flex justify-center items-center mt-4 gap-[10%] cursor-pointer bg-[#F8F7F3] py-5 mx-36 rounded-lg"
        value={search}
      >
        <div
          // value={category.id}
          className="flex items-center gap-2"
          onClick={() => {
            dispatch(changeEventCategory(""));
          }}
        >
          <Image src={logo2} className="h-7 w-auto" />
          Semua{" "}
        </div>

        {categories.map((category, key) => (
          <div
            key={key}
            // value={category.id}
            className="text-center"
            onClick={() => {
              dispatch(changeEventCategory(category.id));
            }}
          >
            {category.category_name}
          </div>
        ))}
      </div>
      <div className="w-full">
        <div className="grid max-w-screen-2xl md:grid-cols-4 grid-cols-1 p-7 gap-3 mx-28 ">
          {events.map((event, key) => (
            <EventCard {...event} key={key} />
          ))}
        </div>
      </div>
    </>
  );
}
export default EventList;

export function EventCard({
  imgUrl,
  eventName,
  price,
  location,
  eventDate,
  category,
  id,
}) {
  const eventPrice = price == 0 ? "free" : price;
  return (
    <>
      <Link href={"/events/" + id}>
        <div className="flex flex-col items-start rounded-lg bg-[#F8F7F3]">
          <div className="max-h-full max-w-full text-center">
            <img
              src={process.env.API_URL + imgUrl}
              className="h-[150px]  w-[300px] rounded-t-lg "
              alt=""
            />
          </div>
          <div className="p-5 w-full h-full flex flex-col justify-between gap-2">
            <div className=" font-bold w-full text-[#1F5673]"> {eventName}</div>
            <div className=" font-medium w-full text-slate-400 text-sm">
              {moment(eventDate).format("DD  MMMM  YYYY")}
            </div>

            <div className=" font-bold w-full hidden">
              {category?.category_name}
            </div>

            <div className="flex justify-between">
              <div className="text-[#E02828] font-semibold  ">
                {eventPrice === "free"
                  ? "FREE"
                  : `IDR ${Number(eventPrice).toLocaleString("id-ID")}`}
              </div>
              <div className="flex items-center text-[#676666] text-sm">
                <IoLocationOutline />
                {location}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
