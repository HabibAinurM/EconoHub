import React, { useState } from "react";

const questions = [
  { id: 1, text: "Saya suka bekerja dengan alat dan mesin.", type: "Realistic" },
  { id: 2, text: "Saya menikmati memecahkan masalah ilmiah.", type: "Investigative" },
  { id: 3, text: "Saya senang menciptakan seni atau musik.", type: "Artistic" },
  { id: 4, text: "Saya suka membantu orang lain.", type: "Social" },
  { id: 5, text: "Saya merasa nyaman memimpin proyek atau tim.", type: "Enterprising" },
  { id: 6, text: "Saya menikmati bekerja dengan data atau angka.", type: "Conventional" },
];

const RiasecTest = () => {
  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (questionId, value) => {
    setResponses({ ...responses, [questionId]: parseInt(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize scores for each RIASEC type
    const scores = {
      Realistic: 0,
      Investigative: 0,
      Artistic: 0,
      Social: 0,
      Enterprising: 0,
      Conventional: 0,
    };

    // Calculate scores based on responses
    questions.forEach((q) => {
      if (responses[q.id]) {
        scores[q.type] += responses[q.id];
      }
    });

    // Find the highest score and corresponding type
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    setResult({
      type: sortedScores[0][0],
      score: sortedScores[0][1],
    });
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Tes RIASEC</h1>

      {!result ? (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          {questions.map((q) => (
            <div key={q.id} className="flex flex-col">
              <label className="text-gray-700 mb-2">{q.text}</label>
              <select
                className="p-2 border rounded"
                onChange={(e) => handleChange(q.id, e.target.value)}
                required
              >
                <option value="" disabled selected>
                  Pilih jawaban
                </option>
                <option value="1">1 - Sangat Tidak Setuju</option>
                <option value="2">2 - Tidak Setuju</option>
                <option value="3">3 - Netral</option>
                <option value="4">4 - Setuju</option>
                <option value="5">5 - Sangat Setuju</option>
              </select>
            </div>
          ))}

          <button
            type="submit"
            className="block w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Kirim Jawaban
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Hasil Tes Anda</h2>
          <p className="text-gray-700">Tipe Kepribadian Anda: <strong>{result.type}</strong></p>
          <p className="text-gray-700">Skor: <strong>{result.score}</strong></p>

          <button
            onClick={() => {
              setResponses({});
              setResult(null);
            }}
            className="mt-6 py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Coba Lagi
          </button>
        </div>
      )}
    </div>
  );
};

export default RiasecTest;
