import React from 'react';
import './about.css';

const About = () => {

  return (
    <div id="about-me">
      <div className="container-wrapper">
        <div className="right-container">
          <div className="aboutme-content">
            <div className="about-header">About me</div>
            <div className="about-text">Hi! My name is <b>Jenny Huang</b> and welcome to my portfolio! Here's a quick introduction about myself
            I have a bachelor's in computer sciences from Georgia State University with an interest in software development. 
            I recently completed General Assembly's software engineering immersive program to further improve and enhance my skills. 
            Through that experience, I've improved my skills in the fundamentals of web development (html, css, javascript), working individually and collaboratively as well as gaining skills in React, debugging and troubleshooting problems--all of which helped me find my passion in application development. 
            I'm passionate about web development because I am very crafty and hands-on outside of work so I believe that software development allows me to have the best of both worlds. 
            I've always been interested in the field of technology and found I fit best in the middle of front-end and back-end development. 
             My approach to life and code is simplicity at its finest: short and straight-forward code and minimalistic designs are my style.
             </div>
            {/* <a className="resume-btn" href="https://docs.google.com/document/d/1K5kgY5MvR8RJ68tS_MTj94XXROdn0gFAKBlOSF-4A60/export?format=pdf" download>Resume <HiOutlineDocumentDownload size={25}/></a> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default About