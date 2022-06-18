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
    <div>
      <p>Portfolio</p>
      <button className="button" id="menu-btn" data-modal="modalOne">ooo</button>
      <Nav />
    </div>
  )
}

export default Portfolio