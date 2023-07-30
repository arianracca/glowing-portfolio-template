import './App.css';
import CustomNavbar from './components/CustomNavbar';
import AboutSection from './components/AboutSection'
import WelcomeSection from './components/WelcomeSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

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
