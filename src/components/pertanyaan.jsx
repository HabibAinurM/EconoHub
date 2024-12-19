import React, { useState } from 'react';

// Data dummy pertanyaan berdasarkan tes RIASEC
const dummyQuestions = [
  {
    type: 'Realistic',
    question: "Apakah Anda lebih suka bekerja dengan alat atau mesin daripada bekerja dengan orang?",
  },
  {
    type: 'Investigative',
    question: "Apakah Anda tertarik untuk memecahkan masalah dan menemukan cara untuk meningkatkan proses atau produk?",
  },
  {
    type: 'Artistic',
    question: "Apakah Anda lebih suka bekerja dalam lingkungan yang kreatif, seperti seni atau desain?",
  },
  {
    type: 'Social',
    question: "Apakah Anda merasa senang saat membantu orang lain atau bekerja dalam kelompok untuk memecahkan masalah?",
  },
  {
    type: 'Enterprising',
    question: "Apakah Anda menikmati tantangan yang berhubungan dengan memimpin proyek atau bernegosiasi dengan orang lain?",
  },
  {
    type: 'Conventional',
    question: "Apakah Anda merasa nyaman mengikuti prosedur yang terstruktur dan bekerja dengan data atau informasi?",
  }
];

const Pertanyaansesi = () => {
  const [responses, setResponses] = useState({
    Realistic: '',
    Investigative: '',
    Artistic: '',
    Social: '',
    Enterprising: '',
    Conventional: ''
  });

  const handleResponse = (type, response) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [type]: response
    }));
  };

  return (
    <div className="my-6 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Tes RIASEC - Minat Pekerjaan</h2>
      {dummyQuestions.map((question, index) => (
        <Question
          key={index}
          questionText={question.question}
          type={question.type}
          onResponse={handleResponse}
        />
      ))}
    </div>
  );
};

const Question = ({ questionText, type, onResponse }) => {
  return (
    <div className="mb-4">
      <p className="mb-2 text-gray-700">{questionText}</p>
      <div className="flex space-x-2">
        <button
          style={{ color: 'rgb(0, 96, 158)', borderColor: 'rgb(0, 96, 158)' }}
          className="bg-white font-medium py-2 px-4 rounded-full border shadow-md hover:bg-blue-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          onClick={() => onResponse(type, 'Setuju')}
        >
          Setuju
        </button>
        <button
          style={{ color: 'rgb(0, 96, 158)', borderColor: 'rgb(0, 96, 158)' }}
          className="bg-white font-medium py-2 px-4 rounded-full border shadow-md hover:bg-blue-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          onClick={() => onResponse(type, 'Netral')}
        >
          Netral
        </button>
        <button
          style={{ color: 'rgb(0, 96, 158)', borderColor: 'rgb(0, 96, 158)' }}
          className="bg-white font-medium py-2 px-4 rounded-full border shadow-md hover:bg-blue-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          onClick={() => onResponse(type, 'Tidak Setuju')}
        >
          Tidak Setuju
        </button>
      </div>
    </div>
  );
};

export default Pertanyaansesi;
