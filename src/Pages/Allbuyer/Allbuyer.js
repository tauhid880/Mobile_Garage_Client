import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Allbuyer = () => {
  const [buyers, setBuyers] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/Buyer`)
      .then((res) => res.json())
      .then((data) => {
        setBuyers(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-2xl text-center my-5 font-bold">All Buyers</h1>
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
            {buyers.map((buyer, i) => (
              <tr key={buyer._id} className="active">
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
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

export default Allbuyer;
