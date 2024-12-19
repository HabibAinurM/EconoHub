import React from 'react';
import { Link } from 'react-router-dom';

const JobCardLanding = ({ image, company, position, location }) => {
  return (
    <div className="w-72 md:w-80 bg-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col items-center border border-gray-300">
      <img src={image} alt="Job" className="w-full h-40 md:h-48 object-cover" />
      <div className="p-4 md:p-6 w-full text-center">
        <h4 className="text-sm md:text-base font-semibold text-gray-600">{company}</h4>
        <p className="text-lg md:text-xl font-bold text-gray-800">{position}</p>
        <p className="text-gray-600">{location}</p>
        <Link to="/login">
          <button
            className="mt-4 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-blue-700 transition"
            style={{ backgroundColor: 'rgb(0, 96, 158)' }}
          >
            Lamar Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
};

const JobSection = () => {
  const jobs = [
    {
      image: require('../assets/latih1.png'), // Pastikan path gambar benar
      company: "PT Bibam Abadi",
      position: "Web Developer",
      location: "Madiun, Jawa Timur",
    },
    {
      image: require('../assets/latih2.png'), // Pastikan path gambar benar
      company: "PT Bibam Abadi",
      position: "Frontend Developer",
      location: "Surabaya, Jawa Timur",
    },
    {
      image: require('../assets/latih3.png'), // Pastikan path gambar benar
      company: "PT Anugerah Teknologi",
      position: "Backend Developer",
      location: "Jakarta, DKI Jakarta",
    },
    {
      image: require('../assets/latih4.png'), // Pastikan path gambar benar
      company: "PT Global Indo",
      position: "UI/UX Designer",
      location: "Bandung, Jawa Barat",
    },
    {
      image: require('../assets/latih5.png'), // Pastikan path gambar benar
      company: "PT Tekno Solusi",
      position: "Mobile App Developer",
      location: "Semarang, Jawa Tengah",
    },
    {
      image: require('../assets/latih6.png'), // Pastikan path gambar benar
      company: "PT Inovasi Digital",
      position: "Data Analyst",
      location: "Yogyakarta, DI Yogyakarta",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-8 lg:px-16">
      <div className="text-left mb-8">
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'rgb(0, 96, 158)' }}>
          Lowongan pekerjaan oleh EconoHub
        </h2>
        <p className="text-gray-600">EconoHub telah menyediakan dan memfasilitasi Lowongan pekerjaan untukmu</p>
      </div>

      <div className="flex items-center justify-between">
        {/* Left Arrow - tambahkan logika jika ingin scroll */}
        <button className="hidden md:inline text-2xl text-blue-700 hover:text-blue-900 p-2">
          &lt;
        </button>

        {/* Job Cards */}
        <div className="flex space-x-4 overflow-x-auto md:overflow-visible scrollbar-hide">
          {jobs.map((job, index) => (
            <JobCardLanding
              key={index}
              image={job.image}
              company={job.company}
              position={job.position}
              location={job.location}
            />
          ))}
        </div>

        {/* Right Arrow - tambahkan logika jika ingin scroll */}
        <button className="hidden md:inline text-2xl text-blue-700 hover:text-blue-900 p-2">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default JobSection;
