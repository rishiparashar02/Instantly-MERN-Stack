import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 text-black py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-between items-center gap-6">
        {/* Brand Information */}
        <div className="text-center lg:text-left">
          <p className="text-lg font-semibold mb-2">© 2025 Instantly Quick Commerce</p>
          <p className="text-sm text-black-400">Created by Rishi Parashar | All Rights Reserved</p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 justify-center text-2xl">
          <a href="#" className="text-blue-700 hover:text-primary-400 transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-pink-600 hover:text-primary-400 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-900 hover:text-primary-400 transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
