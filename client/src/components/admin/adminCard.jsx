/** @format */

import moment from "moment";
// import { useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function AdminProductCard({
  eventName,
  price,
  imgUrl,
  edit,
  hapus,
  eventDate,
  location,
  category,
  stock,
}) {
  // useEffect(() => {}, []);
  return (
    <tr className="text-center">
      <td className="text-center">
        <img
          src={process.env.API_URL + imgUrl}
          alt=""
          className=" w-24 object-cover"
        />
      </td>

      <td className="text-center">{eventName}</td>
      <td className="text-center">{moment(eventDate).format("DD-MM-YYYY")}</td>
      <td className=" font-semibold">
        IDR {Number(price).toLocaleString("id-ID")}
      </td>
      <td className="text-center">{location}</td>
      <td className="text-center">{category?.category_name}</td>
      <td className="text-center">{stock.length ? stock[0].stock_qty : 0}</td>
      <td className="text-center">
        <div className="flex gap-5 h-[70px] items-center justify-center">
          <button
            onClick={edit}
            className="h-[30px] w-[50px] px-4 rounded-md bg-[#1F5673] text-white "
          >
            <MdEdit />
          </button>
          <button
            className="h-[30px] w-[50px] px-4 rounded-md bg-[#F5D250] text-white  "
            onClick={hapus}
          >
            <MdDelete />
          </button>
        </div>
      </td>
    </tr>
  );
}
export default AdminProductCard;
