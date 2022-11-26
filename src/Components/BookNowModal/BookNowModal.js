import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const BookNowModal = ({ selectProduct }) => {
  const { user } = useContext(AuthContext);
  const { Product_Name, resale_price, original_price } = selectProduct;
  return (
    <>
      <input type="checkbox" id="bookNow-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookNow-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{Product_Name}</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </>
  );
};

export default BookNowModal;
