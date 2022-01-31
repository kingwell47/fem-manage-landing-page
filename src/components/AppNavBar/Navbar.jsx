import React, { useState } from "react";
import "./Navbar.scss";
import manageLogo from "../../images/logo.svg";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle("open");
    document
      .querySelector("#mobile-menu")
      ?.setAttribute("aria-expanded", (!mobileMenuOpen).toString());
  };

  return (
    <nav className="navbar">
      <img src={manageLogo} alt="Manage" className="navbar__logo" />
      {mobileMenuOpen && (
        <>
          <div className="overlay hide-for-desktop" />
          <MobileMenu />
        </>
      )}
      <ul className="navbar__links hide-for-mobile">
        <li className="navbar__link">Pricing</li>
        <li className="navbar__link">Product</li>
        <li className="navbar__link">About Us</li>
        <li className="navbar__link">Careers</li>
        <li className="navbar__link">Community</li>
      </ul>
      <button className="navbar__cta_button hide-for-mobile">
        Get Started
      </button>
      <button
        type="button"
        className={
          mobileMenuOpen
            ? "navbar__toggle hide-for-desktop open"
            : "navbar__toggle hide-for-desktop"
        }
        title="mobile menu"
        id="mobile-menu"
        aria-label="open-menu"
        aria-expanded="false"
        onClick={handleOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
