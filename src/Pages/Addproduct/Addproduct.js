import React from "react";

const Addproduct = () => {
  return (
    <div className="lg:h-[800px] h-auto lg:p-10 p-5  ">
      <div className="shadow-xl bg-zinc-300 text-black p-7 ">
        <h1 className="text-xl font-semibold  rounded-md text-center my-5">
          Add your product
        </h1>
        <form>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Product name</span>
              </label>
              <input
                type="text"
                className="input input-bordered  "
                placeholder="product name"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label ">
                <span className="label-text">Product original price</span>
              </label>
              <input
                type="text"
                className="input input-bordered  "
                placeholder="Original Price"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label ">
                <span className="label-text">Product resell price</span>
              </label>
              <input
                type="text"
                className="input input-bordered  "
                placeholder="Resell Price"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product condition</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="condition"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Your Phone"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Your Location"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product category</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="product category"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Year of purchase</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Purchase Year"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Year of use</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Year of use"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Image"
              />
            </div>
          </div>

          <div>
            <input
              className="btn btn-success text-gray-700 w-full my-5 "
              value="Add Product"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
