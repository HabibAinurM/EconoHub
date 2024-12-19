// services/api.js

export const fetchProvinces = async () => {
    try {
      // API URL untuk mengambil data provinsi dari Binderbyte
      const response = await fetch('https://api.binderbyte.com/provinsi', {
        headers: {
          'Authorization': 'b41cce13bffcab41fd86a2b36d18b467dfcaea3e0502b1156159e61f0f14ff3b',  // Ganti 'YOUR_API_KEY' dengan API key yang valid
        },
      });
  
      // Periksa apakah respons berhasil (status 200)
      if (!response.ok) {
        throw new Error('Gagal memuat data provinsi');
      }
  
      // Parse JSON dari response
      const data = await response.json();
      
      // Memastikan data provinsi ada di dalam response
      if (data && data.provinsi) {
        return data.provinsi;  // Mengembalikan daftar provinsi
      } else {
        throw new Error('Data provinsi tidak ditemukan');
      }
    } catch (error) {
      // Tangani error jika API gagal dipanggil atau data tidak valid
      console.error('Error API:', error);
      throw error;  // Meneruskan error untuk penanganan lebih lanjut
    }
  };
  