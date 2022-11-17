import React from "react";
import "../styles/Footer.css";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";

function Footer({ stateBackgroundMode }){

    const textFooter = stateBackgroundMode ? "textaLight":"textDark";

    return(
        <footer className={`Footer ${textFooter}`}>
            <div className="socialNetworks">
                <a href="https://www.facebook.com/angie.moyaurbina"><img src={Facebook}></img></a>
                <a href="https://www.instagram.com/a.mour98/"><img src={Instagram}></img></a>
                <a href="https://www.linkedin.com/in/angie-melissa-moya-urbina-638175232/"><img src={Linkedin}></img></a>
            </div>
            <span> &copy; 2022 Angie Moya Urbina</span>
        </footer>
    )
}

export default Footer;


