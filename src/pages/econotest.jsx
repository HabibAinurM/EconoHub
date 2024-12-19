import React, { useState, useEffect } from "react";
import Navbar from "../components/dashboard";
import Footer from "../components/Footer";

const RiasecTest = () => {
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  });
  const [submitted, setSubmitted] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  // Dummy data for testing
  const dummyData = [
    {
      title: "Kategori R (Realistic)",
      questions: [
        { text: "Apakah Anda suka bekerja dengan alat atau mesin?", id: 1, category: "R" },
        { text: "Apakah Anda menikmati bekerja di luar ruangan?", id: 2, category: "R" },
        { text: "Apakah Anda tertarik pada pekerjaan yang berhubungan dengan fisik?", id: 3, category: "R" },
        { text: "Apakah Anda suka membangun atau membuat sesuatu?", id: 4, category: "R" },
        { text: "Apakah Anda menyukai pekerjaan manual?", id: 5, category: "R" },
      ]
    },
    {
      title: "Kategori I (Investigative)",
      questions: [
        { text: "Apakah Anda suka memecahkan masalah kompleks?", id: 6, category: "I" },
        { text: "Apakah Anda suka bekerja dengan data dan informasi?", id: 7, category: "I" },
        { text: "Apakah Anda lebih suka bekerja sendiri daripada dalam kelompok?", id: 8, category: "I" },
        { text: "Apakah Anda tertarik pada ilmu pengetahuan?", id: 9, category: "I" },
        { text: "Apakah Anda menikmati analisis mendalam?", id: 10, category: "I" },
      ]
    },
    {
      title: "Kategori A (Artistic)",
      questions: [
        { text: "Apakah Anda tertarik pada seni dan desain?", id: 11, category: "A" },
        { text: "Apakah Anda suka membuat karya kreatif?", id: 12, category: "A" },
        { text: "Apakah Anda suka bekerja dengan warna dan bentuk?", id: 13, category: "A" },
        { text: "Apakah Anda suka menulis atau membuat musik?", id: 14, category: "A" },
        { text: "Apakah Anda lebih suka pekerjaan yang memungkinkan kreativitas?", id: 15, category: "A" },
      ]
    },
    {
      title: "Kategori S (Social)",
      questions: [
        { text: "Apakah Anda suka membantu orang lain?", id: 16, category: "S" },
        { text: "Apakah Anda tertarik pada pekerjaan sosial?", id: 17, category: "S" },
        { text: "Apakah Anda menikmati mengajar atau melatih orang lain?", id: 18, category: "S" },
        { text: "Apakah Anda senang bekerja di tim?", id: 19, category: "S" },
        { text: "Apakah Anda suka pekerjaan yang melibatkan interaksi sosial?", id: 20, category: "S" },
      ]
    },
    {
      title: "Kategori E (Enterprising)",
      questions: [
        { text: "Apakah Anda tertarik pada pekerjaan yang melibatkan penjualan?", id: 21, category: "E" },
        { text: "Apakah Anda senang memimpin orang lain?", id: 22, category: "E" },
        { text: "Apakah Anda suka bernegosiasi?", id: 23, category: "E" },
        { text: "Apakah Anda tertarik pada pekerjaan yang berhubungan dengan pemasaran?", id: 24, category: "E" },
        { text: "Apakah Anda ingin memulai bisnis sendiri?", id: 25, category: "E" },
      ]
    },
    {
      title: "Kategori C (Conventional)",
      questions: [
        { text: "Apakah Anda suka pekerjaan yang terstruktur?", id: 26, category: "C" },
        { text: "Apakah Anda menikmati pekerjaan administratif?", id: 27, category: "C" },
        { text: "Apakah Anda tertarik pada pekerjaan dengan data?", id: 28, category: "C" },
        { text: "Apakah Anda senang merencanakan dan mengorganisir?", id: 29, category: "C" },
        { text: "Apakah Anda lebih suka pekerjaan dengan aturan yang jelas?", id: 30, category: "C" },
      ]
    }
  ];

  useEffect(() => {
    setSections(dummyData);
    setIsLoading(false);
  }, []);

  const handleAnswer = (questionId, answer, category) => {
    setAnswers((prevAnswers) => {
      const newAnswers = { ...prevAnswers, [questionId]: answer };
      let scoreChange = 0;

      if (answer === "2") scoreChange = 2;
      if (answer === "1") scoreChange = 1;
      if (answer === "0") scoreChange = 0;

      setScores((prevScores) => {
        const updatedScores = { ...prevScores };
        updatedScores[category] += scoreChange;
        return updatedScores;
      });

      return newAnswers;
    });
  };

  const getRecommendation = (scores) => {
    const maxScoreCategory = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    const recommendations = {
      R: "Karier di bidang Teknik, Teknologi, atau pekerjaan lapangan yang membutuhkan keterampilan fisik.",
      I: "Karier di bidang penelitian, sains, atau teknologi yang membutuhkan analisis mendalam.",
      A: "Karier di bidang seni, desain, atau bidang kreatif lainnya.",
      S: "Karier yang berfokus pada pelayanan sosial, pendidikan, atau pekerjaan yang berhubungan dengan orang lain.",
      E: "Karier yang berfokus pada kepemimpinan, pemasaran, atau kewirausahaan.",
      C: "Karier yang berhubungan dengan manajemen data, organisasi, dan administrasi.",
    };

    return recommendations[maxScoreCategory] || "Pilih karier yang sesuai dengan minat dan keahlian Anda.";
  };

  const handleSubmit = () => {
    const newScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

    Object.keys(answers).forEach((questionId) => {
      const answer = answers[questionId];
      const question = sections[0]?.questions.find((q) => q.id === questionId);
      if (question) {
        const category = question.category;
        let scoreChange = 0;
        if (answer === "2") scoreChange = 2;
        if (answer === "1") scoreChange = 1;
        if (answer === "0") scoreChange = 0;

        newScores[category] += scoreChange;
      }
    });

    setScores(newScores);

    const finalRecommendation = getRecommendation(newScores);
    setRecommendation(finalRecommendation);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-whi-100 flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 px-4">
        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <>
              <h1 className="text-2xl font-bold text-center mb-6 mt-20" style={{ color: "rgb(0, 96, 158)" }}>
                Tes Holland Code (RIASEC)
              </h1>

              <div className="bg-[rgb(54,165,221)] p-4 rounded-lg mb-6">
                <h2 className="text-lg font-semibold text-black mb-2">Petunjuk Tes:</h2>
                <ol className="list-decimal pl-5 text-white">
                  <li>Metode: Diisi sendiri (rahasia dan pribadi).</li>
                  <li>Setiap jawaban yang Anda berikan akan mendapatkan skor, pilihlah dengan keadaan diri sendiri.</li>
                  <li>Semakin jujur dan sesuai jawaban yang Anda berikan, maka hasil tes ini akan semakin akurat dan bermanfaat dalam menggambarkan minat dan preferensi karier Anda.</li>
                  <li>Pastikan Anda menjawab semua pertanyaan sebelum melanjutkan. Jika sudah terjawab seluruhnya, klik Lihat Hasil Tes untuk mengetahui hasil tes kepribadian dan karier Anda.</li>
                </ol>
              </div>

              {isLoading ? (
                <p>Loading questions...</p>
              ) : (
                <form>
                  {sections.map((section, index) => (
                    <div key={index} className="mb-6">
                      <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
                      {section.questions.map((question, qIndex) => (
                        <div key={qIndex} className="mb-4">
                          <p className="text-gray-700 mb-2">{question.text}</p>
                          <div className="flex gap-4">
                            <button
                              type="button"
                              onClick={() => handleAnswer(question.id, "2", question.category)}
                              className={`py-2 px-6 font-semibold rounded-lg shadow-md transition duration-200 ${
                                answers[question.id] === "2" ? "bg-[rgb(0,96,158)] text-white" : "bg-white text-gray-800 hover:bg-blue-100"
                              }`}
                              style={{ borderRadius: "40px" }}
                            >
                              Setuju
                            </button>
                            <button
                              type="button"
                              onClick={() => handleAnswer(question.id, "1", question.category)}
                              className={`py-2 px-6 font-semibold rounded-lg shadow-md transition duration-200 ${
                                answers[question.id] === "1" ? "bg-[rgb(0,96,158)] text-white" : "bg-white text-gray-800 hover:bg-blue-100"
                              }`}
                              style={{ borderRadius: "40px" }}
                            >
                              Netral
                            </button>
                            <button
                              type="button"
                              onClick={() => handleAnswer(question.id, "0", question.category)}
                              className={`py-2 px-6 font-semibold rounded-lg shadow-md transition duration-200 ${
                                answers[question.id] === "0" ? "bg-[rgb(0,96,158)] text-white" : "bg-white text-gray-800 hover:bg-blue-100"
                              }`}
                              style={{ borderRadius: "40px" }}
                            >
                              Tidak Setuju
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-[rgb(0,96,158)] text-white py-3 px-6 rounded-lg shadow-md font-semibold"
                    >
                      Kirim
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-4">Hasil Tes:</h3>
              <div>
                {Object.entries(scores).map(([category, score], index) => (
                  <div key={index} className="flex justify-between mb-2">
                    <p>{category}: {score} Skor</p>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold mb-4">Rekomendasi Karier:</h3>
              <p>{recommendation}</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RiasecTest;
