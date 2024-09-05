import './css/App.css'
import NavigationBar from './components/NavigationBar/NavigationBar';
import AboutMe from './components/AboutMe';
import Greet from './components/Greetings';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
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

      // Disable scroll when panel is open
      if (isPanelOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto'; // Reset scroll when panel is closed
      }
    };

    eventEmitter.on('panelToggled', eventListener);

    return () => {
      eventEmitter.off('panelToggled', eventListener);
    };
  }, []);

  const closePanel = () => {
    eventEmitter.emit('panelClosed', eventEmitter);
    setPanel(false);
    document.body.style.overflow = 'auto'; // Reset scroll when panel is closed
  }
  return (
    <div className="App">

      {/* Gradient background */}
      <div className={`fixed inset-0 bg-gradient-to-b from-my-blue  to-my-blue-2 `} />
      <NavigationBar></NavigationBar>

      {/* Content */}
      <div onClick={closePanel} className={`relative z-10 bg-transparent text-my-yellow px-4 md:px-8 lg:px-24 xl:px-40 2xl:px-60 transition-all duration-300 ${isPanelOpen ? 'blur-md' : ''}`}>
        <div className={`pb-20 space-y-10 md:space-y-12 lg:space-y-20 xl:space-y-24 2xl:space-y-32  ${isPanelOpen ? 'pointer-events-none' : ''}`}>
          <Greet />
          <AboutMe></AboutMe>
          <Education />
          <Experience />
          <Projects />
          <Certificates />
        </div>
      </div>
      <div className={`relative z-10 w-full bottom-0 transition-all duration-300 ${isPanelOpen ? ' blur-md pointer-events-none' : ''}`}>
        <Footer ></Footer>

      </div>

    </div>
  );
}

export default App;
