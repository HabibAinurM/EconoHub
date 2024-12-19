import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Kirimcv() {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    nama: '',
    domisili: '',
    nik: '', // Jika digunakan, pastikan ada input untuk 'nik'
    pendidikanTerakhir: '',
    suratLamaran: null,
    cv: null,
    ijazah: null,
    usia: '',
    user_id: null,
    pekerjaan_id: null
  });

  const [isLoading, setIsLoading] = useState(false); // Menambahkan state untuk loading
  const [errorMessage, setErrorMessage] = useState(''); // State untuk error message
  const [successMessage, setSuccessMessage] = useState(''); // State untuk sukses message
  const navigate = useNavigate();

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Fungsi untuk menangani pengiriman form (Tanpa koneksi backend)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi usia
    if (isNaN(formData.usia)) {
      setErrorMessage('Usia harus berupa angka.');
      return;
    }

    // Simulasi pengiriman data dengan data dummy
    setIsLoading(true);

    // Simulasi proses pengiriman
    setTimeout(() => {
      if (formData.nama && formData.domisili && formData.usia && formData.pendidikanTerakhir) {
        setSuccessMessage('Lamaran berhasil dikirim!');
        setErrorMessage('');
        // Simulasi redirect setelah pengiriman berhasil
        setTimeout(() => {
          navigate('/selamatloker');
        }, 2000);
      } else {
        setErrorMessage('Tolong lengkapi semua field dengan benar!');
        setSuccessMessage('');
      }
      setIsLoading(false); // Set loading false setelah simulasi selesai
    }, 2000); // Simulasi pengiriman selama 2 detik
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-gray-100 rounded-lg">
        <h2 className="text-center text-2xl font-bold text-blue-800 mb-6" style={{ color: 'rgb(0, 96, 158)' }}>
          Form Loker
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Nama */}
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

          {/* Surat Lamaran */}
          <div>
            <label className="block text-gray-700">Surat Lamaran</label>
            <input
              type="file"
              name="suratLamaran"
              accept="application/pdf, image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Domisili */}
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

          {/* CV */}
          <div>
            <label className="block text-gray-700">CV</label>
            <input
              type="file"
              name="cv"
              accept="application/pdf, image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Usia */}
          <div>
            <label className="block text-gray-700">Usia</label>
            <input
              type="text"
              name="usia"
              value={formData.usia}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Ijazah */}
          <div>
            <label className="block text-gray-700">Ijazah</label>
            <input
              type="file"
              name="ijazah"
              accept="application/pdf, image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Pendidikan Terakhir */}
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

        {/* Error and Success Messages */}
        {errorMessage && <div className="text-red-500 text-center mt-4">{errorMessage}</div>}
        {successMessage && <div className="text-green-500 text-center mt-4">{successMessage}</div>}

        <div className="w-full">
          <button
            type="submit"
            className="block w-full py-2 text-center text-white rounded bg-blue-600 hover:bg-blue-700 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Mengirim...' : 'Kirim'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Kirimcv;
