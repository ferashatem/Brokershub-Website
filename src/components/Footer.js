import React from 'react'
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import logo from "../assets/imgs/logo.png";

import tower from "../assets/imgs/tower.png";

function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white py-14 px-6"
      style={{ backgroundImage: `url(${tower})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1B263B]/90 z-0" />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 text-sm">
        {/* Column 1: Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <img
            src={logo} // Replace with actual logo path
            alt="Brokers Hub Logo"
            className="w-16 h-16"
          />
          <p>
            Brokers Hub gives you the freedom to broker your way no limits, no
            middlemen, just opportunities.
          </p>
          <div className="flex gap-3 mt-2">
            {[FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <Icon className="text-white text-base" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex justify-center flex-col items-center">
          <div className="flex flex-col gap-4 text-left space-y-2">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Why Choose us</a>
          </div>
        </div>

        {/* Column 3: How it works, Testimonials, Download app */}
        <div className="flex justify-center flex-col items-center">
          <div className="flex flex-col gap-4 text-left space-y-2">
            <a href="#">How It works</a>
            <a href="#">Testimonials</a>
            <a href="#">Download our app</a>
          </div>
        </div>

        {/* Column 4: Policies */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col text-left gap-4 space-y-2">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>

        {/* Column 5: Contact us */}
        <div className="flex flex-col  justify-center items-center">
          <div className="flex flex-col gap-4 text-left space-y-2">
            <span className="font-semibold text-base mb-1">Contact us</span>
            <p className="flex items-center gap-2">
              <FaEnvelope /> Brokerhub@email.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +22451824
            </p>
          </div>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="relative z-10 text-center text-xs text-gray-300 mt-10">
        © 2025 Brokers Hub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer