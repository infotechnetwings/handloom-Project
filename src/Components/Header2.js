import React from "react";

export const Header2 = () => {
  return (
    <header class="header">
      <div className="mb-3 mb-lg-3"></div>
      <div class="header-top">
        <div class="container">
          <div class="header-left"></div>

          <div class="header-right">
            <ul class="top-menu">
              <li>
                <a href="#">Links</a>
                <ul>
                  <li>
                    <a href="tel:#">
                      <i class="icon-phone"></i>Call: +0123 456 789
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html">
                      <i class="icon-heart-o"></i>My Wishlist <span>(3)</span>
                    </a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="#signin-modal" data-toggle="modal">
                      <i class="icon-user"></i>Login
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="header-middle sticky-header">
        <div class="container">
          <div class="header-left">
            <button class="mobile-menu-toggler">
              <span class="sr-only">Toggle mobile menu</span>
              <i class="icon-bars"></i>
            </button>

            <a href="index.html" class="logo">
              <img
                src="assets/img/logo.png"
                alt="Molla Logo"
                width="105"
                height="25"
              />
            </a>

            <nav class="main-nav">
              <ul class="menu sf-arrows">
                <li class="megamenu-container active">
                  <a href="index.html" class="sf-with-ul">
                    Home
                  </a>
                </li>

                <li>
                  <a href="product.html" class="sf-with-ul">
                    Product
                  </a>
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
                <i class="icon-shopping-cart"></i>
                <span class="cart-count">2</span>
              </a>

              <div class="dropdown-menu dropdown-menu-right">
                <div class="dropdown-cart-products">
                  <div class="product">
                    <div class="product-cart-details">
                      <h4 class="product-title">
                        <a href="product.html">
                          Beige knitted elastic runner shoes
                        </a>
                      </h4>

                      <span class="cart-product-info">
                        <span class="cart-product-qty">1</span>x $84.00
                      </span>
                    </div>

                    <figure class="product-image-container">
                      <a href="product.html" class="product-image">
                        <img
                          src="assets/images/products/cart/product-1.jpg"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" class="btn-remove" title="Remove Product">
                      <i class="icon-close"></i>
                    </a>
                  </div>

                  <div class="product">
                    <div class="product-cart-details">
                      <h4 class="product-title">
                        <a href="product.html">
                          Blue utility pinafore denim dress
                        </a>
                      </h4>

                      <span class="cart-product-info">
                        <span class="cart-product-qty">1</span>x $76.00
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

                  <span class="cart-total-price">$160.00</span>
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
          </div>
        </div>
      </div>
    </header>
  );
};
