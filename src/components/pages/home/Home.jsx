import React from "react";
import Header from "../../partials/Header";
import Banner from "./banner/Banner";
import Popular from "./popular/Popular";
import Topping from "./topping/Topping";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Popular />
      <Topping />
    </>
  );
};

export default Home;
