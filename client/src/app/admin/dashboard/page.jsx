"use client";
import { NavbarAdmin } from "@/components/navbar";
import { IoSearch } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useFormik, validateYupSchema } from "formik";
import { axiosInstance } from "@/axios/axios";
import { useDebounce } from "use-debounce";
import AdminProductCard from "@/components/admin/adminCard";
import moment from "moment";

function Page() {
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 500);
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [stocks, setStocks] = useState([]);

  const initalProduct = {
    eventName: "",
    price: 0,
    description: "",
    imageUrl: "",
    image: "",
    id: 0,
    location: "",
    eventDate: new Date(),
    category: 0,
    stock: 0,
  };

  const formik = useFormik({
    initialValues: initalProduct,
    onSubmit() {
      // console.log("test");
      save();
    },
  });

  const edit = async (id) => {
    const res = await axiosInstance().get("/event/" + id);
    const event = res.data.result;
    formik.setFieldValue("id", event.id);
    formik.setFieldValue("eventName", event.eventName);
    formik.setFieldValue("imageUrl", event.imgUrl);
    formik.setFieldValue("price", event.price);
    formik.setFieldValue("description", event.description);
    formik.setFieldValue("location", event.location);
    formik.setFieldValue("eventDate", event.eventDate);
    formik.setFieldValue("category", event.categoryId);
    formik.setFieldValue(
      "stock",
      event.stock.length ? event?.stock[0].stock_qty : 0
    );
    // formik.setFieldValue("stock", event.stock);
  };
  const save = () => {
    console.log(formik.values);
    const form = new FormData();
    form.append("eventName", formik.values.eventName);
    form.append("imageUrl", formik.values.imageUrl);
    form.append("image", formik.values.image);
    form.append("price", formik.values.price);
    form.append("description", formik.values.description);
    form.append("location", formik.values.location);
    form.append("eventDate", formik.values.eventDate);
    form.append("category", formik.values.category);
    form.append("stock", formik.values.stock);
    // form.append("stock", formik.values.stock);

    if (formik.values.id) {
      axiosInstance()
        .patch("/event/" + formik.values.id, form)
        .then(() => {
          alert("data berhasil diedit");
          fetchProducts();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axiosInstance()
        .post("/event/", form)
        .then(() => {
          alert("data berhasil ditambahkan");
          fetchProducts();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    formik.resetForm();
  };

  const hapus = (id) => {
    if (window.confirm("apakah anda yakin menghapus event id " + id + "?"))
      axiosInstance()
        .delete("/event/" + id)
        .then(() => {
          alert(`id ${id} berhasil dihapus`);
          fetchProducts();
        })
        .catch((err) => console.log(err));
  };

  const fetchProducts = () => {
    axiosInstance()
      .get("/event/", {
        params: {
          eventName: search,
        },
      })
      .then((res) => {
        setEvents(res.data.result);
      })
      .catch((err) => console.log(err));
  };

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
  const fetchStock = () => {
    axiosInstance()
      .get("/stock")
      .then((res) => {
        setStocks(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const renderFile = (e) => {
    // console.log(e.target.files[0]);
    formik.setFieldValue("image", e.target.files[0]);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategory();
    fetchStock();
  }, [value]);

  const upload = useRef(null);
  return (
    <>
      <NavbarAdmin />
      <div className="w-full mt-2">
        <div className="flex flex-col justify-center  max-w-[1000px] w-full items-center m-auto  ">
          <div className="py-5 w-full">
            <div className="flex justify-center items-center ">
              <input
                placeholder="find ticket here"
                className="lg:w-[500px] md:w-[300px] w-[200px] h-10 pl-2 rounded-l-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="bg-[#F5D250] h-10 w-9 rounded-r-lg py-3 px-2">
                <IoSearch className=" fill-[#F8F7F3]" />
              </div>
            </div>
          </div>

          <table className="w-full">
            <tr className=" text-center ">
              <th>EVENT BANNER</th>
              <th>EVENT NAME</th>
              <th>EVENT DATE</th>
              <th>PRICE</th>
              <th>LOCATION</th>
              <th>CATEGORY</th>
              <th>STOCK</th>
            </tr>
            {events.map((event, key) => (
              <AdminProductCard
                {...event}
                key={key}
                edit={() => edit(event.id)}
                hapus={() => hapus(event.id)}
              />
            ))}
          </table>
          <div className="mt-16 w-full py-3">
            <form id="form" action="">
              <h1 className="font-bold text-2xl mb-3">Add Event</h1>
              <div className="flex flex-col gap-1 ">
                <table>
                  <tr>
                    <td> Event Name</td>
                    <td>
                      <input
                        type="text"
                        placeholder="Event Name"
                        className="border p-1  w-96 "
                        required
                        id="eventName"
                        value={formik.values.eventName}
                        onChange={formik.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td> Event Banner</td>
                    <td>
                      <input
                        type="file"
                        placeholder="Image URL"
                        className="border p-1 w-96 hidden"
                        id="imageUrl"
                        onChange={renderFile}
                        ref={upload}
                      />
                      <button
                        className="bg-full bg-[#1F5673] text-[#FFFF]  w-32  rounded-md "
                        type="button"
                        onClick={() => {
                          upload.current.click();
                        }}
                      >
                        upload
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td> Event Price</td>
                    <td>
                      <input
                        type="number"
                        placeholder="Price"
                        className="border p-1 w-96"
                        required
                        id="price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Event Date</td>
                    <td>
                      {/* <input
                        type="date"
                        className="border p-1  w-96 "
                        // required
                        id="eventDate"
                        // value={moment(formik.values.eventDate).format(
                        //   "DD-MM-YYYY"
                        // )}
                        value={formik.values.eventDate}
                        onChange={formik.handleChange}
                      /> */}
                      <input
                        type="date"
                        value={moment(
                          formik.values.eventDate || new Date()
                        ).format("YYYY-MM-DD")}
                        onChange={formik.handleChange}
                        className="border p-1  w-96 "
                        id="eventDate"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Description</td>
                    <td>
                      <textarea
                        type="text"
                        placeholder="Description"
                        className="border p-1 w-96"
                        required
                        value={formik.values.description}
                        id="description"
                        onChange={formik.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>
                      <input
                        type="text"
                        placeholder="Event Location"
                        className="border p-1  w-96 "
                        required
                        id="location"
                        value={formik.values.location}
                        onChange={formik.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>
                      <select
                        type="text"
                        className="border p-1  w-96 "
                        required
                        id="category"
                        value={formik.values.category}
                        onChange={(e) => {
                          formik.setFieldValue("category", e.target.value);
                        }}
                      >
                        <option selected>Choose Category</option>
                        {categories.map((category, key) => (
                          <option key={key} value={category.id}>
                            {category.category_name}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Stock</td>
                    <td>
                      <input
                        type="number"
                        className="border p-1  w-96 "
                        required
                        id="stock"
                        value={formik.values.stock}
                        onChange={formik.handleChange}
                      />
                    </td>
                  </tr>
                </table>
                <tr className="flex gap-2">
                  <button
                    className="bg-[#1F5673] text-white p-1 px-2 rounded-md w-24 "
                    type="button"
                    onClick={formik.handleSubmit}
                  >
                    submit
                  </button>
                  <button
                    className="bg-[#F5D250] text-white p-1 px-2 rounded-md w-24 "
                    onClick={() => formik.resetForm()}
                  >
                    clear
                  </button>
                </tr>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
