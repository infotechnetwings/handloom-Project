import React from "react";
import { Link } from "react-router-dom";

export const BannerGroup = () => {
  return (
    <>
      <div className="container categories pt-6">
        <h2 className="title-lg text-center mb-4">New Arriable</h2>

        <div className="row">
          <div className="col-6 col-lg-4">
            <div className="banner banner-display banner-link-anim">
              <a href="#">
                <img
                  src="assets/images/banners/home/banner-1.jpg"
                  alt="Banner"
                />
              </a>

              <div className="banner-content banner-content-center">
                <h3 className="banner-title text-white">
                  <a href="#">Outdoor</a>
                </h3>
                <Link
                  to="/"
                  className="btn btn-outline-white"
                  style={{ textDecoration: "none", marginTop: 10 }}
                >
                  Shop Now<i className="icon-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-4 order-lg-last">
            <div className="banner banner-display banner-link-anim">
              <a href="#">
                <img
                  src="assets/images/banners/home/banner-4.jpg"
                  alt="Banner"
                />
              </a>

              <div className="banner-content banner-content-center">
                <h3 className="banner-title text-white">
                  <a href="#">Lighting</a>
                </h3>

                <Link
                  to="/"
                  className="btn btn-outline-white"
                  style={{ textDecoration: "none", marginTop: 10 }}
                >
                  Shop Now<i className="icon-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 banners-sm">
            <div className="row">
              <div className="banner banner-display banner-link-anim col-lg-12 col-6">
                <a href="#">
                  <img
                    src="assets/images/banners/home/banner-2.jpg"
                    alt="Banner"
                  />
                </a>

                <div className="banner-content banner-content-center">
                  <h3 className="banner-title text-white">
                    <a href="#">Furniture and Design</a>
                  </h3>

                  <Link
                    to="/"
                    className="btn btn-outline-white"
                    style={{ textDecoration: "none", marginTop: 10 }}
                  >
                    Shop Now<i className="icon-long-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="banner banner-display banner-link-anim col-lg-12 col-6">
                <a href="#">
                  <img
                    src="assets/images/banners/home/banner-3.jpg"
                    alt="Banner"
                  />
                </a>

                <div className="banner-content banner-content-center">
                  <h3 className="banner-title text-white">
                    <a href="#">Kitchen & Utensil</a>
                  </h3>

                  <Link
                    to="/"
                    className="btn btn-outline-white"
                    style={{ textDecoration: "none", marginTop: 10 }}
                  >
                    Shop Now<i className="icon-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
