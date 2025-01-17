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
    const whatsappMessage = `Olá, meu nome é ${name}. Meu email é ${email}. Gostaria de criar um site com vocês. Minha mensagem: ${message}`;
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
          Transforme sua casa com nossos serviços de limpeza profissional
          </h1>
          <p className="primary-text">
          Contamos com uma equipe experiente e de confiança, pronta para deixar seu lar impecável, com atenção a cada detalhe. Limpeza de qualidade, com a praticidade que você precisa
          </p>
          <button className="secondary-button" onClick={scrollToForm}>
            Request a Budget
            <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            ref={formRef} // A referência é associada aqui
          >
            <h2>GET A QUOTE NOW</h2>
            <p>
            Preencha os campos abaixo e nossos especialistas irão preparar e enviar um orçamento feito sob medida para as necessidades do seu lar ou empresa.
            </p>
            <div className="form-group">
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
