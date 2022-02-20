import React from "react";
import "./Hero.scss";
import heroImage from "../../images/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="hero_section">
      <img src={heroImage} alt="hero" className="hero_section__image" />
      <h1 className="hero_section__heading">
        Bring everyone together to build better products.
      </h1>
      <div className="hero_section__text">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </div>
      <button className="hero_section__cta">Get Started</button>
    </div>
  );
};

export default Hero;
