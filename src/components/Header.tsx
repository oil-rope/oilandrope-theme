import React, { FC } from 'react';

import Menu from '@Components/header/Menu';

import { MENUS } from '@/OARConstants';

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
            <Menu menus={MENUS} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
