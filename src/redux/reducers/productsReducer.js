import { filteredProduct } from "../actions/productsActions";
import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};
var cart = [];
var filterProduct = [];
export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
export const addToCartReducer = (state = cart, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return (cart = cart.concat(payload));
    default:
      return state;
  }
};

export const removeCart = (state = cart, { type, payload }) => {
  switch (type) {
    case ActionTypes.REMOVE_CART:
      cart = state.filter((item) => {
        return item.id !== payload.id;
      });
      return state;
    default:
      return state;
  }
};

export const filterProductReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FILTER_PRODUCT:
      filterProduct = intialState.products.filter((item) => {
        return item.category == payload;
      });
      return filterProduct;
    default:
      return state;
  }
};
