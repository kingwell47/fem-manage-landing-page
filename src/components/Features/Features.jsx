import React from "react";
import "./Features.scss";

const FEATURES_LIST = [
  {
    number: "01",
    title: "Track company-wide progress",
    text: `See how your day-to-day tasks fit into
    the wider vision. Go from tracking progress at the milestone level all
    the way done to the smallest of details. Never lose sight of the
    bigger picture again.`,
  },
  {
    number: "02",
    title: "Advanced built-in reports",
    text: `Set internal delivery estimates and track
    progress toward company goals. Our customisable dashboard helps you
    build out the reports you need to keep key stakeholders informed.`,
  },
  {
    number: "03",
    title: "Everything you need in one place",
    text: `Stop jumping from one service to
    another to communicate, store files, track tasks and share documents.
    Manage offers an all-in-one team productivity solution.`,
  },
];

const Features = () => {
  const FeaturesCard = ({ number, title, text }) => (
    <div className="features__card">
      <h3 className="features__card_header">
        <div className="features__card_number">{number}</div>
        <div className="features__card_title">{title}</div>
      </h3>
      <p className="features__card_text">{text}</p>
    </div>
  );

  return (
    <div className="features">
      <h2 className="features__heading">What’s different about Manage?</h2>
      <p className="features__text">
        Manage provides all the functionality your team needs, without the
        complexity. Our software is tailor-made for modern digital product
        teams.
      </p>
      <ul className="features__list">
        {FEATURES_LIST.map((item, index) => (
          <li className="features__list_item" key={index}>
            <FeaturesCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
