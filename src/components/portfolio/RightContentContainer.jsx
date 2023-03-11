import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export default function RightContentContainer ( {hovNumber} ) {

  return (
    <div className="outer-wrapper">
      <div className="projectList">

          <div className={hovNumber === 1 ? "selected" : ""}>
            <h1>Mint</h1>
            <h3>Wedding Planning made simple</h3>

            <div className="tools-wrapper">
              <div className="project-tools">HTML/CSS</div>
              <div className="project-tools">Javascript</div>
              <div className="project-tools">React</div>
              <div className="project-tools">Mongoose</div>
              <div className="project-tools">Express</div>
              <div className="project-tools">Node.js</div>
            </div>

            <div className="img-container">
              <img className="project-img" src="https://i.imgur.com/I3GMZ2m.png" alt="Screenshot of Mint Website"/>
              <img className="project-img" src="https://i.imgur.com/t8YMXk7.png" atl="Screenshot of Signup Page" />
            </div>
            
            <div className="btn-container">
              <a className="project-btn" id="github-btn" href="https://github.com/jhuang15/mint" target="_blank" rel="noopener noreferrer">GitHub <BsGithub size={16}/></a>
              <a className="project-btn" id="demo-btn" href="https://mint.up.railway.app/" target="_blank" rel="noopener noreferrer">Live Demo <FiExternalLink size={16}/></a>
            </div>
            
          </div>

          <div className={hovNumber === 2 ? "selected" : ""}>
            <h1>OnlyCakes</h1>
            <h3>All your favorite cake recipes here</h3>
            <div className="tools-wrapper">
              <div className="project-tools">HTML/CSS</div>
              <div className="project-tools">Python</div>
              <div className="project-tools">Django</div>
              <div className="project-tools">PostgreSQL</div>
              <div className="project-tools">Bootstrap</div>
            </div>

            <div className="img-container">
              <img className="project-img" src="https://i.imgur.com/9hPGl8I.jpg" alt="Screenshot of all cake recipes"/>
              <img className="project-img" src="https://i.imgur.com/vGMYNBk.jpg" atl="Screenshot of search results" />
            </div>
            
            <div className="btn-container">
              <a className="project-btn" id="github-btn" href="https://github.com/jhuang15/onlycakes" target="_blank" rel="noopener noreferrer">GitHub <BsGithub size={16}/></a>
              <a className="project-btn" id="demo-btn" href="https://onlycakes.up.railway.app/" target="_blank" rel="noopener noreferrer">Live Demo <FiExternalLink size={16}/></a>
            </div>
            
          </div>  


          <div className={hovNumber === 3 ? "selected" : ""}>
            <h1>Bevo</h1>
            <h3>Store and manage beverage inventory</h3>
            <div className="tools-wrapper">
              <div className="project-tools">HTML/CSS</div>
              <div className="project-tools">Javascript</div>
              <div className="project-tools">Mongoose</div>
              <div className="project-tools">Express</div>
              <div className="project-tools">MongoDB</div>
              <div className="project-tools">Node.js</div>
            </div>

            <div className="img-container">
              <img className="project-img" src="https://i.imgur.com/rzMc4Rr.png" alt="Screenshot of specific item page"/>
              <img className="project-img" src="https://i.imgur.com/zDXYpDo.png" atl="Screenshot of all inventory" />
            </div>
            
            <div className="btn-container">
              <a className="project-btn" id="github-btn" href="https://github.com/jhuang15/bevo" target="_blank" rel="noopener noreferrer">GitHub <BsGithub size={16}/></a>
              <a className="project-btn" id="demo-btn" href="" target="_blank" rel="noopener noreferrer">Live Demo <FiExternalLink size={16}/></a>  
            </div>
            
          </div> 

          <div className={hovNumber === 4 ? "selected" : ""}>
            <h1>Concentration</h1>
            <h3>A memory game</h3>
            <a className="project-btn" id="github-btn" href="https://github.com/jhuang15/concentration" target="_blank" rel="noopener noreferrer">GitHub <BsGithub size={16}/></a>
            <a className="project-btn" id="demo-btn" href="https://jhuang15.github.io/concentration/" target="_blank" rel="noopener noreferrer">Live Demo <FiExternalLink size={16}/></a>
          </div> 

      </div>
    </div>
  );
}