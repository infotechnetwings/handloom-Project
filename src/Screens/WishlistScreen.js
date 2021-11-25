import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { addToCart, removeWishlist } from "../redux/actions/productsActions";

export const WishlistScreen = () => {
  const wishlist_product = useSelector((state) => state.wishlist);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <main class="main">
      <div class="page-header text-center">
        <div class="container">
          <h1 class="page-title">
            Wishlist<span>Pilakhuwa Handloom</span>
          </h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" class="breadcrumb-nav">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>

            <li class="breadcrumb-item active" aria-current="page">
              Wishlist
            </li>
          </ol>
        </div>
      </nav>

      <div class="page-content">
        <div class="container">
          <table class="table table-wishlist table-mobile">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {wishlist_product.map((item) => {
                return (
                  <tr>
                    <td class="product-col">
                      <div class="product">
                        <figure class="product-media">
                          <a href="#">
                            <img src={item.image} alt="Product image" />
                          </a>
                        </figure>

                        <h3 class="product-title">
                          <Link to={`productdetail/${item.id}`}>
                            {item.title}
                          </Link>
                        </h3>
                      </div>
                    </td>
                    <td class="price-col">{item.price}</td>
                    <td class="stock-col">
                      <span class="in-stock">In stock</span>
                    </td>
                    <td class="action-col">
                      <button
                        class="btn btn-block btn-outline-primary-2"
                        onClick={() => dispatch(addToCart(item))}
                      >
                        <i class="icon-cart-plus"></i>Add to Cart
                      </button>
                    </td>
                    <td class="remove-col">
                      <button
                        class="btn-remove"
                        onClick={() => dispatch(removeWishlist(item))}
                      >
                        <i class="icon-close"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div class="wishlist-share">
            <div class="social-icons social-icons-sm mb-2">
              <label class="social-label">Share on:</label>
              <a href="#" class="social-icon" title="Facebook" target="_blank">
                <i class="icon-facebook-f"></i>
              </a>
              <a href="#" class="social-icon" title="Twitter" target="_blank">
                <i class="icon-twitter"></i>
              </a>
              <a href="#" class="social-icon" title="Instagram" target="_blank">
                <i class="icon-instagram"></i>
              </a>
              <a href="#" class="social-icon" title="Youtube" target="_blank">
                <i class="icon-youtube"></i>
              </a>
              <a href="#" class="social-icon" title="Pinterest" target="_blank">
                <i class="icon-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
