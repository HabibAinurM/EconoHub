import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [userData, setUserData] = useState({ email: '' });
  const navigate = useNavigate();

  // Simulasi data dummy di localStorage
  useEffect(() => {
    const email = localStorage.getItem('email');

    if (email) {
      setUserData({ email });
    } else {
      // Simpan data dummy ke localStorage jika belum ada
      localStorage.setItem('email', 'dummyuser@example.com');
      setUserData({ email: 'dummyuser@example.com' });
    }
  }, []);

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('access_token');
    navigate('/');
  };

  return (
    <header className="fixed top-0 w-full flex justify-between items-center py-4 px-24 bg-gray-100 shadow-md z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="src/assets/Logo.png" alt="EconoHub Logo" className="h-10 md:h-12" />
        <span className="text-lg font-bold font-russo-one">
          <span style={{ color: 'rgb(0, 96, 158)' }}>Econo</span>
          <span style={{ color: 'rgb(54, 165, 221)' }}>Hub</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="flex space-x-10 mr-200 font-roboto">
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

      {/* Logout and User Greeting */}
      <div className="flex items-center space-x-4">
        <span className="text-white font-semibold" style={{ color: 'rgb(0, 96, 158)' }}>
          Haii {userData.email || 'Guest'}
        </span>
        <button
          onClick={handleLogout}
          className="text-white px-6 py-3 rounded-full font-semibold flex items-center hover:bg-blue-700 transition"
          style={{ backgroundColor: 'rgb(0, 96, 158)' }}
        >
          Logout
          <span className="ml-2">→</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
