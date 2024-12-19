import React from 'react';

const TeksInfo = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-32 pt-8 md:pt-12 pb-16 md:pb-24">
      {/* Ilustrasi */}
      <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
        <img src="src/assets/Econo2.png" alt="Info Illustration" className="w-3/4 md:w-full" />
      </div>

      {/* Teks penjelasan */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-4 font-black-han-sans" style={{ color: 'rgb(0, 96, 158)' }}>Apa itu EconoHub?</h2>
        <p className="text-gray-700 text-sm md:text-base lg:text-lg mb-4">
          EconoHub adalah platform yang menyediakan akses mudah ke lowongan pekerjaan dan pelatihan untuk membantu Anda menemukan peluang kerja.
        </p>
        <p className="text-gray-700 text-sm md:text-base lg:text-lg">
          EconoHub berfungsi sebagai platform komunikasi, informasi, edukasi, dan fasilitasi bagi pencari kerja dan pelaku UMKM, untuk menciptakan akses peluang kerja dan mendukung tenaga kerja berkualitas yang bersaing di tingkat global.
        </p>
      </div>
    </section>
  );
};

export default TeksInfo;