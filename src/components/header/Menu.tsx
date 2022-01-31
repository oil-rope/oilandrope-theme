import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuPropTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

type MenuTypes = InferProps<typeof MenuPropTypes>;
const Menu: FC<MenuTypes> = ({ menus }) => {
  return (
    <ul className="navbar-nav">
      {menus.map((menu, index) => {
        return (
          <li key={index} className="nav-item">
            <NavLink
              to={`${menu.link}`}
              className={`nav-link ${(isActive: boolean) =>
                isActive ? '' : 'active'}`}
              aria-current="page"
            >
              {menu.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

Menu.propTypes = MenuPropTypes;

export default Menu;
