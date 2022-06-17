import React from 'react';
import useState from 'react';
import About from '../about/About';
import Experience from '../experience/Experience';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import './header.css';

const Header = () => {
  const [showPage, setShowPage] = useState(false);

  const handleClick = event => {
    setShowPage(true);
  };

  return (
    <div className="container">
      <div className="div-row">
        <div className="table-of-content">
          <div className="name">
            <h1 id="first">Jenny</h1>
            <h1 id="last">Huang</h1>
          </div>
          
          <div className="content-btns">
            <hr />
            <button onClick={handleClick}>about me</button>
            {showPage && (<About />)}
            <button onClick={handleClick}>experience</button>
            <Experience />
            <button onClick={handleClick}>portfolio</button>
            <Portfolio />
            <button onClick={handleClick}>contact me</button>
            <Contact />
          </div>
        </div>
        <div className="div-column">
          <div className="header-corner"> 
            <h4>Jenny Huang</h4>
            <p>SOFTWARE ENGINEER</p>
            <p>FULL-STACK ENGINEER</p>
          </div> 
          <div className="head-photo">
            <p>***PROFILE IMG HERE**</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header