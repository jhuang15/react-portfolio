import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import About from '../about/About';
import Experience from '../experience/Experience';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import './header.css';

const Header = () => {
  useEffect(function () {
    const modalBtns = document.querySelectorAll(".button");

    modalBtns.forEach(function (btn) {
      btn.onclick = function () {
        let modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
      };
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };
    });
  }, []);

  return (
    <div className="container">
      <button className="button" id="menu-btn" data-modal="modalOne">ooo</button>
      <div className="div-row">
        <div className="table-of-content">
          <div className="name">
            <h1 id="first">Jenny</h1>
            <h1 id="last">Huang</h1>
          </div>
          
          <div className="content-btns">
            <hr />
            <Nav />
            <Link className="btn-link" to="/about-me">about me</Link>           
            <Link className="btn-link" to="/experience">experience</Link>         
            <Link className="btn-link" to="/portfolio">portfolio</Link>
            <Link className="btn-link" to="/contact-me">contact me</Link>
          </div>
        </div>
        <div className="div-column">
          <div className="header-corner"> 
            <h4>Jenny Huang</h4>
            <p>FULL-STACK DEVELOPER</p>
          </div> 
          <div className="head-photo">
            <img src="https://i.imgur.com/D0rFcIZ.jpg" alt="me"></img>
          </div>
        </div>
      </div>
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default Header