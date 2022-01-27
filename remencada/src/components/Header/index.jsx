import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = function Header() {
  return (
    <header className="header">
      <h1 className="header__title">LA REMENÇADA</h1>
      <nav className="header__navbar">
        <Link to="../">HOME</Link>
        <Link to="../historia">HISTÒRIA</Link>
        <Link to="../quisom">QUI SOM</Link>
        <Link to="../map">CONTACTE</Link>
      </nav>
    </header>
  );
};

export default Header;
