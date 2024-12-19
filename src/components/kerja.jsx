import React, { useState, useEffect } from 'react'; // Import useState dan useEffect
import { Link } from 'react-router-dom'; // Import Link untuk navigasi
import kerja1 from '../assets/latih1.png';  // Pastikan path ini benar
import kerja2 from '../assets/latih1.png';  // Pastikan path ini benar
import kerja3 from '../assets/latih2.png';  // Pastikan path ini benar
import kerja4 from '../assets/latih3.png';  // Pastikan path ini benar
import kerja5 from '../assets/latih3.png';  // Pastikan path ini benar
import kerja6 from '../assets/latih2.png';  // Pastikan path ini benar

// Komponen JobCard
const JobCard = ({ image, company, position, location, id }) => {
  const handleClick = () => {
    console.log(`Detail job id: ${id}`);
  };

  return (
    <div className="w-full sm:w-60 bg-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col items-center border border-gray-300">
      <img src={image} alt="Job" className="w-full h-48 object-cover" />
      <div className="p-4 w-full text-center">
        <h4 className="text-sm font-semibold text-gray-600">{company}</h4>
        <p className="text-base font-bold text-gray-800">{position}</p>
        <p className="text-gray-600">{location}</p>
        <Link 
          to={{
            pathname: "/login",
            state: { id, image, company, position, location }
          }}
        >
          <button
            onClick={handleClick}
            className="mt-4 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            style={{ backgroundColor: 'rgb(0, 96, 158)' }}
          >
            Lamar Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
};

// Komponen JobSection
const JobSection = () => {
  const [job, setJob] = useState([]); // State untuk menyimpan data lowongan pekerjaan
  const [loading, setLoading] = useState(false);

  // Data dummy lowongan pekerjaan
  useEffect(() => {
    const dummyJobs = [
      { id: 1, image: kerja1, company: "Company A", position: "Software Engineer", location: "Jakarta" },
      { id: 2, image: kerja2, company: "Company B", position: "Product Manager", location: "Bandung" },
      { id: 3, image: kerja3, company: "Company C", position: "UX/UI Designer", location: "Surabaya" },
      { id: 4, image: kerja4, company: "Company D", position: "Data Scientist", location: "Yogyakarta" },
      { id: 5, image: kerja5, company: "Company E", position: "Frontend Developer", location: "Medan" },
      { id: 6, image: kerja6, company: "Company F", position: "Backend Developer", location: "Makassar" }
    ];
    setJob(dummyJobs); // Set data dummy
  }, []);

  // Ambil hanya 3 job pertama untuk ditampilkan
  const displayedJobs = job.slice(0, 3);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="spinner-border animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12"></div>
      </div>
    );
  }

  return (
    <section className="py-8 px-4 md:px-8 lg:px-16">
      <div className="text-left mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700" style={{ color: 'rgb(0, 96, 158)' }}>
          Lowongan pekerjaan oleh EconoHub
        </h2>
        <p className="text-gray-600">EconoHub telah menyediakan dan memfasilitasi Lowongan pekerjaan untukmu</p>
      </div>

      <div className="flex items-center justify-between">
        {/* Left Arrow */}
        <button className="hidden md:inline text-2xl text-blue-700 hover:text-blue-900 p-2" style={{ color: 'rgb(0, 96, 158)' }}>
          &lt;
        </button>

        {/* Job Cards */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedJobs.length > 0 ? (
            displayedJobs.map((jobItem) => (
              <JobCard
                key={jobItem.id}
                image={jobItem.image}
                company={jobItem.company}
                position={jobItem.position}
                location={jobItem.location}
                id={jobItem.id}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">Tidak ada lowongan yang tersedia saat ini.</p>
          )}
        </div>

        {/* Right Arrow */}
        <button className="hidden md:inline text-2xl text-blue-700 hover:text-blue-900 p-2">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default JobSection;
