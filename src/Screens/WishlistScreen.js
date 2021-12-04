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
    <main className="main">
      <div className="page-header text-center">
        <div className="container">
          <h1 className="page-title">
            Wishlist<span>Pilakhuwa Handloom</span>
          </h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Wishlist
            </li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="container">
          <table className="table table-wishlist table-mobile">
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
                    <td className="product-col">
                      <div className="product">
                        <figure className="product-media">
                          <a href="#">
                            <img src={item.image} alt="Product image" />
                          </a>
                        </figure>

                        <h3 className="product-title">
                          <Link to={`productdetail/${item.id}`}>
                            {item.title}
                          </Link>
                        </h3>
                      </div>
                    </td>
                    <td className="price-col">{item.price}</td>
                    <td className="stock-col">
                      <span className="in-stock">In stock</span>
                    </td>
                    <td className="action-col">
                      <button
                        className="btn btn-block btn-outline-primary-2"
                        onClick={() => dispatch(addToCart(item))}
                      >
                        <i className="icon-cart-plus"></i>Add to Cart
                      </button>
                    </td>
                    <td className="remove-col">
                      <button
                        className="btn-remove"
                        onClick={() => dispatch(removeWishlist(item))}
                      >
                        <i className="icon-close"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="wishlist-share">
            <div className="social-icons social-icons-sm mb-2">
              <label className="social-label">Share on:</label>
              <a
                href="#"
                className="social-icon"
                title="Facebook"
                target="_blank"
              >
                <i className="icon-facebook-f"></i>
              </a>
              <a
                href="#"
                className="social-icon"
                title="Twitter"
                target="_blank"
              >
                <i className="icon-twitter"></i>
              </a>
              <a
                href="#"
                className="social-icon"
                title="Instagram"
                target="_blank"
              >
                <i className="icon-instagram"></i>
              </a>
              <a
                href="#"
                className="social-icon"
                title="Youtube"
                target="_blank"
              >
                <i className="icon-youtube"></i>
              </a>
              <a
                href="#"
                className="social-icon"
                title="Pinterest"
                target="_blank"
              >
                <i className="icon-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
