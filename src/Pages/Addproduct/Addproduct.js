import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Addproduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const handleAddProduct = (data, e) => {
    e.preventDefault();
    e.target.reset();
    const product_name = data.product_name;
    const original_price = data.original_price;
    const resell_price = data.resell_price;
    const product_condition = data.product_condition;
    const phone_number = data.phone_number;
    const location = data.location;
    const product_category = data.product_category;
    const purchase_year = data.purchase_year;
    const usage_year = data.usage_year;
    const product_image = data.product_image;
    const product_addingTime = date;
    const category_id = data.category_id;

    const product = {
      Product_Name: product_name,
      Categories_Name: product_category,
      Product_img: product_image,
      Category_id: category_id,
      location: location,
      resale_price: resell_price,
      original_price: original_price,
      years_of_use: usage_year,
      seller_name: user.displayName,
      seller_email: user.email,
    };
    fetch(`${process.env.REACT_APP_API_URL}/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added successfully");
          navigate("/dashboard/myproducts");
        }
      });
  };
  return (
    <div className="lg:h-[800px] h-auto lg:p-10 p-5  ">
      <div className="shadow-xl bg-zinc-300 text-black p-7 ">
        <h1 className="text-xl font-semibold  rounded-md text-center my-5">
          Add your product
        </h1>
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Product name</span>
              </label>
              <input
                {...register("product_name", {
                  required: "Product Name is required",
                })}
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
                {...register("original_price", {
                  required: "Original price is required",
                })}
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
                {...register("resell_price", {
                  required: "Resell price is required",
                })}
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
                {...register("product_condition", {
                  required: "Product condition is required",
                })}
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
                {...register("phone_number", {
                  required: "Phone Number is required",
                })}
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
                {...register("location", { required: "Location is required" })}
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
                {...register("product_category", {
                  required: "Product category is required",
                })}
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
                {...register("purchase_year", {
                  required: "Year of purchase is required",
                })}
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
                {...register("usage_year", {
                  required: "Year of use is required",
                })}
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
                {...register("product_image", {
                  required: "Product Image is required",
                })}
                type="text"
                className="input input-bordered w-full"
                placeholder="Image"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category Id</span>
              </label>
              <input
                {...register("category_id", {
                  required: "Category Id is required",
                })}
                type="text"
                className="input input-bordered w-full"
                placeholder="01"
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
