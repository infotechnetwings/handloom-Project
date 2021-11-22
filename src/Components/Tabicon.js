import React from "react";
import { Link } from "react-router-dom";

export const Tabicon = ({ image, title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Link
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
      <div class="content">
        <p class="text-center">{title}</p>
      </div>
    </div>
  );
};
