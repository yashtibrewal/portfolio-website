import { useEffect, useState } from "react";
import eventEmitter from "../../CustomEventEmitter";
import Logo from "../Logo";
import styles from './navigation.module.css';

function NavigationBar() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const eventListener = () => {
      setIsPanelOpen(false);
    };

    eventEmitter.on('panelClosed', eventListener);

    return () => {
      eventEmitter.off('panelClosed', eventListener);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
            
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight);
    }
  }, []);

  const togglePanel = () => {
    eventEmitter.emit('panelToggled', !isPanelOpen);
    setIsPanelOpen(!isPanelOpen);
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      let offsetPosition = 0;
      const isDesktopView = window.innerWidth >= 768; // Check if the screen width is medium or larger (768px and above)

      if (isDesktopView && window.scrollY > elementPosition) {
        // Scrolling up on desktop, apply offset
        offsetPosition = elementPosition - navbarHeight - 20; // Adjust 20px as per your requirement
      } else {
        // No offset or small screen
        offsetPosition = elementPosition - 20;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };


  return (
    <nav>
      {/* Mobile Navigation */}
      { }
      <div className={`transition-all duration-1000 ${lastScrollY === 0 ? 'hidden' : ''} md:hidden`}>
        <div
          onClick={togglePanel}
          className="fixed top-5 z-40 right-5 bg-blue-200 rounded-xl p-2 visible">
          <div>
            <div className="w-12 text-my-blue font-semibold min-w-5 flex justify-center items-center">
              {isPanelOpen ? 'X' : 'Menu'}
            </div>
          </div>
        </div>
        <div className={`z-40 border-my-blue border-y-4 border-r-4 bg-blue-300 fixed left-0 transform transition duration-300 ${isPanelOpen ? 'translate-x-0' : '-translate-x-full'}
                bottom-10 min-h-fit rounded-r-xl flex flex-col pl-5 pr-5 w-fit`}>
          <div>
            <div onClick={togglePanel}
              className="text-blue-950 p-5 text-xl font-mono font-semibold space-y-3">
              <div className={styles.nav_item}
                onClick={() => scrollToSection("aboutMe")}>
                <span className='text-green-700'>01.</span> About Me</div><hr></hr>
              <div className={styles.nav_item}
                onClick={() => scrollToSection("education")}>
                <span className='text-green-700'>02.</span> Education</div><hr></hr>
              <div className={styles.nav_item}
                onClick={() => scrollToSection("experience")}>
                <span className='text-green-700'>03.</span> Experience</div><hr></hr>
              <div className={styles.nav_item}
                onClick={() => scrollToSection("projects")}>
                <span className='text-green-700'>04.</span> Projects</div><hr></hr>
              <div className={styles.nav_item}
                onClick={() => scrollToSection("certificates")}>
                <span className='text-green-700'>05.</span> Certificates</div><hr></hr>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div id="navbar"
        className={`z-50 items-center px-10 fixed bg-my-blue transition-transform duration-300 ease-in-out
            ${!isVisible ? '-translate-y-full' : 'translate-y-0'}
            ${isVisible ? 'shadow-lg shadow-my-blue-2' : ''}
            hidden md:h-16 lg:h-20 top-0 md:flex md:w-full justify-between`}>
        <div className="w-8 lg:w-10">
          <Logo />
        </div>
        <div className="flex font-semibold text-sm lg:text-base md:space-x-2 lg:space-x-5 text-white">
          <div className={styles.nav_item}
            onClick={() => scrollToSection("aboutMe")}>
            <span className='text-green-700'>01.</span> About Me</div><hr></hr>
          <div className={styles.nav_item}
            onClick={() => scrollToSection("education")}>
            <span className='text-green-700'>02.</span> Education</div><hr></hr>
          <div className={styles.nav_item}
            onClick={() => scrollToSection("experience")}>
            <span className='text-green-700'>03.</span> Experience</div><hr></hr>
          <div className={styles.nav_item}
            onClick={() => scrollToSection("projects")}>
            <span className='text-green-700'>04.</span> Projects</div><hr></hr>
          <div className={styles.nav_item}
            onClick={() => scrollToSection("certificates")}>
            <span className='text-green-700'>05.</span> Certificates</div><hr></hr>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
