import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="shell">
      <div className="footer__top">
        <div className="footer__col">
          <span className="footer__k">Index</span>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#capabilities">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer__col">
          <span className="footer__k">Elsewhere</span>
          <a href="https://github.com/DannyT2002" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="mailto:torres.daniel.0827@gmail.com">Email ↗</a>
        </div>
        <div className="footer__col">
          <span className="footer__k">Colophon</span>
          <span style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem' }}>Fraunces · JetBrains Mono</span>
          <span style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem' }}>React · Vite</span>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Danny Torres</span>
        <span>Designed &amp; built from scratch</span>
      </div>
    </div>
  </footer>
);

export default Footer;
