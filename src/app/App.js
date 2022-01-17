import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import Home from '../components/pages/home/Home';
import Destination from '../components/pages/destination/Destination';
import Crew from '../components/pages/crew/Crew';
import './App.scss';
import Technology from '../components/pages/technology/Technology';
import { AnimatePresence } from 'framer-motion';
import ROUTES from '../constants/routes';

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
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.DESTINATION} element={<Destination />} />
          <Route path={ROUTES.CREW} element={<Crew />} />
          <Route path={ROUTES.TECHNOLOGY} element={<Technology />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
