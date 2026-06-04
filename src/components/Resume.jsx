import React from 'react';
import useReveal from '../hooks/useReveal';

const caps = [
  { k: 'Front-end', d: 'React · Vite · ES6+ · TypeScript' },
  { k: 'Mobile', d: 'SwiftUI · Flutter' },
  { k: 'Back-end', d: '.NET Core · Node.js' },
  { k: 'Data', d: 'SQL Server · PostgreSQL' },
  { k: 'Design', d: 'UI/UX · Responsive · Accessible' },
];

const Resume = () => {
  const reveal = useReveal();

  return (
    <section id="capabilities" className="section shell">
      <div ref={reveal}>
        <div className="chapter">
          <span className="idx">03</span>
          <span className="ttl">Capabilities</span>
        </div>

        <ul className="caps">
          {caps.map((c, i) => (
            <li key={c.k}>
              <span className="ci">{String(i + 1).padStart(2, '0')}</span>
              <span className="ck">{c.k}</span>
              <span className="cd">{c.d}</span>
            </li>
          ))}
        </ul>

        <div className="caps-foot">
          <a className="btn-line" href="/DanielTorres-Resume2026.pdf" download>
            Download résumé ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
