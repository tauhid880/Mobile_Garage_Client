import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
// import useToken from "../../hooks/useToken";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  // const [createdUserEmail, setcreatedUserEmail] = useState("");
  // const [token] = useToken(createdUserEmail);
  // const navigate = useNavigate();
  // if (token) {
  //   navigate("/");
  // }
  const handleSignup = (data, e) => {
    e.target.reset();
    setSignupError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setSignupError(error.message);
      });

    const saveUser = (name, email) => {
      const user = { name, email };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          // setcreatedUserEmail(email);
        });
    };
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="shadow-xl p-7 w-96">
        <h1 className="text-xl font-semibold  rounded-md text-center my-5">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit(handleSignup)} className="my-5">
          <div className="form-control w-full ">
            <label className="label p-1">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="input input-bordered  "
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-600 font-thin">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label ">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              className="input input-bordered  "
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600 font-thin">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full py-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or more",
                },
                pattern: {
                  value:
                    /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z])/,
                  message:
                    "Password must be need One Uppercase letter, One Special characters, One number and Three Lowercase letter",
                },
              })}
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600 font-thin">
                {errors.password.message}
              </p>
            )}
          </div>

          <input
            className="btn btn-accent text-gray-200 w-full px-7"
            value="Sign Up"
            type="submit"
          />
          {signupError && <p className="text-red-500">{signupError}</p>}
        </form>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <span>
            <Link className="text-[#19D3AE]" to="/login">
              Please Login
            </Link>
          </span>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <div className="grid h-20  place-items-center">
            <button className="w-full btn bg-base-100 text-[#3A4256]">
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
