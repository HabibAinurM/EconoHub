import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Menggunakan useNavigate untuk React Router v6

function FormPelatihan() {
  const [formData, setFormData] = useState({
    nama: '',
    domisili: '',
    nik: '',
    pendidikanTerakhir: '',
    ktp: null,
    pasFoto: null,
    ijazah: null,
  });

  const [isLoading, setIsLoading] = useState(false); // State untuk loading
  const navigate = useNavigate(); // Inisialisasi useNavigate untuk navigasi

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission - simulate success
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating the submission with a dummy response
    setTimeout(() => {
      console.log('Form Data Submitted:', formData);
      
      // Tampilkan alert setelah berhasil
      alert('Anda telah berhasil mendaftar untuk pelatihan!');

      // Navigasi ke halaman selamat pelatihan setelah berhasil submit
      navigate('/selamatlatih');

      setIsLoading(false); // Stop loading setelah selesai
    }, 2000); // Simulate a 2-second delay for form submission
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-gray-100 rounded-lg">
        <h2 className="text-center text-2xl font-bold text-blue-800 mb-6">Form Pelatihan</h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700">Nama</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">KTP</label>
            <input
              type="file"
              name="ktp"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Domisili</label>
            <input
              type="text"
              name="domisili"
              value={formData.domisili}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Pas Foto</label>
            <input
              type="file"
              name="pasFoto"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">NIK</label>
            <input
              type="text"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Ijazah</label>
            <input
              type="file"
              name="ijazah"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Pendidikan Terakhir</label>
            <input
              type="text"
              name="pendidikanTerakhir"
              value={formData.pendidikanTerakhir}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="block w-full py-2 text-center text-white rounded bg-blue-600 hover:bg-blue-700 transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? 'Mengirim...' : 'Kirim'}
        </button>
      </form>
    </div>
  );
}

export default FormPelatihan;
