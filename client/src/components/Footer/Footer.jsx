import React from "react";
import "./Footer.scss";
import logo from "../../images/logoBranca.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo branca" />
          </Link>
        </div>
        <div className="company">
          <h3>company</h3>
          <ul>
            <li>
              <a href="https://www.spotify.com/us/about-us/contact/">About</a>
            </li>
            <li>
              <a href="https://www.lifeatspotify.com">Jobs</a>
            </li>
            <li>
              <a href="https://newsroom.spotify.com/">For the Record</a>
            </li>
          </ul>
        </div>
        <div className="communities">
          <h3>Useful links</h3>
          <ul>
            <li>
              <a href="https://support.spotify.com/us">Support</a>
            </li>
            <li>
              <a href="https://open.spotify.com">Web Player</a>
            </li>
            <li>
              <a href="https://www.spotify.com/us/free/">Free Mobile App</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
