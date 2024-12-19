// src/pages/FormPelatihanPage.js
import React from 'react';
import Footer from '../components/Footer';
import Kirimcv from '../components/lokerkirim';
import Navbar from '../components/dashboard';

function kirimloker() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header at the top */}
      <Navbar />
      
      {/* Main content should expand to take available space */}
      <main className="flex-grow flex items-center justify-center mt-28 mb-28">
        < Kirimcv/>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default kirimloker;
