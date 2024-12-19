import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';

const LokerLanjut = () => {
  const { id } = useParams(); // Get the job id from the URL
  const [jobDetail, setJobDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dummy data for job details
  const dummyJobData = {
    position: 'Software Engineer',
    location: 'Jakarta, Indonesia',
    description: 'We are looking for a Software Engineer to join our development team. The ideal candidate should have experience with React, Node.js, and MongoDB.',
    requirements: 'Bachelor\'s degree in Computer Science; 3+ years of experience in software development; Proficiency in React and Node.js; Strong problem-solving skills;',
    company: 'Tech Corp',
    image: 'src/assets/latih1.png', // This can be replaced with an actual image path or kept as a placeholder
  };

  // Simulate fetching job details
  useEffect(() => {
    setTimeout(() => {
      setJobDetail(dummyJobData); // Simulate setting the fetched data
      setLoading(false); // Set loading to false after the data is "fetched"
    }, 1000); // Simulate a delay of 1 second
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show loading state until data is fetched
  if (!jobDetail) return <div>Data not found</div>; // Show error if no job data is found

  return (
    <>
      <Header />

      <main className="mt-36 flex flex-col items-center mb-20 px-4 w-full max-w-5xl ml-32">
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex text-center w-full">
          <img
            src={`/images/${jobDetail.image}`} // Display dummy image from local images folder
            alt={jobDetail.position || 'Job Image'}
            className="w-1/2 h-auto mr-6"
          />
          <div className="w-2/3 text-left">
            <h2 className="text-xl font-bold mb-4" style={{ color: 'rgb(0, 96, 158)' }}>
              {jobDetail.position || 'Posisi Tidak Diketahui'}
            </h2>
            <div className="flex items-center text-gray-700 mb-4">
              <i className="bi bi-geo-alt-fill mr-2" style={{ color: 'rgb(0, 96, 158)' }}></i>
              <span>{jobDetail.location || 'Lokasi Tidak Diketahui'}</span>
            </div>
            <div className="text-gray-800 font-semibold">Tentang Pekerjaan</div>
            <p className="text-gray-700 mb-6 text-sm">{jobDetail.description || 'Deskripsi Tidak Tersedia'}</p>

            <div className="text-gray-800 font-semibold">Persyaratan</div>
            <ul className="text-gray-700 mb-6 list-decimal pl-6 space-y-1 text-sm">
              {/* Splitting requirements by semicolon (assuming requirements are separated by semicolons) */}
              {jobDetail.requirements
                ? jobDetail.requirements.split(';').map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))
                : 'Persyaratan Tidak Tersedia'}
            </ul>

            <div className="text-gray-800 font-semibold">Penyelenggara</div>
            <p className="text-gray-700 text-sm mb-4">{jobDetail.company || 'Penyelenggara Tidak Diketahui'}</p>
          </div>
        </div>

        <Link
          to={`/lamar/${id}`} // Link to apply for the job
          className="mt-6 px-32 py-3 text-white rounded-md flex items-center justify-center"
          style={{ backgroundColor: 'rgb(0, 96, 158)', textDecoration: 'none' }}
        >
          Lamar Pekerjaan
        </Link>
      </main>
    </>
  );
};

export default LokerLanjut;
