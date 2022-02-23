import React from "react";
import "./Footer.scss";
import logo from "../../images/logo-light.svg";

const FooterCTA = () => {
  return (
    <div className="footer__cta">
      <h2>Simplify how your team works today.</h2>
      <button className="footer__cta_button">Get Started</button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <FooterCTA />
      <div className="footer__bottom">
        <form className="footer__subscribe">
          <input
            type="text"
            className="footer__subscribe_field"
            placeholder="Updates in your inbox…"
          />
          <button className="footer__subscribe_button">Go</button>
        </form>
        <div className="footer__links_container">
          <ul className="footer__links">
            <li className="footer__link">
              <a href="/#">Home</a>
            </li>
            <li className="footer__link">
              <a href="/#">Pricing</a>
            </li>
            <li className="footer__link">
              <a href="/#">Products</a>
            </li>
            <li className="footer__link">
              <a href="/#">About Us</a>
            </li>
          </ul>
          <ul className="footer__links">
            <li className="footer__link">
              <a href="/#">Careers</a>
            </li>
            <li className="footer__link">
              <a href="/#">Community</a>
            </li>
            <li className="footer__link">
              <a href="/#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <ul className="footer__socials">
          <li className="footer__social">
            <a href="/#">
              <img
                src={require("../../images/icon-facebook.svg").default}
                alt="Facebook"
              />
            </a>
          </li>
          <li className="footer__social">
            <a href="/#">
              <img
                src={require("../../images/icon-youtube.svg").default}
                alt="YouTube"
              />
            </a>
          </li>
          <li className="footer__social">
            <a href="/#">
              <img
                src={require("../../images/icon-twitter.svg").default}
                alt="Twitter"
              />
            </a>
          </li>
          <li className="footer__social">
            <a href="/#">
              <img
                src={require("../../images/icon-pinterest.svg").default}
                alt="Pinterest"
              />
            </a>
          </li>
          <li className="footer__social">
            <a href="/#">
              <img
                src={require("../../images/icon-instagram.svg").default}
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
        <img src={logo} alt="Manage" className="footer__logo" />
        <p className="footer__copyright">Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
