import React from 'react';
import NavBar from './NavBar';
import logo from '../../assets/images/logo.png';

const Header = () => (
  <>
    <div>
      <img src={logo} alt="logo" />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
    <NavBar />
  </>
);

export default Header;
