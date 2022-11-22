import React from "react";
import "../styles/Header.css";
import QA from "../assets/qa.png";

function Header({ stateBackgroundMode }) {
  const textChange = stateBackgroundMode ? "headerTextDark" : "headerTextLight";

  return (
    <div className="Header">
      <img className="imageHeader" src={QA}></img>
      <div className="textContainer">
        <h1 className={textChange}>
          Conoce diversos estándares y modelos de calidad del software
          internacional.
        </h1>
        <h1 className="secundaryText">En un solo lugar.</h1>
      </div>
    </div>
  );
}

export default Header;
