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
    <div className="projectContainer">
      <div className="leftContainer">
        <h5 id="project-header">Take a peek at the projects I've built</h5>
        <div className="project-div" id="proj1">
          <div className="icon-div" id="icon-mint"></div>
          <div className="project-content-div">
            <h3>Mint</h3>
            <p>Simplify wedding planning by managing tasks and creating a sharable wedding site for guests</p>

          </div>
        </div>
        <div className="project-div" id="proj2">
        <div className="icon-div" id="icon-onlycakes"></div>
          <div className="project-content-div">
            <h3>OnlyCakes</h3>
            <p>Upload and browse through your cake recipes on this blog-like web application</p>
          </div>
        </div>
        <div className="project-div" id="proj3">
        <div className="icon-div" id="icon-bevo"></div>
          <div className="project-content-div">
            <h3>Bevo</h3>
            <p>Manage your beverage inventory as well as share information with colleagues about specific items.</p>
          </div>
        </div>
        <div className="project-div" id="proj4">
        <div className="icon-div" id="icon-concentration"></div>
          <div className="project-content-div">
            <h3>Concentration</h3>
            <p>Quick and easy game to stimulate your mind! Try to beat your time by matching colored cards faster </p>
          </div>
        </div>

      </div>
      <div className="rightContainer">
        <img className="project-img" src="https://i.imgur.com/I3GMZ2m.png" alt="Screenshot of Mint Website"/>
        <a className="project-btn" id="github-btn" href="https://github.com/jhuang15/mint" target="_blank">GitHub <BsGithub size={16}/></a>
        <a className="project-btn" id="demo-btn" href="https://mint.up.railway.app/" target="_blank">Live Demo <FiExternalLink size={16}/></a>
      </div>
      <div id="clear"> </div>
    </div>

  )
}

export default Portfolio