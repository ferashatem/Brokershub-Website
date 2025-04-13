import React from "react";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // install react-icons

import logo from "../assets/imgs/logo.png";
import world from "../assets/imgs/world.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-4 md:px-12 py-5 flex items-center justify-between bg-transparent  relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img className="h-12 md:h-20" src={logo} alt="BrokerHub Logo" />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6 text-sm md:text-base font-medium gap-10">
        <a
          className="transition text-white duration-300 hover:text-primary"
          href="google.com"
        >
          Why Choose us?
        </a>
        <a
          className="transition text-white duration-300 hover:text-primary"
          href="google.com"
        >
          Features
        </a>
        <a
          className="transition text-white duration-300 hover:text-primary"
          href="google.com"
        >
          How it works?
        </a>
        <a
          className="transition text-white duration-300 hover:text-primary"
          href="google.com"
        >
          Testimonials
        </a>
        <a
          className="transition text-white duration-300 hover:text-primary"
          href="google.com"
        >
          Download Our App
        </a>
      </div>

      {/* Desktop Language */}
      <div className="hidden md:flex items-center space-x-2 cursor-pointer">
        <p className="text-sm md:text-base text-white">Arabic</p>
        <img className="h-5" src={world} alt="Language" />
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-2xl"
      >
        {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
      </button>

      {/* Mobile Slide Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1D2746] text-white flex flex-col items-center py-6 space-y-4 md:hidden shadow-lg">
          <a href="#">Why Choose us?</a>
          <a href="#">Features</a>
          <a href="#">How it works?</a>
          <a href="#">Testimonials</a>
          <a href="#">Download Our App</a>

          <div className="flex items-center space-x-2 pt-4 border-t border-gray-500 w-[80%] justify-center">
            <p className="text-sm">Arabic</p>
            <img className="h-5" src={world} alt="Language" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
