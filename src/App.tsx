import { Global } from "@emotion/react";
import { globalStyles } from "./styles/GlobalStyles";
import Background3D from "./components/Background3D";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import Header from "./components/Header";

function MainContent() {
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
    </>
  );
}

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MainContent} />
          <Route path="/project/:id" component={ProjectDetail} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
