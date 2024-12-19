import React from 'react';
import { Link } from 'react-router-dom';

const Temukan = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-32 py-6 md:py-12">
      {/* Teks utama */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-blue-700 leading-tight" style={{ color: 'rgb(0, 96, 158)' }}>
          Temukan Potensi dalam diri dengan EconoTest !!
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-4">
          Dengan EconoTest, temukan potensi dan rekomendasi pelatihan yang cocok dengan mudah dan efektif.
        </p>
        <Link
          to="/econotest"
          className="text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold flex items-center justify-center md:justify-start hover:bg-blue-700 transition max-w-xs md:max-w-sm"
          style={{ backgroundColor: 'rgb(0, 96, 158)' }}
        >
          EconoTest Sekarang
          <span className="ml-2">→</span>
        </Link>
      </div>

      {/* Ilustrasi */}
      <div className="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
        <div className="border-blue-500 p-4 rounded-lg max-w-xs md:max-w-md">
          <img src="src/assets/temukan.png" alt="Hero Illustration" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Temukan;
