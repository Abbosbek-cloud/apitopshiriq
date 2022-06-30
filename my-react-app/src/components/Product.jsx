import { Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { BASE_URL } from "../constants/constants";
import Loader from "./Loader";

const Product = () => {
  const [img, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  const data = useSelector((state) => state && state.item.item);

  const dispatch = useDispatch();

  const params = useParams();

  const getDataById = async (uid) => {
    let res = await fetch(`${BASE_URL}api/product/${uid}`);
    let data = await res.json();
    dispatch({ type: "SET_DATA", payload: data });
    setLoading(false);
  };

  useEffect(() => {
    getDataById(params.id);
  }, []);
  console.log(data);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Row key={data.id} className="w-100">
          <Col xs={24} sm={24} md={12}>
            <div className="w-100">
              <img
                src={img || data.thumbnail}
                style={{ width: "100%", padding: "2em" }}
                alt="smth"
              />
            </div>

            <div
              className="d-flex align-items-center justify-content-center"
              style={{ flexWrap: "wrap" }}
            >
              {data &&
                data.images.map((image) => (
                  <div
                    key={image}
                    className="mx-2 my-2"
                    onClick={() => setImage(image)}
                  >
                    <img
                      style={{
                        width: "70px",
                        height: "65px",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      src={image}
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} style={{ padding: "2em" }}>
            <h1>{data.title.toUpperCase()}</h1>
            <table className="sampleTable" style={{ width: "100%" }}>
              <tr>
                <th>Brand</th>
                <td>{data.brand}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{data.category}</td>
              </tr>
              <tr>
                <th>Discount</th>
                <td>{data.discountPercentage}</td>
              </tr>
              <tr>
                <th>Stock</th>
                <td>{data.stock}</td>
              </tr>
              <tr>
                <th>Price</th>
                <td>{data.price}</td>
              </tr>
            </table>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Product;
