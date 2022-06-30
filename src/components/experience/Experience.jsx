import React, { useEffect } from 'react';
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
            <p className="dots">o o o</p>
            <h2 className="skill-title">TECHNICAL SKILLS</h2>
            <hr />
            <p className="skill-content"><b>Object-Oriented Languages: </b>Python, Java</p>
            <p className="skill-content"><b>Scripting Language: </b>Javascript</p>
            <p className="skill-content"><b>Frameworks: </b>React, Django, Express, Bootstrap, Materialize </p>
            <p className="skill-content"><b>Databases: </b>PostgreSQL, Mongodb, MySQL, SQLite </p>
            <p className="skill-content"><b>Tools: </b>CSS, HTML, Visual Studio, Git, Github, AJAX, AWS S3, Agile Methodology, Figma</p>

              
          </div>
          
          <div className="skills-div">
            <p className="dots">o o o</p>
            <h2 className="skill-title">SOFTSKILLS</h2>
            <hr />
            <p className="skill-content"> effective communication, teamwork, dependability, adaptability, and flexibility
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Experience
