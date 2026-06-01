import React from 'react';
import Project from './Project';
import useReveal from '../hooks/useReveal';

const projects = [
  {
    title: 'Note Taker',
    description: 'A full-stack app to write, save, and manage notes with a clean, persistent interface.',
    image: '/assets/noteTakerImageForPortfolio.jpg',
    tags: ['Node.js', 'Express', 'JavaScript'],
    deployedLink: 'https://note-taker-h3av.onrender.com/',
    repoLink: 'https://github.com/DannyT2002/note-taker',
  },
  {
    title: 'Portfolio Site',
    description: 'This very portfolio — a modern, animated React single-page app with a dark UI.',
    image: '/assets/My Portfolio 1-3.png',
    tags: ['React', 'Vite', 'CSS'],
    deployedLink: 'https://reactportfolio-7lw8.onrender.com/',
    repoLink: 'https://github.com/DannyT2002/reactportfolio',
  },
  {
    title: 'UI Showcase',
    description: 'A collection of responsive interface explorations and component design studies.',
    image: '/assets/My Portfolio 2-3.png',
    tags: ['UI/UX', 'React', 'Design'],
    repoLink: 'https://github.com/DannyT2002',
  },
  {
    title: 'Mobile Concepts',
    description: 'Cross-platform mobile prototypes exploring native-feeling layouts and flows.',
    image: '/assets/My Portfolio 3-3.png',
    tags: ['SwiftUI', 'Flutter', 'Mobile'],
    repoLink: 'https://github.com/DannyT2002',
  },
];

const Portfolio = () => {
  const head = useReveal();
  const grid = useReveal({ stagger: 90 });

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div ref={head}>
          <p className="section-eyebrow">Work</p>
          <h2 className="section-title">Selected <span className="grad">projects</span></h2>
          <p className="section-lead">
            A few things I've built — from full-stack web apps to interface and
            mobile explorations.
          </p>
        </div>
        <div className="projects-grid" ref={grid}>
          {projects.map((p) => (
            <Project key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
