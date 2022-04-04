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

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Greet></Greet>
      <LandingPage></LandingPage>
      <AboutMe></AboutMe>
      <Certificates></Certificates>
      <ProfesionalCertificates></ProfesionalCertificates>
      <AptitudeTests></AptitudeTests>
      <Education></Education>
      <Footer></Footer>
    </div>
  );
}

export default App;
