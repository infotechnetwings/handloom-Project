import React from "react";
import { BannerGroup } from "../Components/BannerGroup";
import { Carousel } from "../Components/Carousel";
import { ProductCard } from "../Components/ProductCard";
import { ProductNav } from "../Components/ProductNav";
import FloatingWhatsApp from "react-floating-whatsapp";

export const HomeScreen = () => {
  return (
    <>
      <Carousel />
      <div className="mb-3 mb-lg-5"></div>
      <BannerGroup />
      {/* <ProductNav /> */}
      <div className="mb-5 mb-lg-5"></div>
      <ProductCard />
      <FloatingWhatsApp
        phoneNumber="8285474429"
        accountName="Pilkhuwa Handloom"
        avatar="./assets/img/logo.png"
        allowClickAway
        notification
        notificationSound
        styles={{ zIndex: "5000" }}
        statusMessage="Don't hesitate ! Send your query"
      />
    </>
  );
};
