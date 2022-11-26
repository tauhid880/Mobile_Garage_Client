import React from "react";

const ProductPage = ({ products }) => {
  const { Product_Name, Product_img } = products;
  return (
    <div>
      <p>Name : {Product_Name}</p>
      <img src={Product_img} alt="" />
    </div>
  );
};

export default ProductPage;
