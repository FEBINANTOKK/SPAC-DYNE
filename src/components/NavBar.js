import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="text-2xl font-bold text-blue-600">
          SPAC <span className="text-red-500">DYNA</span>
        </div>
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li>
            <a href="#home" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-500">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-blue-500">
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Message Us
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="bg-red-500 text-white px-5 py-2 rounded-full text-sm hover:bg-red-600"
        >
          Contact Now
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
