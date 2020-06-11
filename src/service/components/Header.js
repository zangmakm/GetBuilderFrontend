import React, { Component } from "react";
import cleaning from "../cleaning.jpg";
import "../style/header.scss";

function Header() {
  return (
    <header className="serviceHeader">
      <img src={cleaning}></img>
      <div className="text-block">
        <h1>Find A Cleaner The Easy Way</h1>
        <h4>Great value, no fuss, noobligation</h4>
        <p>ONLY TAKES A FEW MINUTES</p>
      </div>
    </header>
  );
}

export default Header;
