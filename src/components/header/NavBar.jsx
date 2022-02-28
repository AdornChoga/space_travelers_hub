import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];
  return (
    <nav className="navbar">
      <ul className={classes.nav_list}>
        {
          links.map((link) => (
            <li key={link.id} className={classes.nav_item}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default NavBar;
