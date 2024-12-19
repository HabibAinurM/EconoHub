import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LatihanCard = ({ id, gambar, nama, jenis, biaya }) => {
  return (
    <div className="w-full sm:w-60 bg-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col items-center border border-gray-300">
      <img
        src={gambar || "/default-image-path.png"} // Jika gambar null, fallback ke default
        alt="Training"
        className="w-full h-48 object-cover"
      />
      <div className="p-4 w-full text-center">
        <h4 className="text-sm font-semibold text-gray-600">{nama}</h4>
        <p className="text-base font-bold text-gray-800">{jenis}</p>
        <p className="text-gray-800">{biaya}</p>
        <Link to={`/Latihanlanjut/${id}`}>
          <button
            className="mt-4 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            style={{ backgroundColor: 'rgb(0, 96, 158)' }}
          >
            Ikuti Pelatihan
          </button>
        </Link>
      </div>
    </div>
  );
};

const Pelatihan = () => {
  // Data dummy untuk pelatihan
  const dummyPelatihan = [
    {
      id: 1,
      gambar: 'src/assets/latih3.png',
      nama: 'Pelatihan Web Developer',
      jenis: 'Teknologi Informasi',
      biaya: 'Gratis',
    },
    {
      id: 2,
      gambar: 'src/assets/latih3.png',
      nama: 'Pelatihan Pengelasan',
      jenis: 'Teknik',
      biaya: 'Berbayar',
    },
    {
      id: 3,
      gambar: 'src/assets/latih2.png',
      nama: 'Pelatihan Desain Grafis Pemula',
      jenis: 'Desain Grafis',
      biaya: 'Gratis',
    },
    {
      id: 4,
      gambar: 'src/assets/latih1.png',
      nama: 'Pelatihan Teknisi Elektronika',
      jenis: 'Teknik',
      biaya: 'Berbayar',
    },
    {
      id: 5,
      gambar: 'src/assets/latih2.png',
      nama: 'Pelatihan Marketing Digital',
      jenis: 'Marketing',
      biaya: 'Gratis',
    },
  ];

  const [pelatihan, setPelatihan] = useState(dummyPelatihan);

  // Data dummy sudah diset di awal, jadi useEffect tidak diperlukan

  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="text-left mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700" style={{ color: 'rgb(0, 96, 158)' }}>
          Temukan Pelatihan
        </h2>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Filter Sidebar */}
        <aside className="w-full md:w-1/4 pr-0 md:pr-8 mb-8 md:mb-0">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Filter</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700">Kejuruan</h4>
            <div className="mt-2 space-y-2">
              <label className="block">
                <input type="checkbox" className="mr-2" /> Elektronika
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" /> Pengelasan
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" /> Desain Grafis Pemula
              </label>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Biaya</h4>
            <div className="mt-2 space-y-2">
              <label className="block">
                <input type="checkbox" className="mr-2" /> Gratis
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" /> Berbayar
              </label>
            </div>
          </div>
        </aside>

        {/* Training Cards Grid */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pelatihan.map((training, index) => (
            <LatihanCard
              key={index}
              id={training.id}
              gambar={training.gambar ? `/${training.gambar}` : "/default-image-path.png"}
              nama={training.nama}
              jenis={training.jenis}
              biaya={training.biaya}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pelatihan;
