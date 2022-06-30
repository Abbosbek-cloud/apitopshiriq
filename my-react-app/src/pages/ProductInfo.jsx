import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProductInfo = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProductInfo;
