import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Background3D from "./components/Background3D";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import CustomCursor from "./components/CustomCursor";
import TopButton from "./components/TopButton";

const MainContent = () => {
  return (
    <>
      <Header />
      <Background3D />
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <TopButton />
    </>
  );
};

const App = () => {
  return (
    <>
      <GlobalStyles />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
};

export default App;
