import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
      <div className="navbar-container">
        
        <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="favicon"/>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <h1 class="display-6">InvestiGators</h1>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/stockpage"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              StockPage
            </Link>
          </li>
        </ul>
      </div>
  );
}

export default Navbar;
