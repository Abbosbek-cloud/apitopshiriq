import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../constants/constants";
import ListItem from "./ListItem";
import Loader from "./Loader";

const NotebookList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await fetch(`${BASE_URL}api/product/`);
    let data = await res.json();
    dispatch({ type: "GET_DATA", payload: data });
    setLoading(false);
  };

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products.products);

  console.log(products);

  return (
    <Row>
      {loading ? (
        <Loader />
      ) : (
        products
          .filter((item) => item.category === "laptops")
          .map((product) => (
            <Col xs={24} sm={24} md={12}>
              <ListItem data={product} />
            </Col>
          ))
      )}
    </Row>
  );
};

export default NotebookList;
