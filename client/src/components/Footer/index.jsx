import React from 'react';
import './Footer.css';

export const Footer = function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <figure className="footer__icon footer__ajuntament-icon" alt="henkel icon" />
        <figure className="footer__icon footer__henkel-icon" alt="henkel icon" />
        <figure className="footer__icon footer__corte-ingles-icon" alt="corte ingles icon" />
        <figure className="footer__icon footer__lucta-icon" alt="lucta icon" />
      </div>
    </footer>
  );
};

export default Footer;
