import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { Signin, providerLogin } = useContext(AuthContext);
  const [LoginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  //  login eventHandler
  const handleLogin = (data, e) => {
    e.target.reset();
    console.log(data);
    setLoginError("");
    Signin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(data.email);
        toast.success("Successfully Login.");
        // Get Token

        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  // Google Login
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = (data) => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;

        saveUser(user.email, user.displayName, (data.role = "Buyer"));
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };
  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // setCreatedUserEmail(email);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="shadow-xl p-7 w-96">
        <h1 className="text-xl font-semibold  rounded-md text-center my-5">
          Login
        </h1>
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
