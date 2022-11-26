import React from "react";

const Card = ({ product, setSelectProduct }) => {
  const {
    Product_Name,
    Product_img,
    location,
    resale_price,
    original_price,
    years_of_use,
    seller_name,
  } = product;
  return (
    <div className="card bg-stone-400 shadow-xl">
      <figure>
        <img
          className="w-full h-96 p-5 rounded-3xl"
          src={Product_img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-gray-900">
        <h2 className="card-title text-gray-900 font-medium">
          Product Name : {Product_Name}
        </h2>
        <p className="font-medium text-lg">Location : {location}</p>
        <p className="font-medium text-lg">Resale Price: {resale_price}</p>
        <p className="font-medium text-lg">Original Price : {original_price}</p>
        <p className="font-medium text-lg">Years of use : {years_of_use}</p>
        <p className="font-medium text-lg">Seller Name : {seller_name}</p>
        <div className="card-actions justify-end">
          <label
            onClick={() => setSelectProduct(product)}
            htmlFor="bookNow-modal"
            className="btn btn-primary"
          >
            Book now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
