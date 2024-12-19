// src/pages/FormPelatihanPage.js
import React from 'react';
import FormPelatihan from '../components/formpelatihan';
import Footer from '../components/Footer';
import Navbar from '../components/dashboard';
import axios from 'axios';

function FormPelatihanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header at the top */}
      <Navbar />
      
      {/* Main content should expand to take available space */}
      <main className="flex-grow flex items-center justify-center mt-28 mb-28">
        <FormPelatihan />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default FormPelatihanPage;
