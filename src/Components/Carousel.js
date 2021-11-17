import React from "react";
export const Carousel = () => {
  return (
    <div className="intro-slider-container">
      <div
        className="owl-carousel owl-simple owl-light owl-nav-inside"
        data-toggle="owl"
        data-owl-options='{"nav": false}'
      >
        <img className="intro-slide" src="./assets/img/slider/banner1.png" />

        <img className="intro-slide" src="./assets/img/slider/banner2.png" />

        <img className="intro-slide" src="./assets/img/slider/banner3.png" />
        {/* <div className="container intro-content">
            <h3 className="intro-subtitle">Living Room</h3>

            <h1 className="intro-title">
              Make Your Living Room <br />
              Work For You.
              <br />
              <span className="text-primary">
                <sup className="text-white font-weight-light">from</sup>
                <sup>$</sup>9,99
              </span>
            </h1>

            <Link to="/" className="btn btn-primary">
              <span>Shop Now</span>
              <i className="icon-long-arrow-right"></i>
            </Link>
          </div> */}
      </div>

      {/* <span className="slider-loader text-white"></span> */}
    </div>
  );
};
