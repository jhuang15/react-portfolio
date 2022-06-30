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
              <div className="hr-contact">
              <p className="dots">o o o</p>
                <hr />
              </div>
              <h2>Contact Me</h2>
            </div>
          </div>
        </div>

        <div className="right-div">
          <div className="contact-item"><MdEmail size={25}/><a href="mailto: jchuang1020@gmail.com">jchuang1020@gmail.com</a></div>
          <div className="contact-item"><BsLinkedin size={25}/><a href="https://www.linkedin.com/in/jenny-huang-atl/">https://www.linkedin.com/in/jenny-huang-atl/</a></div>
          <div className="contact-item"><BsGithub size={25}/><a href="https://github.com/jhuang15">https://github.com/jhuang15</a></div>
        </div>
      </div>

    </div>

  )
}

export default Contact