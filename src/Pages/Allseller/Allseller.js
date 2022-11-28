import React, { useEffect, useState } from "react";

const Allseller = () => {
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/Seller`)
      .then((res) => res.json())
      .then((data) => {
        setSellers(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-2xl text-center my-5 font-bold">All Sellers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id} className="active">
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  <button className="btn btn-sm btn-secondary">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allseller;
