import React from 'react';
import useReveal from '../hooks/useReveal';

const skills = [
  { ico: '📱', name: 'Mobile Development', detail: 'SwiftUI · Flutter' },
  { ico: '⚛️', name: 'React', detail: 'Hooks · SPA · Vite' },
  { ico: '🗄️', name: 'Databases', detail: 'SQL Server · Postgres' },
  { ico: '⚙️', name: 'Backend', detail: '.NET Core · Node.js' },
  { ico: '🎨', name: 'UI / UX Design', detail: 'Responsive · Accessible' },
  { ico: '🧩', name: 'JavaScript', detail: 'ES6+ · TypeScript' },
];

const Resume = () => {
  const head = useReveal();
  const grid = useReveal({ stagger: 70 });

  return (
    <section id="resume" className="section">
      <div className="container">
        <div ref={head}>
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">What I <span className="grad">work with</span></h2>
          <p className="section-lead">
            A toolkit spanning front-end, back-end, mobile, and design — built to
            ship complete products end to end.
          </p>
        </div>

        <div className="skills-grid" ref={grid}>
          {skills.map((s) => (
            <div className="skill" key={s.name}>
              <div className="ico">{s.ico}</div>
              <h4>{s.name}</h4>
              <p>{s.detail}</p>
            </div>
          ))}
        </div>

        <a className="btn btn-primary" href="/DanielTorres-Resume.pdf" download>
          ⬇ Download résumé
        </a>
      </div>
    </section>
  );
};

export default Resume;
