import { combineReducers, createStore } from "@reduxjs/toolkit";
import ItemReducer from "./redux/item";
import Datareducer from "./redux/product";

const rootReducer = combineReducers({
  products: Datareducer,
  item: ItemReducer,
});

export const store = createStore(rootReducer);
