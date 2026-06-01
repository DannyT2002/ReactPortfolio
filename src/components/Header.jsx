import React, { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Work' },
  { href: '#resume', label: 'Skills' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#hero" className="brand" onClick={close}>
          <span className="brand-mark">DT</span>
          Danny Torres
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={close}>
            Let's talk
          </a>
        </nav>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
};

export default Header;
