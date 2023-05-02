import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div>
      <Header></Header>
      <div  className="min-vh-100 min-h-minus-70">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
