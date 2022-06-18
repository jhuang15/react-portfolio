import React, {useEffect} from 'react';
import Nav from '../nav/Nav';
import './about.css';

const About = () => {
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
    <div className="container-wrapper">
    <div className="left-container">
      <button className="button" id="menu-btn" data-modal="modalOne">ooo</button>
      <Nav />
      <p>img</p>
    </div>
    <div className="right-container">
      <div className="aboutme-content">
        <h2>About Me</h2>
        <hr />
        <p className="about-text">Inquisitive software engineer with a background in computer science transferring restaurant industry skills such as teamwork, attention to detail, and resiliency. Eager to utilize and strengthen qualifications independently and cooperatively to develop extensive products in technology to meet clients' needs.</p>
      </div>
    </div>
    </div>
  )
}

export default About