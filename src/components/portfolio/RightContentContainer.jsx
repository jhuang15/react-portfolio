import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export default function RightContentContainer ( {hovNumber} ) {

  return (
    <div className="outer-wrapper">
      <div className="projectList">
        
          <div className={hovNumber === 1 ? "selected" : ""}>
            <img className="project-img" src="https://i.imgur.com/I3GMZ2m.png" alt="Screenshot of Mint Website"/>
            <a className="project-btn" id="github-btn" href="https://github.com/jhuang15/mint" target="_blank" rel="noopener noreferrer">GitHub <BsGithub size={16}/></a>
            <a className="project-btn" id="demo-btn" href="https://mint.up.railway.app/" target="_blank" rel="noopener noreferrer">Live Demo <FiExternalLink size={16}/></a>
          </div>

          <div className={hovNumber === 2 ? "selected" : ""}>
            <p>This is project two div</p>
          </div>  


          <div className={hovNumber === 3 ? "selected" : ""}>
            <p>This is project THREEEEE div</p>
          </div> 

      </div>
    </div>
  );
}