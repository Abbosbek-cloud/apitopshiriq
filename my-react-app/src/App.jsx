import { useEffect, useState } from "react";
import "./App.css";
import { BASE_URL } from "./constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Phones from "./pages/Phones";
import ProductInfo from "./pages/ProductInfo";
import Product from "./components/Product";
import NotFound from "./pages/NotFound";
import Notebooks from "./pages/Notebooks";
import Main from "./pages/Main";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="home" element={<Home />} />
          <Route path="phone" element={<Phones />} />
          <Route path="notebook" element={<Notebooks />} />
        </Route>
        <Route path="/product/" element={<ProductInfo />}>
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
