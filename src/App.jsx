import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ImpactPage from "./ImpactPage";
import ProgramPage from "./ProgramPage";
import AboutPage from "./AboutPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/impact" element={<ImpactPage />} />
      <Route path="/programs" element={<ProgramPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
