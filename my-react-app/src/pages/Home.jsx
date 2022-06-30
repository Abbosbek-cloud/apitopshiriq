import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselComp from "../components/Carousel";
import Loader from "../components/Loader";
import PhoneCarousel from "../components/PhoneCarousel";
import { BASE_URL } from "../constants/constants";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { products } = useSelector((state) => state.products.products);

  const laptops = products.filter((item) => item.category === "laptops");

  const smartphones = products.filter(
    (item) => item.category === "smartphones"
  );
  const dispatch = useDispatch();

  const getData = async () => {
    const res = await fetch(`${BASE_URL}api/product/`);
    const data = await res.json();
    console.log(data);
    dispatch({ type: "GET_DATA", payload: data });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(products);
  return (
    <>
      {loading ? <Loader /> : <CarouselComp data={laptops} />}
      {loading ? <Loader /> : <PhoneCarousel data={smartphones} />}
    </>
  );
};

export default Home;
