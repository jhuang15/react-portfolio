import React, { useEffect } from 'react';
import Nav from '../nav/Nav';
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
                o o o
                <hr />
              </div>
              <h2>Contact Me</h2>
            </div>
          </div>
        </div>

        <div className="right-div">
          <div className="contact-item">jchuang1020@gmail.com</div>
          <div className="contact-item"><a href="https://www.linkedin.com/in/jenny-huang-atl/">https://www.linkedin.com/in/jenny-huang-atl/</a></div>
          <div className="contact-item"><a href="https://github.com/jhuang15">https://github.com/jhuang15</a></div>
        </div>
      </div>

    </div>

  )
}

export default Contact