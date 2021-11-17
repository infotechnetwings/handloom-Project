import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer footer-2">
      <div className="icon-boxes-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-rocket" style={{ color: "red" }}></i>
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">MINIMAL DELIVERY CHARGES</h3>

                  <p>orders $50 or more</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-info-circle" style={{ color: "red" }}></i>
                </span>

                <div className="icon-box-content">
                  <h3 className="icon-box-title">UNLOCK OFFER POINTS</h3>

                  <p>When you sign up</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-heart" style={{ color: "red" }}></i>
                </span>

                <div className="icon-box-content">
                  <h3 className="icon-box-title">PREMIUM DESIGNED PRODUCTS</h3>

                  <p>24/7 amazing services</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-life-ring" style={{ color: "red" }}></i>
                </span>

                <div className="icon-box-content">
                  <h3 className="icon-box-title">WE SUPPORT</h3>

                  <p>24/7 amazing services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer-newsletter bg-image"
        // style="background-image: url(assets/images/backgrounds/bg-2.jpg)"
      >
        <div className="container">
          <div className="heading text-center">
            <h3 className="title">Get The Latest Deals</h3>

            <p className="title-desc">
              and receive <span>$20 coupon</span> for first shopping
            </p>
          </div>

          <div className="row">
            <div
              className="
                  col-sm-10
                  offset-sm-1
                  col-md-8
                  offset-md-2
                  col-lg-6
                  offset-lg-3
                "
            >
              <form action="#">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your Email Address"
                    aria-label="Email Adress"
                    aria-describedby="newsletter-btn"
                    required
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      id="newsletter-btn"
                    >
                      <span>Subscribe</span>
                      <i className="icon-long-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="widget widget-about">
                <img
                  src="assets/img/logo.png"
                  className="footer-logo"
                  alt="Footer Logo"
                  width="105"
                  height="25"
                />
                <p>
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                  Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                  luctus, metus.
                </p>

                <div className="widget-about-info">
                  <div className="row">
                    <div className="col-sm-6 col-md-4">
                      <span className="widget-about-title">
                        Got Question? Call us 24/7
                      </span>
                      <Link to="tel:9560988343">+91-9560988343</Link>
                    </div>

                    <div className="col-sm-6 col-md-8">
                      <span className="widget-about-title">Payment Method</span>
                      <figure className="footer-payments">
                        <img
                          src="assets/images/payments.png"
                          alt="Payment methods"
                          width="272"
                          height="20"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">Information</h4>

                <ul className="widget-list">
                  <li>
                    <Link to="/">About Pilkhuwa Handloom</Link>
                  </li>
                  <li>
                    <Link to="/">How to shop on Pilkhuwa Handloom</Link>
                  </li>
                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/">Log in</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>

                <ul className="widget-list">
                  <li>
                    <Link to="/">Payment Methods</Link>
                  </li>
                  <li>
                    <Link to="/">Money-back guarantee!</Link>
                  </li>
                  <li>
                    <Link to="/">Returns</Link>
                  </li>
                  <li>
                    <Link to="/">Shipping</Link>
                  </li>
                  <li>
                    <Link to="/">Terms and conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>

                <ul className="widget-list">
                  <li>
                    <Link to="/">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/">View Cart</Link>
                  </li>
                  <li>
                    <Link to="/">My Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/">Track My Order</Link>
                  </li>
                  <li>
                    <Link to="/">Help</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            Copyright © 2021 Pilkhuwa Handloom Store. All Rights Reserved.
          </p>

          <ul className="footer-menu">
            <li>
              <Link to="/">Terms Of Use</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>

          <div className="social-icons social-icons-color">
            <span className="social-label">Social Media</span>
            <Link
              to="/"
              className="social-icon social-facebook"
              title="Facebook"
              target="_blank"
            >
              <i className="icon-facebook-f"></i>
            </Link>
            <Link
              to="/"
              className="social-icon social-twitter"
              title="Twitter"
              target="_blank"
            >
              <i className="icon-twitter"></i>
            </Link>
            <Link
              to="/"
              className="social-icon social-instagram"
              title="Instagram"
              target="_blank"
            >
              <i className="icon-instagram"></i>
            </Link>
            <Link
              to="/"
              className="social-icon social-youtube"
              title="Youtube"
              target="_blank"
            >
              <i className="icon-youtube"></i>
            </Link>
            <Link
              to="/"
              className="social-icon social-pinterest"
              title="Pinterest"
              target="_blank"
            >
              <i className="icon-pinterest"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
