import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import './header.css';

const Header = () => {

  useEffect(function () {
    const modalBtns = document.querySelectorAll(".button");
    const closeBtns = document.querySelectorAll(".close");

    modalBtns.forEach(function (btn) {
      btn.onclick = function () {
        let modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
      };
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };
    });
  }, []);

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
            <button className="button" id="menu-btn" data-modal="modalOne">Menu</button>
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