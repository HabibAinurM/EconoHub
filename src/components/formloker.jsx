import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Formloker() {
  const { id } = useParams(); // Get the job id from the URL

  // Data Dummy untuk menggantikan data dari API
  const jobDetail = {
    id: id, // Menggunakan id dari URL params
    position: 'Front-End Developer',
    company: 'PT Teknologi Maju',
    tentang: 'Perusahaan yang bergerak di bidang teknologi dan pengembangan aplikasi web.',
    persyaratanUmum: 'Menguasai HTML, CSS, JavaScript; Punya kemampuan komunikasi baik; Mampu bekerja dalam tim.',
    persyaratanKhusus: 'Pengalaman minimal 1 tahun di bidang Front-End; Menguasai React.js; Familiar dengan Git.',
  };

  // Helper function untuk memisahkan persyaratan
  const splitAndTrim = (text) => {
    if (!text) return [];
    return text
      .split(/[;,]/) // Split by semicolon or comma
      .map((item) => item.trim()) // Trim spaces
      .filter((item) => item.length > 0); // Filter empty items
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 mt-20">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg border border-gray-300">
        {/* Job Info Section */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800" style={{ color: 'rgb(0, 96, 158)' }}>
            {jobDetail.position || 'Posisi Tidak Diketahui'}
          </h2>
          <p className="text-gray-600">
            {jobDetail.company || 'Perusahaan Tidak Diketahui'}
          </p>
          <p className="text-gray-500 mt-2">
            {jobDetail.tentang || 'Deskripsi Tidak Tersedia'}
          </p>
        </div>

        {/* Requirements Section */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6 border border-gray-200">
          <h3 className="font-bold text-blue-800 mb-2" style={{ color: 'rgb(0, 96, 158)' }}>
            Persyaratan Umum
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            {splitAndTrim(jobDetail.persyaratanUmum).map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>

          <h3 className="font-bold text-blue-800 mt-4 mb-2" style={{ color: 'rgb(0, 96, 158)' }}>
            Persyaratan Khusus
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            {splitAndTrim(jobDetail.persyaratanKhusus).map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>

        <Link
          to={`/apply/${id}`} // Link to apply for the job
          className="block w-full py-2 mt-4 text-center text-white font-bold rounded"
          style={{
            backgroundColor: 'rgb(0, 96, 158)',
            color: 'rgb(255, 255, 255)',
            borderColor: 'rgb(0, 96, 158)',
            textDecoration: 'none',
          }}
        >
          Lamar Sekarang
        </Link>
      </div>
    </div>
  );
}

export default Formloker;
