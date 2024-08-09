import './css/App.css'
// import './css/landing-page.css'
import Certificates from './components/Certificates';
import NavigationBar from './components/NavigationBar';
import AptitudeTests from './components/ApptitudeTests'
import AboutMe from './components/AboutMe';
import Greet from './components/Greetings';
import ProfessionalCertificates from './components/Professional/ProfessionalCertificates';
import Education from './components/Education';
import WorkshopCertificates from './components/Certification/WorkshopCertificates';
import GoogleCertifications from './GoogleCertifications';
import ContactMe from "./components/ContactMe";
import { useEffect, useState } from 'react';
import eventEmitter from './CustomEventEmitter';



function App() {

  const [isPanelOpen, setPanel] = useState(false);


  useEffect(() => {
    const eventListener = (isPanelOpen: boolean) => {
      setPanel(isPanelOpen);
    };

    eventEmitter.on('panelToggled', eventListener);

    return () => {
      eventEmitter.off('panelToggled', eventListener);
    };
  }, []);

  const closePanel = () => {
    eventEmitter.emit('panelClosed', eventEmitter);
    setPanel(false);
  }
  return (
    <div className="App bg-my-blue 
        text-my-yellow md:px-8 lg:px-16">
      {/* <NavigationBar></NavigationBar> */}
      <div onClick={closePanel} className={`${isPanelOpen ? 'blur-lg' : ''}`}>
        <Greet></Greet>
        <ContactMe></ContactMe>
        <Education></Education>
        {/* <AboutMe></AboutMe> */}
        {/* <AptitudeTests></AptitudeTests> */}
        {/* <ProfessionalCertificates></ProfessionalCertificates> */}
        {/* <Certificates></Certificates> */}
        {/* <GoogleCertifications></GoogleCertifications> */}
        {/* <WorkshopCertificates></WorkshopCertificates> */}
      </div>
    </div>
  );
}

export default App;
