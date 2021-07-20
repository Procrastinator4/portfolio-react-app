import React from "react";
import "./Mastery.css";

function Mastery() {
  return (
    <div className="mastery-main-section" id="mastery">
      <h1>Mastery</h1>
      <div className="mastery">
        <div className="card">
          <img src="../resources/html.svg" alt="html" />
          <h2>HTML</h2>
        </div>
        <div className="card">
          <img src="../resources/csss.svg" alt="css" />
          <h2>CSS</h2>
        </div>
        <div className="card">
          <img src="../resources/javascript.svg" alt="javascript" />
          <h2>JAVASCRIPT</h2>
        </div>
        <div className="card">
          <img src="../resources/mongodb.svg" alt="mongo" />
          <h2>MONGO DB</h2>
        </div>
        <div className="card">
          <img src="../resources/nextjs.svg" alt="nextjs" />
          <h2>NEXT JS</h2>
        </div>
        <div className="card">
          <img src="../resources/nodejs.svg" alt="nodejs" />
          <h2>NODE JS</h2>
        </div>
        <div className="card">
          <img src="../resources/reactjs.svg" alt="reactjs" />
          <h2>REACT JS</h2>
        </div>
        <div className="card">
          <img src="../resources/sass.svg" alt="sass" />
          <h2>SASS</h2>
        </div>
        <div className="card">
          <img src="../resources/tailwind.svg" alt="tailwind" />
          <h2>TAILWIND CSS</h2>
        </div>
      </div>
    </div>
  );
}

export default Mastery;
