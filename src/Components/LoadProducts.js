import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductPage from "../Pages/ProductPage/ProductPage";
import BookNowModal from "./BookNowModal/BookNowModal";
import Card from "./Card/Card";

const LoadProducts = () => {
  const [selectProduct, setSelectProduct] = useState([]);
  const products = useLoaderData();
  return (
    <section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 lg:px-0 gap-5 my-10">
        {products.map((product) => (
          <Card
            key={product._id}
            product={product}
            setSelectProduct={setSelectProduct}
          ></Card>
        ))}
      </div>
      {selectProduct && (
        <BookNowModal selectProduct={selectProduct}></BookNowModal>
      )}
    </section>
  );
};

export default LoadProducts;
