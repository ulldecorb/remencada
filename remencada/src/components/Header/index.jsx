import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = function Header() {
  return (
    <header className="header">
      <Link to="../">
        <h1 className="header__title">LA REMENÇADA</h1>
      </Link>
      <nav className="header__navbar">
        <Link classname="navbar__link" to="../quisom">QUI SOM</Link>
        <Link classname="navbar__link" to="../historia">HISTÒRIA</Link>
        <Link classname="navbar__link" to="../map">CONTACTE</Link>
      </nav>
    </header>
  );
};

export default Header;
