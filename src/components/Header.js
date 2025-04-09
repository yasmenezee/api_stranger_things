import React from "react";

function Header() {
  return React.createElement(
    "header",
    {
      style: {
        backgroundColor: "#ff4757",
        padding: "20px 0",
        textAlign: "center",
        color: "#fff",
        fontSize: "1.8rem",
        fontWeight: "bold",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
      },
    },
    "Stranger Things"
  );
}

export default Header;
