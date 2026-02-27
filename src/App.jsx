import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ImpactPage from "./ImpactPage";
import ProgramPage from "./ProgramPage";
import AboutPage from "./AboutPage";
import IslamicSocialImpact from "./components/IslamicSocialImpact";
import DigitalAcademyPillar from "./components/DigitalAcademyPilar";
import CommunityMobilization from "./components/CommunityMobilization";
import ContactUs from "./components/ContactUs";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/impact" element={<ImpactPage />} />
      <Route path="/programs" element={<ProgramPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pilar-1" element={<IslamicSocialImpact />} />
      <Route path="/pilar-2" element={<DigitalAcademyPillar />} />
      <Route path="/pilar-3" element={<CommunityMobilization />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default App;
