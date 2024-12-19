import React, { useState, useEffect } from "react";

const CardJumlahPengguna = () => {
  const [jumlahPengguna, setJumlahPengguna] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi pengambilan data dummy
    setTimeout(() => {
      // Data dummy jumlah pengguna
      const dummyData = [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
        // Tambahkan data dummy lainnya sesuai kebutuhan
      ];
      
      setJumlahPengguna(dummyData.length); // Hitung jumlah data dummy
      setLoading(false); // Set loading selesai
    }, 1000); // Simulasi delay 1 detik
  }, []);

  if (loading) {
    return <div className="text-center my-4">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card text-center bg-dark text-white">
        <div className="card-header bg-secondary">
          <h4>Jumlah Data Pengguna</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title text-light">{jumlahPengguna}</h1>
          <p className="card-text">Jumlah total data pengguna yang tersedia.</p>
        </div>
      </div>
    </div>
  );
};

export default CardJumlahPengguna;
