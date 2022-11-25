import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ categori }) => {
  const { Categories_Name, Categories_img, _id } = categori;
  return (
    <Link
      to={`/category/${Categories_Name}`}
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
