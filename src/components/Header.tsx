import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarOilAndRopeTheme"
            aria-controls="navbarOilAndRopeTheme"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarOilAndRopeTheme">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="forms.html" className="nav-link" aria-current="page">
                  Forms &amp; Buttons
                </a>
              </li>
              <li className="nav-item">
                <a href="tables.html" className="nav-link" aria-current="page">
                  Tables
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
