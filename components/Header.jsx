import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">Portfolio</a>
        </div>
        <div className="nav-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#mastery">Mastery</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
        </div>
      </nav>
    </header>
  );
}

export default Header;
