import React from "react";

const TestimonialsCard = ({ avatar, name, text }) => {
  return (
    <div className="testimonials__card">
      <img
        src={require(`../../images/avatar-${avatar}`)}
        alt="avatar"
        className="testimonials__card_avatar"
      />
      <div className="testimonials__card_name">{name}</div>
      <div className="testimonials__card_text">{text}</div>
    </div>
  );
};

export default TestimonialsCard;
