import './App.scss';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Destination from './components/Destination';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
