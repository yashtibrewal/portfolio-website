import './css/App.css'
// import './css/landing-page.css'
// import Certificates from './components/Certificates';
import NavigationBar from './components/NavigationBar/NavigationBar';
// import AptitudeTests from './components/ApptitudeTests'
import AboutMe from './components/AboutMe';
import Greet from './components/Greetings';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
// import WorkshopCertificates from './components/Certification/WorkshopCertificates';
// import GoogleCertifications from './GoogleCertifications';
import { useEffect, useState } from 'react';
import eventEmitter from './CustomEventEmitter';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certification/Certificates';
import Footer from './components/Footer';



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
    <div className="App">

      {/* Gradient background */}
      <div className={`fixed inset-0 bg-gradient-to-b from-my-blue  to-my-blue-2 ${isPanelOpen ? 'blur-lg' : ''}`} />
      <NavigationBar></NavigationBar>
      {/* Content */}
      <div className={`relative z-10 bg-transparent text-my-yellow px-4 md:px-8 lg:px-24 xl:px-40 2xl:px-60`}>
        <div onClick={closePanel} className={`pb-20 space-y-10 md:space-y-12 lg:space-y-20 xl:space-y-24 2xl:space-y-32`}>
          <Greet />
          <AboutMe></AboutMe>
          <Education />
          <Experience />
          <Projects />
          <Certificates />
          {/* <AptitudeTests></AptitudeTests> */}
          {/* <GoogleCertifications></GoogleCertifications> */}
          {/* <WorkshopCertificates></WorkshopCertificates> */}
        </div>
        <Footer></Footer>

      </div>

    </div>
  );
}

export default App;
