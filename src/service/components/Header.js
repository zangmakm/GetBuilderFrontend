import React from "react";
import builder from "../../assets/images/builder.jpg";
import "../style/header.scss";

function Header() {
  return (
    <header className="serviceHeader">
      <img src={builder}></img>
      <div className="text-block">
        <h1>Find A Builder The Easy Way</h1>
        <h4>Great value, no fuss, noobligation</h4>
        <p>ONLY TAKES A FEW MINUTES</p>
      </div>
    </header>
  );
}

export default Header;
