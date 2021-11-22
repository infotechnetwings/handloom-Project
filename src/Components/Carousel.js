import React from "react";
import { Link } from "react-router-dom";
export const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="assets/img/slider/Rectangle 7.png"
            alt="First slide"
          />

          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "5%",
            }}
          >
            <Link
              style={{ color: "black", fontWeight: "inherit", fontSize: 14 }}
            >
              Click here to view collections{" "}
              <i class="icon-long-arrow-right" style={{ color: "red" }}></i>
            </Link>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="..." alt="Second slide" />
        </div>
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="assets/img/slider/Rectangle 7.png"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};
