import React from 'react';
import Project from './Project';

const projects = [
  { title: 'Project 1', image: 'project1.png', deployedLink: 'https://project1.com', repoLink: 'https://github.com/yourusername/project1' },
  // Add other projects here
];

const Portfolio = () => (
  <section id="portfolio">
    {projects.map(project => (
      <Project key={project.title} {...project} />
    ))}
  </section>
);

export default Portfolio;
