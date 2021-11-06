import './App.scss';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Destination from './components/Destination';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation().pathname.replace('/', '');
  return (
    <div className={`App ${location === '' ? 'home' : location}-bc`}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
