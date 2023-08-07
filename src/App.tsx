import "./App.css";
import CustomNavbar from "./components/navbar/CustomNavbar";
import AboutSection from "./components/about/AboutSection";
import WelcomeSection from "./components/welcome/WelcomeSection";
import ProjectsSection from "./components/project/ProjectsSection";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const sections = [
    { id: "Home", title: "Home", href: "#welcome" },
    { id: "about", title: "About", href: "#about" },
    { id: "projects", title: "Projects", href: "#projects" },
    { id: "contact", title: "Contact", href: "#contact" },
    { id: "blog", title: "Blog", href: "/blog" },
    // Add more sections as needed
  ];

  return (
    <div className="App">
      <CustomNavbar sections={sections} />
      <WelcomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer sectionsFooter={sections} />
    </div>
  );
}

export default App;
