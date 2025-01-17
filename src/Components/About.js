import React from "react";
import BannerBackground from "../Assets/mocas.jpg";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <div className="home-container justify-between flex flex-col lg:mt-24">
      <div className="flex flex-col lg:flex-row lg:mx-32 gap-10">
        <div className="home-text-section">
          <h1 className="primary-heading">
          Meet Our Team
          </h1>
          <p className="primary-text">
          Dedicated professionals committed to delivering exceptional cleaning services for your home. Together, we bring you reliability, care, and quality.
          </p>
          <a href="#form">
          <button className="secondary-button" >
            GET A QUOTE
            <FiArrowRight />
          </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerBackground} alt="Imagem de limpeza profissional" />
        </div>
      </div>
    </div>
  );
};

export default About;
