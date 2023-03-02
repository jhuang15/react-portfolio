import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import './nav.css';


const Nav = () => {
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
    <div className="nav-container">
      <div className="links-div">
        <Link className="nav-link-btn" activeClass="active" to="about-me" spy={true} smooth={true}>About Me</Link>           
        <Link className="nav-link-btn" to="experience" spy={true} smooth={true}>Skills</Link>         
        <Link className="nav-link-btn" to="portfolio" spy={true} smooth={true}>Projects</Link>
        <Link className="nav-link-btn" to="contact-me" spy={true} smooth={true}>Contact Me</Link>
      </div>
      <div className="btns-div>"> 
        <a className="nav-link-btn" href="mailto: jchuang1020@gmail.com" target="_blank"><MdEmail size={25}/></a>
        <a className="nav-link-btn" href="https://www.linkedin.com/in/jenny-huang-atl/" target="_blank"><BsLinkedin size={25}/></a>
        <a className="nav-link-btn" href="https://github.com/jhuang15" target="_blank"><BsGithub size={25}/></a>
      </div>
      
    </div>
  )
}

export default Nav