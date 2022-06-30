const productState = {
  products: [],
  laptops: [],
  smartphones: [],
};

const Datareducer = (state = productState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_LAPTOP":
      return {
        ...state,
        laptops: [...action.payload],
      };
    default:
      return state;
  }
};

export default Datareducer;
