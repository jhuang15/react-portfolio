import React, { useEffect } from 'react';
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import './portfolio.css';

const Portfolio = () => {
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
    <div id="portfolio">
      <div className="container" id="portfolio-container">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="content-row">
          <div className="project-n-btn">
            <div className="project-div" id="background-img1">
              o o o
              <h2 id="project-title">Wedding Site Planner</h2>
              <h4>MERN-Stack Web Application</h4>
              <p>Built a full-stack CRUD application on MERN stack using MongoDB, Express, React and Node.js to create, read update and delete data on a wedding website making application.describe the project, languages used, framework, functions, etc. </p>
            </div>
            <div className="btn-container">
              <a href="https://github.com/jhuang15/mint" className="project-btn" target="_blank" rel="noreferrer">Github<BsGithub size={16}/></a>
              <a href="https://mint.up.railway.app/" className="project-btn" target="_blank" rel="noreferrer">Demo<FiExternalLink size={16}/></a>
            </div>
          </div>
          <div className="project-n-btn">
            <div className="project-div" id="background-img2">
              o o o
              <h2 id="project-title">OnlyCakes</h2>
              <h4>Full-CRUD Django Web Application</h4>
              <p>Collaborated in a team to develope a web application with Django, Javascript and Python3 to implement full-stack CRUD functionalities. </p>
            </div>
            <div className="btn-container">
              <a href="https://github.com/jhuang15/onlycakes" className="project-btn" target="_blank" rel="noreferrer">Github<BsGithub size={16}/></a>
              <a href="https://onlycakes.up.railway.app/" className="project-btn" target="_blank" rel="noreferrer">Live Demo<FiExternalLink size={16}/></a>
            </div>
          </div>
          <div className="project-n-btn">
            <div className="project-div" id="background-img3">
              o o o
              <h2 id="project-title">Inventory Tracker</h2>
              <h4>Full-CRUD application built using Express </h4>
              <p>An inventory tracker for a bar/restaurant. Performs full CRUD</p>

            </div>
            <div className="btn-container">
              <a href="https://github.com/jhuang15/bevo" className="project-btn" target="_blank" rel="noreferrer">Github<BsGithub size={16}/></a>
              <a href="https://bevo-sei.herokuapp.com/" className="project-btn" target="_blank" rel="noreferrer">Live Demo<FiExternalLink size={16}/></a>
            </div>
          </div>
          <div className="project-n-btn">
            <div className="project-div" id="background-img4">
              o o o
              <h2 id="project-title">Concentration</h2>
              <h4>A memory game using vanilla Javascript </h4>
              <p>A memory game</p>
            </div>
            <div className="btn-container">
              <a href="https://github.com/jhuang15/concentration" className="project-btn" target="_blank" rel="noreferrer">Github<BsGithub size={16}/></a>
              <a href="https://jhuang15.github.io/concentration/" className="project-btn" target="_blank" rel="noreferrer">Live Demo<FiExternalLink size={16}/></a>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Portfolio