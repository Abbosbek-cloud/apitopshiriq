import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import CarouselComp from "../components/Carousel";
import NotebookList from "../components/NotebookList";

const Notebooks = () => {
  const { products } = useSelector((state) => state.products.products);

  const laptops = products.filter((item) => item.category === "laptops");

  return (
    <>
      <Row>
        <Col span={24}>
          <img
            className="w-100 p-2"
            src="https://avatars.mds.yandex.net/i?id=e760bc5308c08016144c5ed2d17e6720-4011426-images-thumbs&n=13"
            alt="Cell phone"
          />
        </Col>
        <Col xs={24} sm={24} md={12} className="p-2">
          <h1>Welcome notebook section</h1>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius
            praesentium fugiat repudiandae voluptatem debitis temporibus cumque
            consectetur incidunt. Quia quaerat vel soluta suscipit libero enim
            alias, odit voluptatum perspiciatis. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Architecto perferendis accusamus
            asperiores similique officiis dicta numquam amet, ipsum, itaque
            corrupti nostrum iste exercitationem voluptatum adipisci rerum
            ducimus porro! Nemo, quos? Odio blanditiis sint amet fugit. Atque
            maxime consequuntur hic fuga harum voluptatem et veritatis molestiae
            vel illo ex commodi officia facere quia iusto eum quod animi,
            temporibus delectus enim voluptas.
          </p>
        </Col>
        <Col xs={24} sm={24} md={12} className="p-2">
          <h1>Welcome notebook section</h1>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius
            praesentium fugiat repudiandae voluptatem debitis temporibus cumque
            consectetur incidunt. Quia quaerat vel soluta suscipit libero enim
            alias, odit voluptatum perspiciatis. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Architecto perferendis accusamus
            asperiores similique officiis dicta numquam amet, ipsum, itaque
            corrupti nostrum iste exercitationem voluptatum adipisci rerum
            ducimus porro! Nemo, quos? Odio blanditiis sint amet fugit. Atque
            maxime consequuntur hic fuga harum voluptatem et veritatis molestiae
            vel illo ex commodi officia facere quia iusto eum quod animi,
            temporibus delectus enim voluptas.
          </p>
        </Col>
      </Row>
      <div className="container px-3">
        <CarouselComp data={laptops} />
        <NotebookList />
      </div>
    </>
  );
};

export default Notebooks;
