import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__cta">
        Simplify how your team works today.
        <button className="footer__cta_button">Get Started</button>
      </div>
      <div className="footer__bottom">
        <img src="" alt="Manage" className="footer__logo" />
        <ul className="footer__socials">
          <li className="footer__social">FB</li>
          <li className="footer__social">YT</li>
          <li className="footer__social">TW</li>
          <li className="footer__social">PN</li>
          <li className="footer__social">IG</li>
        </ul>
        <ul className="footer__links">
          <li className="footer__link">Home</li>
          <li className="footer__link">Pricing</li>
          <li className="footer__link">Products</li>
          <li className="footer__link">About Us</li>
        </ul>
        <ul className="footer__links">
          <li className="footer__link">Careers</li>
          <li className="footer__link">Community</li>
          <li className="footer__link">Privacy Policy</li>
        </ul>
        <form className="footer__subscribe">
          <input
            type="text"
            className="footer__subscribe_field"
            placeholder="Updates in your inbox…"
          />
          <button className="footer__subscribe_button">Go</button>
        </form>
        <div className="footer__copyright">
          Copyright 2020. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
