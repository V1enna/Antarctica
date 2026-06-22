import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Characters from './components/Characters.jsx';
import Home from './components/Home';
import './App.css';
import CharInfo from './components/charInfo.jsx';
import About from './components/About.jsx';

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
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;