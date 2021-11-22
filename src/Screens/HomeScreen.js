import React from "react";
import { BannerGroup } from "../Components/BannerGroup";
import { Carousel } from "../Components/Carousel";
import { ProductCard } from "../Components/ProductCard";
import { ProductNav } from "../Components/ProductNav";
import FloatingWhatsApp from "react-floating-whatsapp";
import { Tabicon } from "../Components/Tabicon";
import { Container, Row, Col } from "react-grid-system";
export const HomeScreen = () => {
  return (
    <>
      <Carousel />
      <div className="mb-3 mb-lg-5"></div>

      {/* <ProductNav /> */}
      <Container>
        <Row>
          <Tabicon image="assets/img/icons/sofa.png" title="Home Furnishing" />
          <Tabicon
            image="assets/img/icons/dining-room.png"
            title="Kitchen & Dining"
          />
          <Tabicon
            image="assets/img/icons/storage.png"
            title="Tools & Utility"
          />
          <Tabicon image="assets/img/icons/bath.png" title="Bath & Cleaning" />
          <Tabicon
            image="assets/img/icons/changing-table.png"
            title="Kids Items"
          />
        </Row>
      </Container>
      <div className="mb-5 mb-lg-5"></div>
      <BannerGroup />
      <div className="mb-5 mb-lg-5"></div>
      <ProductCard />
      <FloatingWhatsApp
        phoneNumber="8285474429"
        accountName="Pilkhuwa Handloom"
        avatar="./assets/img/logo.png"
        allowClickAway
        notification
        styles={{ zIndex: "5000" }}
        statusMessage="Don't hesitate ! Send your query"
      />
    </>
  );
};
