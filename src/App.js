import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import './App.scss';
import homeBc from './assets/home/background-home-desktop.jpg';
import destinationBc from './assets/destination/background-destination-desktop.jpg';
import crewBc from './assets/crew/background-crew-desktop.jpg';
import techBc from './assets/technology/background-technology-desktop.jpg';
import Technology from './components/Technology';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  const locationPathname = location.pathname.replace('/', '');

  useEffect(() => {
    const bcImages = [homeBc, destinationBc, crewBc, techBc];
    bcImages.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
  }, []);

  return (
    <div
      className={`App ${
        locationPathname === '' ? 'home' : locationPathname
      }-bc`}
    >
      <Navigation />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
