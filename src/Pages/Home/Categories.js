import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-3xl text-center my-5">Categories</h1>
      <div className="grid grid-cols-3 justify-center items-center gap-5 p-3">
        {categories.map((category) => (
          <CategoriesCard
            key={category._id}
            category={category}
          ></CategoriesCard>
        ))}
      </div>
      <p className="lg:text-end text-center my-3">
        <Link className=" text-xl font-bold">See More...</Link>
      </p>
    </div>
  );
};

export default Categories;
