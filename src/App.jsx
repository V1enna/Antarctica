import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Characters from './Pages/Characters.jsx';
import Home from './Pages/Home';
import './App.css';
import CharInfo from './components/charInfo.jsx';
import Artworks from './Pages/Artworks.jsx';
import About from './Pages/About.jsx';
import Nations from './Pages/Nations.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
  <div className='min-h-screen bg-neutral-800 text-white px-50 py-10'> 
    <Router>
      <Navbar />
      <Routes> {/* routes for changing pages */}
        <Route path="/" element={<Home />} /> 
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharInfo />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/nations" element={<Nations />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;