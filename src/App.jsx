import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Characters from './components/Characters.jsx';
import Home from './components/Home';
import './App.css';
import CharInfo from './components/charInfo.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes> {/* routes for changing pages */}
        <Route path="/" element={<Home />} /> 
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharInfo />} />
      </Routes>
    </Router>

  );
}

export default App;