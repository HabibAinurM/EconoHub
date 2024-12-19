import React from 'react';
import Register from '../components/RegisterForm';
import backgroundImage from '../assets/background1.png'; // Impor gambar background

const Registerpage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Menggunakan gambar yang diimpor
    >
        <Register />
      </div>
  );
};

export default Registerpage;
