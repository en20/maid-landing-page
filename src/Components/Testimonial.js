import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">Look at what our clients are saying:</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          "I am extremely satisfied with the services provided by MKVIP. They
          were punctual, professional, and did an impeccable job cleaning my
          home. The team is attentive and thorough, and the space looked much
          cleaner and more organized than I expected. I will definitely hire
          them again and highly recommend them to anyone looking for top-notch
          cleaning services.
        </p>
        <div className="testimonials-stars-container  flex">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
