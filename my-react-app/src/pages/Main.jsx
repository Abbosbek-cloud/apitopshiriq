import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
} from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../constants/constants";

const initialState = {
  product: "",
  category: "",
  limit: "",
};

// const [loading, setLoading] = useState(true);

//   const { products } = useSelector((state) =>
//     loading ? state.products.products : ""
//   );

//   console.log(products);

const Main = () => {
  const [search, setSearch] = useState("");
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleChangeSelect = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    const { category, product, limit } = values;
    getDataSearch(category, product, limit);
  };

  const getData = async () => {
    let res = await fetch(`${BASE_URL}api/product/`);
    let data = await res.json();
    dispatch({ type: "GET_DATA", payload: data });
    setLoading(true);
  };

  const getDataSearch = async (category, product, limit) => {
    const res = await fetch(
      `${BASE_URL}api/product?name=${product}&category=${category}&limit=${limit}&offset=0`
    );
    const data = await res.json();
    dispatch({ type: "SEARCH", payload: data });
    setLoading(false);
  };

  const dataSearch = useSelector((state) => state);
  const { products } = useSelector((state) => state.products.products);
  let uniqueCategory = [
    ...new Map(products.map((item) => [item["category"], item])).values(),
  ];

  console.log(dataSearch);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Row className="d-flex justify-content-between align-items-center">
        <Col span={10}>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary text-light btn-primary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </Col>
        <Col span={8} className="">
          <div
            class="input-group justify-content-end"
            style={{ paddingRight: "10px" }}
          >
            <select
              style={{ width: "150px" }}
              class="custom-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div class="input-group-append w-auto">
              <button class="btn btn-outline-secondary" type="button">
                Search
              </button>
            </div>
          </div>
        </Col>
        <Col span={24} className="my-3">
          <div>
            <input
              type="text"
              name="product"
              placeholder="Product name"
              onChange={handleChange}
            />
            <select name="category" onChange={handleChange}>
              {loading ? (
                <Loader />
              ) : (
                uniqueCategory.map((product) => (
                  <option value={product.category}>
                    {product.category.toUpperCase()}
                  </option>
                ))
              )}
            </select>
            <input
              type="text"
              name="limit"
              placeholder="Limit"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
