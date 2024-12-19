import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProvinsiList from "./Lokasi/ProvinsiList";
import KabupatenList from "./Lokasi/KabupatenList";  // Impor KabupatenList

const PekerjaanCard = ({ id, image, company, position, location }) => {
  return (
    <div className="w-full sm:w-60 bg-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col items-center border border-gray-300">
      <img src={image || "/default-image-path.png"} alt="Job" className="w-full h-48 object-cover" />
      <div className="p-4 w-full text-center">
        <h4 className="text-sm font-semibold text-gray-600">{company}</h4>
        <p className="text-base font-bold text-gray-800">{position}</p>
        <p className="text-gray-600">{location}</p>
        <Link to={`/lokerklik/${id}`}>
          <button className="mt-4 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" style={{ backgroundColor: 'rgb(0, 96, 158)' }}>
            Lamar Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
};

const Pekerjaansesi = () => {
  const [selectedProvinsi, setSelectedProvinsi] = useState(null);
  const [selectedKabupaten, setSelectedKabupaten] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Dummy job data
  const dummyJobs = [
    {
      id: 1,
      image: 'src/assets/latih3.png',
      company: 'Tech Corp',
      position: 'Web Developer',
      location: 'Jakarta, Indonesia',
    },
    {
      id: 2,
      image: 'src/assets/latih3.png',
      company: 'Fin Solutions',
      position: 'Accountant',
      location: 'Surabaya, Indonesia',
    },
    {
      id: 3,
      image: 'src/assets/latih2.png',
      company: 'Tech Innovators',
      position: 'Software Engineer',
      location: 'Bandung, Indonesia',
    },
    {
      id: 4,
      image: '/assets/latih2.png',
      company: 'Engineering Hub',
      position: 'Civil Engineer',
      location: 'Bali, Indonesia',
    },
    {
      id: 5,
      image: 'src/assets/latih1.png',
      company: 'EduTech',
      position: 'Data Scientist',
      location: 'Yogyakarta, Indonesia',
    },
  ];

  // Set dummy jobs as initial jobs
  useEffect(() => {
    setJobs(dummyJobs);
    setFilteredJobs(dummyJobs); // Initialize filteredJobs with all jobs
  }, []);

  // Filter jobs based on location
  useEffect(() => {
    let filtered = jobs;

    // Filter based on selectedProvinsi and selectedKabupaten
    if (selectedProvinsi) {
      filtered = filtered.filter(job => job.location.includes(selectedProvinsi));
    }
    if (selectedKabupaten) {
      filtered = filtered.filter(job => job.location.includes(selectedKabupaten));
    }

    setFilteredJobs(filtered);
  }, [selectedProvinsi, selectedKabupaten, jobs]);

  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="text-left mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700" style={{ color: 'rgb(0, 96, 158)' }}>
          Temukan Pekerjaan
        </h2>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Filter Sidebar */}
        <aside className="w-full md:w-1/4 pr-0 md:pr-8 mb-8 md:mb-0">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Filter</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700">Kualifikasi</h4>
            <div className="mt-2 space-y-2">
              <label className="block">
                <input type="checkbox" className="mr-2" /> Web Developer
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" /> Akuntansi
              </label>
              <label className="block">
                <input type="checkbox" className="mr-2" /> Teknik
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700">Lokasi</h4>
            <div className="mt-2 space-y-2">
              <label className="block">
                <ProvinsiList onProvinsiSelect={setSelectedProvinsi} />
              </label>
              {selectedProvinsi && (
                <KabupatenList provinsiId={selectedProvinsi} onKabupatenSelect={setSelectedKabupaten} />
              )}
            </div>
          </div>
        </aside>

        {/* Job Cards Grid */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <PekerjaanCard
              key={index}
              id={job.id}
              image={job.image ? `/${job.image}` : "/default-image-path.png"}
              company={job.company}
              position={job.position}
              location={job.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pekerjaansesi;
