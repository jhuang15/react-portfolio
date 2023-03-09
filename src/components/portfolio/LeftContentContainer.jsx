export default function LeftContentContainer ({ hovNumber, setHovNumber}) {
  return (
    <section className="leftContainer">
        
        <div className="projectSelector">
        <h5 id="project-header">Take a peek at the projects I've built</h5>
        <div className={hovNumber === 1 ? "selected" : ""} onMouseOver={() => setHovNumber(1)}  >
          <div className="icon-div" id="icon-mint"></div>
          <div className="project-content-div">
            <h3>Mint</h3>
            <p>Simplify wedding planning by managing tasks and creating a sharable wedding site for guests</p>
          </div>
        </div>
        <div className={hovNumber === 2 ? "selected" : ""} onMouseOver={() => setHovNumber(2)}>
        <div className="icon-div" id="icon-onlycakes"></div>
          <div className="project-content-div">
            <h3>OnlyCakes</h3>
            <p>Upload and browse through your cake recipes on this blog-like web application</p>
          </div>
        </div>
        <div className={hovNumber === 3 ? "selected" : ""} onMouseOver={() => setHovNumber(3)}>
        <div className="icon-div" id="icon-bevo"></div>
          <div className="project-content-div">
            <h3>Bevo</h3>
            <p>Manage your beverage inventory as well as share information with colleagues about specific items.</p>
          </div>
        </div>
        {/* <div className={hovNumber === 4 ? "selected" : ""} onMouseOver={() => setHovNumber(4)}>
        <div className="icon-div" id="icon-concentration"></div>
          <div className="project-content-div">
            <h3>Concentration</h3>
            <p>Quick and easy game to stimulate your mind! Try to beat your time by matching colored cards faster </p>
          </div>
        </div> */}
        </div>  
      </section>

  );
}

