import React from "react";
import "../assets/styles/styles.css";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import WhatProvide from "../components/WhatProvide";
import HowWorks from "../components/HowWorks";
import Download from "../components/Download";
import UserTestimonials from "../components/UserTestimonials";
import FirstPage from "../components/FirstPage";

function Home() {
  return (
    <>
      <FirstPage />
      <WhyChoose />
      <WhatProvide />
      <HowWorks />
      <Download />
      <UserTestimonials />
      <Footer />
    </>
  );
}

export default Home;
