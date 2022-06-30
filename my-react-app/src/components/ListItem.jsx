import React from "react";
import { Col, Rate, Row } from "antd";
import { useNavigate } from "react-router-dom";
const ListItem = ({ data }) => {
  const goTo = useNavigate();
  return (
    <Row
      style={{ width: "100%" }}
      gutter={[16, 16]}
      className="my-2 text-dark text-decoration-none"
    >
      <Col
        style={{ height: "60px", cursor: "pointer" }}
        onClick={() => goTo(`/product/${data.id}`)}
      >
        <img
          src={data.thumbnail}
          style={{ width: "60px", height: "100%", objectFit: "cover" }}
          alt=""
        />
      </Col>
      <Col style={{ height: "50px", flex: "auto" }}>
        <div className="d-flex justify-content-between align-items-center">
          <span className="">{data.title}</span>
          <span className="bg-danger text-light p-1 rounded h6 mb-0">
            ${data.price}
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="bg-warning badge">-{data.discountPercentage} %</span>
          <Rate defaultValue={Math.floor(data.rating.toFixed(1))} />
          <span className="p-2">{data.stock}</span>
        </div>
      </Col>
    </Row>
  );
};

export default ListItem;
