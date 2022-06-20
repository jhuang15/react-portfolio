import React, {useEffect} from 'react';
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
        <div id="left-div">
        <button className="button" id="menu-btn" data-modal="modalOne">ooo</button>
        <Nav />
        <hr />
          <h1 id="project-title">Wedding Site Planner</h1>
          <h3>FULL-CRUD Web Application</h3>
          <p>describe the project, languages used, framework, functions, etc. </p>
          <div className="btn-container">
            <a href="https://github.com/jhuang15/mint" className="project-btn">Github</a>
            <a href="https://mint-wedding.herokuapp.com/" className="project-btn">Deployed Link</a>
          </div>
        </div>
        <div id="right-div">
          <div className="project-img" id="top">
              <hr id="flex-hr"/>
            <img className="img" src="https://i.imgur.com/I3GMZ2m.png" alt="project 1"></img>
          </div>
          <div className="project-img" id="bottom">
          <img className="img" src="https://i.imgur.com/5pL6YcY.png" alt="project 1"></img>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Portfolio