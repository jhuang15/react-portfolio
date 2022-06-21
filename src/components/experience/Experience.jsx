import React, {useEffect} from 'react';
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
    <div className="container" id="skills-container">
      <p>skills</p>
      <button className="button" id="menu-btn" data-modal="modalOne">ooo</button>
      <Nav />
      <p>HTML, CSS, JavaScript, Python, Java, Django, Express, React, SQL, Android, Git, Agile Methodology, Bootstrap</p>
    </div>
  )
}

export default Experience
