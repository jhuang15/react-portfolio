import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {

  return (
    <div className="container">
      <div className="div-row">
        <div className="table-of-content">
          <div className="name">
            <h1 id="first">Jenny</h1>
            <h1 id="last">Huang</h1>
          </div>
          
          <div className="content-btns">
            <hr />
            <Link className="btn-link" to="/about-me">about me</Link>           
            <Link className="btn-link" to="/experience">experience</Link>         
            <Link className="btn-link" to="/portfolio">portfolio</Link>
            <Link className="btn-link" to="/contact-me">contact me</Link>
          </div>
        </div>
        <div className="div-column">
          <div className="header-corner"> 
            <h4>Jenny Huang</h4>
            <p>SOFTWARE ENGINEER</p>
            <p>FULL-STACK ENGINEER</p>
          </div> 
          <div className="head-photo">
            <p>***PROFILE IMG HERE**</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header