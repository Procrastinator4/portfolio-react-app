import React from "react";
import "./Resources.css";

function Resources() {
  return (
    <div className="main-resouces" id="resources">
      <h1>Resources</h1>
      <div className="resources">
        <div className="resources-card">
          <img src="../resources/thapa.jpeg" alt="thapa" />
          <h2>Thapa Technical</h2>
          <p>
            molestias reprehenderit deserunt voluptatem necessitatibus aperiam!
          </p>
        </div>
        <div className="resources-card">
          <img src="../resources/traversymedia.jpg" alt="brad" />
          <h2>Traversy Media</h2>
          <p>
            molestias reprehenderit deserunt voluptatem necessitatibus aperiam!
          </p>
        </div>
        <div className="resources-card">
          <img src="../resources/cleverprogrammer.jpg" alt="cleverprogrammer" />
          <h2>Clever Programmer</h2>
          <p>
            molestias reprehenderit deserunt voluptatem necessitatibus aperiam!
          </p>
        </div>
        <div className="resources-card">
          <img src="../resources/deved.jpg" alt="deved" />
          <h2>Thapa Technical</h2>
          <p>
            molestias reprehenderit deserunt voluptatem necessitatibus aperiam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resources;
