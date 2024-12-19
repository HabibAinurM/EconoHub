import React from "react";
import Footer from "../components/Footer";
import PekerjaanCard from "../components/Pekerjaan";
import Navbar from "../components/dashboard";


function Loker() {
  return (
    <div>
      <Navbar />
      <PekerjaanCard />
      <Footer />      
    </div>
  );
}

export default Loker;
