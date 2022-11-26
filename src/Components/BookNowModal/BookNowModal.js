import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const BookNowModal = ({ selectProduct, setSelectProduct }) => {
  const { user } = useContext(AuthContext);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const { Product_Name, resale_price, original_price } = selectProduct;
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const resale_price = form.resale_price.value;
    const original_price = form.original_price.value;
    const number = form.number.value;
    const meeting_location = form.meeting_location.value;
    const booking = {
      booking_time: date,
      customer_name: name,
      customer_email: email,
      selling_Price: resale_price,
      phoneNumber: number,
      meetingPoint: meeting_location,
    };
    console.log(booking);
    toast.success("Item is booked. Thanks for your order");
    setSelectProduct(null);
  };
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
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <div className="">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                value={user.displayName}
                name="name"
                disabled
                type="text"
                placeholder="User Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                value={user.email}
                disabled
                name="email"
                type="text"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text font-semibold">
                  Product Resale Price
                </span>
              </label>
              <input
                value={resale_price}
                disabled
                name="resale_price"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text font-semibold">
                  Product Original Price
                </span>
              </label>
              <input
                value={original_price}
                disabled
                type="text"
                name="original_price"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text font-semibold">Phone Number</span>
              </label>
              <input
                type="text"
                name="number"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text font-semibold">
                  Meeting location
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="meeting_location"
                className="input input-bordered w-full "
              />
            </div>
            <div className="flex justify-center">
              <input
                className="btn btn-primary my-3 lg:w-96 w-max-sm"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookNowModal;
