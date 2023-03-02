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
    
    <img id="profile-pic" src="https://i.imgur.com/D0rFcIZ.jpg" alt="me"></img>
          
  )
}

export default Header