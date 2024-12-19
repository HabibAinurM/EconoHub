import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-32 py-8 md:py-12">
      {/* Teks utama */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black-han-sans font-extrabold mb-4 text-blue-700 leading-tight" style={{ color: 'rgb(0, 96, 158)' }}>
          BANGUN MASA DEPAN <br />
          <span className="text-black font-black-han-sans">DENGAN </span> <br/>
          <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-blue-700 leading-tight" style={{ color: 'rgb(0, 96, 158)' }}>ECONO HUB</span>
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-4 font-black-han-sans">
          Mewujudkan Indonesia Emas 2045 memprioritaskan pendidikan dan pelatihan
          untuk meningkatkan kualitas SDM.
        </p>
        <Link
          to="/register"
          className="text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold flex items-center hover:bg-blue-700 transition max-w-xs md:max-w-sm"
          style={{ backgroundColor: 'rgb(0, 96, 158)' }}
        >
          Daftar Sekarang
          <span className="ml-2">→</span>
        </Link>
      </div>

      {/* Ilustrasi */}
      <div className="w-full md:w-1/2 flex justify-center items-center pt-4 md:pt-12 mt-4 md:mt-7">
        <div className="border-blue-500 p-4 rounded-lg max-w-xs md:max-w-md">
          <img
            src="src/assets/Econo 2.png"
            alt="temukan Illustration"
            className="w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
