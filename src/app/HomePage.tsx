'use client'

import { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Certificates from "./components/Certification/Certificates";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";
import Greet from "./components/Greetings";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Projects from "./components/Projects/Projects";
import eventEmitter from "./CustomEventEmitter";

import pageStyles from './components/page.module.css';

function HomePage() {

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
    <div className="Home">

      {/* Gradient background */}
      <div className={pageStyles.bg_gradient} />
      <NavigationBar></NavigationBar>

      {/* Content */}
      <div onClick={closePanel}
        className={`relative z-10 bg-transparent text-my-yellow ${pageStyles.pagePadding} transition-all duration-300 ${isPanelOpen ? 'blur-md' : ''}`}>
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


export default HomePage