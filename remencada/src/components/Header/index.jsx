import React from 'react';
import './Header.css';

export const Header = function Header() {
  return (
    <header className="header">
      <h1 className="header__title">LA REMENÇADA</h1>
      <nav className="header__navbar">
        <ul className="navbar">
          <li className="navbar__home">
            <a href="http://www.laremencada.cat/" className="home__anchor">la remençada</a>

          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
