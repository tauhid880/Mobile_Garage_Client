import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const { Categories_Name, Categories_img, Category_id } = category;
  return (
    <Link
      to={`/category/${Category_id}`}
      className="card card-compact bg-slate-200 shadow-xl"
    >
      <div className="card-body">
        <h2 className="text-center lg:text-xl text-lg font-bold">
          {Categories_Name}
        </h2>
      </div>
    </Link>
  );
};

export default CategoriesCard;
