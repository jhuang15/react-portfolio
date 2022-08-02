import React from 'react';
import { HiOutlineDocumentDownload } from "react-icons/hi";
import './about.css';

const About = () => {

  return (
    <div id="about-me">
      <div className="container-wrapper">
        <div className="left-container">
        </div>
        <div className="right-container">
          <div className="aboutme-content">
          <p className="dots">o o o</p>
            <h2 className="about-header">About Me</h2>
            <hr />
            <p className="about-text">Hi! My name is <b>Jenny Huang</b> and welcome to my portfolio! Here's a quick introduction about myself, I was born and raised in the silicon peach of <b>Atlanta, GA</b>. I graduated from <b>Georgia State University</b> with a bachelor's in computer science and recently completed an intense software engineering immersive course at <b>General Assembly</b>. I've always been interested in the field of technology and found I fit best in the middle of front-end and back-end development. My approach to life and code is simplicity at its finest: short and straight-forward code and minimalistic designs are my style.</p>
            <p className="about-text">Continue scrolling to view my projects ╰(*´︶`*)╯♡</p>
            <a className="resume-btn" href="https://docs.google.com/document/d/1K5kgY5MvR8RJ68tS_MTj94XXROdn0gFAKBlOSF-4A60/export?format=pdf" download>Resume <HiOutlineDocumentDownload size={25}/></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About