import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/productsActions";
import { toast } from "react-toastify";

export const ProductStickyBar = ({ title, image, price, item }) => {
  const dispatch = useDispatch();
  const [qty, serQty] = useState(1);
  const [total, setTotal] = useState(price);
  const handleChange = (e) => {
    const { value } = e.target;
    serQty(value);
  };
  const notify = () => {
    toast.success("Added to cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div class="sticky-bar">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <figure class="product-media">
              <a href="product.html">
                <img src={image} alt="Product image" />
              </a>
            </figure>

            <h4 class="product-title">
              <a href="product.html">{title}</a>
            </h4>
          </div>

          <div class="col-6 justify-content-end">
            <div class="product-price">{qty > 1 ? total * qty : total}</div>

            <div class="product-details-quantity">
              <input
                type="number"
                id="sticky-cart-qty"
                class="form-control"
                value={qty}
                min="1"
                max="10"
                step="1"
                data-decimals="0"
                required
                onChange={handleChange}
              />
            </div>

            <div class="product-details-action">
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                  notify();
                }}
                class="btn-product btn-cart"
              >
                <span>add to cart</span>
              </button>
              <a href="#" class="btn-product btn-wishlist" title="Wishlist">
                <span>Add to Wishlist</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
