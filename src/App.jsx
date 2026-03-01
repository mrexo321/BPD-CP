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
import DonatePage from "./components/DonatePage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import SiteSettings from "./pages/admin/SiteSettings";
import ColorSettings from "./pages/admin/ColorSettings";
import ContentSettings from "./pages/admin/ContentSettings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/impact" element={<ImpactPage />} />
      <Route path="/programs" element={<ProgramPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pilar-1" element={<IslamicSocialImpact />} />
      <Route path="/pilar-2" element={<DigitalAcademyPillar />} />
      <Route path="/pilar-3" element={<CommunityMobilization />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/donate" element={<DonatePage />} />
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/content-settings" element={<ContentSettings />} />
      <Route path="/admin/site-settings" element={<SiteSettings />} />
      <Route path="/admin/color-settings" element={<ColorSettings />} />
    </Routes>
  );
};

export default App;


