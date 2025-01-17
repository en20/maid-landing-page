import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 h-[100px] flex items-center">
      <div className="flex justify-between items-center w-full mx-auto px-4">
        {/* Logo */}
        <div className="text-black text-5xl font-bold">LOGO</div>

        {/* Links para desktop */}
        <div className="hidden md:flex space-x-10">
          <a href="/teste" className="text-black text-xl hover:text-gray-400">Home</a>
          <a href="/teste" className="text-black text-xl hover:text-gray-400">About</a>
          <a href="/teste" className="text-black text-xl hover:text-gray-400">Services</a>
          <a href="/teste" className="text-black text-xl hover:text-gray-400">Contact</a>
        </div>

        {/* Botão do menu para mobile */}
        <button
          className="text-black md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Drawer para mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white w-full h-full p-8 space-y-6 text-center">
            <a href="/teste" className="text-black text-2xl hover:text-gray-400 block">Home</a>
            <a href="/teste" className="text-black text-2xl hover:text-gray-400 block">About</a>
            <a href="/teste" className="text-black text-2xl hover:text-gray-400 block">Services</a>
            <a href="/teste" className="text-black text-2xl hover:text-gray-400 block">Contact</a>
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
