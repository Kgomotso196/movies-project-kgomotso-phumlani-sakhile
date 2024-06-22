// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="credits-list">
          <li>
            <strong>Pumlani Kewana</strong> - 
            <a href="https://github.com/Pumlanikewana" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
            <a href="https://linkedin.com/in/pumlani-kewana-58047515b" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </li>
          <li>
            <strong>Kgomotso Nacane</strong> - 
            <a href="https://github.com/Kgomotso196" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
            <a href="https://linkedin.com/in/kgomotso-nacane/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </li>
          <li>
            <strong>Sakhile Motha</strong> - 
            <a href="https://github.com/KhileM" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
            <a href="https://linkedin.com/in/sakhile-motha-033264167" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
