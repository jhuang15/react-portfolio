import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div className="nav-container">
      <h3>Menu</h3>
      <Link className="btn-link" to="/about-me">about me</Link>           
      <Link className="btn-link" to="/experience">experience</Link>         
      <Link className="btn-link" to="/portfolio">portfolio</Link>
      <Link className="btn-link" to="/contact-me">contact me</Link>
    </div>
  )
}

export default Nav