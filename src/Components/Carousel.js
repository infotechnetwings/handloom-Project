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
      </div>
    </div>
  );
};
