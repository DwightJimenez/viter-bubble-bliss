import React from "react";
import Header from "../../partials/Header";
import Banner from "./banner/Banner";
import Popular from "./popular/Popular";
import Topping from "./topping/Topping";
import Benefits from "./benefits/Benefits";
import Form from "./form/Form";
import Footer from "../../partials/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Popular />
      <Topping />
      <Benefits />
      <Form/>
      <Footer/>
    </>
  );
};

export default Home;
