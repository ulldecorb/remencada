import React from 'react';
import './Footer.css';

export const Footer = function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="list__anchor">AJUNTAMENT</li>
        <li className="list__anchor">HENKEL</li>
        <li className="list__anchor">EL CORTE INGLES</li>
        <li className="list__anchor">LUCTA</li>
      </ul>
    </footer>
  );
};

export default Footer;
