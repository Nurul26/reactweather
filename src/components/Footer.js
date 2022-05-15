import React from "react";

import HeartIcon from "../img/heart.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p>
        Made with &nbsp;
        <img src={HeartIcon} alt="love icon" />
        &nbsp; by &nbsp;
        <a href="https://github.com/Nurul26" target="_blank" rel="noreferrer" >Nurul Shuqriah Jamil</a>
      </p>
    </footer>
  );
}

export default Footer;
