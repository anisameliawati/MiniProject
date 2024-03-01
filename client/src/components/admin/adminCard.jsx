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
    <tr className="text-center divide-y">
      <td className="text-center whitespace-nowrap">
        <img
          src={process.env.API_URL + imgUrl}
          alt=""
          className=" w-24 object-cover"
        />
      </td>

      <td className="text-center whitespace-nowrap">{eventName}</td>
      <td className="text-center whitespace-nowrap">
        {moment(eventDate).format("DD-MM-YYYY")}
      </td>
      <td className=" font-semibold whitespace-nowrap">
        IDR {Number(price).toLocaleString("id-ID")}
      </td>
      <td className="text-cente whitespace-nowrapr">{location}</td>
      <td className="text-center whitespace-nowrap">
        {category?.category_name}
      </td>
      <td className="text-center whitespace-nowrap">
        {stock.length ? stock[0].stock_qty : 0}
      </td>
      <td className="text-center whitespace-nowrap">
        <div className="flex gap-5 h-[70px] items-center justify-center whitespace-nowrap">
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
