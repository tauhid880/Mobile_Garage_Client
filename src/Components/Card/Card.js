import React from "react";

const Card = ({ product }) => {
  const { Product_Name, Product_img } = product;
  return (
    <div className="card bg-slate-400 shadow-xl">
      <figure>
        <img
          className="w-full h-96 p-5 rounded-3xl"
          src={Product_img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-gray-900">
        <h2 className="card-title text-gray-900">{Product_Name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
