import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

export const Tabicon = ({ image, title }) => {
  return (
    <Col
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Link
        to="/"
        style={{
          borderColor: "#FF4757",
          borderRadius: 10,
          backgroundColor: "#fff",
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 20,
          paddingBottom: 20,
          borderWidth: 3,
          borderStyle: "solid",
        }}
      >
        <img
          src={image}
          style={{
            width: 34,
            height: 34,
          }}
        />
      </Link>
      <div className="content">
        <p className="text-center">{title}</p>
      </div>
    </Col>
  );
};
