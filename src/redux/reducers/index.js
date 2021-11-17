import { combineReducers } from "redux";
import {
  addToCartReducer,
  productsReducer,
  selectedProductsReducer,
  filterProductReducer,
  removeCartReducer,
} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  cart: addToCartReducer,
  filteredProduct: filterProductReducer,
});
export default reducers;
