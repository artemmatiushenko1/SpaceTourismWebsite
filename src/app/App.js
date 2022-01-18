import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import './App.scss';
import { AnimatePresence } from 'framer-motion';
import ROUTES from '../constants/routes';
import { Home, Crew, Destination, Technology } from '../components/pages';

function App() {
  const location = useLocation();
  const locationPathname = location.pathname.replace('/', '');

  return (
    <div
      className={`app ${
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
