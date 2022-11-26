import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductPage from "../Pages/ProductPage/ProductPage";
import Card from "./Card/Card";

const LoadProducts = () => {
  const products = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-5 my-10">
      {products.map((product) => (
        <Card key={product._id} product={product}></Card>
      ))}
    </div>
  );
};

export default LoadProducts;
