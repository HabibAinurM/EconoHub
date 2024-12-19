// src/pages/FormPelatihanPage.js
import React from 'react';
import Footer from '../components/Footer';
import Selamat from '../components/selamatloker';
import Navbar from '../components/dashboard';

function Selamatloker() {
  return (
    <div className="min-full-screen flex flex-col bg-white">
      {/* Header at the top */}
      <Navbar />
      
      {/* Main content should expand to take available space */}
      <main className="flex-grow bg-white" >
      <Selamat />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default Selamatloker;
