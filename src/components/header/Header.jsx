import React from 'react';
import NavBar from './NavBar';
import logo from '../../assets/images/logo.png';
import classes from './Header.module.css';

const Header = () => (
  <header>
    <div className={classes.logo}>
      <img src={logo} alt="logo" />
      <h1 className={classes.app_title}>Space Traveler&apos;s Hub</h1>
    </div>
    <NavBar />
  </header>
);

export default Header;
