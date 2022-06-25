import React, { useEffect } from 'react';
import Nav from '../nav/Nav';
import './experience.css';

const Experience = () => {
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
    <div id="experience">
      <div className="container" id="skills-container">
        <h2>My Skills</h2>
        <div className="skills-div-wrapper">
          <div className="skills-div">
            o o o
            <h2 className="skill-title">PROGRAMMING LANGUAGES</h2>
            <hr />
            <p className="skill-content">HTML, CSS, Javascript, Java, Python</p>
            <p className="skill-content"><b>Frameworks: </b>React, Express, Django</p>
            <p className="skill-content"><b>Database: </b>MongoDB, SQL </p>

          </div>
          <div className="skills-div" id="middle-skills-div">
            o o o
            <h2 className="skill-title">AGILE DEVELOPMENT</h2>
            <hr />
            <p className="skill-content">Delivered projects in sprints</p>
          </div>
          <div className="skills-div">
            o o o
            <h2 className="skill-title">SOFTSKILLS</h2>
            <hr />
            <p className="skill-content"> I have gained experience with client relations and understand the importance of meeting clients’ needs. My attention to detail and diligence allow me to produce a quality product.
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Experience
