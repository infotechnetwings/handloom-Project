import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart, removeWishlist } from "../redux/actions/productsActions";
import { MobileHeader } from "./MobileHeader";
import { toast } from "react-toastify";

export const Header2 = () => {
  const product = useSelector((state) => state.cart);
  const wishlist_product = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [searchProduct, setSearchProduct] = useState([
    {
      id: 1,
      title: "Check Textured Coat",
      category: "Coat",
      price: "175.4",
      tags: "coat check textured camel brown long sleeves buttoned cuffs",
    },
    {
      id: 2,
      title: "Contrast Check Coat",
      category: "Coat",
      price: "155.4",
      tags: "coat camel black grey marl lapel collar hip flap pockets",
    },
    {
      id: 3,
      title: "White Coat",
      category: "Coat",
      price: "125.4",
      tags: "coat camel white short sleeves double-breasted button",
    },
    {
      id: 4,
      title: "Basic Hoodie",
      category: "Hoodies / SweatShirts",
      price: "55.4",
      tags: "hoodie solid plain purple long baggy hood",
    },
    {
      id: 5,
      title: "Basic Hoodie",
      category: "Hoodies / SweatShirts",
      price: "55.4",
      tags: "hoodie solid plain black long baggy hood",
    },
    {
      id: 6,
      title: "Basic short Hoodie",
      category: "Hoodies / SweatShirts",
      price: "55.4",
      tags: "hoodie solid plain gray grey short hood",
    },
  ]);
  var total = 0;
  var wishlist_total = 0;
  const notify = () => {
    toast.error("item removed from cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    const search = value;
    searchProduct.filter((product) => {
      if (
        product.tags.toLowerCase().includes(search) ||
        product.title.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      ) {
        console.log(searchProduct, "search array");
        return searchProduct;
      }
    });
  };
  return (
    <>
      <header className="header">
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

              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/product">Product</Link>
                  </li>
                  <li>
                    <Link to="/product">Offers</Link>
                  </li>
                  <li>
                    <Link to="/product">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/product">About Us</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-right">
              <div className="header-search">
                <a
                  href="#"
                  className="search-toggle"
                  role="button"
                  title="Search"
                >
                  <i className="icon-search"></i>
                </a>
                <form action="#" method="get">
                  <div className="header-search-wrapper">
                    <label htmlFor="q" className="sr-only">
                      Search
                    </label>
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="Search in..."
                      required
                    />
                  </div>
                </form>
              </div>

              <div className="dropdown cart-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                >
                  <i className="icon-heart-o"></i>
                  <span className="cart-count">{wishlist_product.length}</span>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown-cart-products">
                    {wishlist_product.map((item) => {
                      wishlist_total += item.price * item.qty;
                      return (
                        <div className="product">
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <a href="product.html">{item.title}</a>
                            </h4>

                            <span className="cart-product-info">
                              <span className="cart-product-qty">
                                {item.qty}
                              </span>
                              x {item.price}
                            </span>
                          </div>

                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <img src={item.image} alt="product" />
                            </a>
                          </figure>
                          <Link
                            onClick={() => dispatch(removeWishlist(item))}
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
                      ₹ {wishlist_total.toFixed(2)}
                    </span>
                  </div>

                  <div className="dropdown-cart-action">
                    <Link to="/wishlist" className="btn btn-outline-primary-2">
                      <span>View Wishlist</span>
                      <i className="icon-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="dropdown cart-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                >
                  <i className="icon-shopping-cart"></i>
                  <span className="cart-count">{product.length}</span>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown-cart-products">
                    {product.map((item) => {
                      total += item.price * item.qty;
                      return (
                        <div className="product" key={item.id}>
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <a href="product.html">{item.title}</a>
                            </h4>

                            <span className="cart-product-info">
                              <span className="cart-product-qty">
                                {" "}
                                {item.qty}
                              </span>
                              x ₹ {item.price}
                            </span>
                          </div>

                          <figure className="product-image-container">
                            <Link to="product.html" className="product-image">
                              <img src={item.image} alt="product" />
                            </Link>
                          </figure>
                          <Link
                            onClick={() => {
                              dispatch(removeCart(item));
                              notify();
                            }}
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
              <div
                className="d-none d-lg-block"
                style={{
                  // display: "none",
                  paddingBottom: 8,
                  paddingTop: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  backgroundColor: "#cc6666",
                  marginLeft: 15,
                }}
              >
                <Link to="/register" data-toggle="modal">
                  <i className="icon-user" style={{ color: "#fff" }}></i>
                  <span style={{ color: "#fff" }}>Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileHeader />
    </>
  );
};
