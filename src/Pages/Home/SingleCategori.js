import React from "react";

const SingleCategori = ({ categori }) => {
  const { Categories_Name, Categories_img } = categori;
  return (
    <div className="card card-compact bg-slate-200 shadow-xl">
      <div className="card-body">
        <h2 className="text-center lg:text-xl text-lg font-bold">
          {Categories_Name}
        </h2>
      </div>
    </div>
  );
};

export default SingleCategori;
