import React from "react";
import { BannerGroup } from "../Components/BannerGroup";
import { Carousel } from "../Components/Carousel";
import { ProductCard } from "../Components/ProductCard";
import { ProductNav } from "../Components/ProductNav";

export const HomeScreen = () => {
  return (
    <>
      <Carousel />
      <div className="mb-3 mb-lg-5"></div>
      <BannerGroup />
      <ProductNav />
      <div className="mb-5 mb-lg-5"></div>
      <ProductCard />
    </>
  );
};
