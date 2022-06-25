import React, { useEffect } from 'react';
import { HiOutlineDocumentDownload } from "react-icons/hi";
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
    <div id="about-me">
      <div className="container-wrapper">
        <div className="left-container">

        </div>
        <div className="right-container">

          <div className="aboutme-content">
            o o o
            <h2>About Me</h2>
            <hr />
            <p className="about-text">Inquisitive software engineer with a background in computer science transferring restaurant industry skills such as teamwork, attention to detail, and resiliency. Eager to utilize and strengthen qualifications independently and cooperatively to develop extensive products in technology to meet clients' needs.</p>
            <a className="resume-btn" href="https://docs.google.com/document/d/1K5kgY5MvR8RJ68tS_MTj94XXROdn0gFAKBlOSF-4A60/export?format=pdf" download>Resume <HiOutlineDocumentDownload size={25}/></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About