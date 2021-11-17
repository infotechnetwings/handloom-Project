import { combineReducers } from "redux";
import {
  addToCartReducer,
  productsReducer,
  selectedProductsReducer,
  filterProductReducer,
} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  addToCart: addToCartReducer,
  filteredProduct: filterProductReducer,
});
export default reducers;
