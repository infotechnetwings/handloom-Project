import React from "react";
import { Link } from "react-router-dom";

export const BannerGroup = () => {
  return (
    <div className="banner-group">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-5">
            <div
              className="
                  banner banner-large banner-overlay banner-overlay-light
                "
            >
              <Link to="/">
                <img
                  src="assets/images/demos/demo-2/banners/banner-1.jpg"
                  alt="Banner"
                />
              </Link>

              <div className="banner-content banner-content-top">
                <h4 className="banner-subtitle">Clearence</h4>

                <h3 className="banner-title">Home & Furnishing</h3>

                <div className="banner-text">---</div>

                <Link to="/" className="btn btn-outline-gray banner-link">
                  Shop Now<i className="icon-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="banner banner-overlay">
              <Link to="/">
                <img
                  src="assets/images/demos/demo-2/banners/banner-2.jpg"
                  alt="Banner"
                />
              </Link>

              <div className="banner-content banner-content-bottom">
                <h4 className="banner-subtitle text-grey">On Sale</h4>

                <h3 className="banner-title text-white">
                  Bathing <br />& Cleaning
                </h3>

                <div className="banner-text text-white">--------</div>

                <Link to="/" className="btn btn-outline-white banner-link">
                  Discover Now<i className="icon-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay">
              <Link to="/">
                <img
                  src="assets/images/demos/demo-2/banners/banner-3.jpg"
                  alt="Banner"
                />
              </Link>

              <div className="banner-content banner-content-top">
                <h4 className="banner-subtitle text-grey">New Arrivals</h4>

                <h3 className="banner-title text-white">
                  Handloom <br />
                  Product
                </h3>

                <Link to="/" className="btn btn-outline-white banner-link">
                  Discover Now<i className="icon-long-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="banner banner-overlay banner-overlay-light">
              <Link to="/">
                <img
                  src="assets/images/demos/demo-2/banners/banner-4.jpg"
                  alt="Banner"
                />
              </Link>

              <div className="banner-content banner-content-top">
                <h4 className="banner-subtitle">On Sale</h4>

                <h3 className="banner-title">Tools & utility</h3>

                <div className="banner-text">------</div>

                <Link to="/" className="btn btn-outline-gray banner-link">
                  Shop Now<i className="icon-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
