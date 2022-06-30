import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { BASE_URL } from "../constants/constants";
import { SampleNextArrow, SamplePrevArrow } from "./Arrow";
import Loader from "./Loader";

const PhoneCarousel = ({ data }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div style={{ width: "100%", paddingInline: "20px" }}>
      <h2>Smartphones</h2>
      <Slider {...settings}>
        {data.map((smartPhone) => (
          <div
            key={smartPhone.id}
            className="p-relative rounded"
            style={{
              height: "400px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <img
              src={smartPhone.thumbnail}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
              alt=""
            />
            <div className="bg-warning p-2 d-flex justify-content-between">
              <span>{smartPhone.title}</span>
              <span className="badge badge-primary">${smartPhone.price}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhoneCarousel;
