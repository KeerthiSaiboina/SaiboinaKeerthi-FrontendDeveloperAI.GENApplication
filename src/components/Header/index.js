import React from "react";

import "./index.css";

const Header = () => {
  return (
    <>
      <nav className="header-container-desktop-view">
        <div className="left-items">
          <h1 className="nav-heading">A I .G E N</h1>
          <ul className="nav-items-conatiner">
            <li className="list-item">Features</li>
            <li className="list-item">Roadmap</li>
            <li className="list-item">Tokenomics</li>
          </ul>
        </div>
        <div className="right-items">
          <button className="btn-1">Whitepaper</button>
          <button className="btn-2">Get Started</button>
        </div>
      </nav>

      <nav className="header-container-moblie-view">
        <div className="left-items">
          <h1 className="nav-heading">A V A T A R. A I</h1>
        </div>
        <div className="right-items">
          <button className="btn">
            <ul className="nav-items-conatiner">
              <li className="list-item">Features</li>
              <li className="list-item">Roadmap</li>
              <li className="list-item">Tokenomics</li>
            </ul>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
