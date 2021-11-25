import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const addToWishlist = (product) => {
  return {
    type: ActionTypes.ADD_TO_WISHLIST,
    payload: product,
  };
};

export const removeCart = (product) => {
  return {
    type: ActionTypes.REMOVE_CART,
    payload: product,
  };
};

export const removeWishlist = (product) => {
  return {
    type: ActionTypes.REMOVE_WISHLIST,
    payload: product,
  };
};

export const filteredProduct = (category) => {
  return {
    type: ActionTypes.FILTER_PRODUCT,
  };
};
