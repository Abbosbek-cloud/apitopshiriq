import React from "react";
import { Button, Card, Col, Row } from "antd";

const { Meta } = Card;

const Displaydata = ({ data }) => {
  return (
    <Row gutter={[16, 16]} className="d-flex justify-content-center">
      {data &&
        data.map((item) => (
          <Col
            key={item.id}
            xs={24}
            sm={12}
            md={8}
            xl={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                <img
                  alt="example"
                  src={item.thumbnail}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              }
              actions={[
                <Button className="d-inline" type="primary">
                  Batafsil
                </Button>,
              ]}
            >
              <Meta
                title={item.title}
                description={item.description.slice(0, 65)}
              />
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default Displaydata;
