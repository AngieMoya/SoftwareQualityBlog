import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import Moon from "../assets/night-mode.png";
import Sun from "../assets/sun.png";
import { Link } from "react-router-dom";

function Navbar({ setStateBackgroundMode }) {
  const [stateMode, setStateMode] = useState(false); // light is true

  const eventMode = () => {
    setStateMode((mode) => {
      return !mode;
    });
  };

  useEffect(() => {
    setStateBackgroundMode(stateMode);
  }, [stateMode]);

  const modeIcon = stateMode ? Sun : Moon;
  const textColor = stateMode ? "textLight" : "textDark";

  return (
    <nav>
      <div className={`name ${textColor}`}>
        <h1><Link className={textColor} to="/">Angie Moya U.</Link></h1>
      </div>
      <div className="rightNavbar">
        <ul>
          <li>
            <Link className={textColor} to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className={textColor} to="aboutme">
              Sobre mí
            </Link>
          </li>
        </ul>
        <div className="mode" onClick={eventMode}>
          <img src={modeIcon}></img>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
