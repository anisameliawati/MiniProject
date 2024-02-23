import { NavbarAdmin } from "@/components/navbar";

function Page() {
  return (
    <>
      <NavbarAdmin />
      <div className="w-full mt-2">
        <div className="flex flex-col justify-center  max-w-[1000px] w-full items-center m-auto  ">
          {/* <div className="py-5 w-full">
            <div className="flex px-3 items-center gap-3  border-gray-300 border-b w-72  p-2">
              <img src={Search} alt="" className=" w-3 h-3" />
              <input
                type="text"
                placeholder="Type any products here"
                className=" outline-none             "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div> */}

          <table className="w-full">
            <tr className=" text-center ">
              <th>IMAGE</th>

              <th>EVENT NAME</th>
              <th>PRICE</th>
            </tr>
            {/* {products.map((product, key) => (
              <AdminProductCard
                {...product}
                key={key}
                edit={() => edit(product.id)}
                hapus={() => hapus(product.id)}
              />
            ))} */}
          </table>
          <div className="mt-16 w-full py-3">
            <form id="form" action="">
              {/* onSubmit={formik.handleSubmit} */}
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
                        // value={formik.values.product_name}
                        // onChange={formik.handleChange}
                        // onChange={(e) => {
                        //   formik.setFieldValue("product_name", e.target.value);
                        // }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td> Event Banner</td>
                    <td>
                      <input
                        type="file"
                        placeholder="Image URL"
                        className="border p-1  w-96 hidden"
                        id="imageUrl"
                        // onChange={(e) => renderFile(e)}
                        // ref={upload}
                      />
                      <button
                        className="bg-full bg-[#1F5673] text-[#FFFF]  w-32  rounded-md "
                        type="button"
                        // onClick={() => {
                        //   upload.current.click();
                        // }}
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
                        min={50000}
                        required
                        id="price"
                        // value={formik.values.price}
                        // onChange={formik.handleChange}
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
                        // value={formik.values.description}
                        id="description"
                        // onChange={formik.handleChange}
                      />
                    </td>
                  </tr>
                </table>
                <tr className="flex gap-2">
                  <button
                    className="bg-[#1F5673] text-white p-1 px-2 rounded-md w-24 "
                    type="submit"
                  >
                    submit
                  </button>
                  <button
                    className="bg-[#F5D250] text-white p-1 px-2 rounded-md w-24 "
                    // onClick={() => formik.resetForm()}
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
