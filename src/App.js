import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/pages/crew/Crew';
import './App.scss';
import Technology from './components/pages/technology/Technology';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  const locationPathname = location.pathname.replace('/', '');

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
