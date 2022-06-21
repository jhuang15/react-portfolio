import React, { useEffect } from 'react';
import Nav from '../nav/Nav';
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
    <div className="container" id="portfolio-container">
      <div className="content-row">
        <div id="project-div">
          o o o
          <hr />
          <h2 id="project-title">Wedding Site Planner</h2>
          <h3>MERN-Stack Web Application</h3>
          <p>Built a full-stack CRUD application on MERN stack using MongoDB, Express, React and Node.js to create, read update and delete data on a wedding website making application.describe the project, languages used, framework, functions, etc. </p>
          <div className="btn-container">
            <a href="https://github.com/jhuang15/mint" className="project-btn">Github</a>
            <a href="https://mint-wedding.herokuapp.com/" className="project-btn">Live Demo</a>
          </div>
        </div>
        <div id="project-div">
          o o o
          <hr />
          <h2 id="project-title">OnlyCakes</h2>
          <h3>Full-CRUD Django Web Application</h3>
          <p>Collaborated in a team to develope a web application with Django, Javascript and Python3 to implement full-stack CRUD functionalities. </p>
          <div className="btn-container">
            <a href="https://github.com/jhuang15/onlycakes" className="project-btn">Github</a>
            <a href="https://onlycakes.herokuapp.com/" className="project-btn">Live Demo</a>
          </div>
        </div>
      </div>
      <div className="content-row">
        <div id="project-div">
          o o o
          <hr />
          <h2 id="project-title">Inventory Tracker</h2>
          <h3>Full-CRUD application built using Express </h3>
          <p>An inventory tracker for a bar/restaurant. Performs full CRUD</p>
          <div className="btn-container">
            <a href="https://github.com/jhuang15/bevo" className="project-btn">Github</a>
            <a href="https://bevo-sei.herokuapp.com/" className="project-btn">Live Demo</a>
          </div>
        </div>
        <div id="project-div">
          o o o
          <hr />
          <h2 id="project-title">Concentration</h2>
          <h3>A memory game using vanilla Javascript </h3>
          <p>A memory game</p>
          <div className="btn-container">
            <a href="https://github.com/jhuang15/concentration" className="project-btn">Github</a>
            <a href="https://jhuang15.github.io/concentration/" className="project-btn">Live Demo</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio