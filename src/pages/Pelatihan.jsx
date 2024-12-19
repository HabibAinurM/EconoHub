import React from "react";
import Footer from "../components/Footer";
import LatihanCard from "../components/pelatihan";
import Navbar from "../components/dashboard";


function Latihan() {
  return (
    <div>
      <Navbar />
      <LatihanCard />
      <Footer />      
    </div>
  );
}

export default Latihan;
