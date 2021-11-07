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

function App() {
  useEffect(() => {
    const bcImages = [homeBc, destinationBc, crewBc, techBc];
    bcImages.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
  }, []);

  const location = useLocation().pathname.replace('/', '');
  return (
    <div className={`App ${location === '' ? 'home' : location}-bc`}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
      </Routes>
    </div>
  );
}

export default App;
