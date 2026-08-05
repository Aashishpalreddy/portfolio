import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__name">Aashishpal Reddy Kandala</span>
            <span className="footer__tagline">Generative AI Engineer · ML Engineer · Software Engineer</span>
          </div>
          <div className="footer__links">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aashishpalsai1111@gmail.com" target="_blank" rel="noopener noreferrer" className="footer__link">Email</a>
            <span className="footer__dot" aria-hidden="true"></span>
            <a href="https://github.com/Aashishpalreddy" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
            <span className="footer__dot" aria-hidden="true"></span>
            <a href="https://www.linkedin.com/in/aashishpal-reddy-kandala-45118b28b" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            {year} Aashishpal Reddy Kandala. Built with React.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
