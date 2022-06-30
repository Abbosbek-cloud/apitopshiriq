import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { BASE_URL } from "../constants/constants";
import { SampleNextArrow, SamplePrevArrow } from "./Arrow";
import Loader from "./Loader";

const CarouselComp = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Laptops</h2>
      <Slider {...settings}>
        {data.map((laptop) => (
          <div
            key={laptop.id}
            className="p-relative px-2 rounded"
            style={{
              height: "250px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <img
              src={laptop.thumbnail}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
              alt=""
            />
            <div className="bg-warning p-2 d-flex justify-content-between">
              <span>{laptop.title.split(" ")[0]}</span>
              <span className="badge badge-primary">${laptop.price}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComp;
