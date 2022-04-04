import './App.css';
import Certificates from './components/Certificates';
import LandingPage from './components/LandingPage';
import NavigationBar from './components/NavigationBar';
import Projects from './components/Projects';
import AptitudeTests from './components/ApptitudeTests'
import AboutMe from './components/AboutMe';
import Greet from './components/Greetings';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Greet></Greet>
      <LandingPage></LandingPage>
      <AboutMe></AboutMe>
      <Certificates></Certificates>
      <AptitudeTests></AptitudeTests>
      <Projects></Projects>
    </div>
  );
}

export default App;
