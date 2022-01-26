import React from "react";

const Features = () => {
  return (
    <div className="features">
      <div className="features__heading">What’s different about Manage?</div>
      <div className="features__text">
        Manage provides all the functionality your team needs, without the
        complexity. Our software is tailor-made for modern digital product
        teams.
      </div>
      <ul className="features__list">
        <li className="features__list_item">
          01 Track company-wide progress See how your day-to-day tasks fit into
          the wider vision. Go from tracking progress at the milestone level all
          the way done to the smallest of details. Never lose sight of the
          bigger picture again.
        </li>
        <li className="features__list_item">
          02 Advanced built-in reports Set internal delivery estimates and track
          progress toward company goals. Our customisable dashboard helps you
          build out the reports you need to keep key stakeholders informed.
        </li>
        <li className="features__list_item">
          03 Everything you need in one place Stop jumping from one service to
          another to communicate, store files, track tasks and share documents.
          Manage offers an all-in-one team productivity solution.
        </li>
      </ul>
    </div>
  );
};

export default Features;
