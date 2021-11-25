import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};
var cart = [];
var wishlist = [];
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
      const exist = state.find((x) => x.id === payload.id);
      if (exist) {
        return state.map((x) =>
          x.id === payload.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...payload,
            qty: 1,
          },
        ];
      }

    case ActionTypes.REMOVE_CART:
      const exist1 = state.find((x) => x.id === payload.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) => {
          return x.id === payload.id ? { ...x, qty: x.qty - 1 } : x;
        });
      }

    default:
      return state;
  }
};

export const addToWishlistReducer = (state = wishlist, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_WISHLIST:
      const exist = state.find((x) => x.id === payload.id);
      if (exist) {
        return state.map((x) =>
          x.id === payload.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...payload,
            qty: 1,
          },
        ];
      }

    case ActionTypes.REMOVE_WISHLIST:
      const exist1 = state.find((x) => x.id === payload.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) => {
          return x.id === payload.id ? { ...x, qty: x.qty - 1 } : x;
        });
      }

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
