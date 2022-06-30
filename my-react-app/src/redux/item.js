const initialState = {
  item: [],
  searched: [],
};

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        item: action.payload,
      };
    case "SEARCH":
      return {
        ...state,
        searched: action.payload,
      };
    default:
      return state;
  }
};

export default ItemReducer;
