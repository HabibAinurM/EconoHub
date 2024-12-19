// src/pages/FormPelatihanPage.js
import React from 'react';
import Footer from '../components/Footer';
import Selamatlatih from '../components/selamatlatih';
import Navbar from '../components/dashboard';

function Selamatlatihan() {
  return (
    <div className="min-full-screen flex flex-col bg-white">
      {/* Header at the top */}
      <Navbar />
      
      {/* Main content should expand to take available space */}
      <main className="flex-grow bg-white" >
      <Selamatlatih />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default Selamatlatihan;
