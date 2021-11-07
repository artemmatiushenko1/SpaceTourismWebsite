import './App.scss';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Destination from './components/Destination';
import { Route, Routes, useLocation } from 'react-router-dom';
import Crew from './components/Crew';

function App() {
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
