import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__heading">What they’ve said</div>
      <div className="testimonials__card">
        <img src="" alt="avatar" className="testimonials__card_avatar" />
        <div className="testimonials__card_name">Anisha Li</div>
        <div className="testimonials__card_text">
          “Manage has supercharged our team’s workflow. The ability to maintain
          visibility on larger milestones at all times keeps everyone
          motivated.”
        </div>
      </div>
      <div className="testimonials__card">
        <img src="" alt="avatar" className="testimonials__card_avatar" />
        <div className="testimonials__card_name">Ali Bravo</div>
        <div className="testimonials__card_text">
          “We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-channel confusion and everyone is much
          more focused.”
        </div>
      </div>
      <div className="testimonials__card">
        <img src="" alt="avatar" className="testimonials__card_avatar" />
        <div className="testimonials__card_name">Richard Watts</div>
        <div className="testimonials__card_text">
          “Manage allows us to provide structure and process. It keeps us
          organized and focused. I can’t stop recommending them to everyone I
          talk to!”
        </div>
      </div>
      <div className="testimonials__card">
        <img src="" alt="avatar" className="testimonials__card_avatar" />
        <div className="testimonials__card_name">Shanai Gough</div>
        <div className="testimonials__card_text">
          “Their software allows us to track, manage and collaborate on our
          projects from anywhere. It keeps the whole team in-sync without being
          intrusive.”
        </div>
      </div>
      <button className="testimonials__cta">Get Started</button>
    </div>
  );
};

export default Testimonials;
