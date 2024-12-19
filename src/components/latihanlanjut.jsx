import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const LatihanLanjut = () => {
  const { id } = useParams();

  // Data Dummy Pelatihan
  const pelatihanData = [
    {
      id: 1,
      gambar: "/assets/latih1.png", // Path gambar dummy
      nama: "Pelatihan Web Development",
      tentang: "Pelatihan untuk mempelajari dasar-dasar Web Development.",
      persyaratan: "Laptop; Pengetahuan dasar komputer",
      penyelenggara: "EconoHub",
    },
    {
      id: 2,
      gambar: "/assets/latih2.png", // Path gambar dummy
      nama: "Pelatihan Data Science",
      tentang: "Pelatihan untuk mempelajari dasar-dasar Data Science dan Analitik Data.",
      persyaratan: "Laptop; Pengetahuan dasar statistik; Minat dalam data",
      penyelenggara: "Data Science Hub",
    },
    {
      id: 3,
      gambar: "/assets/latih3.png", // Path gambar dummy
      nama: "Pelatihan Digital Marketing",
      tentang: "Pelatihan mengenai strategi pemasaran digital menggunakan berbagai platform.",
      persyaratan: "Laptop; Pengetahuan dasar pemasaran",
      penyelenggara: "Marketing Academy",
    },
  ];

  // Menemukan data pelatihan berdasarkan ID
  const trainingDetail = pelatihanData.find((training) => training.id === parseInt(id));

  const splitAndTrim = (text) => {
    if (!text) return [];
    return text
      .split(/[;,]/) // Split by semicolon or comma
      .map(item => item.trim()) // Trim spaces around each item
      .filter(item => item.length > 0); // Filter out any empty items
  };

  if (!trainingDetail) return (
    <div className="flex justify-center items-center mt-10">
      <div className="spinner-border animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12"></div>
    </div>
  );

  return (
    <section className="py-8 px-6 bg-gray-50 mt-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Gambar */}
          <div className="col-span-1 bg-gray-400 flex items-center justify-center">
            <img
              src={trainingDetail.gambar}
              alt={trainingDetail.nama}
              className="h-64 object-cover"
            />
          </div>

          {/* Konten */}
          <div className="col-span-2 p-6">
            <h1 className="text-2xl font-bold text-blue-700" style={{ color: 'rgb(0, 96, 158)' }}>{trainingDetail.nama}</h1>

            <p className="text-gray-800 mt-4 mb-4">{trainingDetail.tentang}</p>

            <div className="bg-gray-100 p-4 rounded-lg mb-6 border border-gray-200">
              <h3 className="font-bold text-blue-700 mb-2" style={{ color: 'rgb(0, 96, 158)' }}>Persyaratan</h3>
              <ul className="list-disc list-inside text-gray-600">
                {splitAndTrim(trainingDetail.persyaratan).map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold">Penyelenggara: </p>
              <p className="text-gray-700">{trainingDetail.penyelenggara}</p>
            </div>

            <button
              className="mt-6 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition"
              style={{ backgroundColor: 'rgb(0, 96, 158)' }}
            >
              <Link to={`/pelatihanklik/${id}`}>Ikuti Pelatihan</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatihanLanjut;
