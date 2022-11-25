import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { Signin, providerLogin } = useContext(AuthContext);
  const [LoginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  //  login eventHandler
  const handleLogin = (data, e) => {
    e.target.reset();
    console.log(data);
    setLoginError("");
    Signin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully Login.");
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  // Google Login
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="shadow-xl p-7 w-96">
        <h1 className="text-xl font-semibold  rounded-md text-center my-5">
          Login
        </h1>
        <select className="select select-bordered w-full max-w-xs">
          <option>Buyer</option>
          <option>Seller </option>
        </select>
        <form className="my-5" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label p-1">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered  "
              {...register("email", { required: "Email Address is required" })}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600 font-semibold">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full py-3">
            <label className="label p-1">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or more",
                },
              })}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600 font-semibold">
                {errors.password?.message}
              </p>
            )}
            <label className="label py-5">
              <span className="label-text">Forgot Password ?</span>
            </label>
          </div>

          <input
            className="btn btn-accent text-gray-200 w-full px-7"
            value="Login"
            type="submit"
          />
          <div>
            {LoginError && <p className="text-red-500 mt-2">{LoginError}</p>}
          </div>
        </form>
        <p className="text-sm text-center">
          New to Mobile Garage?{" "}
          <span>
            <Link className="text-[#19D3AE]" to="/signup">
              Create new account
            </Link>
          </span>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <div className="grid h-20  place-items-center">
            <button
              onClick={handleGoogleSignIn}
              className="w-full btn bg-base-100 text-[#3A4256]"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
