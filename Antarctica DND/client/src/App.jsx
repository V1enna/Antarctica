import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Characters from './components/Characters';
import Home from './components/Home';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes> {/* routes for changing pages */}
        <Route path="/" element={<Home />} /> 
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  );
}

export default App;