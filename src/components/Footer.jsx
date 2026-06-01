import React from 'react';

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <p>© {new Date().getFullYear()} Danny Torres · Built with React &amp; Vite</p>
      <div className="social">
        <a href="https://github.com/DannyT2002" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
        <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">IN</a>
        <a href="mailto:torres.daniel.0827@gmail.com" aria-label="Email">@</a>
      </div>
    </div>
  </footer>
);

export default Footer;
