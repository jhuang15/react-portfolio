import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div id="modalOne" className="modal">
      <div className="modal-content">
        <div className="contact-form">
          <span className="close">&otimes;</span>
          <h3>Menu</h3>
        </div>
      </div>
    </div>
  )
}

export default Nav