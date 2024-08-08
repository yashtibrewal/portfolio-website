import './css/App.css'
// import './css/landing-page.css'
import Certificates from './components/Certificates';
import NavigationBar from './components/NavigationBar';
import AptitudeTests from './components/ApptitudeTests'
import AboutMe from './components/AboutMe';
import Greet from './components/Greetings';
import ProfessionalCertificates from './components/Professional/ProfessionalCertificates';
import Education from './components/Education';
import Footer from './components/Footer';
import WorkshopCertificates from './components/Certification/WorkshopCertificates';
import GoogleCertifications from './GoogleCertifications';

function App() {
  return (
    <div className="App bg-my-blue 
        text-my-yellow">
      <NavigationBar></NavigationBar>
      <Greet></Greet>
      <Education></Education>
      {/* <Footer></Footer> */}
      {/* <AboutMe></AboutMe> */}
      {/* <AptitudeTests></AptitudeTests> */}
      {/* <ProfessionalCertificates></ProfessionalCertificates> */}
      {/* <Certificates></Certificates> */}
      {/* <GoogleCertifications></GoogleCertifications> */}
      {/* <WorkshopCertificates></WorkshopCertificates> */}
    </div>
  );
}

export default App;
