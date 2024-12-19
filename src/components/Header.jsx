import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 w-full flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-24 bg-gray-100 shadow-md z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="src/assets/Logo.png" alt="EconoHub Logo" className="h-10 md:h-12" />
        <span className="text-base md:text-lg font-bold font-russo-one">
          <span style={{ color: 'rgb(0, 96, 158)' }}>Econo</span>
          <span style={{ color: 'rgb(54, 165, 221)' }}>Hub</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-4 md:space-x-10 mt-4 md:mt-0 font-roboto"> 
        <Link to="/" className="text-blue-600 hover:text-blue-800" style={{ color: 'rgb(0, 96, 158)' }}>
          Beranda
        </Link>
        <Link to="/pelatihan" className="text-blue-600 hover:text-blue-800" style={{ color: 'rgb(0, 96, 158)' }}>
          Pelatihan
        </Link>
        <Link to="/loker" className="text-blue-600 hover:text-blue-800" style={{ color: 'rgb(0, 96, 158)' }}>
          Loker
        </Link>
        <Link to="/econotest" className="text-blue-600 hover:text-blue-800" style={{ color: 'rgb(0, 96, 158)' }}>
          EconoTest
        </Link>
      </nav>

      {/* Login Button */}
      <Link
        to="/login"
        className="text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold flex items-center mt-4 md:mt-0 hover:bg-blue-700 transition"
        style={{ backgroundColor: 'rgb(0, 96, 158)' }}
      >
        Login
        <span className="ml-2">→</span>
      </Link>
    </header>
  );
};

export default Header;
