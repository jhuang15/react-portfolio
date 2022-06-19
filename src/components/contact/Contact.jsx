import React, {useEffect} from 'react';
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
    <div className="container" id="contact-container">
      <div className="column-contact">
      <div className="header-corner" id="contact-header"> 
          <h4>Jenny Huang</h4>
          <p>SOFTWARE ENGINEER</p>
          <p>FULL-STACK ENGINEER</p>
        </div> 
      <div className="left-div">
        <div className="contactme-div">
          <div className="hr-contact">
          <button className="button" id="menu-btn" data-modal="modalOne">ooo</button>
          <Nav />
          <hr />
          </div>
          <h2>Contact Me</h2>
        </div>
      </div>
      </div>
      
      <div className="right-div">
        <div className="contact-item">jchuang1020@gmail.com</div>
        <div className="contact-item">https://www.linkedin.com/in/jenny-huang-atl/</div>
        <div className="contact-item">https://github.com/jhuang15</div>
      </div>
    </div>

  )
}

export default Contact