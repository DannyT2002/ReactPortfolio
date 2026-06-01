import React, { useEffect, useState } from 'react';

const links = [
  { href: '#about', n: '01', label: 'About' },
  { href: '#work', n: '02', label: 'Work' },
  { href: '#capabilities', n: '03', label: 'Skills' },
  { href: '#contact', n: '04', label: 'Contact' },
];

const Clock = () => {
  const [now, setNow] = useState('');
  useEffect(() => {
    const tick = () =>
      setNow(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="topbar__clock">
      <span className="live" /> Local — {now}
    </span>
  );
};

const Header = () => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`topbar ${solid ? 'solid' : ''}`}>
      <div className="shell topbar__inner">
        <a href="#top" className="topbar__brand" onClick={close}>
          Danny&nbsp;Torres <span className="tm">DEV</span>
        </a>

        <nav className={`topbar__nav ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              <span className="n">{l.n}</span> {l.label}
            </a>
          ))}
        </nav>

        <Clock />

        <button
          className={`burger ${open ? 'open' : ''}`}
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
