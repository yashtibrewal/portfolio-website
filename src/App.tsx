import './css/App.css'
// import './css/landing-page.css'
// import Certificates from './components/Certificates';
// import NavigationBar from './components/NavigationBar';
// import AptitudeTests from './components/ApptitudeTests'
// import AboutMe from './components/AboutMe';
import Greet from './components/Greetings';
import ProfessionalCertificates from './components/Professional/Experience';
import Education from './components/Education/Education';
// import WorkshopCertificates from './components/Certification/WorkshopCertificates';
// import GoogleCertifications from './GoogleCertifications';
import Profiles from "./components/Profiles";
import { useEffect, useState } from 'react';
import eventEmitter from './CustomEventEmitter';
import Projects from './components/Projects/Projects';



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
    <div className="App bg-gradient-to-b pb-20 from-my-blue via-violet-950 to-my-blue-2 
        text-my-yellow px-4 md:px-8 lg:px-32">
      {/* <NavigationBar></NavigationBar> */}
      <div onClick={closePanel} className={`${isPanelOpen ? 'blur-lg' : ''} space-y-10`}>
        <Greet></Greet>
        <Profiles></Profiles>
        <Education></Education>
        <ProfessionalCertificates></ProfessionalCertificates>
        <Projects></Projects>
        {/* <AboutMe></AboutMe> */}
        {/* <AptitudeTests></AptitudeTests> */}
        {/* <Certificates></Certificates> */}
        {/* <GoogleCertifications></GoogleCertifications> */}
        {/* <WorkshopCertificates></WorkshopCertificates> */}
      </div>
    </div>
  );
}

export default App;
