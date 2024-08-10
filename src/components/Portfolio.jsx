import React from "react";
import Project from "./Project";

const projects = [
  { 
    title: 'Note Taker', 
    image: '/assets/noteTakerImageForPortfolio.jpg',  // Absolute path from the public directory
    deployedLink: 'https://note-taker-h3av.onrender.com/', 
    repoLink: 'https://github.com/DannyT2002/note-taker' 
  },
  // Add other projects here
];

const Portfolio = () => (
  <section id="portfolio">
    {projects.map((project) => (
      <Project key={project.title} {...project} />
    ))}
  </section>
);

export default Portfolio;
