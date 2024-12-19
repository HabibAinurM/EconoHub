import React from 'react';
import { Link } from 'react-router-dom'; 
import Footer from './Footer'; 
import LokerImage from '../assets/pesawat.png'; 
import Navbar from './dashboard';
function Hasiltes() {
  return (
    <>
      <Navbar /> 
      
      <main className="mt-36 flex flex-col items-center mb-20 px-4 w-full max-w-5xl ml-32"> 
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex text-center w-full">
          <img
            src={LokerImage} 
            alt="Hasil Tes"
            className="w-1/2 h-auto mr-6" 
          />
          <div className="w-2/3 text-left">
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: 'rgb(0, 96, 158)' }} 
            >
              Berikut adalah hasil dari Tes Holland Code (RIASEC)
            </h2>
            <p className="text-gray-700 mb-6">Hasil dari tes anda adalah RIS</p>
            <p className="text-gray-700 mb-6">
              Berikut pelatihan yang sesuai dengan minat anda:
            </p>
            <ul className="text-gray-700 mb-6 list-decimal pl-6 space-y-1">
              <li>Teknik Otomotif</li>
              <li>Welding</li>
              <li>Teknik Listrik</li>
              <li>Pengolahan Data dan Analisis</li>
              <li>Pengolahan Air dan Lingkungan</li>
              <li>Pengujian Kualitas Produk</li>
              <li>Instruktur atau Pelatih Pelatihan Kerja</li>
              <li>Layanan Pelanggan (Customer Service)</li>
              <li>Public Speaking dan Komunikasi Efektif</li>
              <li>Pelatihan Konseling dan Bimbingan Karir</li>
            </ul>
          </div>
        </div>

        <Link
          to="/pelatihan" // Ganti '/pelatihan' dengan path yang sesuai
          className="mt-6 px-32 py-3 text-white rounded-md flex items-center justify-center"
          style={{ backgroundColor: 'rgb(0, 96, 158)', textDecoration: 'none' }} 
        >
          Cari Skil
        </Link>
      </main>

      <Footer /> {/* Gunakan komponen footer yang sudah ada */}
    </>
  );
}

export default Hasiltes;
