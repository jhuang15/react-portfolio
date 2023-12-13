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
    <div className="skills-container" id="skills">
      <div className="skills-header">
        Technical Skills
        <div className="skills-content">
          <div className='skill-1'>
              Javascript
          </div>
          <div className='skill-1'>
              HTML/CSS
          </div>
          <div className='skill-1'>
              React
          </div>
          <div className='skill-1'>
              Java
          </div>
          <div className='skill-1'>
              Python
          </div>
          <div className='skill-1'>
              MongoDB
          </div>
          <div className='skill-1'>
              Node
          </div>
          <div className='skill-1'>
              Postgres
          </div>
          <div className='skill-1'>
              AWS S3
          </div>
          <div className='skill-1'>
              Git 
          </div>
          <div className='skill-1'>
              Express
          </div>
          <div className='skill-1'>
              AJAX
          </div>
          <div className='skill-1'>
              Visual Studio
          </div>
          <div className='skill-1'>
              Figma
          </div>
          <div className='skill-1'>
              Agile Methodology
          </div>
          <div className='skill-1'>
              Bootstrap
          </div>

        </div>

      </div>

    </div>


  )
}

export default Experience
