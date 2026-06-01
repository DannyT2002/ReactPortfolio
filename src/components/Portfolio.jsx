import React, { useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';

const projects = [
  {
    title: 'Note Taker',
    role: 'Full-stack',
    year: '2024',
    image: '/assets/noteTakerImageForPortfolio.jpg',
    href: 'https://note-taker-h3av.onrender.com/',
  },
  {
    title: 'Portfolio',
    role: 'Design + Build',
    year: '2026',
    image: '/assets/My Portfolio 1-3.png',
    href: 'https://reactportfolio-7lw8.onrender.com/',
  },
  {
    title: 'UI Studies',
    role: 'Interface',
    year: '2025',
    image: '/assets/My Portfolio 2-3.png',
    href: 'https://github.com/DannyT2002',
  },
  {
    title: 'Mobile Concepts',
    role: 'SwiftUI · Flutter',
    year: '2025',
    image: '/assets/My Portfolio 3-3.png',
    href: 'https://github.com/DannyT2002',
  },
];

const Portfolio = () => {
  const reveal = useReveal();
  const previewRef = useRef(null);
  const [active, setActive] = useState(null);

  // Move the floating preview with the cursor (direct DOM writes, no re-render).
  const handleMove = (e) => {
    const el = previewRef.current;
    if (!el) return;
    el.style.setProperty('--x', `${e.clientX}px`);
    el.style.setProperty('--y', `${e.clientY}px`);
  };

  return (
    <section id="work" className="section shell">
      <div ref={reveal}>
        <div className="chapter">
          <span className="idx">02</span>
          <span className="ttl">Selected Work</span>
        </div>

        <ul
          className="work__list"
          onMouseMove={handleMove}
          onMouseLeave={() => setActive(null)}
        >
          {projects.map((p, i) => (
            <li
              key={p.title}
              className="work__row"
              onMouseEnter={() => setActive(i)}
            >
              <a className="stretch" href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.title} />
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <span className="title">{p.title}</span>
              <span className="role">{p.role}</span>
              <span className="year">{p.year}</span>
              <span className="go">↗</span>
              <span className="work__row-img">
                <img src={p.image} alt={p.title} loading="lazy" />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={previewRef}
        className={`work__preview ${active !== null ? 'show' : ''}`}
        aria-hidden="true"
      >
        {active !== null && (
          <>
            <img src={projects[active].image} alt="" />
            <span className="cap">{projects[active].title} — {projects[active].year}</span>
          </>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
