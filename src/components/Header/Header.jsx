import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100px",
        background: "#354147",
        borderRadius: "100px",
        text: "white",
      }}>
      <img
        src="https://logo-download.com/wp-content/data/images/svg/Google-logo.svg"
        alt=""
        width={"100px"}
      />
      <Navbar />
      <strong style={{ color: "white", margin: "10px" }}>Account</strong>
    </div>
  );
};

export default Header;
