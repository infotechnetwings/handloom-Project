import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import {
  addToCartReducer,
  productsReducer,
  filterProductReducer,
  addToWishlistReducer,
  userAuth,
} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  cart: addToCartReducer,
  wishlist: addToWishlistReducer,
  filteredProduct: filterProductReducer,
  user: userAuth,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist", "user"],
};

export default persistReducer(persistConfig, reducers);
