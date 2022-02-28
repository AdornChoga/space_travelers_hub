import React from 'react';

import classes from './Header.module.css';

const NavBar = () => (
  <nav className="navbar">
    <ul className={classes.nav_list}>
      <li className={classes.nav_item}>Rockets</li>
      <li className={classes.nav_item}>Missions</li>
      <li className={classes.nav_item}>My Profile</li>
    </ul>
  </nav>
);

export default NavBar;
