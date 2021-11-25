import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import {
  addToCartReducer,
  productsReducer,
  selectedProductsReducer,
  filterProductReducer,
  removeCartReducer,
  addToWishlistReducer,
} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  cart: addToCartReducer,
  wishlist: addToWishlistReducer,
  filteredProduct: filterProductReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"],
};

export default persistReducer(persistConfig, reducers);
