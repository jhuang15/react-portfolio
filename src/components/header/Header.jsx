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
      <div className="div-row">   
        <div className="table-of-content">
          <div className="name">
            <h1 id="hi">Hi, I'm</h1>
            <h1 id="last"><BiSearchAlt size={25} fill="#000000"/>Jenny Huang</h1>
          </div>
          
        </div>
        <div className="div-column">
          <div className="header-corner"> 
            <h4>Jenny Huang</h4>
            <p>FULL-STACK DEVELOPER</p>
          </div> 
          <div className="head-photo">
            <img id="profile-pic" src="https://i.imgur.com/D0rFcIZ.jpg" alt="me"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header