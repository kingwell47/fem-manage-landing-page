import React from "react";
import "./Testimonials.scss";
import TestimonialsCard from "./TestimonialsCard";

const TESTIMONIALS_DATA = [
  {
    avatar: "anisha.png",
    name: "Anisha Li",
    text: `“Manage has supercharged our team’s workflow. The ability to maintain
    visibility on larger milestones at all times keeps everyone
    motivated.”`,
  },
  {
    avatar: "ali.png",
    name: "Ali Bravo",
    text: `“We have been able to cancel so many other subscriptions since using
    Manage. There is no more cross-channel confusion and everyone is much
    more focused.”`,
  },
  {
    avatar: "richard.png",
    name: "Richard Watts",
    text: `“Manage allows us to provide structure and process. It keeps us organized 
    and focused. I can’t stop recommending them to everyone I talk to!”`,
  },
  {
    avatar: "shanai.png",
    name: "Shanai Gough",
    text: `“Their software allows us to track, manage and collaborate on our
    projects from anywhere. It keeps the whole team in-sync without being
    intrusive.”`,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__heading">What they’ve said</div>
      {TESTIMONIALS_DATA.map((item, index) => (
        <TestimonialsCard {...item} key={index} />
      ))}
      <button className="testimonials__cta">Get Started</button>
    </div>
  );
};

export default Testimonials;
