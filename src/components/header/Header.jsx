import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { BiSearchAlt } from "react-icons/bi";
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
            <Link className="btn-link" activeClass="active" to="about-me" spy={true} smooth={true} ><BiSearchAlt />about me</Link>           
            <Link className="btn-link" to="experience" spy={true} smooth={true}><BiSearchAlt />experience</Link>         
            <Link className="btn-link" to="portfolio" spy={true} smooth={true}><BiSearchAlt />portfolio</Link>
            <Link className="btn-link" to="contact-me" spy={true} smooth={true}><BiSearchAlt />contact me</Link>
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
    </div>
  )
}

export default Header