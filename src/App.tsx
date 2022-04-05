import './App.css';
import Certificates from './components/Certificates';
import LandingPage from './components/LandingPage';
import NavigationBar from './components/NavigationBar';
import Projects from './components/Projects';
import AptitudeTests from './components/ApptitudeTests'
import AboutMe from './components/AboutMe';
import Greet from './components/Greetings';
import ProfesionalCertificates from './components/Professional/ProfessionalCertificates';
import Education from './components/Education';
import Footer from './components/Footer';
import GoogleCertifications from './components/Certification/GoogleCertifications';
import WorkshopCertificates from './components/Certification/WorkshopCertificates';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Greet></Greet>
      <LandingPage></LandingPage>
      <AboutMe></AboutMe>
      <GoogleCertifications></GoogleCertifications>
      <AptitudeTests></AptitudeTests>
      <Education></Education>
      <ProfesionalCertificates></ProfesionalCertificates>
      <Certificates></Certificates>
      <WorkshopCertificates></WorkshopCertificates>
      <Footer></Footer>
    </div>
  );
}

export default App;
