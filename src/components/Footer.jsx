import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/Logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center text-center md:flex-row md:justify-between">
        
        {/* Logo Section */}
        <div className="mb-6 ml-20 md:mb-0">
          <img src={logo} alt="EconoHub Logo" className="h-20" /> 
        <span className="text-lg font-bold font-russo-one">
          <span style={{ color: 'rgb(0, 96, 158)' }}>Econo</span>
          <span style={{ color: 'rgb(54, 165, 221)' }}>Hub</span>
        </span>
        </div>

        {/* Menu Section */}
        <div className="flex-1 text-left md:ml-56"> 
          <h5 className=" font-semibold mb-2"style={{ color: 'rgb(0, 96, 158)' }}>Menu</h5>
          <ul className="space-y-1">
            <li><a href="/" className=" hover:underline"style={{ color: 'rgb(0, 96, 158)' }}>Beranda</a></li>
            <li><a href="/pelatihan" className="hover:underline"style={{ color: 'rgb(0, 96, 158)' }}>Pelatihan</a></li>
            <li><a href="loker" className=" hover:underline"style={{ color: 'rgb(0, 96, 158)' }}>Loker</a></li>
            <li><a href="econotest" className="hover:underline"style={{ color: 'rgb(0, 96, 158)' }}>EconoTest</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex-1 text-left md:pr-10">
          <h5 className=" font-semibold mb-2"style={{ color: 'rgb(0, 96, 158)' }}>Contact</h5>
          <ul className="space-y-1">
            <li className="flex items-center">
              <i className="bi bi-whatsapp mr-2 "style={{ color: 'rgb(0, 96, 158)' }}></i> <span>085871328301</span>
            </li>
            <li className="flex items-center">
              <i className="bi bi-instagram mr-2"style={{ color: 'rgb(0, 96, 158)' }}></i> <span>Econo_Hub</span>
            </li>
            <li className="flex items-center">
              <i className="bi bi-linkedin mr-2 "style={{ color: 'rgb(0, 96, 158)' }}></i> <span>EconoCarer</span>
            </li>
            <li className="flex items-center">
              <i className="bi bi-envelope mr-2 "style={{ color: 'rgb(0, 96, 158)' }}></i> <span>Econo@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center  mt-8"style={{ color: 'rgb(0, 96, 158)' }}>
        © 2024 EconoHub. Hak Cipta Dilindungi Undang-Undang.
      </div>
    </footer>
  );
};

export default Footer;
