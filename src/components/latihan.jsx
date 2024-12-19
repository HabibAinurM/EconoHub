import React from 'react';
import { Link } from 'react-router-dom';
import pelatihan1 from '../assets/latih1.png';  // Pastikan path ini benar
import pelatihan2 from '../assets/latih1.png';  // Pastikan path ini benar
import pelatihan3 from '../assets/latih2.png';  // Pastikan path ini benar
import pelatihan4 from '../assets/latih3.png';  // Pastikan path ini benar
import pelatihan5 from '../assets/latih3.png';  // Pastikan path ini benar
import pelatihan6 from '../assets/latih2.png';  // Pastikan path ini benar

// Komponen TrainingCard
const TrainingCard = ({ gambar, nama, jenis, biaya, id }) => {
  return (
    <div className="w-full sm:w-60 bg-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col items-center border border-gray-300">
      <img src={gambar} alt="Training" className="w-full h-48 object-cover" />
      <div className="p-4 w-full text-center">
        <h4 className="text-sm font-semibold text-gray-600">{nama}</h4>
        <p className="text-base font-bold text-gray-800">{jenis}</p>
        <p className="text-gray-800">{biaya}</p>
        <Link 
          to={{
            pathname: "/login",
            state: { id, gambar, nama, jenis, biaya }
          }}
        >
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
  // Data Dummy Pelatihan
  const pelatihan = [
    {
      gambar: pelatihan1, // Menggunakan import gambar
      nama: "Pelatihan Web Development",
      jenis: "Teknologi",
      biaya: "Rp 1.500.000",
      id: 1,
    },
    {
      gambar: pelatihan2, // Menggunakan import gambar
      nama: "Pelatihan Data Science",
      jenis: "Teknologi",
      biaya: "Rp 2.000.000",
      id: 2,
    },
    {
      gambar: pelatihan3, // Menggunakan import gambar
      nama: "Pelatihan Digital Marketing",
      jenis: "Pemasaran",
      biaya: "Rp 1.000.000",
      id: 3,
    },
    {
      gambar: pelatihan4, // Menggunakan import gambar
      nama: "Pelatihan UI/UX Design",
      jenis: "Desain",
      biaya: "Rp 1.750.000",
      id: 4,
    },
    {
      gambar: pelatihan5, // Menggunakan import gambar
      nama: "Pelatihan Mobile App Development",
      jenis: "Teknologi",
      biaya: "Rp 2.500.000",
      id: 5,
    },
    {
      gambar: pelatihan6, // Menggunakan import gambar
      nama: "Pelatihan Cloud Computing",
      jenis: "Teknologi",
      biaya: "Rp 3.000.000",
      id: 6,
    },
  ];

  return (
    <section className="py-8 px-4 md:px-8 lg:px-16">
      <div className="text-left mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700" style={{ color: 'rgb(0, 96, 158)' }}>
          Pelatihan oleh EconoHub
        </h2>
        <p className="text-gray-600">EconoHub telah menyediakan dan memfasilitasi pelatihan untukmu</p>
      </div>

      <div className="flex items-center justify-between">
        <button className="hidden md:inline text-2xl text-blue-700 hover:text-blue-900 p-2" style={{ color: 'rgb(0, 96, 158)' }}>
          &lt;
        </button>

        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pelatihan.length > 0 ? (
            pelatihan.slice(0, 3).map((training, index) => (
              <TrainingCard
                key={index}
                gambar={training.gambar}
                nama={training.nama}
                jenis={training.jenis}
                biaya={training.biaya}
                id={training.id}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">Tidak ada pelatihan yang tersedia saat ini.</p>
          )}
        </div>

        <button className="hidden md:inline text-2xl text-blue-700 hover:text-blue-900 p-2">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Pelatihan;
