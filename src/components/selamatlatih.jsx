import React from 'react';

const Selamatlatih = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white  max-w-lg w-full text-center">
        <div className="flex justify-center mb-4">
          <img
            src="/src/assets/selamat.png"
            alt="Success Illustration"
            className="h-40"
          />
        </div>
        <h1 className="text-2xl font-bold text-blue-600 mb-2"style={{ color: 'rgb(0, 96, 158)' }}>
          Yeyyy 📢 Selamat! Anda Telah Berhasil Mengajukan Pelatihan
        </h1>
        <p className="text-gray-700">
          Terima kasih telah menggunakan EconoHub untuk mengembangkan karier Anda. Tunggu informasi
          selanjutnya melalui email Anda.
        </p>
      </div>
    </div>
  );
};

export default Selamatlatih;
