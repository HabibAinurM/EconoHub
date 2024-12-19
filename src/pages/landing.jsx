import React from "react";
import Header from "../components/Header";
import Hero from "../components/Teks-utama";
import TeksInfo from "../components/Teks-2";
import Footer from "../components/Footer";
import Temukan from "../components/temukan";
import TraningCard from "../components/latihan";
import Stakeholder from "../components/stakeholder";
import JobCard from "../components/kerja";


function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <TeksInfo />
      <Temukan />
      <TraningCard />
      <JobCard />
      <Stakeholder />
      <Footer />      
    </div>
  );
}

export default Landing;
