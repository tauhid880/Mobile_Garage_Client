import React from "react";
import Lottie from "lottie-react";
import BannerAnimition from "../../assets/BannerAnimition.json";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className="bg-gray-700 text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Lottie
            className="m-10"
            animationData={BannerAnimition}
            loop={true}
          ></Lottie>
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Buy & <span className="text-violet-400">Sell Your Phone here</span>
          </h1>
          <p className="mt-6 mb-8 text-lg font-semibold sm:mb-12">
            Buy & Sell phone is easily here.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">
              Buy Now
            </Link>
            <Link
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-100"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
