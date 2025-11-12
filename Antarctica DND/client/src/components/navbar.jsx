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
                <li><Link to="/">Main</Link></li>
                <li><Link to="/characters">Characters</Link></li>
                <li><Link to="/races">Races</Link></li>
                <li><Link to="/nations">Factions</Link></li>
                <li><Link to="/fanarts">Fanarts</Link></li>
                <li><Link to="/fanarts">About</Link></li>
            </ul> 
        </div>
    </nav>
  );
};

export default Navbar;