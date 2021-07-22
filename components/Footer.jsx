import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="apps-links">
        <li>
          <i class="fab fa-facebook-f"></i>
          <a href="#">Facebook</a>
        </li>
        <li>
          <i class="fab fa-youtube"></i>
          <a href="#">Youtube</a>
        </li>
        <li>
          <i class="fab fa-instagram"></i>
          <a href="#">Instagram</a>
        </li>
        <li>
          <i class="fab fa-linkedin"></i>
          <a href="#">LinkedIn</a>
        </li>
      </div>
      <div className="ads-links">
        <li>
          <a href="#">Business</a>
        </li>
        <li>
          <a href="#">Relation</a>
        </li>
        <li>
          <a href="#">Promotion</a>
        </li>
        <li>
          <a href="#">Helps</a>
        </li>
      </div>
    </div>
  );
}

export default Footer;
