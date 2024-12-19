import React from 'react';
import Login from '../components/LoginForm';
import backgroundImage from '../assets/background.png'; // Impor gambar background

const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Menggunakan gambar yang diimpor
    >
        <Login />
      </div>
  );
};

export default LoginPage;
