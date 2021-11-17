import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart } from "../redux/actions/productsActions";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  const [cart, setCart] = useState();
  const product = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();
  var total = 0;
  return (
    <>
      <header className="header header-2 header-intro-clearance">
        <div className="header-middle sticky-header">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>

              <Link to="/" className="logo">
                <img
                  src="assets/img/logo.png"
                  alt="Molla Logo"
                  width="105"
                  height="25"
                />
              </Link>
            </div>

            <div className="header-center">
              <div
                className="
            header-search
            header-search-extended
            header-search-visible
            header-search-no-radius
            d-none d-lg-block
          "
              >
                <Link to="/" className="search-toggle" role="button">
                  <i className="icon-search"></i>
                </Link>
                <form action="/" method="get">
                  <div className="header-search-wrapper search-wrapper-wide">
                    <label className="sr-only">Search</label>
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="Search product ..."
                      required
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="icon-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="header-right">
              <div className="account">
                <Link to="/register" title="My account">
                  <div className="icon">
                    <i className="icon-user"></i>
                  </div>
                  <p>Account</p>
                </Link>
              </div>

              <div className="dropdown cart-dropdown">
                <Link
                  to="/"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                >
                  <div className="icon">
                    <i className="icon-shopping-cart"></i>
                    <span className="cart-count">{product.length}</span>
                  </div>
                  <p>Cart</p>
                </Link>

                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown-cart-products">
                    {product.map((item) => {
                      total += item.price;
                      return (
                        <div className="product" key={item.id}>
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <Link to="product.html">{item.title}</Link>
                            </h4>

                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span>x ₹{" "}
                              {item.price}
                            </span>
                          </div>

                          <figure className="product-image-container">
                            <Link to="product.html" className="product-image">
                              <img src={item.image} alt="product" />
                            </Link>
                          </figure>
                          <Link
                            onClick={() => dispatch(removeCart(item))}
                            className="btn-remove"
                            title="Remove Product"
                          >
                            <i className="icon-close"></i>
                          </Link>
                        </div>
                      );
                    })}
                  </div>

                  <div className="dropdown-cart-total">
                    <span>Total</span>

                    <span className="cart-total-price">
                      ₹ {total.toFixed(2)}
                    </span>
                  </div>

                  <div className="dropdown-cart-action">
                    <Link to="/cart" className="btn btn-primary">
                      View Cart
                    </Link>
                    <Link to="/checkout" className="btn btn-outline-primary-2">
                      <span>Checkout</span>
                      <i className="icon-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <nav className="main-nav">
              <ul className="menu">
                <li className="megamenu-container">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
                <li>
                  <Link to="/">Home & Furnishing</Link>
                </li>
                <li>
                  <Link to="/">Kitchen & Dining</Link>
                </li>
                <li>
                  <Link to="/">Tools & Utility</Link>
                </li>
                <li>
                  <Link to="/">Bathing & Cleaning</Link>
                </li>
                <li>
                  <Link to="/">Kids Item</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <MobileHeader />
    </>
  );
};
