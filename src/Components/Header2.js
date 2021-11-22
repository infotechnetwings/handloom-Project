import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart } from "../redux/actions/productsActions";
import { MobileHeader } from "./MobileHeader";
import { toast } from "react-toastify";

export const Header2 = () => {
  const product = useSelector((state) => state.cart);
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
    <header class="header">
      <div class="header-middle sticky-header">
        <div class="container">
          <div class="header-left">
            <button class="mobile-menu-toggler">
              <span class="sr-only">Toggle mobile menu</span>
              <i class="icon-bars"></i>
            </button>

            <Link to="/" class="logo">
              <img
                src="assets/img/logo.png"
                alt="Molla Logo"
                width="105"
                height="25"
              />
            </Link>

            <nav class="main-nav">
              <ul class="menu sf-arrows">
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

          <div class="header-right">
            <div class="header-search">
              <a href="#" class="search-toggle" role="button" title="Search">
                <i class="icon-search"></i>
              </a>
              <form action="#" method="get">
                <div class="header-search-wrapper">
                  <label for="q" class="sr-only">
                    Search
                  </label>
                  <input
                    type="search"
                    class="form-control"
                    name="q"
                    id="q"
                    placeholder="Search in..."
                    required
                  />
                </div>
              </form>
            </div>

            <div class="dropdown cart-dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <i class="icon-heart-o"></i>
                <span class="cart-count">1</span>
              </a>

              <div class="dropdown-menu dropdown-menu-right">
                <div class="dropdown-cart-products">
                  <div class="product">
                    <div class="product-cart-details">
                      <h4 class="product-title">
                        <a href="product.html">
                          Blue utility pinafore denim dress
                        </a>
                      </h4>

                      <span class="cart-product-info">
                        <span class="cart-product-qty">1</span>x 76.00
                      </span>
                    </div>

                    <figure class="product-image-container">
                      <a href="product.html" class="product-image">
                        <img
                          src="assets/images/products/cart/product-2.jpg"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" class="btn-remove" title="Remove Product">
                      <i class="icon-close"></i>
                    </a>
                  </div>
                </div>

                <div class="dropdown-cart-total">
                  <span>Total</span>

                  <span class="cart-total-price">160.00</span>
                </div>

                <div class="dropdown-cart-action">
                  <a href="cart.html" class="btn btn-primary">
                    View Cart
                  </a>
                  <a href="checkout.html" class="btn btn-outline-primary-2">
                    <span>Checkout</span>
                    <i class="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="dropdown cart-dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <i class="icon-shopping-cart"></i>
                <span class="cart-count">{product.length}</span>
              </a>

              <div class="dropdown-menu dropdown-menu-right">
                <div class="dropdown-cart-products">
                  {product.map((item) => {
                    total += item.price * item.qty;
                    return (
                      <div class="product" key={item.id}>
                        <div class="product-cart-details">
                          <h4 class="product-title">
                            <a href="product.html">{item.title}</a>
                          </h4>

                          <span class="cart-product-info">
                            <span class="cart-product-qty"> {item.qty}</span>x ₹{" "}
                            {item.price}
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

                <div class="dropdown-cart-total">
                  <span className="cart-total-price">₹ {total.toFixed(2)}</span>
                </div>

                <div class="dropdown-cart-action">
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
              style={{
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 25,
                paddingRight: 25,
                backgroundColor: "#cc6666",
                marginLeft: 15,
              }}
            >
              <Link to="/register" data-toggle="modal">
                <i class="icon-user" style={{ color: "#fff" }}></i>
                <span style={{ color: "#fff" }}>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
