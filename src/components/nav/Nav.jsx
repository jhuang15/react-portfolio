import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div id="modalOne" className="modal">
      <div className="modal-content">
        <h3>Navigation</h3>
        <Link className="nav-link" to="/about-me">about me</Link>           
        <Link className="nav-link" to="/experience">experience</Link>         
        <Link className="nav-link" to="/portfolio">portfolio</Link>
        <Link className="nav-link" to="/contact-me">contact me</Link>

      </div>
    </div>
  )
}

export default Nav