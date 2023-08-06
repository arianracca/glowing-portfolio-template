import "./App.css";
import CustomNavbar from "./components/navbar/CustomNavbar";
import AboutSection from "./components/about/AboutSection";
import WelcomeSection from "./components/welcome/WelcomeSection";
import ProjectsSection from "./components/project/ProjectsSection";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <WelcomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
