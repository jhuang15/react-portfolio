import React, { useEffect, useState} from 'react';
import LeftContentContainer from './LeftContentContainer';
import RightContentContainer from './RightContentContainer';
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

  const [hovNumber, setHovNumber] = useState(1);

  return (
    <div className="projectContainer">
      <LeftContentContainer hovNumber={hovNumber} setHovNumber={setHovNumber} />
      <RightContentContainer hovNumber={hovNumber} />
      <div id="clear"> </div> 
    </div>

  )
}

export default Portfolio