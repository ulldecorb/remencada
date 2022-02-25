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
        <Link className="navbar__link" to="../">Home</Link>
        <Link className="navbar__link" to="../quisom">QUI SOM</Link>
        <Link className="navbar__link" to="../historia">HISTÒRIA</Link>
        <Link className="navbar__link" to="../gallery">GALERIA</Link>
        <Link className="navbar__link" to="../map">CONTACTE</Link>
        <a className="navbar__link" href="https://www.facebook.com/LaRemencadaMontornesDelValles/?eid=ARDPw32Mi1Ax-07H6g-b-MFtaoIWj1KXvMjr6qZVI-efuyQKnl16FMf3ueA3-D0WpVP7kyK01Wa7XH_N" target="_blank" rel="noreferrer">
          <figure className="navbar__link-icon navbar__link-icon--facebook" />
          {/* <img src="../../assets/facebook-3.svg" alt="facebook remençada" /> */}
        </a>
        <a className="navbar__link" href="https://www.instagram.com/laremencada/" target="_blank" rel="noreferrer">
          <figure className="navbar__link-icon navbar__link-icon--instagram" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
