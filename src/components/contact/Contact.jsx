import React, { useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import './contact.css';

const Contact = () => {
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
    <div id="contact-me">
      <div className="container" id="contact-container">
        <div className="column-contact">
          <div className="header-corner" id="contact-header">
            <h4>Jenny Huang</h4>
            <p>FULL-STACK DEVELOPER</p>
          </div>
          <div className="left-div">
            <div className="contactme-div">
              <h3 className="contact-header">Contact Me</h3>
              <h5 id="contact-msg">Thanks for visiting my page! Feel free to connect and reach out to me </h5>
            </div>
          </div>
        </div>

        <div className="right-div">
          <a className="contact-item" href="mailto: jchuang1020@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail size={25}/> jchuang1020@gmail.com</a>
          <a className="contact-item" href="https://www.linkedin.com/in/jenny-huang-atl/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={25}/> https://www.linkedin.com/in/jenny-huang-atl/</a>
          <a className="contact-item" href="https://github.com/jhuang15" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/> https://github.com/jhuang15</a>
        </div>
      </div>

    </div>

  )
}

export default Contact