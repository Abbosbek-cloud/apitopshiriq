import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import PhoneCarousel from "../components/PhoneCarousel";
import PhoneList from "../components/PhoneList";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { BASE_URL } from "../constants/constants";

const Phones = () => {
  const [loading, setLoading] = useState(true);
  const { products } = useSelector((state) => state.products.products);

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
      <Row>
        <Col span={24}>
          <img
            className="w-100 p-2"
            src="https://avatars.mds.yandex.net/get-zen_doc/237236/pub_5bb60a31aeb34f00a93153c7_5bb60b1e53018c00a9ee1fac/scale_1200"
            alt="Cell phone"
          />
        </Col>
        <Col xs={24} sm={24} md={12} className="p-2">
          <h1>Welcome phone section</h1>
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
          <h1>Welcome phone section</h1>
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
      <Row className="container">
        {loading ? <Loader /> : <PhoneCarousel data={smartphones} />}
        <PhoneList />
      </Row>
    </>
  );
};

export default Phones;
