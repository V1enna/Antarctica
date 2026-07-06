import React from 'react'; 
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='navbar-left'>
            <h2 className='navbar-title'>Gardens of Antarctica</h2>
        </div>
        <div className='navbar-center'>
            <ul className='navbar-links'>
                <li className="opacity-50 hover:opacity-100"><Link to="/">Main</Link></li>
                <li className="opacity-50 hover:opacity-100"><Link to="/characters">Characters</Link></li>
                <li className="opacity-50 hover:opacity-100"><Link to="/races">Races</Link></li>
                <li className="opacity-50 hover:opacity-100"><Link to="/nations">Nations</Link></li>
                <li className="opacity-50 hover:opacity-100"><Link to="/artworks">Artworks</Link></li>
                <li className="opacity-50 hover:opacity-100"><Link to="/about">About</Link></li>
            </ul> 
        </div>
    </nav>
  );
};

export default Navbar;