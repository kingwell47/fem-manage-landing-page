import React from "react";
import "./Hero.scss";
import heroImage from "../../images/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="hero_section">
      <img src={heroImage} alt="hero" className="hero_section__image" />
      <div className="hero_section__heading">
        Bring everyone together to build better products.
      </div>
      <div className="hero_section__text">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </div>
      <button className="hero_section__cta">Get Started</button>
    </div>
  );
};

export default Hero;
