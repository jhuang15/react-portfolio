import React, { useEffect } from 'react';
import './header.css';
import Typical from 'react-typical';

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
    <div className="header-container">
      <div className="header-title-1-2">
        <div id="header-title-1">
          <Typical
            steps={['Hey there!', 1000, 'I\'m Jenny Huang', 500]}
            wrapper="h1"
          />
        </div>
        <div id="header-title-2">
          <Typical
            steps={['Full-Stack Developer', 1000, 'Front-End Engineer', 1000, 'Software Engineer', 1000]}
            loop={Infinity}
            //wrapper="h3"
          />
        </div> 
      </div>
      
      <div className="header-pic">
        <img id="profile-pic" src="https://i.imgur.com/D0rFcIZ.jpg" alt="me"></img>
      </div>
      <div id="clear"> </div>
      
    </div>
    
    
          
  )
}

export default Header