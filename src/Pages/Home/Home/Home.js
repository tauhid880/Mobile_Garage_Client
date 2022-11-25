import React from "react";
import Banner from "../Banner";
import Categories from "../Categories";
import Testimonial from "../Testimonial";
import Advertiseditems from "./Advertiseditems";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Advertiseditems></Advertiseditems>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
