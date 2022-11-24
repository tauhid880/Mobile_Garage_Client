import React, { useEffect, useState } from "react";
import SingleCategori from "./SingleCategori";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="grid grid-cols-3 mt-10 justify-center items-center gap-5 p-3">
      {categories.map((categori) => (
        <SingleCategori
          key={categori.Categories_id}
          categori={categori}
        ></SingleCategori>
      ))}
    </div>
  );
};

export default Categories;
