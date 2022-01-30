import React from "react";

const MobileMenu = () => {
  return (
    <>
      <div className="overlay hide-for-desktop" />
      <div className="mobile_menu hide-for-desktop">
        <ul className="mobile_menu__links">
          <li className="mobile_menu__link">Pricing</li>
          <li className="mobile_menu__link">Product</li>
          <li className="mobile_menu__link">About Us</li>
          <li className="mobile_menu__link">Careers</li>
          <li className="mobile_menu__link">Community</li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
