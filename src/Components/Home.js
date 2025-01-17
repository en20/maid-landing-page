import React, { useState, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null); // Ref para o formulário

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Hi, my name is ${name}. My email is ${email}. I would like to inquire about cleaning services. My message: ${message}
`;
    const whatsappURL = `https://wa.me/+558591124238?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" }); // Rolagem suave até o formulário
  };

  return (
    <div className="home-container justify-between flex flex-col lg:mt-24 ">
      <div className="flex flex-col lg:flex-row lg:mx-32 gap-10">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Transform your home with our professional cleaning services.
          </h1>
          <p className="primary-text">
            We have an experienced and trustworthy team, ready to make your home
            spotless, with attention to every detail. Quality cleaning with the
            convenience you need.
          </p>
          <button className="secondary-button" onClick={scrollToForm}>
            GET A QUOTE
            <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <form
            id="form"
            className="contact-form"
            onSubmit={handleSubmit}
            ref={formRef} // A referência é associada aqui
          >
            <h2>GET A QUOTE NOW</h2>
            <p>
              Fill in the fields below, and our specialists will prepare and
              send a customized quote tailored to the needs of your home or
              business.
            </p>
            <div className="form-group"
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send to WhatsApp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
