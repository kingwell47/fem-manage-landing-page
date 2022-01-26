import React from "react";
import "./Navbar.scss";
import manageLogo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={manageLogo} alt="Manage" className="navbar__logo" />
      <ul className="navbar__links">
        <li className="navbar__link">Pricing</li>
        <li className="navbar__link">Product</li>
        <li className="navbar__link">About Us</li>
        <li className="navbar__link">Careers</li>
        <li className="navbar__link">Community</li>
      </ul>
      <button className="navbar__cta_button">Get Started</button>
    </nav>
  );
};

export default Navbar;
