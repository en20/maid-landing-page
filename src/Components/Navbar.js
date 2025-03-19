import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import BannerBackground from "../Assets/card.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenuAndScrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white p-4 h-[100px] flex items-center">
      <div className="flex justify-between items-center w-full mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={BannerBackground} alt="Logo" className="h-24 w-auto" />
        </div>

        {/* Links e botão para desktop */}
        <div className="hidden md:flex space-x-10 items-center">
          <a href="/" className="text-black text-xl hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="text-black text-xl hover:text-gray-400">
            About
          </a>
          <a
            href="#services"
            className="text-black text-xl hover:text-gray-400"
          >
            Services
          </a>
          <a href="#contact" className="text-black text-xl hover:text-gray-400">
            Contact
          </a>

          {/* Botão */}
          <a href="#form">
            <button className="font-bold py-4 px-10 bg-white border-4 border-pink-500 rounded-full text-pink-500 text-lg cursor-pointer transition-all duration-200 flex items-center justify-center hover:bg-pink-500 hover:text-black">
              GET A QUOTE NOW
              <FiArrowRight />
            </button>
          </a>
        </div>

        {/* Botão do menu para mobile */}
        <button className="text-black md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "Close" : <LuMenu />}
        </button>
      </div>

      {/* Drawer para mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white w-full h-full p-8 space-y-6 text-center">
            <a
              href="#home"
              className="text-black text-2xl hover:text-gray-400 block"
              onClick={() => closeMobileMenuAndScrollTo("home")}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-black text-2xl hover:text-gray-400 block"
              onClick={() => closeMobileMenuAndScrollTo("about")}
            >
              About
            </a>
            <a
              href="#services"
              className="text-black text-2xl hover:text-gray-400 block"
              onClick={() => closeMobileMenuAndScrollTo("services")}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-black text-2xl hover:text-gray-400 block"
              onClick={() => closeMobileMenuAndScrollTo("contact")}
            >
              Contact
            </a>

            {/* Botão dentro do drawer */}
            <a
              href="#form"
              onClick={() => closeMobileMenuAndScrollTo("form")}
              className="mt-8 text-center flex justify-center"
            >
              <button className="font-bold py-4 px-10 bg-white border-4 border-pink-500 rounded-full text-pink-500 text-lg cursor-pointer transition-all duration-200 flex items-center justify-center hover:bg-pink-500 hover:text-black">
                GET A QUOTE NOW
                <FiArrowRight />
              </button>
            </a>


            <button
              className="absolute top-4 right-4 text-black text-3xl"
              onClick={toggleMobileMenu}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
